# Inflight-relevant finder

Vault flags (not Bones tags) for Inflight.co-shaped gold:

- `prototype-feedback` — WIP / preview / Slack feedback loops
- `coded-prototypes` — shift from Figma → sharing coded prototypes / live previews
- `inflight-relevant` — umbrella (usually with one of the above)

## Backfilled (2026-09-10)

| Guest | Slug | Flags | Evidence |
|-------|------|-------|----------|
| Flora Guo | `2026-03-25-flora-guo` | coded-prototypes, inflight-relevant, prototype-feedback | Shares v0 / staging PR prototypes as the review artifact (not Figma-link handoff). |
| Brian Lovin | `2026-04-14-brian-lovin` | coded-prototypes, inflight-relevant, prototype-feedback | Half of AI product work can't live in Figma; designers build/ship outside the canvas. |
| Andy Madrick | `2026-05-26-andy-madrick` | coded-prototypes, inflight-relevant, prototype-feedback | Figma-link feedback broke for concurrent work → editable prototypes on rails. |
| Tommy Geoco | `2026-05-19-tommy-geoco` | coded-prototypes, inflight-relevant | State of Prototyping: vibe-coding designers; canvas + agentic coding as primitives. |
| Meaghan Choi | `2026-07-08-meaghan-choi` | coded-prototypes, inflight-relevant, prototype-feedback | Defaults to Claude Code; Figma only when she's faster — explicit tool-split for review. |
| Katarina Batina | `2026-05-12-katarina-batina` | coded-prototypes, inflight-relevant, prototype-feedback | Figma still canvas; code explosion changed what designers can productively ship/share. |
| Rafa Conde | `2026-05-05-rafa-conde` | coded-prototypes, inflight-relevant, prototype-feedback | Roles converging via AI prototypes — designers expected to code/share live work. |
| Emily Campbell | `2025-11-24-emily-campbell` | coded-prototypes, inflight-relevant | Living prototypes + Cursor as intent communication vs Figma Make handoff. |
| Drew Wilson | `2025-10-24-drew-wilson` | coded-prototypes, inflight-relevant | Single source of truth: no design/eng separation; today's Figma Dev Mode sales don't deliver. |
| Ian Silber | `2026-04-08-ian-silber` | coded-prototypes, inflight-relevant, prototype-feedback | Designing outside the pixels; AI tools shift practice beyond traditional canvas. |
| Patrick Morgan | `2026-08-18-patrick-morgan` | coded-prototypes, inflight-relevant, prototype-feedback | Static Figma detached from code fails enterprise systems; coded variants for alignment. |
| Ron Goldin | `2026-06-09-ron-goldin` | coded-prototypes, inflight-relevant, prototype-feedback | Prototypes are the new argument — felt/shared builds move orgs more than memos. |
| Tommy Smith | `2026-02-16-tommy-smith` | coded-prototypes, inflight-relevant | Client path: Figma-link → design-engineer shipping with AI coding tools. |
| Pablo Stanley | `2026-07-21-pablo-stanley` | coded-prototypes, inflight-relevant, prototype-feedback | Prototyper archetype: high volume of shareable coded ideas (v0 / HTML canvas). |
| Josh Puckett | `2026-03-12-josh-puckett` | coded-prototypes, inflight-relevant, prototype-feedback | v0/Claude as craft medium — agents compress implementation so prototypes get shared. |
| Nate Parrott | `2026-08-04-nate-parrott` | coded-prototypes, inflight-relevant, prototype-feedback | Claude Code unlock for software-output teams; designers get into the material and ship. |
| Steve Ruiz | `2025-12-01-steve-ruiz` | coded-prototypes, inflight-relevant | Code-on-canvas / Make Real future — localhost and live demos as the share surface. |
| Hannah Hearth | `2026-02-09-hannah-hearth` | inflight-relevant, prototype-feedback | Great designers share work very often and incorporate feedback (WIP review culture). |
| John Bai | `2026-08-25-john-bai` | inflight-relevant, prototype-feedback | Still starts in Figma often, but Cursor/Grok Bot work is reviewed as live product — hybrid. |
| Loredana Crisan | `2026-06-24-loredana-crisan` | prototype-feedback, inflight-relevant | Figma review bottleneck / how review gets unblocked — adjacent to Inflight review loops. |
| Marvin Schwaibold | `2026-04-02-marvin-schwaibold` | inflight-relevant, prototype-feedback | Internal visibility across Figma, video, demos, vibe tools — multi-surface share culture. |
| Cam Worboys | `2026-03-05-cam-worboys` | inflight-relevant, prototype-feedback | Prototype feedback / WIP share loops (already flagged; keep Inflight umbrella). |
| Luis Ouriach | `2026-03-10-luis-ouriach` | inflight-relevant | Design systems under LLM codegen — designers/engineers sharing higher-fidelity builds. |
| Katie Dill | `2026-02-23-katie-dill` | inflight-relevant, prototype-feedback | Prototype feedback culture (already flagged). |

| Kyle Turman | `2025-04-25-kyle-turman` | coded-prototypes, prototype-feedback, inflight-relevant | Half-finished Figma → finish in code; Slack personal notebook channels for WIP demos (Artifacts origin). |
| Jack Brody | `2025-04-11-jack-brody` | _(none)_ | Feedback = crit/conviction culture, not WIP coded-prototype share loops. |
| Sam Stephenson | `2025-03-28-sam-stephenson` | coded-prototypes, prototype-feedback, inflight-relevant | Fork app + live on coded prototypes for explore-mode; explicitly not Figma mocks. |

| Zach Leach | `2025-05-09-zach-leach` | coded-prototypes, prototype-feedback, inflight-relevant | Designers code/ship with Cursor; Figma fails for non-deterministic AI; 3 Bolt/code prototypes of AI image flow to find the fun; Slack working-prototype drops. |
| Tuhin Kumar | `2025-04-19-tuhin-kumar` | _(none)_ | Art/JTBD/system-prompt craft + playground prompt-smithing; closing Cursor/Lovable advice is personal practice, not team Figma→live-preview review culture. |

## How to scan later

```bash
rg -n 'flags:.*(coded-prototypes|inflight-relevant|prototype-feedback)' club/DIGEST-*.md
```

Counterexamples intentionally **not** flagged as `coded-prototypes` (opposite or weak):
- Charlie Deets — more Figma, less AI prototyping at work
- Brett Williams — personal Claude learning path, not team share-via-code culture
