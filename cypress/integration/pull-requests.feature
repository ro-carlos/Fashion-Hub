Feature: GitHub Pull Requests Export Functionality

  Scenario: Export open pull requests to CSV
    Given I navigate to the GitHub pull requests page
    When I collect all open pull requests data
    Then I save the pull requests data to a CSV file