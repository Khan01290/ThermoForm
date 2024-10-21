import 'cypress-file-upload'

/*describe.skip('Header Button Assertions Suite', function() {

    it("Verify that all Header buttons are Present", function()  {

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
})

describe.skip('Test Orders Table Columns Assertions & Sorting Suite', function() {

    it("Verify that all Columns of Test Order Table are present & Performing Sorting", function()  {

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
})

describe.skip('Test Orders Table ORG + Physicins Checks and validation messages Assertions Suite', function() {

    it("Verify that ORG & Physicins Checks are present and validation messages Assertions are applied", function()  {

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
})

describe.skip('Test Orders Table Columns Filering Suite', function() {

    it("Verify that Filtering is working on Test Order table Columns", function()  {

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
})*/

describe('TissueCypher Online Order Submission Suite', function() {

    it("Verify that TissueCypher Online Order has been Created and Submitted Successfully", function()  {

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
            cy.get('[type="submit"]').contains("Sign In").should('be.visible').and('exist').and('contain','Sign In').click()                                // Get submit btn by btn type and cick on it   >> Best Practise                    
            
        })
        //cy.wait(40000)
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
        .should('be.visible').and('exist').and('contain','supporting').click().wait(5000)              
        cy.get('.col-span-1 > :nth-child(1) > .flex > .break-normal').contains("Select Test").should('have.text','Select Test')                             // Assertion for "Supporting Documents" heading should be present on left side    
        .should('be.visible').and('exist').and('contain','Select').click().wait(5000)        
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
            
        //TissueCypher Test Creation
        cy.get(':nth-child(1) .justify-between .w-3\\/5 .mr-4 .ml-2')
        .contains("TissueCypher: Predicts risk of progression to esophageal cancer in Barrett’s esophagus patients")                                        // Assertion for "TissueCypher" Test should be present
        .should('have.text','TissueCypher: Predicts risk of progression to esophageal cancer in Barrett’s esophagus patients')
        .should('be.visible').and('exist').and('contain','TissueCypher').click().wait(500)                                                                      
        cy.get('input[id="1"]').should('be.checked')                                                                                                        // Assertion for "TissueCypher" Test should be checked
        cy.get('.break-normal').contains("Select Test").should('have.text','Select Test').should('be.visible')                                              // Assertion for "Select Test" heading should be present on page        
        .and('exist').and('contain','Select').click().wait(500)
        cy.get('svg').find('path[fill="#18B5B7"]').should('have.attr', 'stroke', 'white')                                                                   // Assertion for "Patient Information" checkmark color should be red
        cy.get('.transition-all').contains("17%").should('have.text','17%').should('be.visible').and('exist').and('contain','17%').wait(500)                // Assertion for "progress Bar" 17% should be moved on Select Test Step
        
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
        cy.get('input[name="patient_gender"]').first().focus().wait(1000)                                                                                   // Taking focus on patient_gender                                    

        cy.get(':nth-child(2) > .flex > .break-normal').contains("Patient Information").should('have.text','Patient Information')                           // Assertion for "Patient Information" heading should be present on left side    
        .should('be.visible').and('exist').and('contain','Patient').click().wait(5000)
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
        cy.get('.transition-all').contains("33%").should('have.text','33%').should('be.visible').and('exist').and('contain','33%').wait(500)                // Assertion for "progress Bar" 33% should be moved on Select Test Step
        
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
        cy.get('.transition-all').contains("17%").should('have.text','17%').should('be.visible').and('exist').and('contain','17%').wait(500)                // Assertion for "progress Bar" 17% should be moved on Select Test Step    
        cy.get('svg').find('path[fill=none]').should('have.attr', 'stroke', '#d0d4db')                                                                      // Assertion for "Patient Information" checkmark color should be none 
        cy.get('input[name="patient_phone"]').clear().wait(500)                                                                                             // Making input "patient_phone" clear    
        cy.get('input[name="patient_phone"]').type('232-323-2323').wait(500)                                                                                // Taking valid input for "patient_phone"    
        // patient_zip_code
        cy.get('input[name="patient_zip_code"]').type('123').wait(500)                                                                                      // Taking invalid input for "patient_zip_code"    
        cy.get(':nth-child(6) > .relative > .mt-1').contains("Zip code length must equal to 5")                                                             // Assertion for invalid "patient_zip_code" validation message
        .should('have.text','Zip code length must equal to 5').should('be.visible').and('exist').and('contain','equal to 5').wait(500)                                                   
        cy.get('.transition-all').contains("17%").should('have.text','17%').should('be.visible').and('exist').and('contain','17%').wait(500)                // Assertion for "progress Bar" 17% should be moved on Select Test Step        
        cy.get('svg').find('path[fill=none]').should('have.attr', 'stroke', '#d0d4db')                                                                      // Assertion for "Patient Information" checkmark color should be none
        cy.get('input[name="patient_zip_code"]').clear().wait(500)                                                                                          // Making input "patient_zip_code" clear    
        cy.get('input[name="patient_zip_code"]').type('38574').wait(500)                                                                                    // Taking valid input for "patient_zip_code"    
        cy.get('.transition-all').contains("33%").should('have.text','33%').should('be.visible').and('exist').and('contain','33%').wait(500)                // Assertion for "progress Bar" 33% should be moved on Select Test Step
        cy.get('svg').find('path[fill="#18B5B7"]').should('have.attr', 'stroke', 'white')                                                                   // Assertion for "Patient Information" checkmark color should be red

        // BILLING INFORMATION Section
        cy.get(':nth-child(3) > .flex > .break-normal').contains("billing information").should('have.text','billing information')                           // Assertion for "billing information" heading should be present on left side    
        .should('be.visible').and('exist').and('contain','billing').click().wait(5000)
        cy.get(':nth-child(3) > .flex > .text-left').find('path[fill=none]').should('be.visible')                                                           // Assertion for "billing information" checkmark color should be none 
        cy.get('.transition-all').contains("33%").should('have.text','33%').should('be.visible').and('exist').and('contain','33%').wait(500)                // Assertion for "progress Bar" 33% should be moved on Select Test Step    
        //cy.get('.mt-5 > .text-base').contains("Billing Information").should('have.text','Billing Information')                                            // Assertion for "billing information" heading should be present on section            
        //.should('be.visible').and('exist').and('contain','Billing').wait(500)  
        cy.get('input[name="icd_10"]').click().wait(1000)                                                                                                   // Tapping to icd_10 dropdown
        cy.get('.shadow-md').within(() => {                                                                                                                 // Verifying all three dropdown values
            cy.contains('K22.719 BE with dysplasia, unspecified').should('be.visible')
            cy.contains('K22.70 BE without dysplasia').should('be.visible')
            cy.contains('K22.710 BE with low grade dysplasia').should('be.visible')
        })
        cy.get('.shadow-md > :nth-child(2)').contains("K22.710 BE with low grade dysplasia").should('have.text','K22.710 BE with low grade dysplasia')      // Selectimg K22.710 BE with low grade dysplasia from dropsown                         
        .should('be.visible').and('exist').and('contain','with low grade dysplasia').click().wait(5000)        
        cy.get('input[name="billing_phone"]').should('be.visible').type('123').wait(500)                                                                    // Taking invalid input for "phone"    
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
        cy.get(':nth-child(1) > .react-datepicker__day--001').click().wait(500)                                                                             // Selecting Date fron DTP
        cy.get(':nth-child(3) > .flex > .text-left').find('path[fill="#18B5B7"]').should('be.visible')                                                      // Assertion for "billing_information" checkmark color should be red 
        cy.get('.transition-all').contains("50%").should('have.text','50%').should('be.visible').and('exist').and('contain','50%').wait(500)              // Assertion for "progress Bar" 50% should be moved on billing_information Step    
        
        // ADDITIONAL INFORMATION Section
        cy.get(':nth-child(4) > .flex > .break-normal').contains("Additional Information").should('have.text','Additional Information')                     // Assertion for "Additional Information" heading should be present on left side    
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
        cy.get(':nth-child(4) > .flex > .text-left').find('path[fill="#18B5B7"]').should('be.visible')                                                      // Assertion for "additional_cilinicain" checkmark color should be Grey 
        cy.get('input[name="additionalClinician[0].fax').type('232-32_-____').wait(500)                                                                     // Taking invlid input in additionalClinician fax
        cy.get(':nth-child(2) > .text-requiredRed').contains("Fax must contain 10 digits with the following format 000-000-0000")                           // Assertion for "Fax must contain 10 digits" validation text
        .should('have.text','Fax must contain 10 digits with the following format 000-000-0000')
        .should('be.visible').and('exist').and('contain','10 digits').wait(500)        
        cy.get(':nth-child(4) > .flex > .text-left').find('path[fill=none]').should('be.visible')                                                           // Assertion for "additional_cilinicain" checkmark color should be none        
        cy.get('input[name="additionalClinician[0].fax').clear().wait(500)                                                                                  // Making clear additionalClinician fax
        cy.get('input[name="additionalClinician[0].fax').type('232-323-2223').wait(500)                                                                     // Taking 10 digits in additionalClinician fax
        cy.get(':nth-child(4) > .flex > .text-left').find('path[fill="#18B5B7"]').should('be.visible')                                                      // Assertion for "additional_cilinicain" checkmark color should be Grey         
        cy.get('input[name="additionalClinician[0].email').type('sdsdsd').wait(500)                                                                         // Taking invlid input in additionalClinician email
        cy.get('input[name="additionalClinician[0].email').blur().wait(500)                                                                                 // Taking invlid input in additionalClinician email
        cy.get(':nth-child(4) > .text-requiredRed').contains("Email ID is invalid!").should('have.text','Email ID is invalid!')                             // Assertion for "Fax must contain 10 digits" validation text        
        .should('be.visible').and('exist').and('contain','Email ID').wait(500)        
        cy.get('.text-left svg').invoke('attr', 'fill').then((color) => {cy.expect(color).to.equal('#18B5B7')})                                             // Assertion for "additional_cilinicain" checkmark color should be Grey 
        cy.get('input[name="additionalClinician[0].email').clear().wait(500)                                                                                // Making clear additionalClinician email
        cy.get('input[name="additionalClinician[0].email').type('abc@gmail.com').wait(500)                                                                  // Taking vaid input in additionalClinician email
        cy.get(':nth-child(4) > .flex > .text-left').find('path[fill="#18B5B7"]').should('be.visible')                                                      // Assertion for "additional_cilinicain" checkmark color should be grey 
        cy.get('.transition-all').contains("67%").should('have.text','67%').should('be.visible').and('exist').and('contain','67%').wait(500)                // Assertion for "progress Bar" 67% should be moved on additional_cilinicain Step    
        
        //LABORATORY INFORMATION Section        
        cy.get(':nth-child(5) > .flex > .break-normal').contains("Laboratory Information").should('have.text','Laboratory Information')                     // Assertion for "Laboratory Information" heading should be present on left side    
        .should('be.visible').and('exist').and('contain','Laboratory').click().wait(1000)
        cy.get('.sticky > .text-royalBlue').contains("Laboratory Information").should('have.text','Laboratory Information')                                 // Assertion for "Laboratory Information" heading should be present on section heading
        .should('be.visible').and('exist').and('contain','Laboratory').wait(1000)
        cy.get('input[name="name_of_facility').type('Qa').wait(2000)                                                                                        // Taking input in select laboratory
        cy.get('.shadow-md > :nth-child(2)').contains("110 | AF PathLab QA").should('have.text','110 | AF PathLab QA')                                      // Assertion for "laboratory name" from dropdown and select
        .should('be.visible').and('exist').and('contain','AF PathLab QA').click().wait(500)
        cy.get(':nth-child(1) > .my-3 > .react-datepicker-wrapper > .react-datepicker__input-container > .py-2').click().wait(1000)                         // Tapping to "Date of Collection" Datepicker                        
        cy.get(':nth-child(1) > .react-datepicker__day--001').click().wait(1000)                                                                            // Selecting date fron DTP
        //cy.get(':nth-child(4) > .my-3 > .react-datepicker-wrapper > .react-datepicker__input-container > .py-2').click().wait(1000)                         // Tapping to "Medicare Pull Date" Datepicker                        
        //cy.get('.react-datepicker__day--006').click().wait(1000)                                                                                            // Selecting date fron DTP
        cy.get('.transition-all').contains("83%").should('have.text','83%').should('be.visible').and('exist').and('contain','83%').wait(500)                // Assertion for "progress Bar" 83% should be moved on LABORATORY INFORMATION Step    

        //Supporting Documents Section  
        cy.get(':nth-child(6) > .flex > .break-normal').contains("supporting documents").should('have.text','supporting documents')                         // Assertion for "Supporting Documents" heading should be present on left side    
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
})

/*describe.skip('DecisionDx-SCC Online Order Submission Suite', function() {

    it("Verify that DecisionDx-SCC Online Order Created and Submitted Successfully", function()  {

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
})

describe.skip('DecisionDx-Melanoma Online Order Submission Suite', function() {

    it("Verify that DecisionDx-Melanoma Online Order Created and Submitted Successfully", function()  {

        cy.viewport(1920, 1080)
        cy.visit("https://demo.clabsportal.com/") 
        
        // Login Button Click       
        cy.wait(500)
        cy.get('[type="button"]').contains("login").should('be.visible').and('exist').and('contain','login').click().wait(500)	                           // Click to Login button usimg btn type    >> Best Practise
               
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
            
        //DecisionDx-Melanoma Test Creation
        cy.get(':nth-child(2) > :nth-child(3) > .w-3\\/5 > .mr-4 > .ml-2')        
        .contains("DecisionDx-Melanoma: Predicts risk of recurrence or metastasis in patients with Cutaneous Melanoma")                                     // Assertion for "DecisionDx-Melanoma" Test should be present
        .should('have.text','DecisionDx-Melanoma: Predicts risk of recurrence or metastasis in patients with Cutaneous Melanoma')
        .should('be.visible').and('exist').and('contain','DecisionDx-Melanoma').click().wait(500)                                                                      
        cy.get('input[id="3"]').should('be.checked')                                                                                                        // Assertion for "DecisionDx-Melanoma" Test should be checked
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
        cy.get('input[name="patient_gender"]').blur().focus().wait(500)                                                                                     // Taking blur on patient_gender                                    
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
        cy.get('svg').find('path[fill="#18B5B7"]').should('have.attr', 'stroke', 'white')                                                                  // Assertion for "Patient Information" checkmark color should be red

        // BILLING INFORMATION Section
        cy.get(':nth-child(3) > .flex > .break-normal').contains("billing information").should('have.text','billing information')                           // Assertion for "billing information" heading should be present on left side    
        .should('be.visible').and('exist').and('contain','billing').click().wait(5000)
        cy.get(':nth-child(3) > .flex > .text-left').find('path[fill=none]').should('be.visible')                                                           // Assertion for "billing information" checkmark color should be none 
        cy.get('.transition-all').contains("29%").should('have.text','29%').should('be.visible').and('exist').and('contain','29%').wait(500)                // Assertion for "progress Bar" 29% should be moved on Select Test Step    
        //cy.get('.mt-5 > .text-base').contains("Billing Information").should('have.text','Billing Information')                                            // Assertion for "billing information" heading should be present on section            
        //.should('be.visible').and('exist').and('contain','Billing').wait(500)  
        cy.get('input[name="icd_10"]').click().wait(1000)                                                                                                   // Tapping to icd_10 dropdown
        cy.get('.flex > .shadow-md').within(() => {                                                                                                         // Verifying all 25 items exist in dropdown
            cy.contains('C43.0 Malignant melanoma of lip').should('be.visible')
            cy.contains('C43.0 Malignant melanoma of unspecified eyelid, including canthus').should('be.visible').and('exist')
            cy.contains('C43.10 Malignant melanoma of unspecified eyelid, including canthus').should('be.visible').and('exist')
            cy.contains('C43.111 Malignant melanoma of right upper eyelid, including canthus').should('be.visible').and('exist')
            cy.contains('C43.112 Malignant melanoma of right lower eyelid, including canthus').should('exist')
            cy.contains('C43.121 Malignant melanoma of left upper eyelid, including canthus').should('exist')
            cy.contains('C43.122 Malignant melanoma of left lower eyelid, including canthus').should('exist')
            cy.contains('C43.20 Malignant melanoma of unspecified ear and external auricular canal').should('exist')
            cy.contains('C43.21 Malignant melanoma of right ear and external auricular canal').should('exist')
            cy.contains('C43.22 Malignant melanoma of left ear and external auricular canal').should('exist')
            cy.contains('C43.30 Malignant melanoma of unspecified part of face').should('exist')
            cy.contains('C43.31 Malignant melanoma of nose').should('exist')
            cy.contains('C43.39 Malignant melanoma of other parts of face').should('exist')
            cy.contains('C43.4 Malignant melanoma of scalp and neck').should('exist')
            cy.contains('C43.51 Malignant melanoma of anal skin').should('exist')
            cy.contains('C43.52 Malignant melanoma of skin of breast').should('exist')
            cy.contains('C43.59 Malignant melanoma of other part of trunk').should('exist')
            cy.contains('C43.60 Malignant melanoma of unspecified upper limb, including shoulder').should('exist')
            cy.contains('C43.61 Malignant melanoma of right upper limb, including shoulder').should('exist')
            cy.contains('C43.62 Malignant melanoma of left upper limb, including shoulder').should('exist')
            cy.contains('C43.70 Malignant melanoma of unspecified lower limb, including hip').should('exist')
            cy.contains('C43.71 Malignant melanoma of right lower limb, including hip').should('exist')
            cy.contains('C43.72 Malignant melanoma of left lower limb, including hip').should('exist')
            cy.contains('C43.8 Malignant melanoma of overlapping sites of skin').should('exist')
            cy.contains('C43.9 Malignant melanoma of skin, unspecified').should('exist')
            cy.contains('C43.9 Malignant melanoma of skin, unspecified').should('exist')
            cy.contains('C77.4 Secondary and unspecified malignant neoplasm of inguinal and lower limb lymph nodes').should('exist')
        })

        cy.get('.shadow-md > :nth-child(4)').contains("C43.111 Malignant melanoma of right upper eyelid, including canthus")                               // Selectimg C43.111 Malignant melanoma...... from dropsown                         
        .should('have.text','C43.111 Malignant melanoma of right upper eyelid, including canthus')      
        .should('be.visible').and('exist').and('contain','C43.111').click().wait(1000)        
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
        cy.contains('label', 'Yes').prev('input[name="question1"]').check({force: true});
        cy.get('.py-2 > .text-borderGray').click()
        cy.get('.flex > .shadow-md').within(() => {                                                                                                         // Verifying all three dropdown values
            cy.contains('NX/Unknown').should('exist').and('be.visible')
            cy.contains('NO').should('exist').and('be.visible')
            cy.contains('N1a').should('exist').and('be.visible')
            cy.contains('N1b').should('exist').and('be.visible')
            cy.contains('N1c').should('exist')
            cy.contains('N2a').should('exist')
            cy.contains('N2b').should('exist')
            cy.contains('N2c').should('exist')
            cy.contains('N3a').should('exist')
            cy.contains('N3b').should('exist')
            cy.contains('N3c').should('exist')
            cy.contains('Positive (unspecified)').should('exist')
            cy.contains('Positive').should('exist')
        })

        cy.get('.shadow-md > :nth-child(3)').contains("N1a").should('have.text','N1a').should('be.visible').and('exist')                                    // Selectimg N1a from dropsown  
        .and('contain','N1a').click().wait(500)          
        cy.get('input[name="question2"]').check({force: true})
        cy.get('input[name="question3"]').check({force: true})
        cy.get(':nth-child(4) > .flex > .text-left').find('path[fill="#18B5B7"]').should('be.visible')                                                      // Assertion for "Clinical_Information" checkmark color should be red 
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
        cy.get(':nth-child(1) > .mt-auto').attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'}).wait(10000)                                           // Uploading Pdf file as Pathology Report        
        cy.get(':nth-child(2) > .mt-auto').attachFile("test-plan-ryoulive.doc", {subjectType:'drag-n-drop'}).wait(10000)                                    // Uploading .doc file as Insurance Cards/Billing Face Sheet        
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
})

describe.skip('DecisionDx-CMSeq Online Order Submission Suite', function() {

    it("Verify that DecisionDx-CMSeq Online Order Created and Submitted Successfully", function()  {

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
            
        //DecisionDx-Melanoma Test Creation
        cy.get(':nth-child(3) > .w-3\\/5 > :nth-child(2) > .ml-2')        
        .contains("DecisionDx-CMSeq: Next-Generation Sequencing (NGS) to identify hotspot mutations in the genes BRAF, NRAS and KIT")                       // Assertion for "DecisionDx-CMSeq" Test should be present
        .should('have.text','DecisionDx-CMSeq: Next-Generation Sequencing (NGS) to identify hotspot mutations in the genes BRAF, NRAS and KIT')
        .should('be.visible').and('exist').and('contain','DecisionDx-CMSeq').click().wait(500)                                                                      
        cy.get('input[id="6"]').should('be.checked')                                                                                                        // Assertion for "DecisionDx-CMSeq" Test should be checked
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
        cy.get('input[name="patient_gender"]').first().blur().wait(500)                                                                                     // Taking blur on patient_gender                                    
        cy.get('.mt-1').contains("First name is required!").should('have.text','First name is required!')                                                   // Assertion for "First name is required!" validation message
        .should('exist').and('contain','First name').wait(500)
        cy.get(':nth-child(4) > .mt-1').contains("Last name is required!").should('have.text','Last name is required!')                                     // Assertion for "Last name is required!" validation message
        .should('exist').and('contain','Last name').wait(500)
        cy.get(':nth-child(5) > :nth-child(2) > .mt-1').contains("Sex at Birth is required").should('have.text','Sex at Birth is required')                 // Assertion for "Sex at Birth is required" validation message
        .should('exist').and('contain','Sex at Birth').wait(500)
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
        cy.get('svg').find('path[fill="#18B5B7"]').should('have.attr', 'stroke', 'white')                                                                  // Assertion for "Patient Information" checkmark color should be red

        // BILLING INFORMATION Section
        cy.get(':nth-child(3) > .flex > .break-normal').contains("billing information").should('have.text','billing information')                           // Assertion for "billing information" heading should be present on left side    
        .should('be.visible').and('exist').and('contain','billing').click().wait(5000)
        cy.get(':nth-child(3) > .flex > .text-left').find('path[fill=none]').should('be.visible')                                                           // Assertion for "billing information" checkmark color should be none 
        cy.get('.transition-all').contains("29%").should('have.text','29%').should('be.visible').and('exist').and('contain','29%').wait(500)                // Assertion for "progress Bar" 29% should be moved on Select Test Step    
        //cy.get('.mt-5 > .text-base').contains("Billing Information").should('have.text','Billing Information')                                            // Assertion for "billing information" heading should be present on section            
        //.should('be.visible').and('exist').and('contain','Billing').wait(500)  
        cy.get('input[name="icd_10"]').click().wait(1000)                                                                                                   // Tapping to icd_10 dropdown
        cy.get('.flex > .shadow-md').within(() => {                                                                                                         // Verifying all 25 items exist in dropdown
            cy.contains('C43.0 Malignant melanoma of lip').should('be.visible')
            cy.contains('C43.0 Malignant melanoma of unspecified eyelid, including canthus').should('be.visible').and('exist')
            cy.contains('C43.10 Malignant melanoma of unspecified eyelid, including canthus').should('be.visible').and('exist')
            cy.contains('C43.111 Malignant melanoma of right upper eyelid, including canthus').should('be.visible').and('exist')
            cy.contains('C43.112 Malignant melanoma of right lower eyelid, including canthus').should('exist')
            cy.contains('C43.121 Malignant melanoma of left upper eyelid, including canthus').should('exist')
            cy.contains('C43.122 Malignant melanoma of left lower eyelid, including canthus').should('exist')
            cy.contains('C43.20 Malignant melanoma of unspecified ear and external auricular canal').should('exist')
            cy.contains('C43.21 Malignant melanoma of right ear and external auricular canal').should('exist')
            cy.contains('C43.22 Malignant melanoma of left ear and external auricular canal').should('exist')
            cy.contains('C43.30 Malignant melanoma of unspecified part of face').should('exist')
            cy.contains('C43.31 Malignant melanoma of nose').should('exist')
            cy.contains('C43.39 Malignant melanoma of other parts of face').should('exist')
            cy.contains('C43.4 Malignant melanoma of scalp and neck').should('exist')
            cy.contains('C43.51 Malignant melanoma of anal skin').should('exist')
            cy.contains('C43.52 Malignant melanoma of skin of breast').should('exist')
            cy.contains('C43.59 Malignant melanoma of other part of trunk').should('exist')
            cy.contains('C43.60 Malignant melanoma of unspecified upper limb, including shoulder').should('exist')
            cy.contains('C43.61 Malignant melanoma of right upper limb, including shoulder').should('exist')
            cy.contains('C43.62 Malignant melanoma of left upper limb, including shoulder').should('exist')
            cy.contains('C43.70 Malignant melanoma of unspecified lower limb, including hip').should('exist')
            cy.contains('C43.71 Malignant melanoma of right lower limb, including hip').should('exist')
            cy.contains('C43.72 Malignant melanoma of left lower limb, including hip').should('exist')
            cy.contains('C43.8 Malignant melanoma of overlapping sites of skin').should('exist')
            cy.contains('C43.9 Malignant melanoma of skin, unspecified').should('exist')
            cy.contains('C43.9 Malignant melanoma of skin, unspecified').should('exist')
            cy.contains('C77.4 Secondary and unspecified malignant neoplasm of inguinal and lower limb lymph nodes').should('exist')
        })

        cy.get('.shadow-md > :nth-child(4)').contains("C43.111 Malignant melanoma of right upper eyelid, including canthus")                               // Selectimg C43.111 Malignant melanoma...... from dropsown                         
        .should('have.text','C43.111 Malignant melanoma of right upper eyelid, including canthus')      
        .should('be.visible').and('exist').and('contain','C43.111').click().wait(1000)        
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
        cy.contains('label', 'Yes').prev('input[name="question1"]').check({force: true});
        cy.get('.py-2 > .text-borderGray').click()
        cy.get('.flex > .shadow-md').within(() => {                                                                                                         // Verifying all three dropdown values
            cy.contains('NX/Unknown').should('exist').and('be.visible')
            cy.contains('NO').should('exist').and('be.visible')
            cy.contains('N1a').should('exist').and('be.visible')
            cy.contains('N1b').should('exist').and('be.visible')
            cy.contains('N1c').should('exist')
            cy.contains('N2a').should('exist')
            cy.contains('N2b').should('exist')
            cy.contains('N2c').should('exist')
            cy.contains('N3a').should('exist')
            cy.contains('N3b').should('exist')
            cy.contains('N3c').should('exist')
            cy.contains('Positive (unspecified)').should('exist')
            cy.contains('Positive').should('exist')
        })

        cy.get('.shadow-md > :nth-child(3)').contains("N1a").should('have.text','N1a').should('be.visible').and('exist')                                    // Selectimg N1a from dropsown  
        .and('contain','N1a').click().wait(500)          
        cy.get('input[name="question2"]').check({force: true})
        cy.get('input[name="question3"]').check({force: true})
        cy.get(':nth-child(4) > .flex > .text-left').find('path[fill="#18B5B7"]').should('be.visible')                                                      // Assertion for "Clinical_Information" checkmark color should be red 
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
        cy.get(':nth-child(1) > .mt-auto').attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'}).wait(10000)                                           // Uploading Pdf file as Pathology Report        
        cy.get(':nth-child(2) > .mt-auto').attachFile("test-plan-ryoulive.doc", {subjectType:'drag-n-drop'}).wait(10000)                                    // Uploading .doc file as Insurance Cards/Billing Face Sheet        
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
})

describe.skip('MyPath-Melanoma Online Order Submission Suite', function() {

    it("Verify that MyPath Melanoma Online Order Created and Submitted Successfully", function()  {

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
            
        //DecisionDx-Melanoma Test Creation
        cy.get(':nth-child(4) > .w-3\\/5 > .mr-4 > .ml-2')        
        .contains("MyPath Melanoma: Diagnostic test for ambiguous melanocytic lesions")                                                                     // Assertion for "MyPath Melanoma" Test should be present
        .should('have.text','MyPath Melanoma: Diagnostic test for ambiguous melanocytic lesions')
        .should('be.visible').and('exist').and('contain','MyPath Melanoma').click().wait(500)                                                                      
        cy.get('input[id="5"]').should('be.checked')                                                                                                        // Assertion for "MyPath Melanoma" Test should be checked
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
        cy.get('input[name="patient_gender"]').first().blur().wait(500)                                                                                     // Taking blur on patient_gender                                    
        cy.get('.mt-1').contains("First name is required!").should('have.text','First name is required!')                                                   // Assertion for "First name is required!" validation message
        .should('exist').and('contain','First name').wait(500)
        cy.get(':nth-child(4) > .mt-1').contains("Last name is required!").should('have.text','Last name is required!')                                     // Assertion for "Last name is required!" validation message
        .should('exist').and('contain','Last name').wait(500)
        cy.get(':nth-child(5) > :nth-child(2) > .mt-1').contains("Sex at Birth is required").should('have.text','Sex at Birth is required')                 // Assertion for "Sex at Birth is required" validation message
        .should('exist').and('contain','Sex at Birth').wait(500)
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
        cy.get('.flex > .shadow-md').within(() => {                                                                                                         // Verifying all 25 items exist in dropdown
            cy.contains('D22.0 Melanocytic nevi of lip').should('be.visible')
            cy.contains('D22.10 Melanocytic nevi of unspecified eyelid, including canthus').should('be.visible').and('exist')
            cy.contains('D22.111 Melanocytic nevi of right upper eyelid, including canthus').should('be.visible').and('exist')
            cy.contains('D22.112 Melanocytic nevi of right lower eyelid, including canthus').should('be.visible').and('exist')
            cy.contains('D22.121 Melanocytic nevi of left upper eyelid, including canthus').should('exist')
            cy.contains('D22.122 Melanocytic nevi of left lower eyelid, including canthus').should('exist')
            cy.contains('D22.20 Melanocytic nevi of unspecified ear and external auricular canal').should('exist')
            cy.contains('D22.21 Melanocytic nevi of right ear and external auricular canal').should('exist')    
            cy.contains('D22.22 Melanocytic nevi of left ear and external auricular canal').should('exist')
            cy.contains('D22.30 Melanocytic nevi of unspecified part of face').should('exist')
            cy.contains('D22.39 Melanocytic nevi of other parts of face').should('exist')
            cy.contains('D22.4 Melanocytic nevi of scalp and neck').should('exist')
            cy.contains('D22.5 Melanocytic nevi of trunk').should('exist')
            cy.contains('D22.60 Melanocytic nevi of unspecified upper limb, including shoulder').should('exist')
            cy.contains('D22.61 Melanocytic nevi of right upper limb, including shoulder').should('exist')
            cy.contains('D22.62 Melanocytic nevi of left upper limb, including shoulder').should('exist')
            cy.contains('D22.70 Melanocytic nevi of unspecified lower limb, including hip').should('exist')
            cy.contains('D22.71 Melanocytic nevi of right lower limb, including hip').should('exist')
            cy.contains('D22.72 Melanocytic nevi of left lower limb, including hip').should('exist')
            cy.contains('D22.9 Melanocytic nevi, unspecified').should('exist')
            cy.contains('D48.5 Neoplasm of uncertain behavior of skin').should('exist')
            cy.contains('D49.2 Neoplasm of unspecified behavior of bone, soft tissue, and skin').should('exist')            
        })

        cy.get('.shadow-md > :nth-child(4)').contains("D22.112 Melanocytic nevi of right lower eyelid, including canthus")                                  // Selectimg C43.111 Malignant melanoma...... from dropsown                         
        .should('have.text','D22.112 Melanocytic nevi of right lower eyelid, including canthus')      
        .should('be.visible').and('exist').and('contain','D22.112').click().wait(1000)        
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
        
        cy.get('div.flex-col.justify-center > .focus\\:outline-primary > .relative > [data-tip="Required Field"] > .text-royalBlue')                                                                                                                              // Assertion for "Clinical Information" text should be present    
        .contains(`I attest the specimen being submitted for testing is a primary cutaneous melanocytic neoplasm for which the diagnosis is uncertain, (despite the performance of standard-of-care test procedures and relevant ancillary tests), the patient may be subjected to additional intervention as a result of the diagnostic uncertainty, and this patient was not receiving immunosuppressant or radiation therapy at the time of biopsy.`)
        .should('be.visible').and('exist').and('contain','I attest the specimen being submitted').wait(1000)    
        cy.get('.mt-5 > :nth-child(1) > .w-5').click().wait(500)      
        cy.get(':nth-child(4) > .flex > .text-left').find('path[fill="#18B5B7"]').should('be.visible')                                                      // Assertion for "Clinical_Information" checkmark color should be red 
        cy.get('.transition-all').contains("57%").should('have.text','57%').should('be.visible').and('exist').and('contain','57%').wait(500)                // Assertion for "progress Bar" 57% should be moved on billing_information Step    
        
        // ADDITIONAL INFORMATION Section
        cy.get(':nth-child(5) > .flex > .break-normal').contains("Additional Information").should('have.text','Additional Information')                     // Assertion for "Additional Information" heading should be present on left side    
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
        
        cy.get('input[name="name_of_facility').focus().blur().wait(500)                                                                                     // Makign Blur select laboratory
        //cy.get('input[name="name_of_facility').blur().wait(500)                                                                                           // Makign Blur select laboratory
        cy.get('.focus\\:outline-primary > :nth-child(2) > .mt-1').contains("Facility is required!").should('have.text','Facility is required!')            // Assertion for "name_of_facility is required!" validation text
        .and('exist').and('contain','Facility').wait(1000)
        cy.get('#specimenId').focus().blur().wait(1000)                                                                                                     // Makign Blur specimenId
        cy.get('.relative.\\32 xl\\:flex > :nth-child(2) > .mt-1').contains("Accession# / Specimen ID is required!")                                        // Assertion for "Specimen ID is required!" validation text
        .should('have.text','Accession# / Specimen ID is required!').and('exist').and('contain','Specimen ID').wait(1000)
        cy.get('#tumorSite').focus().blur().wait(2000)                                                                                                      // Makign Blur tumorSite
        cy.get(':nth-child(6) > .mt-1').contains("Tumor site is required!")                                                                                 // Assertion for "#tumorSite is required!" validation text
        .should('have.text','Tumor site is required!').and('exist').and('contain','Tumor site').wait(1000)        
        cy.get('#specimenId').clear()                                                                                                                       // Makign clear specimenId
        cy.get('#tumorSite').clear()                                                                                                                        // Makign clear tumorSite
        cy.get('input[name="name_of_facility').type('Qa').wait(2000)                                                                                        // Taking input in select laboratory
        cy.get('.shadow-md > :nth-child(2)').contains("110 | AF PathLab QA").should('have.text','110 | AF PathLab QA')                                      // Assertion for "name_of_facility" from dropdown and select
        .should('be.visible').and('exist').and('contain','AF PathLab QA').click().wait(500)
        cy.get(':nth-child(1) > .my-3 > .react-datepicker-wrapper > .react-datepicker__input-container > .py-2').click().wait(1000)                         // Tapping to "Date of Collection" Datepicker                        
        cy.get(':nth-child(1) > .react-datepicker__day--001').click().wait(1000)                                                                            // Selecting date fron DTP
        cy.get('#specimenId').type('ABC123').wait(500)                                                                                                      // Taking input specimenId
        cy.get(':nth-child(4) > .my-3 > .react-datepicker-wrapper > .react-datepicker__input-container > .py-2').click().wait(1000)                         // Tapping to "Medicare Pull Date" Datepicker                        
        cy.get(':nth-child(1) > .react-datepicker__day--001').click().wait(1000)                                                                            // Selecting date fron DTP
        cy.get('#tumorSite').type('www.tumersite,com').wait(500)                                                                                            // Makign Blur tumorSite
        cy.get(':nth-child(6) > .flex > .text-left').find('path[fill="#18B5B7"]').should('be.visible')                                                      // Assertion for "LABORATORY INFORMATION Section" checkmark color should be grey 
        //cy.get('.transition-all').contains("86%").should('have.text','86%').should('be.visible').and('exist').and('contain','86%').wait(500)                // Assertion for "progress Bar" 86% should be moved on LABORATORY INFORMATION Step    

        //Supporting Documents Section  
        cy.get(':nth-child(7) > .flex > .break-normal').contains("supporting documents").should('have.text','supporting documents')                         // Assertion for "Supporting Documents" heading should be present on left side    
        .should('be.visible').and('exist').and('contain','supporting').click().wait(5000)
        cy.get('.sticky > .text-royalBlue').contains("Supporting Documents").should('have.text','Supporting Documents')                                     // Assertion for "Supporting Documents" heading should be present on section heading
        .should('be.visible').and('exist').and('contain','Supporting')
        cy.get(':nth-child(1) > .mt-auto').attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'}).wait(10000)                                           // Uploading Pdf file as Pathology Report        
        cy.get(':nth-child(2) > .mt-auto').attachFile("test-plan-ryoulive.doc", {subjectType:'drag-n-drop'}).wait(10000)                                    // Uploading .doc file as Insurance Cards/Billing Face Sheet        
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
})

describe.skip('DecisionDx-UM/DecisionDx-PRAME Online Order Submission Suite', function() {

    it("Verify that DecisionDx-UM/DecisionDx-PRAME Online Order Created and Submitted Successfully", function()  {

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
            
        //DecisionDx-UM/DecisionDx-PRAME Test Creation
        cy.get('label').contains('DecisionDx-UM:').parent().should('contain.text', 'DecisionDx-UM:')                                                        // Assertion for "DecisionDx-UM" Test should be present
        .and('contain.text', 'Predicts risk of metastasis in uveal melanoma patients')
        cy.get('label').contains('DecisionDx-UM:').click()                                                                                                  // "DecisionDx-UM" clicked

        cy.get('label').contains('DecisionDx-PRAME:').parent().should('contain.text', 'DecisionDx-PRAME:')                                                  // Assertion for "DecisionDx-PRAME" Test should be present
        .and('contain.text','A gene expression profiling test that measures the expression of PRAME using a validated threshold for positivity')

        cy.get('input[id="4"]').should('be.checked')                                                                                                        // Assertion for "DecisionDx-Melanoma" Test should be checked
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
        cy.get('input[name="patient_gender"]').blur().focus().wait(500)                                                                                     // Taking blur on patient_gender                                    
        cy.get('.mt-1').contains("First name is required!").should('have.text','First name is required!')                                                   // Assertion for "First name is required!" validation message
        .should('exist').and('contain','First name').wait(500)
        cy.get(':nth-child(4) > .mt-1').contains("Last name is required!").should('have.text','Last name is required!')                                     // Assertion for "Last name is required!" validation message
        .should('exist').and('contain','Last name').wait(500)
        cy.get(':nth-child(5) > :nth-child(2) > .mt-1').contains("Sex at Birth is required").should('have.text','Sex at Birth is required')                 // Assertion for "Sex at Birth is required" validation message
        .should('exist').and('contain','Sex at Birth').wait(500)
        cy.get('input[name="patient_firstname"]').type('QA Pateint One')                                                                                    // Taking input for "patient_firstname"        
        cy.get('input[name="patient_lastname"]').type('Automated test')                                                                                     // Taking input for "patient_lastname" 
        cy.get('input[name="patient_gender"]').click().wait(1000)                                                                                           // Tpping to "patient_gender" dropdown
        cy.get('.shadow-md > :nth-child(1)').contains("Female").should('have.text','Female').and('exist')                                                   // Taking input for "patient_gender"
        .and('contain','Female').click().wait(500)
        cy.get('.transition-all').contains("14%").should('have.text','14%').should('be.visible').and('exist').and('contain','14%').wait(500)                // Assertion for "progress Bar" 14% should be moved on Select Test Step

        cy.get('#patient_ssn').focus().blur().wait(500)                                                                                                     // Taking invalid input for "patient_email"        
        cy.get('.focus\\:outline-primary > .flex > .mr-5 > .mt-1').contains("SSN is required").should('have.text','SSN is required')                        // Assertion for "First name is required!" validation message
        cy.get('#patient_ssn').type('123').wait(500)                                                                                                        // Taking invalid input for "patient_ssn"
        cy.get('.focus\\:outline-primary > .flex > .mr-5 > .mt-1').contains("SSN must contain 9 digits with following format 000-00-0000")                  // Assertion for invalid patient_ssn no validation message        
        .should('have.text','SSN must contain 9 digits with following format 000-00-0000')                        
        cy.get('#patient_ssn').clear().wait(500)                                                                                                            // making clear "patient_ssn" field
        cy.get('#patient_ssn').type('232-23-2323').wait(500)                                                                                                // Taking valid input for "patient_ssn"
        cy.get('.transition-all').contains("29%").should('have.text','29%').should('be.visible').and('exist').and('contain','29%').wait(500)                // Assertion for "progress Bar" 29% should be moved on Select Test Step

        cy.get('#patient_ssn').clear().wait(500)                                                                                                            // making clear "patient_ssn" field
        cy.get('.transition-all').contains("14%").should('have.text','14%').should('be.visible').and('exist').and('contain','14%').wait(500)                // Assertion for "progress Bar" 14% should be moved on Select Test Step
        cy.get('#patient_mrn').type('123').wait(500)                                                                                                        // Taking valid input for "patient_mrn"
        cy.get('.transition-all').contains("29%").should('have.text','29%').should('be.visible').and('exist').and('contain','29%').wait(500)                // Assertion for "progress Bar" 29% should be moved on Select Test Step

        
        // Patient Contact Information Section
        // patient_email
        cy.get('input[name="patient_email"]').type('abc').wait(500)                                                                                       // Taking invalid input for "patient_email"        
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
        cy.get('svg').find('path[fill="#18B5B7"]').should('have.attr', 'stroke', 'white')                                                                  // Assertion for "Patient Information" checkmark color should be red

        // BILLING INFORMATION Section
        cy.get(':nth-child(3) > .flex > .break-normal').contains("billing information").should('have.text','billing information')                           // Assertion for "billing information" heading should be present on left side    
        .should('be.visible').and('exist').and('contain','billing').click().wait(5000)
        cy.get(':nth-child(3) > .flex > .text-left').find('path[fill=none]').should('be.visible')                                                           // Assertion for "billing information" checkmark color should be none 
        cy.get('.transition-all').contains("29%").should('have.text','29%').should('be.visible').and('exist').and('contain','29%').wait(500)                // Assertion for "progress Bar" 29% should be moved on Select Test Step    
        //cy.get('.mt-5 > .text-base').contains("Billing Information").should('have.text','Billing Information')                                            // Assertion for "billing information" heading should be present on section            
        //.should('be.visible').and('exist').and('contain','Billing').wait(500)  
        cy.get('input[name="icd_10"]').click().wait(1000)                                                                                                   // Tapping to icd_10 dropdown
        cy.get('.flex > .shadow-md').within(() => {                                                                                                         // Verifying all items exist in dropdown
            cy.contains('C69.31 Malignant neoplasm of right choroid').should('be.visible')
            cy.contains('C69.32 Malignant neoplasm of left choroid').should('be.visible').and('exist')
            cy.contains('C69.41 Malignant neoplasm of right ciliary body').should('be.visible').and('exist')
            cy.contains('C69.42 Malignant neoplasm of left ciliary body').should('be.visible').and('exist')
            cy.contains('C69.90 Malignant neoplasm of unspecified site of unspecified eye').should('exist')
            cy.contains('C69.91 Malignant neoplasm of unspecified site of right eye').should('exist')
            cy.contains('C69.92 Malignant neoplasm of unspecified site of left eye').should('exist')
            cy.contains('C78.7 Secondary Malignant neoplasm of liver').should('exist')            
        })

        cy.get('.shadow-md > :nth-child(3)').contains("C69.41 Malignant neoplasm of right ciliary body")                                                    // Selectimg C69.41 Malignant neoplasm...... from dropsown                         
        .should('have.text','C69.41 Malignant neoplasm of right ciliary body')      
        .should('be.visible').and('exist').and('contain','C69.41').click().wait(1000)        
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
        //cy.contains('label', 'No').prev('input[name="question1"]').check({force: true});
        //cy.get('.py-2 > .text-borderGray').click()    
        cy.contains('label', "I don't know").should('have.text', "I don't know").prev('input[type="radio"]').click({force: true})
        
        cy.get('div.scroll-my-32:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2)').click()    
        //cy.contains('div', 'Add-On Testing: DecisionDx-Prame').parent().find('label').contains('No').should('exist').click();
        cy.get(':nth-child(4) > .flex > .text-left').find('path[fill="#18B5B7"]').should('be.visible')                                                      // Assertion for "Clinical_Information" checkmark color should be red 
        //cy.get('.transition-all').contains("57%").should('have.text','57%').should('be.visible').and('exist').and('contain','57%').wait(500)                // Assertion for "progress Bar" 57% should be moved on billing_information Step    
        
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
        cy.get(':nth-child(1) > .mt-auto').attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'}).wait(10000)                                           // Uploading Pdf file as Pathology Report        
        cy.get(':nth-child(2) > .mt-auto').attachFile("test-plan-ryoulive.doc", {subjectType:'drag-n-drop'}).wait(10000)                                    // Uploading .doc file as Insurance Cards/Billing Face Sheet        
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
})

describe.skip('DecisionDx-UMSeq Online Order Submission Suite', function() {

    it("Verify that DecisionDx-UMSeq: Online Order Created and Submitted Successfully", function()  {

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
            
        //DecisionDx-UMSeq Test Creation
        //cy.get('label').contains('DecisionDx-UMSeq:').parent().should('contain.text', 'DecisionDx-UMSeq:')                                                  // Assertion for "DecisionDx-UMSeq" Test should be present
        //.and('contain.text', 'Predicts risk of metastasis in uveal melanoma patients')
        //cy.get('label').contains('DecisionDx-UMSeq:').click()                                                                                               // "DecisionDx-UMSeq" clicked

        cy.get('label').contains('DecisionDx-UMSeq:').parent().should('contain.text', 'DecisionDx-UMSeq:')                                                  // Assertion for "DecisionDx-UMSeq" Test should be present
        .and('contain.text','Next-Generation Sequencing (NGS) to identify hotspot mutations in the genes GNAQ, GNA11, CYSLTR2, PLCB4 and SF3B1, mutations in exons 1-2 of EIF1AX and all coding exons of the BAP1 gene')
        cy.get('label').contains('DecisionDx-UMSeq:').click()                                                                                               // "DecisionDx-UMSeq" clicked

        cy.get('input[id="7"]').should('be.checked')                                                                                                        // Assertion for "DecisionDx-Melanoma" Test should be checked
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
        cy.get('input[name="patient_gender"]').first().blur().wait(500)                                                                                     // Taking blur on patient_gender                            
        
        cy.get(':nth-child(2) > .flex > .break-normal').contains("Patient Information").should('have.text','Patient Information')                           // Assertion for "Patient Information" heading should be present on left side    
        .should('exist').and('contain','Patient').click().wait(2000)
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
        cy.get('.transition-all').contains("14%").should('have.text','14%').should('be.visible').and('exist').and('contain','14%').wait(500)                // Assertion for "progress Bar" 14% should be moved on Select Test Step

        cy.get('#patient_ssn').focus().blur().wait(500)                                                                                                     // Taking invalid input for "patient_email"        
        cy.get('.focus\\:outline-primary > .flex > .mr-5 > .mt-1').contains("SSN is required").should('have.text','SSN is required')                        // Assertion for "First name is required!" validation message
        cy.get('#patient_ssn').type('123').wait(500)                                                                                                        // Taking invalid input for "patient_ssn"
        cy.get('.focus\\:outline-primary > .flex > .mr-5 > .mt-1').contains("SSN must contain 9 digits with following format 000-00-0000")                  // Assertion for invalid patient_ssn no validation message        
        .should('have.text','SSN must contain 9 digits with following format 000-00-0000')                        
        cy.get('#patient_ssn').clear().wait(500)                                                                                                            // making clear "patient_ssn" field
        cy.get('#patient_ssn').type('232-23-2323').wait(500)                                                                                                // Taking valid input for "patient_ssn"
        cy.get('.transition-all').contains("29%").should('have.text','29%').should('be.visible').and('exist').and('contain','29%').wait(500)                // Assertion for "progress Bar" 29% should be moved on Select Test Step

        cy.get('#patient_ssn').clear().wait(500)                                                                                                            // making clear "patient_ssn" field
        cy.get('.transition-all').contains("14%").should('have.text','14%').should('be.visible').and('exist').and('contain','14%').wait(500)                // Assertion for "progress Bar" 14% should be moved on Select Test Step
        cy.get('#patient_mrn').type('123').wait(500)                                                                                                        // Taking valid input for "patient_mrn"
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
        cy.get('svg').find('path[fill="#18B5B7"]').should('have.attr', 'stroke', 'white')                                                                  // Assertion for "Patient Information" checkmark color should be red

        // BILLING INFORMATION Section
        cy.get(':nth-child(3) > .flex > .break-normal').contains("billing information").should('have.text','billing information')                           // Assertion for "billing information" heading should be present on left side    
        .should('be.visible').and('exist').and('contain','billing').click().wait(5000)
        cy.get(':nth-child(3) > .flex > .text-left').find('path[fill=none]').should('be.visible')                                                           // Assertion for "billing information" checkmark color should be none 
        cy.get('.transition-all').contains("29%").should('have.text','29%').should('be.visible').and('exist').and('contain','29%').wait(500)                // Assertion for "progress Bar" 29% should be moved on Select Test Step    
        //cy.get('.mt-5 > .text-base').contains("Billing Information").should('have.text','Billing Information')                                            // Assertion for "billing information" heading should be present on section            
        //.should('be.visible').and('exist').and('contain','Billing').wait(500)  
        cy.get('input[name="icd_10"]').click().wait(1000)                                                                                                   // Tapping to icd_10 dropdown
        cy.get('.flex > .shadow-md').within(() => {                                                                                                         // Verifying all items exist in dropdown
            cy.contains('C69.31 Malignant neoplasm of right choroid').should('be.visible')
            cy.contains('C69.32 Malignant neoplasm of left choroid').should('be.visible').and('exist')
            cy.contains('C69.41 Malignant neoplasm of right ciliary body').should('be.visible').and('exist')
            cy.contains('C69.42 Malignant neoplasm of left ciliary body').should('be.visible').and('exist')
            cy.contains('C69.90 Malignant neoplasm of unspecified site of unspecified eye').should('exist')
            cy.contains('C69.91 Malignant neoplasm of unspecified site of right eye').should('exist')
            cy.contains('C69.92 Malignant neoplasm of unspecified site of left eye').should('exist')
            cy.contains('C78.7 Secondary Malignant neoplasm of liver').should('exist')            
        })

        cy.get('.shadow-md > :nth-child(3)').contains("C69.41 Malignant neoplasm of right ciliary body")                                                    // Selectimg C69.41 Malignant neoplasm...... from dropsown                         
        .should('have.text','C69.41 Malignant neoplasm of right ciliary body')      
        .should('be.visible').and('exist').and('contain','C69.41').click().wait(1000)        
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
        cy.get(':nth-child(1) > .react-datepicker__day--028').click().wait(500)                                                                             // Selecting Date fron DTP
        cy.get(':nth-child(3) > .flex > .text-left').find('path[fill="#18B5B7"]').should('be.visible')                                                      // Assertion for "billing_information" checkmark color should be red 
        cy.get('.transition-all').contains("43%").should('have.text','43%').should('be.visible').and('exist').and('contain','43%').wait(500)                // Assertion for "progress Bar" 43% should be moved on billing_information Step    
        
        // Clinical Information Section
        cy.get(':nth-child(4) > .flex > .break-normal').contains("Clinical Information").should('have.text','Clinical Information')                         // Assertion for "Clinical Information" heading should be present on left side    
        .should('be.visible').and('exist').and('contain','Clinical').click().wait(1000)             
        //cy.contains('label', 'No').prev('input[name="question1"]').check({force: true});
        //cy.get('.py-2 > .text-borderGray').click()    
        cy.contains('label', "I don't know").should('have.text', "I don't know").prev('input[type="radio"]').click({force: true})
        //cy.contains('div', 'Add-On Testing: DecisionDx-Prame').parent().find('label').contains('No').should('exist').click();
        cy.get(':nth-child(4) > .flex > .text-left').find('path[fill="#18B5B7"]').should('be.visible')                                                      // Assertion for "Clinical_Information" checkmark color should be red 
        cy.get('.transition-all').contains("57%").should('have.text','57%').should('be.visible').and('exist').and('contain','57%').wait(500)                // Assertion for "progress Bar" 57% should be moved on billing_information Step    
        
        // ADDITIONAL INFORMATION Section   
        cy.get(':nth-child(5) > .flex > .break-normal').contains("Additional Information").should('have.text','Additional Information')                     // Assertion for "Additional Information" heading should be present on left side    
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
        
        //cy.get(':nth-child(5) > .flex > .text-left').find('path[fill="#18B5B7"]').should('be.visible')                                                      // Assertion for "additional_cilinicain" checkmark color should be Grey         
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
        cy.get(':nth-child(1) > .mt-auto').attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'}).wait(10000)                                           // Uploading Pdf file as Pathology Report        
        cy.get(':nth-child(2) > .mt-auto').attachFile("test-plan-ryoulive.doc", {subjectType:'drag-n-drop'}).wait(10000)                                    // Uploading .doc file as Insurance Cards/Billing Face Sheet        
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
})

describe.skip('IDgenetix Online Order Submission Suite', function() {

    it.skip("Verify that IDgenetix: Online Order Created and Submitted Successfully", function()  {

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
            cy.get('[type="submit"]').contains("Sign In").should('be.visible').and('exist').and('contain','Sign In').click().wait(40000)                    // Get submit btn by btn type and cick on it   >> Best Practise                    
        })
        
        cy.get('[href="/test-orders"] > .flex').contains("test orders").should('be.visible').and('exist').and('contain','orders').click().wait(2000)        // Check the URL containing test-orders link           
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
                    
        cy.get('label').contains('IDgenetix:').parent().should('contain.text', 'IDgenetix:')                                                                // Assertion for "IDgenetix:" Test should be present
        .and('contain.text','Comprehensive genomic analysis to help match patients with the right medications and identifies drug-drug interactions to improve medication response and remission rates')
        cy.get('label').contains('DecisionDx-UMSeq:').click()                                                                                               // "IDgenetix:" clicked

        cy.get('input[id="8"]').should('be.checked')                                                                                                        // Assertion for "IDgenetix:" Test should be checked
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
        
        cy.get(':nth-child(2) > .flex > .break-normal').contains("Patient Information").should('have.text','Patient Information')                           // Assertion for "Patient Information" heading should be present on left side    
        .should('be.visible').and('exist').and('contain','Patient').click().wait(2000)
        cy.get('.mt-1').contains("First name is required!").should('have.text','First name is required!')                                                   // Assertion for "First name is required!" validation message
        .should('be.visible').and('exist').and('contain','First name').wait(500)
        cy.get(':nth-child(4) > .mt-1').contains("Last name is required!").should('have.text','Last name is required!')                                     // Assertion for "Last name is required!" validation message
        .should('be.visible').and('exist').and('contain','Last name').wait(500)
        cy.get(':nth-child(5) > :nth-child(2) > .mt-1').contains("Sex at Birth is required").should('have.text','Sex at Birth is required')                 // Assertion for "Sex at Birth is required" validation message
        .should('be.visible').and('exist').and('contain','Sex at Birth').wait(500)
        cy.get('input[name="patient_firstname"]').type('QA Pateint One')                                                                                    // Taking input for "patient_firstname"        
        cy.get('input[name="patient_lastname"]').type('Automated test')                                                                                     // Taking input for "patient_lastname" 
        cy.get('input[name="patient_gender"]').click().wait(1000)                                                                                           // Tpping to "patient_gender" dropdown
        cy.get('.shadow-md > :nth-child(1)').contains("Female").should('have.text','Female').and('exist')                                                   // Taking input for "patient_gender"
        .and('contain','Female').click().wait(500)
        cy.get('.transition-all').contains("14%").should('have.text','14%').should('be.visible').and('exist').and('contain','14%').wait(500)                // Assertion for "progress Bar" 14% should be moved on Select Test Step

        cy.get('#patient_ssn').focus().blur().wait(500)                                                                                                     // Taking invalid input for "patient_email"        
        cy.get('.focus\\:outline-primary > .flex > .mr-5 > .mt-1').contains("SSN is required").should('have.text','SSN is required')                        // Assertion for "First name is required!" validation message
        cy.get('#patient_ssn').type('123').wait(500)                                                                                                        // Taking invalid input for "patient_ssn"
        cy.get('.focus\\:outline-primary > .flex > .mr-5 > .mt-1').contains("SSN must contain 9 digits with following format 000-00-0000")                  // Assertion for invalid patient_ssn no validation message        
        .should('have.text','SSN must contain 9 digits with following format 000-00-0000')                        
        cy.get('#patient_ssn').clear().wait(500)                                                                                                            // making clear "patient_ssn" field
        cy.get('#patient_ssn').type('232-23-2323').wait(500)                                                                                                // Taking valid input for "patient_ssn"
        cy.get('.transition-all').contains("29%").should('have.text','29%').should('be.visible').and('exist').and('contain','29%').wait(500)                // Assertion for "progress Bar" 29% should be moved on Select Test Step

        cy.get('#patient_ssn').clear().wait(500)                                                                                                            // making clear "patient_ssn" field
        cy.get('.transition-all').contains("14%").should('have.text','14%').should('be.visible').and('exist').and('contain','14%').wait(500)                // Assertion for "progress Bar" 14% should be moved on Select Test Step
        cy.get('#patient_mrn').type('123').wait(500)                                                                                                        // Taking valid input for "patient_mrn"
        cy.get('.transition-all').contains("29%").should('have.text','29%').should('be.visible').and('exist').and('contain','29%').wait(500)                // Assertion for "progress Bar" 29% should be moved on Select Test Step

        
        // Patient Contact Information Section
        // patient_email
        cy.get('input[name="patient_email"]').type('abc').wait(500)                                                                                       // Taking invalid input for "patient_email"        
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
        cy.get('svg').find('path[fill="#18B5B7"]').should('have.attr', 'stroke', 'white')                                                                  // Assertion for "Patient Information" checkmark color should be red

        // BILLING INFORMATION Section
        cy.get(':nth-child(3) > .flex > .break-normal').contains("billing information").should('have.text','billing information')                           // Assertion for "billing information" heading should be present on left side    
        .should('be.visible').and('exist').and('contain','billing').click().wait(5000)
        cy.get(':nth-child(3) > .flex > .text-left').find('path[fill=none]').should('be.visible')                                                           // Assertion for "billing information" checkmark color should be none 
        cy.get('.transition-all').contains("29%").should('have.text','29%').should('be.visible').and('exist').and('contain','29%').wait(500)                // Assertion for "progress Bar" 29% should be moved on Select Test Step    
        //cy.get('.mt-5 > .text-base').contains("Billing Information").should('have.text','Billing Information')                                            // Assertion for "billing information" heading should be present on section            
        //.should('be.visible').and('exist').and('contain','Billing').wait(500)  
        cy.get('input[name="icd_10"]').click().wait(1000)                                                                                                   // Tapping to icd_10 dropdown
        cy.get('.flex > .shadow-md').within(() => {                                                                                                         // Verifying all items exist in dropdown
            cy.contains('E11.42 Type 2 diabetes mellitus with diabetic polyneuropathy').should('be.visible')
            cy.contains('F20.0 Paranoid schizophrenia').and('exist')
            cy.contains('F20.1 Disorganized schizophrenia').should('be.visible').and('exist')
            cy.contains('F20.2 Catatonic schizophrenia').should('be.visible').and('exist')
            cy.contains('F20.3 Undifferentiated schizophrenia').should('exist')
            cy.contains('F20.5 Residual schizophrenia').should('exist')
            cy.contains('F20.81 Schizophreniform disorder').should('exist')
            cy.contains('F20.89 Other schizophrenia').should('exist')            
            cy.contains('F31.0 Bipolar disorder, current episode hypomanic').should('exist')            
            cy.contains('F31.11 Bipolar disorder, current episode manic without psychotic features, mild').should('exist')            
            cy.contains('F31.12 Bipolar disorder, current episode manic without psychotic features, moderat').should('exist')            
            cy.contains('F31.13 Bipolar disorder, current episode manic without psychotic features, severe').should('exist')            
            cy.contains('F31.2 Bipolar disorder, current episode manic severe with psychotic features').should('exist')            
            cy.contains('F31.31 Bipolar disorder, current episode depressed, mild').should('exist')            
            cy.contains('F31.32 Bipolar disorder, current episode depressed, moderate').should('exist')            
            cy.contains('F31.4 Bipolar disorder, current episode depressed, severe, without psychotic features').should('exist')            
            cy.contains('F31.5 Bipolar disorder, current episode depressed, severe, with psychotic features').should('exist')            
            cy.contains('F31.61 Bipolar disorder, current episode mixed, mild').should('exist')            
            cy.contains('F31.62 Bipolar disorder, current episode mixed, moderate').should('exist')            
            cy.contains('F31.63 Bipolar disorder, current episode mixed, severe, without psychotic features').should('exist')            
            cy.contains('F31.64 Bipolar disorder, current episode mixed, severe, with psychotic features').should('exist')            
            cy.contains('F31.71 Bipolar disorder, in partial remission, most recent episode hypomanic').should('exist')            
            cy.contains('F31.73 Bipolar disorder, in partial remission, most recent episode manic').should('exist')            
            cy.contains('F31.75 Bipolar disorder, in partial remission, most recent episode depressed').should('exist')            
            cy.contains('F31.77 Bipolar disorder, in partial remission, most recent episode mixed').should('exist')              
            cy.contains('F32.1 Major depressive disorder, single episode, moderate').should('exist')  
            cy.contains('F32.2 Major depressive disorder, single episode, severe without psychotic features').should('exist')  
            cy.contains('F32.3 Major depressive disorder, single episode, severe with psychotic features').should('exist')  
            cy.contains('F32.4 Major depressive disorder, single episode, in partial remission').should('exist')  
            cy.contains('F33.1 Major depressive disorder, recurrent, moderate').should('exist')              
            cy.contains('F33.2 Major depressive disorder, recurrent, severe without psychotic features').should('exist')  
            cy.contains('F33.3 Major depressive disorder, recurrent, severe with psychotic symptoms').should('exist')  
            cy.contains('F33.41 Major depressive disorder, recurrent, in partial remission').should('exist')  
            cy.contains('F40.11 Social phobia, generalized').should('exist')  
            cy.contains('F41.0 Panic disorder [episodic paroxysmal anxiety]').should('exist')  
            cy.contains('F41.1 Generalized anxiety disorder').should('exist')  
            cy.contains('F41.3 Other mixed anxiety disorders').should('exist')  
            cy.contains('F41.8 Other specified anxiety disorders').should('exist')  
            cy.contains('F43.11 Post-traumatic stress disorder, acute').should('exist')  
            cy.contains('F43.12 Post-traumatic stress disorder, chronic').should('exist')  
            cy.contains('F60.5 Obsessive-compulsive personality disorder').should('exist')  
            cy.contains('F90.0 Attention-deficit hyperactivity disorder, predominantly inattentive type').should('exist')  
            cy.contains('F90.1 Attention-deficit hyperactivity disorder, predominantly hyperactive type').should('exist')  
            cy.contains('F90.2 Attention-deficit hyperactivity disorder, combined type').should('exist')  
            cy.contains('F90.8 Attention-deficit hyperactivity disorder, other type').should('exist')  
            cy.contains('G40.201 Localization-related (focal) (partial) symptomatic epilepsy and epileptic syndromes with complex partial seizures, not intractable with status epilepticus').should('exist')  
            cy.contains('G43.001 Migraine without aura, not intractable, with status migrainosus').should('exist')  
            cy.contains('G43.701 Chronic migraine without aura, not intractable, with status migrainosus').should('exist')  
            cy.contains('G43.711 Chronic migraine without aura, intractable, with status migrainosus').should('exist')  
            cy.contains('M15.0 primary generalized (osteo) arthritis').should('exist')  
            cy.contains('M54.51 Vertebrogenic low back pain').should('exist')              
        })

        cy.get('.shadow-md > :nth-child(3)').contains("F20.1 Disorganized schizophrenia")                                                                   // Selectimg F20.1 Disorganized schizophrenia...... from dropsown                         
        .should('have.text','C69.41 Malignant neoplasm of right ciliary body')      
        .should('be.visible').and('exist').and('contain','C69.41').click().wait(1000)        
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
        cy.get(':nth-child(1) > .react-datepicker__day--028').click().wait(500)                                                                             // Selecting Date fron DTP
        cy.get(':nth-child(3) > .flex > .text-left').find('path[fill="#18B5B7"]').should('be.visible')                                                      // Assertion for "billing_information" checkmark color should be red 
        cy.get('.transition-all').contains("43%").should('have.text','43%').should('be.visible').and('exist').and('contain','43%').wait(500)                // Assertion for "progress Bar" 43% should be moved on billing_information Step    
        
        // Clinical Information Section
        cy.get(':nth-child(4) > .flex > .break-normal').contains("Clinical Information").should('have.text','Clinical Information')                         // Assertion for "Clinical Information" heading should be present on left side    
        .should('be.visible').and('exist').and('contain','Clinical').click().wait(1000)             
        //cy.contains('label', 'No').prev('input[name="question1"]').check({force: true});
        //cy.get('.py-2 > .text-borderGray').click()    
        cy.contains('label', "I don't know").should('have.text', "I don't know").prev('input[type="radio"]').click({force: true})
        
        //cy.get('div.scroll-my-32:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2)').click()    
        //cy.contains('div', 'Add-On Testing: DecisionDx-Prame').parent().find('label').contains('No').should('exist').click();
        cy.get(':nth-child(4) > .flex > .text-left').find('path[fill="#18B5B7"]').should('be.visible')                                                      // Assertion for "Clinical_Information" checkmark color should be red 
        //cy.get('.transition-all').contains("57%").should('have.text','57%').should('be.visible').and('exist').and('contain','57%').wait(500)              // Assertion for "progress Bar" 57% should be moved on billing_information Step    
        
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
        cy.get(':nth-child(1) > .mt-auto').attachFile("QA-Handbook.pdf", {subjectType:'drag-n-drop'}).wait(10000)                                           // Uploading Pdf file as Pathology Report        
        cy.get(':nth-child(2) > .mt-auto').attachFile("test-plan-ryoulive.doc", {subjectType:'drag-n-drop'}).wait(10000)                                    // Uploading .doc file as Insurance Cards/Billing Face Sheet        
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
})  */