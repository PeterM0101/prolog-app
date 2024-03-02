describe("Home page", () => {
  it("test Fuck", () => {
    cy.visit("http://localhost:3000/");
    cy.get("div").contains("Fuck");
  });
});