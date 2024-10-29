import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import GitHubPage from "../../support/pageObjects/GithubPage";

const gitHubPage = new GitHubPage();

Given("I navigate to the GitHub pull requests page", () => {
  gitHubPage.visitPage();
});

When("I collect all open pull requests data", () => {
  const pullRequestsData = [];

  gitHubPage
    .getPullRequests()
    .each(($pr) => {
      const title = gitHubPage.getTitle($pr).text().trim();
      const date = gitHubPage.getDate($pr).attr("datetime");
      const author = gitHubPage.getAuthor($pr).text().trim();

      pullRequestsData.push({ title, date, author });
    })
    .then(() => {
      cy.wrap(pullRequestsData).as("pullRequestsData");
    });
});

Then("I save the pull requests data to a CSV file", () => {
  cy.get("@pullRequestsData").then((pullRequestsData) => {
    // Convert the data to CSV format manually
    const csvData = [
      ["Title", "Date", "Author"], // CSV headers
      ...pullRequestsData.map((pr) => [pr.title, pr.date, pr.author]),
    ]
      .map((row) => row.join(","))
      .join("\n");
    // Write the CSV data to a file
    cy.writeFile("cypress/fixtures/open_pull_requests.csv", csvData);
  });
});
