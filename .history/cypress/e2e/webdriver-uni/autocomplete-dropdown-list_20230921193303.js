/// <reference types="Cypress" />
describe('Verify autocomplete dropdown lists via webdriveruni', () => {
    it('Select specific product via autocomplete list', () => {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({force:true})
        cy.get('#myInput').type('A')
    });
});