import { CountrySelect } from '@/entities/Country';
import { CurrencySelect } from '@/entities/Currency';
import { classNames, Mods } from '@/shared/lib/classNames';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Input } from '@/shared/ui/deprecated/Input';
import { Text, TextAlign, TextTheme } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { IProfileCardProps } from '../ProfileCard/ProfileCard';
import cls from '../ProfileCard/ProfileCard.module.scss';
import { Loader } from '@/shared/ui/deprecated/Loader';

export const ProfileCardErrorDeprecated = () => {
  const { t } = useTranslation('profile');

  return (
    <Text
      theme={TextTheme.ERROR}
      title={t('Failed to load profile ')}
      text={t('Try to refresh the page')}
      align={TextAlign.CENTER}
    />
  );
};

export const ProfileCardDeprecated = memo((props: IProfileCardProps) => {
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
  const mods: Mods = { [cls.editing]: !readonly };

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
        <ProfileCardErrorDeprecated />
      </div>
    );
  }

  return (
    <div className={classNames(cls.ProfileCard, mods, [className])}>
      {data.avatar && (
        <div className={cls.avatarWrapper}>
          <Avatar src={data?.avatar} alt="avatar" />
        </div>
      )}

      <VStack gap="12">
        <Input
          value={data.firstname}
          placeholder={t('Your name')}
          readonly={readonly}
          onChange={onChangeFirstname}
          data-testid="ProfileCard.Firstname"
        />
        <Input
          value={data.lastname}
          placeholder={t('Your lastname')}
          readonly={readonly}
          onChange={onChangeLastname}
          data-testid="ProfileCard.Lastname"
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
      </VStack>
    </div>
  );
});
