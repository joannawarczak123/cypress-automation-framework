/// <reference types="Cypress" />

describe('Verifying variables, cypresscommands and jquery commands', () => {
    it('Navigating to specific product pages', () => {
        const makeupLink = cy.get("a[href*='product/category&path=']").contains('Makeup');
        const skinCare = cy.get("a[href*='product/category&path=']").contains('Skincare');
    });
});