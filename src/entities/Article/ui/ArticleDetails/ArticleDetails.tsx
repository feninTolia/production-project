import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames';
import DynamicModuleLoader from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Text, TextAlign, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Icon } from 'shared/ui/Icon/Icon';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import EyeIcon from 'shared/assets/icons/eye-outlined.svg';
import DateIcon from 'shared/assets/icons/date.svg';

import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../';
import { ArticleBlockTypes, IArticleBlock } from '../../model/types/article';
import { ArticleCodeBlock } from '../ArticleCodeBlock/ArticleCodeBlock';
import { ArticleImageBlock } from '../ArticleImageBlock/ArticleImageBlock';
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';
import cls from './ArticleDetails.module.scss';

interface IArticleDetailsProps {
  className?: string;
  id: string;
}

const initialReducers = { articleDetails: articleDetailsReducer };

export const ArticleDetails = memo((props: IArticleDetailsProps) => {
  const { className, id } = props;
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const article = useSelector(getArticleDetailsData);
  const error = useSelector(getArticleDetailsError);
  const isLoading = useSelector(getArticleDetailsIsLoading);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      void dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  const renderBlock = useCallback((block: IArticleBlock) => {
    switch (block.type) {
      case ArticleBlockTypes.CODE:
        return <ArticleCodeBlock title={block.title} code={block.code} />;
      case ArticleBlockTypes.IMAGE:
        return (
          <ArticleImageBlock
            title={block.title}
            src={block.src}
            key={block.id}
          />
        );
      case ArticleBlockTypes.TEXT:
        return (
          <ArticleTextBlock
            paragraphs={block.paragraphs}
            title={block.title}
            key={block.id}
          />
        );
      default:
        return null;
    }
  }, []);

  let content;
  if (isLoading) {
    content = (
      <div className={cls.ArticleDetailsSkeleton}>
        <Skeleton
          className={cls.skeletonAvatar}
          borderRadius="100%"
          width="200px"
          height="200px"
        />
        <Skeleton width="30%" height="32px" />
        <Skeleton width="60%" height="24px" />
        <Skeleton width="100%" height="200px" />
        <Skeleton width="100%" height="200px" />
      </div>
    );
  }
  if (error) {
    content = (
      <Text
        title={t('Article not found')}
        align={TextAlign.CENTER}
        theme={TextTheme.ERROR}
      />
    );
  }
  if (article) {
    content = (
      <>
        <div className={cls.avatarWrapper}>
          <Avatar
            size="200px"
            src={article.img}
            alt="avatar"
            className={cls.avatar}
          />
        </div>
        <Text
          title={article.title}
          text={article.subtitle}
          size={TextSize.L}
          className={cls.headline}
        />
        <div className={cls.infoBlock}>
          <Icon Svg={EyeIcon} />
          <Text text={String(article.views)} />
        </div>
        <div className={cls.infoBlock}>
          <Icon Svg={DateIcon} />
          <Text text={article.createdAt} />
        </div>
        <div className={cls.articleBlocks}>
          {article.blocks?.map(renderBlock)}
        </div>
      </>
    );
  }

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div className={classNames(cls.ArticleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  );
});