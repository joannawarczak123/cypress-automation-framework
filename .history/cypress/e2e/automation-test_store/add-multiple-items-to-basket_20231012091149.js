/// <reference types="Cypress" />

describe('Add multiple items to basket', () => {
    beforeEach(() => {
      cy.visit('https://automationteststore.com/')
      cy.get("a[href*='product/category&path=']").contains('Hair Care').click();
    })
    it('Add specific items to basket', () => {
      cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
        cy.log("Index: " + index + " : " + $el.text())
      })
    });
  })