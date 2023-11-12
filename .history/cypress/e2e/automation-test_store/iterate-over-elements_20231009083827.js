/// <reference types="Cypress" />

describe('Iterates over elements', () => {
  it('Log information of all hair care products', () => {
    cy.visit('https://automationteststore.com/')
    cy.get("a[href*='product/category&path=']").contains('Hair Care').click();
    cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
      cy.log("Index: " + index + " : " + $el.text())
    })
  });
  it('Add specyfic product to basket', () => {
    cy.visit('https://automationteststore.com/')
    cy.get("a[href*='product/category&path=']").contains('Hair Care').click();
    // cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
    //   if($el.text().includes('Pantene Pro-V Conditioner, Classic Care')){
    //     cy.wrap($el).click()
    //   }
    // })
    cy.selectProduct();
  });
})