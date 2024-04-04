import {
  ProfileCard,
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadOnly,
  profileActions,
  profileReducer,
} from 'entities/Profile';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import DynamicModuleLoader, {
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

const initialReducers: ReducersList = { profile: profileReducer };

const ProfilePage = () => {
  const dispatch = useAppDispatch();

  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadOnly);

  useEffect(() => {
    void dispatch(fetchProfileData());
  }, [dispatch]);

  const onChangeFirstname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ firstname: value ?? '' }));
    },
    [dispatch]
  );
  const onChangeLastname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ lastname: value ?? '' }));
    },
    [dispatch]
  );
  const onChangeAge = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ age: Number(value) || 0 }));
    },
    [dispatch]
  );
  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ city: value ?? '' }));
    },
    [dispatch]
  );
  const onChangeUsername = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ username: value ?? '' }));
    },
    [dispatch]
  );
  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ avatar: value ?? '' }));
    },
    [dispatch]
  );
  const onChangeCurrency = useCallback(
    (value?: Currency) => {
      dispatch(profileActions.updateProfile({ currency: value }));
    },
    [dispatch]
  );
  const onChangeCountry = useCallback(
    (value?: Country) => {
      dispatch(profileActions.updateProfile({ country: value }));
    },
    [dispatch]
  );

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <ProfilePageHeader />
      <ProfileCard
        data={formData}
        isLoading={isLoading}
        readonly={readonly}
        error={error}
        onChangeFirstname={onChangeFirstname}
        onChangeLastname={onChangeLastname}
        onChangeAge={onChangeAge}
        onChangeCity={onChangeCity}
        onChangeAvatar={onChangeAvatar}
        onChangeUsername={onChangeUsername}
        onChangeCurrency={onChangeCurrency}
        onChangeCountry={onChangeCountry}
      />
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
