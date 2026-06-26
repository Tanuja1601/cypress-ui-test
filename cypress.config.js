const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));
  return config;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    baseUrl: "https://www.sogeti.com",
    specPattern: "cypress/integration/UiTest/test/*.feature",
    supportFile: "cypress/support/e2e.js"
  },
  defaultCommandTimeout: 6000,
  retries: {
    runMode: 1
  }
});
