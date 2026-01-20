import 'cypress-file-upload'

describe(
  'TissueCypher – Edit Order Status Transitions',
  { tags: ['tissuecypher', 'edit-order', 'status-transitions'] },
  function () {
    beforeEach(() => {
      // NOTE: Using the same inline login pattern as existing specs in this folder.
      // TODO: Move credentials to Cypress env/config when available.
      const testUsername = 'dodobo3146@appxapi.com'
      const testPassword = 'bhwY8En6a'
      const portalUrl = 'https://demo.clabsportal.com/'
      const authOrigin = 'https://democlient.clabsportal.com'

      cy.viewport(1920, 1081)
      cy.visit(portalUrl)
      cy.wait(500)
      cy.get('[type="button"]')
        .contains('login')
        .should('be.visible')
        .and('exist')
        .and('contain', 'login')
        .click()
        .wait(500)

      cy.origin(
        authOrigin,
        {
          args: {
            username: testUsername,
            password: testPassword
          }
        },
        ({ username, password }) => {
          cy.get('input[name="username"]').type(username)
          cy.get('input[name="password"]').type(password)
          cy.get('[type="submit"]')
            .contains('Sign In')
            .should('be.visible')
            .and('exist')
            .and('contain', 'Sign In')
            .click()
        }
      )

      cy.contains('p', 'Dashboard', { timeout: 90000 }).should('be.visible')
    })

    it('AC-1: In Progress → Pending Approval (resume, complete required, submit)', () => {
      // GIVEN: create a new TissueCypher order in In Progress
      cy.createTissueCypherOrder({ orderState: 'In Progress' })

      // WHEN: resume the order and complete required sections, then submit (send for approval)
      cy.contains('a', 'Test Orders', { timeout: 70000 })
        .should('have.attr', 'href', '/access/test-orders')
        .click()
        .wait(1000)

      cy.contains('button', 'Detail').eq(0).click().wait(1000)
      cy.url().should('include', '/summary/')
      cy.contains('button', 'Resume').should('be.visible').and('be.enabled').click()

      // Complete required sections (existing commands from OrderCreation spec)
      // TODO: Confirm which sections/fields are truly required for submission in the current UI.
      cy.fillBillingInfo()
      cy.fillLaboratoryInfo()
      cy.fillShipmentInfo()
      cy.attachSupportingDocuments()

      // Submit for approval (existing command in OrderCreation spec)
      cy.sendforapproval()

      // THEN: final status should be Pending Approval
      cy.assertLatestOrderStatus('Pending Approval')
    })

    it.skip('AC-2: In Progress → Pending Submission (resume, complete required, Save & Exit)', () => {
      // GIVEN: create a new TissueCypher order in In Progress
      cy.createTissueCypherOrder({ orderState: 'In Progress' })

      // WHEN: resume the order and complete required sections, then submit (send for approval)
      cy.contains('a', 'Test Orders', { timeout: 70000 })
        .should('have.attr', 'href', '/access/test-orders')
        .click()
        .wait(1000)

      cy.contains('button', 'Detail').eq(0).click().wait(1000)
      cy.url().should('include', '/summary/')
      cy.contains('button', 'Resume').should('be.visible').and('be.enabled').click()

      // Complete required sections (existing commands from OrderCreation spec)
      // TODO: Confirm which sections/fields are truly required for submission in the current UI.
      cy.fillBillingInfo()
      cy.fillLaboratoryInfo()
      cy.fillShipmentInfo()
      cy.attachSupportingDocuments()

      // Submit for approval (existing command in OrderCreation spec)
      cy.saveAndExitOrder()

      // THEN: final status should be Pending Approval
      cy.assertLatestOrderStatus('Pending Submission')
    })

    it.skip('AC-3: In Progress → Submitted (resume, complete all + upload doc, submit)', () => {
      // GIVEN: create a new TissueCypher order in In Progress
      cy.createTissueCypherOrder({ orderState: 'In Progress' })

      // WHEN: resume the order and complete required sections, then submit (send for approval)
      cy.contains('a', 'Test Orders', { timeout: 70000 })
        .should('have.attr', 'href', '/access/test-orders')
        .click()
        .wait(1000)

      cy.contains('button', 'Detail').eq(0).click().wait(1000)
      cy.url().should('include', '/summary/')
      cy.contains('button', 'Resume').should('be.visible').and('be.enabled').click()

      // Complete required sections (existing commands from OrderCreation spec)
      // TODO: Confirm which sections/fields are truly required for submission in the current UI.
      cy.fillBillingInfo()
      cy.fillLaboratoryInfo()
      cy.fillShipmentInfo()
      cy.attachSupportingDocuments()

      // Submit for approval (existing command in OrderCreation spec)
      cy.submitOrder()

      // THEN: final status should be Pending Approval
      cy.assertLatestOrderStatus('Submitted')
    })

    it.skip('AC-4: Pending Approval → In Progress (resume, partial edit, Save & Exit)', () => {
      // GIVEN: create a new TissueCypher order in In Progress
      cy.createTissueCypherOrder({ orderState: 'Pending Approval' })

      // WHEN: resume the order and complete required sections, then submit (send for approval)
      cy.contains('a', 'Test Orders', { timeout: 70000 })
        .should('have.attr', 'href', '/access/test-orders')
        .click()
        .wait(1000)

      cy.contains('button', 'Detail').eq(0).click().wait(1000)
      cy.url().should('include', '/summary/')
      cy.contains('button', 'Resume').should('be.visible').and('be.enabled').click()

      // Complete required sections (existing commands from OrderCreation spec)
      // TODO: Confirm which sections/fields are truly required for submission in the current UI.
      //cy.fillBillingInfo()
      cy.fillBillingInfoblank()
      //cy.fillShipmentInfo()
      cy.attachSupportingDocuments()

      // Submit for approval (existing command in OrderCreation spec)
      cy.saveAndExitOrder()

      // THEN: final status should be Pending Approval
      cy.assertLatestOrderStatus('In Progress')
    })

    it.skip('AC-5: Pending Approval → Pending Submission (resume, fill required, Save & Exit)', () => {
      // GIVEN: create a new TissueCypher order in In Progress
      cy.createTissueCypherOrder({ orderState: 'Pending Approval' })

      // WHEN: resume the order and complete required sections, then submit (send for approval)
      cy.contains('a', 'Test Orders', { timeout: 70000 })
        .should('have.attr', 'href', '/access/test-orders')
        .click()
        .wait(1000)

      cy.contains('button', 'Detail').eq(0).click().wait(1000)
      cy.url().should('include', '/summary/')
      cy.contains('button', 'Resume').should('be.visible').and('be.enabled').click()

      // Complete required sections (existing commands from OrderCreation spec)
      // TODO: Confirm which sections/fields are truly required for submission in the current UI.
      cy.fillBillingInfo()
      cy.fillBillingInfo()
      cy.fillShipmentInfo()
      cy.attachSupportingDocuments()

      // Submit for approval (existing command in OrderCreation spec)
      cy.saveAndExitOrder()

      // THEN: final status should be Pending Approval
      cy.assertLatestOrderStatus('Pending Submission')
      // TODO: Resume order, fill required sections, click Save & Exit
      // TODO: Assert final status: Pending Submission
    })

    it.skip('AC-6: Pending Approval → Submitted (resume, complete all + upload doc, submit)', () => {
      // GIVEN: create a new TissueCypher order in In Progress
      cy.createTissueCypherOrder({ orderState: 'Pending Approval' })

      // WHEN: resume the order and complete required sections, then submit (send for approval)
      cy.contains('a', 'Test Orders', { timeout: 70000 })
        .should('have.attr', 'href', '/access/test-orders')
        .click()
        .wait(1000)

      cy.contains('button', 'Detail').eq(0).click().wait(1000)
      cy.url().should('include', '/summary/')
      cy.contains('button', 'Resume').should('be.visible').and('be.enabled').click()

      // Complete required sections (existing commands from OrderCreation spec)
      // TODO: Confirm which sections/fields are truly required for submission in the current UI.
      cy.fillBillingInfo()
      cy.fillBillingInfo()
      cy.fillShipmentInfo()
      cy.attachSupportingDocuments()

      // Submit for approval (existing command in OrderCreation spec)
      cy.submitOrder()

      // THEN: final status should be Pending Approval
      cy.assertLatestOrderStatus('Submitted')
      // TODO: Resume order, fill required sections, click Save & Exit
      // TODO: Assert final status: Pending Submission
    })

    it.skip('AC-7: Pending Submission → In Progress (resume, partial edit, Save & Exit)', () => {
      // TODO: Programmatically create initial state: Pending Submission
      // TODO: Resume order, edit partial sections only, click Save & Exit
      // TODO: Assert final status: In Progress
    })

    it.skip('AC-8: Pending Submission → Pending Approval (resume, complete required, submit)', () => {
      // TODO: Programmatically create initial state: Pending Submission
      // TODO: Resume order, complete required sections, submit
      // TODO: Assert final status: Pending Approval
    })

    it.skip('AC-9: Pending Submission → Submitted (resume, complete all + upload docs, submit)', () => {
      // TODO: Programmatically create initial state: Pending Submission
      // TODO: Resume order, complete all required sections, submit + upload required documents
      // TODO: Assert final status: Submitted
    })

    /*
    it('AC-10: Validation Errors (attempt submit with incomplete form shows errors)', () => {
      // GIVEN: create a new TissueCypher order that is incomplete
      cy.createTissueCypherOrder({ orderState: 'In Progress' })

      // WHEN: resume and attempt to submit without completing required fields
      cy.contains('a', 'Test Orders', { timeout: 70000 })
        .should('have.attr', 'href', '/access/test-orders')
        .click()
        .wait(1000)

      cy.contains('button', 'Detail').eq(0).click().wait(1000)
      cy.url().should('include', '/summary/')
      cy.contains('button', 'Resume').should('be.visible').and('be.enabled').click()

      // Attempt submission
      // NOTE: Existing specs use `.primaryBtn` as the submit trigger.
      cy.get('.primaryBtn').should('be.visible').and('be.enabled').click()

      // THEN: validation errors should be displayed
      // TODO: Add assertions once selectors / error text is confirmed.
      // Examples (do NOT guess):
      // - cy.get('[data-testid="..."]').should('contain', 'Required')
      // - cy.contains('p', 'This field is required').should('be.visible')
    })*/
  }
)

/* ======================================================
   Existing inline command pattern (copied from
   `CBS-TissueCypher-OrderCreation-Tests.cy.js`)
   ====================================================== */

Cypress.Commands.add('createTissueCypherOrder', ({ orderState }) => {
  if (!orderState) {
    throw new Error('❌ orderState is required')
  }

  cy.navigateToNewOrder()
  cy.createPatient()
  cy.selectTissueCypherTest()

  if (orderState === 'In Progress') {
    // NOTE: Existing spec treats this as "partial" completion.
    // cy.fillBillingInfo()
    cy.fillLaboratoryInfo()
    // cy.fillShipmentInfo()
    cy.attachSupportingDocuments()
  }

  if (orderState !== 'In Progress') {
    cy.fillBillingInfo()
    cy.fillLaboratoryInfo()
    cy.fillShipmentInfo()
    cy.attachSupportingDocuments()
  }

  if (orderState === 'In Progress') {
    cy.saveAndExitOrder()
  }

  if (orderState === 'Pending Submission') {
    cy.saveAndExitOrder()
  }

  if (orderState === 'Pending Approval') {
    cy.sendforapproval()
  }

  if (orderState === 'Submitted') {
    cy.submitOrder()
  }

  cy.assertLatestOrderStatus(orderState)
})

Cypress.Commands.add('navigateToNewOrder', () => {
  cy.contains('a', 'Test Orders', { timeout: 70000 }).should('have.attr', 'href', '/access/test-orders') .click()
  cy.contains('button', 'New Online Order', { timeout: 5000 }).should('be.visible').and('be.enabled').click().wait(1000)
  cy.contains('button', 'Select organization').should('be.visible').and('be.enabled').click().wait(1000)
  cy.get('ul li button').eq(0).should('be.visible').click().wait(1500)
  cy.contains('button', 'Shahzad ORG 15 May').should('be.visible').and('be.enabled').click().wait(1000)
  cy.get('ul li button').eq(0).should('be.visible').click().wait(1500)
  cy.contains('button', 'Select a clinician').should('be.visible').and('be.enabled').click().wait(1000)
  cy.get('ul li button').eq(1).should('be.visible').click().wait(1500)
  cy.contains('button', 'next').should('be.visible').and('be.enabled').click().wait(1500)
})

Cypress.Commands.add('createPatient', () => {
  cy.get("input[placeholder=\"Search using Patient's Name, SSN or MRN.\"]:visible")
    .first()
    .should('be.enabled')
    .type('John Doe', { force: true })
  cy.contains('button', 'ADD', { timeout: 5000 }).should('be.visible').and('be.enabled').click().wait(500)
  cy.get('#firstName').type('Jack').wait(500)
  cy.get('#lastName').type('Maaaa').wait(500)
  cy.get('input[placeholder="MM-DD-YYYY"]:visible').first().type('05-16-1975')
  cy.get('#gender').click().wait(500)
  cy.get('ul span button').then(($items) => {
    const randomIndex = Math.floor(Math.random() * $items.length)
    cy.wrap($items[randomIndex]).click()
  })
  cy.contains('button', 'next').should('be.visible').and('be.enabled').click()
  cy.contains('button', 'next').should('be.visible').and('be.enabled').click().wait(500)
  cy.contains('button', 'Proceed to order').should('be.visible').and('be.enabled').click().wait(500)
})

Cypress.Commands.add('selectTissueCypherTest', () => {
  cy.contains('button', 'Review').should('be.visible').and('exist').wait(500)
  cy.contains('button', 'Save and Exit').should('be.visible').and('exist').and('be.disabled').wait(500)
  cy.contains('p', 'Select Test').should('be.visible').and('exist')

  cy.get('path[data-name="Path 5122"]').each(($el) => {
    cy.wrap($el).should('have.attr', 'fill', 'none')
  })

  cy.contains('p', 'TissueCypher').scrollIntoView().should('be.visible').and('exist').click().wait(500)
  cy.get('path[data-name="Path 5122"]').should('have.attr', 'fill', '#18B5B7')
})

Cypress.Commands.add('fillBillingInfo', () => {
  cy.get('a[href="#Billing Information"] p', { timeout: 1000 })
    .should('have.text', 'Billing Information')
    .should('be.visible')
    .click()

  cy.get('#billingInfo\\.icdCodeId').click()
  cy.get('div.absolute ul button.transparentBtn', { timeout: 10000 })
    .should('have.length.greaterThan', 0)
    .then(($buttonsicd) => {
      const randomIndexicd = Math.floor(Math.random() * $buttonsicd.length)
      cy.wrap($buttonsicd[randomIndexicd]).click()
    })

  cy.get('input[name="billingInfo.typeOfFacility"]').then(($options1) => {
    const randomIndex1 = Math.floor(Math.random() * $options1.length)
    const chosen1 = $options1[randomIndex1]
    cy.wrap(chosen1).click({ force: true })
    cy.log('Selected option: ' + chosen1.value)

    if (chosen1.value === 'Hospital Inpatient') {
      cy.get(
        '#Billing\\ Information > .p-6 > :nth-child(4) > .false > .react-datepicker-wrapper > .react-datepicker__input-container > .w-full'
      )
        .should('be.visible')
        .should('have.attr', 'placeholder', 'MM-DD-YYYY')
        .type('05-10-1975')
    }
  })
})

Cypress.Commands.add('fillBillingInfoblank', () => {
  cy.get('#billingInfo\\.icdCodeId').clear()
  cy.get('div.absolute ul button.transparentBtn', { timeout: 10000 })
    .should('have.length.greaterThan', 0)
    .then(($buttonsicd) => {
      const randomIndexicd = Math.floor(Math.random() * $buttonsicd.length)
      cy.wrap($buttonsicd[randomIndexicd]).click()
    })

  cy.get('input[name="billingInfo.typeOfFacility"]').then(($options1) => {
    const randomIndex1 = Math.floor(Math.random() * $options1.length)
    const chosen1 = $options1[randomIndex1]
    cy.wrap(chosen1).click({ force: true })
    cy.log('Selected option: ' + chosen1.value)

    if (chosen1.value === 'Hospital Inpatient') {
      cy.get(
        '#Billing\\ Information > .p-6 > :nth-child(4) > .false > .react-datepicker-wrapper > .react-datepicker__input-container > .w-full'
      )
        .should('be.visible')
        .should('have.attr', 'placeholder', 'MM-DD-YYYY')
        .clear()
    }
  })

})
Cypress.Commands.add('fillLaboratoryInfo', () => {
  cy.get('a[href="#Laboratory Information"] p')
    .should('have.text', 'Laboratory Information')
    .should('be.visible')
    .and('exist')
    .click()
    .wait(500)

  cy.get('input[name="laboratoryInfo.typeOfSpecimen"]').then(($options1) => {
    const randomIndex1 = Math.floor(Math.random() * $options1.length)
    const chosen1 = $options1[randomIndex1]
    cy.wrap(chosen1).click({ force: true })
  })

  cy.get('#laboratoryInfo\\.labortaryName').type('a').wait(1000)
  cy.get('input[name="laboratoryInfo.labortaryName"]')
    .then(($options2) => {
      const randomIndex2 = Math.floor(Math.random() * $options2.length)
      const chosen2 = $options2[randomIndex2]
      cy.wrap(chosen2).click({ force: true })
      cy.log('Selected option: ' + chosen2.value)
    })
  cy.wait(1000)  
  cy.get('input[placeholder="MM-DD-YYYY"]').eq(0).type('05-16-2025')
  cy.get('input[placeholder="MM-DD-YYYY"]').eq(1).type('05-18-2025').wait(1000)
})

Cypress.Commands.add('fillShipmentInfo', () => {
  cy.get('a[href="#Shipment Information"] p')
    .should('have.text', 'Shipment Information')
    .should('be.visible')
    .and('exist')
    .click()
    .wait(500)

  cy.get('input[name="isTissueShipped"]').check({ force: true }).wait(500)
  cy.get('input[placeholder="Enter tracking number"]').type('KMJ123')

  cy.get('input[name="shipMethod"]').then(($radios) => {
    expect($radios.length).to.be.greaterThan(0)

    cy.wrap($radios).each(($el) => {
      cy.wrap($el)
        .parent('label')
        .find('span')
        .invoke('text')
        .then((text) => {
          cy.log('Found radio option: ' + text.trim())
          expect(text.trim()).to.be.oneOf([
            'FedEx',
            'USPS',
            'UPS',
            'DHL',
            'Private Courier',
            'Hand-Delivered'
          ])
        })
    })

    const randomIndex = Cypress._.random(0, $radios.length - 1)
    cy.wrap($radios[randomIndex]).check({ force: true }).should('be.checked')
    cy.log('Randomly selected option: ' + $radios[randomIndex].value)
  })
})

Cypress.Commands.add('attachSupportingDocuments', () => {
  
  cy.get('a[href="#Supporting Documents"] p').scrollIntoView().click().wait(500)
  cy.get(':nth-child(2) > .max-w-\\[300px\\] > .font-normal').should('have.text','Endoscopy Report').should('be.visible').and('exist')
  cy.get(':nth-child(2) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
  cy.get(':nth-child(2) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
  cy.get(':nth-child(3) > .max-w-\\[300px\\] > .font-normal').should('have.text','Pathology Report').should('be.visible').and('exist')
  cy.get(':nth-child(3) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
  cy.get(':nth-child(3) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
  cy.get(':nth-child(4) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
  cy.get(':nth-child(4) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
  cy.get(':nth-child(5) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
  cy.get(':nth-child(5) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        

  cy.get('#notes').type('Testing notes')
})

Cypress.Commands.add('saveAndExitOrder', () => {
  cy.contains('button', 'Save and Exit').should('be.visible').and('be.enabled').click()
})

Cypress.Commands.add('submitOrder', () => {
  cy.get('.primaryBtn').click().wait(5000)
  cy.get('.justify-between > .w-full > .font-semibold')
    .should('have.text', 'Test Submission')
    .should('be.visible')
    .and('exist')
  cy.get('.md\\:max-w-\\[300px\\] > :nth-child(1) > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn > .font-semibold', {
    timeout: 5000
  }).attachFile('QA-Handbook.pdf', { subjectType: 'drag-n-drop' })
  cy.get('.w-full > :nth-child(1) > .primaryBtn', { timeout: 100000 }).should('be.visible').and('be.enabled').click()
  cy.get('.text-3xl', { timeout: 100000 }).should('have.text', 'Order Submitted').should('be.visible').and('exist')
})

Cypress.Commands.add('sendforapproval', () => {
  cy.get('.primaryBtn').click().wait(5000)
  cy.get('.justify-between > .w-full > .font-semibold')
    .should('have.text', 'Test Submission')
    .should('be.visible')
    .and('exist')
  cy.contains('button', 'Send for approval').should('be.visible').and('be.enabled').click()
  cy.get('.text-3xl', { timeout: 100000 })
    .should('have.text', 'Order Sent For Approval')
    .should('be.visible')
    .and('exist')
    .wait(5000)
})

Cypress.Commands.add('assertLatestOrderStatus', (orderState) => {
  // NOTE: Keeping the same approach as existing specs: assert status on first row.
  // TODO: If needed, improve reliability by filtering for the created order id.
  cy.contains('a', 'Test Orders', { timeout: 70000 }).should('have.attr', 'href', '/access/test-orders').click()

  if (orderState === 'In Progress') {
    cy.get(':nth-child(1) > .lg\\:right-0 > .py-1', { timeout: 100000 })
      .should('have.text', 'In Progress')
      .should('be.visible')
      .and('exist')
      .wait(2000)
    return
  }

  if (orderState === 'Pending Submission') {
    cy.get(':nth-child(1) > .lg\\:right-0 > .py-1', { timeout: 100000 })
      .should('have.text', 'Pending Submission')
      .should('be.visible')
      .and('exist')
      .wait(2000)
    return
  }

  if (orderState === 'Pending Approval') {
    cy.get(':nth-child(1) > .lg\\:right-0 > .py-1', { timeout: 100000 })
      .should('have.text', 'Pending Approval')
      .should('be.visible')
      .and('exist')
      .wait(2000)
    return
  }

  if (orderState === 'Submitted') {
    cy.get(':nth-child(1) > .lg\\:right-0 > .py-1', { timeout: 100000 })
      .should('have.text', 'Submitted')
      .should('be.visible')
      .and('exist')
      .wait(2000)
    return
  }

  throw new Error(`❌ Unsupported orderState: ${orderState}`)
})

