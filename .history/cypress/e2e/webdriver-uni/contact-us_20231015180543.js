/// <reference types="Cypress" />

const { beforeEach } = require("mocha");

describe('Test Contact Us form via WebdriverUni', () => {
    before(function() {
        cy.fixture('example').then(function(data) {
            // this.data = data;
            globalThis.data = data;
        })
    })

    beforeEach(() => {
        cy.visit('http://www.webdriveruniversity.com/');
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
    });

    it('Should be able to submit a type data', () => {
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.url().should('include', 'contactus')
        cy.webdriverUni_Contactform_Submission(Cypress.env("first_name"),data.last_name, data.email, 'dddddddddddd', 'h1', 'Thank You for your Message!')
    });

    it('Should not be able to submit a successful submission via contact us form as all forms are required', () => {
        cy.webdriverUni_Contactform_Submission(data.first_name,data.last_name," ", 'dddddddddddd', 'body', 'Error: Invalid email address')
    });
});