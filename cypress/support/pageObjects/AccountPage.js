class AccountPage {
  constructor() {
    this.welcomeUser = "h2";
    this.logoutButton = "logout-button";
  }

  visitPage() {
    cy.visit(Cypress.env("baseUrl") + "/account.html");
  }

  getWelcomeUser() {
    return cy.get(this.welcomeUser);
  }

  getLogoutButton() {
    return cy.get(this.logoutButton);
  }
}

export default AccountPage;
