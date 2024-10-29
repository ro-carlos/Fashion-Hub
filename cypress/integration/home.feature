Feature: Home Page Functionality

  @Smoke
  Scenario: Validate no console errors on the home page
    Given I am on the home page
    Then there should be no errors in the console