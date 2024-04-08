import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticlesPage.module.scss';

interface IArticlesPageProps {
  className?: string;
}

const ArticlesPage = memo((props: IArticlesPageProps) => {
  const { className } = props;
  const { t } = useTranslation('article');

  return (
    <div className={classNames(cls.ArticlesPage, {}, [className])}>
      {t('ArticlesPage')}
    </div>
  );
});

export default ArticlesPage;
