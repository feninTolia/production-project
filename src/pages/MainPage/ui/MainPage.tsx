import { Counter } from '@/entities/Counter';
import { getFeatureFlags } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { Page } from '@/widgets/Page';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation();
  const isCounterEnabled = getFeatureFlags('isCounterEnabled');

  return (
    <Page data-testid="MainPage">
      <Text
        title={t('Main page 🦋')}
        text={t('Test')}
        size="m"
        variant="accent"
      />
      {isCounterEnabled && <Counter />}
    </Page>
  );
};

export default MainPage;
