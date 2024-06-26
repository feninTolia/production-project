import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';
import { Page } from '@/widgets/Page';

interface INotFoundPageProps {
  className?: string;
}

export const NotFoundPage: FC<INotFoundPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <Page
      data-testid="NotFoundPage"
      className={classNames(cls.NotFoundPage, {}, [className])}
    >
      {t('Page not found')}
    </Page>
  );
};
