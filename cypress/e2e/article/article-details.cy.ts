let articleId = '';

describe('User open article details page', () => {
  beforeEach(() => {
    cy.login();
    cy.createArticle().then((data) => {
      articleId = data.body.id;
      cy.visit(`articles/${articleId}`);
    });
  });

  afterEach(() => {
    cy.removeArticle(articleId);
  });

  it('should render article', () => {
    cy.getByTestId('ArticleDetails').should('exist');
  });

  it('should render article recommendation list', () => {
    cy.intercept('GET', '**/articles/*', {
      fixture: 'article-details.json',
    });

    cy.getByTestId('ArticleRecommendationsList').should('exist');
  });

  it('should send comment for article ', () => {
    cy.getByTestId('ArticleDetails').should('exist');
    cy.getByTestId('AddCommentForm').scrollIntoView();
    cy.addComment('Test text');
    cy.getByTestId('CommentCard.Content').should('have.length', 1);
  });

  it('should rate the article ', () => {
    cy.intercept('GET', '**/articles/*', { fixture: 'article-details.json' });
    cy.getByTestId('ArticleDetails');
    cy.getByTestId('RatingCard').scrollIntoView();
    cy.setRate(3, 'feedback');
    cy.get('[data-selected=true]').should('have.length', 3);
  });
});
