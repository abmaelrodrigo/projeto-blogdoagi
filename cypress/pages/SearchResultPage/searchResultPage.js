import articlePage from "../ArticlePage/articlePage";

class SearchResultPage {

    verifySearchResultTitle(input) {

        cy.title().should('include', input);
        

    }


    verifyFirstArticleTitle(input) {

        cy.get('[class="post-content ast-width-md-6"]')
            .first()
            .find('[rel="bookmark"]').then($articleProp => {
                var articleTitle = ($articleProp[0].innerText).toLowerCase();
                expect(articleTitle).to.contain(input.toLowerCase());

            })


    } 

    verifySearchURL(input) {
        cy.url().then(($url) => {
            cy.wrap($url).should('contain', input.replace(/\s+/g, '+'));
        })

    }

    verifyNothingWasFound(nothigWasFoundPhrase) {
        cy.get('[class="page-content"]')
            .should('contain', nothigWasFoundPhrase);

    }

    goToAndVerifyArticlePage() {
        cy.get('[class="post-content ast-width-md-6"]')
            .first()
            .find('[rel="bookmark"]').then($articleProp => {
                var articleTitle = $articleProp[0].innerText;
                cy.visit($articleProp[0].href);
                articlePage.verifyTitleOnBreadCrumbs(articleTitle);
                articlePage.verifyPageTitle(articleTitle);

            })


    }



}

export default new SearchResultPage();