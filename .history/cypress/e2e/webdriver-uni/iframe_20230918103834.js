/// <reference types="Cypress" />
describe('Handling iFrames & Modules', () => {
    it('handle webdriveruini iframe and modal', () => {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#iframe').invoke('removeAttr', 'target').click({force:true})
    });
});