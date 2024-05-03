import mockProjects from '../../fixtures/projects.json'
import {capitalize} from "lodash";

describe("Project list", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/");
    });
    context("Desktop mode", () => {
        beforeEach(() => {
            // run these tests as if in a desktop
            // browser with a 720p monitor
            cy.viewport(1280, 720);
        });

        it("should display project list", () => {
            const languages = ["React", "Node", "Python"]
            cy.intercept('GET', "http://localhost:3000/api/projects", {fixture: 'projects.json'})
            cy.get("[data-testid='List']").findAllByRole('listitem').each(($el, index) => {
                console.log($el)
                cy.wrap($el).contains(mockProjects[index].name)
                cy.wrap($el).contains(mockProjects[index].numIssues)
                cy.wrap($el).contains(mockProjects[index].numEvents24h)
                cy.wrap($el).contains(capitalize(mockProjects[index].status))
                cy.wrap($el).contains(languages[index])
                cy.wrap($el).findByRole('link').should("have.attr", "href", "/issues")
            })
            cy.findByText('Frontend - Web Test').should("exist")
        });
    })
})
