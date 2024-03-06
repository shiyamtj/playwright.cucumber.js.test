Feature: SwagLabs login feature
  Feature description to test login logout functionality

  @smoke @regression
  Scenario: Login with valid credentials
    Given User launch Swag Labs site
    When User logs in with valid credentials on Swag Labs

  @regression
  Scenario: Login with valid credentials
    Given User launch Swag Labs site
    When User logs in with valid credentials on Swag Labs
