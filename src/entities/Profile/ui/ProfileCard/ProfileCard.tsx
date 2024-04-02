import { FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ProfileCard.module.scss';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface IProfileCardProps {
  className?: string;
}

export const ProfileCard: FC<IProfileCardProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('profile');
  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

  if (isLoading) {
    return <Loader />;
  }

  if (error ?? !data) {
    return <Text theme={TextTheme.ERROR} text={error} />;
  }
  console.log(data);

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={t('Profile')} />
        <Button theme={ButtonTheme.OUTLINED}>{t('Edit')}</Button>
      </div>
      <div className={cls.data}>
        <Input value={data.firstname} placeholder={t('Your name')} />
        <Input value={data.lastname} placeholder={t('Your surname')} />
      </div>
    </div>
  );
};
