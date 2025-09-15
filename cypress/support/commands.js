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

Cypress.Commands.add('assertPaginationMatchesRows', () => {
  cy.get('p[class*="text-royalBlue"]')
    .invoke('text')
    .then((text) => {
      cy.log(`Raw pagination text: "${text}"`)

      // Find the "start-end of total" pattern anywhere in the string
      const match = text.match(/(\d+)-(\d+)\s+of\s+(\d+)/)

      if (!match) {
        throw new Error(`Pagination text did not match expected format: ${text}`)
      }

      const start = parseInt(match[1], 10)
      const end = parseInt(match[2], 10)
      const total = parseInt(match[3], 10)

      // Number of rows expected on this page
      const expectedVisibleRows = end - start + 1

      cy.log(`Pagination shows ${start}-${end} of ${total}`)
      cy.log(`Expected visible rows: ${expectedVisibleRows}`)

      // Verify table rows match visible count
      cy.get('tbody tr.hover\\:bg-sideNavGray.cursor-pointer', { timeout: 10000 })
        .should('have.length', expectedVisibleRows)
    })
})
        /*
        cy.get('p[class*="text-royalBlue"]')
            .invoke('text')
            .then((text) => {
        const match = text.match(/(\d+)-(\d+)\s+of\s+(\d+)/)
            if (match) {
                    const start = parseInt(match[1], 10)
                    const end = parseInt(match[2], 10)
                    const total = parseInt(match[3], 10)
                    const expectedVisibleRows = end - start + 1
                cy.log(`Pagination shows ${start}-${end} of ${total}`)
                cy.log(`Expected visible rows: ${expectedVisibleRows}`)

                // ✅ Only count real data rows
                cy.get('tbody tr.hover\\:bg-sideNavGray.cursor-pointer')
                .should('have.length', expectedVisibleRows)
            }
        })*/