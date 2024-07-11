import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { memo } from 'react';
import { useArticlesFilters } from '../../lib/hooks/useArticleFilters';

interface IViewSelectorContainerProps {
  className?: string;
}

export const ViewSelectorContainer = memo(
  (props: IViewSelectorContainerProps) => {
    const { className } = props;
    const { view, onChangeView } = useArticlesFilters();

    return (
      <ArticleViewSelector
        className={className}
        view={view}
        onViewClick={onChangeView}
      />
    );
  }
);
