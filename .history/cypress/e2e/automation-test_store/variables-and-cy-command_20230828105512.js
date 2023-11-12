/// <reference types="Cypress" />

describe('Verifying variables, cypresscommands and jquery commands', () => {
    it('Navigating to specific product pages', () => {
        cy.visit('https://automationteststore.com/')
        // const makeupLink = cy.get("a[href*='product/category&path=']").contains('Makeup');
        // const skinCare = cy.get("a[href*='product/category&path=']").contains('Skincare');
        // makeupLink.click()
        // skinCare.click()
        cy.get("a[href*='product/category&path=']").contains('Makeup').click();
        cy.get("a[href*='product/category&path=']").contains('Skincare').click();
    });
    it.only('Navigating to specific product pages', () => {
        cy.visit('https://automationteststore.com/')
        cy.get("a[href*='product/category&path=']").contains('Makeup').click();

        cy.get("h1 .maintext").then(($headerText) => {
            const headerText = $headerText.text()
            cy.log('Found header text: ' + headerText)
        })
    });
});