import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadOnly } from '../../model/selectors/getProfileReadOnly/getProfileReadOnly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { Button } from '@/shared/ui/redesigned/Button';

interface IEditableProfileCardHeaderProps {
  className?: string;
}

export const EditableProfileCardHeader = memo(
  (props: IEditableProfileCardHeaderProps) => {
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
      <ToggleFeatures
        feature={'isAppRedesigned'}
        on={
          <HStack
            justify="between"
            max
            className={classNames(' ', {}, [className])}
          >
            <Text title={t('Profile')} />
            {canEdit &&
              (readOnly ? (
                <Button
                  variant="outline"
                  onClick={onEdit}
                  data-testid="EditableProfileCardHeader.EditButton"
                >
                  {t('Edit')}
                </Button>
              ) : (
                <HStack gap="12">
                  <Button
                    variant="outline"
                    onClick={onCancelEdit}
                    data-testid="EditableProfileCardHeader.CancelButton"
                    color="error"
                  >
                    {t('Cancel')}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={onSave}
                    data-testid="EditableProfileCardHeader.SaveButton"
                    color="success"
                  >
                    {t('Save')}
                  </Button>
                </HStack>
              ))}
          </HStack>
        }
        off={
          <HStack
            justify="between"
            max
            className={classNames(' ', {}, [className])}
          >
            <TextDeprecated title={t('Profile')} />
            {canEdit &&
              (readOnly ? (
                <ButtonDeprecated
                  theme={ButtonTheme.OUTLINED}
                  onClick={onEdit}
                  data-testid="EditableProfileCardHeader.EditButton"
                >
                  {t('Edit')}
                </ButtonDeprecated>
              ) : (
                <HStack gap="12">
                  <ButtonDeprecated
                    theme={ButtonTheme.OUTLINED_RED}
                    onClick={onCancelEdit}
                    data-testid="EditableProfileCardHeader.CancelButton"
                  >
                    {t('Cancel')}
                  </ButtonDeprecated>
                  <ButtonDeprecated
                    theme={ButtonTheme.OUTLINED}
                    onClick={onSave}
                    data-testid="EditableProfileCardHeader.SaveButton"
                  >
                    {t('Save')}
                  </ButtonDeprecated>
                </HStack>
              ))}
          </HStack>
        }
      />
    );
  }
);
