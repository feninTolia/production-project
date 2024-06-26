import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const AdminPage = () => {
  const { t } = useTranslation('Admin');
  return (
    <Page data-testid="AdminPage">
      <h1>{t('Admin page')}</h1>
    </Page>
  );
};

export default AdminPage;
