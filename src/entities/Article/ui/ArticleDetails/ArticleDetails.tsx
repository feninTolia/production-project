import DateIcon from '@/shared/assets/icons/date.svg';
import EyeIcon from '@/shared/assets/icons/eye-outlined.svg';
import { classNames } from '@/shared/lib/classNames';
import DynamicModuleLoader from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import {
  TextAlign,
  Text as TextDeprecated,
  TextSize,
  TextTheme,
} from '@/shared/ui/deprecated/Text';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetailsSelectors';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import cls from './ArticleDetails.module.scss';
import { RenderArticleBlock } from './RenderArticleBlock';

interface IArticleDetailsProps {
  className?: string;
  id?: string;
}

const initialReducers = { articleDetails: articleDetailsReducer };

const Deprecated = () => {
  const article = useSelector(getArticleDetailsData);

  if (!article) {
    return null;
  }

  return (
    <VStack gap="16" data-testid="ArticleDetails">
      <HStack justify="center" max>
        <Avatar
          size="200px"
          src={article.img}
          alt="avatar"
          className={cls.avatar}
        />
      </HStack>
      <TextDeprecated
        title={article.title}
        text={article.subtitle}
        size={TextSize.L}
        className={cls.headline}
      />
      <VStack gap="8">
        <HStack align="center" gap="8">
          <IconDeprecated Svg={EyeIcon} />
          <TextDeprecated text={String(article.views)} />
        </HStack>
        <HStack align="center" gap="8">
          <IconDeprecated Svg={DateIcon} />
          <TextDeprecated text={article.createdAt} />
        </HStack>
      </VStack>
      <VStack gap="32" className={cls.articleBlocks}>
        {article.blocks?.map(RenderArticleBlock)}
      </VStack>
    </VStack>
  );
};

const Redesigned = () => {
  const article = useSelector(getArticleDetailsData);

  if (!article) {
    return null;
  }

  return (
    <VStack gap="16" data-testid="ArticleDetails" className={cls.redesigned}>
      <div>
        <Text title={article.title} size="l" className={cls.headline} bold />
        <Text text={article.subtitle} size="l" />
      </div>
      <HStack justify="center" max>
        <AppImage
          src={article.img}
          alt="avatar"
          className={cls.articleImg}
          fallback={<Skeleton width="100%" height="420px" />}
        />
      </HStack>

      <VStack gap="32" className={cls.articleBlocks}>
        {article.blocks?.map(RenderArticleBlock)}
      </VStack>
    </VStack>
  );
};

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

  let content;
  if (isLoading) {
    content = (
      <ToggleFeatures
        feature={'isAppRedesigned'}
        on={
          <VStack gap="16" max>
            <Skeleton width="70%" height="32px" />
            <Skeleton width="40%" height="24px" />

            <Skeleton
              className={cls.skeletonAvatar}
              width="100%"
              height="420px"
            />

            <Skeleton width="100%" height="200px" />
            <Skeleton width="100%" height="200px" />
          </VStack>
        }
        off={
          <VStack gap="16">
            <SkeletonDeprecated
              className={cls.skeletonAvatar}
              borderRadius="100%"
              width="200px"
              height="200px"
            />
            <SkeletonDeprecated width="30%" height="32px" />
            <SkeletonDeprecated width="60%" height="24px" />
            <SkeletonDeprecated width="100%" height="200px" />
            <SkeletonDeprecated width="100%" height="200px" />
          </VStack>
        }
      />
    );
  }
  if (error) {
    content = (
      <ToggleFeatures
        feature={'isAppRedesigned'}
        on={
          <Text
            title={t('Article not found')}
            align={TextAlign.CENTER}
            variant="error"
          />
        }
        off={
          <TextDeprecated
            title={t('Article not found')}
            align={TextAlign.CENTER}
            theme={TextTheme.ERROR}
          />
        }
      />
    );
  }
  if (article) {
    content = (
      <ToggleFeatures
        feature={'isAppRedesigned'}
        on={<Redesigned />}
        off={<Deprecated />}
      />
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
