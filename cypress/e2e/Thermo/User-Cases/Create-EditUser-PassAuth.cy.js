const { expect } = require("chai")

let textToStore; 
describe('Create User With Pass Auth & Login Tests', function() {
     
    it("Verify that User created using Pass Auth and Login Successfully", function()  {

        // User Creation Steps:
        cy.viewport(1920, 1080)    
        cy.visit("https://dev.thermoform.net/") 
        cy.wait(5000)
        cy.get('.MuiTypography-root').contains("Identification").should('be.visible').and('exist')                                                              // Asssertion of Identification heading is present 
        cy.get('.MuiTypography-body2').contains("Forgot Password?").should('be.visible').and('exist')                                                           // Asssertion of Forgot Password? link is present   
        cy.get('[type="submit"]').contains("Next").should('be.visible').and('exist').and('not.be.enabled').wait(500)                                            // Asssertion of Next btn is disabled        
        cy.get('input[name="username"]').type("masterfortesting").wait(500)                                                                                     // Input valid username                        
        cy.get('[type="submit"]').contains("Next").should('be.visible').and('exist').and('contain','Next').click().wait(500)                                    // Click to Next button         
        cy.get('.MuiTypography-h5').contains("Email Authentication").should('be.visible').and('exist').and('contain','Email').click().wait(500)                 // Asssertion of "Email Authentication" heading is present
        cy.get('input[name="email"]').should('be.visible').and('exist').wait(500)                                                                               // Asssertion of email box is present                       
        cy.get('[type="submit"]').contains("Send Authentication Link").should('be.visible').and('exist').and('contain','Authentication').wait(500)              // Asssertion of Send Authentication Link button is present
        cy.get('[type="text"]').contains("Password Authentication").should('be.visible').and('exist').and('contain','Password').click().wait(500)               // Asssertion of "Password Authentication" link is present                       
        cy.get('.MuiTypography-h5').contains("Password Authentication").should('be.visible').and('exist').and('contain','Password').wait(500)                   // Asssertion of Password Authentication heading is present
        cy.get('.MuiTypography-body2').contains("Forgot Password?").should('be.visible').and('exist')                                                           // Asssertion of Forgot Password? link is present   
        cy.get('[type="text"]').contains("Email Authentication").should('be.visible').and('exist').and('contain','Email').wait(500)                             // Asssertion of Email Authentication Link is present                
        cy.get('input[name="password"]').type("[HPnotebook1@").wait(500)                                                                                        // Input valid password
        cy.get('[type="submit"]').contains("Submit").should('be.visible').and('exist').and('contain','Submit').click().wait(20000)                              // Click to Submit button    
        cy.get('.css-imv4ws > .MuiAvatar-root').click().wait(1000)                                                                                              // Asserting login button present with its avaialble options	 
        cy.get('.css-1stpmc > :nth-child(1) > .MuiListItemText-root > .MuiTypography-root').contains("Français (Canada)").should('be.visible')                  // Asserting Français (Canada) text is present and fr language is pre selected 
        .and('exist').and('contain','Français').click().wait(1000)                                                         
        cy.get('.MuiListItemText-primary').contains("English (Canada)").should('be.visible').and('exist').and('contain','English').click().wait(5000)           // Changing portal language to English
        cy.get('body').click().wait(5000)
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
        .and('exist').and('contain','User').click().wait(1000)        
        cy.get('.MuiToolbar-root > .MuiTypography-root').contains("User management").should('be.visible').and('exist').and('contain','User')                    // Asserting of User Management heading is present as page heading        
        cy.get('.MuiIconButton-edgeStart').click().wait(500)                                                                                                    // Asserting +(add user) icon is present on side menu        
        cy.get('.jss96 > .MuiTypography-root').contains("New user").should('be.visible').and('exist').and('contain','New')                                      // Asserting of New user heading is present on adding new user popup
        cy.get('button[disabled]').contains("Create").should('be.visible').and('exist').and('contain','Create').should('not.be.enabled')                        // Asserting of create button is present and disabled         
        cy.get('#\\:rg\\:').type('Yo')                                                                                                                          // Input Invalid User First Name
        cy.get('#\\:rg\\:').blur()                                                                                                                              // Focus away from User First Name Name input box
        cy.get('#\\:rg\\:-helper-text').should('have.css', 'color', 'rgb(211, 47, 47)').contains('Minimum required length is 3')                                // Assert that the color property is red and Check validation message is present
        .should('be.visible').and('exist').and('contain','Minimum required length')
        cy.get('#\\:rg\\:').clear()                                                                                                                             // Making clear User First Name
        cy.get('#\\:rg\\:').type('Automated Test1')                                                                                                             // Input valid User First Name
        cy.get('#\\:rg\\:-helper-text').should('have.css', 'color', 'rgba(0, 0, 0, 0.6)').contains('Minimum required length is 3')                              // Assert that the color property is GREEN and Check if the text is present
        .should('be.visible').and('exist').and('contain','Minimum required length')
        cy.get('button[disabled]').contains("Create").should('be.visible').and('exist').and('contain','Create').should('not.be.enabled')                        // Asserting of create button is present and disabled
        cy.get('#\\:rh\\:').type('Yo')                                                                                                                          // Input Invalid User Last Name
        cy.get('#\\:rh\\:').blur()                                                                                                                              // Focus away from User Last Name input box
        cy.get('#\\:rh\\:-helper-text').should('have.css', 'color', 'rgb(211, 47, 47)').contains('Minimum required length is 3')                                // Assert that the color property is red and Check if the text is present
        .should('be.visible').and('exist').and('contain','Minimum required length')
        cy.get('#\\:rh\\:').clear()                                                                                                                             // Making clear User Last Name
        cy.get('#\\:rh\\:').type('QA1').wait(1000)                                                                                                              // Input valid User Last Name
        cy.get('#\\:rh\\:-helper-text').should('have.css', 'color', 'rgba(0, 0, 0, 0.6)').contains('Minimum required length is 3')                              // Assert that the color property is GREEN and Check if the text is present
        .should('be.visible').and('exist').and('contain','Minimum required length')
        cy.wait(5000)

        // Previous code
        /*cy.get('#\\:ri\\:').invoke('val').then((value) => {                                                                                                     // Storing username in a variable
            textToStore = value.trim() // Trim any leading or trailing whitespace
            cy.log(textToStore)
          */
        // Current code
         // Get the element and store it in a global variable
        cy.get('#\\:ri\\:').invoke('val').then($el => {
        cy.setGlobalElement('myElement', $el);
        
        });
        //});
            

        //cy.get('#\\:rf\\:-helper-text').should('have.css', 'color', 'rgba(0, 0, 0, 0.6)').contains('Minimum required length is 3')                            // Assert that the color property is GREEN and Check if the text is present
        //.should('be.visible').and('exist').and('contain','Minimum required length')

        cy.get('button[disabled]').contains("Create").should('be.visible').and('exist').and('contain','Create').should('not.be.enabled')                        // Asserting of create buttom is present and disabled
        cy.get('#\\:rj\\:').type('abc')                                                                                                                         // Input Invalid Email
        cy.get('#\\:rj\\:').blur()                                                                                                                              // Focus away from Email input box
        cy.get('#\\:rj\\:-helper-text').should('have.css', 'color', 'rgb(211, 47, 47)').contains('Email is invalid')                                            // Assert that the color property is red and Check if the text is present
        .should('be.visible').and('exist').and('contain','Email is invalid')
        cy.get('#\\:rj\\:').clear()                                                                                                                             // Making clear Email
        cy.get('#\\:rj\\:').type('automat1@yopmail.com')                                                                                                        // Input valid Email        
        cy.get('#\\:rk\\:').click()                                                                                                                             // Selecting Authentication method from dropdown
        cy.contains('li', 'Password').click().wait(500)                                                                                                         // Selecting Password Authentication method from dropdown
        cy.get('.jss103 > .MuiFormControlLabel-root > .MuiTypography-root').contains('User can log in')                                                         // Asserting checkbox "You can log in" and checked
        .should('be.visible').and('exist').and('contain','log in').click().wait(1000)                                                        
        cy.get('[type="button"]').contains("Create").should('be.visible').and('exist').and('contain','Create').click().wait(5000)                               // Asserting of create buttom is present and clicked
        cy.get('[tabindex="0"][role="button"][aria-expanded="false"][aria-haspopup="listbox"].MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input.css-bsoier')
        .contains('Password')                                                                                                                                   // Asserting that Password is selected on user detail page
        cy.contains('span.MuiTypography-root', 'User required to change password')                                                                              // Asserting that "User required to change password" is enabled
        .prev() // Move to the previous sibling which is the checkbox input element
        .should('not.be.disabled'); // Assert that the checkbox is enabled
        cy.contains('span.MuiTypography-root', 'User can log in')
        .prev() // Move to the previous sibling which is the checkbox input element
        .should('not.be.disabled'); // Assert that the checkbox is enabled
        //cy.get('#\\:r6\\:').clear().wait(500)                                                                                                                 // Making clear User Name
        //cy.get('#\\:r7\\:').clear().wait(500)                                                                                                                 // Making clear first Name
        //cy.get('#\\:r8\\:').clear().wait(500)                                                                                                                 // Making clear Last Name
        //cy.get('#\\:r9\\:').clear().wait(500)                                                                                                                 // Making clear Email
        //cy.get('[title="Role.save"]').click().wait(500)                                                                                                       // savign the data
        // User Edit Tests:
        //cy.get('MuiAlert-message').contains("Email cannot be empty").should('be.visible').and('exist').and('contain','Email cannot').click().wait(500)        // Asserting of create buttom is present and clicked
        //cy.get('#\\:r9\\:').type('automatedtestbyqa@gmail.com')                                                                                               // Making clear Email
        //cy.get('[title="Role.save"]').click().wait(500)                                                                                                       // saving the data        
        //cy.get('MuiAlert-message').contains("User name is required").should('be.visible').and('exist').and('contain','User name').click().wait(500)           // Asserting of create button is present and clicked
        //cy.get('#\\:r7\\:').type('automatedtestbyqa@gmail.com').wait(500)                                                                                     // Making clear first Name


        cy.origin('https://yopmail.com/en/', () => {
                
                //const mockWindow = {}
                cy.visit("https://yopmail.com/en/").then(() => {
                
                cy.get('input[name="login"]').type("automat1@yopmail.com").wait(500)
                cy.get('#refreshbut > .md > .material-icons-outlined').click().wait(500)
                }); 

                    cy.get('#ifmail').wait(1000).its('0.contentDocument.body').find('a').contains('SET UP YOUR ACCOUNT')
                    .invoke('removeAttr', 'target') // Remove the target attribute to ensure it opens in the same tab
                    .then($link => {
                        const href = $link.prop('href');
                        cy.visit(href); // Visit the link directly
                    
                    });
                });
        
        cy.get('.MuiTypography-h6').contains("Reset password").should('be.visible').and('exist').and('contain','Reset').wait(1000)                              // Asserting of Reset password heading is present
        cy.get('#\\:r0\\:-helper-text').contains("Min. 8 characters required, with at least a symbol, upper and lower case letters and a number")               // Asserting of helper text is present for new password
        .should('be.visible').and('exist').and('contain','Min. 8 characters required').wait(1000)                                                                
        cy.get('#\\:r0\\:').type('abc').wait(500)                                                                                                               // Input Invalid new password
        cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click()                                                    // Eye icon clicked to view of new password
        cy.get('#\\:r1\\:').type('eee').wait(500)                                                                                                               // Input Invalid confirm password
        cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click()                                                    // Eye icon clicked to view of confirm password
        cy.get('#\\:r1\\:-helper-text').contains("Passwords fields do not match")                                                                               // Asserting of helper text is present
        .should('be.visible').and('exist').and('contain','Passwords fields')                                                                
        cy.get('button[disabled]').contains("Submit").should('be.visible').and('exist').and('contain','Submit').should('not.be.enabled')                        // Asserting of Submit button is present and disabled                         
        cy.get('#\\:r0\\:').clear()                                                                                                                             // Clear Invalid new password
        cy.get('#\\:r1\\:').clear()                                                                                                                             // Clear Invalid confirm password        
        cy.get('#\\:r0\\:').type('Abc123()').wait(500)                                                                                                          // Input Valid new password
        cy.get('#\\:r1\\:').type('Abc123()').wait(500)                                                                                                          // Input Valid confirm password
        cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click().wait(500)                                          // Eye icon clicked to unview of new password
        cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click().wait(500)                                          // Eye icon clicked to unview  of confirm password
        cy.get('[type="button"]').contains("Submit").should('be.visible').and('exist').and('contain','Submit').click().wait(20000)                              // Click to Submit button         
        
        cy.get('.css-imv4ws > .MuiAvatar-root').click().wait(1000)                                                                                              // Asserting login button present with its avaialble options	 
        cy.get(':nth-child(6) > .MuiListItemIcon-root').and('exist').click().wait(10000)                                                                        // Asserting Sign out text is present and clicked
        cy.clearAllCookies();
        cy.clearAllLocalStorage();
        cy.clearAllSessionStorage();       
        
        // User Login Tests:
        cy.visit("http://dev.thermoform.net/") 
        cy.wait(10000)
        cy.get('.MuiTypography-root').contains("Identification").should('be.visible').and('exist')                                                              // Asssertion of Identification Text
        cy.get('input[name="username"]').type("abdef##$").wait(500)                                                                                             // input invalid username            
        cy.get('[type="submit"]').contains("Next").should('be.visible').and('exist').and('contain','Next').click().wait(500)                                    // Click to Next button        
        cy.get('.MuiFormHelperText-root').contains("Invalid Username").should('be.visible').and('exist').and('contain','Username')                              // Asssertion of invalid username error alert
        cy.get('input[name="username"]').clear()                                                                                                                // Clear the input username box
        cy.getGlobalElement('myElement').then($myElement => {
        cy.get('input[name="username"]').type($myElement).wait(500)                                                                                            // Input valid username                        
        });
        cy.get('[type="submit"]').contains("Next").should('be.visible').and('exist').and('contain','Next').click().wait(500)                                    // Click to SignUp button        
        cy.get('input[name="password"]').type("abc").wait(500)                                                                                                  // input invalid password
        cy.get('[type="submit"]').contains("Submit").should('be.visible').and('exist').and('contain','Submit').click().wait(500)                                // Click to Submit button       
        cy.get('.MuiFormHelperText-root').contains("Incorrect Password").should('be.visible').and('exist').and('contain','Password')                            // Asssertion of invalid password error alert 
        cy.get('input[name="password"]').clear()                                                                                                                // Clear the input password box
        cy.get('input[name="password"]').type("Abc123()").wait(500)                                                                                             // Input valid password
        cy.get('[type="submit"]').contains("Submit").should('be.visible').and('exist').and('contain','Submit').click().wait(20000)                              // Click to Submit button        
        cy.get('.css-imv4ws > .MuiAvatar-root').click().wait(1000)                                                                                              // Asserting login button present with its avaialble options	 
        cy.get(':nth-child(6) > .MuiListItemIcon-root').and('exist').click().wait(10000)                                                                        // Asserting Sign out text is present and clicked
        //cy.log($myElement)
        cy.clearAllCookies();
        cy.clearAllLocalStorage();
        cy.clearAllSessionStorage();       
        // User Login Tests:
        cy.visit("http://dev.thermoform.net/") 
        cy.wait(10000)
    }) 
    
    it("Verify that User edited successfully Without password change option", function()  {

        // User Creation Steps:
        cy.viewport(1920, 1080)    
        cy.visit("https://dev.thermoform.net/") 
        cy.wait(5000)
        cy.get('.MuiTypography-root').contains("Identification").should('be.visible').and('exist')                                                              // Asssertion of Identification heading is present 
        cy.get('.MuiTypography-body2').contains("Forgot Password?").should('be.visible').and('exist')                                                           // Asssertion of Forgot Password? link is present   
        cy.get('[type="submit"]').contains("Next").should('be.visible').and('exist').and('not.be.enabled').wait(500)                                            // Asssertion of Next btn is disabled        
        cy.get('input[name="username"]').type("masterfortesting").wait(500)                                                                                     // Input valid username                        
        cy.get('[type="submit"]').contains("Next").should('be.visible').and('exist').and('contain','Next').click().wait(500)                                    // Click to Next button         
        cy.get('.MuiTypography-h5').contains("Email Authentication").should('be.visible').and('exist').and('contain','Email').click().wait(500)                 // Asssertion of "Email Authentication" heading is present
        cy.get('input[name="email"]').should('be.visible').and('exist').wait(500)                                                                               // Asssertion of email box is present                       
        cy.get('[type="submit"]').contains("Send Authentication Link").should('be.visible').and('exist').and('contain','Authentication').wait(500)              // Asssertion of Send Authentication Link button is present
        cy.get('[type="text"]').contains("Password Authentication").should('be.visible').and('exist').and('contain','Password').click().wait(500)               // Asssertion of "Password Authentication" link is present                       
        cy.get('.MuiTypography-h5').contains("Password Authentication").should('be.visible').and('exist').and('contain','Password').wait(500)                   // Asssertion of Password Authentication heading is present
        cy.get('.MuiTypography-body2').contains("Forgot Password?").should('be.visible').and('exist')                                                           // Asssertion of Forgot Password? link is present   
        cy.get('[type="text"]').contains("Email Authentication").should('be.visible').and('exist').and('contain','Email').wait(500)                             // Asssertion of Email Authentication Link is present                
        cy.get('input[name="password"]').type("[HPnotebook1@").wait(500)                                                                                        // Input valid password
        cy.get('[type="submit"]').contains("Submit").should('be.visible').and('exist').and('contain','Submit').click().wait(15000)                              // Click to Submit button    


        cy.get('.css-imv4ws > .MuiAvatar-root').click().wait(1000)                                                                                              // Asserting login button present with its avaialble options	 
        cy.get('.css-1stpmc > :nth-child(1) > .MuiListItemText-root > .MuiTypography-root').contains("Français (Canada)").should('be.visible')                  // Asserting Français (Canada) text is present and fr language is pre selected 
        .and('exist').and('contain','Français').click().wait(1000)                                                         
        cy.get('.MuiListItemText-primary').contains("English (Canada)").should('be.visible').and('exist').and('contain','English').click().wait(2000)           // Changing portal language to English
        cy.get('body').click().wait(2000)
        cy.get('.MuiToolbar-root > .MuiTypography-root').contains("Home").should('be.visible').and('exist').and('contain','Home').wait(500)                     // Asserting of Home text is present on home page
        cy.get('.MuiTypography-h4').contains("Shortcuts").should('be.visible').and('exist').and('contain','Shortcuts').wait(500)                                // Asserting of Shortcuts text is present on home page        
        cy.get('.MuiIconButton-colorInherit').click({force: true})                                                                                              // Click to menu icon
        cy.get(':nth-child(9) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').contains("Users & Roles").should('be.visible')              // Asserting of Users & Roles li is present on side menu
        .and('exist').and('contain','Roles').click().wait(500)
        cy.get('[title="User Management"] > .MuiListItemText-root > .MuiTypography-root').contains("User Management").should('be.visible')                      // Asserting of User Management li is present on side menu
        .and('exist').and('contain','User').click().wait(1000)        
        cy.get('.MuiToolbar-root > .MuiTypography-root').contains("User management").should('be.visible').and('exist').and('contain','User')                    // Asserting of User Management heading is present as page heading       

        cy.getGlobalElement('myElement').then($myElement => {
        cy.get('.css-85sdk > .MuiInputBase-root > .MuiInputBase-input').type($myElement+"{enter}").wait(500)                                                     // Filtering a specific username and press enter
        });
        //cy.get('.css-85sdk > .MuiInputBase-root > .MuiInputBase-input').type("automat1@yopmail.com{enter}").wait(500)                                                                                                                                         

        cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(2)').click().wait(500)                                                                          // click in first filtered row.
        cy.get('#\\:r6\\:').clear().wait(500)                                                                                                                   // Clear Username field
        cy.get('#\\:r6\\:').type('masterfortesting').wait(500)                                                                                                  // Type existing username
        cy.get('[title="Role.save"]').click().wait(500)                                                                                                         // Saving data
        cy.get('.MuiAlert-message').contains("Duplicate username is not allowed").should('be.visible')                                                          // Asserting of error Alert for duplicate user exists
        .and('exist').and('contain','Duplicate username').click().wait(1000)
        cy.get('#\\:r6\\:').clear().wait(500)                                                                                                                   // Clear Username                                                                                                           
        
        cy.getGlobalElement('myElement').then($myElement => {
        cy.get('#\\:r6\\:').type($myElement+"1").wait(2000)                                                                                                     // Type new usernme
        });
        //cy.get('#\\:r6\\:').type('automatedtest1qa098').wait(500)                                                                                            
        
        cy.get('#\\:r7\\:').clear().wait(2000)                                                                                                                  // Clear First name                                                                                                                                                         
        cy.get('#\\:r8\\:').clear().wait(2000)                                                                                                                  // Clear lastname                                                                                                                                                                 
        cy.get('#\\:r9\\:').clear().wait(500)                                                                                                                   // Clear email and Type email         
        cy.get('#\\:r9\\:').type('automattestbyqa@yopmail.com').wait(500)                                                                                       // Type email
        cy.get('.MuiFormControl-root > .MuiInputBase-root > .MuiSelect-select').click().wait(500)                                                               // Click to filter by name dropdown
        cy.get('.MuiPaper-root > .MuiList-root > [tabindex="0"]').click().wait(500)                                                                             // Select from filter by name dropdown
        cy.get('#user-field-client').click().wait(500)                                                                                                          // Click to client name dropdown
        cy.get('#user-field-client-option-0').click().wait(500)                                                                                                 // Select client name from dropdown
        cy.get('[title="fr-CA"]').click().wait(500)                                                                                                             // Click to langugae select
        cy.get('#\\:r7\\:').type('Jack Lee').wait(500)                                                                                                          // Type First name
        cy.get('#\\:r8\\:').type('Part 2').wait(500)                                                                                                            // Type last name
        cy.get('#\\:r7\\:').should('have.value', 'Jack Lee')                                                                                                    // Assert the first name is present
        cy.get('#\\:r8\\:').should('have.value', 'Part 2')                                                                                                      // Assert the Last name is present
        cy.get('button.MuiFab-root:nth-child(4)').click().wait(1000)                                                                                            // Click to add roles
        cy.get('.MuiList-root > :nth-child(8)').click().wait(1000)                                                                                              // Seclet a role
        cy.get('[title="Role.save"]').click().wait(2000)                                                                                                        // Saving data
        cy.get('.css-imv4ws > .MuiAvatar-root').click().wait(1000)                                                                                              // Asserting login button present with its avaialble options	 
        cy.get(':nth-child(6) > .MuiListItemIcon-root').and('exist').click().wait(10000)                                                                        // Asserting Sign out text is present and clicked

        cy.clearAllCookies();                                                                                                                                   // Clearing cookies
        cy.clearAllLocalStorage();                                                                                                                              // Clearing cashe
        cy.clearAllSessionStorage();                                                                                                                            // Clearing sessiom       
        cy.visit("http://dev.thermoform.net/").wait(10000)                                                                                                      // User Login Tests

        //cy.get('input[name="username"]').type("automatedtest1qa098").wait(500)                                                                                  
        cy.getGlobalElement('myElement').then($myElement => {
        cy.get('input[name="username"]').type($myElement+"1").wait(500)                                                                                         // Input valid username                        
        });
        
        cy.get('[type="submit"]').contains("Next").should('be.visible').and('exist').and('contain','Next').click().wait(500)                                    // Click to Next button                 
        //cy.get('.MuiTypography-h5').contains("Password Authentication").should('be.visible').and('exist').and('contain','Password').wait(500)                   // Asssertion of "Password Authentication" link is present                       
        cy.get('.MuiTypography-h5').contains("Password Authentication").should('be.visible').and('exist').and('contain','Password').wait(500)                   // Asssertion of Password Authentication heading is present
        cy.get('.MuiTypography-body2').contains("Forgot Password?").should('be.visible').and('exist')                                                           // Asssertion of Forgot Password? link is present           
        cy.get('input[name="password"]').type("Abc123()").wait(500)                                                                                             // Input valid password
        cy.get('[type="submit"]').contains("Submit").should('be.visible').and('exist').and('contain','Submit').click().wait(15000)                              // Click to Submit button    
        cy.get('.css-imv4ws > .MuiAvatar-root').click().wait(1000)                                                                                              // Asserting login button present with its avaialble options	 
        cy.get('.css-1stpmc > :nth-child(1) > .MuiListItemText-root > .MuiTypography-root').contains("Français (Canada)").should('be.visible')                  // Asserting Français (Canada) text is present and fr language is pre selected 
        .and('exist').and('contain','Français').click().wait(1000)                                                         
        cy.get('.MuiListItemText-primary').contains("English (Canada)").should('be.visible').and('exist').and('contain','English').click().wait(500)            // Changing portal language to English
        cy.get('body').click().wait(500)   
        cy.get('.MuiIconButton-colorInherit').click({force: true})                                                                                              // Click to menu icon
        cy.get('.jss61 > :nth-child(4) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click().wait(500)                                  // Click on customer center li  
        cy.get('[title="Orders"] > .MuiListItemText-root > .MuiTypography-root').click().wait(2000)                                                             // Click on Orders li  
        cy.get('.css-imv4ws > .MuiAvatar-root').click().wait(1000)                                                                                              // Asserting login button present with its avaialble options	 
        cy.get(':nth-child(6) > .MuiListItemIcon-root').and('exist').click().wait(10000)                                                                        // Asserting Sign out text is present and clicked
        cy.clearAllCookies();                                                                                                                                   // Clearing cookies
        cy.clearAllLocalStorage();                                                                                                                              // Clearing cashe
        cy.clearAllSessionStorage();
        cy.visit("http://dev.thermoform.net/").wait(10000)                                                                                                      // User Login Tests
        
        
    })
})





  