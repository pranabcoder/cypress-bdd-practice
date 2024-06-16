const {Given, When} = require("@badeball/cypress-cucumber-preprocessor");

const url = "http://www.webdriveruniversity.com";

Given(/^I access webdriver university home page$/, function () {
  cy.visit(url);
});

When(/^I click on the contact us link$/, function () {
  cy.get("#contact-us").invoke("removeAttr", "target").click();
});