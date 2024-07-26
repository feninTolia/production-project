import { Counter } from '@/entities/Counter';
import { getFeatureFlags, ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Page } from '@/widgets/Page';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation();
  const isCounterEnabled = getFeatureFlags('isCounterEnabled');

  return (
    <Page data-testid="MainPage">
      <ToggleFeatures
        feature={'isAppRedesigned'}
        on={
          <Text
            title={t('Main page 🦋')}
            text={t('Test')}
            size="m"
            variant="accent"
          />
        }
        off={<TextDeprecated title={t('Main page 🦋')} text={t('Test')} />}
      />

      {isCounterEnabled && <Counter />}
    </Page>
  );
};

export default MainPage;
