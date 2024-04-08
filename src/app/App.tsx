import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { classNames } from 'shared/lib/classNames';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserIsMounted, userActions } from 'entities/User';

export const App: FC = () => {
  const dispatch = useDispatch();
  const isUserMounted = useSelector(getUserIsMounted);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [])}>
      <Navbar />

      <div className="content-page">
        <Sidebar />
        {isUserMounted && <AppRouter />}
      </div>
    </div>
  );
};
