# Sogeti UI Test

Cypress BDD automation suite for the Sogeti website. This repository demonstrates feature-driven UI validation for:

- homepage navigation
- automation page verification
- contact form input validation
- country-specific link verification

## Prerequisites

- Node.js 16+ installed
- npm available on your machine

## Install

```bash
npm install
```

## Run the tests

```bash
npm test
npm run test:headed
npm run test:chrome
npm run open
```

## Project structure

- `cypress.config.js` — Cypress configuration
- `cypress/support/` — shared support files and commands
- `cypress/integration/UiTest/test/sogetiTest.feature` — BDD feature file
- `cypress/fixtures/example.json` — fixture data for country link validation
- `cypress/support/pageObjects/` — page object classes

## Notes

- The suite uses the Cypress Cucumber preprocessor.
- The base URL is configured in `cypress.config.js`.
- This repo is prepared for a clean GitHub showcase and interview submission.
