import { memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { ISelectOption, Select } from 'shared/ui/Select/Select';
import { ArticleSortField } from '../../model/constants';
import { SortOrder } from 'shared/types';
import cls from './ArticleSortSelector.module.scss';

interface IArticleSortSelectorProps {
  className?: string;
  order: SortOrder;
  sort: ArticleSortField;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: IArticleSortSelectorProps) => {
  const { className, order, sort, onChangeOrder, onChangeSort } = props;
  const { t } = useTranslation();

  const orderOptions = useMemo<Array<ISelectOption<SortOrder>>>(
    () => [
      { value: 'asc', content: t('ascend') },
      { value: 'desc', content: t('descent') },
    ],
    [t]
  );

  const sortFieldOptions = useMemo<Array<ISelectOption<ArticleSortField>>>(
    () => [
      { value: ArticleSortField.CREATED, content: t('date') },
      { value: ArticleSortField.TITLE, content: t('title') },
      { value: ArticleSortField.VIEWS, content: t('views') },
    ],
    [t]
  );

  return (
    <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
      <Select
        label={t('Sort by')}
        options={sortFieldOptions}
        value={sort}
        onChange={onChangeSort}
      />
      <Select
        label={t('by')}
        options={orderOptions}
        value={order}
        onChange={onChangeOrder}
      />
    </div>
  );
});
