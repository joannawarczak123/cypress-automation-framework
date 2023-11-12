import Autostore_Homepage_PO from "../../support/pageObjects/automation-test-store/Autostore_Homepage_PO";
import AutoStore_HairCare_PO from "../../support/pageObjects/automation-test-store/Autostore_HairCare_PO";
/// <reference types="Cypress" />

describe('Add multiple items to basket', () => {
    const autoStore_Homepage_PO = new Autostore_Homepage_PO();
    const autostore_Hair_PO = new AutoStore_HairCare_PO();
    before(function () {
        cy.fixture("products").then(function (data) {
            globalThis.data = data;
        })
    })
    beforeEach(() => {
        cy.clearLocalStorage();
        cy.clearCookies();
        autoStore_Homepage_PO.accessHomepage();
        autoStore_Homepage_PO.clickOn_HairCare_Link()
    })
    it('Add specific items to basket', () => {
        autostore_Hair_PO.addHairCareProductsToBasket()
    });
})