class AutoStore_Homepage_PO {
    accessHomepage () {
        cy.visit('https://automationteststore.com/index.php?rt=product/category&path=52')
    }
}

export default Autostore_Homepage_PO;