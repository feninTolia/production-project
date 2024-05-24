import { useTranslation } from 'react-i18next';
import { Page } from '@/shared/ui/Page/Page';

const AdminPage = () => {
  const { t } = useTranslation('Admin');
  return (
    <Page>
      <h1>{t('Admin page')}</h1>
    </Page>
  );
};

export default AdminPage;
