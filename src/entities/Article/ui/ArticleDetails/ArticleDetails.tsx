import { memo, useCallback } from 'react';
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
  ArticleBlockTypes,
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../';
import { IArticleBlock } from '../../model/types/article';
import { ArticleCodeBlock } from '../ArticleCodeBlock/ArticleCodeBlock';
import { ArticleImageBlock } from '../ArticleImageBlock/ArticleImageBlock';
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';
import cls from './ArticleDetails.module.scss';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { HStack, VStack } from 'shared/ui/Stack';

interface IArticleDetailsProps {
  className?: string;
  id?: string;
}

const initialReducers = { articleDetails: articleDetailsReducer };

export const ArticleDetails = memo((props: IArticleDetailsProps) => {
  const { className, id } = props;
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const article = useSelector(getArticleDetailsData);
  const error = useSelector(getArticleDetailsError);
  const isLoading = useSelector(getArticleDetailsIsLoading);

  useInitialEffect(() => {
    void dispatch(fetchArticleById(id));
  });

  const renderBlock = useCallback((block: IArticleBlock) => {
    switch (block.type) {
      case ArticleBlockTypes.CODE:
        return (
          <ArticleCodeBlock
            title={block.title}
            code={block.code}
            key={block.id}
          />
        );
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
      <VStack gap="16">
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
      </VStack>
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
      <VStack gap="16">
        <HStack justify="center" max>
          <Avatar
            size="200px"
            src={article.img}
            alt="avatar"
            className={cls.avatar}
          />
        </HStack>
        <Text
          title={article.title}
          text={article.subtitle}
          size={TextSize.L}
          className={cls.headline}
        />
        <VStack gap="8">
          <HStack align="center" gap="8">
            <Icon Svg={EyeIcon} />
            <Text text={String(article.views)} />
          </HStack>
          <HStack align="center" gap="8">
            <Icon Svg={DateIcon} />
            <Text text={article.createdAt} />
          </HStack>
        </VStack>
        <VStack gap="32" className={cls.articleBlocks}>
          {article.blocks?.map(renderBlock)}
        </VStack>
      </VStack>
    );
  }

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div className={classNames(cls.contentWrapper, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  );
});
