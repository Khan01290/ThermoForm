const { expect } = require("chai")


describe('Login/SignUp Test-Suite', function() {
    
    it.skip("Landing Page Assertions", function()  {
        cy.viewport(1920, 1080)    
        cy.visit("https://demo.clabsportal.com/") 
        cy.wait(1000) 

        // Implicit Assertions using Should keyword
        cy.url().should('include', 'clabsportal.com')                                                                                                       // Assertion few words from URL
        //cy.url().should('contain', 'clabsportal')                                                                                                         // Assertion few words from URL        >> Same function
        cy.url().should('eq', 'https://demo.clabsportal.com/')                                                                                              // Complete URL Assertion         
        cy.title().should('eq', 'Home | CSTL')                                                                                                              // Assertion Title            
        cy.get(".text-lg").contains("Existing Customer").should('be.visible').and('exist').and('contain','Existing')                                        // Assertion for Existing Customer using class
        cy.get('[type="button"]').contains("login").should('be.visible').and('exist').and('contain','login')                                                // Assertion for Login button using class
        cy.get(".text-lg").contains("New Customer").should('be.visible').and('exist').and('contain','New')                                                  // Assertion for New Customer        
        cy.get('[type="button"]').contains("sign up").should('be.visible').and('exist').and('contain','sign up')                                            // Assertion for New Customer       
        cy.wait(1000) 
    })

     it.skip("Login With Empty fields", function()  {

        cy.viewport(1920, 1080)    
        cy.visit("https://demo.clabsportal.com/")         
        
        // Login Button Click
        ////cy.get(".text-lg").contains("Existing Customer")                                                                                                // Assertion for Existing Customer
        //cy.get(".w-full").contains("login").click()                                                                                                       // Click to Login button usimg class name      
        cy.get('[type="button"]').contains("login").should('be.visible').and('exist').and('contain','login').click()	                                    // Click to Login button usimg btn type    >> Best Practise  
        
        // Input username
        cy.origin('https://dev-2737508.okta.com', () => {
            
            cy.get('[type="submit"]').contains("Sign In").should('be.visible').and('exist').and('contain','Sign In').click()	                            // Get submit btn by btn type and cick on it   >> Best Practise
            cy.get(".okta-form-infobox-error").contains("We found some errors. Please review the form and make corrections.").should('be.visible').and('exist')            
            cy.get(".okta-form-input-error").contains("Please enter a username").should('be.visible').and('exist').and('contain','username')                // Assertion for validtion error message of username
            cy.get(".okta-form-input-error").contains("Please enter a password").should('be.visible').and('exist').and('contain','password')                // Assertion for validtion error message of password
        })            
    })

    it.skip("Login With Incorrect User Cradentials", function()  {

        cy.viewport(1920, 1080)
        cy.visit("https://demo.clabsportal.com/") 
        
        // Login Button Click
        //cy.get(".w-full").contains("login").should('be.visible').and('exist').and('contain','login').click()                                              // Click to Login button and check if the btn text is "login"       
        cy.get('[type="button"]').contains("login").should('be.visible').and('exist').and('contain','login').click()	                                    // Click to Login button usimg btn type    >> Best Practise

        // Input username
        cy.origin('https://dev-2737508.okta.com', () => {        
            
            cy.get('input[name="username"]').type("abdef##$d@gmail.com")                                                                                    // Get username by attribute name and type in it
            cy.get('input[name="username"]').should('have.value','abdef##$d@gmail.com')                                                                     // Check username if the username is correctly input
            cy.get('input[name="password"]').type("abcee_test")                                                                                             // Get password by attribute name and type in it
            cy.get('input[name="password"]').should('have.value','abcee_test')                                                                              // Check password if the password is correctly input
            cy.get('[type="submit"]').contains("Sign In").should('be.visible').and('exist').and('contain','Sign In').click()	                            // Get submit btn by btn type and cick on it   >> Best Practise
            cy.get("div.okta-form-infobox-error").contains("Unable to sign in").should('be.visible').and('exist').and('contain','Unable')  
        })            
    })

    it.skip("Login With Correct User Cradentials", function()  {

        cy.viewport(1920, 1080)
        cy.visit("https://demo.clabsportal.com/") 
        
        // Login Button Click
        ////cy.get(".text-lg").contains("Existing Customer")                                                                                                // Assertion for Existing Customer
        cy.wait(500)
        //cy.get(".w-full").contains("login").should('be.visible').and('exist').and('contain','login').click()                                              // Click to Login button and check if the btn text is "login"       
        cy.get('[type="button"]').contains("login").should('be.visible').and('exist').and('contain','login').click()	                                    // Click to Login button usimg btn type    >> Best Practise
               
        // Input username
        cy.origin('https://dev-2737508.okta.com', () => {        
            cy.wait(500)
            cy.get('input[name="username"]').type("silijac368@paldept.com")                                                                                 // Get username by attribute name and type in it
            cy.get('input[name="username"]').should('have.value','silijac368@paldept.com')                                                                  // Check username if the username is correctly input            
            cy.get('input[name="password"]').type("Cv8cf3iHa")                                                                                              // Get password by attribute name and type in it
            cy.get('input[name="password"]').should('have.value','Cv8cf3iHa')                                                                               // Check password if the password is correctly input
            //cy.get("input#okta-signin-submit").should('be.visible').and('exist').and('contain','Sign In').click()                                         // Get submit btn and check if the btn text is "Sign In" 
            cy.get('[type="submit"]').contains("Sign In").should('be.visible').and('exist').and('contain','Sign In').click()	                            // Get submit btn by btn type and cick on it   >> Best Practise
            cy.wait(30000)        
        })            
    })

    it.skip("Sign Up ORG/Cilinician with OM", function()  {
    
        cy.viewport(1920, 1080)    
        cy.visit("https://demo.clabsportal.com/")                                                                                                           // Loading Portal  
             
        //cy.get(".w-full").contains("sign up").should('be.visible').and('exist').and('contain','sign up').click()                                          // Click to SignUp button        
        cy.get('[type="button"]').contains("sign up").should('be.visible').and('exist').and('contain','sign up').click().wait(5000)	                        // Click to SignUp button        
        //cy.get(".bg-primary").contains("next").should('be.visible').and('exist').and('contain','next').click()                                            // Clicking to Next Button
        cy.get('[type="submit"]').contains("next").should('be.visible').and('exist').and('contain','next').click()	                                        // Clicking to Next Button
        cy.get(".text-xs").contains("Organization name is required!").should('be.visible').and('exist').and('contain','Organization')                       // Assertion for validtion error message of ganization name
        cy.get(".text-xs").contains("Phone is required!").should('be.visible').and('exist').and('contain','Phone')                                          // Assertion for validtion error message of Phone #
        cy.get(".text-xs").contains("Fax is required!").should('be.visible').and('exist').and('contain','Fax')                                              // Assertion for validtion error message of Fax #        
        cy.get(".text-xs").contains("Address is required").should('be.visible').and('exist').and('contain','Address')                                       // Assertion for validtion error message of Address
        cy.get(".text-xs").contains("State/Province is required!").should('be.visible').and('exist').and('contain','State')                                 // Assertion for validtion error message of State/Province        
        cy.get(".text-xs").contains("City is required!").should('be.visible').and('exist').and('contain','City')                                            // Assertion for validtion error message of City
        cy.get(".text-xs").contains("Zip code is required!").should('be.visible').and('exist').and('contain','Zip code')                                    // Assertion for validtion error message of Zip code 
        //cy.get("input#organization_name").type("SS ORg")                                                                                                  // Get input Organization Name
        cy.get('input[name="organization_name"]').type("SS ORg")                                                                                            // Get Organization Name by attribute name and type in it
        cy.get("input#organization_name").should('have.value','SS ORg')                                                                                     // Check org name if the org name is correctly input        
        cy.get("input#description").type("testing")                                                                                                           // Get input description
        //cy.get("#description").should('have.value','testing')                                                                                             // Check if the description is correctly input        
        cy.get('input[name="phone"]').type("343")                                                                                                           // Get invalid Phone #
        cy.get('input[name="phone"]').should('have.value','343-___-____')                                                                                   // Check if the invalid Phone is correctly input        
        cy.get(".text-xs").contains("Phone must contain 10 digits with following format 000-000-0000.").should('be.visible').and('exist').and('contain','000-000-0000') 
        cy.get('input[name="phone"]').clear()                                                                                                                // Clear Phone Field        
        cy.get('input[name="phone"]').type("237-858-5177")                                                                                                   // Input valid Phone # 
        cy.get('input[name="phone"]').should('have.value','237-858-5177')                                                                                    // Check if the valid Phone # is correctly input        
        cy.get('input[name="fax"]').type("343")                                                                                                              // Get invalid fax #
        cy.get('input[name="fax"]').should('have.value','343-___-____')                                                                                      // Check if the invalid fax is correctly input  
        cy.get(".text-xs").contains("Fax must contain 10 digits with following format 000-000-0000.").should('be.visible').and('exist').and('contain','000-000-0000')         
        cy.get('input[name="fax"]').clear()                                                                                                                  // Clear fax Field        
        cy.get('input[name="fax"]').type("237-858-5177")                                                                                                     // Input valid fax # 
        cy.get('input[name="fax"]').should('have.value','237-858-5177')                                                                                      // Check if the valid fax is correctly input        
        cy.get('input[name="address"]').type("Automaton Testing")                                                                                            // Get address
        cy.get('input[name="address"]').should('have.value','Automaton Testing')                                                                             // Check if the address is correctly input        
        //cy.get('#state').click().wait(2000)                                                                                                                  // Get state
        cy.get('input[name="state"]').type("California")                                                                                                     // Get state
        cy.get('input[name="state"]').should('have.value','California')                                                                                      // Check if the state is correctly input       
        cy.focused().click()    
        cy.get('input[name="city"]').type("Acton")                                                                                                           // Get city
        cy.get('input[name="city"]').should('have.value','Acton')                                                                                            // Check if the city is correctly input        
        cy.get('input[name="zip_code"]').type("123")                                                                                                         // Get Invalid zip_code
        cy.get('input[name="zip_code"]').should('have.value','123')                                                                                          // Check if the Invalid zip_code is correctly input        
        //cy.get(".bg-primary").contains("next").should('be.visible').and('exist').and('contain','next').click()                                             // Clicking to Next Button
        cy.get('[type="submit"]').contains("next").should('be.visible').and('exist').and('contain','next').click()	                                         // Get submit btn by btn type and cick on it   >> Best Practise        
        cy.get(".text-xs").contains("Length must equal to 5").should('be.visible').and('exist').and('contain','5')                                           // Assertion for validtion error message of invalid zip_code    
        cy.get('input[name="zip_code"]').clear()                                                                                                             // Clear zip_code        
        cy.get('input[name="zip_code"]').type("12345")                                                                                                       // Get valid zip_code
        cy.get('input[name="zip_code"]').should('have.value','12345')                                                                                        // Check if the valid zip_code is correctly input        
        //cy.get('input#DecisionDx-Melanoma').check()                                                                                                        // DecisionDx-Melanoma Checked
        cy.get('input[name="cm"]').check()                                                                                                                   // DecisionDx-Melanoma Checked        
        //cy.get('input#DecisionDx-SCC').check()                                                                                                             // DecisionDx-SCC Checked
        cy.get('input[name="scc"]').check()                                                                                                                  // DecisionDx-SCC Checked        
        //cy.get('input#DecisionDx-UM').check()                                                                                                              // DecisionDx-UM Checked
        cy.get('input[name="um"]').check()                                                                                                                   // DecisionDx-UM Checked        
        //cy.get('input#TissueCypher').check()                                                                                                               // TissueCypher Checked
        cy.get('input[name="tc"]').check()                                                                                                                   // TissueCypher Checked        
        cy.get('input[name="ddm"]').check()                                                                                                                  // MyPath Melanoma Checked
        //cy.get('input#IDgenetix').check()                                                                                                                  // IDgenetix Checked  
        cy.get('input[name="idg"]').check()                                                                                                                  // IDgenetix Checked   
        //cy.get(".bg-primary").contains("next").should('be.visible').and('exist').and('contain','next').click()                                             // Clicking to Next Button
        cy.get('[type="submit"]').contains("next").should('be.visible').and('exist').and('contain','next').click()	                                         // Clicking to Next Button    
        //cy.get(".bg-primary").contains("Next").should('be.visible').and('exist').and('contain','Next').click()                                             // Clicking to Next Button
        cy.get('[type="submit"]').contains("Next").should('be.visible').and('exist').and('contain','Next').click()	                                         // Clicking to Next Button
        cy.get(".text-xs").contains("First name is required!").should('be.visible').and('exist').and('contain','First name')                                 // Assertion for validtion error message of clinician first name
        cy.get(".text-xs").contains("Last name is required!").should('be.visible').and('exist').and('contain','Last name')                                   // Assertion for validtion error message of clinician last name        
        cy.get(".text-xs").contains("Email ID is required!").should('be.visible').and('exist').and('contain','Email ID')                                     // Assertion for validtion error message of Email ID        
        cy.get(".text-xs").contains("Suffix is required!").should('be.visible').and('exist').and('contain','Suffix')                                         // Assertion for validtion error message of Suffix         
        cy.get(".text-xs").contains("Speciality is required!").should('be.visible').and('exist').and('contain','Speciality')                                 // Assertion for validtion error message of Speciality         
        cy.get(".text-xs").contains("NPI is required!").should('be.visible').and('exist').and('contain','NPI')                                               // Assertion for validtion error message of NPI          
        cy.get('input[name="firstName"]').type('Jack')                                                                                                       // Get input clinician First Name
        cy.get('input[name="firstName"]').should('have.value','Jack')                                                                                        // Check if the clinician First Name is correctly input        
        cy.get('input[name="lastName"]').type('David')                                                                                                       // Get input clinician last Name
        cy.get('input[name="lastName"]').should('have.value','David')                                                                                        // Check if the clinician last Name is correctly input        
        cy.get('input[name="email_id"]').type('abc')                                                                                                         // Get input invalid email id
        cy.get('input[name="email_id"]').should('have.value','abc')                                                                                          // Check if the invalid email id is correctly input
        cy.get(".text-xs").contains("Email ID is invalid!").should('be.visible').and('exist').and('contain','Email ID')                                      // Assertion for validtion error message of email id 
        cy.get('input[name="email_id"]').clear()                                                                                                             // Clear email id Field        
        cy.get('input[name="email_id"]').type('abc13@gmail.com')                                                                                             // Get input valid email id
        cy.get('input[name="email_id"]').should('have.value','abc13@gmail.com')                                                                              // Check if the valid email id is correctly input        
        cy.get('input[name="suffix"]').type('APRN')                                                                                                          // Get input suffix
        cy.get('input[name="suffix"]').should('have.value','APRN')                                                                                           // Check if the suffix is correctly input
        cy.focused().click()        
        cy.get('input[name="specialty"]').type('Internal Medicine')                                                                                          // Get input specialty
        cy.get('input[name="specialty"]').should('have.value','Internal Medicine')                                                                           // Check if the specialty is correctly input        
        cy.focused().click()
        cy.get('input[name="npi"]').type('12345')                                                                                                            // Get input npi
        cy.get('input[name="npi"]').should('have.value','12345')                                                                                             // Check if the invalid npi is correctly input
        cy.get(".text-xs").contains("NPI must be a 10-digit number").should('be.visible').and('exist').and('contain','10-digit number')                      // Assertion for invalid input npi
        cy.get('input[name="npi"]').clear()                                                                                                                  // Clear npi Field
        cy.get('input[name="npi"]').type('1234567890')                                                                                                       // Get valid input npi
        cy.get('input[name="npi"]').should('have.value','1234567890')                                                                                        // Check if the specialty is correctly input
        //cy.get(".bg-primary").contains("Next").should('be.visible').and('exist').and('contain','Next').click()                                             // Clicking to Next Button
        cy.get('[type="submit"]').contains("Next").should('be.visible').and('exist').and('contain','Next').click()	                                         // Clicking to Next Button        
        cy.get('input[name="manager_email"]').type('abc')                                                                                                    // Get input Om invalid email id
        cy.get('input[name="manager_email"]').should('have.value','abc')                                                                                     // Check if the invalid email id is correctly input      
        //cy.get(".bg-primary").contains("sign up").should('be.visible').and('exist').and('contain','sign up').click()                                       // Clicking to sign up button      
        cy.get('[type="submit"]').contains("sign up").should('be.visible').and('exist').and('contain','sign up').click()	                                 // Clicking to sign up button      
        cy.get(".text-xs").contains("Email ID is invalid.").should('be.visible').and('exist').and('contain','Email ID')                                      // Assertion for validtion error message of OM invalid email id       
        cy.get('input[name="manager_email"]').clear()     
        cy.get('input[name="manager_email"]').type('abcd33@gmail.com')                                                                                       // Get input Om Valid email id
        cy.get('input[name="manager_email"]').should('have.value','abcd33@gmail.com')                                                                        // Check if the valid email id is correctly input        
        cy.get(".text-xs").contains("First name is required!").should('be.visible').and('exist').and('contain','First name')                                 // Assertion for validtion error message of OM  first name       
        cy.get('input[name="first_name"]').type('John')                                                                                                      // Get input Om First Name
        cy.get('input[name="first_name"]').should('have.value','John')                                                                                       // Check if the First Name is correctly input        
        cy.get(".text-xs").contains("Last name is required!").should('be.visible').and('exist').and('contain','Last name')                                   // Assertion for validtion error message of OM last name    
        cy.get('input[name="last_name"]').type('Heed')                                                                                                       // Get input Om Last Name
        cy.get('input[name="last_name"]').should('have.value','Heed')                                                                                        // Check if the Last Name is correctly input        
        //cy.get(".bg-primary").contains("sign up").should('be.visible').and('exist').and('contain','sign up').click()                                       // Clicking to sign up button
        cy.get('[type="submit"]').contains("sign up").should('be.visible').and('exist').and('contain','sign up').click()	                                 // Clicking to sign up button      
        cy.wait(2000)
    })

    it.skip("Sign Up ORG/Cilinician without OM", function()  {

        cy.viewport(1920, 1080)    
        cy.visit("https://demo.clabsportal.com/")                                                                                                            // Loading Portal  
             
        //cy.get(".w-full").contains("sign up").should('be.visible').and('exist').and('contain','sign up').click()                                           // Click to SignUp button        
        cy.get('[type="button"]').contains("sign up").should('be.visible').and('exist').and('contain','sign up').click().wait(5000)	                         // Click to SignUp button        
        //cy.get(".bg-primary").contains("next").should('be.visible').and('exist').and('contain','next').click()                                             // Clicking to Next Button
        cy.get('[type="submit"]').contains("next").should('be.visible').and('exist').and('contain','next').click()	                                         // Clicking to Next Button
        cy.get(".text-xs").contains("Organization name is required!").should('be.visible').and('exist').and('contain','Organization')                        // Assertion for validtion error message of ganization name
        cy.get(".text-xs").contains("Phone is required!").should('be.visible').and('exist').and('contain','Phone')                                           // Assertion for validtion error message of Phone #
        cy.get(".text-xs").contains("Fax is required!").should('be.visible').and('exist').and('contain','Fax')                                               // Assertion for validtion error message of Fax #        
        cy.get(".text-xs").contains("Address is required").should('be.visible').and('exist').and('contain','Address')                                        // Assertion for validtion error message of Address
        cy.get(".text-xs").contains("State/Province is required!").should('be.visible').and('exist').and('contain','State')                                  // Assertion for validtion error message of State/Province        
        cy.get(".text-xs").contains("City is required!").should('be.visible').and('exist').and('contain','City')                                             // Assertion for validtion error message of City
        cy.get(".text-xs").contains("Zip code is required!").should('be.visible').and('exist').and('contain','Zip code')                                     // Assertion for validtion error message of Zip code 
        //cy.get("input#organization_name").type("SS ORg")                                                                                                   // Get input Organization Name
        cy.get('input[name="organization_name"]').type("SS ORg")                                                                                             // Get Organization Name by attribute name and type in it
        cy.get("input#organization_name").should('have.value','SS ORg')                                                                                      // Check org name if the org name is correctly input        
        cy.get("input#description").type("testing")                                                                                                          // Get input description
        //cy.get("#description").should('have.value','testing')                                                                                              // Check if the description is correctly input        
        cy.get('input[name="phone"]').type("343")                                                                                                            // Get invalid Phone #
        cy.get('input[name="phone"]').should('have.value','343-___-____')                                                                                    // Check if the invalid Phone is correctly input        
        cy.get(".text-xs").contains("Phone must contain 10 digits with following format 000-000-0000.").should('be.visible').and('exist').and('contain','000-000-0000') 
        cy.get('input[name="phone"]').clear()                                                                                                                // Clear Phone Field        
        cy.get('input[name="phone"]').type("237-858-5177")                                                                                                   // Input valid Phone # 
        cy.get('input[name="phone"]').should('have.value','237-858-5177')                                                                                    // Check if the valid Phone # is correctly input        
        cy.get('input[name="fax"]').type("343")                                                                                                              // Get invalid fax #
        cy.get('input[name="fax"]').should('have.value','343-___-____')                                                                                      // Check if the invalid fax is correctly input  
        cy.get(".text-xs").contains("Fax must contain 10 digits with following format 000-000-0000.").should('be.visible').and('exist').and('contain','000-000-0000')         
        cy.get('input[name="fax"]').clear()                                                                                                                  // Clear fax Field        
        cy.get('input[name="fax"]').type("237-858-5177")                                                                                                     // Input valid fax # 
        cy.get('input[name="fax"]').should('have.value','237-858-5177')                                                                                      // Check if the valid fax is correctly input        
        cy.get('input[name="address"]').type("Automaton Testing")                                                                                            // Get address
        cy.get('input[name="address"]').should('have.value','Automaton Testing')                                                                             // Check if the address is correctly input        
        cy.get('input[name="state"]').type("California")                                                                                                     // Get state
        cy.get('input[name="state"]').should('have.value','California')                                                                                      // Check if the state is correctly input       
        cy.focused().click()    
        cy.get('input[name="city"]').type("Acton")                                                                                                           // Get city
        cy.get('input[name="city"]').should('have.value','Acton')                                                                                            // Check if the city is correctly input        
        cy.get('input[name="zip_code"]').type("123")                                                                                                         // Get Invalid zip_code
        cy.get('input[name="zip_code"]').should('have.value','123')                                                                                          // Check if the Invalid zip_code is correctly input        
        //cy.get(".bg-primary").contains("next").should('be.visible').and('exist').and('contain','next').click()                                             // Clicking to Next Button
        cy.get('[type="submit"]').contains("next").should('be.visible').and('exist').and('contain','next').click()	                                         // Get submit btn by btn type and cick on it   >> Best Practise        
        cy.get(".text-xs").contains("Length must equal to 5").should('be.visible').and('exist').and('contain','5')                                           // Assertion for validtion error message of invalid zip_code    
        cy.get('input[name="zip_code"]').clear()                                                                                                             // Clear zip_code        
        cy.get('input[name="zip_code"]').type("12345")                                                                                                       // Get valid zip_code
        cy.get('input[name="zip_code"]').should('have.value','12345')                                                                                        // Check if the valid zip_code is correctly input        
        //cy.get('input#DecisionDx-Melanoma').check()                                                                                                        // DecisionDx-Melanoma Checked
        cy.get('input[name="cm"]').check()                                                                                                                   // DecisionDx-Melanoma Checked        
        //cy.get('input#DecisionDx-SCC').check()                                                                                                             // DecisionDx-SCC Checked
        cy.get('input[name="scc"]').check()                                                                                                                  // DecisionDx-SCC Checked        
        //cy.get('input#DecisionDx-UM').check()                                                                                                              // DecisionDx-UM Checked
        cy.get('input[name="um"]').check()                                                                                                                   // DecisionDx-UM Checked        
        //cy.get('input#TissueCypher').check()                                                                                                               // TissueCypher Checked
        cy.get('input[name="tc"]').check()                                                                                                                   // TissueCypher Checked        
        cy.get('input[name="ddm"]').check()                                                                                                                  // MyPath Melanoma Checked
        //cy.get('input#IDgenetix').check()                                                                                                                  // IDgenetix Checked  
        cy.get('input[name="idg"]').check()                                                                                                                  // IDgenetix Checked   
        //cy.get(".bg-primary").contains("next").should('be.visible').and('exist').and('contain','next').click()                                             // Clicking to Next Button
        cy.get('[type="submit"]').contains("next").should('be.visible').and('exist').and('contain','next').click()	                                         // Clicking to Next Button    
        //cy.get(".bg-primary").contains("Next").should('be.visible').and('exist').and('contain','Next').click()                                             // Clicking to Next Button
        cy.get('[type="submit"]').contains("Next").should('be.visible').and('exist').and('contain','Next').click()	                                         // Clicking to Next Button
        cy.get(".text-xs").contains("First name is required!").should('be.visible').and('exist').and('contain','First name')                                 // Assertion for validtion error message of clinician first name
        cy.get(".text-xs").contains("Last name is required!").should('be.visible').and('exist').and('contain','Last name')                                   // Assertion for validtion error message of clinician last name        
        cy.get(".text-xs").contains("Email ID is required!").should('be.visible').and('exist').and('contain','Email ID')                                     // Assertion for validtion error message of Email ID        
        cy.get(".text-xs").contains("Suffix is required!").should('be.visible').and('exist').and('contain','Suffix')                                         // Assertion for validtion error message of Suffix         
        cy.get(".text-xs").contains("Speciality is required!").should('be.visible').and('exist').and('contain','Speciality')                                 // Assertion for validtion error message of Speciality         
        cy.get(".text-xs").contains("NPI is required!").should('be.visible').and('exist').and('contain','NPI')                                               // Assertion for validtion error message of NPI          
        cy.get('input[name="firstName"]').type('Jack')                                                                                                       // Get input clinician First Name
        cy.get('input[name="firstName"]').should('have.value','Jack')                                                                                        // Check if the clinician First Name is correctly input        
        cy.get('input[name="lastName"]').type('David')                                                                                                       // Get input clinician last Name
        cy.get('input[name="lastName"]').should('have.value','David')                                                                                        // Check if the clinician last Name is correctly input        
        cy.get('input[name="email_id"]').type('abc')                                                                                                         // Get input invalid email id
        cy.get('input[name="email_id"]').should('have.value','abc')                                                                                          // Check if the invalid email id is correctly input
        cy.get(".text-xs").contains("Email ID is invalid!").should('be.visible').and('exist').and('contain','Email ID')                                      // Assertion for validtion error message of email id 
        cy.get('input[name="email_id"]').clear()                                                                                                             // Clear email id Field        
        cy.get('input[name="email_id"]').type('abc13@gmail.com')                                                                                             // Get input valid email id
        cy.get('input[name="email_id"]').should('have.value','abc13@gmail.com')                                                                              // Check if the valid email id is correctly input        
        cy.get('input[name="suffix"]').type('APRN')                                                                                                          // Get input suffix
        cy.get('input[name="suffix"]').should('have.value','APRN')                                                                                           // Check if the suffix is correctly input
        cy.focused().click()        
        cy.get('input[name="specialty"]').type('Internal Medicine')                                                                                          // Get input specialty
        cy.get('input[name="specialty"]').should('have.value','Internal Medicine')                                                                           // Check if the specialty is correctly input        
        cy.focused().click()
        cy.get('input[name="npi"]').type('12345')                                                                                                            // Get input npi
        cy.get('input[name="npi"]').should('have.value','12345')                                                                                             // Check if the invalid npi is correctly input
        cy.get(".text-xs").contains("NPI must be a 10-digit number").should('be.visible').and('exist').and('contain','10-digit number')                      // Assertion for invalid input npi
        cy.get('input[name="npi"]').clear()                                                                                                                  // Clear npi Field
        cy.get('input[name="npi"]').type('1234567890')                                                                                                       // Get valid input npi
        cy.get('input[name="npi"]').should('have.value','1234567890')                                                                                        // Check if the specialty is correctly input
        //cy.get(".bg-primary").contains("Next").should('be.visible').and('exist').and('contain','Next').click()                                             // Clicking to Next Button
        cy.get('[type="submit"]').contains("Next").should('be.visible').and('exist').and('contain','Next').click()	                                         // Clicking to Next Button        
        cy.get(".bg-primary").contains("sign up").should('be.visible').and('exist').and('contain','sign up').click()                                         // Clicking to sign up button
        cy.wait(2000)
    })

    it.skip("Right user display Check After Successful Login", function()  {

        cy.viewport(1920, 1080)
        cy.visit("https://demo.clabsportal.com/") 
        
        // Login Button Click on Landing Page        
        cy.get('[type="button"]').contains("login").should('be.visible').and('exist').and('contain','login').click()	                                    // Click to Login button usimg btn type    >> Best Practise
        cy.wait(500)      
        // Input email/password
        cy.origin('https://dev-2737508.okta.com', () => {   
            cy.url().should('include', 'okta.com')                                                                                                          // Assertion few words from URL
            cy.url().should('contain', 'dev-2737508')                                                                                                       // Assertion few words from URL                 
            cy.get('input[name="username"]').type("silijac368@paldept.com")                                                                                 // Get username by attribute name and type in it
            cy.get('input[name="username"]').should('have.value','silijac368@paldept.com')                                                                  // Check username if the username is correctly input            
            cy.get('input[name="password"]').type("Cv8cf3iHa")                                                                                              // Get password by attribute name and type in it
            cy.get('input[name="password"]').should('have.value','Cv8cf3iHa')                                                                               // Check password if the password is correctly input
            //cy.get("input#okta-signin-submit").should('be.visible').and('exist').and('contain','Sign In').click()                                         // Get submit btn and check if the btn text is "Sign In" 
            cy.get('[type="submit"]').contains("Sign In").should('be.visible').and('exist').and('contain','Sign In').click()	                            // Get submit btn by btn type and cick on it   >> Best Practise
            cy.wait(1000)        

        })    
        // Checking the right user displayed after login usign explicit assertion
        let expName='SZK OM 2';
        cy.wait(500)
        cy.get("p.p-1",{ timeout: 80000 }).contains("SZK OM 2").then (   (x)=>  {            
            let actName=x.text()            
            expect(actName).to.equal(expName)                                                                                                               // BDD style Assertion            
            //assert.equal(actName,expName)                                                                                                                 // TDD style Assertion
        })       
    })
  })