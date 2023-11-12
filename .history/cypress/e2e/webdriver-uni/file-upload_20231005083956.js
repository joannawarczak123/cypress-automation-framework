/// <reference types="Cypress" />

describe('Test file upload via webdriveruni', () => {
    it('Upload the file...', () => {
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force:true});
    });

    it('Upload no file', () => {
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force:true});
    });
});