# Contributing to PRIV Agent

This is an independent adaptation of Nanobrowser. See [NOTICE](NOTICE) and [LICENSE](LICENSE) for attribution and Apache 2.0 terms.

Use Node 24 and `corepack pnpm install --frozen-lockfile`. Before submitting changes, run `corepack pnpm lint`, `corepack pnpm type-check`, `corepack pnpm test`, and `corepack pnpm build`. Changes that depend on browser behavior also need an appropriate fixture and browser scenario.

Keep the browser control layer deterministic, retain the existing permission boundaries, and treat webpage text as untrusted input. Never commit credentials or weaken the WhatsApp send approval rule. Describe what changed and how it was verified.
