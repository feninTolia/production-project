describe('User open articles list', () => {
  beforeEach(() => {
    cy.login().then(() => {
      cy.visit('articles');
    });
  });

  it('should render articleList', () => {
    cy.getByTestId('ArticleList').should('exist');
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
  });

  it('should work on stabs', () => {
    cy.intercept('GET', '**/articles?*', {
      fixture: 'articles.json',
    });
    cy.getByTestId('ArticleList').should('exist');
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
  });

  it.skip('should error', () => {
    cy.getByTestId('error-selector').should('exist');
  });
});
