import { getUserIsMounted, userActions } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppRouter } from './providers/router';
import { useTheme } from '@/shared/lib/hooks/useTheme';

export const App: FC = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const isUserMounted = useSelector(getUserIsMounted);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);
  console.log('theme in app - ', theme);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />

      <div className="content-page">
        <Sidebar />
        {isUserMounted && <AppRouter />}
      </div>
    </div>
  );
};
