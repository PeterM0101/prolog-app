describe("Navigation Sidebar", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  })

  it("Links works", () => {
    cy.url().should("include", "/")
  })
})