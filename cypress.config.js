const { defineConfig } = require('cypress')
// npm install lodash del --save-dev
const _ = require('lodash')
const del = require('del')

module.exports = defineConfig({
  //The number of tests for which snapshots and command data are kept in memory.
  numTestsKeptInMemory: 30,
  retries: {
    // Configure retry attempts for `cypress run`
    // Default is 0
    runMode: 1,
    // Configure retry attempts for `cypress open`
    // Default is 0
    openMode: 0
  },
  //Change height and width in pixels for the application under tests' viewport
  viewportHeight: 1080,
  viewportWidth: 1920,
  //Viewport position to which an element should be scrolled before executing commands
  scrollBehavior: 'center',
  //Time, in milliseconds, to wait until most DOM based commands are considered timed out.
  defaultCommandTimeout: 10000,
  e2e: {
    //baseUrl: 'https://www.saucedemo.com',
    //A String or Array of glob patterns of the test files to load.
    specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      //Only upload videos for specs with failing or retried tests
      on('after:spec', (spec, results) => {
        if (results?.video) {
          // Do we have failures for any retry attempts?
          const failures = _.some(results.tests, (test) => {
            return _.some(test.attempts, { state: 'failed' })
          })
          if (!failures) {
            // delete the video if the spec passed and no tests retried
            return del(results.video)
          }
        }
      })
    },
  },
});
