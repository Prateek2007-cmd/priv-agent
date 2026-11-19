import { afterEach, describe, expect, it, vi } from 'vitest';
import { Permissions } from '../permissions';
import type { WriteQuestion } from '@src/browser-control';

afterEach(() => vi.unstubAllGlobals());

describe('WhatsApp write approvals', () => {
  it('asks on every send even in Auto mode with a remembered Allow rule', async () => {
    const stored = { 'nb.siteRules': { 'web.whatsapp.com': { rule: 'allow', setAt: '2026-01-01' } } };
    vi.stubGlobal('chrome', {
      storage: {
        local: { get: async () => stored, set: async () => {} },
        onChanged: { addListener: () => {} },
      },
    });
    const permissions = new Permissions();
    await permissions.ready();
    const question = { site: 'web.whatsapp.com' } as WriteQuestion;
    expect(permissions.decide('auto', question)).toMatchObject({ decision: 'ask', canRemember: false });
    expect(permissions.decide('ask', question)).toMatchObject({ decision: 'ask', canRemember: false });
    expect(permissions.decide('auto', { site: 'example.com' } as WriteQuestion).decision).toBe('run');
  });
});
