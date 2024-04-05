import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import cls from './ProfilePageHeader.module.scss';
import { useSelector } from 'react-redux';
import {
  getProfileReadOnly,
  profileActions,
  updateProfileData,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

interface IProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader: FC<IProfilePageHeaderProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const readOnly = useSelector(getProfileReadOnly);

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
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t('Profile')} />
      {readOnly ? (
        <Button theme={ButtonTheme.OUTLINED} onClick={onEdit}>
          {t('Edit')}
        </Button>
      ) : (
        <div className={cls.buttonsWrapper}>
          <Button theme={ButtonTheme.OUTLINED_RED} onClick={onCancelEdit}>
            {t('Cancel')}
          </Button>
          <Button theme={ButtonTheme.OUTLINED} onClick={onSave}>
            {t('Save')}
          </Button>
        </div>
      )}
    </div>
  );
};
