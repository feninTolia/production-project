import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { classNames } from 'shared/lib/classNames';
import { FC } from 'react';

export const App: FC = () => {
  return (
    <div className={classNames('app', {}, [])}>
      <Navbar />

      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};
