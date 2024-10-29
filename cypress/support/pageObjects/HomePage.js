class HomePage {
  constructor() {
    this.linkLocator = "a[href]";
  }

  visitPage() {
    cy.visit(Cypress.env("baseUrl") + "/");
  }

  getAllLinks() {
    return cy.get(this.linkLocator);
  }
}

export default HomePage;
