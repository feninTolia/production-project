import Eye from '@/shared/assets/icons/eye-outlined.svg';
import { getRouteArticlesDetails } from '@/shared/constants/router';
import { classNames } from '@/shared/lib/classNames';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleBlockTypes, IArticlesView } from '../../../model/constants';
import { IArticle, IArticleTextBlock } from '../../../model/types/article';
import { ArticleTextBlock } from '../../ArticleTextBlock/ArticleTextBlock';
import cls from './ArticleListItemRedesigned.module.scss';

interface IArticleListItemProps {
  className?: string;
  view: IArticlesView;
  article: IArticle;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItemRedesigned = memo(
  (props: IArticleListItemProps) => {
    const { className, article, view, target } = props;
    const { t } = useTranslation();

    const types = <Text text={article.type.join(', ')} className={cls.types} />;
    const views = (
      <HStack gap="8">
        <Icon Svg={Eye} className={cls.views} />
        <Text text={String(article.views)} />
      </HStack>
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
      <Card
        max
        className={classNames(cls.ArticleListItemRedesigned, {}, [
          className,
          cls[view],
        ])}
        data-testid="ArticleListItem"
        padding="24"
      >
        <HStack className={cls.header} gap="8">
          <Avatar size="32px" src={article.user.avatar ?? ''} alt="avatar" />
          <Text bold text={article.user.username} />
          <Text text={article.createdAt} />
        </HStack>

        <VStack gap="16">
          <Text title={article.title} bold size="l" />
          <Text title={article.subtitle} size="m" />

          <AppImage
            fallback={<Skeleton width="100%" height="250px" />}
            src={article.img}
            alt={article.title}
            className={cls.img}
          />
          {textBlock && (
            <ArticleTextBlock
              paragraphs={textBlock.paragraphs}
              className={cls.textBlock}
            />
          )}
          <HStack max justify="between" gap="16">
            <AppLink target={target} to={getRouteArticlesDetails(article.id)}>
              <Button variant="outline">{t('Read more... ')}</Button>
            </AppLink>
            {views}
          </HStack>
        </VStack>
      </Card>
    );
  }
);
