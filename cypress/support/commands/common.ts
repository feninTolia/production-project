/* eslint-disable @typescript-eslint/no-namespace */
import { selectByTestId } from 'cypress/helpers/selectByTestId';
import { IUser } from '../../../src/entities/User';
import { USER_LOCAL_STORAGE_KEY } from '../../../src/shared/constants/localStorage';

export const login = (
  username: string = 'testUser',
  password: string = '123'
) => {
  return cy
    .request({
      method: 'POST',
      url: 'http://localhost:8000/login',
      body: { password, username },
    })
    .then(({ body }) => {
      window.localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(body));
      return body;
    });
};

export const getByTestId = (testId: string) => {
  return cy.get(selectByTestId(testId));
};

declare global {
  namespace Cypress {
    interface Chainable {
      login: (username?: string, password?: string) => Chainable<IUser>;
      getByTestId: (testId?: string) => Chainable<JQuery<HTMLElement>>;
    }
  }
}
