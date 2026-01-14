import 'cypress-file-upload'
import { exit } from 'process'



describe('TissueCypher Online Order Creation and Submission Suite', function() {
    
    it("Verify TissueCypher Test Created with In Progress Status", function()  {

        cy.viewport(1920, 1081)
        cy.visit("https://demo.clabsportal.com/")

        // Login Button Click
        cy.wait(500)        
        cy.get('[type="button"]').contains("login").should('be.visible').and('exist').and('contain','login').click().wait(500)	                                          // Click to Login button usimg btn type    >> Best Practise
               
        // Input username
        cy.origin('https://democlient.clabsportal.com', () => {        
            cy.wait(500)
            cy.get('input[name="username"]').type("dodobo3146@appxapi.com")                                                                                               // Get username by attribute name and type in it
            cy.get('input[name="username"]').should('have.value','dodobo3146@appxapi.com')                                                                                // Check username if the username is correctly input            
            cy.get('input[name="password"]').type("bhwY8En6a")                                                                                                            // Get password by attribute name and type in it
            cy.get('input[name="password"]').should('have.value','bhwY8En6a')                                                                                             // Check password if the password is correctly input
            cy.get('[type="submit"]').contains("Sign In").should('be.visible').and('exist').and('contain','Sign In').click()                                              // Get submit btn by btn type and cick on it   >> Best Practise                                
        })    
    
        // Order Creation and SUbmit //                      
        cy.contains('a', 'Test Orders', { timeout: 70000 }).should('have.attr', 'href', '/access/test-orders').click();                                                   // Test Orders Tab click                  
        cy.contains('button', 'New Online Order', { timeout: 5000 }).should('be.visible').and('be.enabled').click().wait(1000);                                           // New Online Order Btn Assertion  
        cy.contains('button', 'Select organization').should('be.visible').and('be.enabled').click().wait(1000);                                                           // All ORG Dropdown and click  
        cy.get('ul li button').eq(0).should('be.visible').click().wait(1500);                                                                                             // Select ORG from dropdown
        cy.contains('button', 'Shahzad ORG 15 May').should('be.visible').and('be.enabled').click().wait(1000);                                                            // All ORG Dropdown and click  
        cy.get('ul li button').eq(0).should('be.visible').click().wait(1500);                                                                                             // Select ORG from dropdown            
        cy.contains('button', 'Select a clinician').should('be.visible').and('be.enabled').click().wait(1000);                                                            // All Phy Dropdown and click 
        cy.get('ul li button').eq(1).should('be.visible').click().wait(1500);                                                                                             // Select Phy from dropdown  
        cy.contains('button', 'next').should('be.visible').and('be.enabled').click().wait(1500);                                                                          // Press next btn  
        // Flow 1: Create Order by input New paitent Name
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
        cy.contains('button', 'Review').should('be.visible').and('exist').wait(500)                                                                                       // Assertion for "review" Button is present
        cy.contains('button', 'Save and Exit').should('be.visible').and('exist').and('be.disabled').wait(500)                                                             // Assertion for "save_and_exit" Button is present and disabled
        cy.contains('p', 'Select Test').should('be.visible').and('exist');                                                                                                // Assertion for "Select Test" heading is present.              

        // Side bar icons color assertions
        cy.get('path[data-name="Path 5122"]').each(($el) => {                                                                                                             // Asserting each sidebar circle icon color in not filled.
        cy.wrap($el).should('have.attr', 'fill', 'none')})
        cy.contains('p', 'TissueCypher').scrollIntoView().should('be.visible').and('exist').click().wait(500)                                                             // Tapping to Tissue Cypher Test        
        cy.get('path[data-name="Path 5122"]').should('have.attr', 'fill', '#18B5B7')                                                                                    // Asserting side bar Select text icon color is filled  
        
        // Billing Info Section
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
            
            // Laboratory Setion
            /*
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
            //cy.get('input[id="laboratoryInfo.labortaryPhone"]').click({ force: true })
            //cy.get('input[placeholder="Enter tumor site"]').type('www.tumorsite.com')                                                                                           // Input tumor site
            */
        // Shipment Information
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
        cy.contains('button', 'Save and Exit').should('be.visible').and('be.enabled').click();                                                                          // Save and Exit btn click        
        cy.get(':nth-child(1) > .lg\\:right-0 > .py-1', { timeout: 100000 }).should('have.text', 'In Progress').should('be.visible').and('exist').wait(2000)            // Chwck the order status is In Progress  

        cy.wait(5000)
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
    })

    it("Verify TissueCypher Test Created with Send for approval", function()  {

        cy.viewport(1920, 1081)
        cy.visit("https://demo.clabsportal.com/")

        // Login Button Click
        ////cy.get(".text-lg").contains("Existing Customer")                                                                                                                                    // Assertion for text "Existing Customer" is present
        cy.wait(500)        
        cy.get('[type="button"]').contains("login").should('be.visible').and('exist').and('contain','login').click().wait(500)	                                          // Click to Login button usimg btn type    >> Best Practise
               
        // Input username
        cy.origin('https://democlient.clabsportal.com', () => {        
            cy.wait(500)
            cy.get('input[name="username"]').type("dodobo3146@appxapi.com")                                                                                               // Get username by attribute name and type in it
            cy.get('input[name="username"]').should('have.value','dodobo3146@appxapi.com')                                                                                // Check username if the username is correctly input            
            cy.get('input[name="password"]').type("bhwY8En6a")                                                                                                            // Get password by attribute name and type in it
            cy.get('input[name="password"]').should('have.value','bhwY8En6a')                                                                                             // Check password if the password is correctly input
            cy.get('[type="submit"]').contains("Sign In").should('be.visible').and('exist').and('contain','Sign In').click()                                              // Get submit btn by btn type and cick on it   >> Best Practise                                
        })

        // Order Creation and SUbmit //                      
        cy.contains('a', 'Test Orders', { timeout: 70000 }).should('have.attr', 'href', '/access/test-orders').click();                                                   // Test Orders Tab click                  
        cy.contains('button', 'New Online Order', { timeout: 5000 }).should('be.visible').and('be.enabled').click().wait(1000);                                           // New Online Order Btn Assertion  
        cy.contains('button', 'Select organization').should('be.visible').and('be.enabled').click().wait(1000);                                                           // All ORG Dropdown and click  
        cy.get('ul li button').eq(0).should('be.visible').click().wait(1500);                                                                                             // Select ORG from dropdown
        cy.contains('button', 'Shahzad ORG 15 May').should('be.visible').and('be.enabled').click().wait(1000);                                                            // All ORG Dropdown and click  
        cy.get('ul li button').eq(0).should('be.visible').click().wait(1500);                                                                                             // Select ORG from dropdown            
        cy.contains('button', 'Select a clinician').should('be.visible').and('be.enabled').click().wait(1000);                                                            // All Phy Dropdown and click 
        cy.get('ul li button').eq(1).should('be.visible').click().wait(1500);                                                                                             // Select Phy from dropdown  
        cy.contains('button', 'next').should('be.visible').and('be.enabled').click().wait(1500);                                                                          // Press next btn 
        

        // Flow 1: Create Order by input New paitent Name
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
        cy.contains('button', 'Review').should('be.visible').and('exist').wait(500)                                                                                       // Assertion for "review" Button is present
        cy.contains('button', 'Save and Exit').should('be.visible').and('exist').and('be.disabled').wait(500)                                                             // Assertion for "save_and_exit" Button is present and disabled
        cy.contains('p', 'Select Test').should('be.visible').and('exist');                                                                                                // Assertion for "Select Test" heading is present.              

        // Side bar icons color assertions
        cy.get('path[data-name="Path 5122"]').each(($el) => {                                                                                                             // Asserting each sidebar circle icon color in not filled.
        cy.wrap($el).should('have.attr', 'fill', 'none')})
        cy.contains('p', 'TissueCypher').scrollIntoView().should('be.visible').and('exist').click().wait(500)                                                             // Tapping to Tissue Cypher Test        
        cy.get('path[data-name="Path 5122"]').should('have.attr', 'fill', '#18B5B7')                                                                                    // Asserting side bar Select text icon color is filled  
        
        // Billing Info Section
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
            
        // Additional Info section
            /*
            cy.get('[href="#Additional Information"] > .w-full > .font-normal').click().wait(500)                                                                         // Selecting Additional Info from side menu
            cy.get('.align-top > div > .mt-3 > .checkmark', { timeout: 1000 }).click()                                                                                    // tap to checkbox
            cy.get(':nth-child(3) > div > .mt-3 > .checkmark', { timeout: 1000 }).click()                                                                                 // tap to 2nd checkbox
            cy.get(':nth-child(3) > div > .mt-3 > span.undefined').should('have.text','By checking this box, I hereby acknowledge this clinician(s) will receive the final test report and associated PHI').should('be.visible').and('exist')
            cy.get('#firstName', { timeout: 1000 }).type('Jony')
            cy.get('#lastName', { timeout: 1000 }).type('way')
            cy.get('#npi', { timeout: 1000 }).type('5557774448')
            cy.get('#fax', { timeout: 1000 }).type('885-741-8852')
            cy.get('#email', { timeout: 1000 }).type('jony@gmail.com')
            cy.get('.flex > .mt-3 > .checkmark', { timeout: 1000 }).click()
            */
        // Laboratory Setion
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
        //cy.get('input[id="laboratoryInfo.labortaryPhone"]').click({ force: true })
        //cy.get('input[placeholder="Enter tumor site"]').type('www.tumorsite.com')                                                                                           // Input tumor site

        // Shipment Information
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
        cy.get('.primaryBtn').click().wait(5000)                                                                                                                          // Press Submit btn                                                                                                                                       
        cy.get('.justify-between > .w-full > .font-semibold').should('have.text','Test Submission').should('be.visible').and('exist')                                     // Test Submission Heading assertion
        cy.contains('button', 'Send for approval').should('be.visible').and('be.enabled').click();                                                                        // Send for approval btn click        
        cy.get('.text-3xl', { timeout: 100000 }).should('have.text','Order Sent For Approval').should('be.visible').and('exist').wait(5000)                               // Order Sent For Approval assertion        
        cy.contains('a', 'Test Orders', { timeout: 70000 }).should('have.attr', 'href', '/access/test-orders').click();                                                   // Test Orders Tab click                  
        cy.get(':nth-child(1) > .lg\\:right-0 > .py-1').should('have.text', 'Pending Approval').should('be.visible').and('exist').wait(2000)                              // Chwck the order status is pending submission  
      
        cy.wait(5000)
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
    })           
    
    it("Verify TissueCypher Test Created with pending submission Status", function()  {

        cy.viewport(1920, 1081)
        cy.visit("https://demo.clabsportal.com/")

        // Login Button Click
        cy.wait(500)        
        cy.get('[type="button"]').contains("login").should('be.visible').and('exist').and('contain','login').click().wait(500)	                                          // Click to Login button usimg btn type    >> Best Practise
               
        // Input username
        cy.origin('https://democlient.clabsportal.com', () => {        
            cy.wait(500)
            cy.get('input[name="username"]').type("dodobo3146@appxapi.com")                                                                                               // Get username by attribute name and type in it
            cy.get('input[name="username"]').should('have.value','dodobo3146@appxapi.com')                                                                                // Check username if the username is correctly input            
            cy.get('input[name="password"]').type("bhwY8En6a")                                                                                                            // Get password by attribute name and type in it
            cy.get('input[name="password"]').should('have.value','bhwY8En6a')                                                                                             // Check password if the password is correctly input
            cy.get('[type="submit"]').contains("Sign In").should('be.visible').and('exist').and('contain','Sign In').click()                                              // Get submit btn by btn type and cick on it   >> Best Practise                                
        })
    
         // Order Creation and SUbmit //                      
        cy.contains('a', 'Test Orders', { timeout: 70000 }).should('have.attr', 'href', '/access/test-orders').click();                                                   // Test Orders Tab click                  
        cy.contains('button', 'New Online Order', { timeout: 5000 }).should('be.visible').and('be.enabled').click().wait(1000);                                           // New Online Order Btn Assertion  
        cy.contains('button', 'Select organization').should('be.visible').and('be.enabled').click().wait(1000);                                                           // All ORG Dropdown and click  
        cy.get('ul li button').eq(0).should('be.visible').click().wait(1500);                                                                                             // Select ORG from dropdown
        cy.contains('button', 'Shahzad ORG 15 May').should('be.visible').and('be.enabled').click().wait(1000);                                                            // All ORG Dropdown and click  
        cy.get('ul li button').eq(0).should('be.visible').click().wait(1500);                                                                                             // Select ORG from dropdown            
        cy.contains('button', 'Select a clinician').should('be.visible').and('be.enabled').click().wait(1000);                                                            // All Phy Dropdown and click 
        cy.get('ul li button').eq(1).should('be.visible').click().wait(1500);                                                                                             // Select Phy from dropdown  
        cy.contains('button', 'next').should('be.visible').and('be.enabled').click().wait(1500);                                                                          // Press next btn  
        

        // Flow 1: Create Order by input New paitent Name
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
        cy.contains('button', 'Review').should('be.visible').and('exist').wait(500)                                                                                       // Assertion for "review" Button is present
        cy.contains('button', 'Save and Exit').should('be.visible').and('exist').and('be.disabled').wait(500)                                                             // Assertion for "save_and_exit" Button is present and disabled
        cy.contains('p', 'Select Test').should('be.visible').and('exist');                                                                                                // Assertion for "Select Test" heading is present.              

        // Side bar icons color assertions
        cy.get('path[data-name="Path 5122"]').each(($el) => {                                                                                                             // Asserting each sidebar circle icon color in not filled.
        cy.wrap($el).should('have.attr', 'fill', 'none')})
        cy.contains('p', 'TissueCypher').scrollIntoView().should('be.visible').and('exist').click().wait(500)                                                             // Tapping to Tissue Cypher Test        
        cy.get('path[data-name="Path 5122"]').should('have.attr', 'fill', '#18B5B7')                                                                                    // Asserting side bar Select text icon color is filled  
        
        // Billing Info Section
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
            
        // Laboratory Setion
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
    
        // Shipment Information
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
        cy.contains('button', 'Save and Exit').should('be.visible').and('be.enabled').click();                                                                           // Save and Exit btn click        
        cy.get(':nth-child(1) > .lg\\:right-0 > .py-1', { timeout: 100000 }).should('have.text', 'Pending Submission').should('be.visible').and('exist').wait(2000)      // Chwck the order status is pending submission 
      
        cy.wait(5000)
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
    })    

    it("Verify TissueCypher Test Created with Submitted Status", function()  {
    

        cy.viewport(1920, 1081)
        cy.visit("https://demo.clabsportal.com/")

        cy.wait(500)        
        cy.get('[type="button"]').contains("login").should('be.visible').and('exist').and('contain','login').click().wait(500)	                                          // Click to Login button usimg btn type    >> Best Practise
               
        // Input username
        cy.origin('https://democlient.clabsportal.com', () => {        
            cy.wait(500)
            cy.get('input[name="username"]').type("dodobo3146@appxapi.com")                                                                                               // Get username by attribute name and type in it
            cy.get('input[name="username"]').should('have.value','dodobo3146@appxapi.com')                                                                                // Check username if the username is correctly input            
            cy.get('input[name="password"]').type("bhwY8En6a")                                                                                                            // Get password by attribute name and type in it
            cy.get('input[name="password"]').should('have.value','bhwY8En6a')                                                                                             // Check password if the password is correctly input
            cy.get('[type="submit"]').contains("Sign In").should('be.visible').and('exist').and('contain','Sign In').click()                                              // Get submit btn by btn type and cick on it   >> Best Practise                                
        })
          
        // Order Creation and SUbmit //                      
        cy.contains('a', 'Test Orders', { timeout: 70000 }).should('have.attr', 'href', '/access/test-orders').click();                                                   // Test Orders Tab click                  
        cy.contains('button', 'New Online Order', { timeout: 5000 }).should('be.visible').and('be.enabled').click().wait(1000);                                           // New Online Order Btn Assertion  
        cy.contains('button', 'Select organization').should('be.visible').and('be.enabled').click().wait(1000);                                                           // All ORG Dropdown and click  
        cy.get('ul li button').eq(0).should('be.visible').click().wait(1500);                                                                                             // Select ORG from dropdown
        cy.contains('button', 'Shahzad ORG 15 May').should('be.visible').and('be.enabled').click().wait(1000);                                                            // All ORG Dropdown and click  
        cy.get('ul li button').eq(0).should('be.visible').click().wait(1500);                                                                                             // Select ORG from dropdown            
        cy.contains('button', 'Select a clinician').should('be.visible').and('be.enabled').click().wait(1000);                                                            // All Phy Dropdown and click 
        cy.get('ul li button').eq(1).should('be.visible').click().wait(1500);                                                                                             // Select Phy from dropdown  
        cy.contains('button', 'next').should('be.visible').and('be.enabled').click().wait(1500);                                                                          // Press next btn 
        
        // Flow 1: Create Order by input New paitent Name

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
        cy.contains('button', 'Review').should('be.visible').and('exist').wait(500)                                                                                       // Assertion for "review" Button is present
        cy.contains('button', 'Save and Exit').should('be.visible').and('exist').and('be.disabled').wait(500)                                                             // Assertion for "save_and_exit" Button is present and disabled
        cy.contains('p', 'Select Test').should('be.visible').and('exist');                                                                                                // Assertion for "Select Test" heading is present.              

        // Side bar icons color assertions
        cy.get('path[data-name="Path 5122"]').each(($el) => {                                                                                                             // Asserting each sidebar circle icon color in not filled.
        cy.wrap($el).should('have.attr', 'fill', 'none')})
        cy.contains('p', 'TissueCypher').scrollIntoView().should('be.visible').and('exist').click().wait(500)                                                             // Tapping to Tissue Cypher Test        
        cy.get('path[data-name="Path 5122"]').should('have.attr', 'fill', '#18B5B7')                                                                                    // Asserting side bar Select text icon color is filled  
        
        // Billing Info Section
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
            
        // Laboratory Setion
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
    
        // Shipment Information
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
        cy.get('.primaryBtn').click().wait(5000)                                                                                                                          // Press Submit btn                                                                                                                                       
        cy.get('.justify-between > .w-full > .font-semibold').should('have.text','Test Submission').should('be.visible').and('exist')                                     // Test Submission Heading assertion
        cy.get('.md\\:max-w-\\[300px\\] > :nth-child(1) > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn > .font-semibold', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})               // Attach file for order submission
        cy.get('.w-full > :nth-child(1) > .primaryBtn', { timeout: 100000 }).should('be.visible').and('be.enabled').click();                                              // Submit btn click        
        cy.get('.text-3xl', { timeout: 100000 }).should('have.text','Order Submitted').should('be.visible').and('exist')                                                  // Order Submitted page heading assertion        
        cy.contains('a', 'Test Orders', { timeout: 70000 }).should('have.attr', 'href', '/access/test-orders').click();                                                   // Test Orders Tab click          
        cy.get(':nth-child(1) > .lg\\:right-0 > .py-1').should('have.text', 'Submitted').should('be.visible').and('exist').wait(2000)                                     // Chwck the order status is Submitted  

        cy.wait(5000)
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
    })
    
})

describe('TissueCypher Online Order Edit Flows Suite', function() {

    it("Verify TissueCypher Test edited from In Progress to Send for Approval Status", function()  {
    
        cy.viewport(1920, 1081)
        cy.visit("https://demo.clabsportal.com/")

        // Login Button Click
        cy.wait(500)        
        cy.get('[type="button"]').contains("login").should('be.visible').and('exist').and('contain','login').click().wait(500)	                                          // Click to Login button usimg btn type    >> Best Practise
               
        // Input username
        cy.origin('https://democlient.clabsportal.com', () => {        
            cy.wait(500)
            cy.get('input[name="username"]').type("dodobo3146@appxapi.com")                                                                                               // Get username by attribute name and type in it
            cy.get('input[name="username"]').should('have.value','dodobo3146@appxapi.com')                                                                                // Check username if the username is correctly input            
            cy.get('input[name="password"]').type("bhwY8En6a")                                                                                                            // Get password by attribute name and type in it
            cy.get('input[name="password"]').should('have.value','bhwY8En6a')                                                                                             // Check password if the password is correctly input
            cy.get('[type="submit"]').contains("Sign In").should('be.visible').and('exist').and('contain','Sign In').click()                                              // Get submit btn by btn type and cick on it   >> Best Practise                                
        })    
    
        // Order Creation and SUbmit //                      
        cy.contains('a', 'Test Orders', { timeout: 70000 }).should('have.attr', 'href', '/access/test-orders').click();                                                   // Test Orders Tab click                  
        cy.contains('button', 'New Online Order', { timeout: 5000 }).should('be.visible').and('be.enabled').click().wait(1000);                                           // New Online Order Btn Assertion  
        cy.contains('button', 'Select organization').should('be.visible').and('be.enabled').click().wait(1000);                                                           // All ORG Dropdown and click  
        cy.get('ul li button').eq(0).should('be.visible').click().wait(1500);                                                                                             // Select ORG from dropdown
        cy.contains('button', 'Shahzad ORG 15 May').should('be.visible').and('be.enabled').click().wait(1000);                                                            // All ORG Dropdown and click  
        cy.get('ul li button').eq(0).should('be.visible').click().wait(1500);                                                                                             // Select ORG from dropdown            
        cy.contains('button', 'Select a clinician').should('be.visible').and('be.enabled').click().wait(1000);                                                            // All Phy Dropdown and click 
        cy.get('ul li button').eq(1).should('be.visible').click().wait(1500);                                                                                             // Select Phy from dropdown  
        cy.contains('button', 'next').should('be.visible').and('be.enabled').click().wait(1500);                                                                          // Press next btn  
        
        // Flow 1: Create Order by input New paitent Name
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
        cy.contains('button', 'Review').should('be.visible').and('exist').wait(500)                                                                                       // Assertion for "review" Button is present
        cy.contains('button', 'Save and Exit').should('be.visible').and('exist').and('be.disabled').wait(500)                                                             // Assertion for "save_and_exit" Button is present and disabled
        cy.contains('p', 'Select Test').should('be.visible').and('exist');                                                                                                // Assertion for "Select Test" heading is present.              

        // Side bar icons color assertions
        cy.get('path[data-name="Path 5122"]').each(($el) => {                                                                                                             // Asserting each sidebar circle icon color in not filled.
        cy.wrap($el).should('have.attr', 'fill', 'none')})
        cy.contains('p', 'TissueCypher').scrollIntoView().should('be.visible').and('exist').click().wait(500)                                                             // Tapping to Tissue Cypher Test        
        cy.get('path[data-name="Path 5122"]').should('have.attr', 'fill', '#18B5B7')                                                                                    // Asserting side bar Select text icon color is filled  
        
        // Billing Info Section
        /*    
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
         */   
        // Laboratory Setion
        /*
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
            cy.get('input[id="laboratoryInfo.labortaryPhone"]').click({ force: true })
            cy.get('input[placeholder="Enter tumor site"]').type('www.tumorsite.com')                                                                                           // Input tumor site
        */

        // Shipment Information
        /*
        cy.get('a[href="#Shipment Information"] p').should('have.text','Shipment Information').should('be.visible').and('exist').click().wait(500)                          // left side Shipment Information anchor click
        cy.get('input[name="isTissueShipped"]').click({force: true}).wait(500)                                                                                              // Click shipping check box                             
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
        */
        // Supporting doc section
        cy.get('a[href="#Supporting Documents"] p').scrollIntoView().click().wait(500)
        cy.get(':nth-child(2) > .max-w-\\[300px\\] > .font-normal').should('have.text','Endoscopy Report').should('be.visible').and('exist')
        cy.get(':nth-child(2) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
        cy.get(':nth-child(2) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        cy.get(':nth-child(3) > .max-w-\\[300px\\] > .font-normal').should('have.text','Pathology Report').should('be.visible').and('exist')
        cy.get(':nth-child(3) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
        cy.get(':nth-child(3) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        //cy.get(':nth-child(4) > .max-w-\\[300px\\] > .font-normal').should('Patient Info / Demographics Sheet').should('be.visible').and('exist')
        cy.get(':nth-child(4) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
        cy.get(':nth-child(4) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        //cy.get(':nth-child(5) > .max-w-\\[300px\\] > .font-normal').should('Insurance Card / Billing Face Sheet').should('be.visible').and('exist')
        cy.get(':nth-child(5) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
        cy.get(':nth-child(5) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        
        // Notes 
        cy.get('#notes').type('Testing notes')        
        cy.contains('button', 'Save and Exit').should('be.visible').and('be.enabled').click();                                                                          // Save and Exit btn click        
        cy.get(':nth-child(1) > .lg\\:right-0 > .py-1', { timeout: 100000 }).should('have.text', 'In Progress').should('be.visible').and('exist').wait(2000)            // Chwck the order status is In Progress  

        cy.wait(10000)
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

        cy.contains('button', 'Resume').should('be.visible').and('be.enabled').click();                                                                                 // Tap to Resume btn

        // ---------------- Billing Information ----------------

        function fillBillingInformationSection(section) {
        cy.wrap(section).within(() => {

        //cy.get('a[href="#Billing Information"] p', { timeout: 1000 }).should('have.text','Billing Information').should('be.visible').click()                          // Asserting side bar billing information and clicked 
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
                cy.get('input[placeholder="MM-DD-YYYY"]').eq(0).type('05-16-2025')                                                                                                  // Collection date input
                }
                })
            })
        }
// ---------------- laboratory Information ----------------
        
        function laboratoryInformationSection(section) {
        cy.wrap(section).within(() => {

            // Laboratory Setion
            
            //cy.get('a[href="#Laboratory Information"] p').should('have.text','Laboratory Information').should('be.visible').and('exist').click().wait(500)                // Selecting Laboratory Info from side menu
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
            cy.get('input[placeholder="MM-DD-YYYY"]').eq(0).type('05-16-2025')                                                                                                  // Collection date input
            cy.get('input[placeholder="MM-DD-YYYY"]').eq(1).type('05-18-2025').wait(1000)                                                                                       // pull date input
            //cy.get('input[id="laboratoryInfo.labortaryPhone"]').click({ force: true })
            //cy.get('input[placeholder="Enter tumor site"]').type('www.tumorsite.com')                                                                                           // Input tumor site
            })  
        }  
        
        // ---------------- Shipment Information ----------------
        
        function shipmentInformationSection(section) {
        cy.wrap(section).within(() => {

        //cy.get('a[href="#Shipment Information"] p').should('have.text','Shipment Information').should('be.visible').and('exist').click().wait(500)                          // left side Shipment Information anchor click
        cy.get('input[name="isTissueShipped"]').click({force: true}).wait(500)                                                                                              // Click shipping check box                             
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
        }

    // ---------------- Mapping Handler Functions --------------------------
        const sectionHandlers = {
        'Billing Information': fillBillingInformationSection,
        'Laboratory Information': laboratoryInformationSection,
        'Shipment Information': shipmentInformationSection,
        }


    // ------------------ 🔹 3️⃣ MAIN EXECUTION LOGIC (RED SVG LOOP) -----------------------

        cy.get('a:has(svg[fill="red"])')
        .should('have.length.greaterThan', 0)
        .each(($anchor) => {

            // Extract section ID from href
            const href = $anchor.attr('href')          // e.g. "#Billing Information"
            const sectionId = href?.replace('#', '')   // "Billing Information"

            if (!sectionId) {
            cy.log('⚠️ No href found for red SVG')
            return
            }

            const handler = sectionHandlers[sectionId]

            // Click sidebar link (scrolls to section)
            cy.wrap($anchor)
            .scrollIntoView()
            .click({ force: true })

            if (!handler) {
            cy.log(`⚠️ No handler defined for section: ${sectionId}`)
            return
            }

            // Now safely target the section
            cy.get(`div[id="${sectionId}"]`, { timeout: 10000 })
            .scrollIntoView()
            .then($section => {
                handler($section)
            })
        })

        cy.get('.primaryBtn').should('be.enabled').click().wait(5000)                                                                                                     // Press Submit btn                                                                                                                                       
        cy.get('.justify-between > .w-full > .font-semibold').should('have.text','Test Submission').should('be.visible').and('exist')                                     // Test Submission Heading assertion
        cy.contains('button', 'Send for approval').should('be.visible').and('be.enabled').click();                                                                        // Send for approval btn click        
        cy.get('.text-3xl', { timeout: 100000 }).should('have.text','Order Sent For Approval').should('be.visible').and('exist').wait(5000)                               // Order Sent For Approval assertion        
        cy.contains('a', 'Test Orders', { timeout: 70000 }).should('have.attr', 'href', '/access/test-orders').click();                                                   // Test Orders Tab click                  
        cy.get(':nth-child(1) > .lg\\:right-0 > .py-1').should('have.text', 'Pending Approval').should('be.visible').and('exist').wait(2000)                              // Chwck the order status is pending submission  
    
    })
    
    it("Verify TissueCypher Test edited from In Progress to Pending Submission Status", function()  {
    
        cy.viewport(1920, 1081)
        cy.visit("https://demo.clabsportal.com/")

        // Login Button Click
        cy.wait(500)        
        cy.get('[type="button"]').contains("login").should('be.visible').and('exist').and('contain','login').click().wait(500)	                                          // Click to Login button usimg btn type    >> Best Practise
               
        // Input username
        cy.origin('https://democlient.clabsportal.com', () => {        
            cy.wait(500)
            cy.get('input[name="username"]').type("dodobo3146@appxapi.com")                                                                                               // Get username by attribute name and type in it
            cy.get('input[name="username"]').should('have.value','dodobo3146@appxapi.com')                                                                                // Check username if the username is correctly input            
            cy.get('input[name="password"]').type("bhwY8En6a")                                                                                                            // Get password by attribute name and type in it
            cy.get('input[name="password"]').should('have.value','bhwY8En6a')                                                                                             // Check password if the password is correctly input
            cy.get('[type="submit"]').contains("Sign In").should('be.visible').and('exist').and('contain','Sign In').click()                                              // Get submit btn by btn type and cick on it   >> Best Practise                                
        })    
    
        // Order Creation and SUbmit //                      
        cy.contains('a', 'Test Orders', { timeout: 70000 }).should('have.attr', 'href', '/access/test-orders').click();                                                   // Test Orders Tab click                  
        cy.contains('button', 'New Online Order', { timeout: 5000 }).should('be.visible').and('be.enabled').click().wait(1000);                                           // New Online Order Btn Assertion  
        cy.contains('button', 'Select organization').should('be.visible').and('be.enabled').click().wait(1000);                                                           // All ORG Dropdown and click  
        cy.get('ul li button').eq(0).should('be.visible').click().wait(1500);                                                                                             // Select ORG from dropdown
        cy.contains('button', 'Shahzad ORG 15 May').should('be.visible').and('be.enabled').click().wait(1000);                                                            // All ORG Dropdown and click  
        cy.get('ul li button').eq(0).should('be.visible').click().wait(1500);                                                                                             // Select ORG from dropdown            
        cy.contains('button', 'Select a clinician').should('be.visible').and('be.enabled').click().wait(1000);                                                            // All Phy Dropdown and click 
        cy.get('ul li button').eq(1).should('be.visible').click().wait(1500);                                                                                             // Select Phy from dropdown  
        cy.contains('button', 'next').should('be.visible').and('be.enabled').click().wait(1500);                                                                          // Press next btn  
        
        // Flow 1: Create Order by input New paitent Name
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
        cy.contains('button', 'Review').should('be.visible').and('exist').wait(500)                                                                                       // Assertion for "review" Button is present
        cy.contains('button', 'Save and Exit').should('be.visible').and('exist').and('be.disabled').wait(500)                                                             // Assertion for "save_and_exit" Button is present and disabled
        cy.contains('p', 'Select Test').should('be.visible').and('exist');                                                                                                // Assertion for "Select Test" heading is present.              

        // Side bar icons color assertions
        cy.get('path[data-name="Path 5122"]').each(($el) => {                                                                                                             // Asserting each sidebar circle icon color in not filled.
        cy.wrap($el).should('have.attr', 'fill', 'none')})
        cy.contains('p', 'TissueCypher').scrollIntoView().should('be.visible').and('exist').click().wait(500)                                                             // Tapping to Tissue Cypher Test        
        cy.get('path[data-name="Path 5122"]').should('have.attr', 'fill', '#18B5B7')                                                                                    // Asserting side bar Select text icon color is filled  
        
        // Billing Info Section
        /*    
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
         */   
        // Laboratory Setion
        /*
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
            cy.get('input[id="laboratoryInfo.labortaryPhone"]').click({ force: true })
            cy.get('input[placeholder="Enter tumor site"]').type('www.tumorsite.com')                                                                                           // Input tumor site
        */

        // Shipment Information
        /*
        cy.get('a[href="#Shipment Information"] p').should('have.text','Shipment Information').should('be.visible').and('exist').click().wait(500)                          // left side Shipment Information anchor click
        cy.get('input[name="isTissueShipped"]').click({force: true}).wait(500)                                                                                              // Click shipping check box                             
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
        */
        // Supporting doc section
        cy.get('a[href="#Supporting Documents"] p').scrollIntoView().click().wait(500)
        cy.get(':nth-child(2) > .max-w-\\[300px\\] > .font-normal').should('have.text','Endoscopy Report').should('be.visible').and('exist')
        cy.get(':nth-child(2) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
        cy.get(':nth-child(2) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        cy.get(':nth-child(3) > .max-w-\\[300px\\] > .font-normal').should('have.text','Pathology Report').should('be.visible').and('exist')
        cy.get(':nth-child(3) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
        cy.get(':nth-child(3) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        //cy.get(':nth-child(4) > .max-w-\\[300px\\] > .font-normal').should('Patient Info / Demographics Sheet').should('be.visible').and('exist')
        cy.get(':nth-child(4) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
        cy.get(':nth-child(4) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        //cy.get(':nth-child(5) > .max-w-\\[300px\\] > .font-normal').should('Insurance Card / Billing Face Sheet').should('be.visible').and('exist')
        cy.get(':nth-child(5) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
        cy.get(':nth-child(5) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        
        // Notes 
        cy.get('#notes').type('Testing notes')        
        cy.contains('button', 'Save and Exit').should('be.visible').and('be.enabled').click();                                                                          // Save and Exit btn click        
        cy.get(':nth-child(1) > .lg\\:right-0 > .py-1', { timeout: 100000 }).should('have.text', 'In Progress').should('be.visible').and('exist').wait(2000)            // Chwck the order status is In Progress  

        cy.wait(10000)
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

        cy.contains('button', 'Resume').should('be.visible').and('be.enabled').click();                                                                                 // Tap to Resume btn

        // ---------------- Billing Information ----------------

        function fillBillingInformationSection(section) {
        cy.wrap(section).within(() => {

        //cy.get('a[href="#Billing Information"] p', { timeout: 1000 }).should('have.text','Billing Information').should('be.visible').click()                          // Asserting side bar billing information and clicked 
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
                cy.get('input[placeholder="MM-DD-YYYY"]').eq(0).type('05-16-2025')                                                                                                  // Collection date input
                }
                })
            })
        }
// ---------------- laboratory Information ----------------
        
        function laboratoryInformationSection(section) {
        cy.wrap(section).within(() => {

            // Laboratory Setion
            
            //cy.get('a[href="#Laboratory Information"] p').should('have.text','Laboratory Information').should('be.visible').and('exist').click().wait(500)                // Selecting Laboratory Info from side menu
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
            cy.get('input[placeholder="MM-DD-YYYY"]').eq(0).type('05-16-2025')                                                                                                  // Collection date input
            cy.get('input[placeholder="MM-DD-YYYY"]').eq(1).type('05-18-2025').wait(1000)                                                                                       // pull date input
            //cy.get('input[id="laboratoryInfo.labortaryPhone"]').click({ force: true })
            //cy.get('input[placeholder="Enter tumor site"]').type('www.tumorsite.com')                                                                                           // Input tumor site
            })  
        }  
        
        // ---------------- Shipment Information ----------------
        
        function shipmentInformationSection(section) {
        cy.wrap(section).within(() => {

        //cy.get('a[href="#Shipment Information"] p').should('have.text','Shipment Information').should('be.visible').and('exist').click().wait(500)                          // left side Shipment Information anchor click
        cy.get('input[name="isTissueShipped"]').click({force: true}).wait(500)                                                                                              // Click shipping check box                             
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
        }

    // ---------------- Mapping Handler Functions --------------------------
        const sectionHandlers = {
        'Billing Information': fillBillingInformationSection,
        'Laboratory Information': laboratoryInformationSection,
        'Shipment Information': shipmentInformationSection,
        }


    // ------------------ 🔹 3️⃣ MAIN EXECUTION LOGIC (RED SVG LOOP) -----------------------

        cy.get('a:has(svg[fill="red"])')
        .should('have.length.greaterThan', 0)
        .each(($anchor) => {

            // Extract section ID from href
            const href = $anchor.attr('href')          // e.g. "#Billing Information"
            const sectionId = href?.replace('#', '')   // "Billing Information"

            if (!sectionId) {
            cy.log('⚠️ No href found for red SVG')
            return
            }

            const handler = sectionHandlers[sectionId]

            // Click sidebar link (scrolls to section)
            cy.wrap($anchor)
            .scrollIntoView()
            .click({ force: true })

            if (!handler) {
            cy.log(`⚠️ No handler defined for section: ${sectionId}`)
            return
            }

            // Now safely target the section
            cy.get(`div[id="${sectionId}"]`, { timeout: 10000 })
            .scrollIntoView()
            .then($section => {
                handler($section)
            })
        })

        cy.contains('button', 'Save and Exit').should('be.visible').and('be.enabled').click();                                                                           // Save and Exit btn click        
        cy.get(':nth-child(1) > .lg\\:right-0 > .py-1', { timeout: 100000 }).should('have.text', 'Pending Submission').should('be.visible').and('exist').wait(2000)      // Chwck the order status is pending submission  
    
    })

    it("Verify TissueCypher Test edited from In Progress to Submit State Status", function()  {
    
        cy.viewport(1920, 1081)
        cy.visit("https://demo.clabsportal.com/")

        // Login Button Click
        cy.wait(500)        
        cy.get('[type="button"]').contains("login").should('be.visible').and('exist').and('contain','login').click().wait(500)	                                          // Click to Login button usimg btn type    >> Best Practise
               
        // Input username
        cy.origin('https://democlient.clabsportal.com', () => {        
            cy.wait(500)
            cy.get('input[name="username"]').type("dodobo3146@appxapi.com")                                                                                               // Get username by attribute name and type in it
            cy.get('input[name="username"]').should('have.value','dodobo3146@appxapi.com')                                                                                // Check username if the username is correctly input            
            cy.get('input[name="password"]').type("bhwY8En6a")                                                                                                            // Get password by attribute name and type in it
            cy.get('input[name="password"]').should('have.value','bhwY8En6a')                                                                                             // Check password if the password is correctly input
            cy.get('[type="submit"]').contains("Sign In").should('be.visible').and('exist').and('contain','Sign In').click()                                              // Get submit btn by btn type and cick on it   >> Best Practise                                
        })    
    
        // Order Creation and SUbmit //                      
        cy.contains('a', 'Test Orders', { timeout: 70000 }).should('have.attr', 'href', '/access/test-orders').click();                                                   // Test Orders Tab click                  
        cy.contains('button', 'New Online Order', { timeout: 5000 }).should('be.visible').and('be.enabled').click().wait(1000);                                           // New Online Order Btn Assertion  
        cy.contains('button', 'Select organization').should('be.visible').and('be.enabled').click().wait(1000);                                                           // All ORG Dropdown and click  
        cy.get('ul li button').eq(0).should('be.visible').click().wait(1500);                                                                                             // Select ORG from dropdown
        cy.contains('button', 'Shahzad ORG 15 May').should('be.visible').and('be.enabled').click().wait(1000);                                                            // All ORG Dropdown and click  
        cy.get('ul li button').eq(0).should('be.visible').click().wait(1500);                                                                                             // Select ORG from dropdown            
        cy.contains('button', 'Select a clinician').should('be.visible').and('be.enabled').click().wait(1000);                                                            // All Phy Dropdown and click 
        cy.get('ul li button').eq(1).should('be.visible').click().wait(1500);                                                                                             // Select Phy from dropdown  
        cy.contains('button', 'next').should('be.visible').and('be.enabled').click().wait(1500);                                                                          // Press next btn  
        
        // Flow 1: Create Order by input New paitent Name
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
        cy.contains('button', 'Review').should('be.visible').and('exist').wait(500)                                                                                       // Assertion for "review" Button is present
        cy.contains('button', 'Save and Exit').should('be.visible').and('exist').and('be.disabled').wait(500)                                                             // Assertion for "save_and_exit" Button is present and disabled
        cy.contains('p', 'Select Test').should('be.visible').and('exist');                                                                                                // Assertion for "Select Test" heading is present.              

        // Side bar icons color assertions
        cy.get('path[data-name="Path 5122"]').each(($el) => {                                                                                                             // Asserting each sidebar circle icon color in not filled.
        cy.wrap($el).should('have.attr', 'fill', 'none')})
        cy.contains('p', 'TissueCypher').scrollIntoView().should('be.visible').and('exist').click().wait(500)                                                             // Tapping to Tissue Cypher Test        
        cy.get('path[data-name="Path 5122"]').should('have.attr', 'fill', '#18B5B7')                                                                                    // Asserting side bar Select text icon color is filled  
        
        // Billing Info Section
        /*    
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
         */   
        // Laboratory Setion
        /*
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
            cy.get('input[id="laboratoryInfo.labortaryPhone"]').click({ force: true })
            cy.get('input[placeholder="Enter tumor site"]').type('www.tumorsite.com')                                                                                           // Input tumor site
        */

        // Shipment Information
        /*
        cy.get('a[href="#Shipment Information"] p').should('have.text','Shipment Information').should('be.visible').and('exist').click().wait(500)                          // left side Shipment Information anchor click
        cy.get('input[name="isTissueShipped"]').click({force: true}).wait(500)                                                                                              // Click shipping check box                             
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
        */
        // Supporting doc section
        cy.get('a[href="#Supporting Documents"] p').scrollIntoView().click().wait(500)
        cy.get(':nth-child(2) > .max-w-\\[300px\\] > .font-normal').should('have.text','Endoscopy Report').should('be.visible').and('exist')
        cy.get(':nth-child(2) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
        cy.get(':nth-child(2) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        cy.get(':nth-child(3) > .max-w-\\[300px\\] > .font-normal').should('have.text','Pathology Report').should('be.visible').and('exist')
        cy.get(':nth-child(3) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
        cy.get(':nth-child(3) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        //cy.get(':nth-child(4) > .max-w-\\[300px\\] > .font-normal').should('Patient Info / Demographics Sheet').should('be.visible').and('exist')
        cy.get(':nth-child(4) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
        cy.get(':nth-child(4) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        //cy.get(':nth-child(5) > .max-w-\\[300px\\] > .font-normal').should('Insurance Card / Billing Face Sheet').should('be.visible').and('exist')
        cy.get(':nth-child(5) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
        cy.get(':nth-child(5) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        
        // Notes 
        cy.get('#notes').type('Testing notes')        
        cy.contains('button', 'Save and Exit').should('be.visible').and('be.enabled').click();                                                                          // Save and Exit btn click        
        cy.get(':nth-child(1) > .lg\\:right-0 > .py-1', { timeout: 100000 }).should('have.text', 'In Progress').should('be.visible').and('exist').wait(2000)            // Chwck the order status is In Progress  

        cy.wait(10000)
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

        cy.contains('button', 'Resume').should('be.visible').and('be.enabled').click();                                                                                 // Tap to Resume btn

        // ---------------- Billing Information ----------------

        function fillBillingInformationSection(section) {
        cy.wrap(section).within(() => {

        //cy.get('a[href="#Billing Information"] p', { timeout: 1000 }).should('have.text','Billing Information').should('be.visible').click()                          // Asserting side bar billing information and clicked 
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
                cy.get('input[placeholder="MM-DD-YYYY"]').eq(0).type('05-16-2025')                                                                                                  // Collection date input
                }
                })
            })
        }
// ---------------- laboratory Information ----------------
        
        function laboratoryInformationSection(section) {
        cy.wrap(section).within(() => {

            // Laboratory Setion
            
            //cy.get('a[href="#Laboratory Information"] p').should('have.text','Laboratory Information').should('be.visible').and('exist').click().wait(500)                // Selecting Laboratory Info from side menu
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
            cy.get('input[placeholder="MM-DD-YYYY"]').eq(0).type('05-16-2025')                                                                                                  // Collection date input
            cy.get('input[placeholder="MM-DD-YYYY"]').eq(1).type('05-18-2025').wait(1000)                                                                                       // pull date input
            //cy.get('input[id="laboratoryInfo.labortaryPhone"]').click({ force: true })
            //cy.get('input[placeholder="Enter tumor site"]').type('www.tumorsite.com')                                                                                           // Input tumor site
            })  
        }  
        
        // ---------------- Shipment Information ----------------
        
        function shipmentInformationSection(section) {
        cy.wrap(section).within(() => {

        //cy.get('a[href="#Shipment Information"] p').should('have.text','Shipment Information').should('be.visible').and('exist').click().wait(500)                          // left side Shipment Information anchor click
        cy.get('input[name="isTissueShipped"]').click({force: true}).wait(500)                                                                                              // Click shipping check box                             
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
        }

    // ---------------- Mapping Handler Functions --------------------------
        const sectionHandlers = {
        'Billing Information': fillBillingInformationSection,
        'Laboratory Information': laboratoryInformationSection,
        'Shipment Information': shipmentInformationSection,
        }


    // ------------------ 🔹 3️⃣ MAIN EXECUTION LOGIC (RED SVG LOOP) -----------------------

        cy.get('a:has(svg[fill="red"])')
        .should('have.length.greaterThan', 0)
        .each(($anchor) => {

            // Extract section ID from href
            const href = $anchor.attr('href')          // e.g. "#Billing Information"
            const sectionId = href?.replace('#', '')   // "Billing Information"

            if (!sectionId) {
            cy.log('⚠️ No href found for red SVG')
            return
            }

            const handler = sectionHandlers[sectionId]

            // Click sidebar link (scrolls to section)
            cy.wrap($anchor)
            .scrollIntoView()
            .click({ force: true })

            if (!handler) {
            cy.log(`⚠️ No handler defined for section: ${sectionId}`)
            return
            }

            // Now safely target the section
            cy.get(`div[id="${sectionId}"]`, { timeout: 10000 })
            .scrollIntoView()
            .then($section => {
                handler($section)
            })
        })

        cy.get('.primaryBtn').click().wait(5000)                                                                                                                          // Press Submit btn                                                                                                                                       
        cy.get('.justify-between > .w-full > .font-semibold').should('have.text','Test Submission').should('be.visible').and('exist')                                     // Test Submission Heading assertion
        cy.get('.md\\:max-w-\\[300px\\] > :nth-child(1) > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn > .font-semibold', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})               // Attach file for order submission
        cy.get('.w-full > :nth-child(1) > .primaryBtn', { timeout: 100000 }).should('be.visible').and('be.enabled').click();                                              // Submit btn click        
        cy.get('.text-3xl', { timeout: 100000 }).should('have.text','Order Submitted').should('be.visible').and('exist')                                                  // Order Submitted page heading assertion        
        cy.contains('a', 'Test Orders', { timeout: 70000 }).should('have.attr', 'href', '/access/test-orders').click();                                                   // Test Orders Tab click          
        cy.get(':nth-child(1) > .lg\\:right-0 > .py-1').should('have.text', 'Submitted').should('be.visible').and('exist').wait(2000)                                     // Chwck the order status is Submitted  


    })

    it("Verify TissueCypher Test edited from Send for Approval to In Progress Status", function()  {
    
        cy.viewport(1920, 1081)
        cy.visit("https://demo.clabsportal.com/")

        // Login Button Click
        cy.wait(500)        
        cy.get('[type="button"]').contains("login").should('be.visible').and('exist').and('contain','login').click().wait(500)	                                          // Click to Login button usimg btn type    >> Best Practise
               
        // Input username
        cy.origin('https://democlient.clabsportal.com', () => {        
            cy.wait(500)
            cy.get('input[name="username"]').type("dodobo3146@appxapi.com")                                                                                               // Get username by attribute name and type in it
            cy.get('input[name="username"]').should('have.value','dodobo3146@appxapi.com')                                                                                // Check username if the username is correctly input            
            cy.get('input[name="password"]').type("bhwY8En6a")                                                                                                            // Get password by attribute name and type in it
            cy.get('input[name="password"]').should('have.value','bhwY8En6a')                                                                                             // Check password if the password is correctly input
            cy.get('[type="submit"]').contains("Sign In").should('be.visible').and('exist').and('contain','Sign In').click()                                              // Get submit btn by btn type and cick on it   >> Best Practise                                
        })    
    
        // Order Creation and SUbmit //                      
        cy.contains('a', 'Test Orders', { timeout: 70000 }).should('have.attr', 'href', '/access/test-orders').click();                                                   // Test Orders Tab click                  
        cy.contains('button', 'New Online Order', { timeout: 5000 }).should('be.visible').and('be.enabled').click().wait(1000);                                           // New Online Order Btn Assertion  
        cy.contains('button', 'Select organization').should('be.visible').and('be.enabled').click().wait(1000);                                                           // All ORG Dropdown and click  
        cy.get('ul li button').eq(0).should('be.visible').click().wait(1500);                                                                                             // Select ORG from dropdown
        cy.contains('button', 'Shahzad ORG 15 May').should('be.visible').and('be.enabled').click().wait(1000);                                                            // All ORG Dropdown and click  
        cy.get('ul li button').eq(0).should('be.visible').click().wait(1500);                                                                                             // Select ORG from dropdown            
        cy.contains('button', 'Select a clinician').should('be.visible').and('be.enabled').click().wait(1000);                                                            // All Phy Dropdown and click 
        cy.get('ul li button').eq(1).should('be.visible').click().wait(1500);                                                                                             // Select Phy from dropdown  
        cy.contains('button', 'next').should('be.visible').and('be.enabled').click().wait(1500);                                                                          // Press next btn  
        
        // Flow 1: Create Order by input New paitent Name
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
        cy.contains('button', 'Review').should('be.visible').and('exist').wait(500)                                                                                       // Assertion for "review" Button is present
        cy.contains('button', 'Save and Exit').should('be.visible').and('exist').and('be.disabled').wait(500)                                                             // Assertion for "save_and_exit" Button is present and disabled
        cy.contains('p', 'Select Test').should('be.visible').and('exist');                                                                                                // Assertion for "Select Test" heading is present.              

        // Side bar icons color assertions
        cy.get('path[data-name="Path 5122"]').each(($el) => {                                                                                                             // Asserting each sidebar circle icon color in not filled.
        cy.wrap($el).should('have.attr', 'fill', 'none')})
        cy.contains('p', 'TissueCypher').scrollIntoView().should('be.visible').and('exist').click().wait(500)                                                             // Tapping to Tissue Cypher Test        
        cy.get('path[data-name="Path 5122"]').should('have.attr', 'fill', '#18B5B7')                                                                                    // Asserting side bar Select text icon color is filled  
        
        // Billing Info Section    
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
            
        // Laboratory Setion
        
            cy.get('a[href="#Laboratory Information"] p').should('have.text','Laboratory Information').should('be.visible').and('exist').click().wait(500)                // Selecting Laboratory Info from side menu
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
            cy.get('input[placeholder="MM-DD-YYYY"]').eq(0).type('05-16-2025')                                                                                                  // Collection date input
            cy.get('input[placeholder="MM-DD-YYYY"]').eq(1).type('05-18-2025').wait(1000)                                                                                       // pull date input

        // Shipment Information
        
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
        
        // Supporting doc section
        cy.get('a[href="#Supporting Documents"] p').scrollIntoView().click().wait(500)
        cy.get(':nth-child(2) > .max-w-\\[300px\\] > .font-normal').should('have.text','Endoscopy Report').should('be.visible').and('exist')
        cy.get(':nth-child(2) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
        cy.get(':nth-child(2) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        cy.get(':nth-child(3) > .max-w-\\[300px\\] > .font-normal').should('have.text','Pathology Report').should('be.visible').and('exist')
        cy.get(':nth-child(3) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
        cy.get(':nth-child(3) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        //cy.get(':nth-child(4) > .max-w-\\[300px\\] > .font-normal').should('Patient Info / Demographics Sheet').should('be.visible').and('exist')
        cy.get(':nth-child(4) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
        cy.get(':nth-child(4) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        //cy.get(':nth-child(5) > .max-w-\\[300px\\] > .font-normal').should('Insurance Card / Billing Face Sheet').should('be.visible').and('exist')
        cy.get(':nth-child(5) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
        cy.get(':nth-child(5) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        
        // Notes 
        cy.get('#notes').type('Testing notes')
        cy.get('.primaryBtn').click().wait(5000)                                                                                                                          // Press Submit btn                                                                                                                                       
        cy.get('.justify-between > .w-full > .font-semibold').should('have.text','Test Submission').should('be.visible').and('exist')                                     // Test Submission Heading assertion
        cy.contains('button', 'Send for approval').should('be.visible').and('be.enabled').click();                                                                        // Send for approval btn click        
        cy.get('.text-3xl', { timeout: 100000 }).should('have.text','Order Sent For Approval').should('be.visible').and('exist').wait(5000)                               // Order Sent For Approval assertion        
        cy.contains('a', 'Test Orders', { timeout: 70000 }).should('have.attr', 'href', '/access/test-orders').click();                                                   // Test Orders Tab click                  
        cy.get(':nth-child(1) > .lg\\:right-0 > .py-1').should('have.text', 'Pending Approval').should('be.visible').and('exist').wait(2000)                              // Chwck the order status is pending submission  
        cy.wait(5000)
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

        cy.contains('button', 'Resume').should('be.visible').and('be.enabled').click();                                                                                   // Tap to Resume btn

        // Billing Info Section    
        cy.get('a[href="#Billing Information"] p', { timeout: 1000 }).should('have.text','Billing Information').should('be.visible').click()                              // Asserting side bar billing information and clicked 
        cy.get('#billingInfo\\.icdCodeId').clear()
        cy.get('input[name="billingInfo.typeOfFacility"]').then($options1 => {                                                                                            // Seleting type of facility randomly.
        const randomIndex1 = Math.floor(Math.random() * $options1.length) // pick 0, 1, or 2
        const chosen1 = $options1[randomIndex1]
            cy.wrap(chosen1).click({ force: true})
            cy.log('Selected option: ' + chosen1.value)
            if (chosen1.value === "Hospital Inpatient") {
                cy.get('#Billing\\ Information > .p-6 > :nth-child(4) > .false > .react-datepicker-wrapper > .react-datepicker__input-container > .w-full')
                .should('be.visible')
                .should('have.attr', 'placeholder', 'MM-DD-YYYY')
                .clear().wait(1000) // example date
                }
        })
            
        // Laboratory Setion
        cy.get('a[href="#Laboratory Information"] p').should('have.text','Laboratory Information').should('be.visible').and('exist').click().wait(500)                // Selecting Laboratory Info from side menu
        cy.get('input[name="laboratoryInfo.typeOfSpecimen"]').then($options1 => {                                                                                     // Seleting type of facility randomly.
        const randomIndex1 = Math.floor(Math.random() * $options1.length) // pick 0, 1, or 2
        const chosen1 = $options1[randomIndex1]

        // Click the randomly selected input
        cy.wrap(chosen1).click({ force: true})    

        })
        cy.get('#laboratoryInfo\\.labortaryName').clear()                                                                                                             // typing text in Name of facility        
        cy.get('input[placeholder="MM-DD-YYYY"]').eq(0).clear()                                                                                                       // Collection date input
        cy.get('input[placeholder="MM-DD-YYYY"]').eq(1).clear()                                                                                                       // pull date input

        // Shipment Information
        cy.get('a[href="#Shipment Information"] p').should('have.text','Shipment Information').should('be.visible').and('exist').click().wait(500)                    // left side Shipment Information anchor click
        cy.get('input[name="isTissueShipped"]').uncheck({force: true})                                                                                                // Uncheckk shipping check box                             
        
        // Supporting doc section
        /*
        cy.get('a[href="#Supporting Documents"] p').scrollIntoView().click().wait(500)
        cy.get(':nth-child(2) > .max-w-\\[300px\\] > .font-normal').should('have.text','Endoscopy Report').should('be.visible').and('exist')
        cy.get(':nth-child(2) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
        cy.get(':nth-child(2) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        cy.get(':nth-child(3) > .max-w-\\[300px\\] > .font-normal').should('have.text','Pathology Report').should('be.visible').and('exist')
        cy.get(':nth-child(3) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
        cy.get(':nth-child(3) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        //cy.get(':nth-child(4) > .max-w-\\[300px\\] > .font-normal').should('Patient Info / Demographics Sheet').should('be.visible').and('exist')
        cy.get(':nth-child(4) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
        cy.get(':nth-child(4) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        //cy.get(':nth-child(5) > .max-w-\\[300px\\] > .font-normal').should('Insurance Card / Billing Face Sheet').should('be.visible').and('exist')
        cy.get(':nth-child(5) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
        cy.get(':nth-child(5) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        */
        // Notes 
        cy.get('#notes').type('Testing notes')        
        cy.contains('button', 'Save and Exit').should('be.visible').and('be.enabled').click();                                                                          // Save and Exit btn click        
        cy.get(':nth-child(1) > .lg\\:right-0 > .py-1', { timeout: 100000 }).should('have.text', 'In Progress').should('be.visible').and('exist').wait(2000)            // Chwck the order status is In Progress  
        
        cy.wait(5000)
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

    })

    it("Verify TissueCypher Test edited from Send for Approval to Pending Submission Status", function()  {
    
        cy.viewport(1920, 1081)
        cy.visit("https://demo.clabsportal.com/")

        // Login Button Click
        cy.wait(500)        
        cy.get('[type="button"]').contains("login").should('be.visible').and('exist').and('contain','login').click().wait(500)	                                          // Click to Login button usimg btn type    >> Best Practise
               
        // Input username
        cy.origin('https://democlient.clabsportal.com', () => {        
            cy.wait(500)
            cy.get('input[name="username"]').type("dodobo3146@appxapi.com")                                                                                               // Get username by attribute name and type in it
            cy.get('input[name="username"]').should('have.value','dodobo3146@appxapi.com')                                                                                // Check username if the username is correctly input            
            cy.get('input[name="password"]').type("bhwY8En6a")                                                                                                            // Get password by attribute name and type in it
            cy.get('input[name="password"]').should('have.value','bhwY8En6a')                                                                                             // Check password if the password is correctly input
            cy.get('[type="submit"]').contains("Sign In").should('be.visible').and('exist').and('contain','Sign In').click()                                              // Get submit btn by btn type and cick on it   >> Best Practise                                
        })    
    
        // Order Creation and SUbmit //                      
        cy.contains('a', 'Test Orders', { timeout: 70000 }).should('have.attr', 'href', '/access/test-orders').click();                                                   // Test Orders Tab click                  
        cy.contains('button', 'New Online Order', { timeout: 5000 }).should('be.visible').and('be.enabled').click().wait(1000);                                           // New Online Order Btn Assertion  
        cy.contains('button', 'Select organization').should('be.visible').and('be.enabled').click().wait(1000);                                                           // All ORG Dropdown and click  
        cy.get('ul li button').eq(0).should('be.visible').click().wait(1500);                                                                                             // Select ORG from dropdown
        cy.contains('button', 'Shahzad ORG 15 May').should('be.visible').and('be.enabled').click().wait(1000);                                                            // All ORG Dropdown and click  
        cy.get('ul li button').eq(0).should('be.visible').click().wait(1500);                                                                                             // Select ORG from dropdown            
        cy.contains('button', 'Select a clinician').should('be.visible').and('be.enabled').click().wait(1000);                                                            // All Phy Dropdown and click 
        cy.get('ul li button').eq(1).should('be.visible').click().wait(1500);                                                                                             // Select Phy from dropdown  
        cy.contains('button', 'next').should('be.visible').and('be.enabled').click().wait(1500);                                                                          // Press next btn  
        
        // Flow 1: Create Order by input New paitent Name
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
        cy.contains('button', 'Review').should('be.visible').and('exist').wait(500)                                                                                       // Assertion for "review" Button is present
        cy.contains('button', 'Save and Exit').should('be.visible').and('exist').and('be.disabled').wait(500)                                                             // Assertion for "save_and_exit" Button is present and disabled
        cy.contains('p', 'Select Test').should('be.visible').and('exist');                                                                                                // Assertion for "Select Test" heading is present.              

        // Side bar icons color assertions
        cy.get('path[data-name="Path 5122"]').each(($el) => {                                                                                                             // Asserting each sidebar circle icon color in not filled.
        cy.wrap($el).should('have.attr', 'fill', 'none')})
        cy.contains('p', 'TissueCypher').scrollIntoView().should('be.visible').and('exist').click().wait(500)                                                             // Tapping to Tissue Cypher Test        
        cy.get('path[data-name="Path 5122"]').should('have.attr', 'fill', '#18B5B7')                                                                                    // Asserting side bar Select text icon color is filled  
        
        // Billing Info Section    
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
            
        // Laboratory Setion
        
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
           
        // Shipment Information
        
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
        
        // Supporting doc section
        cy.get('a[href="#Supporting Documents"] p').scrollIntoView().click().wait(500)
        cy.get(':nth-child(2) > .max-w-\\[300px\\] > .font-normal').should('have.text','Endoscopy Report').should('be.visible').and('exist')
        cy.get(':nth-child(2) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
        cy.get(':nth-child(2) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        cy.get(':nth-child(3) > .max-w-\\[300px\\] > .font-normal').should('have.text','Pathology Report').should('be.visible').and('exist')
        cy.get(':nth-child(3) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
        cy.get(':nth-child(3) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        //cy.get(':nth-child(4) > .max-w-\\[300px\\] > .font-normal').should('Patient Info / Demographics Sheet').should('be.visible').and('exist')
        cy.get(':nth-child(4) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
        cy.get(':nth-child(4) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        //cy.get(':nth-child(5) > .max-w-\\[300px\\] > .font-normal').should('Insurance Card / Billing Face Sheet').should('be.visible').and('exist')
        cy.get(':nth-child(5) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
        cy.get(':nth-child(5) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        
        // Notes 
        cy.get('#notes').type('Testing notes')
        cy.get('.primaryBtn').click().wait(5000)                                                                                                                          // Press Submit btn                                                                                                                                       
        cy.get('.justify-between > .w-full > .font-semibold').should('have.text','Test Submission').should('be.visible').and('exist')                                     // Test Submission Heading assertion
        cy.contains('button', 'Send for approval').should('be.visible').and('be.enabled').click();                                                                        // Send for approval btn click        
        cy.get('.text-3xl', { timeout: 100000 }).should('have.text','Order Sent For Approval').should('be.visible').and('exist').wait(5000)                               // Order Sent For Approval assertion        
        cy.contains('a', 'Test Orders', { timeout: 70000 }).should('have.attr', 'href', '/access/test-orders').click();                                                   // Test Orders Tab click                  
        cy.get(':nth-child(1) > .lg\\:right-0 > .py-1').should('have.text', 'Pending Approval').should('be.visible').and('exist').wait(2000)                              // Chwck the order status is pending submission  
        cy.wait(5000)
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

        cy.contains('button', 'Resume').should('be.visible').and('be.enabled').click();                                                                                   // Tap to Resume btn
        /*    
        // Billing Info Section    
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
                .type('') // example date
                }
        })
            
        // Laboratory Setion
        
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
            cy.get('input[placeholder="MM-DD-YYYY"]').eq(0).type('')                                                                                                  // Collection date input
            cy.get('input[placeholder="MM-DD-YYYY"]').eq(1).type('').wait(1000)                                                                                       // pull date input
            //cy.get('input[id="laboratoryInfo.labortaryPhone"]').click({ force: true })
            //cy.get('input[placeholder="Enter tumor site"]').type('www.tumorsite.com')                                                                                         // Input tumor site
        

        // Shipment Information
        
        cy.get('a[href="#Shipment Information"] p').should('have.text','Shipment Information').should('be.visible').and('exist').click().wait(500)                          // left side Shipment Information anchor click
        cy.get('input[name="isTissueShipped"]').click({force: true}).wait(500)                                                                                              // Click shipping check box                             
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
        
        // Supporting doc section
        cy.get('a[href="#Supporting Documents"] p').scrollIntoView().click().wait(500)
        cy.get(':nth-child(2) > .max-w-\\[300px\\] > .font-normal').should('have.text','Endoscopy Report').should('be.visible').and('exist')
        cy.get(':nth-child(2) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
        cy.get(':nth-child(2) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        cy.get(':nth-child(3) > .max-w-\\[300px\\] > .font-normal').should('have.text','Pathology Report').should('be.visible').and('exist')
        cy.get(':nth-child(3) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
        cy.get(':nth-child(3) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        //cy.get(':nth-child(4) > .max-w-\\[300px\\] > .font-normal').should('Patient Info / Demographics Sheet').should('be.visible').and('exist')
        cy.get(':nth-child(4) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
        cy.get(':nth-child(4) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        //cy.get(':nth-child(5) > .max-w-\\[300px\\] > .font-normal').should('Insurance Card / Billing Face Sheet').should('be.visible').and('exist')
        cy.get(':nth-child(5) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
        cy.get(':nth-child(5) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        
        // Notes 
        cy.get('#notes').type('Testing notes')        
        */
        cy.contains('button', 'Save and Exit').should('be.visible').and('be.enabled').click();                                                                           // Save and Exit btn click        
        cy.get(':nth-child(1) > .lg\\:right-0 > .py-1', { timeout: 100000 }).should('have.text', 'Pending Submission').should('be.visible').and('exist').wait(2000)      // Chwck the order status is pending submission  
        
        cy.wait(5000)
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
    })

    it("Verify TissueCypher Test edited from Send for Approval to Submit Status", function()  {
    
        cy.viewport(1920, 1081)
        cy.visit("https://demo.clabsportal.com/")

        // Login Button Click
        cy.wait(500)        
        cy.get('[type="button"]').contains("login").should('be.visible').and('exist').and('contain','login').click().wait(500)	                                          // Click to Login button usimg btn type    >> Best Practise
               
        // Input username
        cy.origin('https://democlient.clabsportal.com', () => {        
            cy.wait(500)
            cy.get('input[name="username"]').type("dodobo3146@appxapi.com")                                                                                               // Get username by attribute name and type in it
            cy.get('input[name="username"]').should('have.value','dodobo3146@appxapi.com')                                                                                // Check username if the username is correctly input            
            cy.get('input[name="password"]').type("bhwY8En6a")                                                                                                            // Get password by attribute name and type in it
            cy.get('input[name="password"]').should('have.value','bhwY8En6a')                                                                                             // Check password if the password is correctly input
            cy.get('[type="submit"]').contains("Sign In").should('be.visible').and('exist').and('contain','Sign In').click()                                              // Get submit btn by btn type and cick on it   >> Best Practise                                
        })    
    
        // Order Creation and SUbmit //                      
        cy.contains('a', 'Test Orders', { timeout: 70000 }).should('have.attr', 'href', '/access/test-orders').click();                                                   // Test Orders Tab click                  
        cy.contains('button', 'New Online Order', { timeout: 5000 }).should('be.visible').and('be.enabled').click().wait(1000);                                           // New Online Order Btn Assertion  
        cy.contains('button', 'Select organization').should('be.visible').and('be.enabled').click().wait(1000);                                                           // All ORG Dropdown and click  
        cy.get('ul li button').eq(0).should('be.visible').click().wait(1500);                                                                                             // Select ORG from dropdown
        cy.contains('button', 'Shahzad ORG 15 May').should('be.visible').and('be.enabled').click().wait(1000);                                                            // All ORG Dropdown and click  
        cy.get('ul li button').eq(0).should('be.visible').click().wait(1500);                                                                                             // Select ORG from dropdown            
        cy.contains('button', 'Select a clinician').should('be.visible').and('be.enabled').click().wait(1000);                                                            // All Phy Dropdown and click 
        cy.get('ul li button').eq(1).should('be.visible').click().wait(1500);                                                                                             // Select Phy from dropdown  
        cy.contains('button', 'next').should('be.visible').and('be.enabled').click().wait(1500);                                                                          // Press next btn  
        
        // Flow 1: Create Order by input New paitent Name
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
        cy.contains('button', 'Review').should('be.visible').and('exist').wait(500)                                                                                       // Assertion for "review" Button is present
        cy.contains('button', 'Save and Exit').should('be.visible').and('exist').and('be.disabled').wait(500)                                                             // Assertion for "save_and_exit" Button is present and disabled
        cy.contains('p', 'Select Test').should('be.visible').and('exist');                                                                                                // Assertion for "Select Test" heading is present.              

        // Side bar icons color assertions
        cy.get('path[data-name="Path 5122"]').each(($el) => {                                                                                                             // Asserting each sidebar circle icon color in not filled.
        cy.wrap($el).should('have.attr', 'fill', 'none')})
        cy.contains('p', 'TissueCypher').scrollIntoView().should('be.visible').and('exist').click().wait(500)                                                             // Tapping to Tissue Cypher Test        
        cy.get('path[data-name="Path 5122"]').should('have.attr', 'fill', '#18B5B7')                                                                                    // Asserting side bar Select text icon color is filled  
        
        // Billing Info Section    
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
            
        // Laboratory Setion
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
           
        // Shipment Information        
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
        
        // Supporting doc section
        cy.get('a[href="#Supporting Documents"] p').scrollIntoView().click().wait(500)
        cy.get(':nth-child(2) > .max-w-\\[300px\\] > .font-normal').should('have.text','Endoscopy Report').should('be.visible').and('exist')
        cy.get(':nth-child(2) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
        cy.get(':nth-child(2) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        cy.get(':nth-child(3) > .max-w-\\[300px\\] > .font-normal').should('have.text','Pathology Report').should('be.visible').and('exist')
        cy.get(':nth-child(3) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
        cy.get(':nth-child(3) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        //cy.get(':nth-child(4) > .max-w-\\[300px\\] > .font-normal').should('Patient Info / Demographics Sheet').should('be.visible').and('exist')
        cy.get(':nth-child(4) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
        cy.get(':nth-child(4) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        //cy.get(':nth-child(5) > .max-w-\\[300px\\] > .font-normal').should('Insurance Card / Billing Face Sheet').should('be.visible').and('exist')
        cy.get(':nth-child(5) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
        cy.get(':nth-child(5) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        
        // Notes 
        cy.get('#notes').type('Testing notes')
        cy.get('.primaryBtn').click().wait(5000)                                                                                                                          // Press Submit btn                                                                                                                                       
        cy.get('.justify-between > .w-full > .font-semibold').should('have.text','Test Submission').should('be.visible').and('exist')                                     // Test Submission Heading assertion
        cy.contains('button', 'Send for approval').should('be.visible').and('be.enabled').click();                                                                        // Send for approval btn click        
        cy.get('.text-3xl', { timeout: 100000 }).should('have.text','Order Sent For Approval').should('be.visible').and('exist').wait(5000)                               // Order Sent For Approval assertion        
        cy.contains('a', 'Test Orders', { timeout: 70000 }).should('have.attr', 'href', '/access/test-orders').click();                                                   // Test Orders Tab click                  
        cy.get(':nth-child(1) > .lg\\:right-0 > .py-1').should('have.text', 'Pending Approval').should('be.visible').and('exist').wait(2000)                              // Chwck the order status is pending submission  
        cy.wait(5000)
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

        cy.contains('button', 'Resume').should('be.visible').and('be.enabled').click();                                                                                   // Tap to Resume btn
        /*    
        // Billing Info Section    
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
                .type('') // example date
                }
        })
            
        // Laboratory Setion
        
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
            cy.get('input[placeholder="MM-DD-YYYY"]').eq(0).type('')                                                                                                  // Collection date input
            cy.get('input[placeholder="MM-DD-YYYY"]').eq(1).type('').wait(1000)                                                                                       // pull date input
            //cy.get('input[id="laboratoryInfo.labortaryPhone"]').click({ force: true })
            //cy.get('input[placeholder="Enter tumor site"]').type('www.tumorsite.com')                                                                                         // Input tumor site
        

        // Shipment Information
        
        cy.get('a[href="#Shipment Information"] p').should('have.text','Shipment Information').should('be.visible').and('exist').click().wait(500)                          // left side Shipment Information anchor click
        cy.get('input[name="isTissueShipped"]').click({force: true}).wait(500)                                                                                              // Click shipping check box                             
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
        
        // Supporting doc section
        cy.get('a[href="#Supporting Documents"] p').scrollIntoView().click().wait(500)
        cy.get(':nth-child(2) > .max-w-\\[300px\\] > .font-normal').should('have.text','Endoscopy Report').should('be.visible').and('exist')
        cy.get(':nth-child(2) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
        cy.get(':nth-child(2) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        cy.get(':nth-child(3) > .max-w-\\[300px\\] > .font-normal').should('have.text','Pathology Report').should('be.visible').and('exist')
        cy.get(':nth-child(3) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
        cy.get(':nth-child(3) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        //cy.get(':nth-child(4) > .max-w-\\[300px\\] > .font-normal').should('Patient Info / Demographics Sheet').should('be.visible').and('exist')
        cy.get(':nth-child(4) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
        cy.get(':nth-child(4) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        //cy.get(':nth-child(5) > .max-w-\\[300px\\] > .font-normal').should('Insurance Card / Billing Face Sheet').should('be.visible').and('exist')
        cy.get(':nth-child(5) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
        cy.get(':nth-child(5) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        
        // Notes 
        cy.get('#notes').type('Testing notes')        
        */
        cy.get('#notes').clear()
        cy.get('.primaryBtn').click().wait(5000)                                                                                                                          // Press Submit btn                                                                                                                                       
        cy.get('.justify-between > .w-full > .font-semibold').should('have.text','Test Submission').should('be.visible').and('exist')                                     // Test Submission Heading assertion
        cy.get('.md\\:max-w-\\[300px\\] > :nth-child(1) > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn > .font-semibold', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})               // Attach file for order submission
        cy.get('.w-full > :nth-child(1) > .primaryBtn', { timeout: 100000 }).should('be.visible').and('be.enabled').click();                                              // Submit btn click        
        cy.get('.text-3xl', { timeout: 100000 }).should('have.text','Order Submitted').should('be.visible').and('exist')                                                  // Order Submitted page heading assertion        
        cy.contains('a', 'Test Orders', { timeout: 70000 }).should('have.attr', 'href', '/access/test-orders').click();                                                   // Test Orders Tab click          
        cy.get(':nth-child(1) > .lg\\:right-0 > .py-1').should('have.text', 'Submitted').should('be.visible').and('exist').wait(2000)                                     // Chwck the order status is Submitted  
        
        cy.wait(5000)
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
    })

    it("Verify TissueCypher Test edited from Pending Submission to In Progress Status", function()  {
    
        cy.viewport(1920, 1081)
        cy.visit("https://demo.clabsportal.com/")

        // Login Button Click
        cy.wait(500)        
        cy.get('[type="button"]').contains("login").should('be.visible').and('exist').and('contain','login').click().wait(500)	                                          // Click to Login button usimg btn type    >> Best Practise
               
        // Input username
        cy.origin('https://democlient.clabsportal.com', () => {        
            cy.wait(500)
            cy.get('input[name="username"]').type("dodobo3146@appxapi.com")                                                                                               // Get username by attribute name and type in it
            cy.get('input[name="username"]').should('have.value','dodobo3146@appxapi.com')                                                                                // Check username if the username is correctly input            
            cy.get('input[name="password"]').type("bhwY8En6a")                                                                                                            // Get password by attribute name and type in it
            cy.get('input[name="password"]').should('have.value','bhwY8En6a')                                                                                             // Check password if the password is correctly input
            cy.get('[type="submit"]').contains("Sign In").should('be.visible').and('exist').and('contain','Sign In').click()                                              // Get submit btn by btn type and cick on it   >> Best Practise                                
        })    
    
        // Order Creation and SUbmit //                      
        cy.contains('a', 'Test Orders', { timeout: 70000 }).should('have.attr', 'href', '/access/test-orders').click();                                                   // Test Orders Tab click                  
        cy.contains('button', 'New Online Order', { timeout: 5000 }).should('be.visible').and('be.enabled').click().wait(1000);                                           // New Online Order Btn Assertion  
        cy.contains('button', 'Select organization').should('be.visible').and('be.enabled').click().wait(1000);                                                           // All ORG Dropdown and click  
        cy.get('ul li button').eq(0).should('be.visible').click().wait(1500);                                                                                             // Select ORG from dropdown
        cy.contains('button', 'Shahzad ORG 15 May').should('be.visible').and('be.enabled').click().wait(1000);                                                            // All ORG Dropdown and click  
        cy.get('ul li button').eq(0).should('be.visible').click().wait(1500);                                                                                             // Select ORG from dropdown            
        cy.contains('button', 'Select a clinician').should('be.visible').and('be.enabled').click().wait(1000);                                                            // All Phy Dropdown and click 
        cy.get('ul li button').eq(1).should('be.visible').click().wait(1500);                                                                                             // Select Phy from dropdown  
        cy.contains('button', 'next').should('be.visible').and('be.enabled').click().wait(1500);                                                                          // Press next btn  
        
        // Flow 1: Create Order by input New paitent Name
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
        cy.contains('button', 'Review').should('be.visible').and('exist').wait(500)                                                                                       // Assertion for "review" Button is present
        cy.contains('button', 'Save and Exit').should('be.visible').and('exist').and('be.disabled').wait(500)                                                             // Assertion for "save_and_exit" Button is present and disabled
        cy.contains('p', 'Select Test').should('be.visible').and('exist');                                                                                                // Assertion for "Select Test" heading is present.              

        // Side bar icons color assertions
        cy.get('path[data-name="Path 5122"]').each(($el) => {                                                                                                             // Asserting each sidebar circle icon color in not filled.
        cy.wrap($el).should('have.attr', 'fill', 'none')})
        cy.contains('p', 'TissueCypher').scrollIntoView().should('be.visible').and('exist').click().wait(500)                                                             // Tapping to Tissue Cypher Test        
        cy.get('path[data-name="Path 5122"]').should('have.attr', 'fill', '#18B5B7')                                                                                    // Asserting side bar Select text icon color is filled  
        
        // Billing Info Section    
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
            
        // Laboratory Setion
        
            cy.get('a[href="#Laboratory Information"] p').should('have.text','Laboratory Information').should('be.visible').and('exist').click().wait(500)                // Selecting Laboratory Info from side menu
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
            cy.get('input[placeholder="MM-DD-YYYY"]').eq(0).type('05-16-2025')                                                                                                  // Collection date input
            cy.get('input[placeholder="MM-DD-YYYY"]').eq(1).type('05-18-2025').wait(1000)                                                                                       // pull date input

        // Shipment Information
        
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
        
        // Supporting doc section
        cy.get('a[href="#Supporting Documents"] p').scrollIntoView().click().wait(500)
        cy.get(':nth-child(2) > .max-w-\\[300px\\] > .font-normal').should('have.text','Endoscopy Report').should('be.visible').and('exist')
        cy.get(':nth-child(2) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
        cy.get(':nth-child(2) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        cy.get(':nth-child(3) > .max-w-\\[300px\\] > .font-normal').should('have.text','Pathology Report').should('be.visible').and('exist')
        cy.get(':nth-child(3) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
        cy.get(':nth-child(3) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        //cy.get(':nth-child(4) > .max-w-\\[300px\\] > .font-normal').should('Patient Info / Demographics Sheet').should('be.visible').and('exist')
        cy.get(':nth-child(4) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
        cy.get(':nth-child(4) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        //cy.get(':nth-child(5) > .max-w-\\[300px\\] > .font-normal').should('Insurance Card / Billing Face Sheet').should('be.visible').and('exist')
        cy.get(':nth-child(5) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
        cy.get(':nth-child(5) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        
        // Notes 
        cy.get('#notes').type('Testing notes')
        
        cy.contains('button', 'Save and Exit').should('be.visible').and('be.enabled').click();                                                                           // Save and Exit btn click        
        cy.get(':nth-child(1) > .lg\\:right-0 > .py-1', { timeout: 100000 }).should('have.text', 'Pending Submission').should('be.visible').and('exist').wait(2000)      // Chwck the order status is pending submission  

        cy.wait(5000)
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

        cy.contains('button', 'Resume').should('be.visible').and('be.enabled').click();                                                                                   // Tap to Resume btn

        // Billing Info Section    
        cy.get('a[href="#Billing Information"] p', { timeout: 1000 }).should('have.text','Billing Information').should('be.visible').click()                              // Asserting side bar billing information and clicked 
        cy.get('#billingInfo\\.icdCodeId').clear()
        cy.get('input[name="billingInfo.typeOfFacility"]').then($options1 => {                                                                                            // Seleting type of facility randomly.
        const randomIndex1 = Math.floor(Math.random() * $options1.length) // pick 0, 1, or 2
        const chosen1 = $options1[randomIndex1]
            cy.wrap(chosen1).click({ force: true})
            cy.log('Selected option: ' + chosen1.value)
            if (chosen1.value === "Hospital Inpatient") {
                cy.get('#Billing\\ Information > .p-6 > :nth-child(4) > .false > .react-datepicker-wrapper > .react-datepicker__input-container > .w-full')
                .should('be.visible')
                .should('have.attr', 'placeholder', 'MM-DD-YYYY')
                .clear().wait(1000) // example date
                }
        })
            
        // Laboratory Setion
        cy.get('a[href="#Laboratory Information"] p').should('have.text','Laboratory Information').should('be.visible').and('exist').click().wait(500)                // Selecting Laboratory Info from side menu
        cy.get('input[name="laboratoryInfo.typeOfSpecimen"]').then($options1 => {                                                                                     // Seleting type of facility randomly.
        const randomIndex1 = Math.floor(Math.random() * $options1.length) // pick 0, 1, or 2
        const chosen1 = $options1[randomIndex1]

        // Click the randomly selected input
        cy.wrap(chosen1).click({ force: true})    

        })
        cy.get('#laboratoryInfo\\.labortaryName').clear()                                                                                                             // typing text in Name of facility        
        cy.get('input[placeholder="MM-DD-YYYY"]').eq(0).clear()                                                                                                       // Collection date input
        cy.get('input[placeholder="MM-DD-YYYY"]').eq(1).clear()                                                                                                       // pull date input

        // Shipment Information
        cy.get('a[href="#Shipment Information"] p').should('have.text','Shipment Information').should('be.visible').and('exist').click().wait(500)                    // left side Shipment Information anchor click
        cy.get('input[name="isTissueShipped"]').uncheck({force: true})                                                                                                // Uncheckk shipping check box                             
        
        // Supporting doc section
        /*
        cy.get('a[href="#Supporting Documents"] p').scrollIntoView().click().wait(500)
        cy.get(':nth-child(2) > .max-w-\\[300px\\] > .font-normal').should('have.text','Endoscopy Report').should('be.visible').and('exist')
        cy.get(':nth-child(2) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
        cy.get(':nth-child(2) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        cy.get(':nth-child(3) > .max-w-\\[300px\\] > .font-normal').should('have.text','Pathology Report').should('be.visible').and('exist')
        cy.get(':nth-child(3) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
        cy.get(':nth-child(3) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        //cy.get(':nth-child(4) > .max-w-\\[300px\\] > .font-normal').should('Patient Info / Demographics Sheet').should('be.visible').and('exist')
        cy.get(':nth-child(4) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
        cy.get(':nth-child(4) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        //cy.get(':nth-child(5) > .max-w-\\[300px\\] > .font-normal').should('Insurance Card / Billing Face Sheet').should('be.visible').and('exist')
        cy.get(':nth-child(5) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
        cy.get(':nth-child(5) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        */
        // Notes 
        cy.get('#notes').type('Testing notes')        
        
        cy.contains('button', 'Save and Exit').should('be.visible').and('be.enabled').click();                                                                          // Save and Exit btn click        
        cy.get(':nth-child(1) > .lg\\:right-0 > .py-1', { timeout: 100000 }).should('have.text', 'In Progress').should('be.visible').and('exist').wait(2000)            // Chwck the order status is In Progress  
        
        cy.wait(5000)
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
    })

    it("Verify TissueCypher Test edited from Pending Submission to Send for Approval Status", function()  {
    
        cy.viewport(1920, 1081)
        cy.visit("https://demo.clabsportal.com/")

        // Login Button Click
        cy.wait(500)        
        cy.get('[type="button"]').contains("login").should('be.visible').and('exist').and('contain','login').click().wait(500)	                                          // Click to Login button usimg btn type    >> Best Practise
               
        // Input username
        cy.origin('https://democlient.clabsportal.com', () => {        
            cy.wait(500)
            cy.get('input[name="username"]').type("dodobo3146@appxapi.com")                                                                                               // Get username by attribute name and type in it
            cy.get('input[name="username"]').should('have.value','dodobo3146@appxapi.com')                                                                                // Check username if the username is correctly input            
            cy.get('input[name="password"]').type("bhwY8En6a")                                                                                                            // Get password by attribute name and type in it
            cy.get('input[name="password"]').should('have.value','bhwY8En6a')                                                                                             // Check password if the password is correctly input
            cy.get('[type="submit"]').contains("Sign In").should('be.visible').and('exist').and('contain','Sign In').click()                                              // Get submit btn by btn type and cick on it   >> Best Practise                                
        })    
    
        // Order Creation and SUbmit //                      
        cy.contains('a', 'Test Orders', { timeout: 70000 }).should('have.attr', 'href', '/access/test-orders').click();                                                   // Test Orders Tab click                  
        cy.contains('button', 'New Online Order', { timeout: 5000 }).should('be.visible').and('be.enabled').click().wait(1000);                                           // New Online Order Btn Assertion  
        cy.contains('button', 'Select organization').should('be.visible').and('be.enabled').click().wait(1000);                                                           // All ORG Dropdown and click  
        cy.get('ul li button').eq(0).should('be.visible').click().wait(1500);                                                                                             // Select ORG from dropdown
        cy.contains('button', 'Shahzad ORG 15 May').should('be.visible').and('be.enabled').click().wait(1000);                                                            // All ORG Dropdown and click  
        cy.get('ul li button').eq(0).should('be.visible').click().wait(1500);                                                                                             // Select ORG from dropdown            
        cy.contains('button', 'Select a clinician').should('be.visible').and('be.enabled').click().wait(1000);                                                            // All Phy Dropdown and click 
        cy.get('ul li button').eq(1).should('be.visible').click().wait(1500);                                                                                             // Select Phy from dropdown  
        cy.contains('button', 'next').should('be.visible').and('be.enabled').click().wait(1500);                                                                          // Press next btn  
        
        // Flow 1: Create Order by input New paitent Name
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
        cy.contains('button', 'Review').should('be.visible').and('exist').wait(500)                                                                                       // Assertion for "review" Button is present
        cy.contains('button', 'Save and Exit').should('be.visible').and('exist').and('be.disabled').wait(500)                                                             // Assertion for "save_and_exit" Button is present and disabled
        cy.contains('p', 'Select Test').should('be.visible').and('exist');                                                                                                // Assertion for "Select Test" heading is present.              

        // Side bar icons color assertions
        cy.get('path[data-name="Path 5122"]').each(($el) => {                                                                                                             // Asserting each sidebar circle icon color in not filled.
        cy.wrap($el).should('have.attr', 'fill', 'none')})
        cy.contains('p', 'TissueCypher').scrollIntoView().should('be.visible').and('exist').click().wait(500)                                                             // Tapping to Tissue Cypher Test        
        cy.get('path[data-name="Path 5122"]').should('have.attr', 'fill', '#18B5B7')                                                                                    // Asserting side bar Select text icon color is filled  
        
        // Billing Info Section    
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
            
        // Laboratory Setion
        
            cy.get('a[href="#Laboratory Information"] p').should('have.text','Laboratory Information').should('be.visible').and('exist').click().wait(500)                // Selecting Laboratory Info from side menu
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
            cy.get('input[placeholder="MM-DD-YYYY"]').eq(0).type('05-16-2025')                                                                                                  // Collection date input
            cy.get('input[placeholder="MM-DD-YYYY"]').eq(1).type('05-18-2025').wait(1000)                                                                                       // pull date input

        // Shipment Information
        
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
        
        // Supporting doc section
        cy.get('a[href="#Supporting Documents"] p').scrollIntoView().click().wait(500)
        cy.get(':nth-child(2) > .max-w-\\[300px\\] > .font-normal').should('have.text','Endoscopy Report').should('be.visible').and('exist')
        cy.get(':nth-child(2) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
        cy.get(':nth-child(2) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        cy.get(':nth-child(3) > .max-w-\\[300px\\] > .font-normal').should('have.text','Pathology Report').should('be.visible').and('exist')
        cy.get(':nth-child(3) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
        cy.get(':nth-child(3) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        //cy.get(':nth-child(4) > .max-w-\\[300px\\] > .font-normal').should('Patient Info / Demographics Sheet').should('be.visible').and('exist')
        cy.get(':nth-child(4) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
        cy.get(':nth-child(4) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        //cy.get(':nth-child(5) > .max-w-\\[300px\\] > .font-normal').should('Insurance Card / Billing Face Sheet').should('be.visible').and('exist')
        cy.get(':nth-child(5) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
        cy.get(':nth-child(5) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        
        // Notes 
        cy.get('#notes').type('Testing notes')
        
        cy.contains('button', 'Save and Exit').should('be.visible').and('be.enabled').click();                                                                           // Save and Exit btn click        
        cy.get(':nth-child(1) > .lg\\:right-0 > .py-1', { timeout: 100000 }).should('have.text', 'Pending Submission').should('be.visible').and('exist').wait(2000)      // Chwck the order status is pending submission  

        cy.wait(5000)
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

        cy.contains('button', 'Resume').should('be.visible').and('be.enabled').click();                                                                                   // Tap to Resume btn
        
        cy.get('.primaryBtn').click().wait(5000)                                                                                                                          // Press Submit btn                                                                                                                                       
        cy.get('.justify-between > .w-full > .font-semibold').should('have.text','Test Submission').should('be.visible').and('exist')                                     // Test Submission Heading assertion
        cy.contains('button', 'Send for approval').should('be.visible').and('be.enabled').click();                                                                        // Send for approval btn click        
        cy.get('.text-3xl', { timeout: 100000 }).should('have.text','Order Sent For Approval').should('be.visible').and('exist').wait(5000)                               // Order Sent For Approval assertion        
        cy.contains('a', 'Test Orders', { timeout: 70000 }).should('have.attr', 'href', '/access/test-orders').click();                                                   // Test Orders Tab click                  
        cy.get(':nth-child(1) > .lg\\:right-0 > .py-1').should('have.text', 'Pending Approval').should('be.visible').and('exist').wait(2000)                              // Chwck the order status is pending submission  
      
        cy.wait(5000)
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
    })

    it("Verify TissueCypher Test edited from Pending Submission to Submit Status", function()  {
    
        cy.viewport(1920, 1081)
        cy.visit("https://demo.clabsportal.com/")

        // Login Button Click
        cy.wait(500)        
        cy.get('[type="button"]').contains("login").should('be.visible').and('exist').and('contain','login').click().wait(500)	                                          // Click to Login button usimg btn type    >> Best Practise
               
        // Input username
        cy.origin('https://democlient.clabsportal.com', () => {        
            cy.wait(500)
            cy.get('input[name="username"]').type("dodobo3146@appxapi.com")                                                                                               // Get username by attribute name and type in it
            cy.get('input[name="username"]').should('have.value','dodobo3146@appxapi.com')                                                                                // Check username if the username is correctly input            
            cy.get('input[name="password"]').type("bhwY8En6a")                                                                                                            // Get password by attribute name and type in it
            cy.get('input[name="password"]').should('have.value','bhwY8En6a')                                                                                             // Check password if the password is correctly input
            cy.get('[type="submit"]').contains("Sign In").should('be.visible').and('exist').and('contain','Sign In').click()                                              // Get submit btn by btn type and cick on it   >> Best Practise                                
        })    
    
        // Order Creation and SUbmit //                      
        cy.contains('a', 'Test Orders', { timeout: 70000 }).should('have.attr', 'href', '/access/test-orders').click();                                                   // Test Orders Tab click                  
        cy.contains('button', 'New Online Order', { timeout: 5000 }).should('be.visible').and('be.enabled').click().wait(1000);                                           // New Online Order Btn Assertion  
        cy.contains('button', 'Select organization').should('be.visible').and('be.enabled').click().wait(1000);                                                           // All ORG Dropdown and click  
        cy.get('ul li button').eq(0).should('be.visible').click().wait(1500);                                                                                             // Select ORG from dropdown
        cy.contains('button', 'Shahzad ORG 15 May').should('be.visible').and('be.enabled').click().wait(1000);                                                            // All ORG Dropdown and click  
        cy.get('ul li button').eq(0).should('be.visible').click().wait(1500);                                                                                             // Select ORG from dropdown            
        cy.contains('button', 'Select a clinician').should('be.visible').and('be.enabled').click().wait(1000);                                                            // All Phy Dropdown and click 
        cy.get('ul li button').eq(1).should('be.visible').click().wait(1500);                                                                                             // Select Phy from dropdown  
        cy.contains('button', 'next').should('be.visible').and('be.enabled').click().wait(1500);                                                                          // Press next btn  
        
        // Flow 1: Create Order by input New paitent Name
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
        cy.contains('button', 'Review').should('be.visible').and('exist').wait(500)                                                                                       // Assertion for "review" Button is present
        cy.contains('button', 'Save and Exit').should('be.visible').and('exist').and('be.disabled').wait(500)                                                             // Assertion for "save_and_exit" Button is present and disabled
        cy.contains('p', 'Select Test').should('be.visible').and('exist');                                                                                                // Assertion for "Select Test" heading is present.              

        // Side bar icons color assertions
        cy.get('path[data-name="Path 5122"]').each(($el) => {                                                                                                             // Asserting each sidebar circle icon color in not filled.
        cy.wrap($el).should('have.attr', 'fill', 'none')})
        cy.contains('p', 'TissueCypher').scrollIntoView().should('be.visible').and('exist').click().wait(500)                                                             // Tapping to Tissue Cypher Test        
        cy.get('path[data-name="Path 5122"]').should('have.attr', 'fill', '#18B5B7')                                                                                    // Asserting side bar Select text icon color is filled  
        
        // Billing Info Section    
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
            
        // Laboratory Setion
        
            cy.get('a[href="#Laboratory Information"] p').should('have.text','Laboratory Information').should('be.visible').and('exist').click().wait(500)                // Selecting Laboratory Info from side menu
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
            cy.get('input[placeholder="MM-DD-YYYY"]').eq(0).type('05-16-2025')                                                                                                  // Collection date input
            cy.get('input[placeholder="MM-DD-YYYY"]').eq(1).type('05-18-2025').wait(1000)                                                                                       // pull date input

        // Shipment Information
        
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
        
        // Supporting doc section
        cy.get('a[href="#Supporting Documents"] p').scrollIntoView().click().wait(500)
        cy.get(':nth-child(2) > .max-w-\\[300px\\] > .font-normal').should('have.text','Endoscopy Report').should('be.visible').and('exist')
        cy.get(':nth-child(2) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
        cy.get(':nth-child(2) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        cy.get(':nth-child(3) > .max-w-\\[300px\\] > .font-normal').should('have.text','Pathology Report').should('be.visible').and('exist')
        cy.get(':nth-child(3) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
        cy.get(':nth-child(3) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        //cy.get(':nth-child(4) > .max-w-\\[300px\\] > .font-normal').should('Patient Info / Demographics Sheet').should('be.visible').and('exist')
        cy.get(':nth-child(4) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
        cy.get(':nth-child(4) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        //cy.get(':nth-child(5) > .max-w-\\[300px\\] > .font-normal').should('Insurance Card / Billing Face Sheet').should('be.visible').and('exist')
        cy.get(':nth-child(5) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
        cy.get(':nth-child(5) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        
        // Notes 
        cy.get('#notes').type('Testing notes')
        
        cy.contains('button', 'Save and Exit').should('be.visible').and('be.enabled').click();                                                                           // Save and Exit btn click        
        cy.get(':nth-child(1) > .lg\\:right-0 > .py-1', { timeout: 100000 }).should('have.text', 'Pending Submission').should('be.visible').and('exist').wait(2000)      // Chwck the order status is pending submission  

        cy.wait(5000)
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

        cy.contains('button', 'Resume').should('be.visible').and('be.enabled').click();                                                                                   // Tap to Resume btn
        
        cy.get('.primaryBtn').click().wait(5000)                                                                                                                          // Press Submit btn                                                                                                                                       
        cy.get('.justify-between > .w-full > .font-semibold').should('have.text','Test Submission').should('be.visible').and('exist')                                     // Test Submission Heading assertion
        cy.get('.md\\:max-w-\\[300px\\] > :nth-child(1) > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn > .font-semibold', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})               // Attach file for order submission
        cy.get('.w-full > :nth-child(1) > .primaryBtn', { timeout: 100000 }).should('be.visible').and('be.enabled').click();                                              // Submit btn click        
        cy.get('.text-3xl', { timeout: 100000 }).should('have.text','Order Submitted').should('be.visible').and('exist')                                                  // Order Submitted page heading assertion        
        cy.contains('a', 'Test Orders', { timeout: 70000 }).should('have.attr', 'href', '/access/test-orders').click();                                                   // Test Orders Tab click          
        cy.get(':nth-child(1) > .lg\\:right-0 > .py-1').should('have.text', 'Submitted').should('be.visible').and('exist').wait(2000)                                     // Chwck the order status is Submitted  
      
        cy.wait(5000)
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
    
    })

})          






    