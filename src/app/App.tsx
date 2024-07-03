import { getUserIsMounted, initAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { Navbar } from '@/widgets/Navbar';
import { PageLoader } from '@/widgets/PageLoader';
import { Sidebar } from '@/widgets/Sidebar';
import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppRouter } from './providers/router';
import { ToggleFeatures } from '@/shared/lib/features';
import { MainLayout } from '@/shared/layouts';

export const App: FC = () => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const isUserMounted = useSelector(getUserIsMounted);

  useEffect(() => {
    void dispatch(initAuthData());
  }, [dispatch]);

  if (!isUserMounted) {
    return <PageLoader />;
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <div className={classNames('app_redesigned', {}, [theme])}>
          <MainLayout
            header={<Navbar />}
            content={<AppRouter />}
            sidebar={<Sidebar />}
            toolbar={<div>TOOL</div>}
          />
        </div>
      }
      off={
        <div className={classNames('app', {}, [theme])}>
          <Navbar />

          <div className="content-page">
            <Sidebar />
            <AppRouter />
          </div>
        </div>
      }
    />
  );
};
