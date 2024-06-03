import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import cls from './ArticleViewSelector.module.scss';
import { IArticlesView } from '@/entities/Article';
import List from '@/shared/assets/icons/list.svg';
import Tiled from '@/shared/assets/icons/tiled.svg';
import { Icon } from '@/shared/ui/Icon';
import { Button, ButtonTheme } from '@/shared/ui/Button';

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
          <Icon Svg={viewType.icon} />
        </Button>
      ))}
    </div>
  );
});
