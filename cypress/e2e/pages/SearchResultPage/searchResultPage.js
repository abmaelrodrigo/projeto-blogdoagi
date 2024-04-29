
class SearchResultPage {

    verifySearchResultTitle(input) {

        cy.title().should('include', input); 

    }


    verifyFirstArticleTitle(input) {

        cy.get('[class="post-content ast-width-md-6"]')
        .first()
        .find(('[class="entry-title ast-blog-single-element"]'))
        .should('contain', input); 
        
    }

    verifySearchURL(input){
        cy.url().then(($url) => {
            cy.wrap($url).should('contain', input); 
        })

    }

    verifyNothingWasFound(nothigWasFoundPhrase){
        cy.get('[class="page-content"]')
        .should('contain',nothigWasFoundPhrase)

    }



}

export default new SearchResultPage();