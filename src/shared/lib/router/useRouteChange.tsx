import { AppRouteByPathPattern, AppRoutes } from '@/shared/constants/router';
import { useEffect, useState } from 'react';
import { matchPath, useLocation } from 'react-router-dom';

export const useRouteChange = () => {
  const location = useLocation();
  const [appRoute, setAppRoute] = useState(AppRoutes.MAIN);

  useEffect(() => {
    Object.entries(AppRouteByPathPattern).forEach(([pattern, route]) => {
      if (matchPath(pattern, location.pathname)) {
        setAppRoute(route);
      }
    });
  }, [location.pathname]);

  return appRoute;
};
