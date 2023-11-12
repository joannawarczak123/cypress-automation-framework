/// <reference types="Cypress" />

describe('Iterates over elements', () => {
  beforeEach(() => {
    cy.visit('https://automationteststore.com/')
    cy.get("a[href*='product/category&path=']").contains('Hair Care').click();
  })
  it('Log information of all hair care products', () => {
    cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
      cy.log("Index: " + index + " : " + $el.text())
    })
  });
  it('Add specyfic product to basket', () => {
    cy.selectProduct('Pantene Pro-V Conditioner, Classic Care');
  });

  it('Add another specyfic product to basket', () => {
    cy.selectProduct('Seaweed Conditioner');
  });

  it('Add another specyfic product to basket', () => {
    cy.selectProduct('Curls to straight Shampoo');
  });
})