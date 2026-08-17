# Agent contract

You are the one writer of this vault.

## Surfaces

- Write catalog here. Never dual-write a live clips/pitches inbox to Notion.
- Notion is production (episode pages, emails). One-way export of a *finished* artifact is fine.
- Reflect is off limits.
- Bones/Tommy: mirror-in later is allowed. Never hotlink their vault. Never make this vault depend on theirs.

## Stamps (every artifact, exact keys)

```yaml
schema: 1
ip: dive
show: club | radio | decimals
youtube_id:          # or empty if not a YT source
slug: yyyy-mm-dd-kebab
source_type: descript | youtube-captions | granola | other
source:              # descript URL, youtube URL, or relative path
generated: YYYY-MM-DD
generator: dive-club-ideas
```

Join keys: `youtube_id` first, `slug` second. Titles are display-only. A re-upload is a new `youtube_id`.

## Files per episode

- `show/YYYY-MM-DD-slug.md` — raw transcript (Descript markdown: speakers, markers, timecodes)
- `show/DIGEST-YYYY-MM-DD-slug.md` — summary, mile markers, quotes, tags
- Manifest row built from digest frontmatter only, never hand-authored

## Ingest

- Descript published composition is the transcript source of truth.
- Batches of 5 or fewer. Skip if the source file is unchanged.
- Only the digest is a model turn. Everything else is mechanical.
- Models do not write the catalog. Produce the artifact, then write the file.
- End every batch with one PASS/FAIL line: every digest has a source on disk, manifest rows == sources.
- Fail twice, stop, report. Do not fan out the whole catalog.

## Digests

- Mile markers split when the *claim* changes, about 2–7 minutes. Test: could a writer cite this row alone?
- Ad reads stay on the timeline, marked skippable.
- Name corrections are disclosed, never silent.
- Tags: 4–8 from `taxonomy.md` only. Propose new tags in Staging. Default is merge, not invent.

## Clips and pitches

- One file per clip in `clips/`. Status: `live` | `shipped` | `killed`.
- Weight when ranking gold: Granola highlights, then Descript markers / existing compositions, then inferred mile markers.
- `pitches/inbox.md` is the living list. Dated copies go in `pitches/YYYY-MM-DD.md` after Friday writer's room.
- Rooms produce decisions. Writers produce prose. Reviewers produce verdicts. Do not combine jobs.

## Search

- Do not build a second index until grep over this vault is actually not enough.
- Embed (later) both raw and digest. Hybrid: names/tools vs paraphrased themes.
