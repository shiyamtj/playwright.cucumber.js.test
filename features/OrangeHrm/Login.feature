Feature: OrangeHrm login feature
  Feature description to test login logout functionality

  @smoke
  Scenario: Login with valid credentials 1
    Given User launch OrangeHrm site
    When User logs in with valid credentials on OrangeHrm
    Then User should able to log into OrangeHrm dashboard successfully

  @regression
  Scenario: Login with valid credentials 2
    Given User launch OrangeHrm site
    When User logs in with valid credentials on OrangeHrm
    Then User should able to log into OrangeHrm dashboard successfully
    And User should able to see Dashboard text