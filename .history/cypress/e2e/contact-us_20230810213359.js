/// <reference types="Cypress" />
describe('Test Contact Us form via WebdriverUni', () => {
    it('Should be able to submit a successful submission via contact us form', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        //cy.get('#contact-us > .thumbnail').click()
        cy.get('#contact-us').click({force:true})
    });

    it('Should be able to submit a type data', () => {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type('Asia')
    });

    it('Should not be able to submit a successful submission via contact us form as all forms are required', () => {
        
    });
});