# Created by prana at 16/06/2024
Feature: Webdriver University - Contact Us form

  Scenario: Valid submission of Contact Us form
    Given I access webdriver university home page
    When I click on the contact us link
    And I enter a valid first name
    And I enter a valid last name
    And I enter a valid email address
    And I enter comments
    And I click on the submit button
    Then the information should successfully be submitted