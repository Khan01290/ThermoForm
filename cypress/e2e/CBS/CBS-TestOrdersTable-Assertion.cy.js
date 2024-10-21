
describe('Test Orders Table Fields Assertions Suite', function() {

    it.skip("Verify that all Header buttons are Present", function()  {

        cy.viewport(1920, 1080)
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
        //cy.get('[type="button"]').contains("new pdf order").should('have.text','new pdf order').should('be.visible')                                      // Assertion for "New PDF Order" Button is present  
        //.and('exist').and('contain','new pdf').wait(500)                               
        cy.get('[type="button"]').contains("new online order").should('have.text','new online order').should('be.visible')                                  // Assertion for "New Online Order" Button is present 
        .and('exist').and('contain','new online').wait(500) 
        //cy.get('.text-requiredRed').contains("pending approval orders").should('have.text','pending approval orders').should('be.visible')                  // Assertion for "60 pending approval orders" Text is present 
        //.and('exist').and('contain','pending approval').wait(500)       
        cy.get('[type="button"]').contains("view orders").should('have.text','view orders').should('be.visible')                                            // Assertion for "view orders" Button is present  
        .and('exist').and('contain','view orders').wait(500)  
        cy.get('.mr-6 > .flex > .text-royalBlue').contains("Hide/Unhide Columns").should('have.text','Hide/Unhide Columns').should('be.visible')            // Assertion for "Hide/Unhide Columns" Filter is present  
        .and('exist').and('contain','Hide/Unhide').click().wait(1000)                          
        cy.get('[type="button"]').contains("Patient First Name").should('have.text','Patient First Name').should('be.visible')                              // Assertion for "Patient First Name" CheckBox is present and UnChecked 
        .and('exist').and('contain','First Name').click().wait(1000)
        cy.get('.mr-6 > .flex > .text-royalBlue').contains("Hide/Unhide Columns").should('have.text','Hide/Unhide Columns').should('be.visible')            // Click to "Hide/Unhide Columns" Filter again to select next checkbox
        .and('exist').and('contain','Hide/Unhide').click().wait(1000)  
        cy.get('[type="button"]').contains("Patient Last Name").should('have.text','Patient Last Name').should('be.visible')                                // Assertion for "Patient Last Name" Filter is present and UnChecked   
        .and('exist').and('contain','Last Name').click().wait(1000)
        cy.get('.mr-6 > .flex > .text-royalBlue').contains("Hide/Unhide Columns").should('have.text','Hide/Unhide Columns').should('be.visible')            // Click to "Hide/Unhide Columns" Filter again to select next checkbox
        .and('exist').and('contain','Hide/Unhide').click().wait(1000)
        cy.get('[type="button"]').contains("Patient DOB").should('have.text','Patient DOB').should('be.visible')                                            // Assertion for "Patient DOB" Filter is present and UnChecked     
        .and('exist').and('contain','DOB').click().wait(1000)
        cy.get('.mr-6 > .flex > .text-royalBlue').contains("Hide/Unhide Columns").should('have.text','Hide/Unhide Columns').should('be.visible')            // Click to "Hide/Unhide Columns" Filter again to select next checkbox
        .and('exist').and('contain','Hide/Unhide').click().wait(1000)                          
        cy.get('[type="button"]').contains("Patient First Name").should('have.text','Patient First Name').should('be.visible')                              // Assertion for "Patient First Name" CheckBox is present and Checked 
        .and('exist').and('contain','First Name').click().wait(1000)
        cy.get('.mr-6 > .flex > .text-royalBlue').contains("Hide/Unhide Columns").should('have.text','Hide/Unhide Columns').should('be.visible')            // Click to "Hide/Unhide Columns" Filter again to select next checkbox
        .and('exist').and('contain','Hide/Unhide').click().wait(1000)  
        cy.get('[type="button"]').contains("Patient Last Name").should('have.text','Patient Last Name').should('be.visible')                                // Assertion for "Patient Last Name" Filter is present and Checked   
        .and('exist').and('contain','Last Name').click().wait(1000)
        cy.get('.mr-6 > .flex > .text-royalBlue').contains("Hide/Unhide Columns").should('have.text','Hide/Unhide Columns').should('be.visible')            // Click to "Hide/Unhide Columns" Filter again to select next checkbox
        .and('exist').and('contain','Hide/Unhide').click().wait(1000)
        cy.get('[type="button"]').contains("Patient DOB").should('have.text','Patient DOB').should('be.visible')                                            // Assertion for "Patient DOB" Filter is present and Checked     
        .and('exist').and('contain','DOB').click().wait(1000)
        cy.get(':nth-child(1) > div.flex > :nth-child(2) > .flex').contains("Group By").should('have.text','Group By').should('be.visible')                 // Assertion for "Group By" Filter is present  
        .and('exist').and('contain','Group By').click().wait(500)
        cy.get('[type="button"]').contains("Patient First Name").should('have.text','Patient First Name').should('be.visible').and('exist')                 // Assertion for Group By "Patient First Name" is present and checked
        .and('contain','First Name').click().wait(500) 
        cy.get(':nth-child(1) > div.flex > :nth-child(2) > .flex').click().wait(500)               
        cy.get('[type="button"]').contains("Patient Last Name").should('have.text','Patient Last Name').should('be.visible').and('exist')                   // Assertion for Group By "Patient Last Name" is present and checked                                                                         
        .and('contain','Last Name').click().wait(500)
        cy.get(':nth-child(1) > div.flex > :nth-child(2) > .flex').click().wait(500)  
        cy.get('[type="button"]').contains("Ungroup").should('have.text','Ungroup').should('be.visible').and('exist')                                       // Assertion for "UnGroup" is present and checked                                                                         
        .and('contain','Ungroup').click().wait(500) 
        
    })

    it.skip("Verify that all Columns of Test Order Table are present & Performing Sorting", function()  {

        cy.viewport(1920, 1080)
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
        // columns Assertion
        cy.get('.dropdown-text-container__text').contains("Patient First Name").should('have.text','Patient First Name').and('exist')                       // Assertion for "Patient First Name" col + sorting Ascend is present                                                                        
        .and('contain','First Name').click().wait(5000)
        cy.get('.dropdown-text-container__text').contains("Patient First Name").should('have.text','Patient First Name').and('exist')                       // Assertion for "Patient First Name" col + sorting Dscend is present                                                                        
        .and('contain','First Name').click().wait(5000)    
        cy.get('.dropdown-text-container__text').contains("Patient Last Name").should('have.text','Patient Last Name').and('exist')                         // Assertion for "Patient Last Name" col is present                                                                        
        .and('contain','Last Name').click().wait(5000)
        cy.get('.dropdown-text-container__text').contains("Patient DOB").should('have.text','Patient DOB').and('exist')                                     // Assertion for "Patient DOB" col is present                                                                        
        .and('contain','DOB').click().wait(5000)
        cy.get('.dropdown-text-container__text').contains("Order Type").should('have.text','Order Type').and('exist')                                       // Assertion for "Order Type" col is present                                                                        
        .and('contain','Order').click().wait(5000)
        cy.get('.dropdown-text-container__text').contains("Test Type").should('have.text','Test Type').and('exist')                                         // Assertion for "Test Type" col is present                                                                        
        .and('contain','Test').click().wait(5000)
        cy.get('.dropdown-text-container__text').contains("Castle ID").should('have.text','Castle ID').and('exist')                                         // Assertion for "Castle ID" col is present                                                                        
        .and('contain','Castle').click().wait(5000)
        cy.get('.dropdown-text-container__text').contains("Specimen ID").should('have.text','Specimen ID').and('exist')                                     // Assertion for "Specimen ID" col is present                                                                        
        .and('contain','Specimen').click().wait(5000)
        cy.get('.dropdown-text-container__text').contains("Org").should('have.text','Org').and('exist')                                                     // Assertion for "Org" col is present                                                                        
        .and('contain','Org').click().wait(5000)
        cy.get('.dropdown-text-container__text').contains("Clinician").should('have.text','Clinician').and('exist')                                         // Assertion for "Clinician" col is present                                                                        
        .and('contain','Clinician').click().wait(5000)
        cy.get('.dropdown-text-container__text').contains("Ordered Date").should('have.text','Ordered Date').and('exist')                                   // Assertion for "Ordered Date" col is present                                                                        
        .and('contain','Ordered').click().wait(5000)
        cy.get('.dropdown-text-container__text').contains("Report Date").should('have.text','Report Date').and('exist')                                     // Assertion for "Report Date" col is present                                                                        
        .and('contain','Report').click().wait(5000)
        cy.get('.dropdown-text-container__text').contains("Castle Result").should('have.text','Castle Result').and('exist')                                 // Assertion for "Castle Result" col is present                                                                        
        .and('contain','Result').click().wait(5000)
        cy.get('.dropdown-text-container__text').contains("Status").should('have.text','Status').and('exist')                                               // Assertion for "Status" col is present                                                                        
        .and('contain','Status').click().wait(5000)
        cy.get('.table-checkbox-container').contains("Actions").should('have.text','Actions').and('exist')                                                  // Assertion for "Actions" col is present                                                                        
        .and('contain','Actions').wait(5000)
    })

    it.skip("Verify that ORG & Physicins Checks are present and validation messages Assertions are applied", function()  {

        cy.viewport(1920, 1080)
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
        // Top dropdowns assertions and check conditions
        cy.get(':nth-child(1) > [style="opacity: 1;"] > .overflow-hidden > .p-1').should('be.visible').and('exist').click().wait(500)                       // Assertion for ORG dropdown is present and clicked   
        cy.get('#root > div.h-screen.flex.flex-col.overflow-hidden > header > div:nth-child(2) > div > div:nth-child(1) > div.absolute.shadow-md.z-96.border.rounded-md.bg-white.break-normal.overflow-y-auto.top-7 > ul > div > button')
        .contains("REFRESH LIST").should('be.visible').should('have.text','REFRESH LIST').and('exist').click().wait(5000)                                   // Check Refresh Button properly loading all Orgs
        cy.get(':nth-child(1) > [style="opacity: 1;"] > .overflow-hidden > .p-1').should('be.visible').and('exist').click().wait(500)                       // Check ORG dropdown and click on it    
        cy.get('#root > div.h-screen.flex.flex-col.overflow-hidden > header > div:nth-child(2) > div > div:nth-child(1) > div.absolute.shadow-md.z-96.border.rounded-md.bg-white.break-normal.overflow-y-auto.top-7 > ul > li:nth-child(1) > button > div > p')
        .contains("All Organizations").should('have.text','All Organizations').should('be.visible').and('exist').click().wait(500)                          // Check First li in dropdown having text "All Organizations" and select it                                                          
        cy.get('#root > div.h-screen.flex.flex-col.overflow-hidden > header > div:nth-child(2) > div > div:nth-child(2) > div > button')                    // Click to Cilinician dropdown to select Cilinician           
        .should('be.visible').and('exist').click().wait(500)                                                                                                
        cy.get('.mt-5').contains("Please select an organization first.").should('have.text','Please select an organization first.')                         // Asserion for alert to "select an ORG First" is present
        .and('exist').and('contain','select an organization first')                                                                                          
        cy.get('.justify-end > .bg-primary > p').should('be.visible').should('have.text','OK').and('exist').click().wait(500)                               // Assertion of Alert "Ok" button  is present
        cy.get(':nth-child(1) > [style="opacity: 1;"] > .overflow-hidden > .p-1').should('be.visible').and('exist').click().wait(1000)                      // Check ORG dropdown and click on it 
        cy.get('#root > div.h-screen.flex.flex-col.overflow-hidden > header > div:nth-child(2) > div > div:nth-child(1) > div.absolute.shadow-md.z-96.border.rounded-md.bg-white.break-normal.overflow-y-auto.top-7 > ul > li:nth-child(3) > button > div.text-sm.text-royalBlue.ml-2 > p')
        .contains("Android").should('have.text','Android').and('exist').click().wait(500)                                                                   // Selecting Android Org
        cy.get('div[style="opacity: 1;"] > .bg-primary > p').contains("new online order").should('be.visible').                                             // Asserion of button new online order and click on it
        and('exist').and('contain','new online').click().wait(500)                                       
        cy.get('.p-5 > .justify-between > .text-royalBlue').contains("Create Online Order").should('be.visible').should('have.text','Create Online Order')  // Asserion of Alert popup text "Create Online Order"
        .and('exist').and('contain','Create Online').wait(500)
        cy.get('.justify-end > .bg-primary').should('be.visible').should('have.text','OK').and('exist').click().wait(500)                                   // Assertion of Alert Ok button
        cy.get('#root > div.h-screen.flex.flex-col.overflow-hidden > header > div:nth-child(2) > div > div:nth-child(2) > div > button')                    // Click to Cilinician dropdown to select Cilinician           
        .should('be.visible').and('exist').click().wait(500)
        cy.get(':nth-child(2) > .flex > .text-sm > .break-normal').contains("SZK PHY QA").should('be.visible').should('have.text','SZK PHY QA')             // Select a Cilinician from dropdown 
        .and('exist').click().wait(500)                  
    })

    it("Verify that Filtering is working on all Test Order table Columns", function()  {

        cy.viewport(1920, 1080)
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
        cy.get('[href="/test-orders"] > .flex').contains("test orders").should('be.visible').and('exist').and('contain','orders').click().wait(2000)        // Check the URL containing test-orders link           
        cy.get('.flex > .capitalize').contains("Test orders").should('have.text','Test orders').should('be.visible').and('exist')                           // Assertion for "Test orders" Page heading is present
        .and('contain','Test orders').wait(500)                       
        // Filering
        cy.get('#patientFirstName > .mt-3 > .font-normal > .text-input-container > .input-container > .input-wrapperstring > .icon-and-input-field-wrapper > .flex > .input')
        .type('IDG Test Two').wait(5000)                                                                                                                    // Typing "patientFirstName" in filter                                                                         
        cy.get('#patientFirstName > .mt-3 > .font-normal > .text-input-container > .input-container > .input-wrapperstring > .icon-and-input-field-wrapper > .flex > .w-5')
        .click().wait(5000)                                                                                                                                 // Removing text from filter
        cy.get('#patientLastName > .mt-3 > .font-normal > .text-input-container > .input-container > .input-wrapperstring > .icon-and-input-field-wrapper > .flex > .input')
        .type('Testing').wait(5000)                                                                                                                         // Typing "patientLastName" in filter
        cy.get('#patientLastName > .mt-3 > .font-normal > .text-input-container > .input-container > .input-wrapperstring > .icon-and-input-field-wrapper > .flex > .w-5')
        .click().wait(5000)                                                                                                                                 // Removing text from filter
        cy.get('#patientDOB > .mt-3 > .font-normal > .text-input-container > .input-container > .input-wrapperdate > .icon-and-input-field-wrapper > .flex > .react-datepicker-wrapper > .react-datepicker__input-container > .input')
        .click().wait(2000)                                                                                                                                 
        cy.get(':nth-child(1) > .react-datepicker__day--002').click().wait(5000)                                                                                            
        cy.get('.icon-and-input-field-wrapper > .flex > .w-5').click().wait(5000)                                                                           
        cy.get('#orderType > .mt-3 > .font-normal > .text-input-container > .input-container > .input-wrapperstring > .icon-and-input-field-wrapper > .flex > .input')
        .click().wait(2000)                                                                                                                            
        cy.get('.shadow-md > :nth-child(2)').click().wait(5000)
        cy.get('.icon-and-input-field-wrapper > .flex > .w-5').click().wait(5000)                                                                      
        cy.get('#testTypeCode > .mt-3 > .font-normal > .text-input-container > .input-container > .input-wrapperstring > .icon-and-input-field-wrapper > .flex > .input')
        .click().wait(2000)                                                                                                                                 // Assertion for "UnGroup" is present and checked                                                                         
        cy.get('.shadow-md > :nth-child(3)').click().wait(5000)
        cy.get('.icon-and-input-field-wrapper > .flex > .w-5').click().wait(5000)
        cy.get('#castle_id > .mt-3 > .font-normal > .text-input-container > .input-container > .input-wrapperstring > .icon-and-input-field-wrapper > .flex > .input')
        .type('I87987980-13').wait(5000)                                                                                                                    // Assertion for "UnGroup" is present and checked                                                                         
        cy.get('#castle_id > .mt-3 > .font-normal > .text-input-container > .input-container > .input-wrapperstring > .icon-and-input-field-wrapper > .flex > .w-5')
        .click().wait(5000)
        cy.get('#specimen_id > .mt-3 > .font-normal > .text-input-container > .input-container > .input-wrapperstring > .icon-and-input-field-wrapper > .flex > .input')
        .type('9YTRE-A').wait(5000)                                                                                                                         // Assertion for "UnGroup" is present and checked                                                                         
        cy.get('#specimen_id > .mt-3 > .font-normal > .text-input-container > .input-container > .input-wrapperstring > .icon-and-input-field-wrapper > .flex > .w-5')
        .click().wait(5000)
        cy.get('#physicianCode > .mt-3 > .font-normal > .text-input-container > .input-container > .input-wrapperstring > .icon-and-input-field-wrapper > .flex > .input')
        .click().wait(2000)                                                                                                                                 // Assertion for "UnGroup" is present and checked                                                                         
        cy.get('.shadow-md > :nth-child(1)').click().wait(5000)
        cy.get('#physicianCode > .mt-3 > .font-normal > .text-input-container > .input-container > .input-wrapperstring > .icon-and-input-field-wrapper > .flex > .w-5')
        .click().wait(5000)
        cy.get('#orderDate > .mt-3 > .font-normal > .text-input-container > .input-container > .input-wrapperdate > .icon-and-input-field-wrapper > .flex > .react-datepicker-wrapper > .react-datepicker__input-container > .input')
        .click().wait(2000)                                                                                                                                 // Assertion for "UnGroup" is present and checked                                                                         
        cy.get(':nth-child(1) > .react-datepicker__day--002').click().wait(5000)                                                                            // Assertion for "UnGroup" is present and checked                                                                         
        cy.get('.input-wrapperdate > .icon-and-input-field-wrapper > .flex > .w-5').click().wait(5000)                                                      // Assertion for "UnGroup" is present and checked                                                                         
        cy.get('#reportDate > .mt-3 > .font-normal > .text-input-container > .input-container > .input-wrapperdate > .icon-and-input-field-wrapper > .flex > .react-datepicker-wrapper > .react-datepicker__input-container > .input')
        .click().wait(2000)                                                                                                                                 // Assertion for "UnGroup" is present and checked                                                                         
        cy.get(':nth-child(1) > .react-datepicker__day--002').click().wait(5000)                                                                                                                                                                                        // Assertion for "UnGroup" is present and checked                                                                         
        cy.get('.icon-and-input-field-wrapper > .flex > .w-5').click().wait(5000)                                                                           // Assertion for "UnGroup" is present and checked                                                                         
        cy.get('#castleResult > .mt-3 > .font-normal > .text-input-container > .input-container > .input-wrapperstring > .icon-and-input-field-wrapper > .flex > .input')
        .type('Test').wait(5000)                                                                                                                            // Assertion for "UnGroup" is present and checked                                                                         
        cy.get('.icon-and-input-field-wrapper > .flex > .w-5').click().wait(5000)
        cy.get('#status > .mt-3 > .font-normal > .text-input-container > .input-container > .input-wrapperstring > .icon-and-input-field-wrapper > .flex > .input')
        .click().wait(2000)                                                                                                                                 // Assertion for "UnGroup" is present and checked                                                                         
        cy.get('.drop-shadow-md > :nth-child(10)').click().wait(5000)
        cy.get('.icon-and-input-field-wrapper > .flex > .w-5').click().wait(5000)
    })
})
