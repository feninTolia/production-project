let profileId = '';

describe('User open Profile page', () => {
  beforeEach(() => {
    cy.visit('');
    cy.login().then((data) => {
      profileId = data.id;
      cy.visit(`/profile/${profileId}`);
    });
  });
  afterEach(() => {
    cy.resetProfile(profileId);
  });
  it('should load testUser profile page', () => {
    cy.getByTestId('ProfileCard.Firstname').should('have.value', 'Max');
  });

  it('should edit testUser profile page', () => {
    const newFirstname = 'newFirstname';
    const newLastname = 'newLastname';
    cy.updateProfile(newFirstname, newLastname);
    cy.getByTestId('ProfileCard.Firstname').should('have.value', newFirstname);
    cy.getByTestId('ProfileCard.Lastname').should('have.value', newLastname);
  });
});
