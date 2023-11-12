/// <reference types="Cypress" />
describe('Handle js alerts', () => {
    it('Confirm js alert contains the correct text', () => {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})

        cy.get('#button1').click()
    });
});