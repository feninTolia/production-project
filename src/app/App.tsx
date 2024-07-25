import { getUserIsMounted, initAuthData } from '@/entities/User';
import { AppLoaderLayout } from '@/shared/layouts/AppLoaderLayout';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { classNames } from '@/shared/lib/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { Navbar } from '@/widgets/Navbar';
import { PageLoader } from '@/widgets/PageLoader';
import { Sidebar } from '@/widgets/Sidebar';
import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppToolbar } from './lib/useAppToolbar';
import { AppRouter } from './providers/router';
import { withTheme } from './providers/ThemeProvider/ui/withTheme';

const App = memo(() => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const isUserMounted = useSelector(getUserIsMounted);
  const Toolbar = useAppToolbar();

  useEffect(() => {
    if (!isUserMounted) {
      void dispatch(initAuthData());
    }
  }, [dispatch, isUserMounted]);

  if (!isUserMounted) {
    return (
      <ToggleFeatures
        feature={'isAppRedesigned'}
        on={
          <div id="app" className={classNames('app_redesigned', {}, [theme])}>
            <AppLoaderLayout />
          </div>
        }
        off={<PageLoader />}
      />
    );
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <div id="app" className={classNames('app_redesigned', {}, [theme])}>
          <MainLayout
            header={<Navbar />}
            content={<AppRouter />}
            sidebar={<Sidebar />}
            toolbar={Toolbar}
          />
        </div>
      }
      off={
        <div id="app" className={classNames('app', {}, [theme])}>
          <Navbar />

          <div className="content-page">
            <Sidebar />
            <AppRouter />
          </div>
        </div>
      }
    />
  );
});

export default withTheme(App);
