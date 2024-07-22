import { ArticleList } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useArticleRecommendationList } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList = memo(
  (props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { data: articles, isLoading } = useArticleRecommendationList(3);

    if (!articles || isLoading) {
      return null;
    }

    return (
      <VStack
        gap="8"
        className={classNames('', {}, [className])}
        data-testid="ArticleRecommendationsList"
      >
        <ToggleFeatures
          feature={'isAppRedesigned'}
          on={<Text title={t('Recommend')} bold size="l" />}
          off={<TextDeprecated title={t('Recommend')} size={TextSize.L} />}
        />

        <ArticleList
          articles={articles}
          target="_blank"
          isLoading={isLoading}
        />
      </VStack>
    );
  }
);
