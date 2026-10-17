# Dive Club search layer (`tools/search/`)

**Index is disposable, digests are source of truth.**
The index lives outside the vault (`/workspace/dive-index/dive.db`), is never committed, and can be deleted and rebuilt at any time with `dive-index --rebuild`. If the index and a digest ever disagree, the digest wins; fix the digest and re-sync.

## What it indexes

| source | chunks |
|---|---|
| `club/DIGEST-*.md` | Summary paragraphs, evidence lines (`coded-prototypes` / Inflight), **Granola/typed takeaway bullets** (origin recorded), every mile-marker row (timestamp + Gold marker), every notable quote (timestamp + speaker). ASR/name-correction notes are indexed but hidden by default. |
| `club/<date>-<slug>.md` raw transcripts | ~75 s windows (60 s step, ~15 s overlap, sentence-aligned) with per-sentence timestamps so a hit links to the right second. |

Every chunk carries: guest, date, `youtube_id`, timestamp, deep link `https://www.youtube.com/watch?v=<id>&t=<seconds>s`, tags, flags, whether it was a Granola/typed takeaway, source type.

**Precision:** `descript` episodes have trusted timecodes. `youtube-captions` episodes (currently Geoff Teehan, Danny Martinez, Rhiannon Bell, Myles Palmer, Nev Flynn + a few older ones; query `--source-type youtube-captions`) are ASR with ~30 s block timestamps (±30 s), no diarization. Results from them are marked `⚠ captions-based`.

Timecode conventions differ across older digests (HH:MM, MM:SS, HH:MM:SS); the parser infers the convention per table and was cross-checked against the raw transcripts (quote timestamps vs. the quote's position in the transcript).

## Retrieval

SQLite FTS5 (BM25, Porter stemming) + local vectors (`BAAI/bge-small-en-v1.5` via `fastembed`/ONNX on CPU, free, no API key), fused with Reciprocal Rank Fusion (k=60). Light boosts follow `AGENTS.md` gold weighting (typed takeaway > Granola takeaway > `descript-marker` > `inferred`) and an exact-case boost for proper nouns in the query (e.g. `Paper`, `Figma`). Results are grouped by guest so one episode never floods the list. Output is only text that exists in the index; nothing is generated or paraphrased.

## Setup (once)

```bash
tools/search/setup.sh            # venv + fastembed under /workspace/dive-index (outside the repo)
tools/search/dive-index --rebuild
```

## Usage

```bash
dive-search "who has built custom design tools"
dive-search "founding designer hired" --year 2024-2026 -n 5
dive-search "feedback on prototypes" --flag coded-prototypes --tag design-tools
dive-search "taste" --takeaways            # only Granola/typed takeaways
dive-search "Paper" --guest haney --src raw
dive-search "design tool" --source-type youtube-captions
dive-search "..." --json                   # machine-readable
```

Filters: `--guest` (substring, repeatable = OR), `--year` (`2024`, `2023,2025`, `2023-2025`), `--tag` (exact taxonomy tag, repeatable = AND), `--flag` (`inflight-relevant`, `coded-prototypes`, `prototype-feedback`), `--takeaways`, `--src digest|raw`, `--kind`, `--source-type`, `--per-guest N` (supporting hits per guest, default 2), `-n` (guests shown, default 10), `--bm25-only` (skip the model).

Put `tools/search` on PATH or symlink `dive-search` / `dive-index` into `~/.local/bin`.

## Index maintenance

```bash
dive-index --sync      # re-index only changed files (mtime/size, then sha256), drop deleted ones, run the count check
dive-index --rebuild   # full rebuild into a temp DB, atomic swap (reuses embeddings for unchanged text)
dive-index --stats
```

`--sync` always ends with a **count check**: distinct indexed episodes must equal the rows in `club/MANIFEST.md` (and the slug sets must match). It prints `COUNT CHECK: PASS` or a loud `FAIL` banner on stderr and exits non-zero (2). It also auto-rebuilds when `PARSER_VERSION` or the embedding model changes.

Env overrides: `DIVE_REPO`, `DIVE_INDEX_DIR` (default `/workspace/dive-index`), `DIVE_PYTHON`.

## Routine hook

Append after the step that writes digests / updates `MANIFEST.md` and runs `verify`:

```bash
/workspace/repos/dive/tools/search/dive-index --sync
```

## Companion transcripts

A raw transcript with no digest of its own that a digest references by filename (today: `2026-06-02-nyc-live-ramp-panel.md`, referenced by the NYC Live digest) is indexed under that digest's episode; its hits link to the companion's own `youtube_id` and are labeled "companion transcript". A raw transcript no digest references is an orphan and makes the count check FAIL.

## Known limitations

- Caption-based digests/raw: ±30 s, ASR errors, no speaker labels.
- Older digests (HH:MM tables, ~100 episodes) only carry minute-level section/quote timestamps; raw-transcript hits are second-accurate and are the better deep link.
- For ~3 episodes (van der Meulen, Teleanu, Rivera) digest quote timestamps sit 75-160 s off the position of the quote in the raw transcript (measured at build); prefer the `transcript` hit's link.
- The Granola-takeaway line is shown only when a takeaway is relevant to the query (cosine gate / lexical match); "Granola-weak" episodes have no Granola takeaway bullets at all.
- Digest/raw quotes are not re-verified against each other at index time.
- Proper-noun products that are also common words (e.g. "Paper") rely on the exact-case boost; recall is limited by transcript casing.
- bge-small is a small model: paraphrase recall is good, nuanced reasoning is not. Results are retrieval, not answers.
