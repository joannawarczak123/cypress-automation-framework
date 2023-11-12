/// <reference types="Cypress" />
describe('Verify radio buttons via webdriveruni', () => {

    it("children() to get the children of DOM elements", () => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
        cy.get('.traversal-breadcrumb').children('.active').should('contain', 'Contact Us')
    });
});