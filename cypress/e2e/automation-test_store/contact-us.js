/// <reference types="Cypress" />
describe('Test Contact Us form via Automation Test Store', () => {
    before(function() {
        cy.viewport(550,750)
        cy.fixture('userDetails').as('user')
    })
    it('Should be able to submit a successful submission via contact us form', () => {
        cy.visit('https://www.automationteststore.com/');
        //cy.get('.info_links_footer > :nth-child(5) > a').click();
        cy.xpath("//a[contains(@href,'contact')]").click().then(function(contactUsText){
            cy.log('Selected the following footer: ' + contactUsText.text())
        });
        cy.get('@user').then((user) => {
            cy.get('#ContactUsFrm_first_name').type(user.first_name);
            cy.get('#ContactUsFrm_email').type(user.email);
        })
        
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email');
        cy.get('#ContactUsFrm_enquiry').type('blebleble');
        cy.get('.col-md-6 > .btn').click();
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!');
    });
});