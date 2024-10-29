import { Then } from "@badeball/cypress-cucumber-preprocessor";
import AccountPage from "../../support/pageObjects/AccountPage";

const accountPage = new AccountPage();

Then("welcome label is present", () => {
  accountPage.getWelcomeUser().should("be.visible");
});

Then("the logout option is present", () => {
  accountPage.getLogoutButton().should("be.visible");
});
