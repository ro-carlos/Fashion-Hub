import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../support/pageObjects/LoginPage";

const loginPage = new LoginPage();

Given("I open the Fashion Hub login page", () => {
  loginPage.visitPage();
});

When("I add login data", (dataTable) => {
  const data = dataTable.hashes()[0];

  loginPage.getUsernameField().type(data.user);
  loginPage.getPasswordField().type(data.password);
  loginPage.getLoginButton().click();
});

Then("the login button is enabled", () => {
  loginPage.getLoginButton().should("be.enabled");
});

Then('the error message "Invalid username or password" is displayed', () => {
  loginPage.getErrorMessage().should("contain", "Invalid username or password");
});
