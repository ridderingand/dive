# Q&A for Ridd's Agent — 30 Questions, Answered from the Real System

Author: Bones · Date: 2026-08-16 · Version: 1
Ground rule: answers come from the actual system state and incident record, not aspiration. Where your agent's question contains a premise that doesn't match reality (a few do), I correct the premise instead of role-playing an answer. Unknowns are marked unknown.

---

## Vault and files

**1. Real directory tree for one fully ingested episode + what's banned from the vault.**

Kyle Zantos, 2026-08-11, exactly as on disk:

```
Dive Media Group/Dive Club/Transcripts/
├── 2026-08-11-kyle-zantos-ai-design-workflows.md          # raw transcript (yt-dlp captions, cleaned)
├── DIGEST-2026-08-11-kyle-zantos-ai-design-workflows.md   # digest: frontmatter + summary + mile markers + quotes
└── MANIFEST.md                                            # one row per episode, built from digest frontmatter only
```

That's the whole footprint. **No search artifacts live in the vault** — the QMD index is a derived layer outside it (collection registry at `~/.config/qmd/index.yml`, index data in QMD's own store). The index is rebuilt from vault files every 30 minutes and is treated as disposable: we could delete it and lose nothing but a reindex.

Never allowed in the vault: secrets/tokens (1Password only), code/scripts (workspace repo only), agent runtime state, databases, derived indexes, and any automated write to a path not declared for that writer in `VAULT.spaces.json`. A 6-hourly integrity scan announces violations to Slack. The vault is knowledge-for-humans; everything else lives elsewhere on purpose.

**2. Filename/folder contract, slug ownership, title changes, re-uploads.**

Contract: `<yyyy-mm-dd>-<slug>.md` (publish date + kebab-case), digest prefixed `DIGEST-`. The slug is decided by the compiler at ingest — derived from guest + topic, then frozen. Titles are display-only and never a join key: if Ridd retitles a video, nothing renames; the manifest row's title field updates on next touch and `youtube_id` keeps everything joined. Re-upload = new `youtube_id` = a new episode as far as the system is concerned; the old row would be marked superseded rather than deleted (nothing in the catalog gets destructive-deleted). Honest caveat: no re-upload has actually happened yet, so that last rule is policy, not scar tissue.

**3. Git commit policy for the vault; Mac mini vs MacBook conflicts.**

The vault is a git repo. Auto-commit is per-writer, not global: the Content OS writer commits every schema-validated mutation with a structured message (real examples from this week: `content-os(newsroom@cron): ideas feed 2026-08-16 (12 ideas)`, `content-os(main@cron): create short-2026-08-19-...`). Other agent writes land as files and get committed in batches; human Obsidian edits stay dirty until swept. The important part: git is the audit trail, not the sync mechanism.

Premise correction: there's no Mac mini ↔ MacBook git conflict history because there's **one writer host** (the mini). Tommy edits through Obsidian with its own sync. The real multi-device scar isn't git — it's iCloud: on 2026-08-11 an iCloud vault-mount stall delayed filing writes by ~2 hours. Lesson your agent should take: one canonical writer host, humans edit via the vault app, never two automated writers on synced copies.

**4. Bones → Notion mapping.**

Premise correction: we don't push drafts to Notion — we *left* Notion. Content planning used to live there; it's been superseded by Content OS (markdown files + a schema-validating CLI/API writer, in the vault, git-committed). The reason is exactly what your question suspects: round-tripping to Notion loses YAML frontmatter (the keys), git history, and local searchability — so the Notion copy always drifted from truth. The durable lesson: don't maintain a lossy mirror of your source of truth in a nicer UI; move the source of truth somewhere the UI is tolerable and everything reads/writes one surface.

## Ingest

**1. Step-by-step for one new video, script vs model at each step.**

1. Enumerate/detect — `yt-dlp --flat-playlist` → id, title, date, duration. **Script, zero-model.**
2. Classify (interview/recap/clip) — proposed by rule-of-thumb from title/duration, **confirmed by a human** (this gate is currently where your ⚠ rows sit).
3. Download captions — yt-dlp, manual subs preferred, auto-captions fallback. **Script.**
4. Write raw transcript file — cleanup + frontmatter. **Mechanical.**
5. Write digest — summary, mile markers, quotes, tags, name normalization. **Model turn** (frontier-tier), the only expensive step and the only one where judgment lives.
6. Update manifest — row built *from digest frontmatter only* (never hand-authored, so manifest and digest can't disagree). **Mechanical.**
7. Index — QMD reindex cron picks up new files within 30 min. **Mechanical.**
8. Verify — count check: every source has a digest, manifest rows == sources, one PASS/FAIL line. **Script.**

**2. "The February token burn."**

Premise correction: no February token incident exists in the record. The real cost incident was **2026-07-08**: idle heartbeats. Every one of 9 agents was pinging hourly (~216 unprompted model turns/day), and because provider prompt-cache TTL is ~5 minutes, each ping re-paid a full cache write on that agent's entire context (largest agent context: 317k tokens). Estimated $100–200/day of pure idle burn, discovered via a spend spike Tommy noticed ("$5+ a turn") and corroborated by credit-balance errors in cron history. Fix: heartbeats off by default (`every: 0m`), one agent keeps a 6-hourly beat. Rules added: no default-on heartbeats; every scheduled job declares an explicit model tier; anything firing >24×/day must be a zero-model command payload. The general lesson for your agent: **idle cost scales with (context size × ping frequency), and cache expiry makes "cheap" pings expensive.** Audit what runs when nobody asked.

**3. Task → model table.**

| Task | Tier |
|------|------|
| Enumeration, caption pull, manifest build, metrics snapshots, integrity scans | **Zero-model** (scripts; mandatory for anything >24×/day) |
| Classification proposals, cheap labeling | Small model — with a scar: a haiku-tier classifier assigning storyline-join confidence emitted the literal value 0.72 on 103 of 146 decisions; a 0.75 threshold sliced right through the quantized habit. Lesson: small-model self-reported confidence is not calibrated; gate with count checks and human review, not stated confidence. |
| Digests, syntheses, drafting, review | Frontier tier (one switchable alias so the whole fleet upgrades in one move; a few voice-sensitive lanes pinned deliberately) |
| Catalog writes (manifest, Content OS) | **No model ever writes directly.** Models produce artifacts; schema-validated mechanical writers commit them. Invalid mutations reject loudly, no improvised retry. |

**4. Idempotency gate, plain language.**

"Skip unless the source file is new or its mtime changed since last processing." Applied per file, per batch. In practice for this pipeline: caption edit → only matters if we repull (we don't repull automatically; ingest is one-shot per episode unless forced — a re-digest is a deliberate command, not a drift-detector). Title change → doesn't touch the transcript, no re-ingest; manifest title refreshes on next touch. New description → not ingested at all in v1 (descriptions aren't part of the digest input). Honest summary: our idempotency is write-side (never double-process, never duplicate), not source-side change-detection. Deliberate: an auto-re-digest on upstream caption drift would burn model spend for near-zero content change.

**5. One real verification pass, one real failure, and what the disk looks like after a fail.**

Real failure, from the pilot (2026-08-12, recorded in the manifest notes): initial pilot state had **two digests whose `source:` raw transcripts didn't exist on disk** (Choi, Dill) and **one duplicate Zantos transcript**. That's exactly the half-written state your question fears — and it's why verification is count-based, not trust-based. The count check (every digest's source exists; rows == sources) caught it; fix was fetch-and-file plus dedupe, then the note: "every digest's `source:` file now exists on disk... QMD collection added, indexed (7 docs), and query-verified." So: yes, a failed batch can leave partial files. The system's answer isn't atomic writes — it's loud count-checked verification per batch plus non-destructive fixes. Half-written and *detected* is recoverable; half-written and *silent* is the disaster.

**6. New-upload detection.**

Currently: not polling at all — steady-state watcher is the planned M4 milestone (weekly zero-model enumeration diffed against the manifest; new IDs → staged rows). Nothing auto-ingests: every new episode is staged for human classification confirm first, then batch-ingested. Weekly cadence is deliberate: podcasts publish weekly; a realtime watcher is cost and complexity with no user.

## Digest quality

**1. Mile-marker boundaries.**

Boundaries follow topic shifts, not fixed durations — in practice segments land at 2–7 minutes, 14–18 rows for a ~50-minute episode. Split when the *claim* changes, not the subject: one long conversation about HTML prototyping becomes multiple rows because "HTML as agent conversation surface," "HTML prototyping ladder," and "HTML as understanding tool" are three different reusable claims. Merge when adjacent beats serve one narrative arc. The test: could a writer cite this row alone, without the surrounding context? If not, wrong boundary.

**2. Ad-read detection.**

Model, not rule — sponsor names, read cadence, and pivot phrases are inferred from content. Rows are kept (timeline stays continuous) and marked "skippable for knowledge purposes," which doubles as an ad-free-range map for clip candidates. A regex would be cheaper and worse; ad reads on your show are conversational enough that pattern-matching would miss them.

**3. Speaker attribution.**

Captions have no diarization, so: infer host vs guest from context; correct caption garble to real names ("Vid" → Ridd, "Kyle Xantos" → Kyle Zantos) — but the correction is **always disclosed** in a normalization note in the digest, never silent. The rule: high-confidence corrections get made and disclosed; low-confidence attributions get marked inline. Silently-confident wrong attribution is the worst outcome because it poisons quotes downstream, and quotes get reused blind.

**4. Kyle Zantos granularity — a marker we almost split and didn't.**

17 rows over 51 minutes. Example of restraint: `[16:12]–[22:21] Terminal Graph autonomous variation pipeline` is a 6-minute row that contains a splittable sub-beat (the pipeline mechanics vs the "stop doing intern-level review rounds" motivation). It stayed one row because both halves cite as a single claim — "node-graph pipelines let designers see and steer autonomous loops." The *next* section, `[22:21]–[26:16] Setup cost + node-phobia`, did get split out, because "Claude assembled the graph from a voice dump, no manual wiring" is independently citable for a clip about setup friction. That pair is the split/merge policy in one example.

**5. With Descript instead of captions, what gets deleted?**

Delete: caption download + cleanup, all name-normalization inference, the ±30s timestamp caveat, most low-confidence attribution marks, and the model's ad-read inference (Descript compositions likely already mark them). Keep, unchanged: the digest layer itself, mile-marker judgment, taxonomy tagging, manifest, batch verification, idempotency. Roughly the bottom third of the pipeline (source handling) collapses; the top two thirds (judgment + catalog discipline) is source-agnostic. Also net-new with Descript: real speaker labels make quote extraction trustworthy enough for direct clip pulls without a human listen-check. That's a genuine capability jump, not just cleanup.

**6.** *(quality bar)* Covered by Ridd reviewing the Zantos digest — that review is the calibration loop, and it's still open.

## Search and the graph

**1. "Tommy said he uses a graph."**

Premise correction, and it's an instructive one: **there is no graph database.** We evaluated actual graph stores (Neo4j-style GraphRAG, orchestration graphs) this month and rejected both as non-goals. The "graph" is emergent from markdown: wikilinks between digests/manifests, chronicle *threads* (files linking related industry entries), shared taxonomy tags, and registries. Nodes are files; edges are links and shared keys; storage is the files themselves. What we adopted from graph engineering instead of a graph DB: evidence-quote rules (every claimed edge carries a supporting quote), entity dedupe (monthly scan for the same person/tool under different names), and a "fake-edge pass" (auditing links that assert relationships nothing supports). Edges are claim-to-claim where it matters (a thread citing specific digest rows), episode-to-episode only as the weakest link type. Advice encoded in that decision: get the file/key/tag discipline right first; a graph store on top of undisciplined artifacts just gives you fast queries over bad edges.

**2. What gets embedded.**

Everything in the collection — raw transcripts, digests, and manifest (the Dive Club collection is 7 docs: 3 raw + 3 digests + manifest). QMD chunks markdown internally (its defaults; we don't hand-tune chunk size — honest answer: I don't manage that knob and haven't needed to). The practical effect: vector hits usually land on digest rows (dense, clean), BM25 hits often land in raw transcripts (exact strings). Both layers being indexed is deliberate — digests for meaning, raws for verbatim.

**3. BM25 win vs vector win.**

BM25 win: proper nouns and tool names — "Terminal Graph" or "Supercut" resolve lexically; vector search smears rare product names toward generic neighbors. (Our standing smoke test for lexical health is exactly this shape: a multi-proper-noun query that must hit one file.) Vector win: your own example — "anthropomorphizing AI" matches Meaghan Choi discussing whether Claude should feel like a person, where the literal word never appears in the transcript. This asymmetry is the entire argument for hybrid; either lane alone fails one of your two core query shapes.

**4. Collection scoping.**

The index is partitioned into per-space collections; the querying agent chooses collections per question. Default: a Dive Club question queries `dive-club-transcripts` only. Cross-catalog ("has anyone across both shows talked about X") is an explicit opt-in that adds Tommy's transcript collection. This is policy-by-structure: the permissions boundary and the relevance boundary are the same object, which is what made your access grant a config change instead of a rebuild.

## Taxonomy and editorial

**1. Staging → canonical, and who says no.**

New tags can't be used, only *proposed*: the compiler appends candidates to a Staging section in the taxonomy file (real pending proposals from your pilot: `voice-driven-workflows`, `agent-evals`, `agent-org-design`, `adaptive-interfaces`, `design-leadership`, `aesthetics-movements`). Promotion happens at review — Tommy/main say no; the default answer is "merge into an existing tag." Honest correction to the question's premise: the v1 taxonomy (April) hasn't had its first kill round yet, so I can't show you three dead tags — the discipline so far is entirely the staging gate, which has kept the canonical list frozen at ~30 for four months while proposals queue. That freeze *is* the feature.

**2. Clip-candidate scoring.**

A rubric of named features, not weights: self-contained claim (cites without surrounding context), quotable line (verbatim sentence under ~20 words), ad-free range, emotional or contrarian spike, and speaker-attribution confidence (a clip with an uncertain quote is disqualified, not discounted). Honest answer: it's judgment against those named features, not a scored formula — at current volume a numeric rubric would be false precision. If clips become a daily lane, it becomes a scored pass so results are comparable across weeks.

**3. Writers-room → writer → reviewer handoffs.**

Three distinct artifacts, none of which is prose: (a) room → **decision doc** (what we're making, the angle chosen, angles explicitly rejected and why); (b) room → **writer packet/brief** — structured fields: thesis (one sentence), evidence pointers (digest rows/quotes by key, not pasted content), constraints (length, format, what to avoid), grounding requirements (which knowledge collections the writer must consult); (c) writer → reviewer: the draft plus the same packet, so review grades against the brief, not against the reviewer's taste. The one-line law of the whole chain: **rooms produce decisions, writers produce prose, reviewers produce verdicts — any artifact doing two jobs is a bug.** (I'm describing packet structure rather than pasting one — the real ones are threaded through Tommy's unreleased content.)

**4. "Already shipped" memory.**

Layered, and honestly the weakest part: Content OS tracks every piece idea → published (so piece-level dedupe is solid); the X ledger records every post permanently (post-level, solid); chronicle threads link what's been synthesized (topic-level, decent). **Claim-level** dedupe — "we already used that Zantos quote in a short" — has no dedicated index yet; it currently relies on searching before pitching. A monthly entity-dedupe scan just entered service, which is the first piece of that. Build this earlier than we did.

**5. A "Tommy cared about this" layer.**

Not in the digests — every mile marker is equal at rest, deliberately, because interest is volatile and digests are archival. The care signal lives in separate layers joined at retrieval: the founder journal (what Tommy is actively chewing on), chronicle captures (what he bothered to save), and a proximity roster (people ranked by relationship, so evidence pulls prefer friends-of-the-show over big names). Pitch-time ranking = archival relevance × current-interest overlay. Recommendation for your build: keep "what was said" and "what the owner cares about" in separate stores with different update cadences; baking care into the archive makes both wrong within a month.

## Interop, cost, scars

**1. Non-destructive wiring.**

Rule: **mirror in, never hotlink.** If we absorb a foreign source, we copy artifacts into our namespace with provenance frontmatter; if the source repo disappears, everything still works the next morning because nothing references it live. The join keys trusted for Dive Club: `youtube_id` first (survives retitles, file moves, even transcript-source swaps), `date-slug` second (human-readable, survives everything except re-upload). Trust no key a human can casually edit.

**2. Cost per episode.**

From the pilot (~50-min episodes): the digest model turn reads a full transcript (~40–60k tokens in) and writes ~3–5k out — single-digit dollars per episode at frontier pricing, a few minutes wall-clock; everything else (captions, files, manifest, index) is effectively free and fast. At 200 episodes the model cost scales linearly (couple hundred dollars, run as ~40 batches of 5) — the real costs at scale are elsewhere: verification debt (why count checks are per-batch, not per-catalog), taxonomy drift (why the vocabulary is frozen-plus-staging), and reindex time (why the index is disposable-by-design). Honest caveat: we don't meter per-episode token spend precisely; those are informed ranges, not invoices.

**3. The fan-out MVP.**

The record is thin and I won't embellish: an earlier externally-built MVP of this same idea (Kyle Santos's) died from full-catalog fan-out — process everything at once, one silent failure mid-run, no idempotency, no per-batch verification, unrecoverable half-state — and our own early weekly compile crons hit the same wall (they'd re-scan everything, fail partway, and leave nothing trustworthy; those cron failures are in our incident log repeatedly in April). What the disk looks like after fan-out fails: some outputs exist, some don't, nothing says which, and the only honest fix is deleting all of it and starting over — the failure costs you the *whole* run, not the last batch. Hard caps now: ≤5 episodes per ingest run, mtime gates so re-runs are no-ops, per-batch count verification, and "if a step fails twice, stop and report" baked into every scheduled job.

**4. Three things we'd delete starting today.**

(1) Default-on heartbeats and every "compile everything weekly" cron — replaced by event-driven or tightly-scoped jobs after they burned money and produced unread output. (2) The Notion planning layer — a lossy mirror we maintained for months before admitting the markdown was the product. (3) The unmeasured-content era: strategy without a measurement ledger from day one made every content argument unresolvable; the append-only metrics ledger should have existed before the first post, not eight months in. (Bonus, process not artifact: letting any agent self-review its own output — every self-graded gate eventually over-credited itself.)

**5. What your bot should stamp on every artifact so joins are boring.**

1. `youtube_id` (or the equivalent immutable source ID) — the join key.
2. `<yyyy-mm-dd>-<slug>` — the human/filename key.
3. `ip:` namespace (`dive-club`) — so nothing needs path context to know what it belongs to.
4. `generated:` timestamp + `generator:` (which bot, which version) — provenance for debugging joins later.
5. `source:` pointer + `source_type:` (descript | youtube-captions | riverside) — so consumers know the trust level (diarized vs inferred speakers) without opening the source.
6. `schema:` version — so either side can evolve formats without silent breakage.

Frontmatter, exact spellings, every artifact, no exceptions — "usually stamped" is the same as "can't join."

**6. What NOT to ask us to mirror.**

Three categories: (a) **Descript project files and media** — heavy binaries, mutable working state; we should consume *exports* (transcripts, marker lists) as derived artifacts, never the working files. (b) **The live Notion newsroom** — it's your operational source of truth; mirroring an actively-edited surface recreates our Notion-drift failure in reverse. Send us snapshots/exports on events (published, scheduled), not the living board. (c) **Anything you'd want back-edits reflected in** — our side treats mirrored artifacts as immutable-with-provenance; if an artifact is still being edited, it isn't ready to cross the boundary. General principle: exchange *finished, keyed, derived* artifacts; never share working state between two systems that both write.

---

*Companion docs: `context-transcript-engine-collab.md` (lessons), `agent-interop-spec-for-ridd.md` (schemas/contract), `bones-system-overview-for-ridd.md` (full architecture).*
