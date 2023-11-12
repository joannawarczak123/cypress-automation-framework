/// <reference types="Cypress" />
describe('Interact with dropdown menu via webdriveruni', () => {
    it('Select specific values via select dropdown list', () => {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})

        cy.get('#dropdowm-menu-1').select('c#')
        cy.get('#dropdowm-menu-2').select('testng').should('have.value', 'testng').contains('TestNG')
        cy.get('#dropdowm-menu-3').select('JQuery').contains('Query')

        cy.get('#dropdowm-menu-2').select('Maven').contains('Maven')
        cy.get('#dropdowm-menu-2').select('junit').should('have.value', 'junit')
    });
});