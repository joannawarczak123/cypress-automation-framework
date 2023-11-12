/// <reference types="Cypress" />
describe('Handle js alerts', () => {
    it.skip('Confirm js alert contains the correct text', () => {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})

        cy.get('#button1').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am an alert box!')
        });
    });

    it.skip('Validate js confirm alert box works correctly when clicking OK', () => {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})

        cy.get('#button4').click()
        cy.on('window:alert', (str) => {
            return true
        });
        cy.get('#confirm-alert-text').contains('You pressed OK!')
    });

    it('Validate js confirm alert box works correctly when clicking CANCEL', () => {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})

        cy.get('#button4').click()
        cy.on('window:alert', (str) => {
            return false;
        });
        cy.get('#confirm-alert-text').contains('You pressed Cancel!')
    });
});