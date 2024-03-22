import { render } from '@testing-library/react';
import { IStateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { DeepPartial } from '@reduxjs/toolkit';
import i18n from 'shared/config/i18n/i18nForTesting';

export interface IRenderComponentOptions {
  route?: string;
  initialState?: DeepPartial<IStateSchema>;
}

export const renderComponent = (
  component: ReactNode,
  options: IRenderComponentOptions = {}
) => {
  const { route = '/', initialState } = options;

  return render(
    <StoreProvider initialState={initialState as IStateSchema}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18n}>{component}</I18nextProvider>
      </MemoryRouter>
    </StoreProvider>
  );
};
