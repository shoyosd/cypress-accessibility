/// <reference types="cypress"/>

describe('Accesibility test', () => {
  it('Should log any accessibility issue', () => {
    // Navigate to the specified URL for the mercado libre elements page
    cy.visit('https://www.mercadolibre.com.co/');

    // Inject the Axe accessibility testing library into the page
    cy.injectAxe();

    // Perform an accessibility check on the page using Axe to identify any a11y issues
    cy.checkA11y();
  })
})