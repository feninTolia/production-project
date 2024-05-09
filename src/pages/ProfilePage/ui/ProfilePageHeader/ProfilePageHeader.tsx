import {
  getProfileData,
  getProfileReadOnly,
  profileActions,
  updateProfileData,
} from 'entities/Profile';
import { getUserAuthData } from 'entities/User';
import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { HStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text/Text';

interface IProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader: FC<IProfilePageHeaderProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const readOnly = useSelector(getProfileReadOnly);
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);

  const canEdit = authData?.id === profileData?.id;

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    void dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <HStack justify="between" max className={classNames(' ', {}, [className])}>
      <Text title={t('Profile')} />
      {canEdit &&
        (readOnly ? (
          <Button theme={ButtonTheme.OUTLINED} onClick={onEdit}>
            {t('Edit')}
          </Button>
        ) : (
          <HStack gap="12">
            <Button theme={ButtonTheme.OUTLINED_RED} onClick={onCancelEdit}>
              {t('Cancel')}
            </Button>
            <Button theme={ButtonTheme.OUTLINED} onClick={onSave}>
              {t('Save')}
            </Button>
          </HStack>
        ))}
    </HStack>
  );
};
