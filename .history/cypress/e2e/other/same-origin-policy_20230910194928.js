/// <reference types="Cypress" />
describe('Cypress web security', () => {
            it('Validate visitting two different domains', () => {
                cy.visit('https://webdriveruniversity.com/')
                cy.visit('https://www.google.com/')
            });

            it('Validate visitting two different domains via user actions', () => {
                cy.visit('https://webdriveruniversity.com/')
                cy.get('#automation-test-store').invoke('removeAttr', 'target').click()
            });
        })