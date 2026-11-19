# PRIV Agent developer guide

PRIV Agent is a Chrome/Edge MV3 extension based on upstream Nanobrowser 0.3.0. See `NOTICE` and `LICENSE` for origin and licensing. This is an independent project; do not push to the upstream repository.

## Layout

- `src/browser-control/`: deterministic browser observation and interaction through Chrome debugger and Puppeteer frame management.
- `src/agent/`: single agent loop, prompt, context and task records.
- `src/llm/`: model providers and capability probes.
- `src/extension/`: background worker, permissions, prompts and run manager.
- `src/side-panel/`, `src/options/`, `src/ui/`: product interface and localized strings.
- `src/store/`: browser-local settings, history and keys.
- `fixtures/`: local pages and browser scenario runner.

## Safety invariants

- The browser control layer is deterministic and has no model calls. Other code imports it through `src/browser-control/index.ts`.
- An action uses a ref shown in the current document. Stale refs fail closed; retries after input dispatch do not silently repeat the action.
- Report input dispatch, page reaction and expected state separately. Do not claim a result that has not been observed.
- Page content is untrusted data. Write actions on WhatsApp Web always require fresh user approval, even in Auto mode. Payments and sensitive authentication remain user steps.
- Stop must cancel pending work and approval prompts. Do not log keys, passwords, tokens or sensitive page content.
- Existing `nb.*` storage keys and the historical IndexedDB name are deliberately retained so earlier PRIV Agent installs do not lose data. Previous-version migration fixtures retain upstream identifiers.

## Commands

Use Node 24 and pinned pnpm via Corepack: `corepack pnpm install --frozen-lockfile`, then `corepack pnpm lint`, `corepack pnpm type-check`, `corepack pnpm test` and `corepack pnpm build`. The unpacked extension is `dist/`. For browser scenarios use `CHROME_PATH=<chrome-for-testing> corepack pnpm autorun scenarios` or install the stable test browser with `corepack pnpm install-chrome`.

## Branding

Current product name is PRIV Agent. Change localized browser strings in `public/_locales`, app strings in `src/ui/locales`, the wordmark in `src/ui/icons.tsx`, the generated icons in `public/`, and the agent identity in `src/agent/prompt.ts` when renaming. Maintain original source attribution in `NOTICE`, `LICENSE`, README and Settings → About.
