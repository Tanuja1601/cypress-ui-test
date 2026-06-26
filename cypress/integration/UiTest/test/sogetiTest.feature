Feature: Sogeti website automation and global link verification

  Scenario: Navigate to the Automation page
    Given I open Sogeti homepage
    When I hover on tab services
    And I click the automation menu
    Then the automation screen is displayed
    And "Automation" text is visible in page heading
    And Automation and Services are selected

  Scenario: Validate automation error message
    Given I open Sogeti homepage
    When I hover on tab services
    And I click the automation menu
    Then Error message should be displayed to the user that "Automation is Failing"

  Scenario: Submit the contact form with random data
    Given I open Sogeti homepage
    When I hover on tab services
    And I click the automation menu
    And I scroll down to contact us form
    And I fill the contact form with random data
    And I click on the I agree checkbox
    And I click the submit button
    Then The form is submitted and Thank you message is displayed

  Scenario: Verify country-specific Sogeti links
    Given I open Sogeti homepage
    When I click the Worldwide Dropdown link in Page Header
    Then A Country dropdown list is displayed
    And These are the Country specific Sogeti links
