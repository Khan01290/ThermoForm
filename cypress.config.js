const { defineConfig } = require("cypress");


module.exports = defineConfig({
  projectId: "dijb3w",
  pageLoadTimeout: 120000, // Set the page load timeout to 120 seconds (2 minutes)
  reporter: 'cypress-mochawesome-reporter',   // For HTML Reporter
  /*reporterOptions: {
    charts: true,
    reportPageTitle: 'Automation Reports',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    autoOpen: true,
    overwrite: false,
    reportFilename: "[status]_[datetime]-[name]-report",
  },*/
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);   // For HTML Reporter
      
      // implement node event listeners here
      
      // Register the task events in the setupNodeEvents method
            on('task', {
              saveVariable({ key, value }) {
                // Save the variable in a storage mechanism of your choice (e.g., an object)
                // In a real scenario, you might use a database or an external storage service.
                config.env.variables = config.env.variables || {};
                config.env.variables[key] = value;
                return null; // To satisfy Cypress's requirement for a return value
              },
              getVariable(key) {
                // Retrieve the variable from the storage mechanism
                // In a real scenario, you might use a database or an external storage service.
                return config.env.variables ? config.env.variables[key] : null;
              },
            });
            return config;
    },
  },
});

