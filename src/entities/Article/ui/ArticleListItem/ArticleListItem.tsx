import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames';
import { Text } from '@/shared/ui/Text';
import { Icon } from '@/shared/ui/Icon';
import { Card } from '@/shared/ui/Card';
import { Avatar } from '@/shared/ui/Avatar';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { AppLink } from '@/shared/ui/AppLink';
import Eye from '@/shared/assets/icons/eye-outlined.svg';
import { IArticle, IArticleTextBlock } from '../../model/types/article';
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';
import cls from './ArticleListItem.module.scss';
import { ArticleBlockTypes, IArticlesView } from '../../model/constants';
import { getRouteArticlesDetails } from '@/shared/constants/router';
import { AppImage } from '@/shared/ui/AppImage';
import { Skeleton } from '@/shared/ui/Skeleton';

interface IArticleListItemProps {
  className?: string;
  view: IArticlesView;
  article: IArticle;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: IArticleListItemProps) => {
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
        className={classNames(cls.articleListItem, {}, [className, cls[view]])}
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
});
