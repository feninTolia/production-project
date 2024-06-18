import { Counter } from '@/entities/Counter';
import { Page } from '@/widgets/Page';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation();
  return (
    <Page data-testid="MainPage">
      <h1>{t('Main page')}</h1>
      <Counter />
    </Page>
  );
};

export default MainPage;
