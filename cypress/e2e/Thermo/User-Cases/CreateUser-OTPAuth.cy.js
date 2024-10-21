const { expect } = require("chai")

let textFromIframe;
describe('Create User With OTP Auth & Login Tests', function() {

    it("Verify that User created using OTP Auth and Login Successfully" , function()  {

        cy.viewport(1920, 1080)    
        cy.visit("https://dev.thermoform.net/") 
        cy.wait(5000)
        cy.get('.MuiTypography-root').contains("Identification").should('be.visible').and('exist')                                                              // Asssertion of Identification Text  
        cy.get('.MuiTypography-body2').contains("Forgot Password?").should('be.visible').and('exist')                                                           // Asssertion of Forgot Password? Text   
        cy.get('[type="submit"]').contains("Next").should('be.visible').and('exist').and('not.be.enabled').wait(500)                                            // Asssertion of Next btn is disabled              
        cy.get('input[name="username"]').type("masterfortesting").wait(500)                                                                                     // Input valid username                        
        cy.get('[type="submit"]').contains("Next").should('be.visible').and('exist').and('contain','Next').click().wait(500)                                    // Click to Next button         
        cy.get('.MuiTypography-h5').contains("Email Authentication").should('be.visible').and('exist').and('contain','Email').click().wait(500)                 // Asssertion of "Email Authentication" heading is present
        cy.get('input[name="email"]').should('be.visible').and('exist').wait(500)                                                                               // Asssertion of email box is present                       
        cy.get('[type="submit"]').contains("Send Authentication Link").should('be.visible').and('exist').and('contain','Authentication').wait(500)              // Asssertion of Send Authentication Link button is present
        cy.get('[type="text"]').contains("Password Authentication").should('be.visible').and('exist').and('contain','Password').click().wait(500)               // Asssertion of "Password Authentication" link is present and clicked                       
        cy.get('.MuiTypography-h5').contains("Password Authentication").should('be.visible').and('exist').and('contain','Password').click().wait(500)           // Asssertion of Password Authentication heading is present        
        cy.get('[type="text"]').contains("Email Authentication").should('be.visible').and('exist').and('contain','Email').wait(500)                             // Asssertion of Email Authentication Link is present                
        cy.get('input[name="password"]').type("[HPnotebook1@").wait(500)                                                                                        // Input valid password
        cy.get('[type="submit"]').contains("Submit").should('be.visible').and('exist').and('contain','Submit').click().wait(30000)                              // Click to Submit button          
        cy.get('.css-imv4ws > .MuiAvatar-root').click().wait(1000)                                                                                              // Asserting login button present with its avaialble options	 
        cy.get('.css-1stpmc > :nth-child(1) > .MuiListItemText-root > .MuiTypography-root').contains("Français (Canada)").should('be.visible')                  // Asserting Français (Canada) text is present and fr language is pre selected 
        .and('exist').and('contain','Français').click().wait(1000)                                                         
        cy.get('.MuiListItemText-primary').contains("English (Canada)").should('be.visible').and('exist').and('contain','English').click().wait(1000)           // Changing portal language to English
        cy.get('body').click().wait(1000)
        cy.get('.MuiToolbar-root > .MuiTypography-root').contains("Home").should('be.visible').and('exist').and('contain','Home').wait(500)                     // Asserting of Home text is present on home page
        cy.get('.MuiTypography-h4').contains("Shortcuts").should('be.visible').and('exist').and('contain','Shortcuts').wait(500)                                // Asserting of Shortcuts text is present on home page
        cy.get(':nth-child(1) > .css-zidduc > .label > .MuiTypography-root').contains("Orders").should('be.visible').and('exist')                               // Asserting of Orders text is present on home page
        .and('contain','Orders').wait(500)
        cy.get(':nth-child(2) > .css-zidduc > .label > .MuiTypography-root').contains("Cartables (Milling)").should('be.visible').and('exist')                  // Asserting of Cartables (Milling) text is present on home page
        .and('contain','Cartables').click().wait(500)
        cy.get('.MuiIconButton-colorInherit').click({force: true})                                                                                              // Click to menu icon
        cy.get(':nth-child(9) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').contains("Users & Roles").should('be.visible')              // Asserting of Users & Roles li is present on side menu
        .and('exist').and('contain','Roles').click().wait(500)
        cy.get('[title="User Management"] > .MuiListItemText-root > .MuiTypography-root').contains("User Management").should('be.visible')                      // Asserting of User Management li is present on side menu
        .and('exist').and('contain','User').click().wait(5000)        
        cy.get('.MuiToolbar-root > .MuiTypography-root').contains("User management").should('be.visible').and('exist').and('contain','User')                    // Asserting of User Management heading is present as page heading        
        cy.get('.MuiIconButton-edgeStart').click().wait(500)                                                                                                    // Asserting +(add user) icon is present on side menu        
        cy.get('.jss96 > .MuiTypography-root').contains("New user").should('be.visible').and('exist').and('contain','New')                                      // Asserting of New user heading is present on adding new user popup
        cy.get('button[disabled]').contains("Create").should('be.visible').and('exist').and('contain','Create').should('not.be.enabled')                        // Asserting of create button is present and disabled         
        cy.get('#\\:rg\\:').type('Yo')                                                                                                                          // Input Invalid User First Name
        cy.get('#\\:rg\\:').blur()                                                                                                                              // Focus away from User First Name Name input box
        cy.get('#\\:rg\\:-helper-text').should('have.css', 'color', 'rgb(211, 47, 47)').contains('Minimum required length is 3')                                // Assert that the color property is red and Check validation message is present
        .should('be.visible').and('exist').and('contain','Minimum required length')
        cy.get('#\\:rg\\:').clear()                                                                                                                             // Making clear User First Name
        cy.get('#\\:rg\\:').type('Automated Test')                                                                                                              // Input valid User First Name
        cy.get('#\\:rg\\:-helper-text').should('have.css', 'color', 'rgba(0, 0, 0, 0.6)').contains('Minimum required length is 3')                              // Assert that the color property is GREEN and Check if the text is present
        .should('be.visible').and('exist').and('contain','Minimum required length')
        cy.get('button[disabled]').contains("Create").should('be.visible').and('exist').and('contain','Create').should('not.be.enabled')                        // Asserting of create button is present and disabled
        cy.get('#\\:rh\\:').type('Yo')                                                                                                                          // Input Invalid User Last Name
        cy.get('#\\:rh\\:').blur()                                                                                                                              // Focus away from User Last Name input box
        cy.get('#\\:rh\\:-helper-text').should('have.css', 'color', 'rgb(211, 47, 47)').contains('Minimum required length is 3')                                // Assert that the color property is red and Check if the text is present
        .should('be.visible').and('exist').and('contain','Minimum required length')
        cy.get('#\\:rh\\:').clear()                                                                                                                             // Making clear User Last Name
        cy.get('#\\:rh\\:').type('By QA OTP').wait(2000)                                                                                                        // Input valid User Last Name
        cy.get('#\\:rh\\:-helper-text').should('have.css', 'color', 'rgba(0, 0, 0, 0.6)').contains('Minimum required length is 3')                              // Assert that the color property is GREEN and Check if the text is present
        .should('be.visible').and('exist').and('contain','Minimum required length')
        cy.get('button[disabled]').contains("Create").should('be.visible').and('exist').and('contain','Create').should('not.be.enabled')                        // Asserting of create button is present and disabled

        let usrnmToStoree;  
        cy.get('#\\:ri\\:').invoke('val').then((val) => {
            usrnmToStoree = val.trim() // Trim any leading or trailing whitespace
            cy.log(usrnmToStoree)
            cy.get('#\\:rj\\:').type('abc')                                                                                                                     // Input Invalid Email
            cy.get('#\\:rj\\:').blur()                                                                                                                          // Focus away from Email input box
            cy.get('#\\:rj\\:-helper-text').should('have.css', 'color', 'rgb(211, 47, 47)').contains('Email is invalid')                                        // Assert that the color property is red and Check if the text is present
            .should('be.visible').and('exist').and('contain','Email is invalid')
            cy.get('#\\:rj\\:').clear()                                                                                                                         // Making clear Email
            cy.get('#\\:rj\\:').type('automtstotp@yopmail.com')                                                                                            // Input valid Email        
            cy.get('#\\:rk\\:').click()                                                                                                                         // Selecting Authentication method from dropdown
            cy.contains('li', 'OTP').click().wait(500)                                                                                                          // Selecting OTP Authentication method from dropdown
            cy.get('.jss103 > .MuiFormControlLabel-root > .MuiTypography-root').contains('User can log in')                                                     // Asserting checkbox "You can log in" and checked
            .should('be.visible').and('exist').and('contain','log in').click().wait(500)                                                        
            cy.get('[type="button"]').contains("Create").should('be.visible').and('exist').and('contain','Create').click().wait(5000)                           // Asserting of create buttom is present and clicked
            cy.get('[tabindex="0"][role="button"][aria-expanded="false"][aria-haspopup="listbox"].MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input.css-bsoier')
            .contains('OTP')                                                                                                                                    // Asserting that OTP is selected on user detail page
            cy.contains('span.MuiTypography-root', 'User required to change password')                                                                          // Asserting that "User required to change password" is disabled
            .prev() // Move to the previous sibling which is the checkbox input element
            .should('not.be.enabled'); // Assert that the checkbox is disabled
            cy.contains('span.MuiTypography-root', 'User can log in')                                                                                           // Asserting that "User can log in" is enabled
            .prev() // Move to the previous sibling which is the checkbox input element
            .should('not.be.disabled'); // Assert that the checkbox is enabled
           
            //cy.get('#\\:r6\\:').clear()   // username on detail page
            //cy.get('#\\:r7\\:').clear()   // firstname on detail page
            //cy.get('#\\:r8\\:').clear()   // lastname on detail page
            //cy.get('#\\:r9\\:').clear()   // email on detail page
            //cy.get('.MuiGrid-grid-md-12 > .MuiInputBase-root > .MuiSelect-select').clear()   // otp is selected on detail page
            //cy.get('.jss126 > .MuiFormControlLabel-root > .MuiTypography-root').clear()   // chage password option disabled on detail page
            //cy.get('PrivateSwitchBase-input').clear()   // chage password option disabled on detail page using class        
            //cy.get(':nth-child(3) > .MuiFormControlLabel-root > .MuiTypography-root').clear()   // user login option is enabled on detail page


            cy.origin('https://yopmail.com/en/', () => {                                                                                                        // Moving to yop email system
                    
                    cy.visit("https://yopmail.com/en/");                                                                                                        // visiting the yop email site
                    cy.get('input[name="login"]').type("automtstotp@yopmail.com").wait(500)                                                                     // input email in yop email
                    cy.get('#refreshbut > .md > .material-icons-outlined').click().wait(3000)                                                                   // Click to login button            
            })
            
            //Login Using Email Authentiction
            //cy.viewport(1920, 1080)    
            cy.visit("http://dev.thermoform.net/").wait(5000)                                                                                                   // visiting the thermo portal
            cy.get('.css-imv4ws > .MuiAvatar-root').click().wait(1000)                                                                                          // Asserting login button present with its avaialble options	 
            cy.get(':nth-child(6) > .MuiListItemIcon-root').and('exist').click().wait(1000)                                                                     // Asserting Sign out text is present and clicked
            cy.clearAllCookies();                                                                                                                               // clearAllCookies                                                                                                                    
            cy.clearAllLocalStorage();                                                                                                                          // clearAllLocalStorage    
            cy.clearAllSessionStorage();                                                                                                                        // clearAllSessionStorage
            
            cy.visit("http://dev.thermoform.net/").wait(5000)        
            cy.get('.MuiTypography-h5').contains("Identification").should('be.visible').and('exist').wait(500)                                                  // Asssertion of Identification Text        
            cy.get('input[name="username"]').type("abdef##$").wait(500)                                                                                         // input invalid username                
            cy.get('[type="submit"]').contains("Next").should('be.visible').and('exist').and('contain','Next').click().wait(500)                                // Click to Next button        
            cy.get('.MuiFormHelperText-root').contains("Invalid Username").should('be.visible').and('exist').and('contain','Username').wait(500)                // Asssertion of invalid username error alert
            cy.get('input[name="username"]').clear().wait(500)                                                                                                  // Clear the input username box        
            cy.get('input[name="username"]').type(usrnmToStoree).wait(500)                                                                                      // Input valid username                        
        });
        cy.get('[type="submit"]').contains("Next").should('be.visible').and('exist').and('contain','Next').click().wait(500)                                    // Click to SignUp button        
        cy.get('.MuiTypography-root').contains("Email Authentication").should('be.visible').and('exist').and('contain','Email')                                 // Asssertion of Identification Text
        cy.get('[type="submit"]').contains("Send Authentication Link").should('be.visible').and('exist').and('contain','Authentication').click().wait(500)      // Click to Next button
        cy.get('.MuiPaper-root > .MuiTypography-root').contains("One time password").should('be.visible').and('exist').and('contain','password')                // Asssertion of One time password Text        
        cy.get('input[name="pin"]').type("232323").wait(500)                                                                                                    // Input invalid pin                        
        cy.get('[type="submit"]').contains("Verify").should('be.visible').and('exist').and('contain','Verify').click().wait(2000)	                            // Click to Verify button        
                
        cy.origin('https://yopmail.com/en/', () => {                                                                                                            // Setting origin for yop email

        cy.visit("https://yopmail.com/en/");                                                                                                                    // visiting the yop email site
        cy.get('input[name="login"]').type("automtstotp@yopmail.com").wait(500)                                                                                 // Login with this email
        cy.get('#refreshbut > .md > .material-icons-outlined').click().wait(3000)                                                                               // Click to login btn
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
                    cy.log('Received Text from iframe:', receivedTextFromIframe)                                                                                // Recieving PIN from iframe
                    cy.get('input[name="pin"]').type(receivedTextFromIframe).wait(1000)                                                                         // Input recieved pin
                    cy.get('[type="submit"]').contains("Verify").should('be.visible').and('exist').and('contain','Verify').click().wait(8000)                   // Tapping to verify buton
                    cy.get('.css-imv4ws > .MuiAvatar-root').click().wait(1000)                                                                                  // Asserting login button present with its avaialble options	 
                    cy.get(':nth-child(6) > .MuiListItemIcon-root').and('exist').click().wait(1000)                                                             // Asserting Sign out text is present and clicked
                    cy.clearAllCookies();                                                                                                                       // clearAllCookies                                                                                                                    
                    cy.clearAllLocalStorage();                                                                                                                  // clearAllLocalStorage    
                    cy.clearAllSessionStorage();  
                    cy.visit("http://dev.thermoform.net/").wait(5000) 
    })    
    });        
            
})