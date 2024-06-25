/* eslint-disable ftoe-plugin/layer-imports */
import { IStateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import i18n from '@/shared/config/i18n/i18nForTesting';
import { Theme } from '@/shared/constants/theme';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import '@/app/styles/index.scss';

export interface IRenderComponentOptions {
  route?: string;
  initialState?: DeepPartial<IStateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>;
  theme?: Theme;
}

interface ITestProviderProps {
  children: ReactNode;
  options?: IRenderComponentOptions;
}

export const TestProvider = (props: ITestProviderProps) => {
  const { children, options = {} } = props;
  const {
    route = '/',
    initialState,
    asyncReducers,
    theme = Theme.LIGHT,
  } = options;

  return (
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider
        asyncReducers={asyncReducers}
        initialState={initialState as IStateSchema}
      >
        <I18nextProvider i18n={i18n}>
          <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>{children}</div>
          </ThemeProvider>
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  );
};

export const renderComponent = (
  component: ReactNode,
  options: IRenderComponentOptions = {}
) => {
  return render(<TestProvider options={options}>{component}</TestProvider>);
};
