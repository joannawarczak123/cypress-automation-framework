/// <reference types="Cypress" />

describe('Alias and invoke', () => {
    it('Validate a specific hair product', () => {
      cy.visit('https://automationteststore.com/')
      cy.get("a[href*='product/category&path=']").contains('Hair Care').click();

    });
  });