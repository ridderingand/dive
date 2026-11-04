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

## Icons

Every icon in the studio is from the **Central Icon System**, and they all live in `src/ui/icons.tsx`. Reuse one from there first. Never use Lucide, Phosphor, Heroicons, Material, an emoji or a hand-drawn SVG.

To add one, copy its body from the catalog in the Inflight repo, `apps/api/assets/central-icons.json`, into `src/ui/icons.tsx` as a named component. Use `bodies.outlined` by default and `bodies.filled` for a selected or active state. Colour comes from `currentColor`. If nothing fits, or you can't reach the catalog, ask Ridd.

Add only the icons the studio uses. Central's license forbids publishing the full set, so never commit the catalog here.

## Tooltips

Give a control a tooltip with `data-tip="Mute"`. Tooltips teach shortcuts, so keep the text to the control's name, never a sentence. If it has a keyboard shortcut, add `aria-keyshortcuts="M"` and the tooltip shows the key. Leave the shortcut off when it isn't bound in that mode, and keep the `?` sheet in `src/ui/ShortcutSheet.tsx` in step.

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
  "overlays": [
    { "type": "lower-third", "from": 1, "to": 4, "title": "James McDonald", "subtitle": "Designer" },
    { "type": "wordmark", "from": 0, "to": 89.8, "corner": "top-left" },
    // A screen share or B-roll floating over the talking head. Add sourceIn for unsynced B-roll.
    { "type": "screen-card", "from": 22, "to": 31, "source": "broll-facemesh", "sourceIn": 4 },
    { "type": "title-card", "from": 0, "to": 2.5, "text": "The random button era" }
  ],
  "endCap": false, "props": {}, "history": []
}
```

A cut can show two people side by side with `"split": { "source": "guest", "focus": { "x": 0.72, "y": 0.5 } }`. If the next cut is that same source, their half grows into it over `expandSeconds`. Any template can show overlays. `endCap: true` adds the 4-second Resolve animation after the clip.

```bash
bun run dive concept <clip> b --from a --template talk-vertical --name "Vertical cut" --intent "…"
bun run dive check <clip>            # house rules
bun run dive still <clip> b 12 45    # look at single frames before a full render
bun run dive render <clip> b
```

`<clip>` is any unique part of a slug, such as `random-button`. `bun run dive list` shows every clip, and `bun run dive styles` lists template and caption style ids. To find a moment, read the word timings in `captions.json`: a clip's payoff is usually its last sentence.

Read the brief in `clip.json` first: hook, payoff, beats, visual notes and open issues. Follow `system/rules.ts`. Look at stills yourself before you render or share. Emphasis words come from the bold words in `captionCopy`.

In `bun run dive check`, a `fail` must be fixed before you render. A `warn` doesn't block anything, but tell the person about it. A zoom's `level` multiplies a cut's `scale`.

## The review loop

1. Build a review: `bun run dive review <clip> --title "…" --note "…"`. It fits the previews into Inflight's limits in `dist/`.
2. Share it with Inflight's `share_app` tool: `build_dir: studio/dist`, `repo: ridderingand/dive`. Run the command it returns from the repo root. For a new round, pass the earlier link as `page`, so it joins the same project. With several concepts on one link, pass a `poll` in `questions` naming them, so a vote comes back with the feedback. Then record it: `bun run dive shared <clip> <link>`, which moves the concepts to `in-review` and links the round.
3. Ridd or Anna talks over the video with Inflight, scrubbing as they go. The studio keeps the playhead in its URL twice a second, and recordings log URL changes on the same clock as the voice.
4. Save the recording's `get_transcript` and `get_events` results to files, then run `bun run dive moments <clip> --transcript <file> --events <file>`. It writes `.work/moments/<clip>/moments.md`: every note tied to its clip time and concept, with the full-quality frame from that render. Read it instead of guessing from the recording. Timecodes are minutes, seconds, then frames: `01:29·19`.
5. Edit the concept, then record the round: `bun run dive round <clip> <concept> "What changed" --feedback <link>`. Reviewers read this line, so write it for Anna, not for an engineer. Render, and go back to step 1.
6. When a concept is picked: `bun run dive status <clip> <concept> picked`, then `bun run dive final <clip> <concept>` once Ridd or Anna asks. It prints the file path.

When a clip goes live, mark it with `bun run dive posted <clip>` (or the button in the studio), commit `clip.json`, and tick Shipped Short in Notion.

After each share, set the Notion row: Status to `Ready for review`, and the Inflight link where the Mixture link used to go. Never edit Descript compositions. Nothing goes out as final until Ridd or Anna asks.

## Dictated prompts

In the studio, Anna presses **Talk**, moves through the video and says what she'd change, then presses **Done**. The prompt lands on her clipboard, with each note on the moment that was on screen. She pastes it to you. Transcription runs on her machine, so her voice never leaves it. The history icon keeps past prompts, and `bun run dive prompts <clip>` prints the latest. To see a moment, use `bun run dive still <clip> <concept> <seconds>`.

## Cutting words

In the studio, Anna selects words in the transcript and presses Delete or the Cut button. Those words are struck through, and a prompt listing every cut so far lands on her clipboard. To apply it, add each stretch to the concept's `removals` in clip seconds, such as `"removals": [{ "from": 8.52, "to": 22.14 }]`. Record the round and render. Picture, dialogue and captions all close up, and a concept's other times stay in clip seconds. Check the join with `bun run dive still`. This shortens the concept only. It doesn't change Descript, which stays the source of the cut.

Dictated timecodes on a concept with removals are on the shortened video, not the original clip.

## Editing a template

Ridd will say something like "edit the talk square template". Change `templates/<id>/index.tsx`, or `system/dive.ts` when the change belongs to every clip. Preview it at `#/templates/<id>` in the studio, which runs the template live on placeholder footage. Any template or system change marks existing renders stale, and the studio says so. Re-render what matters with `bun run dive render --all`.

## Syncing from Notion

Query the Dive Club Clips data source (`collection://1c954bed-0e36-8052-a56d-000ba75d0b79`), write the rows to a JSON file, and run `bun run dive import notion <rows.json> [briefs dir]`. New guests need a `clips/<guest>/guest.json` first. Existing tracks and concepts are kept. Then save Descript's `get_project` result to a file and run `bun run dive import descript <file>`: it records each composition's length, so a stale `cuts.json` fails the checks, and it marks compositions Ridd renamed with `REMOVED`.

## Running it

```bash
bun install
bun run dive setup    # fetches caption fonts and the local speech model
bun run dev           # http://localhost:4410
bun test core cli
```

Renders use the installed Google Chrome, because Remotion's bundled browser crashes on start here. Set `DIVE_CHROME` to change it. Remotion is free for organisations of up to 3 people; a larger team needs a company license.
