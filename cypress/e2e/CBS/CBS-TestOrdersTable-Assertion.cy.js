
describe('Dashboard and Test Orders Table Assertions Suite', function() {
    /*
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
        //cy.get('.text-requiredRed').contains("pending approval orders").should('have.text','pending approval orders').should('be.visible')                // Assertion for "60 pending approval orders" Text is present 
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
            cy.wait(1000)
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
    */

    it("Verify All Dashboard and Test Order Table Assertions", function()  {

        cy.viewport(1920, 1081)
        cy.visit("https://demo.clabsportal.com/")
        
        // Login Button Click
        ////cy.get(".text-lg").contains("Existing Customer")                                                                                                                                    // Assertion for text "Existing Customer" is present
        cy.wait(500)
        //cy.get(".w-full").contains("login").should('be.visible').and('exist').and('contain','login').click()                                                                                  // Click to Login button and check if the btn text is "login"       
        cy.get('[type="button"]').contains("login").should('be.visible').and('exist').and('contain','login').click().wait(500)	                                                                // Click to Login button usimg btn type    >> Best Practise
               
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

                                                                // Dashboard Assertions //
                                                                                                                                                                                                // side navigation Items Assertion
        cy.get('.grid-cols-1 > .border-r > .md\\:flex > .sideBarItemActive', { timeout: 80000 }).contains("Dashboard").should('be.visible').and('exist').and('contain','Dashboard')             // Dashboard 
        cy.get('.grid-cols-1 > .border-r > .md\\:flex > [href="/access/test-orders"]', { timeout: 1000 }).contains("Test Orders").should('be.visible').and('exist').and('contain','Orders')     // Test Orders
        cy.get('.grid-cols-1 > .border-r > .md\\:flex > [href="/access/approvals"]', { timeout: 1000 }).contains("Approvals").should('be.visible').and('exist').and('contain','Approvals')      // Approvals
        cy.get('.grid-cols-1 > .border-r > .md\\:flex > #step3', { timeout: 1000 }).contains("Patients").should('be.visible').and('exist').and('contain','Patients')                            // Patients
        cy.get('.grid-cols-1 > .border-r > .md\\:flex > [href="/access/shipments"]', { timeout: 1000 }).contains("Shipments").should('be.visible').and('exist').and('contain','Shipments')      // Shipments
        cy.get('.grid-cols-1 > .border-r > .md\\:flex > [href="/access/documents"]', { timeout: 1000 }).contains("Documents").should('be.visible').and('exist').and('contain','Documents')      // Documents
        cy.get('.grid-cols-1 > .border-r > .md\\:lg\\:flex-col > .sideBarItem', { timeout: 1000 }).contains("Settings").should('be.visible').and('exist').and('contain','Settings')             // Settings
        cy.get('input[placeholder="Search by Patient Name"]', { timeout: 1000 }).should('be.visible').and('exist')                                                                              // Search by Patient Name
        cy.get('.justify-end > .lg\\:gap-2 > :nth-child(1) > .relative > .px-2', { timeout: 1000 }).should('be.visible').and('exist')                                                           // All ORG Dropdown 
        cy.get('.justify-end > .lg\\:gap-2 > [data-tooltip-content="Please select an Physician"] > .relative > .px-2', { timeout: 1000 }).should('be.visible').and('exist')                     // All Phy Dropdown 
        cy.get('[data-tooltip-content="Notifications"] > .relative', { timeout: 1000 }).should('be.visible').and('exist')                                                                       // Notification icon
        cy.get('[data-tooltip-content="Help"]', { timeout: 1000 }).should('be.visible').and('exist')                                                                                            // Help icon                                
        cy.get('.ml-2 > div.flex', { timeout: 1000 }).should('be.visible').and('exist')                                                                                                         // Profile icon                                
        cy.get('.xs\\:px-3 > :nth-child(1) > .font-semibold', { timeout: 1000 }).contains("Dashboard").should('be.visible').and('exist').and('contain','Dashboard')                             // Page Heading Dashboard            
        //cy.get('.xs\\:pl-3 > :nth-child(1)', { timeout: 1000 }).contains("Dashboard").should('be.visible').and('exist').and('contain','Dashboard')                                            // Page Heading Dashboard            
        cy.get('#step1 > :nth-child(1)', { timeout: 1000 }).contains("New Online Order").should('be.visible').and('exist').and('contain','New Online')                                          // First Button New Online Order
        cy.get('#step1 > :nth-child(2)', { timeout: 1000 }).contains("Attach a Document").should('be.visible').and('exist').and('contain','Attach')                                             // 2nd Button Attach a Document
        cy.get('#step1 > :nth-child(3)', { timeout: 1000 }).contains("Schedule a Pickup").should('be.visible').and('exist').and('contain','Schedule')                                           // 3rd Button Schedule a Pickup
        cy.get('#step1 > :nth-child(4)', { timeout: 1000 }).contains("View a Patient Result").should('be.visible').and('exist').and('contain','Patient Result')                                 // 4th Button View a Patient Result
        cy.get(':nth-child(1) > :nth-child(1) > .text-royalBlue', { timeout: 1000 }).contains("Unsubmitted Orders").should('be.visible').and('exist').and('contain','Unsubmitted')              // First Box Unsubmitted Orders
        cy.get('.flex-wrap > :nth-child(2) > :nth-child(1) > .text-royalBlue', { timeout: 1000 }).contains("Pending Approval").should('be.visible').and('exist').and('contain','Approval')      // 2nd Box Pending Approval
        cy.get(':nth-child(3) > :nth-child(1) > .text-royalBlue', { timeout: 1000 }).contains("Pending Results").should('be.visible').and('exist').and('contain','Results')                     // 3rd Box Pending Results
        cy.get('.py-9 > :nth-child(1) > :nth-child(2)', { timeout: 1000 }).contains("Completed Orders").should('be.visible').and('exist').and('contain','Completed')                            // 4th Box Completed Orders

                                                                    // Test Orders Page Elements Assertions //          
        
        cy.get('.grid-cols-1 > .border-r > .md\\:flex > [href="/access/test-orders"]', { timeout: 2000 }).contains("Test Orders")                                                               // Test Orders Tab click
        .should('be.visible').and('exist').and('contain','Orders').click()        
        
        cy.get('.justify-end > .lg\\:gap-2 > :nth-child(1) > .relative > .px-2', { timeout: 1000 }).should('be.visible').and('exist').click()                                                   // All ORG Dropdown 
        cy.get('.cursor-pointer > :nth-child(2) > .items-center > .flex', { timeout: 1000 }).click()                                                                                            // Select ORG from dropdown        
        cy.get('.justify-end > .lg\\:gap-2 > :nth-child(2) > .relative > .px-2', { timeout: 1000 }).click()                                                                                     // Phy dropdown Assertion        
        cy.get('.relative > .cursor-pointer > :nth-child(2) > .items-center', { timeout: 1000 }).click()                                                                                        // Select Phy from dropdown
        cy.get('.xs\\:px-3 > :nth-child(1) > .font-semibold', { timeout: 1000 }).contains("Test Orders").should('be.visible').and('exist').and('contain','Test Orders')                         // Test Orders Heading Assertion
        cy.get('.md\\:w-\\[503px\\] > .my-3 > .relative > .font-sans', { timeout: 1000 }).should('be.visible').and('exist')                                                                     // Search by Patient Name
        cy.get('.md\\:mr-4.md\\:w-\\[300px\\] > .my-2 > .bg-white').should('be.visible').and('exist').wait(2000)                                                                                // Test Type filter assertion
        
        //cy.get('.md\\:flex.w-full > :nth-child(3) > .my-2 > .bg-white', { timeout: 2000 }).should('be.visible').and('exist')                                                                  // Status filter assertion        
        cy.get('.globalFilterDateInput > .react-datepicker-wrapper > .react-datepicker__input-container > .w-full', { timeout: 1000 }).should('be.visible').and('exist')                        // Calender assertion
        //cy.get('.flex-wrap > .xs\\:flex-col > :nth-child(1)').should('be.visible', { timeout: 1000 }).and('exist')                                                                            // ORG filter assertion
        cy.get('.-mt-2 > .xs\\:flex-col > :nth-child(1)').should('be.visible', { timeout: 1000 }).and('exist')                                                                                  // ORG filter assertion
        //cy.get('.flex-wrap > .xs\\:flex-col > :nth-child(2)').should('be.visible', { timeout: 1000 }).and('exist')                                                                            // Phy filter assertion
        cy.get('.-mt-2 > .xs\\:flex-col > :nth-child(2)').should('be.visible', { timeout: 1000 }).and('exist')                                                                                  // Phy filter assertion
        cy.get('.transparentBtn > .font-medium').should('be.visible', { timeout: 1000 }).and('exist')                                                                                           // Clear filter btn assertion    
        cy.get('.primaryBtn').contains("New Online Order").should('be.visible').and('exist', { timeout: 1000 }).and('contain','Online Order')                                                   // New Online Order Btn Assertion

                                                                    // Test Orders Table Col Assertions //
        
        cy.get('.bg-sideNavGray > tr > :nth-child(1)', { timeout: 500 }).contains("Patient First Name").should('have.text','Patient First Name').and('exist').and('contain','First Name')       // Assertion for "Patient First Name" col + sorting Ascend is present                                                                        
        cy.get('.bg-sideNavGray > tr > :nth-child(2)', { timeout: 500 }).contains("Patient Last Name").should('have.text','Patient Last Name').and('exist').and('contain','Last Name')          // Assertion for "Patient Last Name" col is present                                                                        
        cy.get('.bg-sideNavGray > tr > :nth-child(3)', { timeout: 500 }).contains("Patient DOB").should('have.text','Patient DOB').and('exist').and('contain','DOB')                            // Assertion for "Patient DOB" col is present                                                                        
        cy.get('.bg-sideNavGray > tr > :nth-child(4)', { timeout: 500 }).contains("Order Type").should('have.text','Order Type').and('exist').and('contain','Order')                            // Assertion for "Order Type" col is present                                                                                
        cy.get('.bg-sideNavGray > tr > :nth-child(5)', { timeout: 500 }).contains("Castle ID").should('have.text','Castle ID').and('exist').and('contain','Castle')                             // Assertion for "Castle ID" col is present                                                                        
        cy.get('.bg-sideNavGray > tr > :nth-child(6)', { timeout: 500 }).contains("Specimen ID").should('have.text','Specimen ID').and('exist').and('contain','Specimen')                       // Assertion for "Specimen ID" col is present  
        cy.get('.bg-sideNavGray > tr > :nth-child(7)', { timeout: 500 }).contains("Clinician").should('have.text','Clinician').and('exist').and('contain','Clinician')                          // Assertion for "Clinician" col is present                                                                        
        cy.get('.bg-sideNavGray > tr > :nth-child(8)', { timeout: 500 }).contains("Placed By").should('have.text','Placed By').and('exist').and('contain','Placed')                             // Assertion for "Placed By" col is present                                                                        
        cy.get('.bg-sideNavGray > tr > :nth-child(9)', { timeout: 500 }).contains("Ordered Date").should('have.text','Ordered Date').and('exist').and('contain','Ordered')                      // Assertion for "Ordered Date" col is present                                                                        
        cy.get('.bg-sideNavGray > tr > :nth-child(10)', { timeout: 500 }).contains("Report Date").should('have.text','Report Date').and('exist').and('contain','Report')                        // Assertion for "Report Date" col is present                                                                        
        cy.get('.bg-sideNavGray > tr > :nth-child(11)', { timeout: 500 }).contains("Castle Result").should('have.text','Castle Result').and('exist').and('contain','Result')                    // Assertion for "Castle Result" col is present                                                                        
        cy.get('.bg-sideNavGray > tr > :nth-child(12)', { timeout: 500 }).contains("Test Type").should('have.text','Test Type').and('exist').and('contain','Test')                              // Assertion for "Test Type" col is present                                                                        
        cy.get('.bg-sideNavGray > tr > :nth-child(13)', { timeout: 500 }).contains("Organization").should('have.text','Organization').and('exist').and('contain','Organization')                // Assertion for "ORG" col is present                                                                        
        cy.get('.bg-sideNavGray > tr > :nth-child(14)', { timeout: 500 }).contains("Creation Date").should('have.text','Creation Date').and('exist').and('contain','Creation')                  // Assertion for "Creation Date" col is present                                                                        
        cy.get('.bg-sideNavGray > tr > .lg\\:right-0', { timeout: 500 }).contains("Status").should('have.text','Status').and('exist').and('contain','Status')                                   // Assertion for "Status" col is present                                                                        
        cy.get('.bg-sideNavGray > tr > .hidden', { timeout: 500 }).contains("Actions").should('have.text','Actions').and('exist').and('contain','Actions')                                      // Assertion for "Actions" col is present                                                                        
                 

                                                              // Filering //
            
        // Patient name Filter
        cy.get('.md\\:w-\\[503px\\] > .my-3 > .relative > .font-sans').type('Jack').wait(3000)                                                                                              // input name in patient name filter
        cy.assertPaginationMatchesRows()   

        // Test type Filter            
        cy.get('.md\\:-mt-0 > .my-2 > .bg-white').click().wait(500)                                                                                                                         // tap to test type filter
        cy.get('.my-2 > .rounded-md > :nth-child(2)').click().wait(3000)                                                                                                                    // selecting tissue cypher test
        cy.assertPaginationMatchesRows()
        cy.get('.md\\:w-\\[503px\\] > .my-3 > .relative > .font-sans').clear().wait(3000)                                                                                                   // Clear patient name from patient name filter
        cy.get('.md\\:-mt-0 > .my-2 > .bg-white').click().wait(500)                                                                                                                         // tap to test type filter
        cy.get('.my-2 > .rounded-md > :nth-child(1)').click().wait(3000)                                                                                                                    // Unselecting tissue cypher test

        // Status type Filter 
        cy.get('.md\\:flex-row.w-full > :nth-child(3) > .mr-2 > .bg-white').click().wait(500)                                                                                               // tap to status type filter
        cy.get('.absolute > :nth-child(4) > .w-full').scrollIntoView().click().wait(3000)                                                                                                   // Select pending approvals Option                                   
        cy.assertPaginationMatchesRows()
        cy.get('.md\\:flex-row.w-full > :nth-child(3) > .mr-2 > .bg-white').click().wait(500)                                                                                               // tap to staus type filter
        cy.get('.absolute > :nth-child(4) > .w-full').scrollIntoView().click().wait(3000)                                                                                                   // select pending approvals Option                                   

        // Global Filter Date Filter
        // cy.get('.globalFilterDateInput > .react-datepicker-wrapper > .react-datepicker__input-container > .w-full').type('05-16-2025').wait(3000)
        // cy.assertPaginationMatchesRows()
        // cy.get('.globalFilterDateInput > .react-datepicker-wrapper > .react-datepicker__input-container > .w-full').clear().wait(3000)
            
        // Patient DOB Filter
        cy.get(':nth-child(3) > .react-datepicker-wrapper > .react-datepicker__input-container > .w-full').type('08-22-2025').wait(500)                                                     // Filter by DOB
        cy.assertPaginationMatchesRows()
        cy.get(':nth-child(3) > .react-datepicker-wrapper > .react-datepicker__input-container > .w-full').clear()                                                                          // Filter by DOB

        // Order Type Filter     
        cy.get(':nth-child(4) > .my-2 > .bg-white').click()                                                                                                                                 // Tap to Online order filter
        cy.get('.rounded-md > :nth-child(3)').click().wait(3000)                                                                                                                            // Select Paper TRF
        cy.assertPaginationMatchesRows()
        cy.get(':nth-child(4) > .my-2 > .bg-white').click()                                                                                                                                 // Tap to Online order filter
        cy.get('.my-2 > .rounded-md > :nth-child(1)').click().wait(3000)                                                                                                                    // Unselect online order

        // Order Date Filter
        cy.get(':nth-child(9) > .react-datepicker-wrapper > .react-datepicker__input-container > .w-full').scrollIntoView().type('07-28-2025').wait(3000)
        cy.assertPaginationMatchesRows()
        cy.get(':nth-child(9) > .react-datepicker-wrapper > .react-datepicker__input-container > .w-full').scrollIntoView().clear()

        // Creation Date Filter
        cy.get(':nth-child(14) > .react-datepicker-wrapper > .react-datepicker__input-container > .w-full').scrollIntoView().type('07-29-2025').wait(3000)
        cy.assertPaginationMatchesRows()
        cy.get(':nth-child(14) > .react-datepicker-wrapper > .react-datepicker__input-container > .w-full').scrollIntoView().clear()
            
        cy.get('.rounded-full > .max-w-\\[316px\\] > .h-full').click().wait(500)
        cy.get('.py-2 > .font-normal', { timeout: 5000 }).click()
    })
})
