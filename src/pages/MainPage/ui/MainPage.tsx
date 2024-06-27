import { Counter } from '@/entities/Counter';
import { getFeatureFlags } from '@/shared/lib/features';
import { Page } from '@/widgets/Page';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation();
  const isCounterEnabled = getFeatureFlags('isCounterEnabled');

  return (
    <Page data-testid="MainPage">
      <h1>{t('Main page 🦋')}</h1>
      {isCounterEnabled && <Counter />}
    </Page>
  );
};

export default MainPage;
