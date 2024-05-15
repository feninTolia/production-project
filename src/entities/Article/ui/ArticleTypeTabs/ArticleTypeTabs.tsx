import { IArticleType } from '../../model/constants';
import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { ITabItem, Tabs } from 'shared/ui/Tabs/Tabs';

interface IArticleTypeTabsProps {
  className?: string;
  value: IArticleType;
  onChangeType: (type: IArticleType) => void;
}

export const ArticleTypeTabs = memo((props: IArticleTypeTabsProps) => {
  const { className, value, onChangeType } = props;
  const { t } = useTranslation();

  const typeTabs = useMemo<ITabItem[]>(
    () => [
      { value: IArticleType.ALL, content: t('All articles') },
      { value: IArticleType.ECONOMICS, content: t('Economics') },
      { value: IArticleType.IT, content: t('IT') },
      { value: IArticleType.POLITICS, content: t('Politics') },
      { value: IArticleType.SCIENCE, content: t('Science') },
    ],
    [t]
  );

  const handleTabClick = useCallback(
    (tab: ITabItem) => {
      onChangeType(tab.value as IArticleType);
    },
    [onChangeType]
  );

  return (
    <div className={classNames('', {}, [className])}>
      <Tabs onTabClick={handleTabClick} tabs={typeTabs} value={value} />
    </div>
  );
});
