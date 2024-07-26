import { UiDesignSwitcher } from '@/features/uiDesignSwitcher';
import { ToggleFeatures } from '@/shared/lib/features';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Page } from '@/widgets/Page';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

interface SettingsPageProps {
  className?: string;
}

const SettingsPage = memo((props: SettingsPageProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <Page className={className}>
      <ToggleFeatures
        feature={'isAppRedesigned'}
        on={
          <VStack gap="16">
            <Text title={t('User settings')} />
            <UiDesignSwitcher />
          </VStack>
        }
        off={
          <VStack gap="16">
            <TextDeprecated title={t('User settings')} />
            <UiDesignSwitcher />
          </VStack>
        }
      />
    </Page>
  );
});

export default SettingsPage;
