import { USER_LOCAL_STORAGE_KEY } from '../../../src/shared/constants/localStorage';

export const login = (
  username: string = 'testUser',
  password: string = '123'
) => {
  cy.request({
    method: 'POST',
    url: 'http://localhost:8000/login',
    body: { password, username },
  }).then(({ body }) => {
    window.localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(body));
  });
};
