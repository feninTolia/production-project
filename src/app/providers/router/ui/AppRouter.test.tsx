import { renderComponent } from '@/shared/lib/tests/renderComponent/renderComponent';
import { AppRouter } from './AppRouter';
import {
  getRouteAbout,
  getRouteAdmin,
  getRouteProfile,
} from '@/shared/constants/router';
import { screen } from '@testing-library/react';
import { UserRole } from '@/entities/User';

describe('app/providers/router/AppRouter', () => {
  test('Page should render', async () => {
    renderComponent(<AppRouter />, {
      route: getRouteAbout(),
    });

    const page = await screen.findByTestId('AboutPage');

    expect(page).toBeInTheDocument();
  });

  it('should render NotFoundPage', async () => {
    renderComponent(<AppRouter />, {
      route: '/dsdsdsd',
    });

    const page = await screen.findByTestId('NotFoundPage');

    expect(page).toBeInTheDocument();
  });

  it('should render profile page', async () => {
    renderComponent(<AppRouter />, {
      route: getRouteProfile('1'),
      initialState: { user: { authData: {} } },
    });

    const page = await screen.findByTestId('ProfilePage');

    expect(page).toBeInTheDocument();
  });

  it('should redirect on main page if no auth data', async () => {
    renderComponent(<AppRouter />, {
      route: getRouteProfile('1'),
      initialState: {},
    });

    const page = await screen.findByTestId('MainPage');

    expect(page).toBeInTheDocument();
  });

  it('should redirect on forbidden page if user has not access role', async () => {
    renderComponent(<AppRouter />, {
      route: getRouteAdmin(),
      initialState: { user: { authData: { roles: [UserRole.USER] } } },
    });

    const page = await screen.findByTestId('ForbiddenPage');

    expect(page).toBeInTheDocument();
  });

  it('should open admin if user has admin role', async () => {
    renderComponent(<AppRouter />, {
      route: getRouteAdmin(),
      initialState: { user: { authData: { roles: [UserRole.ADMIN] } } },
    });

    const page = await screen.findByTestId('ForbiddenPage');

    expect(page).toBeInTheDocument();
  });
});
