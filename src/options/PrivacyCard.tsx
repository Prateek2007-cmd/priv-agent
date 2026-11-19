// Settings → Data: describe the fork's local data and provider requests.
import { SettingsCard } from './SettingsCard';
import { t } from '@src/ui/i18n';

export function PrivacyCard() {
  return (
    <SettingsCard title={t('privacy.title')} className="flex flex-col gap-3">
      <p className="text-sm text-nb-muted">{t('privacy.localOnly')}</p>
      <p className="text-sm text-nb-muted">{t('privacy.providerFlow')}</p>
    </SettingsCard>
  );
}
