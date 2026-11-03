---
name: dive-clips
description: Use for any Dive Club clip work in this repo. Making or changing concepts, editing templates, rendering, sharing a review on Inflight, or applying Ridd's feedback.
---

Read `studio/AGENTS.md` and follow it. In short: edit `clips/<guest>/<clip>/concepts/<id>.json`, run `bun run dive check <clip>`, look at `bun run dive still`, then `bun run dive render <clip> <concept>`. Share with `bun run dive review <clip>` and Inflight's `share_app` on `studio/dist`.

When you finish, end your reply with the Inflight link, and the local link to the exact moment: `http://localhost:4410/#/clips/<guest>/<clip>?c=<concept>&t=<seconds>`.
