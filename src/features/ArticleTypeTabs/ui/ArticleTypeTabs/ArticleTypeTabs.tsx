import { IArticleType } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { ITabItem, Tabs as TabsDeprecated } from '@/shared/ui/deprecated/Tabs';
import { Tabs } from '@/shared/ui/redesigned/Tabs';
import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

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
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Tabs
          onTabClick={handleTabClick}
          tabs={typeTabs}
          value={value}
          className={className}
        />
      }
      off={
        <div className={classNames('', {}, [className])}>
          <TabsDeprecated
            onTabClick={handleTabClick}
            tabs={typeTabs}
            value={value}
          />
        </div>
      }
    />
  );
});
