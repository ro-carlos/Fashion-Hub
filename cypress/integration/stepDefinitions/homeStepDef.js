import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../support/pageObjects/HomePage";

const homePage = new HomePage();

Given("I am on the home page", () => {
  homePage.visitPage();
});

Then("there should be no errors in the console", () => {
  cy.verifyNoConsoleErrors();
});

When("I fetch all links on the page", () => {
  homePage.getAllLinks().then(($links) => {
    const linksToCheck = [];
    $links.each((index, el) => {
      const link = el.getAttribute("href");
      const url = link.startsWith("http")
        ? link
        : new URL(Cypress.env("baseUrl")).origin + link;
      linksToCheck.push(url);
    });
    cy.wrap(linksToCheck).as("linksToCheck"); // Alias the array of links
  });
});

Then(
  "each link should return a 200 or 30x status code and no link should return a 40x status code",
  () => {
    // Access the aliased links and visit each one
    cy.get("@linksToCheck").then((urls) => {
      urls.forEach((url) => {
        cy.request(url, { failOnStatusCode: false }).then((response) => {
          expect(response.status).to.be.oneOf([200, 301, 302, 303, 307, 308]);
          expect(response.status).not.to.be.within(400, 499);
        });
      });
    });
  },
);
