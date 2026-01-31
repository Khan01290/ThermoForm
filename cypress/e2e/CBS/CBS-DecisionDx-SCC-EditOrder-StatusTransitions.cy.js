import 'cypress-file-upload'

describe(
  'DecisionDx-SCC – Edit Order Status Transitions',
  { tags: ['DecisionDx-SCC', 'edit-order', 'status-transitions'] },
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
      // Phase 1: Create order in In Progress
      cy.createDecisionDxSCCOrder({ orderState: 'In Progress' })
      
      //Phase 2: Resume order
      //cy.openLatestOrder()
      cy.resumeOrder()

      // Phase 3: Complete ONLY missing sections
      cy.fillclinicalInfo()  
      cy.fillLaboratoryInfo()
      cy.fillShipmentInfo()

      // Phase 4: Transition
      cy.sendforapproval()

      // THEN: final status should be Pending Approval
      cy.assertLatestOrderStatus('Pending Approval')
    })

    it('AC-2: In Progress → Pending Submission (resume, complete required, Save & Exit)', () => {
      // Phase 1: Create order in In Progress
      cy.createDecisionDxSCCOrder({ orderState: 'In Progress' })
      
      //Phase 2: Resume order
      //cy.openLatestOrder()
      cy.resumeOrder()

      // Phase 3: Complete ONLY missing sections
      cy.fillclinicalInfo() 
      cy.fillLaboratoryInfo()
      cy.fillShipmentInfo()
      //cy.attachSupportingDocuments()

      // Phase 4: Transition
      cy.saveAndExitOrder()

      // THEN: final status should be Pending Approval
      cy.assertLatestOrderStatus('Pending Submission')
    })

    it('AC-3: In Progress → Submitted (resume, complete all + upload doc, submit)', () => {
      // Phase 1: Create order in In Progress
      cy.createDecisionDxSCCOrder({ orderState: 'In Progress' })
      
      //Phase 2: Resume order
      //cy.openLatestOrder()
      cy.resumeOrder()

      // Phase 3: Complete ONLY missing sections
      cy.fillclinicalInfo() 
      cy.fillLaboratoryInfo()
      cy.fillShipmentInfo()
      //cy.attachSupportingDocuments()

      // Phase 4: Transition
      cy.submitOrder()

      // THEN: final status should be Pending Approval
      cy.assertLatestOrderStatus('Submitted')
    })

    it('AC-4: Pending Approval → In Progress (resume, partial edit, Save & Exit)', () => {
      // Phase 1: Create order in Pending Approval
      cy.createDecisionDxSCCOrder({ orderState: 'Pending Approval' })

      //Phase 2: Resume order
      //cy.openLatestOrder()
      cy.resumeOrder()

      // Phase 4: Transition
      //cy.fillBillingInfo()
      cy.fillBillingInfoblank()
      //cy.fillShipmentInfo()
      //cy.attachSupportingDocuments()

      // Submit for approval (existing command in OrderCreation spec)
      cy.saveAndExitOrder()

      // THEN: final status should be In Progress
      cy.assertLatestOrderStatus('In Progress')
    })

    it('AC-5: Pending Approval → Pending Submission (resume, fill required, Save & Exit)', () => {
      // GIVEN: create a new TissueCypher order in In Progress
      cy.createDecisionDxSCCOrder({ orderState: 'Pending Approval' })

      //Phase 2: Resume order
      //cy.openLatestOrder()
      cy.resumeOrder()

      // Phase 4: Transition
      //cy.fillBillingInfo()
      //cy.fillBillingInfoblank()
      //cy.fillShipmentInfo()
      //cy.attachSupportingDocuments()

      // Submit for approval (existing command in OrderCreation spec)
      cy.saveAndExitOrder()

      // THEN: final status should be Pending Approval
      cy.assertLatestOrderStatus('Pending Submission')
    })

    it('AC-6: Pending Approval → Submitted (resume, complete all + upload doc, submit)', () => {
      // GIVEN: create a new TissueCypher order in Pending Approval
      cy.createDecisionDxSCCOrder({ orderState: 'Pending Approval' })

      //Phase 2: Resume order
      //cy.openLatestOrder()
      cy.resumeOrder()

      // Phase 4: Transition
      //cy.fillBillingInfo()
      //cy.fillBillingInfoblank()
      //cy.fillShipmentInfo()
      //cy.attachSupportingDocuments()

      // Submit for approval (existing command in OrderCreation spec)
      cy.submitOrder()

      // THEN: final status should be Submitted
      cy.assertLatestOrderStatus('Submitted')
    })

    it('AC-7: Pending Submission → In Progress (resume, partial edit, Save & Exit)', () => {
      // GIVEN: create a new TissueCypher order in Pending Submission
      cy.createDecisionDxSCCOrder({ orderState: 'Pending Submission' })

      //Phase 2: Resume order
      //cy.openLatestOrder()
      cy.resumeOrder()

      // Phase 4: Transition
      //cy.fillBillingInfo()
      cy.fillBillingInfoblank()
      //cy.fillShipmentInfo()
      //cy.attachSupportingDocuments()

      // Submit for In Progress (existing command in OrderCreation spec)
      cy.saveAndExitOrder()

      // THEN: final status should be In Progress
      cy.assertLatestOrderStatus('In Progress')
    })

    it('AC-8: Pending Submission → Pending Approval (resume, complete required, submit)', () => {
      // GIVEN: create a new TissueCypher order in Pending Submission
      cy.createDecisionDxSCCOrder({ orderState: 'Pending Submission' })

      //Phase 2: Resume order
      //cy.openLatestOrder()
      cy.resumeOrder()

      // Phase 4: Transition
      //cy.fillBillingInfo()
      //cy.fillBillingInfoblank()
      //cy.fillShipmentInfo()
      //cy.attachSupportingDocuments()

      // Submit for Pending Approval (existing command in OrderCreation spec)
      cy.sendforapproval()

      // THEN: final status should be Pending Approval
      cy.assertLatestOrderStatus('Pending Approval')
    })

    it('AC-9: Pending Submission → Submitted (resume, complete all + upload docs, submit)', () => {
      // GIVEN: create a new TissueCypher order in Pending Submission
      cy.createDecisionDxSCCOrder({ orderState: 'Pending Submission' })

      //Phase 2: Resume order
      //cy.openLatestOrder()
      cy.resumeOrder()

      // Phase 4: Transition
      //cy.fillBillingInfo()
      //cy.fillBillingInfoblank()
      //cy.fillShipmentInfo()
      //cy.attachSupportingDocuments()

      // Submit for Pending Approval (existing command in OrderCreation spec)
      cy.submitOrder()

      // THEN: final status should be Submitted
      cy.assertLatestOrderStatus('Submitted')
    })
  }
)

/* ======================================================
   Existing inline command pattern (copied from
   `CBS-TissueCypher-OrderCreation-Tests.cy.js`)
   ====================================================== */

Cypress.Commands.add('createDecisionDxSCCOrder', ({ orderState }) => {
  if (!orderState) {
    throw new Error('❌ orderState is required')
7  }

  cy.navigateToNewOrder()
  cy.createPatient()
  cy.selectDecisionDxSCCTest()

  if (orderState === 'In Progress') {
    // NOTE: Existing spec treats this as "partial" completion.
    cy.fillBillingInfo()
    //cy.fillLaboratoryInfo()
    // cy.fillShipmentInfo()
    cy.attachSupportingDocuments()
  }

  if (orderState !== 'In Progress') {
    cy.fillBillingInfo()
    cy.fillclinicalInfo()  
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
    .type('Bob Dool', { force: true })
  cy.contains('button', 'ADD', { timeout: 5000 }).should('be.visible').and('be.enabled').click().wait(500)
  //cy.get('#firstName').type('Jack').wait(500)
  //cy.get('#lastName').type('Maaaa').wait(500)
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

Cypress.Commands.add('selectDecisionDxSCCTest', () => {
  cy.contains('button', 'Review').should('be.visible').and('exist').wait(500)
  cy.contains('button', 'Save and Exit').should('be.visible').and('exist').and('be.disabled').wait(500)
  cy.contains('p', 'Select Test').should('be.visible').and('exist')

  cy.get('path[data-name="Path 5122"]').each(($el) => {
    cy.wrap($el).should('have.attr', 'fill', 'none')
  })

  cy.contains('p', 'DecisionDx-SCC').scrollIntoView().should('be.visible').and('exist').click().wait(500)
  cy.get('path[data-name="Path 5122"]').should('have.attr', 'fill', '#18B5B7')
})

Cypress.Commands.add('fillBillingInfo', () => {
  cy.get('a[href="#Billing Information"] p', { timeout: 1000 })
    .should('have.text', 'Billing Information')
    .should('be.visible')
    .click().wait(10000)

  cy.get('#billingInfo\\.icdCodeId').click().wait(2500)
  cy.get('div.absolute ul button.transparentBtn', { timeout: 100000 })
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
})

Cypress.Commands.add('fillclinicalInfo', () => {
     
  cy.get('a[href="#Clinical Information"] p').should('have.text','Clinical Information').should('be.visible').and('exist').click().wait(1000)    // Selecting Clinical Info from side menu
   // Get all checkboxes
   cy.get('input[name="historyPhysicalExam"]').then($checkboxes => {
   expect($checkboxes.length).to.be.greaterThan(0)   // assert checkboxes exist

   // Randomly decide: single random OR all
   const pickAll = Cypress._.random(0, 1) === 1  // 50/50 chance

   if (pickAll) {
       // Select ALL checkboxes
       cy.wrap($checkboxes).each(($el) => {
       cy.wrap($el).check({ force: true }).should('be.checked')
       })
       cy.log('✅ All checkboxes selected')
   } else {
       // Select ONE random checkbox
       const randomIndex = Cypress._.random(0, $checkboxes.length - 1)
       cy.wrap($checkboxes[randomIndex])
       .check({ force: true })
       .should('be.checked')

       cy.log('✅ Random checkbox selected: ' + $checkboxes[randomIndex].value)
   }
   })

   // Get all checkboxes under Surgical and Pathology Findings
   cy.get('input[name="pathologySurgicalFindings"]').then($checkboxes => {
   expect($checkboxes.length).to.be.greaterThan(0)   // assert checkboxes exist

   // Randomly decide: single random OR all
   const pickAll = Cypress._.random(0, 1) === 1  // 50/50 chance

   if (pickAll) {
       // ✅ Select ALL checkboxes
       cy.wrap($checkboxes).each(($el) => {
       cy.wrap($el).check({ force: true }).should('be.checked')
       })
       cy.log('✅ All Surgical & Pathology checkboxes selected')
   } else {
       // ✅ Select ONE random checkbox
       const randomIndex = Cypress._.random(0, $checkboxes.length - 1)
       cy.wrap($checkboxes[randomIndex])
       .check({ force: true })
       .should('be.checked')

       cy.log('✅ Random checkbox selected: ' + $checkboxes[randomIndex].value)
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
  //cy.get('input[name="supportingDocuments.endoscopyReport"]', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
  cy.get('input[name="supportingDocuments.pathologyReport"]', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
  cy.get('input[name="supportingDocuments.demographicsSheet"]', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
  cy.get('input[name="supportingDocuments.insuranceCard"]', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        

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
  
  cy.get('.md\\:max-w-\\[300px\\] > :nth-child(1) > .bg-sideNavGray > span > .secondaryBtn > .font-semibold', { timeout: 100000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})               // Attach file for order submission
  cy.get('.justify-end > .flex > span > .primaryBtn', { timeout: 100000 }).should('be.visible').and('be.enabled').click().wait(30000)
})

Cypress.Commands.add('sendforapproval', () => {
  cy.get('.primaryBtn').click().wait(5000)
  cy.get('.justify-between > .w-full > .font-semibold')
    .should('have.text', 'Test Submission')
    .should('be.visible')
    .and('exist')
  cy.contains('button', 'Send for approval').should('be.visible').and('be.enabled').click()
  cy.get('.text-3xl', { timeout: 100000 }).should('have.text','Order Sent For Approval').should('be.visible').and('exist').wait(5000)                               // Order Sent For Approval assertion        

})

Cypress.Commands.add('assertLatestOrderStatus', (orderState) => {

  // Chwck the order status is In Progress
  if (orderState === 'In Progress') {
      cy.get(':nth-child(1) > .lg\\:right-0 > .py-1', { timeout: 100000 })
        .should('have.text', 'In Progress')
        .should('be.visible')
        .and('exist')
        .wait(2000)    
      cy.contains('button', 'Detail').eq(0).click().wait(1000)
      cy.url().should('include', '/summary/')
      cy.url().then((url) => {
        const orderId = url.split('/').pop()
        expect(orderId).to.match(/^\d+$/)
        cy.log(`🆔 Order ID: ${orderId}`)

        // 🔹 Wait until Okta token exists
        cy.window().should((win) => {
            const raw = win.localStorage.getItem('okta-token-storage')
            expect(raw, 'Okta token storage').to.not.be.null
        })
        cy.window().then((win) => {
            const raw = win.localStorage.getItem('okta-token-storage')
            const oktaData = JSON.parse(raw)

            const accessToken = oktaData?.accessToken?.accessToken

            expect(accessToken, 'Access token').to.not.be.undefined
            cy.log('✅ Access token extracted')

            // 🔹 Poll backend for eRequestId
            const pollErequest = (retries = 8) => {
            if (retries === 0) {
                throw new Error(`❌ eRequestId not generated for order ${orderId}`)
            }

            cy.request({
                method: 'GET',
                url: `https://demoapi.clabsportal.com/v1/orders/new-flow/${orderId}`,
                headers: {
                Authorization: `Bearer ${accessToken}`,
                },
                failOnStatusCode: false,
            }).then((res) => {

            // 🔍 DEBUG: log full backend response
            cy.log(JSON.stringify(res.body, null, 2))
            expect(res.status).to.eq(200)    
            
            const eRequestId = res.body?.data?.eRequestId

            if (eRequestId) {
            // ✅ SUCCESS
            cy.log(`✅ eRequestId generated: ${eRequestId}`)
            expect(eRequestId).to.not.be.empty
            } else {
            // ⏳ NOT READY → WAIT & RETRY
            cy.log(`⏳ eRequestId not ready. Retries left: ${retries - 1}`)
            cy.wait(5000)
            pollErequest(retries - 1)
            }
            })
            }
                pollErequest()
            })
      })
    return
  }

  if (orderState === 'Pending Submission') {
      cy.get(':nth-child(1) > .lg\\:right-0 > .py-1', { timeout: 100000 })
        .should('have.text', 'Pending Submission')
        .should('be.visible')
        .and('exist')
        .wait(2000)
      cy.contains('button', 'Detail').eq(0).click().wait(1000)
      cy.url().should('include', '/summary/')
      cy.url().then((url) => {
        const orderId = url.split('/').pop()
        expect(orderId).to.match(/^\d+$/)
        cy.log(`🆔 Order ID: ${orderId}`)

        // 🔹 Wait until Okta token exists
        cy.window().should((win) => {
            const raw = win.localStorage.getItem('okta-token-storage')
            expect(raw, 'Okta token storage').to.not.be.null
        })
        cy.window().then((win) => {
            const raw = win.localStorage.getItem('okta-token-storage')
            const oktaData = JSON.parse(raw)

            const accessToken = oktaData?.accessToken?.accessToken

            expect(accessToken, 'Access token').to.not.be.undefined
            cy.log('✅ Access token extracted')

            // 🔹 Poll backend for eRequestId
            const pollErequest = (retries = 8) => {
            if (retries === 0) {
                throw new Error(`❌ eRequestId not generated for order ${orderId}`)
            }

            cy.request({
                method: 'GET',
                url: `https://demoapi.clabsportal.com/v1/orders/new-flow/${orderId}`,
                headers: {
                Authorization: `Bearer ${accessToken}`,
                },
                failOnStatusCode: false,
            }).then((res) => {

            // 🔍 DEBUG: log full backend response
            cy.log(JSON.stringify(res.body, null, 2))
            expect(res.status).to.eq(200)    
            
            const eRequestId = res.body?.data?.eRequestId

            if (eRequestId) {
            // ✅ SUCCESS
            cy.log(`✅ eRequestId generated: ${eRequestId}`)
            expect(eRequestId).to.not.be.empty
            } else {
            // ⏳ NOT READY → WAIT & RETRY
            cy.log(`⏳ eRequestId not ready. Retries left: ${retries - 1}`)
            cy.wait(5000)
            pollErequest(retries - 1)
            }
            })
            }
                pollErequest()
            })
      })
    return
  }

  if (orderState === 'Pending Approval') {
      cy.contains('a', 'Test Orders', { timeout: 700000 }).should('have.attr', 'href', '/access/test-orders').click()
      cy.get(':nth-child(1) > .lg\\:right-0 > .py-1', { timeout: 100000 })
        .should('have.text', 'Pending Approval')
        .should('be.visible')
        .and('exist')
        .wait(2000)
      cy.contains('button', 'Detail').eq(0).click().wait(1000)
      cy.url().should('include', '/summary/')
      cy.url().then((url) => {
        const orderId = url.split('/').pop()
        expect(orderId).to.match(/^\d+$/)
        cy.log(`🆔 Order ID: ${orderId}`)

        // 🔹 Wait until Okta token exists
        cy.window().should((win) => {
            const raw = win.localStorage.getItem('okta-token-storage')
            expect(raw, 'Okta token storage').to.not.be.null
        })
        cy.window().then((win) => {
            const raw = win.localStorage.getItem('okta-token-storage')
            const oktaData = JSON.parse(raw)

            const accessToken = oktaData?.accessToken?.accessToken

            expect(accessToken, 'Access token').to.not.be.undefined
            cy.log('✅ Access token extracted')

            // 🔹 Poll backend for eRequestId
            const pollErequest = (retries = 8) => {
            if (retries === 0) {
                throw new Error(`❌ eRequestId not generated for order ${orderId}`)
            }

            cy.request({
                method: 'GET',
                url: `https://demoapi.clabsportal.com/v1/orders/new-flow/${orderId}`,
                headers: {
                Authorization: `Bearer ${accessToken}`,
                },
                failOnStatusCode: false,
            }).then((res) => {

            // 🔍 DEBUG: log full backend response
            cy.log(JSON.stringify(res.body, null, 2))
            expect(res.status).to.eq(200)    
            
            const eRequestId = res.body?.data?.eRequestId

            if (eRequestId) {
            // ✅ SUCCESS
            cy.log(`✅ eRequestId generated: ${eRequestId}`)
            expect(eRequestId).to.not.be.empty
            } else {
            // ⏳ NOT READY → WAIT & RETRY
            cy.log(`⏳ eRequestId not ready. Retries left: ${retries - 1}`)
            cy.wait(5000)
            pollErequest(retries - 1)
            }
            })
            }
                pollErequest()
            })
      })
    return
  }

  if (orderState === 'Submitted') {
      cy.contains('a', 'Test Orders', { timeout: 70000 }).should('have.attr', 'href', '/access/test-orders').click()
      cy.get(':nth-child(1) > .lg\\:right-0 > .py-1', { timeout: 100000 })
        .should('have.text', 'Submitted')
        .should('be.visible')
        .and('exist')
        .wait(2000)
      cy.contains('button', 'Detail').eq(0).click().wait(1000)
      cy.url().should('include', '/summary/')
      cy.url().then((url) => {
        const orderId = url.split('/').pop()
        expect(orderId).to.match(/^\d+$/)
        cy.log(`🆔 Order ID: ${orderId}`)

        // 🔹 Wait until Okta token exists
        cy.window().should((win) => {
            const raw = win.localStorage.getItem('okta-token-storage')
            expect(raw, 'Okta token storage').to.not.be.null
        })
        cy.window().then((win) => {
            const raw = win.localStorage.getItem('okta-token-storage')
            const oktaData = JSON.parse(raw)

            const accessToken = oktaData?.accessToken?.accessToken

            expect(accessToken, 'Access token').to.not.be.undefined
            cy.log('✅ Access token extracted')

            // 🔹 Poll backend for eRequestId
            const pollErequest = (retries = 8) => {
            if (retries === 0) {
                throw new Error(`❌ eRequestId not generated for order ${orderId}`)
            }

            cy.request({
                method: 'GET',
                url: `https://demoapi.clabsportal.com/v1/orders/new-flow/${orderId}`,
                headers: {
                Authorization: `Bearer ${accessToken}`,
                },
                failOnStatusCode: false,
            }).then((res) => {

            // 🔍 DEBUG: log full backend response
            cy.log(JSON.stringify(res.body, null, 2))
            expect(res.status).to.eq(200)    
            
            const eRequestId = res.body?.data?.eRequestId

            if (eRequestId) {
            // ✅ SUCCESS
            cy.log(`✅ eRequestId generated: ${eRequestId}`)
            expect(eRequestId).to.not.be.empty
            } else {
            // ⏳ NOT READY → WAIT & RETRY
            cy.log(`⏳ eRequestId not ready. Retries left: ${retries - 1}`)
            cy.wait(5000)
            pollErequest(retries - 1)
            }
            })
            }
                pollErequest()
            })
      })
    return
  }

  throw new Error(`❌ Unsupported orderState: ${orderState}`)
})

Cypress.Commands.add('openLatestOrder', () => {
  // Open the most recent order (first row)
  cy.contains('button', 'Detail').eq(0).should('be.visible').click().wait(1000)
})

Cypress.Commands.add('resumeOrder', () => {
  cy.contains('button', 'Resume', { timeout: 30000 })
    .should('be.visible')
    .and('be.enabled')
    .click()

  // Wait until form becomes editable
  cy.contains('button', 'Save and Exit', { timeout: 60000 })
    .should('be.visible')
})




