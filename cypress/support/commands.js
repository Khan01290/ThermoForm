// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
/// //<reference types="Cypress" />
/// <reference types="cypress-xpath" />
    import 'cypress-iframe';
    import 'cypress-file-upload';

    import './commands'
  

    
    // Define the task to save a variable
Cypress.Commands.add('saveVariable', ({ key, value }) => {
    cy.task('saveVariable', { key, value });
});

// Define the task to get a variable
Cypress.Commands.add('getVariable', (key) => {
    return cy.task('getVariable', key);
});

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

  // cypress/support/commands.js
const globalStore = {};

// Optionally, you can define custom commands to interact with this store
Cypress.Commands.add('setGlobalElement', (key, value) => {
  globalStore[key] = value;
});

Cypress.Commands.add('getGlobalElement', (key) => {
  return globalStore[key];
});

