import { CountrySelect } from '@/entities/Country';
import { CurrencySelect } from '@/entities/Currency';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Card } from '@/shared/ui/redesigned/Card';
import { Input } from '@/shared/ui/redesigned/Input';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { IProfileCardProps } from '../ProfileCard/ProfileCard';

export const ProfileCardLoaderRedesigned = () => {
  return (
    <VStack gap="16" max>
      <HStack max justify="center">
        <Skeleton width="128px" height="128px" borderRadius="100%" />
      </HStack>
      <HStack gap="32" max>
        <VStack gap="12" max>
          <Skeleton width="100%" height="32px" />
          <Skeleton width="100%" height="32px" />
          <Skeleton width="100%" height="32px" />
          <Skeleton width="100%" height="32px" />
        </VStack>
        <VStack gap="12" max>
          <Skeleton width="100%" height="32px" />
          <Skeleton width="100%" height="32px" />
          <Skeleton width="100%" height="32px" />
          <Skeleton width="100%" height="32px" />
        </VStack>
      </HStack>
    </VStack>
  );
};

export const ProfileCardErrorRedesigned = () => {
  const { t } = useTranslation('profile');

  return (
    <Text
      variant="error"
      title={t('Failed to load profile ')}
      text={t('Try to refresh the page')}
      align="center"
    />
  );
};

export const ProfileCardRedesigned = memo((props: IProfileCardProps) => {
  const {
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
      <Card padding="24" max>
        <ProfileCardLoaderRedesigned />
      </Card>
    );
  }

  if (error ?? !data) {
    return (
      <Card padding="24" max>
        <ProfileCardErrorRedesigned />
      </Card>
    );
  }

  return (
    <Card padding="24" max>
      <VStack gap="16">
        {data.avatar && (
          <HStack max justify="center">
            <Avatar size="128px" src={data?.avatar} alt="avatar" />
          </HStack>
        )}

        <HStack gap="32" max>
          <VStack gap="12" max>
            <Input
              value={data.firstname}
              placeholder={t('Max')}
              label={t('Name')}
              readonly={readonly}
              onChange={onChangeFirstname}
              data-testid="ProfileCard.Firstname"
            />
            <Input
              value={data.lastname}
              placeholder={t('Verstappen')}
              label={t('Lastname')}
              readonly={readonly}
              onChange={onChangeLastname}
              data-testid="ProfileCard.Lastname"
            />
            <Input
              value={data.age}
              placeholder={t('25')}
              label={t('Age')}
              readonly={readonly}
              onChange={onChangeAge}
            />
            <Input
              value={data.city}
              placeholder={t('City')}
              label={t('Monaco')}
              readonly={readonly}
              onChange={onChangeCity}
            />
          </VStack>
          <VStack gap="12" max>
            <Input
              value={data.username}
              placeholder={t('SuperMax')}
              label={t('Username')}
              readonly={readonly}
              onChange={onChangeUsername}
            />
            <Input
              value={data.avatar}
              label={t('Avatar')}
              placeholder={t('https://some.img.com.')}
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
        </HStack>
      </VStack>
    </Card>
  );
});
