class Homepage_PO {
    visitHomepage() {
        cy.visit(Cypress.env("webdriveruni_homepage"));
    }
}

export default Homepage_PO;