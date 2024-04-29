
class ArticlePage {

    verifyTitleOnBreadCrumbs(title) {
        cy.get('[class="rank-math-breadcrumb"]')
            .find('.last')
            .should('contain', title);
    }

    verifyPageTitle(title) {
        cy.get('[class="entry-title"]')
            .should('contain', title);
    }

}

export default new ArticlePage();