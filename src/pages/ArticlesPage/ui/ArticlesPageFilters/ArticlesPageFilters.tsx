import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { classNames } from '@/shared/lib/classNames';
import { Card } from '@/shared/ui/deprecated/Card';
import { Input } from '@/shared/ui/deprecated/Input';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useArticlesFilters } from '../../lib/hooks/useArticleFilters';
import cls from './ArticlesPageFilters.module.scss';

interface IArticlesPageFiltersProps {
  className?: string;
}

export const ArticlesPageFilters = memo((props: IArticlesPageFiltersProps) => {
  const { className } = props;
  const { t } = useTranslation();

  const {
    order,
    search,
    sort,
    type,
    view,
    onChangeView,
    handleChangeSort,
    handleChangeOrder,
    handleChangeSearch,
    handleTypeChange,
  } = useArticlesFilters();

  return (
    <VStack gap="16" max className={classNames('', {}, [className])}>
      <HStack justify="between" align="center" max>
        <ArticleSortSelector
          order={order}
          sort={sort}
          onChangeOrder={handleChangeOrder}
          onChangeSort={handleChangeSort}
        />
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
      </HStack>
      <Card className={cls.search}>
        <Input
          placeholder={t('Search')}
          onChange={handleChangeSearch}
          value={search}
        />
      </Card>
      <ArticleTypeTabs value={type} onChangeType={handleTypeChange} />
    </VStack>
  );
});
