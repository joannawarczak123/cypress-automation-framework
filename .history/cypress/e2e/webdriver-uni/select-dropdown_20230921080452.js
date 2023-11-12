/// <reference types="Cypress" />
describe('Interact with dropdown menu via webdriveruni', () => {
    it('Select specific values via select dropdown list', () => {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})

        dropdowm-menu-1
        dropdowm-menu-2
        dropdowm-menu-3
    });
});