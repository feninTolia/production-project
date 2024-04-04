import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Mods, classNames } from 'shared/lib/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { IProfile } from '../../model/types/profile';
import { Country, CountrySelect } from 'entities/Country';
import cls from './ProfileCard.module.scss';

interface IProfileCardProps {
  className?: string;
  data?: IProfile;
  isLoading?: boolean;
  readonly?: boolean;
  error?: string;
  onChangeFirstname?: (value?: string) => void;
  onChangeLastname?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (value?: Currency) => void;
  onChangeCountry?: (value?: Country) => void;
}

export const ProfileCard: FC<IProfileCardProps> = (props) => {
  const {
    className,
    data,
    isLoading,
    readonly,
    error,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeAvatar,
    onChangeUsername,
    onChangeCurrency,
    onChangeCountry,
  } = props;
  const { t } = useTranslation('profile');
  if (isLoading) {
    return (
      <div
        className={classNames(cls.ProfileCard, {}, [className, cls.loading])}
      >
        <Loader />
      </div>
    );
  }

  if (error ?? !data) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          title={t('Failed to load profile ')}
          text={t('Try to refresh the page')}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  const mods: Mods = { [cls.editing]: !readonly };
  return (
    <div className={classNames(cls.ProfileCard, mods, [className])}>
      {data.avatar && (
        <div className={cls.avatarWrapper}>
          <Avatar src={data?.avatar} alt="avatar" />
        </div>
      )}

      <div className={cls.data}>
        <Input
          value={data.firstname}
          placeholder={t('Your name')}
          readonly={readonly}
          onChange={onChangeFirstname}
        />
        <Input
          value={data.lastname}
          placeholder={t('Your surname')}
          readonly={readonly}
          onChange={onChangeLastname}
        />
        <Input
          value={data.age}
          placeholder={t('Your age')}
          readonly={readonly}
          onChange={onChangeAge}
        />
        <Input
          value={data.city}
          placeholder={t('Your city')}
          readonly={readonly}
          onChange={onChangeCity}
        />
        <Input
          value={data.username}
          placeholder={t('Your username')}
          readonly={readonly}
          onChange={onChangeUsername}
        />
        <Input
          value={data.avatar}
          placeholder={t('Your avatar')}
          readonly={readonly}
          onChange={onChangeAvatar}
        />
        <CurrencySelect
          readonly={readonly}
          value={data.currency}
          onChange={onChangeCurrency}
        />
        <CountrySelect
          readonly={readonly}
          value={data.country}
          onChange={onChangeCountry}
        />
      </div>
    </div>
  );
};
