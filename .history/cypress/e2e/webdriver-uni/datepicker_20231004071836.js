/// <reference types="Cypress" />

describe('Test datepicket via webdriveruni', () => {
    it('Select date from the datepicker', () => {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#datepicker').invoke('removeAttr', 'target').click({force:true})

        let date = new Date();
        date.setDate(date.getDate()) //get current day
        cy.log(date.getDate())

        let date2 = new Date();
        date2.setDate(date2.getDate() + 5) //get current day
        cy.log(date2.getDate())
    });
});