import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <span>{t('Main page')}</span>
    </div>
  );
};

export default MainPage;
