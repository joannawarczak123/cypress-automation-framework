/// <reference types="Cypress" />

describe('Alias and invoke', () => {
  it('Validate a specific hair product', () => {
    cy.visit('https://automationteststore.com/')
    cy.get("a[href*='product/category&path=']").contains('Hair Care').click();

    cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('SeaweedConditioner');
    cy.get('@SeaweedConditioner').its('length').should('be.gt', 5);
    cy.get('@SeaweedConditioner').should('include', 'Seaweed Conditioner');
  });
  it('Validate a product thumbail', () => {
    cy.visit('https://automationteststore.com/')
    cy.get('.thumbnail').as('productThumbnail');
    cy.get('@productThumbnail').should('have.length', 16);
    cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart');
  });
  it.only('Calculate total of normal and sale products', () => {
    cy.visit('https://automationteststore.com/')
    cy.get('.thumbnail').as('productThumbnail');
    // cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => {
    //   cy.log($el.text())
    cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice');
    cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice');

    var itemsTotal = 0;
    cy.get('@itemPrice').then($linkText => {
      var itemPriceTotal = 0;
      var itemPrice = $linkText.split('$');
      var i;
      for (i = 0; i < itemPrice.length; i++) {
        cy.log(itemPrice[i]);
        itemPriceTotal += Number(itemPrice[i]);
      }
      itemsTotal += itemPriceTotal;
      cy.log('Non sale price items total: ' + (itemsTotal += itemPriceTotal));
    });

    cy.get('@saleItemPrice').then($linkText => {
        var saleItemsPrice = 0;
        var saleItemPrice = $linkText.split('$');
        var i;
        for (i = 0; i < saleItemPrice.length; i++) {
          saleItemsPrice += Number(saleItemPrice[i])
        }
        itemsTotal += saleItemsPrice;
        cy.log('Sale price items total: ' + saleItemsPrice);
      })
      .then(() => {
        cy.log('The total price of all products: ')
        expect(itemsTotal).to.equal(545.5)
      })
  });
});