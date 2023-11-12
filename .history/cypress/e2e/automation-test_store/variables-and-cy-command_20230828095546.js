/// <reference types="Cypress" />

describe('Verifying variables, cypresscommands and jquery commands', () => {
    it('Click on the first item using item header', () => {
        cy.visit('https://www.automationteststore.com/');
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click();
    });
});