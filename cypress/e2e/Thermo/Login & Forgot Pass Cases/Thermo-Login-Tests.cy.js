
const { expect } = require("chai")


let textFromIframe;
describe('Login Tests', function() {
    
        it("Header Assertions logo/Theme/Language", function()  {
            //cy.viewport(1920, 1080)    
            cy.visit("http://dev.thermoform.net/")                                                                                      
            cy.wait(5000) 

            // Implicit Assertions using Should keyword
            cy.url()
            .should('include', 'thermoform.net')                                                                                                                // Assertion few words from URL
            //cy.url().should('contain', 'thermoform')  
            //cy.wait(1000)                                                                                                                                     // Assertion few words from URL        >> Same function
            //cy.url()
            //.should('eq', 'https://dev.thermoform.net/auth/en-CA/sign-in?callbackUrl=https%3A%2F%2Fdev.thermoform.net%2F')                                                                                                // Complete URL Assertion                 
            
            // Asserting logo present with its orignal height/width
            cy.get('svg')
            .should('have.attr', 'width', '180')
            .and('have.attr', 'height', '30.97414618991674')
            .find('path')
            .first()
                    
            cy.get('.MuiAvatar-circular').click()                                                                                                               // Asserting login button present with its avaialble options	 
            
            // Asserting theme icon
            cy.get('svg')
            .should('have.attr', 'width', '180')
            .and('have.attr', 'height', '30.97414618991674')
            .find('path')
            .first()                                                                                                              
            
            cy.get('.MuiListItemText-primary').contains("Dark Mode").should('be.visible').and('exist').and('contain','Dark')                                    // Asserting Use dark theme text        
            cy.get('.MuiSwitch-input').click().wait(1000)	                                                                                                    // Click Theme color togle button to on
            cy.get('.MuiSwitch-input').click().wait(1000)	                                                                                                    // Click Theme color togle button to off
            cy.get('.MuiListItemText-primary').contains("English (Canada)").should('be.visible').and('exist').and('contain','English').click().wait(1000)       // changing portal language to English
            cy.get('.MuiListItemText-primary').contains("Français (Canada)").should('be.visible').and('exist').and('contain','Français').click().wait(1000)     // changing portal language to Français            
            cy.get('.MuiListItemText-primary').contains("English (Canada)").should('be.visible').and('exist').and('contain','English').click()                  // changing portal language back to English            
        })

        it("Login With Invalid/valid cradentials Using Password Authentiction", function()  {

            //cy.viewport(1920, 1080)    
            cy.visit("http://dev.thermoform.net/") 
            cy.wait(5000)
            cy.get('.MuiTypography-root').contains("Identification").should('be.visible').and('exist')                                                          // Asssertion of Identification Text
            cy.get('input[name="username"]').type("abdef##$").wait(500)                                                                                         // input invalid username            
            cy.get('[type="submit"]').contains("Next").should('be.visible').and('exist').and('contain','Next').click().wait(500)                                // Click to Next button        
            cy.get('.MuiFormHelperText-root').contains("Invalid Username").should('be.visible').and('exist').and('contain','Username')                          // Asssertion of invalid username error alert
            cy.get('input[name="username"]').clear()                                                                                                            // Clear the input username box
            cy.get('input[name="username"]').type("newuserautomationtest@yopmail.com").wait(500)                                                                // Input valid username                        
            cy.get('[type="submit"]').contains("Next").should('be.visible').and('exist').and('contain','Next').click().wait(500)                                // Click to SignUp button        
            cy.get('input[name="password"]').type("abc").wait(500)                                                                                              // input invalid password
            cy.get('[type="submit"]').contains("Submit").should('be.visible').and('exist').and('contain','Submit').click().wait(500)                            // Click to Submit button       
            cy.get('.MuiFormHelperText-root').contains("Incorrect Password").should('be.visible').and('exist').and('contain','Password')                        // Asssertion of invalid password error alert 
            cy.get('input[name="password"]').clear()                                                                                                            // Clear the input password box
            cy.get('input[name="password"]').type("Abc12345()").wait(500)                                                                                       // Input valid password
            cy.get('[type="submit"]').contains("Submit").should('be.visible').and('exist').and('contain','Submit').click().wait(10000)                          // Click to Submit button        
            //cy.get('.css-1w8s6so > .MuiAvatar-root').click().wait(500)                                                                                          // Click to Login button for logout user 
            //cy.get(':nth-child(6) > .MuiListItemIcon-root').click()                                                                                             // Click to Logout button to logout the user
            //cy.url().should('be.equal', 'https://dev.thermoform.net/auth/en-CA/sign-in?callbackUrl=https%3A%2F%2Fdev.thermoform.net%2F')        
        })

        it("Login With Invalid/valid cradentials Using Email Authentiction", function()  {

            //cy.viewport(1920, 1080)    
            cy.visit("http://dev.thermoform.net/").wait(500)        
            cy.get('.MuiTypography-h5').contains("Identification").should('be.visible').and('exist').wait(500)                                                  // Asssertion of Identification Text        
            cy.get('input[name="username"]').type("abdef##$").wait(500)                                                                                         // input invalid username                
            cy.get('[type="submit"]').contains("Next").should('be.visible').and('exist').and('contain','Next').click().wait(500)                                // Click to Next button        
            cy.get('.MuiFormHelperText-root').contains("Invalid Username").should('be.visible').and('exist').and('contain','Username').wait(500)                // Asssertion of invalid username error alert
            cy.get('input[name="username"]').clear().wait(500)                                                                                                  // Clear the input username box
            cy.get('input[name="username"]').type("testautomationuser123").wait(500)                                                                            // Input valid username                        
            cy.get('[type="submit"]').contains("Next").should('be.visible').and('exist').and('contain','Next').click().wait(500)                                // Click to SignUp button        
            cy.get('.MuiTypography-root').contains("Email Authentication").should('be.visible').and('exist').and('contain','Email')                             // Asssertion of Identification Text
            cy.get('[type="submit"]').contains("Send Authentication Link").should('be.visible').and('exist').and('contain','Authentication').click().wait(500)  // Click to Next button
            cy.get('.MuiPaper-root > .MuiTypography-root').contains("One time password").should('be.visible').and('exist').and('contain','password')            // Asssertion of One time password Text        
            cy.get('input[name="pin"]').type("232323").wait(500)                                                                                                // Input invalid pin                        
            cy.get('[type="submit"]').contains("Verify").should('be.visible').and('exist').and('contain','Verify').click().wait(2000)	                        // Click to Verify button        
            
            cy.origin('https://yopmail.com/en/', () => {
                
                cy.visit("https://yopmail.com/en/");
                cy.get('input[name="login"]').type("testautomationuser123@yopmail.com").wait(500)
                cy.get('#refreshbut > .md > .material-icons-outlined').click().wait(500)

                // Save the text inside the iframe to the variable using cy.task()
                cy.get('#ifmail').then(($iframe) => {
                    const iframeDoc = $iframe.contents();
                    return cy.wrap(iframeDoc.find('strong')).invoke('text');
                }).then((text) => {
                    textFromIframe = text || ''; // Ensure a default value (empty string) if 'text' is undefined
                    cy.log('Text from iframe:', textFromIframe);

                    // Save the textFromIframe value using cy.task()
                    cy.task('saveVariable', { key: 'textFromIframe', value: textFromIframe });

                    // Move to the second origin
                    cy.visit("https://dev.thermoform.net/auth/pin/verify?callbackUrl=https%3A%2F%2Fdev.thermoform.net%2F");
                });
            });

                // On the second origin
                cy.task('getVariable', 'textFromIframe').then((receivedTextFromIframe) => {
                // Use the receivedTextFromIframe variable as needed in the second origin
                cy.log('Received Text from iframe:', receivedTextFromIframe)
                cy.get('input[name="pin"]').type(receivedTextFromIframe).wait(500)
                cy.get('[type="submit"]').contains("Verify").should('be.visible').and('exist').and('contain','Verify').click().wait(500)
            });        
            
    //        cy.get('.css-1w8s6so > .MuiAvatar-root').click().wait(500)                                                                                          // Click to Login button for logout user 
    //      cy.get(':nth-child(6) > .MuiListItemIcon-root').click()                                                                                             // Click to Logout button to logout the user
        })

    })

