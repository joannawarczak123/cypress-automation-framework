/// <reference types="Cypress" />
describe('Verify radio buttons via webdriveruni', () => {
    it('Check specific radio buttons', () => {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})

        cy.get('#radio-buttons').find("[type='radio']").first().check()
    });

    it('Validate the state of specific radio buttons', () => {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})

        cy.get("[value='lettuce']").should('not.be.checked')
    });
});