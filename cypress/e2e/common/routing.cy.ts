import { selectByTestId } from 'cypress/helpers/selectByTestId';

describe('Routing', () => {
  describe('User authorized', () => {
    beforeEach(() => {
      cy.login();
    });

    it('Open Profile page', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('ProfilePage')).should('exist');
    });
    it('Should Open Articles page', () => {
      cy.visit('/articles');
      cy.get(selectByTestId('ArticlesPage')).should('exist');
    });
  });

  describe('User not authorized', () => {
    it('Open Main page', () => {
      cy.visit('/');
      cy.get(selectByTestId('MainPage')).should('exist');
    });
    it('Open Profile page, redirect to Main page', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('MainPage')).should('exist');
    });
    it('Open non-existent route, redirect to Page not found', () => {
      cy.visit('/some-profiles');
      cy.get(selectByTestId('NotFoundPage')).should('exist');
    });
  });
});

export {};
