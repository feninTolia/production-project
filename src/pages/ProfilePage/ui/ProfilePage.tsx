import {
  ProfileCard,
  fetchProfileData,
  profileReducer,
} from 'entities/Profile';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import DynamicModuleLoader, {
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

const initialReducers: ReducersList = { profile: profileReducer };

const ProfilePage = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div>{t('ProfilePage')}</div>
      <ProfileCard />
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
