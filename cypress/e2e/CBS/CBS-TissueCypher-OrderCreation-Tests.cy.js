import 'cypress-file-upload'

describe(
  'TissueCypher – Order Creation (Converted from VS Code)',
  { tags: ['tissuecypher', 'order-creation', 'regression'] },
  function () {

    beforeEach(() => {
      const testUsername = 'dodobo3146@appxapi.com'
      const testPassword = 'bhwY8En6a'  
      const portalUrl = 'https://demo.clabsportal.com/'
      const authOrigin = 'https://democlient.clabsportal.com'

      cy.viewport(1920, 1081)
      cy.visit(portalUrl)
      cy.wait(500)
      cy.contains('button', 'login').click()

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
          cy.contains('button', 'Sign In').click()
        }
      )

      cy.contains('p', 'Dashboard', { timeout: 90000 }).should('be.visible')
    })

    it.only('AC-7.1: First order is In Progress', () => {
      cy.createTissueCypherOrder({ orderState: 'In Progress' })
    })

    it('AC-7.2: Second order is Pending Approval', () => {
      cy.createTissueCypherOrder({ orderState: 'Pending Approval' })
    })

    it('AC-7.3: Third order is Pending Submission', () => {
      cy.createTissueCypherOrder({ orderState: 'Pending Submission' })
    })

    it('AC-7.4: Fourth order is Submitted', () => {
        cy.createTissueCypherOrder({ orderState: 'Submitted' })
    })
  }
)

Cypress.Commands.add(
    'createTissueCypherOrder',
    ({ orderState }) => {
  
      if (!orderState) {
        throw new Error('❌ orderState is required')
      }
  
      cy.navigateToNewOrder()
      cy.createPatient()
      cy.selectTissueCypherTest()
  
      if (orderState === 'In Progress') {
        //cy.fillBillingInfo()  
        cy.fillLaboratoryInfo()  
        //cy.fillShipmentInfo()  
        cy.attachSupportingDocuments()      
    }  

      if (orderState !== 'In Progress') {
        cy.fillBillingInfo()  
        cy.fillLaboratoryInfo()  
        cy.fillShipmentInfo()  
        cy.attachSupportingDocuments()
      }
  
      // -----------------------------
      // Final Action per State
      // -----------------------------
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
    
    }
  )

/* ======================================================
   SUPPORTING COMMANDS
   ====================================================== */

   Cypress.Commands.add('navigateToNewOrder', () => {
    //cy.contains('a', 'Test Orders').click()
    //cy.contains('button', 'New Online Order').click()
    cy.contains('a', 'Test Orders', { timeout: 70000 }).should('have.attr', 'href', '/access/test-orders').click();                                                   // Test Orders Tab click                  
    cy.contains('button', 'New Online Order', { timeout: 5000 }).should('be.visible').and('be.enabled').click().wait(1000);                                           // New Online Order Btn Assertion  
    cy.contains('button', 'Select organization').should('be.visible').and('be.enabled').click().wait(1000);                                                           // All ORG Dropdown and click  
    cy.get('ul li button').eq(0).should('be.visible').click().wait(1500);                                                                                             // Select ORG from dropdown
    cy.contains('button', 'Shahzad ORG 15 May').should('be.visible').and('be.enabled').click().wait(1000);                                                            // All ORG Dropdown and click  
    cy.get('ul li button').eq(0).should('be.visible').click().wait(1500);                                                                                             // Select ORG from dropdown            
    cy.contains('button', 'Select a clinician').should('be.visible').and('be.enabled').click().wait(1000);                                                            // All Phy Dropdown and click 
    cy.get('ul li button').eq(1).should('be.visible').click().wait(1500);                                                                                             // Select Phy from dropdown  
    cy.contains('button', 'next').should('be.visible').and('be.enabled').click().wait(1500);                                                                          // Press next btn 
  })
  
  Cypress.Commands.add('createPatient', () => {
    //cy.contains('Patient').click()
    //cy.get('input[name="firstName"]').type('John')
    //cy.get('input[name="lastName"]').type('Doe')
    //cy.contains('Save & Continue').click()
    cy.get('input[placeholder="Search using Patient\'s Name, SSN or MRN."]:visible').first().should('be.enabled').type('John Doe', { force: true });                  // Input Patient Name
    cy.contains('button', 'ADD', { timeout: 5000 }).should('be.visible').and('be.enabled').click().wait(500);                                                         // Press ADD btn to add new patient
    cy.get('#firstName').type('Jack').wait(500)                                                                                                                       // Add First Name
    cy.get('#lastName').type('Maaaa').wait(500)                                                                                                                       // Add Last Name
    cy.get('input[placeholder="MM-DD-YYYY"]:visible').first().type('05-16-1975');                                                                                     // Add DOB
    cy.get('#gender').click().wait(500)                                                                                                                               // Tap gender dropdown
    cy.get('ul span button').then($items => {                                                                                                                         // Select Male  
        const randomIndex = Math.floor(Math.random() * $items.length);
        cy.wrap($items[randomIndex]).click();
    });                                                                                     
    cy.contains('button', 'next').should('be.visible').and('be.enabled').click();                                                                                     // Tap to Next btn
    cy.contains('button', 'next').should('be.visible').and('be.enabled').click().wait(500);                                                                           // Tap to Next btn again        
    cy.contains('button', 'Proceed to order').should('be.visible').and('be.enabled').click().wait(500);                                                               // Tap to Proceed to order btn
  })
  
  Cypress.Commands.add('selectTissueCypherTest', () => {
    cy.contains('button', 'Review').should('be.visible').and('exist').wait(500)                                                                                       // Assertion for "review" Button is present
    cy.contains('button', 'Save and Exit').should('be.visible').and('exist').and('be.disabled').wait(500)                                                             // Assertion for "save_and_exit" Button is present and disabled
    cy.contains('p', 'Select Test').should('be.visible').and('exist'); 
   // Side bar icons color assertions
   cy.get('path[data-name="Path 5122"]').each(($el) => {                                                                                                             // Asserting each sidebar circle icon color in not filled.
    cy.wrap($el).should('have.attr', 'fill', 'none')})
    cy.contains('p', 'TissueCypher').scrollIntoView().should('be.visible').and('exist').click().wait(500)                                                             // Tapping to Tissue Cypher Test        
    cy.get('path[data-name="Path 5122"]').should('have.attr', 'fill', '#18B5B7')                                                                                    // Asserting side bar Select text icon color is filled   
  })
  
  Cypress.Commands.add('fillBillingInfo', () => {
    cy.get('a[href="#Billing Information"] p', { timeout: 1000 }).should('have.text','Billing Information').should('be.visible').click()                              // Asserting side bar billing information and clicked 
        cy.get('#billingInfo\\.icdCodeId').click()
        cy.get('div.absolute ul button.transparentBtn', { timeout: 10000 })
        .should('have.length.greaterThan', 0)
        .then($buttonsicd => {
            const randomIndexicd = Math.floor(Math.random() * $buttonsicd.length)
            cy.wrap($buttonsicd[randomIndexicd]).click()
        })
        
        cy.get('input[name="billingInfo.typeOfFacility"]').then($options1 => {                                                                                            // Seleting type of facility randomly.
        const randomIndex1 = Math.floor(Math.random() * $options1.length) // pick 0, 1, or 2
        const chosen1 = $options1[randomIndex1]
            cy.wrap(chosen1).click({ force: true})
            cy.log('Selected option: ' + chosen1.value)
            if (chosen1.value === "Hospital Inpatient") {
                cy.get('#Billing\\ Information > .p-6 > :nth-child(4) > .false > .react-datepicker-wrapper > .react-datepicker__input-container > .w-full')
                .should('be.visible')
                .should('have.attr', 'placeholder', 'MM-DD-YYYY')
                .type('05-10-1975') // example date
                }
        })
  })
  
  Cypress.Commands.add('fillLaboratoryInfo', () => {
    cy.get('a[href="#Laboratory Information"] p').should('have.text','Laboratory Information').should('be.visible').and('exist').click().wait(500)                // Selecting Laboratory Info from side menu
        cy.get('input[name="laboratoryInfo.typeOfSpecimen"]').then($options1 => {                                                                                     // Seleting type of facility randomly.
            const randomIndex1 = Math.floor(Math.random() * $options1.length) // pick 0, 1, or 2
            const chosen1 = $options1[randomIndex1]

           // Click the randomly selected input
            cy.wrap(chosen1).click({ force: true})    
        })

        cy.get('#laboratoryInfo\\.labortaryName').type('a').wait(1000)                                                                                                    // typing text in Name of facility
        //cy.get(':nth-child(4) > .transparentBtn > .font-normal').click().wait(500)                                                                                      // Select 4th option
        cy.get('div[style*="position: absolute"]:visible')
        .find('button')
        .then($options2 => {
            const randomIndex2 = Math.floor(Math.random() * $options2.length)
            const chosen2 = $options2[randomIndex2]
            cy.wrap($options2[randomIndex2])
            cy.wrap(chosen2).click({ force: true})
            cy.log('Selected option: ' + chosen2.value)
            
        })        
        cy.get('input[placeholder="MM-DD-YYYY"]').eq(0).type('05-16-2025')                                                                                                  // Collection date input
        cy.get('input[placeholder="MM-DD-YYYY"]').eq(1).type('05-18-2025').wait(1000)                                                                                       // pull date input
  })
  
  Cypress.Commands.add('fillShipmentInfo', () => {
    cy.get('a[href="#Shipment Information"] p').should('have.text','Shipment Information').should('be.visible').and('exist').click().wait(500)                          // left side Shipment Information anchor click
        cy.get('input[name="isTissueShipped"]').check({force: true}).wait(500)                                                                                              // Click shipping check box                             
        cy.get('input[placeholder="Enter tracking number"]').type('KMJ123')                                                                                                 // Input tumor site 
        cy.get('input[name="shipMethod"]').then($radios => {                                                                                                                // Get all radio buttons by name
            expect($radios.length).to.be.greaterThan(0) // assert radios exist

            // ✅ Assert label text for each radio
            cy.wrap($radios).each(($el) => {
                cy.wrap($el)
                .parent('label') // go up to the <label>
                .find('span')    // find the text span
                .invoke('text')
                .then(text => {
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

            // ✅ Pick a random radio and click it
            const randomIndex = Cypress._.random(0, $radios.length - 1)
            cy.wrap($radios[randomIndex])
                .check({ force: true })
                .should('be.checked')

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
    cy.contains('button', 'Save and Exit').should('be.visible').and('be.enabled').click();                                                                          // Save and Exit btn click        
})
  
  Cypress.Commands.add('submitOrder', () => {
    cy.get('.primaryBtn').click().wait(5000)                                                                                                                          // Press Submit btn                                                                                                                                       
    cy.get('.justify-between > .w-full > .font-semibold').should('have.text','Test Submission').should('be.visible').and('exist')                                     // Test Submission Heading assertion
    cy.get('.md\\:max-w-\\[300px\\] > :nth-child(1) > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn > .font-semibold', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})               // Attach file for order submission
    cy.get('.w-full > :nth-child(1) > .primaryBtn', { timeout: 100000 }).should('be.visible').and('be.enabled').click();                                              // Submit btn click        
    cy.get('.text-3xl', { timeout: 100000 }).should('have.text','Order Submitted').should('be.visible').and('exist')                                                  // Order Submitted page heading assertion        
  })
  
  Cypress.Commands.add('sendforapproval', () => {
    cy.get('.primaryBtn').click().wait(5000)                                                                                                                          // Press Submit btn                                                                                                                                       
    cy.get('.justify-between > .w-full > .font-semibold').should('have.text','Test Submission').should('be.visible').and('exist')                                     // Test Submission Heading assertion
    cy.contains('button', 'Send for approval').should('be.visible').and('be.enabled').click();                                                                        // Send for approval btn click        
    cy.get('.text-3xl', { timeout: 100000 }).should('have.text','Order Sent For Approval').should('be.visible').and('exist').wait(5000)                               // Order Sent For Approval assertion        
  })

  Cypress.Commands.add('assertLatestOrderStatus', (orderState) => {

    if (orderState === 'In Progress') {
        cy.get(':nth-child(1) > .lg\\:right-0 > .py-1', { timeout: 100000 }).should('have.text', 'In Progress').should('be.visible').and('exist').wait(2000)            // Chwck the order status is In Progress  
    
    } else if (orderState === 'Pending Submission') {
        cy.get(':nth-child(1) > .lg\\:right-0 > .py-1', { timeout: 100000 }).should('have.text', 'Pending Submission').should('be.visible').and('exist').wait(2000)      // Chwck the order status is pending submission

    } else if (orderState === 'Pending Approval') {
        cy.contains('a', 'Test Orders', { timeout: 70000 }).should('have.attr', 'href', '/access/test-orders').click();                                                   // Test Orders Tab click                  
        cy.get(':nth-child(1) > .lg\\:right-0 > .py-1').should('have.text', 'Pending Approval').should('be.visible').and('exist').wait(2000)                              // Chwck the order status is pending submission  
    
    } else if (orderState === 'Submitted') {
        cy.contains('a', 'Test Orders', { timeout: 70000 }).should('have.attr', 'href', '/access/test-orders').click();                                                   // Test Orders Tab click          
        cy.get(':nth-child(1) > .lg\\:right-0 > .py-1').should('have.text', 'Submitted').should('be.visible').and('exist').wait(2000)                                     // Chwck the order status is Submitted  
    }
})


/* =======================
   COMMANDS (FROM VS CODE)
   ======================= */

   /*Cypress.Commands.add(
    'createTissueCypherOrder',
    ({ orderState }) => {

        if (!orderState) {
            throw new Error('❌ orderState is required')
          }

    // Test Orders → New Online Order
    cy.contains('a', 'Test Orders', { timeout: 70000 }).should('have.attr', 'href', '/access/test-orders').click();                                                  // Test Orders Tab click                  
    cy.contains('button', 'New Online Order', { timeout: 5000 }).should('be.visible').and('be.enabled').click().wait(500);                                           // New Online Order Btn Assertion  

    // Org / Physician selection
    cy.contains('button', 'Select organization').should('be.visible').and('be.enabled').click().wait(500);                                                           // All ORG Dropdown and click  
    cy.get('ul li button').eq(0).should('be.visible').click().wait(1000);                                                                                            // Select ORG from dropdown
    cy.contains('button', 'Shahzad ORG 15 May').should('be.visible').and('be.enabled').click().wait(500);                                                            // All ORG Dropdown and click  
    cy.get('ul li button').eq(0).should('be.visible').click().wait(1000);                                                                                            // Select ORG from dropdown            
    cy.contains('button', 'Select a clinician').should('be.visible').and('be.enabled').click().wait(500);                                                            // All Phy Dropdown and click 
    cy.get('ul li button').eq(1).should('be.visible').click().wait(1000);                                                                                            // Select Phy from dropdown  
    cy.contains('button', 'next').should('be.visible').and('be.enabled').click().wait(500);                                                                          // Press next btn  

    // Flow 1: Create Order by input New paitent Name
    cy.get('input[placeholder="Search using Patient\'s Name, SSN or MRN."]:visible').first().should('be.enabled').type('John Doe', { force: true });                 // Input Patient Name
    cy.contains('button', 'ADD', { timeout: 5000 }).should('be.visible').and('be.enabled').click().wait(500);                                                        // Press ADD btn to add new patient
    
    // Patient Info
    cy.get('#firstName').type('TestPatient')                                                                                                                         // Add First Name
    cy.get('#lastName').type('TissueCypher')                                                                                                                         // Add Last Name
    cy.get('input[placeholder="MM-DD-YYYY"]:visible').first().type('05-16-1975');                                                                                    // Add DOB
    cy.get('#gender').click()                                                                                                                                        // Tap gender dropdown
    cy.get('ul span button').then($items => {                                                                                                                        // Select Male  
        const randomIndex = Math.floor(Math.random() * $items.length);
        cy.wrap($items[randomIndex]).click();
    }); 
    cy.contains('button', 'next').should('be.visible').and('be.enabled').click().wait(500);                                                                           // Tap to Next btn again        
    cy.contains('button', 'Proceed to order').should('be.visible').and('be.enabled').click().wait(500);                                                               // Tap to Proceed to order btn

    // Test selection
    cy.contains('button', 'Review').should('be.visible').and('exist').wait(500)                                                                                       // Assertion for "review" 
    cy.contains('button', 'Save and Exit').should('be.visible').and('exist').and('be.disabled').wait(500)                                                             // Assertion for "save_and_exit" Button is present and disabled
    cy.contains('p', 'Select Test').should('be.visible').and('exist');                                                                                                // Assertion for "Select Test" heading is present.              

    // Side bar icons color assertions
    cy.get('path[data-name="Path 5122"]').each(($el) => {                                                                                                             // Asserting each sidebar circle icon color in not filled.
    cy.wrap($el).should('have.attr', 'fill', 'none')})
    cy.contains('p', 'TissueCypher').scrollIntoView().should('be.visible').and('exist').click().wait(500)                                                             // Tapping to Tissue Cypher Test        
    cy.get('path[data-name="Path 5122"]').should('have.attr', 'fill', '#18B5B7')                                                                                      // Asserting side bar Select text icon color is filled  
    
    // Billing Section
    cy.get('a[href="#Billing Information"] p', { timeout: 1000 }).should('have.text','Billing Information').should('be.visible').click()                              // Asserting side bar billing information and clicked 
    cy.get('#billingInfo\\.icdCodeId').click()
    cy.get('div.absolute ul button.transparentBtn', { timeout: 10000 })
        .should('have.length.greaterThan', 0)
        .then($buttonsicd => {
            const randomIndexicd = Math.floor(Math.random() * $buttonsicd.length)
            cy.wrap($buttonsicd[randomIndexicd]).click()
        })
        
    cy.get('input[name="billingInfo.typeOfFacility"]').then($options1 => {                                                                                            // Seleting type of facility randomly.
    const randomIndex1 = Math.floor(Math.random() * $options1.length) // pick 0, 1, or 2
    const chosen1 = $options1[randomIndex1]
    cy.wrap(chosen1).click({ force: true})
    cy.log('Selected option: ' + chosen1.value)
    if (chosen1.value === "Hospital Inpatient") {
        cy.get('#Billing\\ Information > .p-6 > :nth-child(4) > .false > .react-datepicker-wrapper > .react-datepicker__input-container > .w-full')
        .should('be.visible')
        .should('have.attr', 'placeholder', 'MM-DD-YYYY')
        .type('05-10-1975') // example date
        }
    })

    // Laboratory Section
    cy.get('a[href="#Laboratory Information"] p').should('have.text','Laboratory Information').should('be.visible').and('exist').click().wait(500)                    // Selecting Laboratory Info from side menu
        cy.get('input[name="laboratoryInfo.typeOfSpecimen"]').then($options1 => {                                                                                     // Seleting type of facility randomly.
            const randomIndex1 = Math.floor(Math.random() * $options1.length) // pick 0, 1, or 2
            const chosen1 = $options1[randomIndex1]

           // Click the randomly selected input
            cy.wrap(chosen1).click({ force: true})    
        })
    cy.get('#laboratoryInfo\\.labortaryName').type('a').wait(1000)                                                                                                    // typing text in Name of facility
    cy.get('div[style*="position: absolute"]:visible')
    .find('button')
    .then($options2 => {
        const randomIndex2 = Math.floor(Math.random() * $options2.length)
        const chosen2 = $options2[randomIndex2]
        cy.wrap($options2[randomIndex2])
        cy.wrap(chosen2).click({ force: true})
        cy.log('Selected option: ' + chosen2.value)            
        })        
        cy.get('input[placeholder="MM-DD-YYYY"]').eq(0).type('05-16-2025')                                                                                            // Collection date input
        cy.get('input[placeholder="MM-DD-YYYY"]').eq(1).type('05-18-2025').wait(1000)                                                                                 // pull date input

    // Shipment Section
    cy.get('a[href="#Shipment Information"] p').should('have.text','Shipment Information').should('be.visible').and('exist').click().wait(500)                        // left side Shipment Information anchor click
        cy.get('input[name="isTissueShipped"]').check({force: true}).wait(500)                                                                                        // Click shipping check box                             
        cy.get('input[placeholder="Enter tracking number"]').type('KMJ123')                                                                                           // Input tumor site 
        cy.get('input[name="shipMethod"]').then($radios => {                                                                                                          // Get all radio buttons by name
            expect($radios.length).to.be.greaterThan(0) // assert radios exist

            // ✅ Assert label text for each radio
            cy.wrap($radios).each(($el) => {
                cy.wrap($el)
                .parent('label') // go up to the <label>
                .find('span')    // find the text span
                .invoke('text')
                .then(text => {
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

            // ✅ Pick a random radio and click it
            const randomIndex = Cypress._.random(0, $radios.length - 1)
            cy.wrap($radios[randomIndex])
                .check({ force: true })
                .should('be.checked')

            cy.log('Randomly selected option: ' + $radios[randomIndex].value)
        })

    // Supporting doc section
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

    // Notes 
    cy.get('#notes').type('Testing notes')

    if (submit) {
        cy.get('.primaryBtn').click().wait(5000)                                                                                                                          // Press Submit btn                                                                                                                                       
        cy.get('.justify-between > .w-full > .font-semibold').should('have.text','Test Submission').should('be.visible').and('exist')                                     // Test Submission Heading assertion
        cy.contains('button', 'Send for approval').should('be.visible').and('be.enabled').click();                                                                        // Send for approval btn click        
        cy.get('.text-3xl', { timeout: 100000 }).should('have.text','Order Sent For Approval').should('be.visible').and('exist').wait(5000)                               // Order Sent For Approval assertion        
        cy.contains('a', 'Test Orders', { timeout: 70000 }).should('have.attr', 'href', '/access/test-orders').click();                                                   // Test Orders Tab click                  
    }

    // Assert status
    cy.contains('Test Orders').click()
    cy.get(':nth-child(1) > .lg\\:right-0 > .py-1')
      .should('contain.text', expectedStatus)
  }
)*/
   

/* describe('TissueCypher – Test Order Creation Flow', function() {
    
        beforeEach(() => {
        
        const testUsername = 'dodobo3146@appxapi.com'
        const testPassword = 'bhwY8En6a'
        const portalUrl = 'https://demo.clabsportal.com/'
        const authOrigin = 'https://democlient.clabsportal.com'
      
        cy.viewport(1920, 1081)
        cy.visit(portalUrl)
      
        cy.contains('button', 'login').should('be.visible').click().wait(500)
      
        cy.origin(authOrigin, { args: { testUsername, testPassword } }, ({ testUsername, testPassword }) => {
            cy.get('input[name="username"]').type(testUsername)
            cy.get('input[name="password"]').type(testPassword)
            cy.contains('button', 'Sign In').click()
          })
      
        // Post-login assertion (VERY IMPORTANT)
        cy.contains('p', 'Dashboard', { timeout: 90000 }).should('be.visible').and('exist')
    })
    
    it('AC-7.1: First order is In Progress', () => {
        cy.createTissueCypherOrder()
       
    })

    it('AC-7.2: Second order is Pending Approval', () => {
        cy.createTissueCypherOrder()
        //cy.assertLatestOrderStatus('Pending Approval')
    }) 
      
    it('AC-7.3: Third order is Pending Submission', () => {
        cy.createTissueCypherOrder()
        //cy.assertLatestOrderStatus('Pending Submission')
    })  

    it('AC-7.4: Fourth order is Submitted', () => {
        cy.createTissueCypherOrder({ submit: true })
        //cy.assertLatestOrderStatus('Submitted')
    })

    Cypress.Commands.add(
        'createTissueCypherOrder',
        ({ submit = false } = {}) => {
      
          // Patient
          cy.createPatient()
      
          // Test
          cy.selectTissueCypherTest()
      
          // Billing
          cy.fillBillingInfo()
          cy.assertSectionComplete('Billing Information')
      
          // Laboratory
          cy.fillLaboratoryInfo()
          cy.assertSectionComplete('Laboratory Information')
      
          // Shipment
          cy.fillShipmentInfo()
          cy.assertSectionComplete('Shipment Information')
      
          // Supporting Docs (optional)
          cy.attachSupportingDocuments()
      
          if (submit) {
            cy.submitOrder()
          }
        }
      )


      Cypress.Commands.add('createPatient', () => {
        // TODO: Replace selectors with real ones
        cy.contains('Patient').click()
        cy.get('input[name="firstName"]').type('John')
        cy.get('input[name="lastName"]').type('Doe')
        cy.contains('Save & Continue').click()
      })
      
      Cypress.Commands.add('selectTissueCypherTest', () => {
        cy.contains('Test').click()
        cy.contains('TissueCypher').click()
        cy.contains('Save & Continue').click()
      })
      
      Cypress.Commands.add('fillBillingInfo', () => {
        cy.contains('Billing').click()
        cy.get('input[name="billingAccount"]').type('Self Pay')
      })
      
      Cypress.Commands.add('fillLaboratoryInfo', () => {
        cy.contains('Laboratory').click()
        cy.get('input[name="labName"]').type('Demo Lab')
      })
      
      Cypress.Commands.add('fillShipmentInfo', () => {
        cy.contains('Shipment').click()
        cy.get('input[name="courier"]').type('FedEx')
      })
      
      Cypress.Commands.add('attachSupportingDocuments', () => {
        // Optional section
        cy.contains('Supporting Documents').click()
        // TODO: Upload file if required
      })
      
      Cypress.Commands.add('submitOrder', () => {
        cy.contains('Submit Order').click()
      })
      */

    

