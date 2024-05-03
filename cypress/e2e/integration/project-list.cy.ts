import mockProjects from '../../fixtures/projects.json'
import {capitalize} from "lodash";

describe("Project list", () => {
    beforeEach(() => {
        cy.intercept("GET", "http://localhost:3000/api/projects?page=1", {
            fixture: "projects.json",
        }).as("getProjects");
        cy.visit("http://localhost:3000");
    });
    context("Desktop mode", () => {
        beforeEach(() => {
            // run these tests as if in a desktop
            // browser with a 720p monitor
            cy.viewport(1280, 720);
        });

        it("should display project list", () => {
            const languages = ["React", "Node", "Python"]
            cy.get("[data-testid='project-item']").each(($el, index) => {
                const project = mockProjects[index]
                cy.wrap($el).contains(project.name)
                cy.wrap($el).contains(project.numIssues)
                cy.wrap($el).contains(project.numEvents24h)
                cy.wrap($el).contains(capitalize(project.status))
                cy.wrap($el).contains(languages[index])
                cy.wrap($el).findByRole('link').should("have.attr", "href", "/issues")
            })
        });
    })
})
