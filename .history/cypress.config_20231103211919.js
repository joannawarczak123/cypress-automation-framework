const {defineConfig} = require("cypress")

module.exports = defineConfig ({
  projectId: 'fwjxmp',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    excludeSpecPattern: "cypress/e2e/other/*.js",
    baseUrl: "https://webdriveruniversity.com/",
    chromeWebSecurity: false,
    experimentalSessionAndOrigin:true,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    viewportHeight: 1080,
    viewportWidth: 1920,
    reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
    env: {
      first_name: "Sarah",
      webdriveruni_homepage: "http://www.webdriveruniversity.com/"
    }
  },
});
