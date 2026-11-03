# Dive Studio: agent guide

This folder is the exception to the vault contract in the repo's root `AGENTS.md`: code lives here, and any agent may write here. Stay inside `studio/` and leave the vault alone.

Dive Studio takes a Dive Club clip from an approved cut to a shipped file. There is no timeline editor. **All editing is by prompt.** You change JSON or template code, render, and share.

```
clip  →  a file per person  →  concepts (template + cuts)  →  review on Inflight  →  final MP4
```

## Where things live

| Path | What |
|---|---|
| `clips/<guest>/guest.json` | Episode, accent colour, Descript project |
| `clips/<guest>/<clip>/clip.json` | The brief from Notion, sources and length |
| `clips/<guest>/<clip>/cuts.json` | Grok's cut list |
| `clips/<guest>/<clip>/captions.json` | Per-word captions (`dive-word-captions/v1`), plus an `em` flag per word |
| `clips/<guest>/<clip>/concepts/<id>.json` | **One concept: what you edit for a clip** |
| `templates/` | Remotion templates. `_kit/` is shared. A new one needs a folder, a line in `index.ts` and an entry in `registry.ts` |
| `system/dive.ts` | Colour, caption styles, timing, bubble size |
| `system/rules.ts` | House rules. `core/checks.ts` enforces the automatic ones |
| `media/` | Footage and renders. Never in git. Point `DIVE_MEDIA` at a synced Drive folder to share it between machines |
| `src/` | The studio you see in the browser |

**This repo is public.** Never commit footage, licensed fonts (`public/fonts/`), tokens or signed URLs.

## The files Grok delivers

Per clip, under `media/<guest>/<clip>/`: `guest.mp4`, `ridd.mp4`, `screenshare.mp4` (if any) and `audio.m4a`, all starting at clip time 0 and all the same length. B-roll that isn't synced goes in `media/<guest>/_broll/` and gets `"synced": false` in `clip.json`. Grok's raw tracks are per episode in Drive under `Dive Club Clips Raw/<Guest>`.

```bash
bun run dive trim <clip> --raw "<Drive>/Dive Club Clips Raw/<Guest>"   # add --keep-audio if the final mix is already in place
bun run dive captions <clip> --json <clip>.captions.json
```

The final mix attached to the Notion row is the real `audio.m4a`. Trim's own mix is only a fallback.

## Making concepts

A concept is a template, a caption style, and a list of cuts:

```jsonc
{
  "id": "b", "name": "Tanker words", "intent": "One loud word at a time.",
  "template": "talk-square", "format": "square", "captionStyle": "sky-tanker",
  "round": 1, "status": "draft",
  "cuts": [
    // from/to are clip seconds. sourceIn is seconds into the source file.
    // focus picks the crop (0 to 1). scale zooms around focus. offsetY is canvas pixels.
    { "source": "screenshare", "from": 0, "to": 8.4, "sourceIn": 0, "rate": 1, "focus": { "x": 0.3, "y": 0.5 }, "scale": 1.3, "offsetY": 0, "label": "Feature section" }
  ],
  "bubbles": [{ "source": "guest", "from": 0, "to": 8.4, "focus": { "x": 0.6, "y": 0.42 } }],
  "zooms": [{ "from": 36.7, "to": 38.9, "level": 1.3, "focus": { "x": 0.5, "y": 0.62 }, "transitionIn": 0.22, "transitionOut": 0.3 }],
  "endCap": false, "props": {}, "history": []
}
```

```bash
bun run dive concept <clip> b --from a --template talk-vertical --name "Vertical cut" --intent "…"
bun run dive check <clip>            # house rules
bun run dive still <clip> b 12 45    # look at single frames before a full render
bun run dive render <clip> b
```

Read the brief in `clip.json` first: hook, payoff, beats, visual notes and open issues. Follow `system/rules.ts`. Look at stills yourself before you render or share. Emphasis words come from the bold words in `captionCopy`.

## The review loop

1. Build a review: `bun run dive review <clip> --title "…" --note "…"`. It fits the previews into Inflight's limits in `dist/`.
2. Share it with Inflight's `share_app` tool: `build_dir: studio/dist`, `repo: ridderingand/dive`. Run the command it returns from the repo root. For a new round, pass the earlier link as `page`, so it joins the same project. With several concepts on one link, pass a `poll` in `questions` naming them, so a vote comes back with the feedback.
3. Ridd talks over the video with the Inflight widget. The large timecode under the player is on screen on purpose.
4. Read it with `get_feedback` on the link. For a recording, use `get_transcript`, and `get_frame` at each moment. Read the timecode from the frame to find the clip time, because the recording's clock is not the clip's clock.
5. Edit the concept, then record the round: `bun run dive round <clip> <concept> "What changed" --feedback <link>`. Render, and go back to step 1.
6. When a concept is picked: `bun run dive status <clip> <concept> picked`, then `bun run dive final <clip> <concept>` once Ridd or Anna asks. It prints the file path.

After each share, set the Notion row: Status to `Ready for review`, and the Inflight link where the Mixture link used to go. Never edit Descript compositions. Nothing goes out as final until Ridd or Anna asks.

## Editing a template

Ridd will say something like "edit the talk square template". Change `templates/<id>/index.tsx`, or `system/dive.ts` when the change belongs to every clip. Preview it at `#/templates/<id>` in the studio, which runs the template live on placeholder footage. Any template or system change marks existing renders stale, and the studio says so. Re-render what matters with `bun run dive render --all`.

## Syncing from Notion

Query the Dive Club Clips data source (`collection://1c954bed-0e36-8052-a56d-000ba75d0b79`), write the rows to a JSON file, and run `bun run dive import notion <rows.json> [briefs dir]`. New guests need a `clips/<guest>/guest.json` first. Existing tracks and concepts are kept. Then save Descript's `get_project` result to a file and run `bun run dive import descript <file>`: it records each composition's length, so a stale `cuts.json` fails the checks, and it marks compositions Ridd renamed with `REMOVED`.

## Running it

```bash
bun install
bun run dive setup    # fetches caption fonts
bun run dev           # http://localhost:4410
bun test core cli
```

Renders use the installed Google Chrome, because Remotion's bundled browser crashes on start here. Set `DIVE_CHROME` to change it. Remotion is free for organisations of up to 3 people; a larger team needs a company license.
