describe("Navigation Sidebar", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.viewport(1800, 1000);
  });

  it("Links works", () => {
    cy.get("a[href*=\"issues\"]").click();
    // cy.get("[data-testid=\"SidebarContainer\"]").findByRole("link", { name: "Issues" }).click();
    cy.url().should("include", "/issues");

    cy.contains("Projects").click();
    cy.url().should("include", "/");

    cy.findByText("Users").click();
    cy.url().should("equal", "http://localhost:3000/users");
  });

  it("Menu collapsing works", () => {
    cy.findByText("Collapse").click();
    cy.findByText("Collapse").should("not.exist");

    const container = cy.get("[data-testid=\"SidebarContainer\"]");
    container.should(el => expect(el.width()).equal(83));

    // cy.findByTestId("SidebarContainer").findAllByRole("link").should("have.length", 5);
    // cy.get("nav").find("a").should("have.length", 5);
    cy.findByRole("navigation").findAllByRole("link").should("have.length", 5);
  });
});