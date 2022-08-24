export class ExploratoryTests {
 //Locators
  backJackClassic = '[href="/game/2782"] > .image-aspect > .jsx-1467701749'

    exploratory(){
       
        cy.get(this.backJackClassic).click()


    }

}