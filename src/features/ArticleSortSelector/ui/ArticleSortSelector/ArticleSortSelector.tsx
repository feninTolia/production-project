import { ArticleSortField } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames';
import { SortOrder } from '@/shared/types/sort';
import { ISelectOption, Select } from '@/shared/ui/deprecated/Select';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticleSortSelector.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { Text } from '@/shared/ui/redesigned/Text';

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
    <ToggleFeatures
      feature={'isAppRedesigned'}
      on={
        <VStack
          gap="8"
          className={classNames(cls.ArticleSortSelectorRedesigned, {}, [
            className,
          ])}
        >
          <Text text={t('Sort by:')} />
          <ListBox
            items={sortFieldOptions}
            value={sort}
            onChange={onChangeSort}
          />
          <ListBox
            items={orderOptions}
            value={order}
            onChange={onChangeOrder}
          />
        </VStack>
      }
      off={
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
      }
    />
  );
});
