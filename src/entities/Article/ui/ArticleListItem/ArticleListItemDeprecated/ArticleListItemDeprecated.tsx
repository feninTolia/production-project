import Eye from '@/shared/assets/icons/eye-outlined.svg';
import { getRouteArticlesDetails } from '@/shared/constants/router';
import { classNames } from '@/shared/lib/classNames';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Card } from '@/shared/ui/deprecated/Card';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { Text } from '@/shared/ui/deprecated/Text';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleBlockTypes, IArticlesView } from '../../../model/constants';
import { IArticle, IArticleTextBlock } from '../../../model/types/article';
import { ArticleTextBlock } from '../../ArticleTextBlock/ArticleTextBlock';
import cls from '../ArticleListItem.module.scss';

interface IArticleListItemProps {
  className?: string;
  view: IArticlesView;
  article: IArticle;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItemDeprecated = memo(
  (props: IArticleListItemProps) => {
    const { className, article, view, target } = props;
    const { t } = useTranslation();

    const types = <Text text={article.type.join(', ')} className={cls.types} />;
    const views = (
      <>
        <Text text={String(article.views)} className={cls.views} />
        <Icon Svg={Eye} />
      </>
    );

    if (view === IArticlesView.SMALL) {
      return (
        <AppLink
          target={target}
          to={getRouteArticlesDetails(article.id)}
          className={classNames(cls.articleListItem, {}, [
            className,
            cls[view],
          ])}
          data-testid="ArticleListItem"
        >
          <Card>
            <div className={cls.imageWrapper}>
              <AppImage
                fallback={<Skeleton width="200px" height="200px" />}
                src={article.img}
                alt={article.title}
                className={cls.img}
              />
              <Text text={article.createdAt} className={cls.date} />
            </div>
            <div className={cls.infoWrapper}>
              {types}
              {views}
            </div>
            <Text text={article.title} className={cls.title} />
          </Card>
        </AppLink>
      );
    }

    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockTypes.TEXT
    ) as IArticleTextBlock;

    return (
      <div
        className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
        data-testid="ArticleListItem"
      >
        <Card className={cls.card}>
          <div className={cls.header}>
            <Avatar size="30px" src={article.user.avatar ?? ''} alt="avatar" />
            <Text text={article.user.username} className={cls.username} />
            <Text text={article.createdAt} className={cls.date} />
          </div>
          <Text title={article.title} className={cls.title} />
          {types}
          <AppImage
            fallback={<Skeleton width="100%" height="250px" />}
            src={article.img}
            alt={article.title}
            className={cls.img}
          />
          {textBlock && (
            <ArticleTextBlock
              paragraphs={textBlock.paragraphs}
              title={textBlock.title}
              className={cls.textBlock}
            />
          )}
          <div className={cls.footer}>
            <AppLink target={target} to={getRouteArticlesDetails(article.id)}>
              <Button theme={ButtonTheme.OUTLINED}>{t('Read more... ')}</Button>
            </AppLink>
            {views}
          </div>
        </Card>
      </div>
    );
  }
);
