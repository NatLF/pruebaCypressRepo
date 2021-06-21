

describe('Search elements',()=>{
    /*beforeEach(function(){
        cy.visit('/');
    })*/
    beforeEach(()=>{
        cy.visit('/');
    })

    it('Search elements with multiple results',()=>{
        cy.fixture('mainPage').then((mainPage)=>{
            cy.get(mainPage.searchBox).type('dress');
            cy.get(mainPage.searchButton).click();
        })
        cy.fixture('searchResult').then((searchResult)=>{
            cy.get(searchResult.title).should('contain','dress');
        })
    })
    it('Search elements with no results',()=>{
        cy.fixture('mainPage').then((mainPage)=>{
            cy.get(mainPage.searchBox).type('hi');
            cy.get(mainPage.searchButton).click();
        })
        cy.fixture('searchResult').then((searchResult)=>{
            cy.get(searchResult.alert).should('contain','No results');
        })
    })
})