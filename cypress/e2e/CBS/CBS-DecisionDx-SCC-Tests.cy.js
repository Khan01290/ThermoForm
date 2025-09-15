import 'cypress-file-upload'

describe('DecisionDx-SCC Online Order Submission Suite', function() {
    /*
    it("Verify that DecisionDx-SCC Online Order Created and Submitted Successfully", function()  {

        cy.viewport(1920, 1081)
        cy.visit("https://demo.clabsportal.com/") 
        
        // Login Button Click
        ////cy.get(".text-lg").contains("Existing Customer")                                                                                                // Assertion for text "Existing Customer" is present
        cy.wait(500)
        //cy.get(".w-full").contains("login").should('be.visible').and('exist').and('contain','login').click()                                              // Click to Login button and check if the btn text is "login"       
        cy.get('[type="button"]').contains("login").should('be.visible').and('exist').and('contain','login').click().wait(500)	                            // Click to Login button usimg btn type    >> Best Practise
               
        // Input username
        cy.origin('https://dev-2737508.okta.com', () => {        
            cy.wait(500)
            cy.get('input[name="username"]').type("silijac368@paldept.com")                                                                                 // Get username by attribute name and type in it
            cy.get('input[name="username"]').should('have.value','silijac368@paldept.com')                                                                  // Check username if the username is correctly input            
            cy.get('input[name="password"]').type("Cv8cf3iHa")                                                                                              // Get password by attribute name and type in it
            cy.get('input[name="password"]').should('have.value','Cv8cf3iHa')                                                                               // Check password if the password is correctly input
            //cy.get("input#okta-signin-submit").should('be.visible').and('exist').and('contain','Sign In').click()                                         // Get submit btn and check if the btn text is "Sign In" 
            cy.get('[type="submit"]').contains("Sign In").should('be.visible').and('exist').and('contain','Sign In').click().wait(20000)                    // Get submit btn by btn type and cick on it   >> Best Practise                    
        })
        
        cy.get('[href="/test-orders"] > .flex', { timeout: 80000 }).contains("test orders").should('be.visible').and('exist').and('contain','orders').click().wait(2000)        // Check the URL containing test-orders link           
        cy.get('.flex > .capitalize').contains("Test orders").should('have.text','Test orders').should('be.visible').and('exist')                           // Assertion for "Test orders" Page heading is present
        .and('contain','Test orders').wait(500)                       
        cy.get('#root > div.h-screen.flex.flex-col.overflow-hidden > header > div:nth-child(2) > div > div:nth-child(2) > div > button')                    // Click to Cilinician dropdown to select Cilinician           
        .should('be.visible').and('exist').click().wait(500)
        cy.get(':nth-child(2) > .flex > .text-sm > .break-normal').contains("SZK PHY QA").should('be.visible').should('have.text','SZK PHY QA')             // Select a Cilinician from dropdown 
        .and('exist').click().wait(500)     
        cy.get('[type="button"]').contains("new online order").should('have.text','new online order').should('be.visible')                                  // Assertion for "New Online Order" Button is present and clicked
        .and('exist').and('contain','new online').click().wait(1000)                        
        cy.get('#discard').contains("discard").should('have.text','discard').should('be.visible').and('exist').and('contain','discard').click().wait(500)   // Assertion for "Discard" Button is present and clicked
        cy.get('.p-5 > .mt-4').contains("Are you sure you want to exit? all the changes will be discarded")                                                 // Assertion for "Discard popup Text" is present.
        .should('have.text','Are you sure you want to exit? all the changes will be discarded').should('be.visible').and('exist')
        .and('contain','exit').click().wait(500)           
        cy.get('#cancel').contains("cancel").should('have.text','cancel').should('be.visible').and('exist').and('contain','cancel').click().wait(500)       // Assertion for "cancel" Button on Discard popup is present and clicked                
        cy.get('[type="button"]').contains("save and exit").should('have.text','save and exit').should('be.visible').and('exist')                           // Assertion for "save_and_exit" Button is present.
        .and('contain','save and exit').click().wait(500)
        cy.get('.Toastify__toast-body > div:nth-child(2)').contains("Please select test type in order to save")                                             // Assertion for validation alert for "save_and_exit" Button on Discard popup is present
        .should('have.text','Please select test type in order to save').should('be.visible').and('exist').and('contain','save').click().wait(500)               
        cy.get('#review').contains("review").should('have.text','review').should('be.visible').and('exist').and('contain','review').click().wait(500)       // Assertion for "review" Button is present and clicked
        cy.get(':nth-child(6) > .flex > .break-normal').contains("supporting documents").should('have.text','supporting documents')                         // Assertion for "Supporting Documents" heading should be present on left side    
        .should('be.visible').and('exist').and('contain','supporting').click().wait(1000)              
        cy.get('.col-span-1 > :nth-child(1) > .flex > .break-normal').contains("Select Test").should('have.text','Select Test')                             // Assertion for "Supporting Documents" heading should be present on left side    
        .should('be.visible').and('exist').and('contain','Select').click().wait(1000)        
        cy.get('#edit').contains("edit").should('have.text','edit').should('be.visible').and('exist').and('contain','edit').click().wait(500)
        cy.get('p[data-for="Send for Approval"]').parent('[type="button"]').should('be.disabled').wait(500)                                                 // Assertion for "Send for Approval" Button is present and disabled
        cy.get('.sticky > :nth-child(3) > .uppercase').contains("Select Test").should('have.text','Select Test').should('be.visible').and('exist')          // Assertion for "Select Test" heading is present.    
        .and('contain','Select').wait(500)
        cy.get('circle[data-name="Ellipse 588"]').should('have.css', 'fill', 'none')                                                                        // Assertion for "Select Test" checkmark color should be none
        cy.get('input[id="1"]').should('not.be.checked')                                                                                                    // Assertion for "TissueCypher" Test should be not checked
        cy.get('input[id="2"]').should('not.be.checked')                                                                                                    // Assertion for "DecisionDx-SCC" Test should be not checked
        cy.get('input[id="3"]').should('not.be.checked')                                                                                                    // Assertion for "DecisionDx-Melanoma" Test should be not checked
        cy.get('input[id="6"]').should('not.be.checked')                                                                                                    // Assertion for "DecisionDx-CMSeq" Test should be not checked
        cy.get('input[id="5"]').should('not.be.checked')                                                                                                    // Assertion for "MyPath Melanoma" Test should be not checked
        cy.get('input[id="4"]').should('not.be.checked')                                                                                                    // Assertion for "DecisionDx-UM" Test should be not checked
        cy.get('input[id="7"]').should('not.be.checked')                                                                                                    // Assertion for "DecisionDx-UMSeq" Test should be not checked
        cy.get('input[id="8"]').should('not.be.checked')                                                                                                    // Assertion for "IDgenetix" Test should be not checked
            
        //DecisionDx-SCC Test Creation
        cy.get(':nth-child(2) > :nth-child(2) > .w-3\\/5 > .mr-4 > .ml-2')        
        .contains("DecisionDx-SCC: Predicts risk of metastasis in patients with one or more risk factors in Squamous Cell Carcinoma")                       // Assertion for "DecisionDx-SCC" Test should be present
        .should('have.text','DecisionDx-SCC: Predicts risk of metastasis in patients with one or more risk factors in Squamous Cell Carcinoma')
        .should('be.visible').and('exist').and('contain','DecisionDx-SCC').click().wait(500)                                                                      
        cy.get('input[id="2"]').should('be.checked')                                                                                                        // Assertion for "DecisionDx-SCC" Test should be checked
        cy.get('.break-normal').contains("Select Test").should('have.text','Select Test').should('be.visible')                                              // Assertion for "Select Test" heading should be present on page        
        .and('exist').and('contain','Select').click().wait(500)
        cy.get('svg').find('path[fill="#18B5B7"]').should('have.attr', 'stroke', 'white')                                                                   // Assertion for "Patient Information" checkmark color should be red
        cy.get('.transition-all').contains("14%").should('have.text','14%').should('be.visible').and('exist').and('contain','14%').wait(500)                // Assertion for "progress Bar" 14% should be moved on Select Test Step
        
        // Patient Information Section
        cy.get(':nth-child(2) > .flex > .break-normal').contains("Patient Information").should('have.text','Patient Information')                           // Assertion for "Patient Information" heading should be present on left side    
        .should('be.visible').and('exist').and('contain','Patient').click().wait(5000)
        cy.get('svg').find('path[fill=none]').should('have.attr', 'stroke', '#d0d4db')                                                                      // Assertion for "Patient Information" checkmark color should be none 
        cy.get('.mt-5 > .text-base').contains("Patient Information").should('have.text','Patient Information')                                              // Assertion for "Patient Information" heading should be present on page            
        .should('be.visible').and('exist').and('contain','Patient').wait(500)        
        cy.get('[type="button"]').contains("new").should('have.text','new').should('be.visible').should('have.css', 'fill', 'rgb(0, 0, 0)')	                // Assertion for button "New" should be present on page               >> Best Practise
        .and('exist').and('contain','new').wait(500)            
        cy.get('input[name="patient_firstname"]').first().focus().wait(500)                                                                                 // Taking focus on patient_firstname                    
        cy.get('input[name="patient_lastname"]').first().focus().wait(500)                                                                                  // Taking focus on patient_lastname        
        cy.get(':nth-child(5) > .mr-5 > .react-datepicker-wrapper > .react-datepicker__input-container > .py-2').click().wait(1000)                         // Tapping to "patient DOB" Datepicker
        cy.get('.react-datepicker__year-read-view--selected-year').click().wait(1000)                                                                       // Selecting year fron DTP
        cy.get(':nth-child(51)').click().wait(1000)                                                                                                         // Tapping to year        
        cy.get(':nth-child(1) > .react-datepicker__day--001').click().wait(1000)                                                                            // Selecting date fron DTP
        cy.get('input[name="patient_gender"]').first().focus().wait(500)                                                                                    // Taking focus on patient_gender                                    
        cy.get('input[name="patient_gender"]').first().blur().wait(500)                                                                                     // Making blur on patient_gender                                    
        cy.get('.mt-1').contains("First name is required!").should('have.text','First name is required!')                                                   // Assertion for "First name is required!" validation message
        .should('exist').and('contain','First name').wait(500)
        cy.get(':nth-child(4) > .mt-1').contains("Last name is required!").should('have.text','Last name is required!')                                     // Assertion for "Last name is required!" validation message
        .should('exist').and('contain','Last name').wait(500)
        cy.get(':nth-child(5) > :nth-child(2) > .mt-1').contains("Sex at Birth is required").should('have.text','Sex at Birth is required')                 // Assertion for "Sex at Birth is required" validation message
        .should('be.visible').and('exist').and('contain','Sex at Birth').wait(500)
        cy.get('input[name="patient_firstname"]').type('QA Pateint One')                                                                                    // Taking input for "patient_firstname"        
        cy.get('input[name="patient_lastname"]').type('Automated test')                                                                                     // Taking input for "patient_lastname" 
        cy.get('input[name="patient_gender"]').click().wait(1000)                                                                                           // Tpping to "patient_gender" dropdown
        cy.get('.shadow-md > :nth-child(1)').contains("Female").should('have.text','Female').and('exist')                                                   // Taking input for "patient_gender"
        .and('contain','Female').click().wait(500)
        cy.get('.transition-all').contains("29%").should('have.text','29%').should('be.visible').and('exist').and('contain','29%').wait(500)                // Assertion for "progress Bar" 29% should be moved on Select Test Step
        
        // Patient Contact Information Section
        // patient_email
        cy.get('input[name="patient_email"]').type('abc').wait(500)                                                                                         // Taking invalid input for "patient_email"        
        cy.get(':nth-child(3) > .mt-1').contains("Email ID is invalid!").should('have.text','Email ID is invalid!')                                         // Assertion for "Email ID is invalid!" validation message
        .should('be.visible').and('exist').and('contain','Email ID').wait(500)    
        cy.get('input[name="patient_email"]').clear().wait(500)                                                                                             // Making input "Email ID" clear
        cy.get('input[name="patient_email"]').type('abcabc@gmail.com').wait(500)                                                                            // Taking valid input for "patient_email"        
        // patient_state
        cy.get('input[name="patient_state"]').click().wait(500)                                                                                             // Tapping to patient_state 
        cy.get('.shadow-md > :nth-child(2)').contains("Alaska").should('have.text','Alaska')                                                                // Selecting a value from dropdown should be present
        .should('be.visible').and('exist').and('contain','Alaska').click().wait(500)    
        // patient_city
        cy.get('input[name="patient_city"]').click().wait(500)                                                                                              // Tapping to patient_city 
        cy.get('.shadow-md > :nth-child(2)').contains("Aleutians East Borough").should('have.text','Aleutians East Borough')                                // Selecting a value from dropdown should be present
        .should('be.visible').and('exist').and('contain','Aleutians').click().wait(500)
        // patient_phone
        cy.get('input[name="patient_phone"]').type('123').wait(500)                                                                                         // Taking invalid input for "patient_phone"    
        cy.get(':nth-child(6) > .mr-5 > .mt-1').contains("Phone must contain 10 digits with following format 000-000-0000.")                                // Assertion for invalid "patient_phone" validation message
        .should('have.text','Phone must contain 10 digits with following format 000-000-0000.').should('be.visible').and('exist')                           
        .and('contain','10 digits').wait(500)                
        cy.get('.transition-all').contains("14%").should('have.text','14%').should('be.visible').and('exist').and('contain','14%').wait(500)                // Assertion for "progress Bar" 14% should be moved on Select Test Step    
        cy.get('svg').find('path[fill=none]').should('have.attr', 'stroke', '#d0d4db')                                                                      // Assertion for "Patient Information" checkmark color should be none 
        cy.get('input[name="patient_phone"]').clear().wait(500)                                                                                             // Making input "patient_phone" clear    
        cy.get('input[name="patient_phone"]').type('232-323-2323').wait(500)                                                                                // Taking valid input for "patient_phone"    
        // patient_zip_code
        cy.get('input[name="patient_zip_code"]').type('123').wait(500)                                                                                      // Taking invalid input for "patient_zip_code"    
        cy.get(':nth-child(6) > .relative > .mt-1').contains("Zip code length must equal to 5")                                                             // Assertion for invalid "patient_zip_code" validation message
        .should('have.text','Zip code length must equal to 5').should('be.visible').and('exist').and('contain','equal to 5').wait(500)                                                   
        cy.get('.transition-all').contains("14%").should('have.text','14%').should('be.visible').and('exist').and('contain','14%').wait(500)                // Assertion for "progress Bar" 14% should be moved on Select Test Step        
        cy.get('svg').find('path[fill=none]').should('have.attr', 'stroke', '#d0d4db')                                                                      // Assertion for "Patient Information" checkmark color should be none
        cy.get('input[name="patient_zip_code"]').clear().wait(500)                                                                                          // Making input "patient_zip_code" clear    
        cy.get('input[name="patient_zip_code"]').type('38574').wait(500)                                                                                    // Taking valid input for "patient_zip_code"    
        cy.get('.transition-all').contains("29%").should('have.text','29%').should('be.visible').and('exist').and('contain','29%').wait(500)                // Assertion for "progress Bar" 29% should be moved on Select Test Step
        cy.get('svg').find('path[fill="#18B5B7"]').should('have.attr', 'stroke', 'white')                                                                   // Assertion for "Patient Information" checkmark color should be red

        // BILLING INFORMATION Section
        cy.get(':nth-child(3) > .flex > .break-normal').contains("billing information").should('have.text','billing information')                           // Assertion for "billing information" heading should be present on left side    
        .should('be.visible').and('exist').and('contain','billing').click().wait(5000)
        cy.get(':nth-child(3) > .flex > .text-left').find('path[fill=none]').should('be.visible')                                                           // Assertion for "billing information" checkmark color should be none 
        cy.get('.transition-all').contains("29%").should('have.text','29%').should('be.visible').and('exist').and('contain','29%').wait(500)                // Assertion for "progress Bar" 29% should be moved on Select Test Step    
        //cy.get('.mt-5 > .text-base').contains("Billing Information").should('have.text','Billing Information')                                            // Assertion for "billing information" heading should be present on section            
        //.should('be.visible').and('exist').and('contain','Billing').wait(500)  
        cy.get('input[name="icd_10"]').click().wait(1000)                                                                                                   // Tapping to icd_10 dropdown
        cy.get('.flex > .shadow-md').within(() => {                                                                                                         // Verifying all three dropdown values
            cy.contains('C44.02 Squamous cell carcinoma of skin of lip').should('be.visible')
            cy.contains('C44.121 Squamous cell carcinoma of skin of unspecified eyelid, including canthus').should('be.visible').and('exist')
            cy.contains('C44.1221 Squamous cell carcinoma of skin of upper eyelid, including canthus').should('be.visible').and('exist')
            cy.contains('C44.1222 Squamous cell carcinoma of skin of right lower eyelid, including canthus').should('be.visible').and('exist')
            cy.contains('C44.1291 Squamous cell carcinoma of skin of left upper eyelid, including canthus').should('exist')
            cy.contains('C44.1292 Squamous cell carcinoma of skin of left lower eyelid, including canthus').should('exist')
            cy.contains('C44.221 Squamous cell carcinoma of skin of unspecified ear and external auricular canal').should('exist')
            cy.contains('C44.222 Squamous cell carcinoma of skin or right ear and external auricular canal').should('exist')
            cy.contains('C44.229 Squamous cell carcinoma of skin or left ear and external auricular canal').should('exist')
            cy.contains('C44.320 Squamous cell carcinoma of skin of unspecified parts of face').should('exist')
            cy.contains('C44.321 Squamous cell carcinoma of skin of nose').should('exist')
            cy.contains('C44.329 Squamous cell carcinoma of skin of other parts of face').should('exist')
            cy.contains('C44.42 Squamous cell carcinoma of skin of scalp and neck').should('exist')
            cy.contains('C44.520 Squamous cell carcinoma of anal skin').should('exist')
            cy.contains('C44.521 Squamous cell carcinoma of skin of breast').should('exist')
            cy.contains('C44.529 Squamous cell carcinoma of skin of other part of trunk').should('exist')
            cy.contains('C44.621 Squamous cell carcinoma of skin of unspecified upper limb, including shoulder').should('exist')
            cy.contains('C44.622 Squamous cell carcinoma of skin of right upper limb, including shoulder').should('exist')
            cy.contains('C44.629 Squamous cell carcinoma of skin of left upper limb, including shoulder').should('exist')
            cy.contains('C44.721 Squamous cell carcinoma of skin of unspecified lower limb, including hip').should('exist')
            cy.contains('C44.722 Squamous cell carcinoma of skin of right lower limb, including hip').should('exist')
            cy.contains('C44.729 Squamous cell carcinoma of skin of left lower limb, including hip').should('exist')
            cy.contains('C44.82 Squamous cell carcinoma of overlapping sites of skin').should('exist')
            cy.contains('C44.92 Squamous cell carcinoma of skin, unspecified').should('exist')
        })

        cy.get('.shadow-md > :nth-child(3)').contains("C44.121 Squamous cell carcinoma of skin of unspecified eyelid, including canthus")                   // Selectimg C44.121 Squamous cell...... from dropsown                         
        .should('have.text','C44.121 Squamous cell carcinoma of skin of unspecified eyelid, including canthus')      
        .should('be.visible').and('exist').and('contain','C44.121').click().wait(5000)        
        cy.get('input[name="billing_phone"]').should('be.visible').type('123').blur().wait(500)                                                             // Taking invalid input for "phone"    
        cy.get('p.text-xs').contains("Phone must contain 10 digits with following format 000-000-0000.")                                                    // Assertion for invalid "phone" validation message
        .should('have.text','Phone must contain 10 digits with following format 000-000-0000.').should('be.visible').and('exist')                           
        .and('contain','format 000-000-0000').wait(500)
        cy.get('input[name="billing_phone"]').should('be.visible').clear().wait(500)                                                                        // Making input "phone" clear    
        cy.get('input[name="billing_phone"]').should('be.visible').type('232-323-2323').wait(500)                                                           // Taking valid input for "phone"        
        cy.get('input#non_hospital').check({ force: true })                                                                                                 // Check the radio button "non_hospital" forcefully
        cy.get('input#non_hospital').should('be.checked')                                                                                                   // Assert that the radio button "non_hospital" is checked
        cy.get('input#out_patient').check({ force: true })                                                                                                  // Check the radio button "out_patient" forcefully
        cy.get('input#out_patient').should('be.checked')                                                                                                    // Assert that the radio button "out_patient" is checked
        cy.get('input#in_patient').check({ force: true })                                                                                                   // Check the radio button "Hospital Inpatient" forcefully
        cy.get('input#in_patient').should('be.checked')                                                                                                     // Assert that the radio button "Hospital Inpatient" is checked
        cy.get('input[placeholder="MM/DD/YYYY"]').eq(1).click().wait(500)                                                                                   // Tapping to "Date of Discharge" Datepicker
        cy.get(':nth-child(1) > .react-datepicker__day--001').click().wait(1000)                                                                            // Selecting date fron DTP
        cy.get(':nth-child(3) > .flex > .text-left').find('path[fill="#18B5B7"]').should('be.visible')                                                      // Assertion for "billing_information" checkmark color should be red 
        cy.get('.transition-all').contains("43%").should('have.text','43%').should('be.visible').and('exist').and('contain','43%').wait(500)                // Assertion for "progress Bar" 43% should be moved on billing_information Step    
        
        // Clinical Information Section
        cy.get(':nth-child(4) > .flex > .break-normal').contains("Clinical Information").should('have.text','Clinical Information')                         // Assertion for "Clinical Information" heading should be present on left side    
        .should('be.visible').and('exist').and('contain','Clinical').click().wait(1000)     
        cy.get(':nth-child(1) > :nth-child(5) > div > #\\34').click().wait(500)                                                                             // Making "Tumor location on...." check mark true 
        cy.get('.transition-all').contains("57%").should('have.text','57%').should('be.visible').and('exist').and('contain','57%').wait(500)                // Assertion for "progress Bar" 57% should be moved on billing_information Step    
        
        // ADDITIONAL INFORMATION Section
        cy.get(':nth-child(5) > .flex > .break-normal').contains("Additional Information").should('have.text','Additional Information')                   // Assertion for "Additional Information" heading should be present on left side    
        .should('be.visible').and('exist').and('contain','Additional').click().wait(1000)
        cy.get('input[name="has_additional_clinician"]').click().wait(500)                                                                                  // Making "has_additional_clinician" check mark true 
        cy.get('input[name="attestation"]').click().wait(500)                                                                                               // Making "attestation" check mark true 
        cy.get('.flex.justify-between > .flex > .text-base').contains("Additional Clinician 1").should('have.text','Additional Clinician 1')                // Assertion for "Additional Clinician 1" heading should be present on right frame    
        .should('be.visible').and('exist').and('contain','Additional').wait(500)
        cy.get('[type="button"]').should('be.visible').and('exist').wait(500)                                                 	                            // Verify that cross button is pesent on additional cilinicain frame
        cy.get('button > .mr-2').should('be.visible').and('exist').click().wait(500)                                                                        // Verify that cross button is pesent on additional cilinicain frame and clicked        
        cy.get('input[name="has_additional_clinician"]').click().wait(500)                                                                                  // Making "has_additional_clinician" check mark true again
        cy.get('input[name="attestation"]').click().wait(500)                                                                                               // Making "attestation" check mark true again
        cy.get('input[name="additionalClinician[0].firstName').first().focus().wait(500)                                                                    // Making focus on additionalClinician firstName                    
        cy.get('input[name="additionalClinician[0].lastName').first().focus().wait(500)                                                                     // Making focus on additionalClinician lastName                    
        cy.get('input[name="additionalClinician[0].npi').first().focus().wait(500)                                                                          // Taking focus on additionalClinician npi
        cy.get('input[name="additionalClinician[0].fax').first().focus().wait(500)                                                                          // Taking focus on additionalClinician fax
        cy.get(':nth-child(2) > :nth-child(1) > .text-requiredRed').contains("First Name is required!").should('have.text','First Name is required!')       // Assertion for "First Name is required!" validation text
        .should('be.visible').and('exist').and('contain','First Name').wait(500)
        cy.get(':nth-child(2) > .text-requiredRed').contains("Last Name is required!").should('have.text','Last Name is required!')                         // Assertion for "Last Name is required!" validation text
        .should('be.visible').and('exist').and('contain','Last Name').wait(500)
        cy.get(':nth-child(3) > .relative > .text-requiredRed').contains("NPI is required!").should('have.text','NPI is required!')                         // Assertion for "NPI is required!" validation text
        .should('be.visible').and('exist').and('contain','NPI').wait(500)       
        cy.get('input[name="additionalClinician[0].firstName').type('Additional').wait(500)                                                                 // Taking input in additionalClinician firstName                    
        cy.get('input[name="additionalClinician[0].lastName').type('Clinician 1').wait(500)                                                                 // Taking input in additionalClinician lastName                    
        cy.get('input[name="additionalClinician[0].npi').type('23').wait(500)                                                                               // Taking invlid input in additionalClinician npi
        cy.get(':nth-child(3) > .relative > .text-requiredRed').contains("NPI must be a 10-digit number")                                                   // Assertion for "NPI must be a 10-digit number!" validation text
        .should('have.text','NPI must be a 10-digit number').should('be.visible').and('exist').and('contain','10-digit number').wait(500)
        cy.get('input[name="additionalClinician[0].npi').clear().wait(500)                                                                                  // Making clear additionalClinician npi
        cy.get('input[name="additionalClinician[0].npi').type('342322322322').wait(500)                                                                     // Taking more thna 10 digits in additionalClinician npi
        cy.get('input[name="additionalClinician[0].npi').clear().wait(500)                                                                                  // Making clear additionalClinician npi
        cy.get('input[name="additionalClinician[0].npi').type('2322322322').wait(500)                                                                       // Taking vlid input in additionalClinician npi
        cy.get(':nth-child(5) > .flex > .text-left').find('path[fill="#18B5B7"]').should('be.visible')                                                      // Assertion for "additional_cilinicain" checkmark color should be Grey 
        cy.get('input[name="additionalClinician[0].fax').type('232-32_-____').wait(500)                                                                     // Taking invlid input in additionalClinician fax
        cy.get(':nth-child(2) > .text-requiredRed').contains("Fax must contain 10 digits with the following format 000-000-0000")                           // Assertion for "Fax must contain 10 digits" validation text
        .should('have.text','Fax must contain 10 digits with the following format 000-000-0000')
        .should('be.visible').and('exist').and('contain','10 digits').wait(500)        
        cy.get(':nth-child(5) > .flex > .text-left').find('path[fill=none]').should('be.visible')                                                           // Assertion for "additional_cilinicain" checkmark color should be none        
        cy.get('input[name="additionalClinician[0].fax').clear().wait(500)                                                                                  // Making clear additionalClinician fax
        cy.get('input[name="additionalClinician[0].fax').type('232-323-2223').wait(500)                                                                     // Taking 10 digits in additionalClinician fax
        cy.get(':nth-child(5) > .flex > .text-left').find('path[fill="#18B5B7"]').should('be.visible')                                                      // Assertion for "additional_cilinicain" checkmark color should be Grey         
        cy.get('input[name="additionalClinician[0].email').type('sdsdsd').wait(500)                                                                         // Taking invlid input in additionalClinician email
        cy.get('input[name="additionalClinician[0].email').blur().wait(500)                                                                                 // Taking invlid input in additionalClinician email
        cy.get(':nth-child(4) > .text-requiredRed').contains("Email ID is invalid!").should('have.text','Email ID is invalid!')                             // Assertion for "Fax must contain 10 digits" validation text        
        .should('be.visible').and('exist').and('contain','Email ID').wait(500)        
        cy.get('.text-left svg').invoke('attr', 'fill').then((color) => {cy.expect(color).to.equal('#18B5B7')})                                             // Assertion for "additional_cilinicain" checkmark color should be Grey 
        cy.get('input[name="additionalClinician[0].email').clear().wait(500)                                                                                // Making clear additionalClinician email
        cy.get('input[name="additionalClinician[0].email').type('abc@gmail.com').wait(500)                                                                  // Taking vaid input in additionalClinician email
        cy.get(':nth-child(5) > .flex > .text-left').find('path[fill="#18B5B7"]').should('be.visible')                                                      // Assertion for "additional_cilinicain" checkmark color should be grey 
        cy.get('.transition-all').contains("71%").should('have.text','71%').should('be.visible').and('exist').and('contain','71%').wait(500)                // Assertion for "progress Bar" 71% should be moved on additional_cilinicain Step    
        
        //LABORATORY INFORMATION Section        
        cy.get(':nth-child(6) > .flex > .break-normal').contains("Laboratory Information").should('have.text','Laboratory Information')                     // Assertion for "Laboratory Information" heading should be present on left side    
        .should('be.visible').and('exist').and('contain','Laboratory').click().wait(1000)
        cy.get('.sticky > .text-royalBlue').contains("Laboratory Information").should('have.text','Laboratory Information')                                 // Assertion for "Laboratory Information" heading should be present on section heading
        .should('be.visible').and('exist').and('contain','Laboratory').wait(1000)
        cy.get('input[name="name_of_facility').type('Qa').wait(2000)                                                                                        // Taking input in select laboratory
        cy.get('.shadow-md > :nth-child(2)').contains("110 | AF PathLab QA").should('have.text','110 | AF PathLab QA')                                      // Assertion for "laboratory name" from dropdown and select
        .should('be.visible').and('exist').and('contain','AF PathLab QA').click().wait(500)
        cy.get(':nth-child(1) > .my-3 > .react-datepicker-wrapper > .react-datepicker__input-container > .py-2').click().wait(1000)                         // Tapping to "Date of Collection" Datepicker                        
        cy.get(':nth-child(1) > .react-datepicker__day--001').click().wait(1000)                                                                            // Selecting date fron DTP
        //cy.get(':nth-child(4) > .my-3 > .react-datepicker-wrapper > .react-datepicker__input-container > .py-2').click().wait(1000)                       // Tapping to "Medicare Pull Date" Datepicker                        
        //cy.get('.react-datepicker__day--006').click().wait(1000)                                                                                          // Selecting date fron DTP
        cy.get('.transition-all').contains("86%").should('have.text','86%').should('be.visible').and('exist').and('contain','86%').wait(500)                // Assertion for "progress Bar" 86% should be moved on LABORATORY INFORMATION Step    

        //Supporting Documents Section  
        cy.get(':nth-child(7) > .flex > .break-normal').contains("supporting documents").should('have.text','supporting documents')                         // Assertion for "Supporting Documents" heading should be present on left side    
        .should('be.visible').and('exist').and('contain','supporting').click().wait(5000)
        cy.get('.sticky > .text-royalBlue').contains("Supporting Documents").should('have.text','Supporting Documents')                                     // Assertion for "Supporting Documents" heading should be present on section heading
        .should('be.visible').and('exist').and('contain','Supporting')
        cy.get('div.mt-5:nth-child(1) > div:nth-child(2) > button:nth-child(1)')                                                                            // Uploading Pdf file as Pathology Report
        .attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'}).wait(10000)        
        cy.get('div.mt-5:nth-child(2) > div:nth-child(2) > button:nth-child(1)')                                                                            // Uploading .doc file as Insurance Cards/Billing Face Sheet
        .attachFile("test-plan-ryoulive.doc", {subjectType:'drag-n-drop'}).wait(10000)
        cy.get('button.ml-5').attachFile("Book1.xlsx", {subjectType:'drag-n-drop'}).wait(5000)                                                              // Uploading excel file as Patient Info/Demographics sheet and showing eror alert                                                                                          
        cy.get('button.ml-5').attachFile("ukbary-2.PNG", {subjectType:'drag-n-drop'}).wait(5000)                                                            // Uploading png file as Patient Info/Demographics sheet
        cy.get('.transition-all').contains("100%").should('have.text','100%').and('exist').and('contain','100%').wait(500)                                  // Assertion for "progress Bar" 100% should be moved on additional_cilinicain Step        
        cy.get(':nth-child(1) > .mt-auto > .items-start > :nth-child(2) > .w-full').click().wait(500)                                                       // Removing first file
        cy.get(':nth-child(2) > .mt-auto > .items-start > :nth-child(2) > .w-full').click().wait(500)                                                       // Removing second file
        cy.get(':nth-child(3) > .mt-auto > .items-start > :nth-child(2) > .w-full').click().wait(500)                                                       // Removing third file
        cy.get('.justify-end > div:nth-child(1) > div:nth-child(1) > button:nth-child(2)').contains("Skip").should('have.text','Skip')                      // Assertion for "Skip" button is present and clicked
        .should('be.visible').and('exist').and('contain','Skip').click().wait(500)
        cy.get('p[data-for="Send for Approval"]').parent('[type="button"]').should('be.enabled').wait(500)                                                  // Assertion for "Send for Approval" Button is present and enabled        
        cy.get('#isPhysicianSignPermission').should('be.visible').and('exist').click().wait(500)                                                            // "isPhysicianSignPermission" Button is present and clicked                
        cy.get('button.bg-primary:nth-child(4)').contains("Submit").should('have.text','Submit').should('be.visible').and('exist')                          // Assertion for Send for Approval changed with "Submit" Button is present and clicked
        .and('contain','Submit').click().wait(10000)    
    
    })
    */
    
    it("Verify DecisionDx-SCC Test Created and Submitted Flow", function()  {

        cy.viewport(1920, 1081)
        cy.visit("https://demo.clabsportal.com/")
        cy.get('[type="button"]').contains("login").should('be.visible').and('exist').and('contain','login').click().wait(500)	                                          // Click to Login button usimg btn type    >> Best Practise
               
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
        cy.get('.flex-wrap > :nth-child(4)').scrollIntoView().should('be.visible').and('exist').click().wait(500)                                                         // Tapping to DecisionDx-SCC Test
        cy.get('path[data-name="Path 5122"]').should('have.attr', 'fill', '#18B5B7')                                                                                    // Asserting side bar Select text icon color is filled  
        
        // Billing Info Section
        cy.get('[href="#Billing Information"] > .w-full > .font-normal', { timeout: 1000 }).should('have.text','Billing Information').should('be.visible').click()        // Asserting side bar billing information and clicked 
        cy.get('#billingInfo\\.icdCodeId', { timeout: 1000 }).click()                                                                                                     // Asserting icd 10 code is present and clicked
        cy.get(':nth-child(5) > .transparentBtn > .font-normal').should('have.text','C44.1291 Squamous cell carcinoma of skin of left upper eyelid, including canthus')
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
        //cy.get('[href="#Additional Information"] > .w-full > .font-normal').should('have.text','Additional Information').should('be.visible').and('exist').click().wait(1000)                                                                        // Selecting Additional Info from side menu
        //cy.get('input[name="isAdditionalClinician"]').then($checkbox => {
        //if ($checkbox.is(':disabled')) {
        //    cy.log('Checkbox is disabled, skipping...');
        //} else {
        //    cy.wrap($checkbox).check({ force: true });
        //    cy.wrap($checkbox).should('be.checked');    
          //  //cy.get('.align-top > div > .mt-3').click()                                                                                    // tap to checkbox
        //    cy.get('.align-top > div > .mt-3 > .undefined').click().wait(1000)                                                                                 // tap to 2nd checkbox
        //    cy.get(':nth-child(3) > div > .mt-3 > span.undefined').should('have.text','By checking this box, I hereby acknowledge this clinician(s) will receive the final test report and associated PHI').should('be.visible').and('exist')
        //    cy.get('#firstName', { timeout: 1000 }).type('Jony')
        //    cy.get('#lastName', { timeout: 1000 }).type('way')
        //    cy.get('#npi', { timeout: 1000 }).type('5557774448')
        //    cy.get('#fax', { timeout: 1000 }).type('885-741-8852')
        //    cy.get('#email', { timeout: 1000 }).type('jony@gmail.com')
        //    cy.get('.flex > .mt-3 > .checkmark', { timeout: 1000 }).click()
        //    }
        //});
            // Clinical Information Setion
            cy.get('[href="#Clinical Information"] > .w-full > .font-normal').should('have.text','Clinical Information').should('be.visible').and('exist').click().wait(1000)    // Selecting Clinical Info from side menu
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

            // Laboratory Setion
            cy.get('[href="#Laboratory Information"] > .w-full > .font-normal').should('have.text','Laboratory Information').should('be.visible').and('exist').click().wait(1000)    // Selecting Laboratory Info from side menu
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
        cy.get('[href="#Supporting Documents"] > .w-full > .font-semibold').click().wait(500)
        cy.get(':nth-child(2) > .max-w-\\[300px\\] > .font-normal').should('have.text','Pathology Report').should('be.visible').and('exist')
        cy.get(':nth-child(2) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
        cy.get(':nth-child(2) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        cy.get(':nth-child(3) > .max-w-\\[300px\\] > .font-normal').should('have.text','Patient Info / Demographics Sheet', { timeout: 5000 }).should('be.visible').and('exist')
        cy.get(':nth-child(3) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
        cy.get(':nth-child(3) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        cy.get(':nth-child(4) > .max-w-\\[300px\\] > .font-normal').should('have.text','Insurance Card / Billing Face Sheet', { timeout: 5000 }).should('be.visible').and('exist')
        cy.get(':nth-child(4) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
        cy.get(':nth-child(4) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        // Notes 
        cy.get('#notes').type('Testing notes')
        
        cy.get('.primaryBtn').click().wait(5000)                                                                                                                                     // Press Submit btn                                                                                                                                       
        cy.get('.justify-between > .w-full > .font-semibold').should('have.text','Test Submission').should('be.visible').and('exist')                                                // Test Submission Heading assertion
        cy.get(':nth-child(3) > .flex > span > .primaryBtn').should('have.text','Send for approval').should('be.visible').and('exist').click().wait(50000)                            // Send for approval btn click                                                                                                  
        cy.get('.text-3xl').should('have.text','Order Sent For Approval').should('be.visible').and('exist').wait(5000)                                                               // Order Sent For Approval assertion                                                                                                  
        cy.get('.grid-cols-1 > .border-r > .md\\:flex > [href="/access/test-orders"]', { timeout: 2000 }).contains("Test Orders")                                                    // Test Orders Tab click
        .should('be.visible').and('exist').and('contain','Orders').click().wait(5000)  
        cy.get(':nth-child(1) > .lg\\:right-0 > .py-1').should('have.text', 'Pending Approval').should('be.visible').and('exist').wait(2000)                                        // Chwck the order status is pending submission  
        cy.get('.rounded-full > .max-w-\\[316px\\] > .h-full').click().wait(500)
        cy.get('.py-2 > .font-normal', { timeout: 5000 }).click().wait(5000)      

        //cy.get('.flex-row > :nth-child(1) > span > .secondaryBtn').contains("Review").should('have.text','Review').should('be.visible').and('exist').click().wait(500)             // Assertion for "review" Button is present
        //cy.get('button.secondaryBtn').should('contain.text', 'Save and Exit').and('be.enabled').click().wait(2000)                                                                 // Assertion for "save_and_exit" Button is present and disabled
        
    })
    
    
    it("Verify DecisionDx-SCC Test Created with Save and Exit Flow", function()  {

        cy.viewport(1920, 1081)
        cy.visit("https://demo.clabsportal.com/")
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
        cy.get('.flex-wrap > :nth-child(4)').scrollIntoView().should('be.visible').and('exist').click().wait(500)                                                         // Tapping to DecisionDx-SCC Test
        cy.get('path[data-name="Path 5122"]').should('have.attr', 'fill', '#18B5B7')                                                                                    // Asserting side bar Select text icon color is filled  
        
        // Billing Info Section
        cy.get('[href="#Billing Information"] > .w-full > .font-normal', { timeout: 1000 }).should('have.text','Billing Information').should('be.visible').click()        // Asserting side bar billing information and clicked 
        cy.get('#billingInfo\\.icdCodeId', { timeout: 1000 }).click()                                                                                                     // Asserting icd 10 code is present and clicked
        cy.get(':nth-child(5) > .transparentBtn > .font-normal').should('have.text','C44.1291 Squamous cell carcinoma of skin of left upper eyelid, including canthus')
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
        //cy.get('[href="#Additional Information"] > .w-full > .font-normal').should('have.text','Additional Information').should('be.visible').and('exist').click().wait(1000)                                                                        // Selecting Additional Info from side menu
        //cy.get('input[name="isAdditionalClinician"]').then($checkbox => {
        //if ($checkbox.is(':disabled')) {
        //    cy.log('Checkbox is disabled, skipping...');
        //} else {
        //    cy.wrap($checkbox).check({ force: true });
         //   cy.wrap($checkbox).should('be.checked');    
         //   //cy.get('.align-top > div > .mt-3').click()                                                                                    // tap to checkbox
         //   cy.get('.align-top > div > .mt-3 > .undefined').click().wait(1000)                                                                                 // tap to 2nd checkbox
         //   cy.get(':nth-child(3) > div > .mt-3 > span.undefined').should('have.text','By checking this box, I hereby acknowledge this clinician(s) will receive the final test report and associated PHI').should('be.visible').and('exist')
         //   cy.get('#firstName', { timeout: 1000 }).type('Jony')
         //   cy.get('#lastName', { timeout: 1000 }).type('way')
         //   cy.get('#npi', { timeout: 1000 }).type('5557774448')
         //   cy.get('#fax', { timeout: 1000 }).type('885-741-8852')
         //   cy.get('#email', { timeout: 1000 }).type('jony@gmail.com')
         //   cy.get('.flex > .mt-3 > .checkmark', { timeout: 1000 }).click()
         //   }
        //});
            // Clinical Information Setion
            cy.get('[href="#Clinical Information"] > .w-full > .font-normal').should('have.text','Clinical Information').should('be.visible').and('exist').click().wait(1000)    // Selecting Clinical Info from side menu
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

            // Laboratory Setion
            cy.get('[href="#Laboratory Information"] > .w-full > .font-normal').should('have.text','Laboratory Information').should('be.visible').and('exist').click().wait(1000)    // Selecting Laboratory Info from side menu
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
        cy.get('[href="#Supporting Documents"] > .w-full > .font-semibold').click().wait(500)
        cy.get(':nth-child(2) > .max-w-\\[300px\\] > .font-normal').should('have.text','Pathology Report').should('be.visible').and('exist')
        cy.get(':nth-child(2) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
        cy.get(':nth-child(2) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        cy.get(':nth-child(3) > .max-w-\\[300px\\] > .font-normal').should('have.text','Patient Info / Demographics Sheet', { timeout: 5000 }).should('be.visible').and('exist')
        cy.get(':nth-child(3) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
        cy.get(':nth-child(3) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        cy.get(':nth-child(4) > .max-w-\\[300px\\] > .font-normal').should('have.text','Insurance Card / Billing Face Sheet', { timeout: 5000 }).should('be.visible').and('exist')
        cy.get(':nth-child(4) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
        cy.get(':nth-child(4) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        // Notes 
        cy.get('#notes').type('Testing notes')
        
        //cy.get('.flex-row > :nth-child(1) > span > .secondaryBtn').contains("Review").should('have.text','Review').should('be.visible').and('exist').click().wait(500)                             // Assertion for "review" Button is present
        
         cy.get(':nth-child(2) > span > .secondaryBtn').should('contain.text', 'Save and Exit', { timeout: 5000 }).and('be.enabled').click().wait(30000)                                  // Assertion for "save_and_exit" Button is present and disabled   
         cy.get(':nth-child(1) > .lg\\:right-0 > .py-1').should('have.text', 'Pending Submission').should('be.visible').and('exist').wait(2000)                                        // Chwck the order status is pending submission  

        
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
        cy.get('.flex-wrap > :nth-child(4)').scrollIntoView().should('be.visible').and('exist').click().wait(500)                                                         // Tapping to DecisionDx-SCC Test
        cy.get('path[data-name="Path 5122"]').should('have.attr', 'fill', '#18B5B7')                                                                                    // Asserting side bar Select text icon color is filled  
        
        // Billing Info Section
        cy.get('[href="#Billing Information"] > .w-full > .font-normal', { timeout: 1000 }).should('have.text','Billing Information').should('be.visible').click()        // Asserting side bar billing information and clicked 
        cy.get('#billingInfo\\.icdCodeId', { timeout: 1000 }).click()                                                                                                     // Asserting icd 10 code is present and clicked
        cy.get(':nth-child(5) > .transparentBtn > .font-normal').should('have.text','C44.1291 Squamous cell carcinoma of skin of left upper eyelid, including canthus')
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
        //cy.get('[href="#Additional Information"] > .w-full > .font-normal').should('have.text','Additional Information').should('be.visible').and('exist').click().wait(1000).click().wait(500)                                                                         // Selecting Additional Info from side menu

        //cy.get('input[name="isAdditionalClinician"]').then($checkbox => {
        //if ($checkbox.is(':disabled')) {
        //    cy.log('Checkbox is disabled, skipping...');
        //} else {
        //    cy.wrap($checkbox).check({ force: true });
        //    cy.wrap($checkbox).should('be.checked');    
        //    cy.get('.align-top > div > .mt-3 > .undefined').click().wait(1000)                                                                                 // tap to 2nd checkbox
        //   cy.get(':nth-child(3) > div > .mt-3 > span.undefined').should('have.text','By checking this box, I hereby acknowledge this clinician(s) will receive the final test report and associated PHI').should('be.visible').and('exist')
        //    cy.get('#firstName', { timeout: 1000 }).type('Jony')
        //    cy.get('#lastName', { timeout: 1000 }).type('way')
        //    cy.get('#npi', { timeout: 1000 }).type('5557774448')
        //    cy.get('#fax', { timeout: 1000 }).type('885-741-8852')
        //    cy.get('#email', { timeout: 1000 }).type('jony@gmail.com')
        //    cy.get('.flex > .mt-3 > .checkmark', { timeout: 1000 }).click()
        //    }
        //});

        // Clinical Information Setion
            cy.get('[href="#Clinical Information"] > .w-full > .font-normal').should('have.text','Clinical Information').should('be.visible').and('exist').click({force: true}).wait(1000)    // Selecting Clinical Info from side menu
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


        // Laboratory Setion 
        //cy.get('[href="#Laboratory Information"] > .w-full > .font-normal').should('have.text','Laboratory Information').should('be.visible').and('exist').click().wait(1000)    // Selecting Laboratory Info from side menu
        //cy.get('input[name="laboratoryInfo.typeOfSpecimen"]').then($options1 => {                                                                                     // Seleting type of Specimen randomly.
        //const randomIndex1 = Math.floor(Math.random() * $options1.length) // pick 0, 1, or 2
        //const chosen1 = $options1[randomIndex1]
        //cy.wrap(chosen1).click({ force: true})    })
        //cy.get('#laboratoryInfo\\.labortaryName').type('a').wait(1000)                                                                                                    // typing text in Name of facility
        //cy.get(':nth-child(4) > .transparentBtn > .font-normal').click().wait(500)                                                                                        // Select 4th option
        //cy.get('.my-3.false > .flex-col > .react-datepicker-wrapper > .react-datepicker__input-container > .w-full').type('05-16-2025')                                   // date input

        // Supporting doc section
        cy.get('[href="#Supporting Documents"] > .w-full > .font-normal').click().wait(500)
        cy.get(':nth-child(2) > .max-w-\\[300px\\] > .font-normal').should('have.text','Pathology Report').should('be.visible').and('exist')
        cy.get(':nth-child(2) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
        cy.get(':nth-child(2) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        cy.get(':nth-child(3) > .max-w-\\[300px\\] > .font-normal').should('have.text','Patient Info / Demographics Sheet', { timeout: 5000 }).should('be.visible').and('exist')
        cy.get(':nth-child(3) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
        cy.get(':nth-child(3) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        cy.get(':nth-child(4) > .max-w-\\[300px\\] > .font-normal').should('have.text','Insurance Card / Billing Face Sheet', { timeout: 5000 }).should('be.visible').and('exist')
        cy.get(':nth-child(4) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\]').should('be.visible').and('exist')
        cy.get(':nth-child(4) > .max-w-\\[300px\\] > .bg-\\[\\#F9F9FA\\] > span > .secondaryBtn', { timeout: 5000 }).attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'})
        // Notes 
        cy.get('#notes').type('Testing notes')
        
        //cy.get('.flex-row > :nth-child(1) > span > .secondaryBtn').contains("Review").should('have.text','Review').should('be.visible').and('exist').click().wait(500)                             // Assertion for "review" Button is present        
         cy.get(':nth-child(2) > span > .secondaryBtn').should('contain.text', 'Save and Exit').and('be.enabled').click().wait(30000)                                                         // Assertion for "save_and_exit" Button is present and disabled   
         cy.get(':nth-child(1) > .lg\\:right-0 > .py-1').should('have.text', 'In Progress').should('be.visible').and('exist')                                             // Chwck the order status is pending submission
         cy.get('.rounded-full > .max-w-\\[316px\\] > .h-full').click().wait(500)
         cy.get('.py-2 > .font-normal', { timeout: 5000 }).click().wait(5000)      


    })
    
    
        

})