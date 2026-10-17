#!/usr/bin/env python3
"""Dive Club catalog search layer.

Digests (club/DIGEST-*.md) and raw transcripts (club/<date>-<slug>.md) are the
source of truth. This script builds a DISPOSABLE index (SQLite FTS5 + local
embedding vectors) outside the vault and queries it with BM25 + vectors fused
by reciprocal rank fusion.

    dive-index  [--sync | --rebuild | --stats]
    dive-search "query" [--guest ..] [--year ..] [--tag ..] [--flag ..] [--takeaways] [-n 10]

Only indexed text is ever printed. Nothing is generated or paraphrased.
"""
from __future__ import annotations

import argparse
import hashlib
import json
import os
import re
import sqlite3
import sys
import time
from pathlib import Path

PARSER_VERSION = 6                      # bump when parsing/chunking logic changes (forces rebuild)
MODEL_NAME = "BAAI/bge-small-en-v1.5"   # local, free, 384-dim (fastembed / ONNX, CPU)
QUERY_PREFIX = "Represent this sentence for searching relevant passages: "
EMBED_MAX_CHARS = 1800
WINDOW_SECS = 75        # raw transcript window length
WINDOW_STEP = 60        # => ~15s overlap
RRF_K = 60
POOL = 250              # candidates per retriever

SCRIPT_DIR = Path(__file__).resolve().parent
REPO = Path(os.environ.get("DIVE_REPO", SCRIPT_DIR.parent.parent)).resolve()
CLUB = REPO / "club"
INDEX_DIR = Path(os.environ.get("DIVE_INDEX_DIR", "/workspace/dive-index"))
DB_PATH = INDEX_DIR / "dive.db"
MODEL_CACHE = INDEX_DIR / "models"

DEFAULT_KINDS = ("summary", "evidence", "section", "quote", "takeaway", "window")
GRANOLA_ORIGINS = ("typed", "granola-generated", "granola-notes", "granola-description")
ORIGIN_LABEL = {
    "typed": "Ridd's typed takeaway (Granola)",
    "granola-generated": "Granola summary takeaway (generated)",
    "granola-notes": "Granola Editing-note takeaway",
    "granola-description": "Granola description line",
    "descript-spine": "working takeaway from Descript markers (not Granola)",
    "notion-scratchpad": "working takeaway from Notion scratchpad (not Granola)",
    "unknown": "takeaway (origin unlabeled)",
    "marker": "section marked Gold=takeaway",
}

# --------------------------------------------------------------------------- parsing helpers

TS_ANY = re.compile(r"(\d{1,2}):(\d{2})(?::(\d{2}))?")
TS_RAW = re.compile(r"\[(\d{1,2}):(\d{2})(?::(\d{2}))?\]")


def to_sec(a: str, b: str, c: str | None, mode: str) -> int:
    a, b = int(a), int(b)
    if c is not None:
        return a * 3600 + b * 60 + int(c)
    return a * 3600 + b * 60 if mode == "hm" else a * 60 + b


def fmt_ts(sec: int | None) -> str:
    if sec is None:
        return "--:--"
    h, r = divmod(int(sec), 3600)
    m, s = divmod(r, 60)
    return f"{h}:{m:02d}:{s:02d}" if h else f"{m:02d}:{s:02d}"


def deep_link(yid: str, sec: int | None) -> str:
    base = f"https://www.youtube.com/watch?v={yid}"
    return base if sec is None else f"{base}&t={int(sec)}s"


def parse_frontmatter(text: str) -> tuple[dict, str]:
    m = re.match(r"\A---[ \t]*\n(.*?)\n---[ \t]*\n?", text, re.S)
    if not m:
        return {}, text
    fm: dict = {}
    for line in m.group(1).split("\n"):
        mm = re.match(r"^([A-Za-z_][\w-]*):\s*(.*)$", line)
        if not mm:
            continue
        k, v = mm.group(1), mm.group(2).strip()
        if v.startswith("[") and v.endswith("]"):
            fm[k] = [x.strip().strip("'\"") for x in v[1:-1].split(",") if x.strip()]
        else:
            fm[k] = v.strip().strip("'\"") if v[:1] in "'\"" and v[-1:] == v[:1] else v
    return fm, text[m.end():]


def split_sections(body: str) -> dict[str, str]:
    out: dict[str, str] = {}
    cur = None
    buf: list[str] = []
    for line in body.split("\n"):
        m = re.match(r"^##\s+(?!\[)(.+?)\s*$", line)
        if m:
            if cur is not None:
                out[cur] = "\n".join(buf)
            cur = m.group(1).lower()
            buf = []
        elif cur is not None:
            buf.append(line)
    if cur is not None:
        out[cur] = "\n".join(buf)
    return out


def sec_get(secs: dict[str, str], prefix: str) -> str:
    for k, v in secs.items():
        if k.startswith(prefix):
            return v
    return ""


def split_long(text: str, limit: int = 1200) -> list[str]:
    text = text.strip()
    if len(text) <= limit:
        return [text]
    sents = re.split(r"(?<=[.?!;])\s+(?=[A-Z*\"“(])", text)
    out, cur = [], ""
    for s in sents:
        if cur and len(cur) + len(s) + 1 > limit:
            out.append(cur.strip())
            cur = s
        else:
            cur = f"{cur} {s}".strip()
    if cur:
        out.append(cur.strip())
    final = []
    for o in out:  # hard-split pathological sentences
        while len(o) > limit * 1.5:
            cut = o.rfind(" ", 0, limit)
            cut = cut if cut > 200 else limit
            final.append(o[:cut].strip())
            o = o[cut:].strip()
        final.append(o)
    return [f for f in final if f]


class Chunk(dict):
    """Plain dict with defaults: src, kind, ts_sec, topic, text, gold, is_takeaway, tk_origin, speaker, segs."""


def mk(src, kind, text, ts=None, topic="", gold="", is_takeaway=0, tk_origin="", speaker="", segs=None) -> Chunk:
    return Chunk(src=src, kind=kind, text=text.strip(), ts_sec=ts, topic=topic.strip(), gold=gold,
                 is_takeaway=is_takeaway, tk_origin=tk_origin, speaker=speaker, segs=segs)


# --------------------------------------------------------------------------- digest parser

def digest_ts_mode(table_text: str, row_re: str = r"^\|\s*(\d{1,2}):(\d{2}|xx)(?::(\d{2}))?") -> str:
    """Timecodes appear as HH:MM:SS, MM:SS or (older digests) HH:MM. Decide per table: a 2-part
    timecode whose first field reaches >=10 can only be MM:SS; otherwise it is HH:MM."""
    two = []
    for line in table_text.split("\n"):
        m = re.match(row_re, line)
        if m and m.group(3) is None:
            two.append(int(m.group(1)))
    return "ms" if two and max(two) >= 10 else "hm"


def classify_takeaway_line(line: str, cur: str) -> str:
    s = line.strip()
    low = s.lower()
    if s.startswith("**") and "typed" in low:
        return "typed"
    if "granola summary" in low and s.startswith("**"):
        return "granola-generated"
    if "descript-marker spine" in low:
        return "descript-spine"
    if re.search(r"granola-weak|no granola|not found|granola-absent|^\(none|no formal|scratchpad|notion", low):
        return "notion-scratchpad"
    if low.startswith("description (same note"):
        return "granola-description"
    if re.search(r"from granola|primary gold|granola editing notes|^source:|editing granola|granola note", low):
        return "granola-notes"
    return cur


def parse_takeaways(sec: str) -> list[Chunk]:
    chunks: list[Chunk] = []
    origin = "unknown"
    subtopic = ""
    cur: list[str] | None = None

    def flush():
        nonlocal cur
        if cur:
            text = "\n".join(l.rstrip() for l in cur).strip()
            text = re.sub(r"\n{2,}", "\n", re.sub(r"^\s*- ", "", text, count=1))
            granola = origin in GRANOLA_ORIGINS
            chunks.append(mk("digest", "takeaway", text, topic=subtopic, is_takeaway=1 if granola else 0,
                             tk_origin=origin))
        cur = None

    for line in sec.split("\n"):
        if not line.strip():
            if cur is not None:
                cur.append("")
            continue
        if line.startswith("- "):
            flush()
            cur = [line]
        elif line.startswith((" ", "\t")) and cur is not None:
            cur.append(line.strip())
        elif line.startswith("###"):
            flush()
            subtopic = line.lstrip("# ").strip()
        else:  # provenance/heading paragraph at indent 0
            flush()
            origin = classify_takeaway_line(line, origin)
    flush()
    return chunks


def parse_quote_line(line: str, mode: str) -> Chunk | None:
    s = line.strip()
    if not (s.startswith("- ") or s.startswith(">")):
        return None
    s = re.sub(r"^(?:-|>)\s*", "", s)
    if not s:
        return None
    m = TS_ANY.search(s)
    ts = to_sec(m.group(1), m.group(2), m.group(3), mode) if m else None
    spk = ""
    ms = re.search(r"\*\*([^*:]+?)(?:\s*\([^)]*\))?:\*\*", s)
    if ms:
        spk = ms.group(1).strip()
    else:
        ms = re.search(r"[—–-]\s*([A-Z][\w .'’/&-]+?)\s*\(~?\d", s)
        if ms:
            spk = ms.group(1).strip()
    qm = re.search(r"[\"“](.+)[\"”]", s, re.S)
    text = (qm.group(1).strip() if qm else s).replace('\\"', '"')
    if len(text) < 8:
        return None
    note = re.search(r"\*\((.*?)\)\*\s*$", s)
    if note and qm and note.start() > qm.end() - 1:
        text = f"{text} ({note.group(1)})"
    return mk("digest", "quote", text, ts=ts, speaker=spk)


def parse_digest(path: Path) -> tuple[dict, list[Chunk], dict]:
    text = path.read_text(encoding="utf-8")
    fm, body = parse_frontmatter(text)
    secs = split_sections(body)
    stats = {"unparsed_quotes": 0, "unparsed_rows": 0}
    table = sec_get(secs, "mile markers")
    mode = digest_ts_mode(table)
    qsec = sec_get(secs, "notable quotes")
    qmode = digest_ts_mode(qsec, r"^\s*(?:-|>)\s*\**~?(\d{1,2}):(\d{2})(?::(\d{2}))?") if qsec else mode
    if qsec and not re.search(r"(?m)^\s*(?:-|>)\s*\**~?\d{1,2}:\d{2}(?::\d{2})?", qsec):
        # blockquote style: timestamp sits at end "(~00:12)"
        tss = re.findall(r"\(~?(\d{1,2}):(\d{2})(?::(\d{2}))?\)", qsec)
        two = [int(a) for a, b, c in tss if not c]
        qmode = "ms" if two and max(two) >= 10 else "hm"
    chunks: list[Chunk] = []

    # Summary: paragraphs; classify evidence / notes
    for para in re.split(r"\n\s*\n", sec_get(secs, "summary").strip()):
        para = para.strip()
        if not para:
            continue
        head = re.match(r"^\*\*([^*]+)\*\*", para)
        label = (head.group(1).lower() if head else "")
        low = para[:120].lower()
        if re.search(r"evidence|inflight", label):
            kind = "evidence"
        elif re.search(r"asr|name note|caveat|speaker|correction|name/asr", label) or low.startswith("speaker labels"):
            kind = "note"
        else:
            kind = "summary"
        for piece in split_long(para):
            ts = None
            if kind == "evidence":
                m = TS_ANY.search(piece)
                if m:
                    ts = to_sec(m.group(1), m.group(2), m.group(3), qmode)
            chunks.append(mk("digest", kind, piece, ts=ts, topic=head.group(1) if head else ""))

    # Takeaways
    chunks.extend(parse_takeaways(sec_get(secs, "takeaways")))

    # Mile markers (section rows)
    for line in table.split("\n"):
        if not re.match(r"^\|\s*\d", line):
            continue
        cells = [c.strip() for c in line.strip().strip("|").split("|")]
        if cells:
            cells[0] = re.sub(r":xx", ":00", cells[0])
        m = TS_ANY.match(cells[0]) if cells else None
        if not m or len(cells) < 4:
            stats["unparsed_rows"] += 1
            continue
        ts = to_sec(m.group(1), m.group(2), m.group(3), mode)
        topic, gold = cells[1], cells[-1].lower()
        claims = " | ".join(cells[2:-1])
        chunks.append(mk("digest", "section", claims, ts=ts, topic=topic, gold=gold,
                         is_takeaway=1 if gold == "takeaway" else 0,
                         tk_origin="marker" if gold == "takeaway" else ""))

    # Quotes
    for line in sec_get(secs, "notable quotes").split("\n"):
        if not line.strip() or line.strip() in (">", "-"):
            continue
        q = parse_quote_line(line, qmode)
        if q:
            chunks.append(q)
        elif line.strip().startswith(("- ", ">")):
            stats["unparsed_quotes"] += 1

    fm["_ts_mode"] = mode
    return fm, chunks, stats


# --------------------------------------------------------------------------- raw transcript parser

def clean_caption_noise(t: str) -> str:
    t = re.sub(r"\[(?:music|applause|laughter|cheering|inaudible|silence|__)\]", " ", t, flags=re.I)
    t = t.replace(">>", " ")
    return re.sub(r"[ \t]+", " ", t)


def parse_raw(path: Path) -> tuple[dict, list[Chunk]]:
    text = path.read_text(encoding="utf-8")
    fm, body = parse_frontmatter(text)
    words: list[tuple[int, str, str]] = []   # (t, speaker, word)
    chapters: list[tuple[int, str]] = []
    cur_t: int | None = None
    spk = ""
    for line in body.split("\n"):
        s = line.strip()
        if not s:
            continue
        m = re.match(r"^##\s+\[(\d{1,2}):(\d{2})(?::(\d{2}))?\]\s*(.*)$", s)
        if m:
            t = to_sec(m.group(1), m.group(2), m.group(3), "hm")
            chapters.append((t, m.group(4).strip()))
            cur_t = t
            continue
        if s.startswith("#"):
            continue
        m = re.match(r"^\[(\d{1,2}):(\d{2})(?::(\d{2}))?\]\s*(.*)$", s)
        if m:
            cur_t = to_sec(m.group(1), m.group(2), m.group(3), "hm")
            rest = m.group(4)
            sm = re.match(r"^\*\*([^*]+?):\*\*\s*(.*)$", rest)
            if sm:
                spk, rest = sm.group(1).strip(), sm.group(2)
            body_s = rest
        else:
            if cur_t is None:
                continue  # preface before first timestamp
            sm = re.match(r"^\*\*([^*]+?):\*\*\s*(.*)$", s)
            if sm:
                spk, body_s = sm.group(1).strip(), sm.group(2)
            else:
                body_s = s
        pos, t = 0, cur_t
        for tm in TS_RAW.finditer(body_s):
            seg = clean_caption_noise(body_s[pos:tm.start()])
            for w in seg.split():
                words.append((t, spk, w))
            t = to_sec(tm.group(1), tm.group(2), tm.group(3), "hm")
            pos = tm.end()
        for w in clean_caption_noise(body_s[pos:]).split():
            words.append((t, spk, w))
        if words:
            cur_t = t
    # sentences
    sents: list[tuple[int, str, str]] = []
    buf: list[str] = []
    st, sspk = 0, ""
    for t, sp, w in words:
        if buf and (sp != sspk or len(buf) >= 45):
            sents.append((st, sspk, " ".join(buf)))
            buf = []
        if not buf:
            st, sspk = t, sp
        buf.append(w)
        if re.search(r"[.?!][\"”')\]]*$", w) and len(buf) >= 3:
            sents.append((st, sspk, " ".join(buf)))
            buf = []
    if buf:
        sents.append((st, sspk, " ".join(buf)))
    # chapter lookup
    chapters.sort()

    def chapter_at(t: int) -> str:
        c = ""
        for ct, title in chapters:
            if ct <= t:
                c = title
            else:
                break
        return c

    chunks: list[Chunk] = []
    i, n = 0, len(sents)
    while i < n:
        T = sents[i][0]
        j = i
        while j < n and (j == i or sents[j][0] - T < WINDOW_SECS):
            j += 1
        seg = sents[i:j]
        txt = " ".join(s[2] for s in seg)
        if len(txt.split()) >= 8:
            speakers = []
            for s in seg:
                if s[1] and s[1] not in speakers:
                    speakers.append(s[1])
            chunks.append(mk("raw", "window", txt, ts=T, topic=chapter_at(T), speaker=", ".join(speakers),
                             segs=[[s[0], s[1], s[2]] for s in seg]))
        nxt = j
        k = i + 1
        while k < n and sents[k][0] < T + WINDOW_STEP:
            k += 1
        i = k if k > i else i + 1
        if j >= n:
            break
    return fm, chunks


# --------------------------------------------------------------------------- manifest

def parse_manifest() -> dict[str, list[str]]:
    rows: dict[str, list[str]] = {}
    p = CLUB / "MANIFEST.md"
    for l in p.read_text(encoding="utf-8").split("\n"):
        if l.startswith("| 20"):
            c = [x.strip() for x in l.strip().strip("|").split("|")]
            rows[c[4].strip("`")] = c
    return rows


# --------------------------------------------------------------------------- database

SCHEMA = """
CREATE TABLE IF NOT EXISTS meta(key TEXT PRIMARY KEY, value TEXT);
CREATE TABLE IF NOT EXISTS files(path TEXT PRIMARY KEY, kind TEXT, slug TEXT, part TEXT, sha256 TEXT, mtime_ns INTEGER, size INTEGER);
CREATE TABLE IF NOT EXISTS episodes(
  slug TEXT PRIMARY KEY, guest TEXT, title TEXT, youtube_id TEXT, published TEXT, year INTEGER,
  tags TEXT, flags TEXT, source_type TEXT, precision TEXT, duration_min TEXT, digest_file TEXT, raw_file TEXT,
  granola_state TEXT, ts_mode TEXT);
CREATE TABLE IF NOT EXISTS chunks(
  id INTEGER PRIMARY KEY, slug TEXT, src TEXT, kind TEXT, ts_sec INTEGER, topic TEXT, text TEXT, gold TEXT,
  is_takeaway INTEGER, tk_origin TEXT, speaker TEXT, segs TEXT, thash TEXT,
  part TEXT DEFAULT '', yid TEXT, part_title TEXT DEFAULT '');
CREATE INDEX IF NOT EXISTS chunks_slug ON chunks(slug, src);
CREATE TABLE IF NOT EXISTS vectors(chunk_id INTEGER PRIMARY KEY, vec BLOB);
CREATE VIRTUAL TABLE IF NOT EXISTS chunks_fts USING fts5(text, topic, meta, tokenize='porter unicode61');
"""


def connect(path: Path) -> sqlite3.Connection:
    path.parent.mkdir(parents=True, exist_ok=True)
    con = sqlite3.connect(path)
    con.execute("PRAGMA journal_mode=WAL")
    con.executescript(SCHEMA)
    return con


def sha256_file(p: Path) -> str:
    h = hashlib.sha256()
    with open(p, "rb") as f:
        for b in iter(lambda: f.read(1 << 20), b""):
            h.update(b)
    return h.hexdigest()


def thash(model: str, text: str) -> str:
    return hashlib.sha1((model + "\x00" + text).encode()).hexdigest()


def embed_text(ep: dict, ch: Chunk) -> str:
    if ch["src"] == "digest":
        pre = f"{ep.get('guest','')} — {ep.get('title','')}. "
        topic = f"{ch['topic']}. " if ch["topic"] else ""
        return (pre + topic + ch["text"])[:EMBED_MAX_CHARS]
    topic = f"{ch['topic']}. " if ch["topic"] else ""
    return (topic + ch["text"])[:EMBED_MAX_CHARS]


_MODEL = None


def get_model():
    global _MODEL
    if _MODEL is None:
        from fastembed import TextEmbedding
        MODEL_CACHE.mkdir(parents=True, exist_ok=True)
        _MODEL = TextEmbedding(MODEL_NAME, cache_dir=str(MODEL_CACHE))
    return _MODEL


def embed_many(texts: list[str]) -> list:
    import numpy as np
    model = get_model()
    t0 = time.time()
    order = sorted(range(len(texts)), key=lambda i: len(texts[i]))   # length-sorted batches = far less padding
    res: list = [None] * len(texts)
    for i in range(0, len(order), 256):
        idx = order[i:i + 256]
        vs = list(model.embed([texts[j] for j in idx], batch_size=32))
        for j, v in zip(idx, vs):
            v = np.asarray(v, dtype="float32")
            res[j] = (v / (float(np.linalg.norm(v)) or 1.0)).astype("float32")
        done = min(i + 256, len(texts))
        if len(texts) > 256 and (done // 256) % 4 == 0:
            rate = done / max(time.time() - t0, 1e-6)
            print(f"  embedded {done}/{len(texts)}  ({rate:.0f}/s)", file=sys.stderr, flush=True)
    return res


def episode_row(fm: dict, digest_file: str | None, raw_file: str | None, granola_state: str) -> dict:
    tags = fm.get("tags", [])
    flags = fm.get("flags", [])
    st = fm.get("source_type", "")
    pub = fm.get("published", "")
    return dict(
        slug=fm.get("slug", ""), guest=fm.get("guest", ""), title=fm.get("title", ""),
        youtube_id=fm.get("youtube_id", ""), published=pub,
        year=int(pub[:4]) if re.match(r"\d{4}", pub or "") else None,
        tags=json.dumps(tags if isinstance(tags, list) else [tags]),
        flags=json.dumps(flags if isinstance(flags, list) else [flags]),
        source_type=st, precision="approximate (YouTube captions, ±30s, no diarization)" if st == "youtube-captions" else "precise (Descript)" if st == "descript" else st,
        duration_min=str(fm.get("duration_min", "")), digest_file=digest_file, raw_file=raw_file,
        granola_state=granola_state, ts_mode=fm.get("_ts_mode", ""))


def scan_files() -> dict[str, dict]:
    """Map every digest/raw file to (kind, slug, part). A raw transcript with no digest of its own that a
    digest references by filename (e.g. a companion panel half) is attached to that digest's episode with
    part=<raw stem>; an unreferenced orphan keeps its own slug (and will fail the count check, loudly)."""
    files: dict[str, dict] = {}
    digests = {p.stem[len("DIGEST-"):]: p for p in sorted(CLUB.glob("DIGEST-*.md"))}
    for slug, p in digests.items():
        files[str(p.relative_to(REPO))] = dict(kind="digest", slug=slug, part="", path=p)
    raws = {p.stem: p for p in sorted(CLUB.glob("20*.md"))}
    orphans = [st for st in raws if st not in digests]
    parent_of: dict[str, str] = {}
    if orphans:
        for slug, p in digests.items():
            txt = p.read_text(encoding="utf-8")
            for st in orphans:
                if st != slug and (st + ".md") in txt and st not in parent_of:
                    parent_of[st] = slug
    for st, p in raws.items():
        if st in digests:
            files[str(p.relative_to(REPO))] = dict(kind="raw", slug=st, part="", path=p)
        elif st in parent_of:
            files[str(p.relative_to(REPO))] = dict(kind="raw", slug=parent_of[st], part=st, path=p)
        else:
            files[str(p.relative_to(REPO))] = dict(kind="raw", slug=st, part="", path=p)
    return files


def index_slug(con, slug: str, digest_path: Path | None, raws: dict[str, Path], reuse: dict,
               stale: set[tuple[str, str]], warn: list[str]):
    """(Re)index chunks for one episode. `stale` ⊆ {("digest",""), ("raw", part)}. Vectors reused by text hash."""
    cur = con.execute("SELECT * FROM episodes WHERE slug=?", (slug,))
    old = cur.fetchone()
    cols = [d[0] for d in cur.description] if cur.description else []
    old_ep = dict(zip(cols, old)) if old else {}
    new_chunks: list[tuple[Chunk, dict]] = []

    fm_d, d_chunks = None, []
    if digest_path:
        fm_d, d_chunks, st = parse_digest(digest_path)
        if st["unparsed_quotes"] or st["unparsed_rows"]:
            warn.append(f"{slug}: unparsed quotes={st['unparsed_quotes']} rows={st['unparsed_rows']}")
    main_raw = raws.get("")
    fm = fm_d or (parse_frontmatter(main_raw.read_text(encoding="utf-8"))[0] if main_raw else {})
    fm = dict(fm)
    fm.setdefault("slug", slug)
    granola = "present" if any(c["is_takeaway"] and c["kind"] == "takeaway" for c in d_chunks) else "none"
    if digest_path is None and old_ep:
        granola = old_ep.get("granola_state", granola)
    ep = episode_row(fm, str(digest_path.relative_to(REPO)) if digest_path else None,
                     str(main_raw.relative_to(REPO)) if main_raw else None, granola)
    cols = list(ep.keys())
    con.execute(f"INSERT OR REPLACE INTO episodes({','.join(cols)}) VALUES({','.join('?'*len(cols))})",
                [ep[c] for c in cols])

    # drop stale chunks (FTS + vectors first, while ids still exist)
    for kind, part in stale:
        src = "digest" if kind == "digest" else "raw"
        ids = [r[0] for r in con.execute("SELECT id FROM chunks WHERE slug=? AND src=? AND part=?", (slug, src, part))]
        con.executemany("DELETE FROM chunks_fts WHERE rowid=?", [(i,) for i in ids])
        con.executemany("DELETE FROM vectors WHERE chunk_id=?", [(i,) for i in ids])
        con.executemany("DELETE FROM chunks WHERE id=?", [(i,) for i in ids])
    if ("digest", "") in stale:
        new_chunks += [(c, dict(part="", yid=None, part_title="")) for c in d_chunks]
    for kind, part in stale:
        if kind == "raw" and part in raws:
            rfm, rch = parse_raw(raws[part])
            meta = dict(part=part, yid=(rfm.get("youtube_id") or None) if part else None,
                        part_title=rfm.get("title", "") if part else "")
            new_chunks += [(c, meta) for c in rch]
    todo: list[tuple[int, str, str]] = []
    added = 0
    for c, meta in new_chunks:
        et = embed_text(ep, c)
        if meta["part"]:
            et = (f"{meta['part_title']}. " + et)[:EMBED_MAX_CHARS]
        th = thash(MODEL_NAME, et)
        cid = con.execute(
            "INSERT INTO chunks(slug,src,kind,ts_sec,topic,text,gold,is_takeaway,tk_origin,speaker,segs,thash,part,yid,part_title) "
            "VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
            (slug, c["src"], c["kind"], c["ts_sec"], c["topic"], c["text"], c["gold"], c["is_takeaway"],
             c["tk_origin"], c["speaker"], json.dumps(c["segs"]) if c["segs"] else None, th,
             meta["part"], meta["yid"], meta["part_title"])).lastrowid
        added += 1
        if th in reuse:
            con.execute("INSERT INTO vectors VALUES(?,?)", (cid, reuse[th]))
        else:
            todo.append((cid, th, et))
    # refresh FTS rows for ALL chunks of the slug (guest/topic may have changed)
    con.execute("DELETE FROM chunks_fts WHERE rowid IN (SELECT id FROM chunks WHERE slug=?)", (slug,))
    con.execute(
        "INSERT INTO chunks_fts(rowid,text,topic,meta) SELECT id, text, topic, ? FROM chunks WHERE slug=?",
        (f"{ep['guest']} {ep['title']}", slug))
    return todo, added


def flush_embeddings(con, todo, reuse):
    if not todo:
        return 0
    # de-dup identical texts
    uniq: dict[str, str] = {}
    for cid, th, et in todo:
        uniq.setdefault(th, et)
    keys = list(uniq)
    print(f"embedding {len(keys)} new chunk texts with {MODEL_NAME} …", file=sys.stderr, flush=True)
    vecs = embed_many([uniq[k] for k in keys])
    vm = {k: v.tobytes() for k, v in zip(keys, vecs)}
    con.executemany("INSERT OR REPLACE INTO vectors VALUES(?,?)", [(cid, vm[th]) for cid, th, _ in todo])
    reuse.update(vm)
    return len(todo)


def count_check(con, quiet=False) -> bool:
    manifest = parse_manifest()
    indexed = {r[0] for r in con.execute("SELECT DISTINCT slug FROM chunks")}
    n_man, n_idx = len(manifest), len(indexed)
    missing = sorted(set(manifest) - indexed)
    extra = sorted(indexed - set(manifest))
    ok = n_man == n_idx and not missing and not extra
    if ok:
        print(f"COUNT CHECK: PASS  indexed distinct episodes = {n_idx} = MANIFEST rows = {n_man}")
    else:
        bar = "!" * 72
        print(bar, file=sys.stderr)
        print(f"COUNT CHECK: FAIL  indexed distinct episodes = {n_idx}, MANIFEST rows = {n_man}", file=sys.stderr)
        if missing:
            print(f"  in MANIFEST but not indexed: {missing}", file=sys.stderr)
        if extra:
            print(f"  indexed but not in MANIFEST: {extra}", file=sys.stderr)
        print(bar, file=sys.stderr)
        print(f"COUNT CHECK: FAIL  indexed={n_idx} manifest={n_man}")
    return ok


def meta_get(con, k, d=None):
    r = con.execute("SELECT value FROM meta WHERE key=?", (k,)).fetchone()
    return r[0] if r else d


def meta_set(con, k, v):
    con.execute("INSERT OR REPLACE INTO meta VALUES(?,?)", (k, str(v)))


def sync(rebuild: bool = False) -> int:
    t0 = time.time()
    target = DB_PATH
    old_vecs: dict[str, bytes] = {}
    if rebuild:
        # reuse vectors by text hash so rebuilds don't re-embed unchanged text
        try:
            if DB_PATH.exists():
                oc = sqlite3.connect(DB_PATH)
                if meta_get(oc, "model") == MODEL_NAME:
                    for th, vec in oc.execute("SELECT c.thash, v.vec FROM chunks c JOIN vectors v ON v.chunk_id=c.id"):
                        old_vecs[th] = vec
                oc.close()
        except sqlite3.Error:
            pass
        target = DB_PATH.with_name(DB_PATH.name + ".new")
        for suf in ("", "-wal", "-shm"):
            Path(str(target) + suf).unlink(missing_ok=True)
    con = connect(target)
    if not rebuild:
        if meta_get(con, "parser_version") not in (None, str(PARSER_VERSION)) or meta_get(con, "model") not in (None, MODEL_NAME):
            con.close()
            print("parser/model version changed -> full rebuild", file=sys.stderr)
            return sync(rebuild=True)
    meta_set(con, "parser_version", PARSER_VERSION)
    meta_set(con, "model", MODEL_NAME)

    files = scan_files()
    known = {r[0]: r[1:] for r in con.execute("SELECT path,kind,slug,part,sha256,mtime_ns,size FROM files")}
    reuse = dict(old_vecs)
    if not rebuild:
        for th, vec in con.execute("SELECT thash, vec FROM chunks c JOIN vectors v ON v.chunk_id=c.id"):
            reuse[th] = vec

    # deletions
    gone = [p for p in known if p not in files]
    removed_slugs = set()
    for p in gone:
        kind, slug, part = known[p][0], known[p][1], known[p][2]
        ids = [r[0] for r in con.execute("SELECT id FROM chunks WHERE slug=? AND src=? AND part=?", (slug, kind, part))]
        con.executemany("DELETE FROM chunks_fts WHERE rowid=?", [(i,) for i in ids])
        con.executemany("DELETE FROM vectors WHERE chunk_id=?", [(i,) for i in ids])
        con.executemany("DELETE FROM chunks WHERE id=?", [(i,) for i in ids])
        con.execute("DELETE FROM files WHERE path=?", (p,))
        removed_slugs.add(slug)
    for (slug,) in con.execute("SELECT slug FROM episodes WHERE slug NOT IN (SELECT DISTINCT slug FROM chunks)").fetchall():
        con.execute("DELETE FROM episodes WHERE slug=?", (slug,))
    # files whose slug/part mapping moved (e.g. companion re-attached) count as changed
    # changed / new
    changed: dict[str, set[tuple[str, str]]] = {}
    newsha: dict[str, tuple] = {}
    for rel, info in files.items():
        p: Path = info["path"]
        st = p.stat()
        k = known.get(rel)
        same_map = k and k[1] == info["slug"] and k[2] == info["part"]
        if same_map and k[4] == st.st_mtime_ns and k[5] == st.st_size:
            continue
        sha = sha256_file(p)
        newsha[rel] = (info["kind"], info["slug"], info["part"], sha, st.st_mtime_ns, st.st_size)
        if same_map and k[3] == sha:
            continue  # touched but identical
        changed.setdefault(info["slug"], set()).add((info["kind"], info["part"]))
    by_slug_digest: dict[str, Path] = {}
    by_slug_raws: dict[str, dict[str, Path]] = {}
    for rel, info in files.items():
        if info["kind"] == "digest":
            by_slug_digest[info["slug"]] = info["path"]
        else:
            by_slug_raws.setdefault(info["slug"], {})[info["part"]] = info["path"]
    # slugs that lost one of their files but still exist elsewhere need fts/episode refresh
    for slug in removed_slugs:
        if slug in set(by_slug_digest) | set(by_slug_raws) and slug not in changed:
            changed[slug] = set()

    warn: list[str] = []
    todo_all: list = []
    n_chunks_added = 0
    for n, (slug, kinds) in enumerate(sorted(changed.items()), 1):
        todo, added = index_slug(con, slug, by_slug_digest.get(slug), by_slug_raws.get(slug, {}), reuse, set(kinds), warn)
        todo_all += todo
        n_chunks_added += added
        if rebuild and n % 20 == 0:
            print(f"  parsed {n}/{len(changed)} episodes", file=sys.stderr, flush=True)
    flush_embeddings(con, todo_all, reuse)
    for rel, (kind, slug, part, sha, mt, sz) in newsha.items():
        con.execute("INSERT OR REPLACE INTO files VALUES(?,?,?,?,?,?,?)", (rel, kind, slug, part, sha, mt, sz))
    meta_set(con, "synced_at", time.strftime("%Y-%m-%d %H:%M:%S"))
    con.commit()
    for w in warn:
        print("WARN", w, file=sys.stderr)

    ok = count_check(con)
    ne = con.execute("SELECT COUNT(DISTINCT slug) FROM chunks").fetchone()[0]
    nc = con.execute("SELECT COUNT(*) FROM chunks").fetchone()[0]
    nv = con.execute("SELECT COUNT(*) FROM vectors").fetchone()[0]
    if nv != nc:
        ok = False
        print(f"FAIL: {nc} chunks but {nv} vectors", file=sys.stderr)
    con.execute("PRAGMA wal_checkpoint(TRUNCATE)")
    con.close()
    if rebuild:
        for suf in ("", "-wal", "-shm"):
            Path(str(DB_PATH) + suf).unlink(missing_ok=True)
        os.replace(target, DB_PATH)
        for suf in ("-wal", "-shm"):
            Path(str(target) + suf).unlink(missing_ok=True)
    mode = "rebuild" if rebuild else "sync"
    print(f"{mode}: episodes={ne} chunks={nc} vectors={nv} changed_episodes={len(changed)} "
          f"removed_files={len(gone)} chunks_added={n_chunks_added} {time.time()-t0:.1f}s")
    return 0 if ok else 2


def stats() -> int:
    if not DB_PATH.exists():
        print("no index yet: run dive-index --rebuild", file=sys.stderr)
        return 1
    con = sqlite3.connect(DB_PATH)
    print(f"db: {DB_PATH}  ({DB_PATH.stat().st_size/1e6:.1f} MB)")
    print(f"model: {meta_get(con,'model')}  parser_version: {meta_get(con,'parser_version')}  synced_at: {meta_get(con,'synced_at')}")
    print(f"episodes: {con.execute('select count(distinct slug) from chunks').fetchone()[0]}")
    for r in con.execute("select src, kind, count(*) from chunks group by 1,2 order by 1,2"):
        print(f"  chunks {r[0]:6s} {r[1]:9s} {r[2]}")
    print("  source_type:", dict(con.execute("select source_type, count(*) from episodes group by 1").fetchall()))
    print("  granola takeaways:", con.execute("select count(*) from chunks where is_takeaway=1").fetchone()[0])
    return 0 if count_check(con) else 2


# --------------------------------------------------------------------------- search

STOP = set("""a about above after again against all also am an and any are as at be because been before being below between
both but by can could did do does doing down during each else few for from further had has have having he her here hers him his
how i if in into is it its just me more most my no nor not of off on once only or other our out over own same she should so some
such than that the their them then there these they this those through to too under until up very was we were what when where which
while who whom why will with would you your anyone someone people guests guest episode episodes talk talks talked mention mentioned
mentions say said says tell show shows find give get got ever really""".split())
IRREGULAR = {"built": "build", "made": "make", "wrote": "write", "ran": "run", "thought": "think", "hired": "hire"}


def query_terms(q: str) -> tuple[list[str], list[str]]:
    phrases = [p.strip() for p in re.findall(r'"([^"]+)"', q) if p.strip()]
    q2 = re.sub(r'"[^"]+"', " ", q)
    toks = re.findall(r"[A-Za-z0-9][A-Za-z0-9'’+.#-]*", q2)
    toks = [t.strip(".'’-") for t in toks]
    return phrases, [t for t in toks if t]


def build_fts_query(q: str) -> str | None:
    phrases, toks = query_terms(q)
    parts: list[str] = []
    for p in phrases:
        parts.append('"' + p.replace('"', "") + '"')
    low = [t.lower() for t in toks]
    keep = [(t, i) for i, t in enumerate(low) if t not in STOP and len(t) > 1]
    for t, _ in keep:
        parts.append('"' + t.replace('"', "") + '"')
        if t in IRREGULAR:
            parts.append('"' + IRREGULAR[t] + '"')
    for (a, i), (b, j) in zip(keep, keep[1:]):
        if j == i + 1:
            parts.append(f'"{a} {b}"')
    return " OR ".join(dict.fromkeys(parts)) if parts else None


def cap_terms(q: str) -> list[str]:
    """Proper-noun-ish query tokens (Capitalized or ALLCAPS, not stopwords) used for a small exact-case boost."""
    _, toks = query_terms(re.sub(r'"[^"]+"', " ", q))
    return [t for t in toks if (t[:1].isupper() and t.lower() not in STOP and len(t) > 1)]


def parse_years(s: str) -> list[int]:
    ys: set[int] = set()
    for part in re.split(r"[,\s]+", s.strip()):
        if not part:
            continue
        m = re.match(r"^(\d{4})\s*[-–:]\s*(\d{4})$", part)
        if m:
            ys.update(range(int(m.group(1)), int(m.group(2)) + 1))
        elif re.match(r"^\d{4}$", part):
            ys.add(int(part))
        else:
            raise SystemExit(f"bad --year value: {part!r} (use 2024, 2023,2025 or 2023-2025)")
    return sorted(ys)


def allowed_ids(con, a) -> set[int] | None:
    where, params = [], []
    kinds = ["summary", "evidence", "section", "quote", "takeaway", "window", "note"] if a.kind == "all" else \
        [k.strip() for k in a.kind.split(",")] if a.kind else list(DEFAULT_KINDS)
    where.append(f"c.kind IN ({','.join('?'*len(kinds))})")
    params += kinds
    if a.src:
        where.append("c.src=?")
        params.append(a.src)
    if a.guest:
        gs = []
        for g in a.guest:
            gs.append("(LOWER(e.guest) LIKE ? OR e.slug LIKE ?)")
            params += [f"%{g.lower()}%", f"%{g.lower().replace(' ','-')}%"]
        where.append("(" + " OR ".join(gs) + ")")
    if a.year:
        ys = parse_years(a.year)
        where.append(f"e.year IN ({','.join('?'*len(ys))})")
        params += ys
    for t in a.tag or []:
        where.append("e.tags LIKE ?")
        params.append(f'%"{t}"%')
    for f in a.flag or []:
        where.append("e.flags LIKE ?")
        params.append(f'%"{f}"%')
    if a.takeaways:
        where.append("c.is_takeaway=1")
    if a.source_type:
        where.append("e.source_type=?")
        params.append(a.source_type)
    sql = "SELECT c.id FROM chunks c JOIN episodes e ON e.slug=c.slug WHERE " + " AND ".join(where)
    return {r[0] for r in con.execute(sql, params)}


KIND_W = {"takeaway": 1.12, "quote": 1.0, "section": 1.0, "evidence": 0.95, "summary": 0.9, "window": 0.9, "note": 0.5}
GOLD_W = {"takeaway": 1.15, "descript-marker": 1.05}
ORIGIN_W = {"typed": 1.25, "granola-generated": 1.05, "granola-notes": 1.15, "granola-description": 1.1}


def load_vectors(con, allow: set[int] | None):
    import numpy as np
    rows = con.execute("SELECT chunk_id, vec FROM vectors").fetchall()
    ids = np.fromiter((r[0] for r in rows), dtype=np.int64, count=len(rows))
    mat = np.frombuffer(b"".join(r[1] for r in rows), dtype=np.float32).reshape(len(rows), -1)
    if allow is not None:
        mask = np.isin(ids, np.fromiter(allow, dtype=np.int64, count=len(allow)))
        ids, mat = ids[mask], mat[mask]
    return ids, mat


def hybrid(con, q: str, a, allow: set[int] | None):
    import numpy as np
    ranks_bm: dict[int, int] = {}
    fq = build_fts_query(q)
    if fq:
        try:
            for r, (cid,) in enumerate(con.execute(
                    "SELECT rowid FROM chunks_fts WHERE chunks_fts MATCH ? ORDER BY bm25(chunks_fts, 1.0, 1.6, 0.7) LIMIT ?",
                    (fq, POOL * 6)), 1):
                if allow is None or cid in allow:
                    ranks_bm[cid] = len(ranks_bm) + 1
                    if len(ranks_bm) >= POOL:
                        break
        except sqlite3.OperationalError as e:
            print(f"(fts query error: {e})", file=sys.stderr)
    qv = None
    ranks_vec: dict[int, int] = {}
    sims: dict[int, float] = {}
    vec_ids = vec_mat = None
    if not a.bm25_only:
        vec_ids, vec_mat = load_vectors(con, allow)
        if len(vec_ids):
            qv = embed_many([QUERY_PREFIX + q])[0]
            s = vec_mat @ qv
            top = np.argsort(-s)[:POOL]
            for r, i in enumerate(top, 1):
                ranks_vec[int(vec_ids[i])] = r
                sims[int(vec_ids[i])] = float(s[i])
    return ranks_bm, ranks_vec, sims, qv, (vec_ids, vec_mat)


def pick_snippet(ch: dict, terms: list[str], maxlen: int = 340) -> tuple[str, int | None, str]:
    """Return (snippet text, timestamp sec, speaker) using ONLY indexed text of this chunk."""
    stems = [t.lower()[:max(4, len(t) - 2)] for t in terms if t.lower() not in STOP and len(t) > 2]

    def score(s: str) -> int:
        l = s.lower()
        return sum(1 for st in set(stems) if st in l)

    if ch["segs"]:
        segs = json.loads(ch["segs"]) if isinstance(ch["segs"], str) else ch["segs"]
        best, bi = -1, 0
        for i, (t, sp, tx) in enumerate(segs):
            sc = score(tx) * 3 + (score(segs[i - 1][2]) if i else 0) + (score(segs[i + 1][2]) if i + 1 < len(segs) else 0)
            if sc > best:
                best, bi = sc, i
        lo = bi
        out = segs[bi][2]
        # extend with neighbours until maxlen
        hi = bi
        while len(out) < maxlen * 0.6 and (lo > 0 or hi + 1 < len(segs)):
            if hi + 1 < len(segs) and (len(out) + len(segs[hi + 1][2]) <= maxlen):
                hi += 1
                out = out + " " + segs[hi][2]
            elif lo > 0 and (len(out) + len(segs[lo - 1][2]) <= maxlen):
                lo -= 1
                out = segs[lo][2] + " " + out
            else:
                break
        return out, segs[lo][0], segs[bi][1]
    text = ch["text"]
    if len(text) <= maxlen:
        return text, ch["ts_sec"], ch["speaker"]
    sents = [x.lstrip("-• ").strip() for x in re.split(r"(?<=[.?!])\s+|\n", text)]
    sents = [x for x in sents if x] or [text]
    best, bi = -1, 0
    for i, s in enumerate(sents):
        sc = score(s)
        if sc > best:
            best, bi = sc, i
    out = sents[bi]
    j = bi + 1
    while j < len(sents) and len(out) + len(sents[j]) < maxlen:
        out += " " + sents[j]
        j += 1
    if len(out) > maxlen:
        out = out[:maxlen].rsplit(" ", 1)[0] + " …"
    return out, ch["ts_sec"], ch["speaker"]


def run_search(a) -> int:
    if not DB_PATH.exists():
        print(f"no index at {DB_PATH}: run `dive-index --rebuild` first", file=sys.stderr)
        return 1
    con = sqlite3.connect(DB_PATH)
    con.row_factory = sqlite3.Row
    allow = allowed_ids(con, a)
    if allow is not None and not allow:
        print("no chunks match those filters.", file=sys.stderr)
        if a.tag:
            known = sorted({t for (j,) in con.execute("select tags from episodes") for t in json.loads(j)})
            print("known tags: " + ", ".join(known), file=sys.stderr)
        return 0
    q = a.query
    bm, vec, sims, qv, (vids, vmat) = hybrid(con, q, a, allow)
    caps = cap_terms(q)
    ids = set(bm) | set(vec)
    if not ids:
        print("no results.")
        return 0
    rows = {r["id"]: r for r in con.execute(
        f"SELECT c.*, COALESCE(c.yid, e.youtube_id) AS yid_eff, e.guest, e.title, e.youtube_id, e.published, e.year, e.tags, e.flags, e.source_type, e.precision, e.granola_state "
        f"FROM chunks c JOIN episodes e ON e.slug=c.slug WHERE c.id IN ({','.join('?'*len(ids))})", list(ids))}
    scored = []
    for cid in ids:
        r = rows[cid]
        s = (1.0 / (RRF_K + bm[cid]) if cid in bm else 0) + (1.0 / (RRF_K + vec[cid]) if cid in vec else 0)
        w = KIND_W.get(r["kind"], 1.0)
        if r["kind"] == "section":
            w *= GOLD_W.get(r["gold"], 1.0)
        if r["kind"] == "takeaway":
            w *= ORIGIN_W.get(r["tk_origin"], 1.0)
        if caps and any(re.search(r"(?<![A-Za-z])" + re.escape(c) + r"(?![a-z])", r["text"] + " " + (r["topic"] or "")) for c in caps):
            w *= 1.18
        scored.append((s * w, cid))
    scored.sort(reverse=True)

    # group by episode
    groups: dict[str, list[tuple[float, int]]] = {}
    for s, cid in scored:
        groups.setdefault(rows[cid]["slug"], []).append((s, cid))
    ranked = []
    for slug, lst in groups.items():
        top = [x[0] for x in lst[:3]] + [0, 0]
        ranked.append((top[0] + 0.3 * top[1] + 0.15 * top[2], slug, lst))
    ranked.sort(reverse=True)

    _, toks = query_terms(q)
    out_json = []
    shown = 0
    for gscore, slug, lst in ranked[: a.n]:
        shown += 1
        # choose primary + supporting (avoid overlapping time windows / duplicate texts)
        picks: list[int] = []
        for s, cid in lst:
            r = rows[cid]
            ok = True
            for pid in picks:
                p = rows[pid]
                if p["id"] == cid:
                    ok = False
                if p["ts_sec"] is not None and r["ts_sec"] is not None and abs(p["ts_sec"] - r["ts_sec"]) < 100 and p["src"] == r["src"] and r["kind"] == p["kind"]:
                    ok = False
                if r["kind"] == "takeaway" and p["kind"] == "takeaway":
                    ok = False
            if r["kind"] == "takeaway" and r["is_takeaway"] and picks:
                ok = False  # Granola takeaways get their own line below unless they are the top hit
            if r["kind"] in ("summary", "note") and picks:
                ok = False  # episode-level prose only as the lead hit; supporting hits should be anchored evidence
            if ok:
                picks.append(cid)
            if len(picks) >= 1 + a.per_guest:
                break
        if not picks:
            picks = [lst[0][1]]
        if not any(rows[c]["ts_sec"] is not None for c in picks):
            # lead hit is episode-level prose; always include the best time-anchored hit so there is a deep link
            for s_, cid in lst:
                if rows[cid]["ts_sec"] is not None and rows[cid]["kind"] != "takeaway":
                    picks.append(cid)
                    break
        ep = rows[picks[0]]
        tags = json.loads(ep["tags"])
        flags = json.loads(ep["flags"])
        # best takeaway for this episode (Granola/typed): must be relevant, not merely present
        tk = None
        tk_rows = con.execute("SELECT c.* FROM chunks c WHERE c.slug=? AND c.kind='takeaway' AND c.is_takeaway=1", (slug,)).fetchall()
        if tk_rows:
            import numpy as np
            top_cos = max(sims.values()) if sims else 0.0
            stems_q = [t.lower()[:max(4, len(t) - 2)] for t in toks if t.lower() not in STOP and len(t) > 2]
            gate = max(0.5, top_cos - 0.035)  # bge-small cosines are compressed (~0.6-0.78)
            best, bt = -1.0, None
            for r in tk_rows:
                if r["id"] in picks:
                    continue
                cos = 0.0
                if qv is not None:
                    vr = con.execute("SELECT vec FROM vectors WHERE chunk_id=?", (r["id"],)).fetchone()
                    if vr:
                        cos = float(np.frombuffer(vr[0], dtype=np.float32) @ qv)
                bmr = bm.get(r["id"])
                low = r["text"].lower()
                hit_terms = sum(1 for st in set(stems_q) if st in low)
                lexical = bmr is not None and bmr <= 15 and hit_terms >= min(2, len(set(stems_q)))
                ok = cos >= gate or lexical
                if not ok:
                    continue
                sc = cos + (0.2 if lexical else 0)
                if sc > best:
                    best, bt = sc, r
            if bt is not None:
                tk = bt
        primary_text = []
        for cid in picks:
            r = rows[cid]
            snip, ts, spk = pick_snippet(dict(r), toks)
            primary_text.append(dict(
                kind=r["kind"], src=r["src"], ts_sec=ts, ts=fmt_ts(ts), speaker=spk, topic=r["topic"], gold=r["gold"],
                text=snip, link=deep_link(r["yid_eff"], ts), part=r["part_title"] or "", is_takeaway=bool(r["is_takeaway"]), tk_origin=r["tk_origin"],
                score=round(dict((c, s) for s, c in lst)[cid], 5)))
        tk_json = None
        if tk is not None and not any(rows[c]["is_takeaway"] and rows[c]["kind"] == "takeaway" for c in picks):
            snip, _, _ = pick_snippet(dict(tk), toks, maxlen=420)
            tk_json = dict(origin=tk["tk_origin"], origin_label=ORIGIN_LABEL.get(tk["tk_origin"], tk["tk_origin"]), text=snip)
        item = dict(guest=ep["guest"], title=ep["title"], date=ep["published"], slug=slug, youtube_id=ep["youtube_id"],
                    source_type=ep["source_type"], precision=ep["precision"], tags=tags, flags=flags,
                    granola=ep["granola_state"], score=round(gscore, 5), hits=primary_text, granola_takeaway=tk_json)
        out_json.append(item)

    if a.json:
        print(json.dumps(out_json, indent=2, ensure_ascii=False))
        return 0
    mode = "BM25 only" if a.bm25_only else "BM25 + vectors (RRF)"
    print(f"query: {q!r}   [{mode}]   {len(ranked)} episodes matched, showing {shown}\n")
    for i, it in enumerate(out_json, 1):
        warn = "  ⚠ captions-based: timestamps ±30s, ASR text" if it["source_type"] == "youtube-captions" else ""
        print(f"{i:>2}. {it['guest']} — {it['date']} — {it['title']}{warn}")
        if it["flags"]:
            print(f"    flags: {', '.join(it['flags'])}")
        for h in it["hits"]:
            label = {"window": "transcript", "section": "section", "quote": "quote", "summary": "summary",
                     "evidence": "evidence", "takeaway": "takeaway", "note": "note"}[h["kind"]]
            extra = ""
            if h["kind"] == "takeaway":
                label = "Granola takeaway" if h["is_takeaway"] else "working takeaway"
                extra = f" · {ORIGIN_LABEL.get(h['tk_origin'], h['tk_origin'])}"
            if h["kind"] == "section":
                extra = f" · {h['gold']}" + (" ★ Gold=takeaway" if h["is_takeaway"] else "")
            who = f" {h['speaker']}:" if h["speaker"] and h["kind"] in ("window", "quote") else ""
            tsl = f"{h['ts']}" if h["ts_sec"] is not None else "episode-level"
            topic = f" [{h['topic']}]" if h["topic"] and h["kind"] in ("section",) else ""
            comp = f" — companion transcript: {h['part']}" if h.get("part") else ""
            print(f"    ▸ {tsl} ({label}{extra}){comp}{topic}{who}")
            print("      " + h["text"].replace("\n", " "))
            print(f"      ▶ {h['link']}")
        if it["granola_takeaway"]:
            g = it["granola_takeaway"]
            print(f"    Granola takeaway ({g['origin_label']}):")
            print("      " + g["text"].replace("\n", " "))
        elif any(h["kind"] == "takeaway" and h["is_takeaway"] for h in it["hits"]):
            pass  # already shown above as the top hit
        elif it["granola"] == "none":
            print("    Granola takeaway: no Granola takeaway bullets on file for this episode (Granola-weak)")
        else:
            print("    Granola takeaway: none matched this query")
        print()
    return 0


# --------------------------------------------------------------------------- CLI entrypoints

def main_index(argv=None) -> int:
    ap = argparse.ArgumentParser(prog="dive-index", description="Build/sync the disposable Dive Club search index.")
    g = ap.add_mutually_exclusive_group()
    g.add_argument("--sync", action="store_true", help="incremental: re-index changed files, drop deleted, count check (default)")
    g.add_argument("--rebuild", action="store_true", help="full rebuild (atomic swap; reuses embeddings for unchanged text)")
    g.add_argument("--stats", action="store_true", help="show index stats + count check")
    ap.add_argument("--repo", help="vault repo path (default: this repo)")
    a = ap.parse_args(argv)
    if a.repo:
        global REPO, CLUB
        REPO = Path(a.repo).resolve()
        CLUB = REPO / "club"
    if a.stats:
        return stats()
    return sync(rebuild=a.rebuild)


def main_search(argv=None) -> int:
    ap = argparse.ArgumentParser(
        prog="dive-search",
        description="Hybrid (BM25 + vector, RRF) search over Dive Club digests and raw transcripts. "
                    "Prints only indexed text.")
    ap.add_argument("query")
    ap.add_argument("--guest", action="append", help="guest name substring (repeatable = OR)")
    ap.add_argument("--year", help="2024 | 2023,2025 | 2023-2025")
    ap.add_argument("--tag", action="append", help="taxonomy tag, exact (repeatable = AND), e.g. design-tools")
    ap.add_argument("--flag", action="append", help="vault flag (repeatable = AND): inflight-relevant | coded-prototypes | prototype-feedback")
    ap.add_argument("--takeaways", action="store_true", help="only Granola/typed takeaways (+ sections with Gold=takeaway)")
    ap.add_argument("-n", type=int, default=10, help="max guests/episodes to show (default 10)")
    ap.add_argument("--per-guest", type=int, default=2, help="extra supporting hits per guest (default 2)")
    ap.add_argument("--src", choices=["digest", "raw"], help="restrict to digest chunks or raw transcript windows")
    ap.add_argument("--kind", help="comma list of kinds (summary,evidence,section,quote,takeaway,window) or 'all' (adds ASR/name notes)")
    ap.add_argument("--source-type", choices=["descript", "youtube-captions"], help="restrict by transcript source")
    ap.add_argument("--bm25-only", action="store_true", help="skip vectors (no model load)")
    ap.add_argument("--json", action="store_true")
    a = ap.parse_args(argv)
    return run_search(a)


if __name__ == "__main__":
    cmd = sys.argv[1] if len(sys.argv) > 1 else ""
    if cmd == "index":
        sys.exit(main_index(sys.argv[2:]))
    elif cmd == "search":
        sys.exit(main_search(sys.argv[2:]))
    else:
        print("usage: dive_search.py index|search ...", file=sys.stderr)
        sys.exit(1)
