import 'cypress-file-upload'
import { exit } from 'process'



describe('TissueCypher Online Order Submission Suite', function() {

      
    it("Verify TissueCypher Test Created and Submitted Flow", function()  {

        cy.viewport(1920, 1081)
        cy.visit("https://demo.clabsportal.com/")
        
        // Login Button Click
        ////cy.get(".text-lg").contains("Existing Customer")                                                                                                                                    // Assertion for text "Existing Customer" is present
        cy.wait(500)
        //cy.get(".w-full").contains("login").should('be.visible').and('exist').and('contain','login').click()                                                            // Click to Login button and check if the btn text is "login"       
        cy.get('[type="button"]').contains("login").should('be.visible').and('exist').and('contain','login').click().wait(500)	                                          // Click to Login button usimg btn type    >> Best Practise
               
        // Input username
        cy.origin('https://democlient.clabsportal.com', () => {        
            cy.wait(500)
            cy.get('input[name="username"]').type("dodobo3146@appxapi.com")                                                                                                                     // Get username by attribute name and type in it
            cy.get('input[name="username"]').should('have.value','dodobo3146@appxapi.com')                                                                                                      // Check username if the username is correctly input            
            cy.get('input[name="password"]').type("bhwY8En6a")                                                                                                                                  // Get password by attribute name and type in it
            cy.get('input[name="password"]').should('have.value','bhwY8En6a')                                                                                                                   // Check password if the password is correctly input
            //cy.get("input#okta-signin-submit").should('be.visible').and('exist').and('contain','Sign In').click()                                                                             // Get submit btn and check if the btn text is "Sign In" 
            cy.get('[type="submit"]').contains("Sign In").should('be.visible').and('exist').and('contain','Sign In').click()                                                                    // Get submit btn by btn type and cick on it   >> Best Practise                                
        })

                                                                    // Order Creation and SUbmit //          

        cy.get('.grid-cols-1 > .border-r > .md\\:flex > [href="/access/test-orders"]', { timeout: 20000 }).contains("Test Orders")                                        // Test Orders Tab click
        .should('be.visible').and('exist').and('contain','Orders').click().wait(5000)      
        cy.get('.primaryBtn').contains("New Online Order").should('be.visible').and('exist', { timeout: 5000 }).and('contain','Online Order').click()                     // New Online Order Btn Assertion
        cy.get('.my-4 > .my-2 > .bg-white').should('be.visible').and('exist').click().wait(500)                                                                           // All ORG Dropdown 
        cy.get('.rounded-md > .hover\\:bg-sideNavGray').click().wait(500)                                                                                                 // Select ORG from dropdown  
        cy.get('.my-4 > .my-2 > .bg-white').should('be.visible').and('exist').click().wait(500)                                                                           // All ORG Dropdown click
        cy.get('.rounded-md > .hover\\:bg-sideNavGray').click().wait(500)                                                                                                 // Select ORG from dropdown        
        cy.get('.p-6 > .flex-col > :nth-child(2) > .my-2 > .bg-white').click().wait(500)                                                                                  // Phy dropdown Assertion        
        cy.get('.rounded-md > :nth-child(1) > .w-full > .font-normal').click().wait(500)                                                                                  // Select Phy from dropdown
        cy.get('.justify-end > span > .primaryBtn').click().wait(500)                                                                                                     // Press next btn

        

        
        // Flow 1: Create Order by input New paitent Name
        cy.get('.p-6 > .patientSearchContainer > .block > .my-3 > .relative > .font-sans').type('QA').wait(1000)                                                          // Input Patient Name
        cy.get('.py-2 > .undefined').click().wait(500)                                                                                                                    // Press ADD btn to add new patient
        cy.get('#firstName').type('Jack').wait(500)                                                                                                                       // Add First Name
        cy.get('#lastName').type('Maaaa').wait(500)                                                                                                                       // Add Last Name
        cy.get('.mr-\\[3\\.5\\%\\] > .flex-col > .react-datepicker-wrapper > .react-datepicker__input-container > .w-full').type('05-16-1975')                            // Add DOB
        cy.get('#gender').click().wait(500)                                                                                                                               // Tap gender dropdown
        cy.get(':nth-child(1) > .transparentBtn > .font-normal').click().wait(500)                                                                                        // Select Male
        cy.get(':nth-child(2) > .primaryBtn').click().wait(500)                                                                                                           // Tap to Next btn
        cy.get(':nth-child(2) > .primaryBtn').click().wait(500)                                                                                                           // Tap to Next btn again
        cy.get(':nth-child(2) > .primaryBtn').click().wait(1000)                                                                                                          // Tap to Proceed to order btn
        cy.get('.flex-row > :nth-child(1) > span > .secondaryBtn').contains("Review").should('have.text','Review').should('be.visible').and('exist').wait(500)            // Assertion for "review" Button is present
        cy.get('button.secondaryBtn').should('contain.text', 'Save and Exit').and('be.disabled').wait(500)                                                                // Assertion for "save_and_exit" Button is present and disabled
        cy.get('#Select\\ Test > .my-2').contains("Select Test").should('have.text','Select Test').should('be.visible').and('exist').and('contain','Select').wait(500)    // Assertion for "Select Test" heading is present.            
        // Side bar icons color assertions
        cy.get('path[data-name="Path 5122"]').each(($el) => {                                                                                                             // Asserting each sidebar circle icon color in not filled.
        cy.wrap($el).should('have.attr', 'fill', 'none')})
        cy.get(':nth-child(2) > .rounded-md > .py-4 > .flex-wrap > .flex-col').scrollIntoView().should('be.visible').and('exist').click().wait(500)                       // Tapping to Tissue Cypher Test
        cy.get('path[data-name="Path 5122"]').should('have.attr', 'fill', '#18B5B7')                                                                                    // Asserting side bar Select text icon color is filled  
        
        // Billing Info Section
        cy.get('a[href="#Billing Information"] p', { timeout: 1000 }).should('have.text','Billing Information').should('be.visible').click()        // Asserting side bar billing information and clicked 
        cy.get('#billingInfo\\.icdCodeId', { timeout: 1000 }).click()                                                                                                     // Asserting icd 10 code is present and clicked
        cy.get(':nth-child(3) > .transparentBtn > .font-normal', { timeout: 1000 }).should('have.text','K22.719 BE with dysplasia, unspecified')
        .should('be.visible').and('exist').click()                                                                                                                        // Selecting third option from icd 10 code dropown
        cy.get('input[name="billingInfo.typeOfFacility"]').then($options => {                                                                                             // Seleting type of facility randomly.
        const randomIndex = Math.floor(Math.random() * $options.length) // pick 0, 1, or 2
        const chosen = $options[randomIndex]
            cy.wrap(chosen).click({ force: true})
            cy.log('Selected option: ' + chosen.value)
            // If it's the 3rd option (Hospital Inpatient), assert + fill DTP
            if (chosen.value === "Hospital Inpatient") {
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
            cy.get('a[href="#Laboratory Information"] p').should('have.text','Laboratory Information').should('be.visible').and('exist').click().wait(500)    // Selecting Laboratory Info from side menu
            cy.get('input[name="laboratoryInfo.typeOfSpecimen"]').then($options1 => {                                                                                     // Seleting type of facility randomly.
            const randomIndex1 = Math.floor(Math.random() * $options1.length) // pick 0, 1, or 2
            const chosen1 = $options1[randomIndex1]

           // Click the randomly selected input
            cy.wrap(chosen1).click({ force: true})    

            })

        cy.get('#laboratoryInfo\\.labortaryName').type('a').wait(1000)                                                                                                    // typing text in Name of facility
        cy.get(':nth-child(4) > .transparentBtn > .font-normal').click().wait(500)                                                                                        // Select 4th option
        cy.get('.my-3.false > .flex-col > .react-datepicker-wrapper > .react-datepicker__input-container > .w-full').type('05-16-2025')                                   // date input

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
        
        cy.get('.primaryBtn').click().wait(5000)                                                                                                                                     // Press Submit btn                                                                                                                                       
        cy.get('.justify-between > .w-full > .font-semibold').should('have.text','Test Submission').should('be.visible').and('exist')                                                // Test Submission Heading assertion
        cy.get(':nth-child(3) > .flex > span > .primaryBtn').should('have.text','Send for approval').should('be.visible').and('exist').click().wait(30000)                           // Send for approval btn click                                                                                                  
        cy.get('.text-3xl').should('have.text','Order Sent For Approval').should('be.visible').and('exist').wait(5000)                                                               // Order Sent For Approval assertion                                                                                                  
        cy.get('.grid-cols-1 > .border-r > .md\\:flex > [href="/access/test-orders"]', { timeout: 2000 }).contains("Test Orders")                                                    // Test Orders Tab click
        .should('be.visible').and('exist').and('contain','Orders').click().wait(5000)  
        cy.get(':nth-child(1) > .lg\\:right-0 > .py-1').should('have.text', 'Pending Approval').should('be.visible').and('exist').wait(2000)                                        // Chwck the order status is pending submission  
        cy.get('.rounded-full > .max-w-\\[316px\\] > .h-full').click().wait(500)
        cy.get('.py-2 > .font-normal', { timeout: 5000 }).click().wait(5000)      

        //cy.get('.flex-row > :nth-child(1) > span > .secondaryBtn').contains("Review").should('have.text','Review').should('be.visible').and('exist').click().wait(500)             // Assertion for "review" Button is present
        //cy.get('button.secondaryBtn').should('contain.text', 'Save and Exit').and('be.enabled').click().wait(2000)                                                                 // Assertion for "save_and_exit" Button is present and disabled
        
    })
    
    it.skip("Verify TissueCypher Test Created with Save and Exit Flow", function()  {

        cy.viewport(1920, 1081)
        cy.visit("https://demo.clabsportal.com/")
        
        // Login Button Click
        ////cy.get(".text-lg").contains("Existing Customer")                                                                                                                                    // Assertion for text "Existing Customer" is present
        //cy.wait(500)
        //cy.get(".w-full").contains("login").should('be.visible').and('exist').and('contain','login').click()                                                                                  // Click to Login button and check if the btn text is "login"       
        cy.get('[type="button"]').contains("login").should('be.visible').and('exist').and('contain','login').click().wait(500)	                                                                // Click to Login button usimg btn type    >> Best Practise
               
        // Input username
        cy.origin('https://democlient.clabsportal.com', () => {        
            cy.wait(1000)
            cy.get('input[name="username"]').type("dodobo3146@appxapi.com")                                                                                                                     // Get username by attribute name and type in it
            cy.get('input[name="username"]').should('have.value','dodobo3146@appxapi.com')                                                                                                      // Check username if the username is correctly input            
            cy.get('input[name="password"]').type("bhwY8En6a")                                                                                                                                  // Get password by attribute name and type in it
            cy.get('input[name="password"]').should('have.value','bhwY8En6a')                                                                                                                   // Check password if the password is correctly input
            //cy.get("input#okta-signin-submit").should('be.visible').and('exist').and('contain','Sign In').click()                                                                             // Get submit btn and check if the btn text is "Sign In" 
            cy.get('[type="submit"]').contains("Sign In").should('be.visible').and('exist').and('contain','Sign In').click()                                                                    // Get submit btn by btn type and cick on it   >> Best Practise                                
        })

                                                                    // Order Creation and Save and Exit with pending submission status Flow //          
        
        cy.get('.grid-cols-1 > .border-r > .md\\:flex > [href="/access/test-orders"]', { timeout: 20000 }).contains("Test Orders")                                        // Test Orders Tab click
        .should('be.visible').and('exist').and('contain','Orders').click().wait(5000)      
        cy.get('.primaryBtn').contains("New Online Order").should('be.visible').and('exist', { timeout: 5000 }).and('contain','Online Order').click()                     // New Online Order Btn Assertion
        cy.get('.my-4 > .my-2 > .bg-white').should('be.visible').and('exist').click().wait(500)                                                                           // All ORG Dropdown 
        cy.get('.rounded-md > .hover\\:bg-sideNavGray').click().wait(500)                                                                                                 // Select ORG from dropdown  
        cy.get('.my-4 > .my-2 > .bg-white').should('be.visible').and('exist').click().wait(500)                                                                           // All ORG Dropdown click
        cy.get('.rounded-md > .hover\\:bg-sideNavGray').click().wait(500)                                                                                                 // Select ORG from dropdown        
        cy.get('.p-6 > .flex-col > :nth-child(2) > .my-2 > .bg-white').click().wait(500)                                                                                  // Phy dropdown Assertion        
        cy.get('.rounded-md > :nth-child(1) > .w-full > .font-normal').click().wait(500)                                                                                  // Select Phy from dropdown
        cy.get('.justify-end > span > .primaryBtn').click().wait(500)                                                                                                     // Press next btn  

        // Flow 1: Create Order by input New paitent Name
        cy.get('.p-6 > .patientSearchContainer > .block > .my-3 > .relative > .font-sans').type('QA').wait(1000)                                                          // Input Patient Name
        cy.get('.py-2 > .undefined').click().wait(500)                                                                                                                    // Press ADD btn to add new patient
        cy.get('#firstName').type('Jacob').wait(500)                                                                                                                      // Add First Name
        cy.get('#lastName').type('Oram').wait(500)                                                                                                                        // Add Last Name
        cy.get('.mr-\\[3\\.5\\%\\] > .flex-col > .react-datepicker-wrapper > .react-datepicker__input-container > .w-full').type('05-16-1975')                            // Add DOB
        cy.get('#gender').click().wait(500)                                                                                                                               // Tap gender dropdown
        cy.get(':nth-child(1) > .transparentBtn > .font-normal').click().wait(500)                                                                                        // Select Male
        cy.get(':nth-child(2) > .primaryBtn').click().wait(500)                                                                                                           // Tap to Next btn
        cy.get(':nth-child(2) > .primaryBtn').click().wait(500)                                                                                                           // Tap to Next btn again
        cy.get(':nth-child(2) > .primaryBtn').click().wait(1000)                                                                                                          // Tap to Proceed to order btn
        cy.get('.flex-row > :nth-child(1) > span > .secondaryBtn').contains("Review").should('have.text','Review').should('be.visible').and('exist').wait(500)            // Assertion for "review" Button is present
        cy.get('button.secondaryBtn').should('contain.text', 'Save and Exit').and('be.disabled').wait(500)                                                                // Assertion for "save_and_exit" Button is present and disabled
        cy.get('#Select\\ Test > .my-2').contains("Select Test").should('have.text','Select Test').should('be.visible').and('exist').and('contain','Select').wait(500)    // Assertion for "Select Test" heading is present.            
        // Side bar icons color assertions
        cy.get('path[data-name="Path 5122"]').each(($el) => {                                                                                                             // Asserting each sidebar circle icon color in not filled.
        cy.wrap($el).should('have.attr', 'fill', 'none')})
        cy.get(':nth-child(2) > .rounded-md > .py-4 > .flex-wrap > .flex-col').scrollIntoView().should('be.visible').and('exist').click().wait(500)                       // Tapping to Tissue Cypher Test
        cy.get('path[data-name="Path 5122"]').should('have.attr', 'fill', '#18B5B7')                                                                                    // Asserting side bar Select text icon color is filled  
        
        // Billing Info Section
        cy.get('a[href="#Billing Information"] p', { timeout: 1000 }).should('have.text','Billing Information').should('be.visible').click()      // Asserting side bar billing information and clicked 
        cy.get('#billingInfo\\.icdCodeId', { timeout: 1000 }).click()                                                                                                     // Asserting icd 10 code is present and clicked
        cy.get(':nth-child(3) > .transparentBtn > .font-normal', { timeout: 1000 }).should('have.text','K22.719 BE with dysplasia, unspecified')
        .should('be.visible').and('exist').click()                                                                                                                        // Selecting third option from icd 10 code dropown
        cy.get('input[name="billingInfo.typeOfFacility"]').then($options => {                                                                                             // Seleting type of facility randomly.
        const randomIndex = Math.floor(Math.random() * $options.length) // pick 0, 1, or 2
        const chosen = $options[randomIndex]
            cy.wrap(chosen).click({ force: true})
            cy.log('Selected option: ' + chosen.value)
            // If it's the 3rd option (Hospital Inpatient), assert + fill DTP
            if (chosen.value === "Hospital Inpatient") {
                cy.get('#Billing\\ Information > .p-6 > :nth-child(4) > .false > .react-datepicker-wrapper > .react-datepicker__input-container > .w-full')
                .should('be.visible')
                .should('have.attr', 'placeholder', 'MM-DD-YYYY')
                .type('05-10-1975') // example date
                }
            })
            
        /* Additional Info section
        cy.get('[href="#Additional Information"] > .w-full > .font-normal').should('have.text','Additional Information').should('be.visible').and('exist').click().wait(1000)                                                                        // Selecting Additional Info from side menu
        cy.get('input[name="isAdditionalClinician"]').then($checkbox => {
        if ($checkbox.is(':disabled')) {
            cy.log('Checkbox is disabled, skipping...');
        } else {
            cy.wrap($checkbox).check({ force: true });
            cy.wrap($checkbox).should('be.checked');    
            //cy.get('.align-top > div > .mt-3').click()                                                                                    // tap to checkbox
            cy.get('.align-top > div > .mt-3 > .undefined').click().wait(1000)                                                                                 // tap to 2nd checkbox
            cy.get(':nth-child(3) > div > .mt-3 > span.undefined').should('have.text','By checking this box, I hereby acknowledge this clinician(s) will receive the final test report and associated PHI').should('be.visible').and('exist')
            cy.get('#firstName', { timeout: 1000 }).type('Jony')
            cy.get('#lastName', { timeout: 1000 }).type('way')
            cy.get('#npi', { timeout: 1000 }).type('5557774448')
            cy.get('#fax', { timeout: 1000 }).type('885-741-8852')
            cy.get('#email', { timeout: 1000 }).type('jony@gmail.com')
            cy.get('.flex > .mt-3 > .checkmark', { timeout: 1000 }).click()
            }
        });*/

            // Laboratory Setion
            cy.get('a[href="#Laboratory Information"] p').should('have.text','Laboratory Information').should('be.visible').and('exist').click().wait(1000)    // Selecting Laboratory Info from side menu
            cy.get('input[name="laboratoryInfo.typeOfSpecimen"]').then($options1 => {                                                                                     // Seleting type of Specimen randomly.
            const randomIndex1 = Math.floor(Math.random() * $options1.length) // pick 0, 1, or 2
            const chosen1 = $options1[randomIndex1]

           // Click the randomly selected input
            cy.wrap(chosen1).click({ force: true})    

            })

        cy.get('#laboratoryInfo\\.labortaryName').type('a').wait(1000)                                                                                                    // typing text in Name of facility
        cy.get(':nth-child(4) > .transparentBtn > .font-normal').click().wait(500)                                                                                        // Select 4th option
        cy.get('.my-3.false > .flex-col > .react-datepicker-wrapper > .react-datepicker__input-container > .w-full').type('05-16-2025')                                   // date input

        // Supporting doc section
        cy.get('a[href="#Supporting Documents"] p').click().wait(500)
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
        
        //cy.get('.flex-row > :nth-child(1) > span > .secondaryBtn').contains("Review").should('have.text','Review').should('be.visible').and('exist').click().wait(500)                             // Assertion for "review" Button is present
        
         cy.get(':nth-child(2) > span > .secondaryBtn').should('contain.text', 'Save and Exit').and('be.enabled').click().wait(50000)                                   // Assertion for "save_and_exit" Button is present and disabled   
         cy.get(':nth-child(1) > .lg\\:right-0 > .py-1').should('have.text', 'Pending Submission').should('be.visible').and('exist').wait(2000)                                        // Chwck the order status is pending submission  

        /* Getting the random section
        let statusText = "";

        cy.get('div.bg-sideNavGray svg').then(($svgs) => {
                let allGrey = true;

                $svgs.each((index, svg) => {
                    const $svg = Cypress.$(svg); // wrap for jQuery access
                    const fill = $svg.attr('fill') || $svg.find('circle').attr('fill');

                    if (fill === 'red' || fill === '#f00') {
                    allGrey = false;
                    }
                });

                if (allGrey) {
                    statusText = "Pending submission";
                } else {
                    statusText = "In Progress";
                }

                cy.log("Final Status: " + statusText);

                cy.get(':nth-child(2) > span > .secondaryBtn').should('contain.text', 'Save and Exit').and('be.enabled').click().wait(40000)                                      // Assertion for "save_and_exit" Button is present and disabled


                // ✅ Assert or use later
                expect(statusText).to.be.oneOf(["Pending submission", "In Progress"]);
                }).then(() => {
                // You can now use the saved variable `statusText`
                cy.log("Using Status Variable: " + statusText);

                // Example: Use in your flow
                if (statusText === "Pending submission") {
                    cy.log("➡️ Continue to submission flow");
                    cy.get(':nth-child(1) > .lg\:right-0 > .py-1').should('have.text', 'Pending submission').should('be.visible').and('exist')
                    
                } else {
                    cy.log("➡️ Continue to approval flow");
                    cy.get(':nth-child(1) > .lg\:right-0 > .py-1').should('have.text', 'In Progress').should('be.visible').and('exist')
                }
                });
        */


                                                                              // Order Creation and Save and Exit with In Progress status Flow //          
        
        cy.get('.primaryBtn').contains("New Online Order").should('be.visible').and('exist', { timeout: 5000 }).and('contain','Online Order').click()                     // New Online Order Btn Assertion
        cy.get('.my-4 > .my-2 > .bg-white').should('be.visible').and('exist').click().wait(500)                                                                           // All ORG Dropdown 
        cy.get('.rounded-md > .hover\\:bg-sideNavGray').click().wait(500)                                                                                                 // Select ORG from dropdown  
        cy.get('.my-4 > .my-2 > .bg-white').should('be.visible').and('exist').click().wait(500)                                                                           // All ORG Dropdown click
        cy.get('.rounded-md > .hover\\:bg-sideNavGray').click().wait(500)                                                                                                 // Select ORG from dropdown        
        cy.get('.p-6 > .flex-col > :nth-child(2) > .my-2 > .bg-white').click().wait(500)                                                                                  // Phy dropdown Assertion        
        cy.get('.rounded-md > :nth-child(1) > .w-full > .font-normal').click().wait(500)                                                                                  // Select Phy from dropdown
        cy.get('.justify-end > span > .primaryBtn').click().wait(500)                                                                                                     // Press next btn 

        // Flow 1: Create Order by input New paitent Name
        cy.get('.p-6 > .patientSearchContainer > .block > .my-3 > .relative > .font-sans').type('QA').wait(1000)                                                          // Input Patient Name
        cy.get('.py-2 > .undefined').click().wait(500)                                                                                                                    // Press ADD btn to add new patient
        cy.get('#firstName').type('Deens').wait(500)                                                                                                                      // Add First Name
        cy.get('#lastName').type('Oram').wait(500)                                                                                                                        // Add Last Name
        cy.get('.mr-\\[3\\.5\\%\\] > .flex-col > .react-datepicker-wrapper > .react-datepicker__input-container > .w-full').type('05-16-1975')                            // Add DOB
        cy.get('#gender').click().wait(500)                                                                                                                               // Tap gender dropdown
        cy.get(':nth-child(1) > .transparentBtn > .font-normal').click().wait(500)                                                                                        // Select Male
        cy.get(':nth-child(2) > .primaryBtn').click().wait(500)                                                                                                           // Tap to Next btn
        cy.get(':nth-child(2) > .primaryBtn').click().wait(500)                                                                                                           // Tap to Next btn again
        cy.get(':nth-child(2) > .primaryBtn').click().wait(1000)                                                                                                          // Tap to Proceed to order btn
        cy.get('.flex-row > :nth-child(1) > span > .secondaryBtn').contains("Review").should('have.text','Review').should('be.visible').and('exist').wait(500)            // Assertion for "review" Button is present
        cy.get('button.secondaryBtn').should('contain.text', 'Save and Exit').and('be.disabled').wait(500)                                                                // Assertion for "save_and_exit" Button is present and disabled
        cy.get('#Select\\ Test > .my-2').contains("Select Test").should('have.text','Select Test').should('be.visible').and('exist').and('contain','Select').wait(500)    // Assertion for "Select Test" heading is present.            
        // Side bar icons color assertions
        cy.get('path[data-name="Path 5122"]').each(($el) => {                                                                                                             // Asserting each sidebar circle icon color in not filled.
        cy.wrap($el).should('have.attr', 'fill', 'none')})
        cy.get(':nth-child(2) > .rounded-md > .py-4 > .flex-wrap > .flex-col').scrollIntoView().should('be.visible').and('exist').click().wait(500)                       // Tapping to Tissue Cypher Test
        cy.get('path[data-name="Path 5122"]').should('have.attr', 'fill', '#18B5B7')                                                                                    // Asserting side bar Select text icon color is filled  
        
        // Billing Info Section
        cy.get('a[href="#Billing Information"] p', { timeout: 1000 }).should('have.text','Billing Information').should('be.visible').click()        // Asserting side bar billing information and clicked 
        cy.get('#billingInfo\\.icdCodeId', { timeout: 1000 }).click()                                                                                                     // Asserting icd 10 code is present and clicked
        cy.get(':nth-child(3) > .transparentBtn > .font-normal', { timeout: 1000 }).should('have.text','K22.719 BE with dysplasia, unspecified')
        .should('be.visible').and('exist').click()                                                                                                                        // Selecting third option from icd 10 code dropown
        cy.get('input[name="billingInfo.typeOfFacility"]').then($options => {                                                                                             // Seleting type of facility randomly.
        const randomIndex = Math.floor(Math.random() * $options.length) // pick 0, 1, or 2
        const chosen = $options[randomIndex]
            cy.wrap(chosen).click({ force: true})
            cy.log('Selected option: ' + chosen.value)
            // If it's the 3rd option (Hospital Inpatient), assert + fill DTP
            if (chosen.value === "Hospital Inpatient") {
                cy.get('#Billing\\ Information > .p-6 > :nth-child(4) > .false > .react-datepicker-wrapper > .react-datepicker__input-container > .w-full')
                .should('be.visible')
                .should('have.attr', 'placeholder', 'MM-DD-YYYY')
                .type('05-10-1975') // example date
                }
            })
            
        /* Additional Info section
        cy.get('a[href="#Additional Information"] p').should('have.text','Additional Information').should('be.visible').and('exist').click().wait(1000).click().wait(500)                                                                         // Selecting Additional Info from side menu

        cy.get('input[name="isAdditionalClinician"]').then($checkbox => {
        if ($checkbox.is(':disabled')) {
            cy.log('Checkbox is disabled, skipping...');
        } else {
            cy.wrap($checkbox).check({ force: true });
            cy.wrap($checkbox).should('be.checked');    
            cy.get('.align-top > div > .mt-3 > .undefined').click().wait(1000)                                                                                 // tap to 2nd checkbox
            cy.get(':nth-child(3) > div > .mt-3 > span.undefined').should('have.text','By checking this box, I hereby acknowledge this clinician(s) will receive the final test report and associated PHI').should('be.visible').and('exist')
            cy.get('#firstName', { timeout: 1000 }).type('Jony')
            cy.get('#lastName', { timeout: 1000 }).type('way')
            cy.get('#npi', { timeout: 1000 }).type('5557774448')
            cy.get('#fax', { timeout: 1000 }).type('885-741-8852')
            cy.get('#email', { timeout: 1000 }).type('jony@gmail.com')
            cy.get('.flex > .mt-3 > .checkmark', { timeout: 1000 }).click()
            }
        });*/

        /* Laboratory Setion 
        cy.get('a[href="#Laboratory Information"] p').should('have.text','Laboratory Information').should('be.visible').and('exist').click().wait(1000)    // Selecting Laboratory Info from side menu
        cy.get('input[name="laboratoryInfo.typeOfSpecimen"]').then($options1 => {                                                                                     // Seleting type of Specimen randomly.
        const randomIndex1 = Math.floor(Math.random() * $options1.length) // pick 0, 1, or 2
        const chosen1 = $options1[randomIndex1]
        cy.wrap(chosen1).click({ force: true})    })
        cy.get('#laboratoryInfo\\.labortaryName').type('a').wait(1000)                                                                                                    // typing text in Name of facility
        cy.get(':nth-child(4) > .transparentBtn > .font-normal').click().wait(500)                                                                                        // Select 4th option
        cy.get('.my-3.false > .flex-col > .react-datepicker-wrapper > .react-datepicker__input-container > .w-full').type('05-16-2025') */                                  // date input

        // Supporting doc section
        cy.get('a[href="#Supporting Documents"] p').click().wait(500)
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
        
        //cy.get('.flex-row > :nth-child(1) > span > .secondaryBtn').contains("Review").should('have.text','Review').should('be.visible').and('exist').click().wait(500)                             // Assertion for "review" Button is present
        
         cy.get(':nth-child(2) > span > .secondaryBtn').should('contain.text', 'Save and Exit').and('be.enabled').click().wait(50000)                                                         // Assertion for "save_and_exit" Button is present and disabled   
         cy.get(':nth-child(1) > .lg\\:right-0 > .py-1').should('have.text', 'In Progress').should('be.visible').and('exist')                                             // Chwck the order status is pending submission
         cy.get('.rounded-full > .max-w-\\[316px\\] > .h-full').click().wait(500)
         cy.get('.py-2 > .font-normal', { timeout: 5000 }).click().wait(5000)      

        /* Getting the random section
        let statusText = "";

        cy.get('div.bg-sideNavGray svg').then(($svgs) => {
                let allGrey = true;

                $svgs.each((index, svg) => {
                    const $svg = Cypress.$(svg); // wrap for jQuery access
                    const fill = $svg.attr('fill') || $svg.find('circle').attr('fill');

                    if (fill === 'red' || fill === '#f00') {
                    allGrey = false;
                    }
                });

                if (allGrey) {
                    statusText = "Pending submission";
                } else {
                    statusText = "In Progress";
                }

                cy.log("Final Status: " + statusText);

                cy.get(':nth-child(2) > span > .secondaryBtn').should('contain.text', 'Save and Exit').and('be.enabled').click().wait(40000)                                      // Assertion for "save_and_exit" Button is present and disabled


                // ✅ Assert or use later
                expect(statusText).to.be.oneOf(["Pending submission", "In Progress"]);
                }).then(() => {
                // You can now use the saved variable `statusText`
                cy.log("Using Status Variable: " + statusText);

                // Example: Use in your flow
                if (statusText === "Pending submission") {
                    cy.log("➡️ Continue to submission flow");
                    cy.get(':nth-child(1) > .lg\:right-0 > .py-1').should('have.text', 'Pending submission').should('be.visible').and('exist')
                    
                } else {
                    cy.log("➡️ Continue to approval flow");
                    cy.get(':nth-child(1) > .lg\:right-0 > .py-1').should('have.text', 'In Progress').should('be.visible').and('exist')
                }
                });
        */



    })    
})
          






    