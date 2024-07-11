import { ArticlesFilters } from '@/widgets/ArticlesFilters';
import { memo } from 'react';
import { useArticlesFilters } from '../../lib/hooks/useArticleFilters';

interface IFiltersContainerProps {
  className?: string;
}

export const FiltersContainer = memo((props: IFiltersContainerProps) => {
  const { className } = props;
  const {
    order,
    search,
    sort,
    type,
    handleChangeSort,
    handleChangeOrder,
    handleChangeSearch,
    handleTypeChange,
  } = useArticlesFilters();

  return (
    <ArticlesFilters
      className={className}
      type={type}
      order={order}
      sort={sort}
      search={search}
      onChangeType={handleTypeChange}
      onChangeOrder={handleChangeOrder}
      onChangeSort={handleChangeSort}
      onChangeSearch={handleChangeSearch}
    />
  );
});
