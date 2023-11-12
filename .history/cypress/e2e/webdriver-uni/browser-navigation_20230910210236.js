/// <reference types="Cypress" />
describe('Validate webdriveruni homepage links', () => {

    it('Confirm links redirect to the correct page', () => {
        // cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
    });

});