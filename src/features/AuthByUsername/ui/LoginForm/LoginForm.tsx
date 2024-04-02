import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { classNames } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import DynamicModuleLoader from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginFormIsLoading } from '../../model/selectors/getLoginFormIsLoading/getLoginFormIsLoading';
import { getLoginFormPassword } from '../../model/selectors/getLoginFormPassword/getLoginFormPassword';
import { getLoginFormUsername } from '../../model/selectors/getLoginFormUsername/getLoginFormUsername';
import { getLoginFormError } from '../../model/selectors/getLoginFormError/getLoginFormError';
import cls from './LoginForm.module.scss';

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
    }
  }, [dispatch, onSuccess, password, username]);

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div className={classNames(cls.LoginForm, {}, [className])}>
        <Text title={t('Authorization form')} />
        {error && <Text theme={TextTheme.ERROR} text={error} />}
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
        >
          {t('Login')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
