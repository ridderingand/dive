# Agent contract

You are the one writer of this vault.

## Surfaces

- Write catalog here. Never dual-write a live clips/pitches inbox to Notion.
- Notion is production (episode pages, ship kit only: TITLE, CATEGORY, GUEST, REC, DESCRIPTION, SHOW NOTES). No takeaways on episode pages.
- Reflect is personal journal only — off limits.
- Bones/Tommy: mirror-in later is allowed. Never hotlink their vault. Never make this vault depend on theirs. Exchange finished, keyed, derived artifacts only — never Descript working files, never the live Notion board.

## Backlog (continuous run)

- Scope: every episode listed on https://www.dive.club/episodes (including panels and multi-guest).
- `class: interview` for all of them (no recap/clip gate for this backlog).
- Transcript source: Descript published composition. Every episode is edited there — search Drive (first name → last name → full name) until found. YouTube captions only after search is exhausted and recorded as exhausted.
- Document already-mapped episodes in parallel with finishing Descript search.
- Push to `ridderingand/dive` after every PASS batch of ≤5.

## Stamps (every artifact, exact keys)

```yaml
schema: 1
ip: dive-club
show: club | radio | decimals
youtube_id:          # primary join key; empty only if truly no YT
slug: yyyy-mm-dd-kebab
source_type: descript | youtube-captions | granola | other
source:              # descript URL, youtube URL, or relative path
generated: YYYY-MM-DD
generator: dive-club-ideas
```

Join keys: `youtube_id` first, `slug` second. Titles are display-only. Re-upload = new `youtube_id` = new episode; mark old row superseded, never destructive-delete. Trust no key a human can casually edit.

## Vault footprint (Bones)

Per ingested episode under `club/` (or `radio/` / `decimals/`):

- `YYYY-MM-DD-slug.md` — raw transcript
- `DIGEST-YYYY-MM-DD-slug.md` — digest
- `MANIFEST.md` — one row per episode, built from digest frontmatter only (never hand-authored)

Banned from the vault: secrets/tokens, code/scripts as the product, agent runtime state, databases, derived search indexes. Index is disposable and outside the vault. One writer host; humans read via Obsidian; never two automated writers on synced copies.

## Ingest pipeline (Bones)

1. Enumerate site episodes + Descript map — mechanical / search.
2. Classify — for this backlog all `interview` (panels still interview class; note multi-guest in `guest:`).
3. Export Descript transcript (markdown, speakers + markers + timecodes on) — mechanical UI.
4. Write raw file + frontmatter — mechanical.
5. Write digest (summary, mile markers, quotes, Bones tags, Granola takeaways overlay) — **only model turn**.
6. Update MANIFEST from digest frontmatter — mechanical.
7. Verify — every digest `source:` exists on disk; manifest rows == sources; one PASS/FAIL line — script.
8. Push batch — after PASS.

Rules:

- Batches ≤5. Never full-catalog fan-out.
- Idempotency: skip unless source file is new or mtime changed. Re-digest is deliberate, not auto on caption drift.
- Fail twice → stop and report. Half-written + detected is OK; silent half-state is the disaster.
- Models never write the catalog directly. Produce artifact → schema-valid write → commit.
- Task tiers: enum/export/manifest/verify = zero-model; digests = frontier; no default-on heartbeats / idle ping burn.

## Digests (Bones-compatible)

```yaml
type: episode-digest
ip: dive-club
class: interview
status: ingested          # or catalog-only if staged without transcript yet
show: club
guest:
host: Ridd
title:
youtube_id:
url:
published: YYYY-MM-DD
duration_min:
tags: [ip/dive-club, ...] # 4–8 Bones slugs from taxonomy.md ONLY
flags: []                 # optional vault flags, NOT Bones tags — e.g. prototype-feedback
source:
source_type: descript
slug: yyyy-mm-dd-kebab
generated: YYYY-MM-DD
generator: dive-club-ideas
schema: 1
```

Body, in order:

1. `## Summary` — arc, core claims, why it matters. Descript: speakers/timecodes trusted (no ±30s caveat). Disclose name corrections, never silent.
2. `## Takeaways (Granola)` — when an Editing Granola note exists, paste/normalize Ridd's Takeaways here first. These are **primary gold**: Ridd's taste layer for what matters and what must stay searchable.
3. `## Mile Markers` — `| Timecode | Topic | Key claims | Gold |`. Split when the *claim* changes (~2–7 min), not the subject. Cite-alone test. Ad reads kept on timeline, marked skippable. `Gold` column: `takeaway` | `descript-marker` | `inferred` (weight in that order).
4. `## Notable Quotes` — timestamped, speaker-attributed; low-confidence marked (rare with Descript).

Mile-marker policy (Bones Kyle example): merge when halves cite as one claim; split when a sub-beat is independently citable.

## Taste / gold weighting (Ridd + Bones)

Everything in raw + digest stays searchable. Ranking / clip attention / Friday pitches weight:

1. **Granola Editing Takeaways** (highest — Ridd taste)
2. Descript markers / existing compositions
3. Inferred mile markers

Never bake "what Ridd cares about this month" into archival equality of all mile markers — Takeaways and `flags` / clip status carry care; digests stay archival.

## Tags (Bones)

- Exact Bones v1 slugs + `ip/dive-club` only in `tags:`.
- 4–8 strong tags. No free-tagging. Propose in `taxonomy.md` Staging; default is merge, not invent.
- Ridd clip topics are crosswalk-only (see taxonomy.md).

## Flags (vault-only, not Bones taxonomy)

Use `flags:` on digests and matching `clips/` files:

- `prototype-feedback` — episode discusses getting feedback on prototypes (sharing WIP, preview links, Slack feedback drops, review rounds on prototypes, etc.). Set when Takeaways or transcript clearly cover it. Do **not** invent a Bones tag for this.

## Clips and pitches

- One file per clip in `clips/`. Status: `live` | `shipped` | `killed`.
- Clip scoring features (Bones): self-contained claim, quotable line (~≤20 words), ad-free range, emotional/contrarian spike, speaker-attribution confidence (uncertain quote = disqualify).
- Stamp `youtube_id`, `slug`, timecodes, `flags`, and `gold_source: granola-takeaway | descript-marker | inferred`.
- `pitches/inbox.md` living list; dated copies after Friday room.
- Rooms → decisions/briefs; writers → prose; reviewers → verdicts. Any artifact doing two jobs is a bug.
- Claim-level "already shipped" : search before pitching; prefer not to re-ship the same takeaway/quote blind.

## Search

- Do not build a second index until grep over this vault fails.
- Later hybrid: BM25 (names/tools) + vectors (paraphrase) + rerank; embed raw + digest. Index disposable, outside vault.
- No graph DB — edges are links, shared tags, and claim citations with evidence quotes.

## Interop with Bones

- Same keys, digest schema (superset OK), tag vocabulary.
- Mirror in, never hotlink. Provenance frontmatter on anything absorbed.
- Do not ask Bones to mirror Descript projects/media, live Notion, or in-progress edits.
