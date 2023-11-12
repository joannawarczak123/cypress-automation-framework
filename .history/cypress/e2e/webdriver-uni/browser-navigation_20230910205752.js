/// <reference types="Cypress" />
describe('Test Contact Us form via WebdriverUni', () => {

    it('Should be able to submit a type data', () => {
        // cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
    });

});