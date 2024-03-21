import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t('Main page')}</h1>
      <Counter />
    </div>
  );
};

export default MainPage;
