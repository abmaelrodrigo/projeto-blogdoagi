/// <reference types="cypress" />

import { default as header } from "../pages/Homepage/header";
import searchResultPage from "../pages/SearchResultPage/searchResultPage";


context("Verify basic article searche on the Blog do Agi website", () => {
    beforeEach(() => {
        cy.visit('https://blogdoagi.com.br/');
    })

    var searchTerms = ["Rural", "Seguro", "FGTS"];

    it.only('Verify search for a term', () => {
        // Given the Blog do Agi home page is displayed

        // When the user searches for the phrase
        header.searchForATerm(searchTerms[0])
      
        // Then the search result query contains the term
        searchResultPage.verifySearchResultTitle(searchTerms[0]);
   

        // And the first article result contains the term
        searchResultPage.verifyFirstArticleTitle(searchTerms[0]);

        // And the search URL contains the term
        searchResultPage.verifySearchURL(searchTerms[0])

    })

    it('Verify search by clicking on the search button', () => {
        // Given the DuckDuckGo home page is displayed

        // When the user types on the search field
        searchPage.typeOnTheInputField(searchTems[1]);

        // And click on the search button
        searchPage.clickOnTheSearchButton();

        // Then the search result query is the phrase
        resultPage.verifySearchResultQuery(searchTems[1]);

        // And the search result SEO title contains the phrase
        resultPage.verifyPageResultTitle(searchTems[1]);

        // And each search result title pertain to the phrase
        resultPage.verifyResultTitlesContainTheTerm(searchTems[1]);

    })

    it('Verify click on More Results button', () => {

        // Given the user is on the search result page (the query is the phrase)
        searchPage.searchForATerm(searchTems[2]);
        resultPage.verifySearchResultQuery(searchTems[2]);

        // When the user clicks on More Results button
        resultPage.clickOnMoreResultsButton();

        // Then the search result SEO title contains the phrase
        resultPage.verifyPageResultTitle(searchTems[2]);

        // And each search result title pertain to the phrase
        resultPage.verifyResultTitlesContainTheTerm(searchTems[2]);

    })
})