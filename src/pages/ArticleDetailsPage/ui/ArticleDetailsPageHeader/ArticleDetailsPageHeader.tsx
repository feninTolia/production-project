import { getArticleDetailsData } from '@/entities/Article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RoutePath } from '@/shared/constants/router';
import { classNames } from '@/shared/lib/classNames';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
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

    return (
      <div
        className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}
      >
        <AppLink to={RoutePath.articles}>
          <Button theme={ButtonTheme.OUTLINED}>{t('Back to list')}</Button>
        </AppLink>
        {canEdit && (
          <AppLink
            to={`${RoutePath.article_details + article?.id}/edit`}
            className={cls.editButton}
          >
            <Button theme={ButtonTheme.OUTLINED}>{t('Edit')}</Button>
          </AppLink>
        )}
      </div>
    );
  }
);
