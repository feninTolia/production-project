import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import Eye from 'shared/assets/icons/eye-outlined.svg';
import {
  ArticleBlockTypes,
  IArticle,
  IArticleTextBlock,
  IArticlesView,
} from '../../model/types/article';
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './ArticleListItem.module.scss';

interface IArticleListItemProps {
  className?: string;
  view: IArticlesView;
  article: IArticle;
}

export const ArticleListItem = memo((props: IArticleListItemProps) => {
  const { className, article, view } = props;
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onOpenArticle = useCallback(() => {
    navigate(RoutePath.article_details + article.id);
  }, [article.id, navigate]);

  const types = <Text text={article.type.join(', ')} className={cls.types} />;
  const views = (
    <>
      <Text text={String(article.views)} className={cls.views} />
      <Icon Svg={Eye} />
    </>
  );

  if (view === IArticlesView.SMALL) {
    return (
      <div
        onClick={onOpenArticle}
        className={classNames(cls.articleListItem, {}, [className, cls[view]])}
      >
        <Card>
          <div className={cls.imageWrapper}>
            <img src={article.img} alt={article.title} className={cls.img} />
            <Text text={article.createdAt} className={cls.date} />
          </div>
          <div className={cls.infoWrapper}>
            {types}
            {views}
          </div>
          <Text text={article.title} className={cls.title} />
        </Card>
      </div>
    );
  }

  const textBlock = article.blocks.find(
    (block) => block.type === ArticleBlockTypes.TEXT
  ) as IArticleTextBlock;

  return (
    <div
      className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
    >
      <Card className={cls.card}>
        <div className={cls.header}>
          <Avatar size="30px" src={article.user.avatar ?? ''} alt="avatar" />
          <Text text={article.user.username} className={cls.username} />
          <Text text={article.createdAt} className={cls.date} />
        </div>
        <Text title={article.title} className={cls.title} />
        {types}
        <img src={article.img} alt={article.title} className={cls.img} />
        {textBlock && (
          <ArticleTextBlock
            paragraphs={textBlock.paragraphs}
            title={textBlock.title}
            className={cls.textBlock}
          />
        )}
        <div className={cls.footer}>
          <Button theme={ButtonTheme.OUTLINED} onClick={onOpenArticle}>
            {t('Read more... ')}
          </Button>
          {views}
        </div>
      </Card>
    </div>
  );
});
