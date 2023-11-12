/// <reference types="Cypress" />
describe('Validate webdriveruni homepage links', () => {

    it('Confirm links redirect to the correct pages', () => {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'contactus')

        cy.go('back')
        cy.reload()
    });

});