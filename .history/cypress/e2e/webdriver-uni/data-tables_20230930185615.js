/// <reference types="Cypress" />

describe("Traversing DOM elements in Cypress", () => {
    beforeEach(() => {
      cy.visit("http://webdriveruniversity.com/");
      cy.get("#data-table").invoke("removeAttr", "target").click({
        force: true
      });
    })
    it("children() to get the children of DOM elements", () => {
      cy.get('.traversal-breadcrumb').children('.active').should('contain', 'Contact Us')
    });
  });