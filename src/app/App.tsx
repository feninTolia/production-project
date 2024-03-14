import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { classNames } from 'shared/lib/classNames';
import 'app/styles/index.scss';
import { useEffect } from 'react';

export const App = () => {
  const { theme } = useTheme();

  useEffect(() => {
    if (Math.random() < 0.5) {
      throw new Error();
    }
  }, []);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};
