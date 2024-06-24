/* eslint-disable @typescript-eslint/no-namespace */
export const updateProfile = (firstname: string, lastname: string) => {
  cy.getByTestId('EditableProfileCardHeader.EditButton').click();
  cy.getByTestId('ProfileCard.Firstname').clear().type(firstname);
  cy.getByTestId('ProfileCard.Lastname').clear().type(lastname);
  cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
  return cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: { Authorization: 'xxxx' },
    body: {
      id: '4',
      firstname: 'Max',
      lastname: 'Schilyna',
      age: 43,
      currency: 'EUR',
      country: 'Germany',
      city: 'Dresden',
      username: 'testUser',
      avatar:
        'https://cdn.village.com.ua/the-village.com.ua/post_image-image/Qwgsb-eOoHDwqNETQzI8RQ.png',
    },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile: (firstname: string, lastname: string) => Chainable<void>;
      resetProfile: (profileId: string) => Chainable<void>;
    }
  }
}
