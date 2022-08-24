import { RouletteTests } from "./pages/rouletteOverview"
import { RouletteDetails } from "./pages/rouletteDetails"

const rouletteTests = new RouletteTests()
const rouletteDetails = new RouletteDetails()

describe('Roulette feature tests', () => {
  beforeEach(() => {
    cy.visit('https://hub88.io/games')
  })

  it('Tests for feature on games page', () => {
    // rouletteTests.searchFeature('Ro{Enter}')
    // rouletteTests.rouletteOverview()

  })

  it('Tests for feature Details', ()=>{
    rouletteDetails.featureDetailsTests()

  })
})