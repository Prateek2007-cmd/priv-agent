// The extension's bundled guide; opening it does not visit an upstream site.
export const websiteUrl = (_path: '/' | '/docs', _place: 'side-panel' | 'settings' | 'about') =>
  chrome.runtime.getURL('help.html');
