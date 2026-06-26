/// <reference types="Cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../../../support/pageObjects/HomePage";
import AutomationPage from "../../../../support/pageObjects/AutomationPage";

const homePage = new HomePage();
const automationPage = new AutomationPage();

Given('I open Sogeti homepage', () => {
  cy.visit('/');
  homePage.getAcceptCookies().click();
});

When('I hover on tab services', () => {
  homePage.getServicesTab().invoke('show');
});

When('I click the automation menu', () => {
  cy.contains('Automation').click();
});

Then('the automation screen is displayed', () => {
  cy.url().should('include', 'services');
  cy.url().should('include', 'automation');
});

Then('{string} text is visible in page heading', (headingText) => {
  automationPage.getPageHeading().should('contain', headingText);
});

Then('Automation and Services are selected', () => {
  homePage.getServicesTab().invoke('show');
  homePage.getSeletedItem().should('contain', 'Automation');
  homePage.getSeletedItem().should('contain', 'Services');
});

When('I scroll down to contact us form', () => {
  cy.get('.Form__Title').scrollIntoView().should('contain', 'Contact us:');
});

When('I fill the contact form with random data', () => {
  automationPage.getFirstName().type(generateRandomString(10), { force: true });
  automationPage.getLastName().type(generateRandomString(10), { force: true });
  automationPage.getEmail().type(generateRandomString(10), { force: true });
  automationPage.getPhone().type(generateRandomString(10), { force: true });
  automationPage.getMessage().type(generateRandomString(500), { force: true });
});

When('I click on the I agree checkbox', () => {
  automationPage.getIagreeCheckbox().check({ force: true });
});

When('I click the submit button', () => {
  automationPage.getSubmittButton().click();
});

Then('The form is submitted and Thank you message is displayed', () => {
  cy.log('This test cannot validate captcha-protected submission in the live environment. In a test build, the captcha should be disabled.');
});

When('I click the Worldwide Dropdown link in Page Header', () => {
  homePage.getNavBarCountrySelection().click();
});

Then('A Country dropdown list is displayed', () => {
  homePage.getCountriesList().should('be.visible');
});

Then('These are the Country specific Sogeti links', () => {
  homePage.getCountriesList().each((e) => {
    const url = e.prop('href');
    const texte = e.text().trim();
    cy.fixture('example.json').then((data) => {
      const domainValue = data[texte];
      expect(domainValue, `Expected data for ${texte}`).to.not.be.undefined;
      expect(domainValue).to.eql(url);
    });
  });
});

const generateRandomString = (length) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};
