import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import cls from './LoginForm.module.scss';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface ILoginFormProps {
  className?: string;
}

export const LoginForm: FC<ILoginFormProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();
  const [password, setPassword] = useState('');

  const onChange = (value: string) => {
    setPassword(value);
  };

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input placeholder={t('Enter username')} autoFocus />
      <Input
        placeholder={t('Enter password')}
        value={password}
        onChange={onChange}
      />
      <Button className={cls.loginBtn}>{t('Login')}</Button>
    </div>
  );
};
