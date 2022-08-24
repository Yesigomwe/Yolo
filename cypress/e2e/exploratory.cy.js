import {ExploratoryTests} from "./pages/exploratory"
const exploratorytests = new ExploratoryTests()

describe('exploratory tests', () => {
  beforeEach(function () {
    cy.visit('https://hub88.io/games')

  })
  it('limits', () => {
    exploratorytests.exploratory()

  })
})