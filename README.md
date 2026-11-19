# PRIV Agent

A personal Chrome/Edge browser agent built from [Nanobrowser](https://github.com/nanobrowser/nanobrowser) 0.3.0 (upstream commit `291d5f3927ee4c4795b0ea4588f2b404838b3ff6`). Licensed under [Apache 2.0](LICENSE). The original project and its authors retain their attribution. This is an independent local fork, not an official Nanobrowser release.

## Install on Windows

1. Install Node.js 24 LTS and enable Corepack (`corepack enable`).
2. Extract the source ZIP, open PowerShell in that folder, run `corepack pnpm install --frozen-lockfile` and `corepack pnpm build`.
3. Open `chrome://extensions`, enable **Developer mode**, choose **Load unpacked**, and select the `dist` folder. In Edge, use `edge://extensions`.
4. Pin PRIV Agent, open its side panel and follow onboarding.

The release ZIP of `dist` can also be extracted and loaded unpacked. Chrome does not load a ZIP directly as an unpacked extension.

## Connect your model

Settings → Providers → Add a provider. OpenAI-compatible accepts a base URL, model ID, optional key and editable context window. Ollama (`http://localhost:11434`) and LM Studio (`http://localhost:1234`) have presets. Use **Test models** to check connectivity and tool calling, then select a default model. A model without tool calling cannot run the agent. The key is stored in this browser and sent to the selected model endpoint; use an endpoint you trust. The built-in agent uses one model per conversation, including research and summarization.

## Research and WhatsApp Web

The side panel accepts tasks such as: “Research five recent AI developments, cite the pages you actually read, draft a short WhatsApp message to Prateek, and ask before sending.” It can navigate and read pages, save Markdown reports, show action results, stop, retry, and export conversations. Its approval card asks for every classified write on `web.whatsapp.com`, even in Auto mode or with an Allow site rule. Review the selected conversation and complete message in WhatsApp Web and the card before approving. If the contact is ambiguous, choose it yourself. If login is required, sign in manually. After approval, verify the message in the intended chat. A visible message does not prove delivery or reading. Do not approve if the card does not show enough detail to verify the intended recipient and message.

**Manual check:** (1) load the unpacked extension, (2) connect a tool calling model, (3) sign into WhatsApp Web, (4) run the research prompt, (5) inspect visited sources and citations, (6) inspect contact and draft, (7) confirm approval is requested even in Auto mode, (8) approve one test message to a contact you control, (9) check the intended conversation for exactly one copy, (10) press Stop during another mock run to check cancellation. Never run a real send as an unattended automated test.

## Development and verification

`corepack pnpm type-check`, `corepack pnpm lint`, `corepack pnpm test`, `corepack pnpm build`. Browser scenario checks use `corepack pnpm install-chrome` then `corepack pnpm autorun scenarios` if Chrome for Testing is available. The agent's single loop, deterministic browser control layer, provider tests, permission modes, history and exports come from upstream. This fork changes visible branding, uses a light teal palette and original icon, disables production analytics and the upstream uninstall survey, and enforces fresh approval for WhatsApp writes. See [PRIVACY.md](PRIVACY.md) for data flows. No live model connection or real WhatsApp delivery is implied by a successful build.

## Rename later

Change the localized extension labels in `public/_locales/*/messages.json`, user-facing strings in `src/ui/locales/`, wordmark in `src/ui/icons.tsx`, icons in `public/icon-32.png` and `public/icon-128.png`, and the prompt identity in `src/agent/prompt.ts`. The internal `nb.*` storage keys and historical IndexedDB name remain stable to retain existing settings. Original source attribution remains in NOTICE, LICENSE, README and Settings → About.
