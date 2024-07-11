import { IArticlesView } from '@/entities/Article';
import List from '@/shared/assets/icons/list.svg';
import Tiled from '@/shared/assets/icons/tiled.svg';
import { classNames } from '@/shared/lib/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Card } from '@/shared/ui/redesigned/Card';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { memo } from 'react';
import cls from './ArticleViewSelector.module.scss';
import { HStack } from '@/shared/ui/redesigned/Stack';

interface IArticleViewSelectorProps {
  className?: string;
  view: IArticlesView;
  onViewClick: (view: IArticlesView) => void;
}

export const ArticleViewSelector = memo((props: IArticleViewSelectorProps) => {
  const { className, view, onViewClick } = props;

  const viewTypes = [
    {
      view: IArticlesView.SMALL,
      icon: Tiled,
    },
    {
      view: IArticlesView.BIG,
      icon: List,
    },
  ];

  return (
    <ToggleFeatures
      feature={'isAppRedesigned'}
      on={
        <Card
          padding="8"
          border="rounded"
          className={classNames(cls.ArticleViewSelectorRedesigned, {}, [
            className,
          ])}
        >
          <HStack gap="8">
            {viewTypes.map((viewType) => (
              <Icon
                key={viewType.view}
                clickable
                onClick={() => onViewClick(viewType.view)}
                className={classNames('', {
                  [cls.notSelectedRedesigned]: view !== viewType.view,
                })}
                Svg={viewType.icon}
                width={30}
                height={30}
              />
            ))}
          </HStack>
        </Card>
      }
      off={
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
          {viewTypes.map((viewType) => (
            <Button
              key={viewType.view}
              theme={ButtonTheme.CLEAR}
              onClick={() => onViewClick(viewType.view)}
              className={classNames('', {
                [cls.notSelected]: view !== viewType.view,
              })}
            >
              <IconDeprecated Svg={viewType.icon} width={20} height={20} />
            </Button>
          ))}
        </div>
      }
    />
  );
});
