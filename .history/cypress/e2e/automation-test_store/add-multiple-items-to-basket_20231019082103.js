import Autostore_Homepage_PO from "../../support/pageObjects/automation-test-store/Autostore_Homepge_PO";

/// <reference types="Cypress" />

describe('Add multiple items to basket', () => {
    const autoStore_Homepage_PO = new Autostore_Homepage_PO();
    before(function () {
        cy.fixture("products").then(function (data) {
            globalThis.data = data;
        })
    })
    beforeEach(() => {
        cy.visit('https://automationteststore.com/')
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click();
    })
    it('Add specific items to basket', () => {
        globalThis.data.productName.forEach(function(element) {
            cy.addProductToBasket(element)
        });
        cy.get('.dropdown-toggle > .fa').click()
    });
})