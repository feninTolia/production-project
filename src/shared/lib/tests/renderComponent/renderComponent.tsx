import { render } from '@testing-library/react';
import { IStateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
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
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialState={initialState as IStateSchema}>
        <I18nextProvider i18n={i18n}>{component}</I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  );
};
