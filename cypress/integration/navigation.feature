Feature: Navigation Functionality

  @Regression
  Scenario: Validate status codes for each link on the page
    Given I am on the home page
    When I fetch all links on the page
    Then each link should return a 200 or 30x status code and no link should return a 40x status code