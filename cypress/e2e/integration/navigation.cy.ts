describe("Navigation Sidebar", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  context("Desktop mode", () => {
    beforeEach(() => {
      // run these tests as if in a desktop
      // browser with a 720p monitor
      cy.viewport(1280, 720);
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

  context("iphone-5 resolution", () => {
    beforeEach(() => {
      cy.viewport("iphone-8");
    });

    function isInViewport (el: string) {
      cy.get(el).then(($el) => {
        // navigation should cover the whole screen
        const rect = $el[0].getBoundingClientRect();
        expect(rect.right).to.be.equal(rect.width);
        expect(rect.left).to.be.equal(0);
      });
    }

    function isNotInViewport (el: string) {
      cy.get(el).then(($el) => {
        // naviation should be outside of the screen
        const rect = $el[0].getBoundingClientRect();
        expect(rect.left).to.be.equal(-rect.width);
        expect(rect.right).to.be.equal(0);
      });
    }

    it("toggles sidebar navigation by clicking the menu icon", () => {
      // wait for animation to finish
      cy.wait(500);
      isNotInViewport("nav");

      // open mobile navigation
      cy.findAllByAltText("open menu").click();

      // wait for animation to finish
      cy.wait(500);
      isInViewport("nav");

      // check that all links are rendered
      cy.findByRole("navigation").findAllByRole("link").should("have.length", 5);

      // Support button should be rendered but Collapse button not
      cy.get("nav").contains("Support").should("exist");
      cy.get("nav").contains("Collapse").should("not.be.visible");

      // close mobile navigation and check that it disappears
      cy.findAllByAltText("close menu").click();
      cy.wait(500);
      isNotInViewport("nav");
    });
  });
});