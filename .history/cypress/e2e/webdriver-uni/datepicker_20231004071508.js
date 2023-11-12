/// <reference types="Cypress" />

describe('Test datepicket via webdriveruni', () => {
    it('Select date from the datepicker', () => {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#datepicker').invoke('removeAttr', 'target').click({force:true})

        let date = new Date();
        date.setDate(date.getDate()) //get current day
        cy.log(date.getDate())

        let date = new Date();
        date.setDate(date.getDate() + 5) //get current day
        cy.log(date.getDate())
    });
});