// Define the task to save a variable
import './commands';
on('task', {
    saveVariable({ key, value }) {
        // Save the variable in a storage mechanism of your choice (e.g., an object)
        // In a real scenario, you might use a database or an external storage service.
        Cypress.env.variables = Cypress.env.variables || {};
        Cypress.env.variables[key] = value;
        return null; // To satisfy Cypress's requirement for a return value
    },
    getVariable(key) {
        // Retrieve the variable from the storage mechanism
        // In a real scenario, you might use a database or an external storage service.
        return Cypress.env.variables ? Cypress.env.variables[key] : null;
    },
});

const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = (on, config) => {
  allureWriter(on, config);
  return config;
};
