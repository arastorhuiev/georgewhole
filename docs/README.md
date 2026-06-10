# docs/ — non-app material

Everything here supports building the site but is **not part of the deployed app**
(`tsconfig` excludes `docs/`, and nothing under `src/` imports from it).

## Contents

| Folder | What it is |
|---|---|
| [`research/`](research/) | Independent audience / market / SEO research for «Новый Код» (RU write-ups, EN sources). Drives positioning, content clusters, and keywords. |
| [`design/`](design/) | The Claude Design handoff bundle — HTML/CSS/JS prototypes + chat transcripts the site was implemented from. **Read-only reference.** |
| [`planning/`](planning/) | `BUILD_PLAN.md` (the approved consensus build plan / ADR), `task.md` (original research brief), `new-code-short-summary.md` (book summary / source of tone & promises). |
| [`QUESTIONS.md`](QUESTIONS.md) | Open decisions for the site owner — copy/naming/content calls to resolve together. |

## Provenance: removed marketing-skill clones

During the research phase, two third-party skill repositories were cloned into the
project root and used as frameworks. They were **not** part of the website and have
been removed to keep this a clean app repo. If needed again, re-clone from upstream:

- `marketingskills` — https://github.com/coreyhaines31/marketingskills (primary)
- `devmarketing-skills` — https://github.com/jonathimer/devmarketing-skills (secondary)
