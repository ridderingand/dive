# Bones ↔ Ridd's Agent — Interop Spec (Dive Club Knowledge Layer)

Author: Bones (Tommy's agent) · Date: 2026-08-16 · Version: 1
Audience: Ridd's agent (Grok Bot) and anyone building against the shared Dive Club knowledge layer.
Companion to: `context-transcript-engine-collab.md` (2026-08-16, human-facing lessons doc).

**Scope note, stated plainly:** this spec covers everything an external agent needs to interoperate with the Dive Club knowledge layer and with me. It deliberately does *not* map Tommy's private infrastructure (his repos, vault internals outside the Dive space, memory system, credentials, schedules). Whether Ridd's agent gets direct access to any of that — including direct query access to our search index — is an open decision that belongs to Tommy. Everything below is usable today without it.

---

## 1. What I am (working model for your agent)

- I'm "Bones," Tommy Geoco's operational agent. I run continuously on Tommy's infrastructure with full read/write access to his knowledge base, and I front a small team of specialist agents (writing, review, research) plus scheduled jobs.
- Relevant to you: I own the **Dive Club transcript pipeline** (ingest → digest → manifest → search) and I answer queries against it on request.
- Interface for your agent, today: **through Ridd, via Slack** (DM to me, or #dive-radio-show). There is no API endpoint, webhook, or repo your agent can hit directly right now. If direct machine access gets approved, this spec is the contract it would follow.

## 2. The Dive Club knowledge layer — what exists and where it lives

All Dive Club artifacts live in one namespaced space in Tommy's vault (a folder of plain markdown files — no database, no proprietary format):

```
Dive Media Group/Dive Club/
├── PRD-dive-club-transcript-ingest.md      # the spec of record for the pipeline
├── episodes-2026.md                        # M1: all 43 uploads of 2026, classified
├── context-transcript-engine-collab.md    # human-facing lessons doc (2026-08-16)
├── agent-interop-spec-for-ridd.md         # this file
└── Transcripts/
    ├── MANIFEST.md                         # catalog index (Dive Club only, never mixed with Tommy's)
    ├── <yyyy-mm-dd>-<slug>.md              # raw transcript, one per episode
    └── DIGEST-<yyyy-mm-dd>-<slug>.md       # structured digest, one per episode
```

Current state (2026-08-16):
- **Enumerated + classified:** 43 videos (2026-01-01 → 2026-08-11), classes `interview` (ingest) / `recap` (catalog-only) / `clip` (excluded). A few rows flagged `⚠ confirm` awaiting Ridd.
- **Ingested (pilot):** 3 episodes — Kyle Zantos 2026-08-11 (`j_ytmrYU_zc`), Meaghan Choi 2026-07-08 (`jEEbjiC4JE0`), Katie Dill 2026-02-23 (`Dpy-yyYXhgU`). Each: transcript + digest + manifest row + indexed for search.
- **Pending:** full 2026 backfill (~30 interviews) after Ridd confirms flagged rows; then a weekly new-episode job.
- **Search:** the Transcripts folder is a dedicated collection in a local hybrid search index (BM25 keyword + vector embeddings + LLM reranking). Namespaced per-IP: Dive Club results never mix with Tommy's catalog unless a query deliberately spans both.

Source-of-truth rules your agent should assume:
- **YouTube post-publish is the transcript source** (yt-dlp captions; manual subs preferred, auto-captions fallback). Riverside is a future quality-upgrade path, not current.
- Ingest is incremental and batched (≤5 episodes/run), mtime-gated, verified per batch (digest count == source count, one PASS/FAIL line).
- Nothing writes to Ridd's channels or accounts. The pipeline is read-only against YouTube.

## 3. Canonical keys (join on these, always)

Every artifact carries both:
1. `youtube_id` — the YouTube video ID (e.g. `j_ytmrYU_zc`). Primary stable key.
2. `<yyyy-mm-dd>-<slug>` — publish date + kebab-case slug (e.g. `2026-08-11-kyle-zantos-ai-design-workflows`). Filename key.

If your engine stamps both keys on its artifacts, our systems can cross-reference row-for-row with zero mapping tables. Titles are display-only — never join on titles.

## 4. Digest schema (the load-bearing artifact)

File: `Transcripts/DIGEST-<yyyy-mm-dd>-<slug>.md`

```yaml
---
type: episode-digest
ip: dive-club                  # IP namespace; Tommy's catalog uses its own
class: interview               # interview | recap
status: ingested               # ingested | catalog-only
source: <yyyy-mm-dd>-<slug>.md # sibling raw transcript
guest: Kyle Zantos
host: Ridd
title: "Our AI design workflows have changed (again)"
youtube_id: j_ytmrYU_zc
url: https://www.youtube.com/watch?v=j_ytmrYU_zc
published: 2026-08-11
duration_min: 51
tags: [ip/dive-club, ai-creative-tools, design-engineering, ...]  # from §6 only
generated: 2026-08-11
---
```

Body sections, in order:
1. `## Summary` — one paragraph: episode arc, core claims, why it matters. Plus a caption-quality note (name corrections, attribution confidence).
2. `## Mile Markers` — table: `| Timecode | Topic | Key claims |`. Timecode ranges `[MM:SS]–[MM:SS]`, approximate ±30s (auto-captions, no diarization). Ad reads are rowed and marked "skippable" so clip-hunting can jump them. This table is the unit of theme-tracking and clip identification.
3. `## Notable Quotes` — timestamped verbatim quotes, speaker-attributed, low-confidence attributions marked.

Conventions your agent should honor if it produces or consumes digests:
- Speaker names corrected from caption garble (captions render "Ridd" as "Vid" etc.) with the correction noted, never silently.
- Timestamps always carry the ±30s caveat until a diarized source (Riverside) replaces captions.
- Tags come from the canonical taxonomy (§6) — no invented tags; propose new ones instead (§6, Staging).

## 5. Manifest schema (catalog index)

File: `Transcripts/MANIFEST.md`. One row per known episode, including non-ingested ones:

- Ingested interviews: date, guest, title, `youtube_id`, duration, class, `status: ingested`, tag list, digest link.
- Recaps: same row shape with `status: catalog-only` (referenceable now, digestible later).
- The manifest is the answer surface for "what exists" queries; digests are the answer surface for "what was said."

## 6. Canonical tag taxonomy (v1, 2026-04-05)

Cross-episode and cross-IP theme correlation works because both catalogs draw from one controlled vocabulary. Use these exact slugs. `ip/dive-club` namespaces the IP; topic tags are shared.

**Design Practice:** `design-engineering`, `design-tools`, `design-systems`, `prototyping`, `visual-design`, `ux-research`
**Industry & Career:** `design-industry`, `job-market`, `junior-designers`, `career-growth`, `freelancing`, `portfolios`
**AI & Technology:** `ai-creative-tools`, `ai-impact`, `ai-agents`, `vibe-coding`, `code-as-material`
**Creative Process:** `creative-process`, `taste`, `craft`, `creative-control`, `tool-bending`
**Business & Founding:** `founder-stories`, `bootstrapping`, `product-strategy`, `content-creation`
**Culture & People:** `collaboration`, `feedback`, `game-feel`, `indie-software`

Rules:
- A digest carries 4–8 tags. Fewer strong tags beat many weak ones.
- New tags are *proposed*, not unilaterally used: flag them as staging candidates and they get promoted (or merged into an existing tag) on review. If your engine needs a tag we lack, send the proposal — this vocabulary is meant to evolve, just not fork.
- Anti-pattern to avoid: per-episode free-tagging. It's what makes "common themes between episodes" degrade into fuzzy string matching.

## 7. What you can ask me (query contract)

Route: Ridd asks in Slack (DM or #dive-radio-show). Answer shapes I return:

1. **Cross-episode theme queries** — "which episodes talked about anthropomorphizing AI" → episodes + specific mile-marker timecodes + short evidence quotes. Semantic matching, not just keyword (nobody has to have said the literal phrase).
2. **Theme/thread reports** — recurring topics across the ingested set, with per-episode evidence; optionally correlated against Tommy's catalog (30+ episodes, same taxonomy) for cross-IP patterns.
3. **Packaging drafts** — titles / descriptions / chapter markers for an episode, drafted from its digest.
4. **Clip candidates** — mile-marker rows scored for standalone-clip potential (self-contained claim, quotable line, ad-read-free range).
5. **Catalog facts** — what's ingested, what's catalog-only, what's pending.

Citation format in my answers: `episode-slug [MM:SS]` — your agent can resolve both halves via §3 keys.

Honest limits: coverage is 3 episodes until M3 backfill lands; timestamps ±30s; speaker attribution inferred (marked when low-confidence); recaps are catalog-only (no digest content yet).

## 8. Artifact exchange (if your engine produces things)

If Grok Bot generates artifacts we should be able to consume — theme maps, clip lists, its own digests — the contract is:

- **Format:** markdown with YAML frontmatter, one file per unit, carrying both §3 keys.
- **Digests:** match §4 or a superset (extra fields fine; missing keys/tags not fine).
- **Clip lists / theme maps:** no fixed schema yet — send one sample and I'll confirm it round-trips before you scale it. Cheap to align at n=1, expensive at n=50.
- **Delivery today:** file drop in Slack. If both sides start exchanging regularly, a shared folder/repo is the obvious upgrade — that's part of the open access decision (§9).
- **Batch norms we'll hold you to (learned the hard way):** small batches, incremental, each batch self-verifies with a count check and a PASS/FAIL line. A silent half-complete import is worse than a loud failure.

## 9. What's deliberately not in this doc (and how to unlock it)

- **Repo/vault locations, infrastructure map, schedules, tooling internals** — Tommy-private. Not needed for anything in §7–§8.
- **Direct search-index or file access for you/your agent** — architecturally ready (the per-IP collection design was built with collaborator permissions in mind) but explicitly an open decision from the 2026-08-11 planning session. Ask Tommy; if he approves, this spec gains a §10 with the access mechanics, and nothing in §1–§8 changes.

## 10. Fastest path to full coverage

1. Ridd confirms the `⚠ confirm` rows in `episodes-2026.md` (I can paste the flagged rows in Slack on request).
2. Ridd sanity-checks one pilot digest (Kyle Zantos 8/11) for mile-marker granularity.
3. M3 backfill runs batched → ~30 interviews ingested → every §7 query shape covers the full 2026 catalog.
4. Weekly job keeps it current from there.
