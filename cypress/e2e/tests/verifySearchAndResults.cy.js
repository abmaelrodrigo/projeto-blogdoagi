/// <reference types="cypress" />

import { default as header } from "../pages/Homepage/header";
import searchResultPage from "../pages/SearchResultPage/searchResultPage";

var nothigWasFoundPhrase = 'Lamentamos, mas nada foi encontrado para sua pesquisa, tente novamente com outras palavras.'


context("Verify basic article searche on the Blog do Agi website", () => {
    beforeEach(() => {
        cy.visit('https://blogdoagi.com.br/');
    })

    var searchTerms = ["Rural", "brigadeiro", "FGTS"];

    it('Verify search for a term', () => {
        // Given the Blog do Agi home page is displayed

        // When the user searches for the phrase
        header.searchForATerm(searchTerms[0]);
      
        // Then the search result query contains the term
        searchResultPage.verifySearchResultTitle(searchTerms[0]);
   
        // And the first article result contains the term
        searchResultPage.verifyFirstArticleTitle(searchTerms[0]);

        // And the search URL contains the term
        searchResultPage.verifySearchURL(searchTerms[0]);

    })

    it.only('Verify the searching for a non-existent term', () => {

        // Given the Blog do Agi home page is displayed

        // When the user searches for the a non-existent term
        header.searchForATerm(searchTerms[1]);
      
        // Then the search result query contains the term
        searchResultPage.verifySearchResultTitle(searchTerms[1]);

        // And the search URL contains the term
        searchResultPage.verifySearchURL(searchTerms[1]);

        // And the search result does not contain any article 
        searchResultPage.verifyNothingWasFound(nothigWasFoundPhrase);

        

    })
})