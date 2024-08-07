import { ArticleSortField, IArticleType } from '@/entities/Article';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import SearchIcon from '@/shared/assets/icons/SearchIcon.svg';
import { classNames } from '@/shared/lib/classNames';
import { SortOrder } from '@/shared/types/sort';
import { Card } from '@/shared/ui/redesigned/Card';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Input } from '@/shared/ui/redesigned/Input';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticlesFilters.module.scss';

interface IArticlesFiltersProps {
  className?: string;
  type: IArticleType;
  order: SortOrder;
  sort: ArticleSortField;
  search: string;
  onChangeType: (type: IArticleType) => void;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
  onChangeSearch: (newSearch: string) => void;
}

export const ArticlesFilters = memo((props: IArticlesFiltersProps) => {
  const {
    className,
    type,
    order,
    sort,
    search,
    onChangeType,
    onChangeSearch,
    onChangeOrder,
    onChangeSort,
  } = props;
  const { t } = useTranslation();

  return (
    <Card
      padding="24"
      className={classNames(cls.ArticlesFilters, {}, [className])}
    >
      <VStack gap="32">
        <Input
          placeholder={t('Search')}
          onChange={onChangeSearch}
          value={search}
          addonLeft={<Icon Svg={SearchIcon} height={32} width={32} />}
        />

        <ArticleTypeTabs value={type} onChangeType={onChangeType} />

        <ArticleSortSelector
          order={order}
          sort={sort}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
      </VStack>
    </Card>
  );
});
