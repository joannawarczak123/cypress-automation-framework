/// <reference types="Cypress" />
describe('Verify radio buttons via webdriveruni', () => {
    it('Check and validate checkbox', () => {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
    });
});