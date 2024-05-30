import { classNames } from '@/shared/lib/classNames';
import { Button } from '@/shared/ui/Button/Button';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './PageError.module.scss';

interface IPageErrorProps {
  className?: string;
}

export const PageError: FC<IPageErrorProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();
  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <h1>{t('Something went wrong')}</h1>
      <Button onClick={reloadPage}>{t('Reload page')}</Button>
    </div>
  );
};
