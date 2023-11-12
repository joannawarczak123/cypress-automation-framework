/// <reference types="Cypress" />
describe('Verify radio buttons via webdriveruni', () => {
    it('Check specific radio buttons', () => {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
    });
});