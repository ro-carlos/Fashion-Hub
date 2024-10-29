class GitHubPage {
  constructor() {
    this.pullRequestLocator = ".js-issue-row";
    this.prTitleLocator = ".Link--primary";
    this.prDateLocator = ".opened-by > relative-time";
    this.prAuthorLocator = ".opened-by > a";
  }

  visitPage() {
    cy.visit(Cypress.env("githubPRsUrl"));
  }

  getPullRequests() {
    return cy.get(this.pullRequestLocator);
  }

  getTitle(pr) {
    return pr.find(this.prTitleLocator);
  }

  getDate(pr) {
    return pr.find(this.prDateLocator);
  }

  getAuthor(pr) {
    return pr.find(this.prAuthorLocator);
  }
}

export default GitHubPage;
