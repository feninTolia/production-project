import { profileReducer } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import DynamicModuleLoader, {
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const ProfilePage = () => {
  const { t } = useTranslation();
  const initialReducers: ReducersList = { profile: profileReducer };

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div>{t('ProfilePage')}</div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
