import { Counter } from '@/entities/Counter';
import { useTranslation } from 'react-i18next';
import { Page } from '@/shared/ui/Page/Page';

const MainPage = () => {
  const { t } = useTranslation();
  return (
    <Page>
      <h1>{t('Main page')}</h1>
      <Counter />
    </Page>
  );
};

export default MainPage;
