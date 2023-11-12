import Homepage_PO from "../../support/pageObjects/webdriver-uni/Homepage_PO";
import Contact_US_PO from "../../support/pageObjects/webdriver-uni/Contact_Us_PO";

/// <reference types="Cypress" />

// const { beforeEach } = require("mocha");

describe('Test Contact Us form via WebdriverUni', () => {
    Cypress.config('defaultCommandTimeout', 20000)
    const homepage_PO = new Homepage_PO();
    const contact_us_PO = new Contact_US_PO();
    before(function() {
        cy.fixture('example').then(function(data) {
            // this.data = data;
            globalThis.data = data;
        })
    })

    beforeEach(() => {
        // cy.visit(Cypress.env("webdriveruni_homepage") + "/Contact-Us/contactus.html")
        homepage_PO.visitHomepage();
        homepage_PO.clickOn_ContactUs_Button();
        cy.pause()
    });

    it('Should be able to submit a type data', () => {
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.url().should('include', 'contactus')
        contact_us_PO.contactForm_Submission(Cypress.env("first_name"),data.last_name, data.email, 'dddddddddddd', 'h1', 'Thank You for your Message!')
    });


    it('Should not be able to submit a successful submission via contact us form as all forms are required', () => {
        contact_us_PO.contactForm_Submission(data.first_name,data.last_name," ", 'dddddddddddd', 'body', 'Error: Invalid email address')
    });
});