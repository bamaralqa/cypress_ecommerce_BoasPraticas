const { defineConfig } = require("cypress");
const allureWrite = require('@shelex/cypress-allure-plugin/writer')

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://www.automationexercise.com/',
    setupNodeEvents(on, config) {
      allureWrite(on, config)
      return config
      // implement node event listeners here
    },
    env:{
      allure: true,
      allureResultsPath:'allure-results'
    }
  },
});
