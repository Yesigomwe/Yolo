export class RouletteDetails {
    //Locators
    feature = '[href="/game/2502"] > .information > .name'
    gamingArea = '.game-container > .jsx-750183143'
    gameName = '.jsx-750183143.grid > :nth-child(2) > .title'
    productName = '.product'



    featureDetailsTests() {
        cy.get(this.feature).click()
        cy.get(this.gamingArea)
            .should('be.visible')
        cy.get(this.gameName)
            .should('be.visible')
            .and('contain', 'Roulette')
        cy.get(this.productName)
            .should('contain', 'OneTouch')
            .and('be.visible')



    }


} 