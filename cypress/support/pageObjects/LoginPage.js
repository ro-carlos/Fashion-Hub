class LoginPage {
  constructor() {
    this.usernameLocator = "#username";
    this.passwordLocator = "#password";
    this.loginButtonLocator = 'input[type="submit"]';
    this.errorMessageLocator = "#errorMessage";
  }

  visitPage() {
    cy.visit(Cypress.env("baseUrl") + "/login.html");
  }

  getUsernameField() {
    return cy.get(this.usernameLocator);
  }

  getPasswordField() {
    return cy.get(this.passwordLocator);
  }

  getLoginButton() {
    return cy.get(this.loginButtonLocator);
  }

  getErrorMessage() {
    return cy.get(this.errorMessageLocator);
  }
}

export default LoginPage;
