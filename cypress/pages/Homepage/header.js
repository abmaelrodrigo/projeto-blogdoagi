

class Header {

    searchForATerm(input) {
        cy.get('[class="ast-search-icon"]')
            .click();

        cy.get('[id="search-field"]')
            .type(`${input}{enter}`);
    }

    clickOnTheSearchButton() {
        cy.get('.searchbox_searchButton__F5Bwq')
            .click();

    }


}

export default new Header();