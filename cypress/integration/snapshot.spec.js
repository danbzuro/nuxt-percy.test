describe('Integration test with visual testing', function () {
  it('Loads the homepage', function () {
    // Load the page or perform any other interactions with the app.
    cy.visit('localhost:3000')

    // Take a snapshot for visual diffing
    cy.percySnapshot()
  })
})
