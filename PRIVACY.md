# PRIV Agent privacy

PRIV Agent runs as a Chrome/Edge extension. Conversations, model settings and API keys stay in this browser's local storage. The extension sends page content and your requests to the model endpoint **you configure** when you start an agent task. Your API key goes to that endpoint. If you choose a cloud provider, review its privacy terms before connecting it.

This fork does not send usage analytics to an upstream project. Its production build has no configured analytics destination and does not set an uninstall survey URL. Browser scenario tests use a local fixture endpoint; they do not run in a normal install.

The agent uses the browser control permissions described in the side panel. It may read pages you grant it access to, including pages where you are logged in. WhatsApp Web writes always ask for approval, even in Auto mode. Check the full recipient and message in the tab before approving. A model provider may receive page content and task instructions as part of the request. Chrome may also access sites you visit as it ordinarily does.

You can remove conversations or all stored extension data in Settings → Data. The extension does not transfer your browser login cookies to the model provider directly. The extension's saved files go to the browser's Downloads folder only after Chrome has granted download permission.

This project is based on [Nanobrowser](https://github.com/nanobrowser/nanobrowser) under the [Apache 2.0 license](LICENSE); that source attribution is separate from this fork's data handling.
