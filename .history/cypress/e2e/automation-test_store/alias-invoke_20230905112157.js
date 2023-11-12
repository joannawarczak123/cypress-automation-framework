/// <reference types="Cypress" />

describe('Alias and invoke', () => {
    it('Validate a specific hair product', () => {
      cy.visit('https://automationteststore.com/')
      cy.get("a[href*='product/category&path=']").contains('Hair Care').click();

      cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('SeaweedConditioner');
      cy.get('@SeaweedConditioner').its('length').should('be.gt', 5);
      cy.get('@SeaweedConditioner').should('include', 'Seaweed Conditioner');
    });
    it.only('Validate a product thumbail', () => {
      cy.visit('https://automationteststore.com/')
      cy.get('.thumbnail').as('productThumbnail');
      cy.get('@productThumbnail').should('have.length', 16);
      cy.get('@productThumbnail').find('productcart').invoke('attr', 'tittle').should('include', 'Add to Cart');
    });
  });