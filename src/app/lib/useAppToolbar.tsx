import { AppRoutes } from '@/shared/constants/router';
import { useRouteChange } from '@/shared/lib/router/useRouteChange';
import { ScrollToolbar } from '@/widgets/ScrollToolbar';
import { ReactElement } from 'react';

export function useAppToolbar() {
  const currentRoute = useRouteChange();

  const toolByAppRoute: OptionalRecord<AppRoutes, ReactElement> = {
    [AppRoutes.ARTICLES]: <ScrollToolbar />,
    [AppRoutes.ARTICLE_DETAILS]: <ScrollToolbar />,
  };

  return toolByAppRoute[currentRoute];
}
