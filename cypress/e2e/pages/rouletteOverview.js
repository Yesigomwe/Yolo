export class RouletteTests {
    //Locators
    featureName = 'Roulette'
    searchTextField = '.form > .jsx-203636932'
    gamesfeatures = 'nav.jsx-3746230925 > ul > :nth-child(3) > .jsx-2449694024'
    gameArea = '.game-container > .jsx-750183143'

    searchFeature(searchKeyWord) {
        cy.get(this.searchTextField)
            .type(searchKeyWord)
        cy.contains(this.featureName,)
            .click()

        cy.get(this.gamesfeatures).scrollIntoView()
            .click()

    }

    
    rouletteOverview() {
        cy.contains(this.featureName)
            .should('contain', 'Roulette')
            .and('be.visible')
            .click()
            cy.get(this.gameArea).should('be.visible')

    }

}