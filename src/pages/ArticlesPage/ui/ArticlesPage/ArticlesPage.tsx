import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticlesPage.module.scss';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface IArticlesPageProps {
  className?: string;
}

const ArticlesPage = memo((props: IArticlesPageProps) => {
  const { className } = props;
  const { t } = useTranslation('article');

  return (
    <div className={classNames(cls.ArticlesPage, {}, [className])}>
      {t('ArticlesPage')}
      <hr />
      <AppLink to={RoutePath.articles + '/1'}>1</AppLink>
      <br />
      <AppLink to={RoutePath.articles + '/2'}>2</AppLink>
    </div>
  );
});

export default ArticlesPage;
