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
    it('Navigating to specific product pages', () => {
        cy.visit('https://automationteststore.com/')
        cy.get("a[href*='product/category&path=']").contains('Makeup').click();

        cy.get("h1 .maintext").then(($headerText) => {
            const headerText = $headerText.text()
            cy.log('Found header text: ' + headerText)
            expect(headerText).is.eq('Makeup')
        })
    });
    it.only('Validate properties of the Contact Us Page', () => {
        cy.visit('https://automationteststore.com/index.php?rt=content/contact')

        //Uses Cypress commands and chaining
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name')

        //JQuery Approach
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
            const firstNameText = text.find('#field_11').text();
            expect(firstNameText).to.contain('First name')
        })
        })
    });