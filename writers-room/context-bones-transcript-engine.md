# Dive Club Transcript Engine — Context Doc for Ridd

Author: Bones (Tommy's agent) · Date: 2026-08-16
Audience: Ridd, building a transcript/theme/content engine (Grok Bot) for Dive Club
Purpose: (1) what's already built on Tommy's side, (2) the lessons Tommy paid for while building his version, (3) how to build yours so the two systems collaborate instead of diverging.

---

## 1. What already exists on our side

Short version: the exact system you're describing already runs for Tommy's catalog, and a Dive Club instance of it was scoped, approved, and pilot-tested this week.

**The pipeline (running since April 2026 on Tommy's catalog, 30+ episodes):**

```
YouTube captions (yt-dlp)
  → raw transcript file (markdown, one per episode)
  → DIGEST per episode ("mile markers": timestamped topic table + key claims + quotes)
  → MANIFEST (catalog index: episode rows, topic clusters, guest index)
  → hybrid search (BM25 keyword + vector embeddings + LLM reranking, local)
```

**Dive Club status as of today (PRD filed 2026-08-11, canonical copy lives in the shared Dive vault space):**

- **M1 done** — all 43 videos published on @joindiveclub in 2026 enumerated and classified (`interview` / `recap` / `clip`). A handful of rows are flagged `⚠ confirm` and need your call.
- **M2 done** — 3-episode pilot fully ingested: Kyle Zantos (8/11), Meaghan Choi (7/08), Katie Dill (2/23). Each has a raw transcript, a full digest with mile markers, a manifest row, and is live in its own search collection (`dive-club-transcripts`), namespaced so it never mixes with Tommy's catalog.
- **M3 pending** — full 2026 interview backfill (~30 episodes). Blocked on one thing: your confirmation of the flagged classifications.
- **M4 planned** — weekly cron that detects new uploads, stages them for ingest, and drafts packaging (titles/descriptions/chapters) from the digest.

So "which episodes talked about anthropomorphizing AI" is exactly the query shape this answers — today it only covers 3 episodes, but after M3 it covers the year.

---

## 2. What a digest looks like (the load-bearing artifact)

Every episode gets a `DIGEST-<date>-<slug>.md` with structured frontmatter and a mile-marker table:

```yaml
---
type: episode-digest
ip: dive-club
class: interview
status: ingested
guest: Kyle Zantos
host: Ridd
youtube_id: j_ytmrYU_zc
published: 2026-08-11
duration_min: 51
tags: [ip/dive-club, ai-creative-tools, design-engineering, prototyping, ...]
---
```

Body: a summary paragraph, then a table of `[timecode range] | topic | key claims`, then notable quotes with timestamps. Timestamps marked approximate (±30s) because auto-captions have no diarization.

The digest is the unit everything else consumes. Theme tracking, cross-episode queries, clip identification, article drafting — none of it re-reads raw transcripts. This is the single biggest design decision; see lesson 1 below.

---

## 3. Lessons from Tommy's trial and error

These are the things that broke, in rough order of cost.

**1. Digests beat embeddings-of-raw-transcripts.** The naive build is: chunk transcripts, embed, RAG over chunks. It answers "find me a quote" fine and fails at "what themes recur across episodes" — because themes live at the episode level, not the chunk level. The digest layer (human-readable, timestamped, tagged) is what makes cross-episode correlation, clip-finding, and packaging cheap. Build the digest layer first; embeddings second.

**2. Controlled tag vocabulary, or theme tracking dies.** We run a canonical taxonomy (~30 tags across 5 categories). Every digest draws from it; new tags go through a staging section before becoming canonical. If each episode invents its own tags, "common themes" becomes string-matching mush. Corollary for us specifically: Dive Club reuses Tommy's taxonomy with an `ip/dive-club` namespace tag rather than forking — cross-IP correlation (Dive Club × Tommy's catalog) only works because the tags are shared. If your Grok engine invents a third vocabulary, we lose that. Recommendation: adopt the same tag set, or at minimum map to it.

**3. Never full-catalog fan-out in one run.** Processing the whole catalog in one shot is the failure mode that killed an earlier MVP of exactly this idea and our own early weekly crons. Batches of ≤5 episodes, incremental, with a "was this file already processed / has the source changed" gate. Each batch verifies itself: every source has a digest, manifest row count matches source count, one PASS/FAIL line.

**4. Human gate on classification.** Title-only classification (interview vs. recap vs. clip) makes mistakes — one confirmation pass by a human is cheap and prevents garbage from entering the index. That's the gate currently waiting on you.

**5. Be honest about speaker attribution.** YouTube auto-captions have no diarization and mangle names (they render you as "Vid" and Kyle Zantos as "Kyle Xantos"). Our rule: infer host vs. guest from context, correct names, mark low-confidence attributions, stamp all timestamps ±30s. Silently-confident wrong attribution poisons quotes downstream. Riverside exports are the upgrade path if caption quality ever disappoints.

**6. Hybrid search, not vector-only.** Vector search misses exact names and tool mentions ("Terminal Graph", "Supercut"); keyword-only misses paraphrased concepts ("anthropomorphizing AI" when nobody said that word). BM25 + vectors + a reranking pass is the combination that actually answers both query shapes.

**7. Stable IDs everywhere.** YouTube video ID + `yyyy-mm-dd-slug` as the canonical keys on every artifact. Renamed titles, re-uploads, and cross-references all survive because the join key never changes. If your engine keeps the same two keys, our systems can cross-reference row-for-row.

**8. Separate retrieval from drafting.** The content-engine half (clips, articles, stitched ideas) works best as distinct stages: retrieval (search digests) → editorial decision (which ideas, what angle — a human or a deliberately-adversarial room, never autopilot) → drafting (voice-controlled) → independent review. Our writers-room produces decisions and briefs, never prose; a dedicated writing agent drafts; a separate reviewer grades. Every time we let one step do two jobs, quality dropped and nobody could tell where.

**9. Transcripts are voice ground truth; produced content is contaminated.** If you ever calibrate a writing engine on "sounds like Ridd," calibrate on unscripted transcript speech, not on published scripts/newsletters — those already contain editing artifacts and AI residue. This one cost Tommy a full voice-system rebuild.

**10. Verification is part of the pipeline, not an afterthought.** Every automated run ends with a measurable done-state and a one-line PASS/FAIL. Scheduled jobs that fail twice stop and report instead of retrying forever. Silent partial failure is worse than loud failure — a half-ingested catalog looks complete until a query lies to you.

---

## 4. Building yours for seamless collaboration with Bones

The interop surface is small and file-shaped. If your engine speaks these three things, the two systems compose:

1. **Same keys** — `youtube_id` + `yyyy-mm-dd-slug` on every artifact.
2. **Same digest schema** — the frontmatter block in §2 (or a superset). Markdown files, one per episode. If your engine emits digests in this shape, we can mirror them into the shared index and vice versa; you get Tommy-catalog cross-references for free.
3. **Same tag vocabulary** — ask and I'll export the canonical taxonomy list for you.

**What you can do through me today, no build required:**
- Ask cross-episode questions in Slack (DM or #dive-radio-show) — I query the ingested Dive Club collection plus Tommy's catalog and answer with episode + timecode citations.
- Request packaging drafts (titles/descriptions/chapters) for any ingested episode — drafted from the digest, not from scratch.
- Request theme/thread reports across whatever's ingested.

**Open decision (Tommy's call, flagging honestly):** direct access for you — i.e., you or your Grok engine querying our index directly instead of routing through me — is an explicitly open item from the 2026-08-11 planning session ("where Ridd reads/queries the artifacts"). The per-IP collection design was built with that in mind, so it's a permissions decision, not an architecture change. Raise it with Tommy.

**Division-of-labor suggestion so we don't build the same thing twice:** the ingest/digest/manifest layer for Dive Club already exists here — duplicating it in Grok Bot buys nothing. The highest-leverage thing for your engine is the front-of-house: your query UX, your editorial judgment, your clip/article assembly — consuming the same digest artifacts. If instead you want your engine to own ingest, keep the schema/keys/tags identical and we'll treat yours as the source and mirror in.

---

## 5. What's needed from you, concretely

1. **Confirm the flagged rows** in the 2026 episode list (the `⚠ confirm` ones — solo/compilation episodes that look like recaps, not interviews). This unblocks the full-year backfill.
2. **Review one pilot digest** (Kyle Zantos 8/11 is the best sample) and tell us if the mile-marker granularity is right for your use cases. Cheap to adjust now, expensive after 30 episodes.
3. **Decide your engine's export format** — if you're generating any artifacts (theme maps, clip lists), tell me the shape and I'll tell you if it round-trips.
4. **Ask Tommy about direct query access** if routing through me is too much friction.
