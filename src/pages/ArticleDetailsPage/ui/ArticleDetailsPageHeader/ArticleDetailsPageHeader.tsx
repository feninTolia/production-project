import { getArticleDetailsData } from '@/entities/Article';
import {
  getRouteArticles,
  getRouteArticlesEdit,
} from '@/shared/constants/router';
import { classNames } from '@/shared/lib/classNames';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getCanEditArticle } from '../../model/selectors/article';
import cls from './ArticleDetailsPageHeader.module.scss';

interface IArticleDetailsPageHeaderProps {
  className?: string;
}
export const ArticleDetailsPageHeader = memo(
  (props: IArticleDetailsPageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const canEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetailsData);

    if (!article) {
      return null;
    }

    return (
      <div
        className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}
      >
        <AppLink to={getRouteArticles()}>
          <Button theme={ButtonTheme.OUTLINED}>{t('Back to list')}</Button>
        </AppLink>
        {canEdit && (
          <AppLink
            to={getRouteArticlesEdit(article.id)}
            className={cls.editButton}
          >
            <Button theme={ButtonTheme.OUTLINED}>{t('Edit')}</Button>
          </AppLink>
        )}
      </div>
    );
  }
);
