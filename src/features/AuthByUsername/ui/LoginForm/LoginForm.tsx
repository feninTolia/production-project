import { classNames } from '@/shared/lib/classNames';
import DynamicModuleLoader from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { Input } from '@/shared/ui/redesigned/Input';
import { Text } from '@/shared/ui/redesigned/Text';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getLoginFormError } from '../../model/selectors/getLoginFormError/getLoginFormError';
import { getLoginFormIsLoading } from '../../model/selectors/getLoginFormIsLoading/getLoginFormIsLoading';
import { getLoginFormPassword } from '../../model/selectors/getLoginFormPassword/getLoginFormPassword';
import { getLoginFormUsername } from '../../model/selectors/getLoginFormUsername/getLoginFormUsername';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';
import { VStack } from '@/shared/ui/redesigned/Stack';

interface ILoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialReducers = { loginForm: loginReducer };

const LoginForm = memo((props: ILoginFormProps) => {
  const { className, onSuccess } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const password = useSelector(getLoginFormPassword);
  const username = useSelector(getLoginFormUsername);
  const isLoading = useSelector(getLoginFormIsLoading);
  const error = useSelector(getLoginFormError);

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );
  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
      window.location.reload();
    }
  }, [dispatch, onSuccess, password, username]);

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <ToggleFeatures
        feature={'isAppRedesigned'}
        on={
          <VStack
            gap="16"
            className={classNames(cls.LoginFormRedesigned, {}, [className])}
          >
            <Text title={t('Authorization form')} />
            {error && <Text variant="error" text={error} />}
            <Input
              placeholder={t('Enter username')}
              onChange={onChangeUsername}
              value={username}
              autoFocus
            />
            <Input
              placeholder={t('Enter password')}
              onChange={onChangePassword}
              value={password}
            />
            <Button
              className={cls.loginBtn}
              onClick={onLoginClick as () => void}
              disabled={isLoading}
              variant="filled"
            >
              {t('Login')}
            </Button>
          </VStack>
        }
        off={
          <div className={classNames(cls.LoginForm, {}, [className])}>
            <TextDeprecated title={t('Authorization form')} />
            {error && <TextDeprecated theme={TextTheme.ERROR} text={error} />}
            <InputDeprecated
              placeholder={t('Enter username')}
              onChange={onChangeUsername}
              value={username}
              autoFocus
            />
            <InputDeprecated
              placeholder={t('Enter password')}
              onChange={onChangePassword}
              value={password}
            />
            <ButtonDeprecated
              className={cls.loginBtn}
              onClick={onLoginClick as () => void}
              disabled={isLoading}
            >
              {t('Login')}
            </ButtonDeprecated>
          </div>
        }
      />
    </DynamicModuleLoader>
  );
});

export default LoginForm;
