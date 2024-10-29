Feature: Login Fashion Hub Functionality

  @Smoke
  Scenario: Logging into the application with valid user
    Given I open the Fashion Hub login page
    Then the login button is enabled
    When I add login data
      | user      | password   |
      | demouser  | fashion123 |
    Then welcome label is present
    And the logout option is present

  @Regression
  Scenario: Logging into the application with invalid user
    Given I open the Fashion Hub login page
    When I add login data
      | user        | password   |
      | invaliduser | fashion123 |
    Then the error message "Invalid username or password" is displayed