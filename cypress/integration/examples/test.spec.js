const { iteratee } = require("lodash");

describe('login page', () => {
  it('login page has login button', () => {
    cy.visit('http://localhost:3000');

    cy.get('.sc-eCApGN > :nth-child(1) > button')
      .click()

  });
});
