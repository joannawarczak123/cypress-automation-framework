/// <reference types="Cypress" />
describe('Test Contact Us form via WebdriverUni', () => {
    before(function() {
        cy.fixture('example').then(function(data) {
            // this.data = data;
            globalThis.data = data;
        })
    })

    it('Should be able to submit a successful submission via contact us form', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        //cy.get('#contact-us > .thumbnail').click()
        cy.get('#contact-us').click({force:true})
    });

    it('Should be able to submit a type data', () => {
        // cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.url().should('include', 'contactus')
        // cy.get('[name="first_name"]').type(data.first_name)
        // cy.get('[name="last_name"]').type(data.last_name)
        // cy.get('[name="email"]').type(data.email)
        // cy.get('textarea.feedback-input').type('dddddddddddd')
        // cy.get('[type="submit"]').click()
        // cy.get('h1').should('have.text', 'Thank You for your Message!')
        cy.webdriverUni_Contactform_Submission(data.first_name,data.last_name, data.email, 'dddddddddddd', 'h1', 'Thank You for your Message!')
    });

    it('Should not be able to submit a successful submission via contact us form as all forms are required', () => {
        // cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        cy.get('[name="first_name"]').type(data.first_name)
        cy.get('[name="last_name"]').type(data.last_name)
        cy.get('textarea.feedback-input').type('dddddddddddd')
        cy.get('[type="submit"]').click()
        cy.get('body').contains('Error: all fields are required')
        cy.webdriverUni_Contactform_Submission(data.first_name,data.last_name, 'dddddddddddd', 'body', 'Error: all fields are required')
    });
});