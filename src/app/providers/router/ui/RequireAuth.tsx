import { getUserAuthData } from 'entities/User';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export function RequireAuth({ children }: { children: JSX.Element }) {
  const user = useSelector(getUserAuthData);
  const location = useLocation();

  if (!user) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
  }

  return children;
}
