

const { expect } = require("chai")
require('cypress-xpath')

//let textToStore; 
/*describe('Estimator Order Creation/Edition/Submission For Molded Category Suit', function() {
     
    it("Verify Order Created/Submitted Successfully - For Doors Category -", function()  {

        // User Creation Steps:
        cy.viewport(1720, 1080)    
        cy.visit("https://dev.thermoform.net/") 
        
        cy.wait(5000)
        cy.get('.MuiTypography-root').contains("Identification").should('be.visible').and('exist')                                                              // Asssertion of Identification heading is present 
        cy.get('.MuiTypography-body2').contains("Forgot Password?").should('be.visible').and('exist')                                                           // Asssertion of Forgot Password? link is present   
        cy.get('[type="submit"]').contains("Next").should('be.visible').and('exist').and('not.be.enabled')                                                      // Asssertion of Next btn is disabled        
        cy.get('input[name="username"]').type("masterfortesting")                                                                                               // Input valid username                        
        cy.get('[type="submit"]').contains("Next").should('be.visible').and('exist').and('contain','Next').click()                                              // Click to Next button         
        cy.get('.MuiTypography-h5').contains("Email Authentication").should('be.visible').and('exist').and('contain','Email').click()                           // Asssertion of "Email Authentication" heading is present
        cy.get('input[name="email"]').should('be.visible').and('exist')                                                                                         // Asssertion of email box is present                       
        cy.get('[type="submit"]').contains("Send Authentication Link").should('be.visible').and('exist').and('contain','Authentication')                        // Asssertion of Send Authentication Link button is present
        cy.get('[type="text"]').contains("Password Authentication").should('be.visible').and('exist').and('contain','Password').click()                         // Asssertion of "Password Authentication" link is present                       
        cy.get('.MuiTypography-h5').contains("Password Authentication").should('be.visible').and('exist').and('contain','Password')                             // Asssertion of Password Authentication heading is present
        cy.get('.MuiTypography-body2').contains("Forgot Password?").should('be.visible').and('exist')                                                           // Asssertion of Forgot Password? link is present   
        cy.get('[type="text"]').contains("Email Authentication").should('be.visible').and('exist').and('contain','Email')                                       // Asssertion of Email Authentication Link is present                
        cy.get('input[name="password"]').type("[HPnotebook1@")                                                                                                  // Input valid password        
        cy.get('[type="submit"]').contains("Submit").should('be.visible').and('exist').and('contain','Submit').click()                                          // Click to Submit button for portal login  
        //cy.get('.css-imv4ws > .MuiAvatar-root').click().wait(1000)                                                                                            // Asserting login button present with its avaialble options	 
        //cy.get('.css-1stpmc > :nth-child(1) > .MuiListItemText-root > .MuiTypography-root').contains("Français (Canada)").should('be.visible')                // Asserting Français (Canada) text is present and fr language is pre selected 
        //.and('exist').and('contain','Français').click().wait(1000)                                                         
        //cy.get('.MuiListItemText-primary').contains("English (Canada)").should('be.visible').and('exist').and('contain','English').click().wait(2000)         // Changing portal language to English
        //cy.get('body').click().wait(2000)
        cy.get('.MuiToolbar-root > .MuiTypography-root', { timeout: 25000 }).contains("Home").should('be.visible').and('exist').and('contain','Home')           // Asserting of Home text is present on home page
        // Cypress will wait up to 25 seconds for the element, but proceed immediately when the element appears
        cy.get('.MuiTypography-h4').contains("Shortcuts").should('be.visible').and('exist').and('contain','Shortcuts')                                          // Asserting of Shortcuts text is present on home page        
        cy.get('.MuiIconButton-colorInherit').click({force: true})                                                                                              // Click to menu icon
        cy.get(':nth-child(7) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').contains("Customer Center").should('be.visible')            // Asserting of Customer Center li is present on side menu
        .and('exist').and('contain','Customer').click().wait(1000)        
        cy.get('[title="Estimator"] > .MuiListItemText-root > .MuiTypography-root').contains("Estimator").should('be.visible')                                  // Asserting of Estimator li is present on side menu
        .and('exist').and('contain','Estimator').click()
        //cy.get('[title="Estimator"] > .MuiListItemText-root > .MuiTypography-root').contains("Estimator").should('be.visible')                                // Asserting of Estimator li is present on side menu
        //.and('exist').and('contain','Estimator').click().wait(10000)        
        //cy.get('.css-budqf6').contains('Add color').should('be.visible')                                                                                      // Asserting Add color btn is visible
        cy.get('.css-budqf6', { timeout: 25000 }).contains('Add color').should('be.visible')
        cy.get('.jss23 > .MuiButtonBase-root').click()                                                                                                          // Tapping to menu icon to close sidebar
        cy.get('[data-tour="order.action.new"]').click()                                                                                                        // Adding fresh order
        cy.get('.MuiDialogActions-root > :nth-child(2)').click()                                                                                                // Tapping to OK btn
        cy.get('.css-budqf6').contains('Add color').click({force: true}).wait(500)                                                                              // Tapping to Add color btn
        cy.get('.MuiBox-root > .MuiGrid-container > .MuiGrid-root > .MuiButtonBase-root').click().wait(500)                                                     // Tapping to Add a new product btn

        cy.get(':nth-child(1) > .MuiCardContent-root > .MuiTypography-h5').contains("Molded").should('be.visible')
        cy.get(':nth-child(1) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Doors").should('be.visible')
        cy.get(':nth-child(1) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Drawer Fronts").should('be.visible')
        cy.get(':nth-child(1) > .MuiCardContent-root > .MuiList-root > :nth-child(3) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Mullions Doors").should('be.visible')

        cy.get(':nth-child(3) > .MuiCardContent-root > .MuiTypography-h5').contains("Edged").should('be.visible')
        cy.get(':nth-child(3) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Doors (Edged)").should('be.visible')
        cy.get(':nth-child(3) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Mullions Doors (Edged)").should('be.visible')

        cy.get(':nth-child(5) > .MuiCardContent-root > .MuiTypography-h5').contains("Accessories").should('be.visible')
        cy.get(':nth-child(5) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Edge Banding").should('be.visible')
        cy.get(':nth-child(5) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Heat Deflectors and Protectors").should('be.visible')
        cy.get(':nth-child(5) > .MuiCardContent-root > .MuiList-root > :nth-child(3) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Moldings").should('be.visible')
        cy.get(':nth-child(5) > .MuiCardContent-root > .MuiList-root > :nth-child(4) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Preglued Edge Banding").should('be.visible')
        cy.get('.MuiList-root > :nth-child(5) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Tambour Roll-ups").should('be.visible')

        cy.get(':nth-child(2) > .MuiCardContent-root > .MuiTypography-h5').contains("5-pieces").should('be.visible')
        cy.get(':nth-child(2) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Doors (5 pieces)").should('be.visible')
        cy.get(':nth-child(2) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Drawer Fronts (5 pieces)").should('be.visible')
        cy.get(':nth-child(2) > .MuiCardContent-root > .MuiList-root > :nth-child(3) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Mullions Doors (5 pieces)").should('be.visible')

        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiTypography-h5').contains("Boards").should('be.visible')
        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Boards").should('be.visible')
        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Preglued Thermoplastic Sheets").should('be.visible')
        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(3) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Thermolam").should('be.visible')
        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(4) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Thermoplastic Sheets").should('be.visible')

        cy.get(':nth-child(1) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click().wait(500)   // Tapping to Doors test 
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(500)                                                                         // Tapping to Submit btn
        cy.get('.MuiAlert-message').contains('Please validate the form before submitting the order').should('be.visible')                                       // Assertion for validation message

        cy.get('.MuiAccordionSummary-root').click().wait(500)                                                                                                   // Tapping to Accordian 
        cy.get('#\\:rt\\:-helper-text').contains('Required value').should('be.visible')                                                                         // Order Name Validation of helper text
        cy.get('#\\:r11\\:-helper-text').contains('Value is not a valid email address').should('be.visible')                                                    // Eamil Validation of helper text
        cy.get('#\\:r17\\:-helper-text').contains('Required value').should('be.visible')                                                                        // PO Validation of helper text 

        cy.get('#\\:rt\\:').type('Automate Doors Category')                                                                                                     // Name      
        cy.get('#\\:r11\\:').type('AutomateDoors#gmail.com', { force: true })                                                                                   // Email   
        cy.get('#\\:r11\\:-helper-text').contains('Value is not a valid email address').should('be.visible')                                                    // Eamil Validation of helper text
        cy.get('#\\:r11\\:').type('AutomateDoors#gmail.com').clear()                                                                                            // Clear the invalid input
        cy.get('#\\:r11\\:').type('AutomateDoors@gmail.com', { force: true })                                                                                   // Email with valid input   
        cy.get('#\\:r17\\:').type('Doors 11', { force: true })                                                                                                  // Your PO
        cy.get('#\\:r19\\:').type('XYZ 1', { force: true })                                                                                                     // Their PO        
        cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click().wait(300)                                                                               // Tapping to Date icon        
        cy.get('.MuiCalendarPicker-root').find('button[role="gridcell"]')                                                                                       // Locate date buttons inside the calendar
            .each(($el) => {
                if (!$el.prop('disabled')) {                                                                                                                    // Check if the date is enabled                
                cy.wrap($el).click().wait(500)                                                                                                                  // Click the first enabled date                
                return false                                                                                                                                    // Break the loop after selecting the date
                }
            });        
        cy.get('.css-x7mp9n').first().type('ABC 1', { force: true })                                                                                            // Note

            const filePath = 'images/sample-image.png';                                                                                                         // Define the file path relative to the cypress/fixtures directory            
            cy.get('input[type="file"]#estimator-image-input').attachFile(filePath)                                                                             // Upload the file using the input element
            .then(input => {                
            expect(input[0].files[0].name).to.equal('sample-image.png');                                                                                        // Verify that the file is uploaded
            });    
        cy.get(':nth-child(1) > .MuiFormControlLabel-root > .MuiTypography-root > .css-zfsz4h').click()                                                         // Tapping to inch/mm

        //cy.get('.MuiAccordionSummary-root').click().wait(500)                                                                                                 // Tapping to Accordian
        cy.get('#\\:r1d\\:').type('Doors Section')                                                                                                              // Section Name      
        cy.get('#\\:r1f\\:').type('Automating Molded Category with Doors Section')                                                                              // Section Note
        
        //Doors        
        cy.contains('div', '1 Doors').click()
        cy.get('#\\:r1i\\:').type('10')                                                                                                                         // Qty
        cy.get('#\\:r1k\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text for no input
        cy.get('#\\:r1k\\:').type('abcs')                                                                                                                       // invalid input width
        cy.get('#\\:r1k\\:-helper-text').contains('Not a valid measurement').should('be.visible')                                                               // Validation of helper text for invalid input
        cy.get('#\\:r1k\\:').type('abcs').clear()                                                                                                               // Clear input width    
        cy.get('#\\:r1k\\:').type('45')                                                                                                                         // Valid input width    
        cy.get('#\\:r1m\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text        
        cy.get('#\\:r1m\\:').type('abcs')                                                                                                                       // invalid input height
        cy.get('#\\:r1m\\:-helper-text').contains('Not a valid measurement').should('be.visible')                                                               // Validation of helper text for invalid input
        cy.get('#\\:r1m\\:').type('abcs').clear()                                                                                                               // Clear input height    
        cy.get('#\\:r1m\\:').type('100')                                                                                                                        // Valid input height
        cy.get('#\\:r1o\\:').click()                                                                                                                            // thickness
        cy.get('[data-value="1.25"]').click()                                                                                                                   // thickness
        cy.get('#\\:r1q\\:').click()                                                                                                                            // grain
        cy.get('[data-value="H"]').click()                                                                                                                      // grain
        cy.get('#\\:r1s\\:').click()                                                                                                                            // stiles and rails
        cy.get('[data-value="LG"]').click()                                                                                                                     // stiles and rails 
        cy.get('#\\:r1t\\:').type('22022')                                                                                                                      // Modele
        cy.get('#\\:r20\\:').type('F')                                                                                                                          // ext profile
        cy.get('#\\:r24\\:').click()                                                                                                                            // Type
        cy.get('[data-value="S"] > .css-sc6tei').click()                                                                                                        // Type
        cy.get('#\\:r26\\:').click()                                                                                                                            // qty
        cy.get('[data-value="3"]').click()                                                                                                                      // qty
        cy.get('#\\:r28\\:').click()                                                                                                                            // postiton
        cy.get('[data-value="B"] > .css-sc6tei').click()                                                                                                        // postiton
        cy.get(':nth-child(15) > .MuiFormControl-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click()                                                // Dowels 
        cy.get('#\\:r2b\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text    
        cy.get('#\\:r29\\:').type('61')                                                                                                                         // color    

        cy.get('[colspan="19"] > .MuiButtonBase-root').click()                                                                                                  // Adding second item
        cy.get('#\\:r2s\\:').type('12')                                                                                                                         // Qty
        cy.get('#\\:r2u\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text
        cy.get('#\\:r2u\\:').type('45')                                                                                                                         // width
        cy.get('#\\:r30\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text
        cy.get('#\\:r30\\:').type('200')                                                                                                                        // height
        cy.get('#\\:r34\\:').should('contain', 'H')                                                                                                             // Assertioan of grain input
        cy.get('#\\:r36\\:').should('contain', 'LG')                                                                                                            // Assertioan of stiles and rails input
        cy.get('#\\:r37\\:').should('have.value', '1000')                                                                                                       // Assertion of Modele    
        cy.get('#\\:r3a\\:').should('have.value', 'F')                                                                                                          // Assertion of ext profile        
        cy.get('#\\:r3e\\:').should('contain', 'S')                                                                                                             // Assertion of Type        
        cy.get('#\\:r3g\\:').should('contain', '3')                                                                                                             // Assertion  of qty        
        cy.get('#\\:r3i\\:').should('contain', 'B')                                                                                                             // Assertion of postiton            
        cy.get(':nth-child(3) > :nth-child(15) > .MuiFormControl-root > .MuiButtonBase-root > .PrivateSwitchBase-input').should('be.checked')                   // Assertion of Dowels                     
        cy.get('#\\:r3j\\:').should('have.value', '61 - Antique White Silk')                                                                                    // Assertion of color                
        cy.get('[aria-label="Save"] > .MuiButtonBase-root').click().wait(5000)                                                                                  // Tapping to save btn
        cy.get('.headerActions > .MuiButton-contained').click().wait(10000)                                                                                     // Tapping to Print btn
        cy.get('#\\:rp\\: > .MuiButtonBase-root').click()                                                                                                       // Closing print view
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(5000)                                                                        // Tapping to Submit btn
        cy.get('.css-1ubxkj1 > :nth-child(1)').click().wait(5000)                                                                                               // Print order    
        cy.get('#\\:rp\\: > .MuiButtonBase-root').click().wait(500)                                                                                             // Closing print view

    }) 
  
    it.skip("Verify Order created/submitted Successfully - For Drawer Fronts Category -", function()  {

        // User Creation Steps:
        cy.viewport(1720, 1080)    
        cy.visit("https://dev.thermoform.net/") 
        cy.wait(5000)
        cy.get('.MuiTypography-root').contains("Identification").should('be.visible').and('exist')                                                              // Asssertion of Identification heading is present 
        cy.get('.MuiTypography-body2').contains("Forgot Password?").should('be.visible').and('exist')                                                           // Asssertion of Forgot Password? link is present   
        cy.get('[type="submit"]').contains("Next").should('be.visible').and('exist').and('not.be.enabled')                                                      // Asssertion of Next btn is disabled        
        cy.get('input[name="username"]').type("masterfortesting").wait(500)                                                                                     // Input valid username                        
        cy.get('[type="submit"]').contains("Next").should('be.visible').and('exist').and('contain','Next').click()                                              // Click to Next button         
        cy.get('.MuiTypography-h5').contains("Email Authentication").should('be.visible').and('exist').and('contain','Email').click()                           // Asssertion of "Email Authentication" heading is present
        cy.get('input[name="email"]').should('be.visible').and('exist').wait(500)                                                                               // Asssertion of email box is present                       
        cy.get('[type="submit"]').contains("Send Authentication Link").should('be.visible').and('exist').and('contain','Authentication')                        // Asssertion of Send Authentication Link button is present
        cy.get('[type="text"]').contains("Password Authentication").should('be.visible').and('exist').and('contain','Password').click()                         // Asssertion of "Password Authentication" link is present                       
        cy.get('.MuiTypography-h5').contains("Password Authentication").should('be.visible').and('exist').and('contain','Password')                             // Asssertion of Password Authentication heading is present
        cy.get('.MuiTypography-body2').contains("Forgot Password?").should('be.visible').and('exist')                                                           // Asssertion of Forgot Password? link is present   
        cy.get('[type="text"]').contains("Email Authentication").should('be.visible').and('exist').and('contain','Email')                                       // Asssertion of Email Authentication Link is present                
        cy.get('input[name="password"]').type("[HPnotebook1@")                                                                                                  // Input valid password        
        cy.get('[type="submit"]').contains("Submit").should('be.visible').and('exist').and('contain','Submit').click()                                          // Click to Submit button for portal login  
        //cy.get('.css-imv4ws > .MuiAvatar-root').click().wait(1000)                                                                                            // Asserting login button present with its avaialble options	 
        //cy.get('.css-1stpmc > :nth-child(1) > .MuiListItemText-root > .MuiTypography-root').contains("Français (Canada)").should('be.visible')                // Asserting Français (Canada) text is present and fr language is pre selected 
        //.and('exist').and('contain','Français').click().wait(1000)                                                         
        //cy.get('.MuiListItemText-primary').contains("English (Canada)").should('be.visible').and('exist').and('contain','English').click().wait(2000)         // Changing portal language to English
        cy.get('body').click().wait(2000)
        cy.get('.MuiToolbar-root > .MuiTypography-root', { timeout: 25000 }).contains("Home").should('be.visible').and('exist').and('contain','Home')           // Asserting of Home text is present on home page
        cy.get('.MuiTypography-h4').contains("Shortcuts").should('be.visible').and('exist').and('contain','Shortcuts')                                          // Asserting of Shortcuts text is present on home page        
        cy.get('.MuiIconButton-colorInherit').click({force: true})                                                                                              // Click to menu icon
        cy.get(':nth-child(7) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').contains("Customer Center").should('be.visible')            // Asserting of Customer Center li is present on side menu
        .and('exist').and('contain','Customer').click().wait(1000)        
        cy.get('[title="Estimator"] > .MuiListItemText-root > .MuiTypography-root').contains("Estimator").should('be.visible')                                  // Asserting of Estimator li is present on side menu
        .and('exist').and('contain','Estimator').click()
        cy.get('.css-budqf6', { timeout: 25000 }).contains('Add color').should('be.visible')                                                                    // Asserting Add color btn is visible
        cy.get('.jss23 > .MuiButtonBase-root').click()                                                                                                          // Tapping to menu icon to close sidebar
        cy.get('[data-tour="order.action.new"]').click()                                                                                                        // Adding fresh order
        
        cy.get('.MuiDialogActions-root > :nth-child(2)').click().wait(500)                                                                                      // Tapping to OK btn
        cy.get('.css-budqf6').contains('Add color').click({force: true}).wait(500)                                                                              // Tapping to Add color btn
        cy.get('.MuiBox-root > .MuiGrid-container > .MuiGrid-root > .MuiButtonBase-root').click().wait(500)                                                     // Tapping to Add a new product btn
        cy.get(':nth-child(1) > .MuiCardContent-root > .MuiTypography-h5').contains("Molded").should('be.visible')
        cy.get(':nth-child(1) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Doors").should('be.visible')
        cy.get(':nth-child(1) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Drawer Fronts").should('be.visible')
        cy.get(':nth-child(1) > .MuiCardContent-root > .MuiList-root > :nth-child(3) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Mullions Doors").should('be.visible')

        cy.get(':nth-child(3) > .MuiCardContent-root > .MuiTypography-h5').contains("Edged").should('be.visible')
        cy.get(':nth-child(3) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Doors (Edged)").should('be.visible')
        cy.get(':nth-child(3) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Mullions Doors (Edged)").should('be.visible')

        cy.get(':nth-child(5) > .MuiCardContent-root > .MuiTypography-h5').contains("Accessories").should('be.visible')
        cy.get(':nth-child(5) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Edge Banding").should('be.visible')
        cy.get(':nth-child(5) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Heat Deflectors and Protectors").should('be.visible')
        cy.get(':nth-child(5) > .MuiCardContent-root > .MuiList-root > :nth-child(3) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Moldings").should('be.visible')
        cy.get(':nth-child(5) > .MuiCardContent-root > .MuiList-root > :nth-child(4) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Preglued Edge Banding").should('be.visible')
        cy.get('.MuiList-root > :nth-child(5) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Tambour Roll-ups").should('be.visible')

        cy.get(':nth-child(2) > .MuiCardContent-root > .MuiTypography-h5').contains("5-pieces").should('be.visible')
        cy.get(':nth-child(2) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Doors (5 pieces)").should('be.visible')
        cy.get(':nth-child(2) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Drawer Fronts (5 pieces)").should('be.visible')
        cy.get(':nth-child(2) > .MuiCardContent-root > .MuiList-root > :nth-child(3) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Mullions Doors (5 pieces)").should('be.visible')

        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiTypography-h5').contains("Boards").should('be.visible')
        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Boards").should('be.visible')
        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Preglued Thermoplastic Sheets").should('be.visible')
        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(3) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Thermolam").should('be.visible')
        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(4) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Thermoplastic Sheets").should('be.visible')
        //cy.get(':nth-child(1) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click().wait(500)   // Tapping to Doors test 
        cy.get(':nth-child(1) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')      // Select drawer fonts 
        .click().wait(500)
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(500)                                                                         // Tapping to Submit btn
        cy.get('.MuiAlert-message').contains('Please validate the form before submitting the order').should('be.visible')                                       // Assertion for validation message
        cy.get('.MuiAccordionSummary-root').click().wait(500)                                                                                                   // Tapping to Accordian 
        cy.get('#\\:rt\\:-helper-text').contains('Required value').should('be.visible')                                                                         // Validation of helper text
        cy.get('#\\:r11\\:-helper-text').contains('Value is not a valid email address').should('be.visible')                                                    // Validation of helper text
        cy.get('#\\:r17\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text    
        cy.get('#\\:rt\\:').type('Automate Molded(Drawer Fronts) Category')                                                                                     // Name      
        cy.get('#\\:r11\\:').type('AutomateDrawerFronts#gmail.com', { force: true })                                                                            // Email  
        cy.get('#\\:r11\\:-helper-text').contains('Value is not a valid email address').should('be.visible')                                                    // Eamil Validation of helper text
        cy.get('#\\:r11\\:').type('AutomateDrawerFronts#gmail.com').clear()                                                                                     // Clear the invalid input
        cy.get('#\\:r11\\:').type('AutomateDrawerFronts@gmail.com', { force: true })                                                                            // Email with valid input        
        cy.get('#\\:r17\\:').type('DrawerFronts 11', { force: true })                                                                                           // Your PO
        cy.get('#\\:r19\\:').type('XYZ 1', { force: true })                                                                                                     // Their PO        
        cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click()                                                                                         // Tapping to Date icon        
        cy.get('.MuiCalendarPicker-root').find('button[role="gridcell"]')                                                                                       // Locate date buttons inside the calendar
            .each(($el) => {
                if (!$el.prop('disabled')) {                                                                                                                    // Check if the date is enabled                
                cy.wrap($el).click().wait(500)                                                                                                                  // Click the first enabled date                
                return false                                                                                                                                    // Break the loop after selecting the date
                }
            });        
        cy.get('.css-x7mp9n').first().type('ABC 1', { force: true })                                                                                            // Note

            const filePath = 'images/sample-image.png';                                                                                                         // Define the file path relative to the cypress/fixtures directory            
            cy.get('input[type="file"]#estimator-image-input').attachFile(filePath)                                                                             // Upload the file using the input element
            .then(input => {                
            expect(input[0].files[0].name).to.equal('sample-image.png');                                                                                        // Verify that the file is uploaded
            });    
        cy.get(':nth-child(1) > .MuiFormControlLabel-root > .MuiTypography-root > .css-zfsz4h').click()                                                         // Tapping to inch/mm

        //cy.get('.MuiAccordionSummary-root').click().wait(500)                                                                                                 // Tapping to Accordian
        cy.get('#\\:r1d\\:').type('Drawer Fronts Section')                                                                                                      // Section Name      
        cy.get('#\\:r1f\\:').type('Automating Molded Category with Drawer Fronts Section')                                                                      // Section Note
        
        //Molded >> Drawer Fronts        
        cy.contains('div', '1 Drawer Fronts').click()       
        cy.get('#\\:r1i\\:').type('12')                                                                                                                         // Qty
        cy.get('#\\:r1k\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text
        cy.get('#\\:r1k\\:').type('sdsds')                                                                                                                      // InValid input width
        cy.get('#\\:r1k\\:-helper-text').contains('Not a valid measurement').should('be.visible')                                                               // Validation of helper text for invalid input
        cy.get('#\\:r1k\\:').type('abcs').clear()                                                                                                               // Clear input width    
        cy.get('#\\:r1k\\:').type('45')                                                                                                                         // Valid input width        
        cy.get('#\\:r1m\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text
        cy.get('#\\:r1m\\:').type('ws')                                                                                                                         // InValid input height
        cy.get('#\\:r1m\\:-helper-text').contains('Not a valid measurement').should('be.visible')                                                               // Validation of helper text for invalid input
        cy.get('#\\:r1m\\:').type('abcs').clear()                                                                                                               // Clear input height    
        cy.get('#\\:r1m\\:').type('45')                                                                                                                         // Valid input height
        //cy.get('#\\:r1o\\:').click().wait(50000)                                                                                                              // thickness
        //cy.get('[data-value="19.1"]').click().wait(500)                                                                                                       // thickness
        cy.get('#\\:r1q\\:').click()                                                                                                                            // grain
        cy.get('[data-value="H"]').click()                                                                                                                      // grain
        cy.get('#\\:r1s\\:').click()                                                                                                                            // stiles and rails
        cy.get('[data-value="LG"]').click()                                                                                                                     // stiles and rails 
        cy.get('#\\:r1t\\:').type('22015')                                                                                                                      // Modele
        cy.get('#\\:r20\\:').type('D')                                                                                                                          // ext profile
        cy.get('#\\:r25\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text    
        cy.get('#\\:r23\\:').type('999')                                                                                                                        // color         
        cy.get('body').click();
        cy.get('.MuiFormControl-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click()                                                                 // qp 
        
        cy.get('[colspan="15"] > .MuiButtonBase-root').click()                                                                                                  // Adding second row        
        cy.get('#\\:r2e\\:').type('4')                                                                                                                          // Qty
        cy.get('#\\:r2g\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text
        cy.get('#\\:r2g\\:').type('45')                                                                                                                         // wibth
        cy.get('#\\:r2i\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text
        cy.get('#\\:r2i\\:').type('14')                                                                                                                         // height
        cy.get('#\\:r2m\\:').should('contain', 'H')                                                                                                             // Assertion for grain
        cy.get('#\\:r2o\\:').should('contain', 'LG')                                                                                                            // Assertion for stiles and rails
        cy.get('#\\:r2p\\:').should('have.value', '22015')                                                                                                      // Assertion for Modele
        cy.get('#\\:r2s\\:').should('have.value', 'D')                                                                                                          // Assertion for ext profile
        cy.get(':nth-child(2) > :nth-child(11) > .MuiFormControl-root > .MuiButtonBase-root > .PrivateSwitchBase-input').should('be.checked')                   // Assertion for qp 
        cy.get('#\\:r2v\\:').wait(500).should('have.value', '999 - MDF')                                                                                        // Assertion for Color
        cy.get('[aria-label="Save"] > .MuiButtonBase-root').click().wait(5000)                                                                                  // Tapping to save btn
        cy.get('.headerActions > .MuiButton-contained').click().wait(10000)                                                                                     // Tapping to Print btn
        cy.get('#\\:rp\\: > .MuiButtonBase-root').click()                                                                                                       // Closing print view
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(5000)                                                                        // Tapping to Submit btn
        cy.get('.css-1ubxkj1 > :nth-child(1)').click().wait(5000)                                                                                               // Print order    
        cy.get('#\\:rp\\: > .MuiButtonBase-root').click().wait(500)                                                                                             // Closing print view
    })

    it.skip("Verify Order created/submitted Successfully - For Mullions Doors Category -", function()  {

        // User Creation Steps:
        cy.viewport(1720, 1080)    
        cy.visit("https://dev.thermoform.net/") 
        cy.wait(5000)
        cy.get('.MuiTypography-root').contains("Identification").should('be.visible').and('exist')                                                              // Asssertion of Identification heading is present 
        cy.get('.MuiTypography-body2').contains("Forgot Password?").should('be.visible').and('exist')                                                           // Asssertion of Forgot Password? link is present   
        cy.get('[type="submit"]').contains("Next").should('be.visible').and('exist').and('not.be.enabled')                                                      // Asssertion of Next btn is disabled        
        cy.get('input[name="username"]').type("masterfortesting").wait(500)                                                                                     // Input valid username                        
        cy.get('[type="submit"]').contains("Next").should('be.visible').and('exist').and('contain','Next').click()                                              // Click to Next button         
        cy.get('.MuiTypography-h5').contains("Email Authentication").should('be.visible').and('exist').and('contain','Email').click()                           // Asssertion of "Email Authentication" heading is present
        cy.get('input[name="email"]').should('be.visible').and('exist')                                                                                         // Asssertion of email box is present                       
        cy.get('[type="submit"]').contains("Send Authentication Link").should('be.visible').and('exist').and('contain','Authentication')                        // Asssertion of Send Authentication Link button is present
        cy.get('[type="text"]').contains("Password Authentication").should('be.visible').and('exist').and('contain','Password').click()                         // Asssertion of "Password Authentication" link is present                       
        cy.get('.MuiTypography-h5').contains("Password Authentication").should('be.visible').and('exist').and('contain','Password')                             // Asssertion of Password Authentication heading is present
        cy.get('.MuiTypography-body2').contains("Forgot Password?").should('be.visible').and('exist')                                                           // Asssertion of Forgot Password? link is present   
        cy.get('[type="text"]').contains("Email Authentication").should('be.visible').and('exist').and('contain','Email')                                       // Asssertion of Email Authentication Link is present                
        cy.get('input[name="password"]').type("[HPnotebook1@")                                                                                                  // Input valid password        
        cy.get('[type="submit"]').contains("Submit").should('be.visible').and('exist').and('contain','Submit').click()                                          // Click to Submit button for portal login  
        //cy.get('.css-imv4ws > .MuiAvatar-root').click().wait(1000)                                                                                            // Asserting login button present with its avaialble options	 
        //cy.get('.css-1stpmc > :nth-child(1) > .MuiListItemText-root > .MuiTypography-root').contains("Français (Canada)").should('be.visible')                // Asserting Français (Canada) text is present and fr language is pre selected 
        //.and('exist').and('contain','Français').click().wait(1000)                                                         
        //cy.get('.MuiListItemText-primary').contains("English (Canada)").should('be.visible').and('exist').and('contain','English').click().wait(2000)         // Changing portal language to English
        cy.get('body').click().wait(2000)
        cy.get('.MuiToolbar-root > .MuiTypography-root', { timeout: 25000 }).contains("Home").should('be.visible').and('exist').and('contain','Home')           // Asserting of Home text is present on home page
        cy.get('.MuiTypography-h4').contains("Shortcuts").should('be.visible').and('exist').and('contain','Shortcuts')                                          // Asserting of Shortcuts text is present on home page        
        cy.get('.MuiIconButton-colorInherit').click({force: true})                                                                                              // Click to menu icon
        cy.get(':nth-child(7) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').contains("Customer Center").should('be.visible')            // Asserting of Customer Center li is present on side menu
        .and('exist').and('contain','Customer').click().wait(1000)        
        cy.get('[title="Estimator"] > .MuiListItemText-root > .MuiTypography-root').contains("Estimator").should('be.visible')                                  // Asserting of Estimator li is present on side menu
        .and('exist').and('contain','Estimator').click()
        cy.get('.css-budqf6', { timeout: 25000 }).contains('Add color').should('be.visible')                                                                    // Asserting Add color btn is visible
        cy.get('.jss23 > .MuiButtonBase-root').click()                                                                                                          // Tapping to menu icon to close sidebar
        cy.get('[data-tour="order.action.new"]').click()                                                                                                        // Adding fresh order        
        cy.get('.MuiDialogActions-root > :nth-child(2)').click()                                                                                                // Tapping to OK btn
        cy.get('.css-budqf6').contains('Add color').click({force: true}).wait(500)                                                                              // Tapping to Add color btn
        cy.get('.MuiBox-root > .MuiGrid-container > .MuiGrid-root > .MuiButtonBase-root').click().wait(500)                                                     // Tapping to Add a new product btn
        cy.get(':nth-child(1) > .MuiCardContent-root > .MuiTypography-h5').contains("Molded").should('be.visible')
        cy.get(':nth-child(1) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Doors").should('be.visible')
        cy.get(':nth-child(1) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Drawer Fronts").should('be.visible')
        cy.get(':nth-child(1) > .MuiCardContent-root > .MuiList-root > :nth-child(3) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Mullions Doors").should('be.visible')

        cy.get(':nth-child(3) > .MuiCardContent-root > .MuiTypography-h5').contains("Edged").should('be.visible')
        cy.get(':nth-child(3) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Doors (Edged)").should('be.visible')
        cy.get(':nth-child(3) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Mullions Doors (Edged)").should('be.visible')

        cy.get(':nth-child(5) > .MuiCardContent-root > .MuiTypography-h5').contains("Accessories").should('be.visible')
        cy.get(':nth-child(5) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Edge Banding").should('be.visible')
        cy.get(':nth-child(5) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Heat Deflectors and Protectors").should('be.visible')
        cy.get(':nth-child(5) > .MuiCardContent-root > .MuiList-root > :nth-child(3) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Moldings").should('be.visible')
        cy.get(':nth-child(5) > .MuiCardContent-root > .MuiList-root > :nth-child(4) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Preglued Edge Banding").should('be.visible')
        cy.get('.MuiList-root > :nth-child(5) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Tambour Roll-ups").should('be.visible')

        cy.get(':nth-child(2) > .MuiCardContent-root > .MuiTypography-h5').contains("5-pieces").should('be.visible')
        cy.get(':nth-child(2) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Doors (5 pieces)").should('be.visible')
        cy.get(':nth-child(2) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Drawer Fronts (5 pieces)").should('be.visible')
        cy.get(':nth-child(2) > .MuiCardContent-root > .MuiList-root > :nth-child(3) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Mullions Doors (5 pieces)").should('be.visible')

        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiTypography-h5').contains("Boards").should('be.visible')
        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Boards").should('be.visible')
        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Preglued Thermoplastic Sheets").should('be.visible')
        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(3) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Thermolam").should('be.visible')
        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(4) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Thermoplastic Sheets").should('be.visible')
        //cy.get(':nth-child(1) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click().wait(500)   // Tapping to Doors test 
        cy.get(':nth-child(1) > .MuiCardContent-root > .MuiList-root > :nth-child(3) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')      // Select Mullions Doors 
        .click().wait(500)
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(500)                                                                         // Tapping to Submit btn
        cy.get('.MuiAlert-message').contains('Please validate the form before submitting the order').should('be.visible')                                       // Assertion for validation message
        cy.get('.MuiAccordionSummary-root').click().wait(500)                                                                                                   // Tapping to Accordian 
        cy.get('#\\:rt\\:-helper-text').contains('Required value').should('be.visible')                                                                         // Validation of helper text
        cy.get('#\\:r11\\:-helper-text').contains('Value is not a valid email address').should('be.visible')                                                    // Validation of helper text
        cy.get('#\\:r17\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text    
        cy.get('#\\:rt\\:').type('Automate Molded(Mullions Doors) Category')                                                                                    // Name      
        cy.get('#\\:r11\\:').type('AutomateMullionsDoors#gmail.com', { force: true })                                                                           // Email     
        cy.get('#\\:r11\\:-helper-text').contains('Value is not a valid email address').should('be.visible')                                                    // Eamil Validation of helper text
        cy.get('#\\:r11\\:').type('AutomateMullionsDoors#gmail.com').clear()                                                                                    // Clear the invalid input
        cy.get('#\\:r11\\:').type('AutomateMullionsDoors@gmail.com', { force: true })                                                                           // Email with valid input   
        cy.get('#\\:r17\\:').type('MullionsDoors 45', { force: true })                                                                                          // Your PO
        cy.get('#\\:r19\\:').type('XYZ 1', { force: true })                                                                                                     // Their PO        
        cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click()                                                                                         // Tapping to Date icon        
        cy.get('.MuiCalendarPicker-root').find('button[role="gridcell"]')                                                                                       // Locate date buttons inside the calendar
            .each(($el) => {
                if (!$el.prop('disabled')) {                                                                                                                    // Check if the date is enabled                
                cy.wrap($el).click().wait(500)                                                                                                                  // Click the first enabled date                
                return false                                                                                                                                    // Break the loop after selecting the date
                }
            });        
        cy.get('.css-x7mp9n').first().type('ABC 1', { force: true })                                                                                            // Adding Note

            const filePath = 'images/sample-image.png';                                                                                                         // Define the file path relative to the cypress/fixtures directory            
            cy.get('input[type="file"]#estimator-image-input').attachFile(filePath)                                                                             // Upload the file using the input element
            .then(input => {                
            expect(input[0].files[0].name).to.equal('sample-image.png');                                                                                        // Verify that the file is uploaded
            });    
        cy.get(':nth-child(1) > .MuiFormControlLabel-root > .MuiTypography-root > .css-zfsz4h').click()                                                         // Tapping to inch/mm

        //cy.get('.MuiAccordionSummary-root').click().wait(500)                                                                                                 // Tapping to Accordian
        cy.get('#\\:r1d\\:').type('Molded(Mullions Doors) Section')                                                                                             // Section Name      
        cy.get('#\\:r1f\\:').type('Automating Molded Category with Mullions Doors Section')                                                                     // Section Note
        
        //Molded >> Mullions Doors                
        cy.get('.MuiAccordionSummary-content').click()      
        cy.get('#\\:r1k\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text
        cy.get('#\\:r1k\\:').type('ws')                                                                                                                         // InValid input Width
        cy.get('#\\:r1k\\:-helper-text').contains('Not a valid measurement').should('be.visible')                                                               // Validation of helper text for invalid input
        cy.get('#\\:r1k\\:').type('qa').clear()                                                                                                                 // Clear input width    
        cy.get('#\\:r1k\\:').type('45')                                                                                                                         // Valid input width
        cy.get('#\\:r1m\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text
        cy.get('#\\:r1m\\:').type('wsqa')                                                                                                                       // InValid input Height
        cy.get('#\\:r1m\\:-helper-text').contains('Not a valid measurement').should('be.visible')                                                               // Validation of helper text for invalid input
        cy.get('#\\:r1m\\:').type('abcs').clear()                                                                                                               // Clear input Height    
        cy.get('#\\:r1m\\:').type('2312')                                                                                                                       // Valid input Height
        cy.get('#\\:r1q\\:').click()                                                                                                                            // Grain
        cy.get('[data-value="H"]').click()                                                                                                                      // grain
        cy.get('#\\:r1s\\:').click()                                                                                                                            // stiles
        cy.get('[data-value="VG"]').click()                                                                                                                     // stiles
        cy.get('#\\:r1v\\:-helper-text').contains('Invalid value').should('be.visible')                                                                         // Validation of helper text
        cy.get('#\\:r1t\\:').type('22024')                                                                                                                      // Modele
        cy.get('#\\:r20\\:').type('H')                                                                                                                          // ext profile
        cy.get('#\\:r25\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text
        cy.get('#\\:r23\\:').type('6')                                                                                                                          // Openings
        cy.get('#\\:r27\\:').click()                                                                                                                            // type
        cy.get('[data-value="S"]').click()                                                                                                                      // type
        cy.get('#\\:r29\\:').click()                                                                                                                            // qty
        cy.get('[data-value="2"]').click()                                                                                                                      // qty
        cy.get('#\\:r2b\\:').click().wait(500)                                                                                                                  // position
        cy.get('[data-value="B"]').click()                                                                                                                      // position  
        cy.get('.MuiFormControl-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click()                                                                 // Dowels 
        cy.get('#\\:r2e\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text      
        cy.get('#\\:r2c\\:').type('999')                                                                                                                        // color

        cy.get('[colspan="19"] > .MuiButtonBase-root').click()                                                                                                  // Adding second row                
        cy.get('#\\:r2v\\:').type('14')                                                                                                                         // Width
        cy.get('#\\:r31\\:').type('4257')                                                                                                                       // Height
        cy.get('#\\:r35\\:').should('contain', 'H')                                                                                                             // Assertion for grain 
        cy.get('#\\:r37\\:').should('contain', 'VG')                                                                                                            // Assertion for stiles and rails              
        cy.get('#\\:r38\\:').should('have.value', '22024')                                                                                                      // Assertion for Modele        
        cy.get('#\\:r3b\\:').should('have.value', 'H')                                                                                                          // Assertion for ext profile
        cy.get('#\\:r3e\\:').should('have.value', '6')                                                                                                          // Assertion for Openings
        cy.get('#\\:r3i\\:').should('contain', 'S')                                                                                                             // Assertion for Type        
        cy.get('#\\:r3k\\:').should('contain', '2')                                                                                                             // Assertion for qty        
        cy.get('#\\:r3m\\:').should('contain', 'B')                                                                                                             // Assertion for postiton            
        cy.get(':nth-child(3) > :nth-child(15) > .MuiFormControl-root > .MuiButtonBase-root > .PrivateSwitchBase-input').should('be.checked')                   // Assertion for Dowels                     
        cy.get('#\\:r3n\\:').should('have.value', '999 - MDF')                                                                                                  // Assertion for color               
        cy.get('[aria-label="Save"] > .MuiButtonBase-root').click().wait(5000)                                                                                  // Tapping to save btn
        cy.get('.headerActions > .MuiButton-contained').click().wait(10000)                                                                                     // Tapping to Print btn
        cy.get('#\\:rp\\: > .MuiButtonBase-root').click()                                                                                                       // Closing print view
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(5000)                                                                        // Tapping to Submit btn
        cy.get('.css-1ubxkj1 > :nth-child(1)').click().wait(5000)                                                                                               // Print order    
        cy.get('#\\:rp\\: > .MuiButtonBase-root').click().wait(500)                                                                                             // Closing print view
    })

    it.skip("Verify Order Edited Successfully Via Web Orders Flow", function()  {

        // User Creation Steps:
        cy.viewport(1720, 1080)    
        cy.visit("https://dev.thermoform.net/") 
        cy.wait(5000)
        cy.get('.MuiTypography-root').contains("Identification").should('be.visible').and('exist')                                                              // Asssertion of Identification heading is present 
        cy.get('.MuiTypography-body2').contains("Forgot Password?").should('be.visible').and('exist')                                                           // Asssertion of Forgot Password? link is present   
        cy.get('[type="submit"]').contains("Next").should('be.visible').and('exist').and('not.be.enabled')                                                      // Asssertion of Next btn is disabled        
        cy.get('input[name="username"]').type("masterfortesting").wait(500)                                                                                     // Input valid username                        
        cy.get('[type="submit"]').contains("Next").should('be.visible').and('exist').and('contain','Next').click()                                              // Click to Next button         
        cy.get('.MuiTypography-h5').contains("Email Authentication").should('be.visible').and('exist').and('contain','Email').click()                           // Asssertion of "Email Authentication" heading is present
        cy.get('input[name="email"]').should('be.visible').and('exist')                                                                                         // Asssertion of email box is present                       
        cy.get('[type="submit"]').contains("Send Authentication Link").should('be.visible').and('exist').and('contain','Authentication')                        // Asssertion of Send Authentication Link button is present
        cy.get('[type="text"]').contains("Password Authentication").should('be.visible').and('exist').and('contain','Password').click()                         // Asssertion of "Password Authentication" link is present                       
        cy.get('.MuiTypography-h5').contains("Password Authentication").should('be.visible').and('exist').and('contain','Password')                             // Asssertion of Password Authentication heading is present
        cy.get('.MuiTypography-body2').contains("Forgot Password?").should('be.visible').and('exist')                                                           // Asssertion of Forgot Password? link is present   
        cy.get('[type="text"]').contains("Email Authentication").should('be.visible').and('exist').and('contain','Email')                                       // Asssertion of Email Authentication Link is present                
        cy.get('input[name="password"]').type("[HPnotebook1@")                                                                                                  // Input valid password        
        cy.get('[type="submit"]').contains("Submit").should('be.visible').and('exist').and('contain','Submit').click()                                          // Click to Submit button for portal login  
        //cy.get('.css-imv4ws > .MuiAvatar-root').click().wait(1000)                                                                                            // Asserting login button present with its avaialble options	 
        //cy.get('.css-1stpmc > :nth-child(1) > .MuiListItemText-root > .MuiTypography-root').contains("Français (Canada)").should('be.visible')                // Asserting Français (Canada) text is present and fr language is pre selected 
        //.and('exist').and('contain','Français').click().wait(1000)                                                         
        //cy.get('.MuiListItemText-primary').contains("English (Canada)").should('be.visible').and('exist').and('contain','English').click().wait(2000)         // Changing portal language to English
        cy.get('body').click().wait(2000)
        cy.get('.MuiToolbar-root > .MuiTypography-root', { timeout: 25000 }).contains("Home").should('be.visible').and('exist').and('contain','Home')           // Asserting of Home text is present on home page
        cy.get('.MuiTypography-h4').contains("Shortcuts").should('be.visible').and('exist').and('contain','Shortcuts')                                          // Asserting of Shortcuts text is present on home page        
        cy.get('.MuiIconButton-colorInherit').click({force: true})                                                                                              // Click to menu icon
        cy.get(':nth-child(7) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').contains("Customer Center").should('be.visible')            // Asserting of Customer Center li is present on side menu
        .and('exist').and('contain','Customer').click().wait(1000)        
        cy.get('[title="Estimator"] > .MuiListItemText-root > .MuiTypography-root').contains("Estimator").should('be.visible')                                  // Asserting of Estimator li is present on side menu
        .and('exist').and('contain','Estimator').click()
        cy.get('.css-budqf6', { timeout: 25000 }).contains('Add color').should('be.visible')                                                                    // Asserting Add color btn is visible
        cy.get('.jss23 > .MuiButtonBase-root').click()                                                                                                          // Tapping to menu icon to close sidebar
        cy.get('[data-tour="order.action.new"]').click()                                                                                                        // Adding fresh order        
        cy.get('.MuiDialogActions-root > :nth-child(2)').click()                                                                                                // Tapping to OK btn
        cy.get('.css-budqf6').contains('Add color').click({force: true}).wait(500)                                                                              // Tapping to Add color btn
        cy.get('.MuiBox-root > .MuiGrid-container > .MuiGrid-root > .MuiButtonBase-root').click().wait(500)                                                     // Tapping to Add a new product btn
        cy.get(':nth-child(1) > .MuiCardContent-root > .MuiTypography-h5').contains("Molded").should('be.visible')
        cy.get(':nth-child(1) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Doors").should('be.visible')
        cy.get(':nth-child(1) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Drawer Fronts").should('be.visible')
        cy.get(':nth-child(1) > .MuiCardContent-root > .MuiList-root > :nth-child(3) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Mullions Doors").should('be.visible')

        cy.get(':nth-child(3) > .MuiCardContent-root > .MuiTypography-h5').contains("Edged").should('be.visible')
        cy.get(':nth-child(3) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Doors (Edged)").should('be.visible')
        cy.get(':nth-child(3) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Mullions Doors (Edged)").should('be.visible')

        cy.get(':nth-child(5) > .MuiCardContent-root > .MuiTypography-h5').contains("Accessories").should('be.visible')
        cy.get(':nth-child(5) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Edge Banding").should('be.visible')
        cy.get(':nth-child(5) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Heat Deflectors and Protectors").should('be.visible')
        cy.get(':nth-child(5) > .MuiCardContent-root > .MuiList-root > :nth-child(3) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Moldings").should('be.visible')
        cy.get(':nth-child(5) > .MuiCardContent-root > .MuiList-root > :nth-child(4) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Preglued Edge Banding").should('be.visible')
        cy.get('.MuiList-root > :nth-child(5) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Tambour Roll-ups").should('be.visible')

        cy.get(':nth-child(2) > .MuiCardContent-root > .MuiTypography-h5').contains("5-pieces").should('be.visible')
        cy.get(':nth-child(2) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Doors (5 pieces)").should('be.visible')
        cy.get(':nth-child(2) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Drawer Fronts (5 pieces)").should('be.visible')
        cy.get(':nth-child(2) > .MuiCardContent-root > .MuiList-root > :nth-child(3) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Mullions Doors (5 pieces)").should('be.visible')

        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiTypography-h5').contains("Boards").should('be.visible')
        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Boards").should('be.visible')
        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Preglued Thermoplastic Sheets").should('be.visible')
        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(3) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Thermolam").should('be.visible')
        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(4) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Thermoplastic Sheets").should('be.visible')
        //cy.get(':nth-child(1) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click().wait(500)   // Tapping to Doors test 
        cy.get(':nth-child(1) > .MuiCardContent-root > .MuiList-root > :nth-child(3) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')      // Select Mullions Doors 
        .click().wait(500)
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(500)                                                                         // Tapping to Submit btn
        cy.get('.MuiAlert-message').contains('Please validate the form before submitting the order').should('be.visible')                                       // Assertion for validation message
        cy.get('.MuiAccordionSummary-root').click().wait(500)                                                                                                   // Tapping to Accordian 
        cy.get('#\\:rt\\:-helper-text').contains('Required value').should('be.visible')                                                                         // Validation of helper text
        cy.get('#\\:r11\\:-helper-text').contains('Value is not a valid email address').should('be.visible')                                                    // Validation of helper text
        cy.get('#\\:r17\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text    
        cy.get('#\\:rt\\:').type('Automate Mullions Doors-1')                                                                                                   // Name      
        cy.get('#\\:r11\\:').type('AutomateMullionsDoors#gmail.com', { force: true })                                                                           // Email     
        cy.get('#\\:r11\\:-helper-text').contains('Value is not a valid email address').should('be.visible')                                                    // Eamil Validation of helper text
        cy.get('#\\:r11\\:').clear()                                                                                                                            // Clear the invalid input
        cy.get('#\\:r11\\:').type('AutomateMullionsDoors@gmail.com', { force: true })                                                                           // Email with valid input   
        cy.get('#\\:r17\\:').type('MullionsDoors 45', { force: true })                                                                                          // Your PO
        cy.get('#\\:r19\\:').type('XYZ 1', { force: true })                                                                                                     // Their PO        
        cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click()                                                                                         // Tapping to Date icon        
        cy.get('.MuiCalendarPicker-root').find('button[role="gridcell"]')                                                                                       // Locate date buttons inside the calendar
            .each(($el) => {
                if (!$el.prop('disabled')) {                                                                                                                    // Check if the date is enabled                
                cy.wrap($el).click().wait(500)                                                                                                                  // Click the first enabled date                
                return false                                                                                                                                    // Break the loop after selecting the date
                }
            });        
        cy.get('.css-x7mp9n').first().type('ABC 1', { force: true })                                                                                            // Adding Note

            const filePath = 'images/sample-image.png';                                                                                                         // Define the file path relative to the cypress/fixtures directory            
            cy.get('input[type="file"]#estimator-image-input').attachFile(filePath)                                                                             // Upload the file using the input element
            .then(input => {                
            expect(input[0].files[0].name).to.equal('sample-image.png');                                                                                        // Verify that the file is uploaded
            });    
        cy.get(':nth-child(1) > .MuiFormControlLabel-root > .MuiTypography-root > .css-zfsz4h').click()                                                         // Tapping to inch/mm

        //cy.get('.MuiAccordionSummary-root').click().wait(500)                                                                                                 // Tapping to Accordian
        cy.get('#\\:r1d\\:').type('Molded(Mullions Doors) Section')                                                                                             // Section Name      
        cy.get('#\\:r1f\\:').type('Automating Molded Category with Mullions Doors Section')                                                                     // Section Note
        
        //Molded >> Mullions Doors                
        cy.get('.MuiAccordionSummary-content').click()      
        cy.get('#\\:r1k\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text
        cy.get('#\\:r1k\\:').type('ws')                                                                                                                         // InValid input Width
        cy.get('#\\:r1k\\:-helper-text').contains('Not a valid measurement').should('be.visible')                                                               // Validation of helper text for invalid input
        cy.get('#\\:r1k\\:').type('qa').clear()                                                                                                                 // Clear input width    
        cy.get('#\\:r1k\\:').type('45')                                                                                                                         // Valid input width
        cy.get('#\\:r1m\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text
        cy.get('#\\:r1m\\:').type('wsqa')                                                                                                                       // InValid input Height
        cy.get('#\\:r1m\\:-helper-text').contains('Not a valid measurement').should('be.visible')                                                               // Validation of helper text for invalid input
        cy.get('#\\:r1m\\:').type('abcs').clear()                                                                                                               // Clear input Height    
        cy.get('#\\:r1m\\:').type('2312')                                                                                                                       // Valid input Height
        cy.get('#\\:r1q\\:').click()                                                                                                                            // Grain
        cy.get('[data-value="H"]').click()                                                                                                                      // grain
        cy.get('#\\:r1s\\:').click()                                                                                                                            // stiles
        cy.get('[data-value="VG"]').click()                                                                                                                     // stiles
        cy.get('#\\:r1v\\:-helper-text').contains('Invalid value').should('be.visible')                                                                         // Validation of helper text
        cy.get('#\\:r1t\\:').type('22024')                                                                                                                      // Modele
        cy.get('#\\:r20\\:').type('H')                                                                                                                          // ext profile
        cy.get('#\\:r25\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text
        cy.get('#\\:r23\\:').type('6')                                                                                                                          // Openings
        cy.get('#\\:r27\\:').click()                                                                                                                            // type
        cy.get('[data-value="S"]').click()                                                                                                                      // type
        cy.get('#\\:r29\\:').click()                                                                                                                            // qty
        cy.get('[data-value="2"]').click()                                                                                                                      // qty
        cy.get('#\\:r2b\\:').click().wait(500)                                                                                                                  // position
        cy.get('[data-value="B"]').click()                                                                                                                      // position  
        cy.get('.MuiFormControl-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click()                                                                 // Dowels 
        cy.get('#\\:r2e\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text      
        cy.get('#\\:r2c\\:').type('999')                                                                                                                        // color

        cy.get('[colspan="19"] > .MuiButtonBase-root').click()                                                                                                  // Adding second row                
        cy.get('#\\:r2v\\:').type('14')                                                                                                                         // Width
        cy.get('#\\:r31\\:').type('4257')                                                                                                                       // Height
        cy.get('#\\:r35\\:').should('contain', 'H')                                                                                                             // Assertion for grain 
        cy.get('#\\:r37\\:').should('contain', 'VG')                                                                                                            // Assertion for stiles and rails              
        cy.get('#\\:r38\\:').should('have.value', '22024')                                                                                                      // Assertion for Modele        
        cy.get('#\\:r3b\\:').should('have.value', 'H')                                                                                                          // Assertion for ext profile
        cy.get('#\\:r3e\\:').should('have.value', '6')                                                                                                          // Assertion for Openings
        cy.get('#\\:r3i\\:').should('contain', 'S')                                                                                                             // Assertion for Type        
        cy.get('#\\:r3k\\:').should('contain', '2')                                                                                                             // Assertion for qty        
        cy.get('#\\:r3m\\:').should('contain', 'B')                                                                                                             // Assertion for postiton            
        cy.get(':nth-child(3) > :nth-child(15) > .MuiFormControl-root > .MuiButtonBase-root > .PrivateSwitchBase-input').should('be.checked')                   // Assertion for Dowels                     
        cy.get('#\\:r3n\\:').should('have.value', '999 - MDF')                                                                                                  // Assertion for color               
        cy.get('[aria-label="Save"] > .MuiButtonBase-root').click()                                                                                             // Tapping to save btn
        cy.get('.css-1ubxkj1 > :nth-child(1)', { timeout: 5000 }).click().wait(5000)                                                                            // Print order  
        cy.get('#\\:rp\\: > .MuiButtonBase-root').click().wait(500)                                                                                             // Closing print view
  

        cy.get('.MuiIconButton-colorInherit').click({force: true})                                                                                              // Click to menu icon
        cy.get('[title="Web Orders"]').click().wait(1000)                                                                                                       // Tapping to web Orders
        cy.get(':nth-child(1) > .MuiListItemText-root > .MuiListItemText-primary > .MuiTypography-root > :nth-child(1) > span')
        .should('contain','Automate Mullions Doors-1').click().wait(500)                                                                                        // Pick the first saved order by name and click it
        // Order populated in estimaior 
        cy.wait(20000)
        //cy.get('#\\:r1d\\:', { timeout: 20000 }).contains('Molded(Mullions Doors) Section').should('be.visible')
        cy.get('#\\:rt\\:').clear()                                                                                                                             // Clear order name 
        cy.get('.css-1mrqld1').click().wait(500)                                                                                                                // Tapping to Accordian 
        cy.get('#\\:rt\\:').type('Automate Molded(Mullions Doors) 3')                                                                                           // Update order name      
        cy.get('#\\:r11\\:').clear()                                                                                                                            // Clear order Email 
        cy.get('#\\:r11\\:').type('AutomateMD2@mail.com', { force: true })                                                                                      // Update Email
        cy.get('#\\:r17\\:').clear()                                                                                                                            // Clear Your PO 
        cy.get('#\\:r17\\:').type('MullionsDoors 100', { force: true })                                                                                         // Update Your PO        
        cy.get(':nth-child(1) > .MuiFormControlLabel-root > .MuiTypography-root > .css-zfsz4h').click()                                                         // Tapping to inch/mm        
        // Updating table data
        cy.get('.css-1mrqld1').click().wait(5000)                                                                                                               // Tapping to Accordian
        cy.get('#\\:r1h\\:-button').scrollIntoView().click()                                                                                                    // Scrolling the page down and remove the second row
        cy.get('#\\:r1h\\:-menu > .MuiPaper-root > .MuiList-root > :nth-child(5)').click().wait(500)                                            
        cy.get('#\\:r1l\\:').clear()                                                                                                                            // Clear input width    
        cy.get('#\\:r1l\\:').type('145')                                                                                                                        // Valid input width
        cy.get('#\\:r1n\\:').clear()                                                                                                                            // Clear input Height    
        cy.get('#\\:r1n\\:').type('2312')                                                                                                                       // Valid input Height
        cy.get('#\\:r1r\\:').click()                                                                                                                            // Grain
        cy.get('[data-value="V"]').click()                                                                                                                      // grain
        cy.get('#\\:r1t\\:').click()                                                                                                                            // stiles
        cy.get('[data-value="LG"]').click()                                                                                                                     // stiles
        cy.get('#\\:r1u\\:').type('2006')                                                                                                                       // Modele
        cy.get('#\\:r21\\:').type('C')                                                                                                                          // ext profile
        cy.get('#\\:r24\\:').type('10')                                                                                                                         // Openings
        cy.get('#\\:r28\\:').click()                                                                                                                            // type
        cy.get('[data-value="T"]').click()                                                                                                                      // type
        cy.get('#\\:r2a\\:').click()                                                                                                                            // qty
        cy.get('[data-value="3"]').click()                                                                                                                      // qty
        cy.get('#\\:r2c\\:').click()                                                                                                                            // position
        cy.get('[data-value="H"]').click()                                                                                                                      // position  
        cy.get(':nth-child(1) > :nth-child(15) > .MuiFormControl-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click()                                // Dowel                                // Dowels 
        cy.get('#\\:r2d\\:').type('271')                                                                                                                        // color
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click()                                                                                   // Tapping to Submit btn
        cy.get('.css-1ubxkj1 > :nth-child(1)', { timeout: 5000 }).click().wait(5000)                                                                            // Print order    
        cy.get('#\\:rp\\: > .MuiButtonBase-root').click().wait(500)                                                                                             // Closing print view        
    })

    it.skip("Verify Order Edited Successfully on same screen", function()  {

        // User Creation Steps:
        cy.viewport(1720, 1080)    
        cy.visit("https://dev.thermoform.net/") 
        cy.wait(5000)
        cy.get('.MuiTypography-root').contains("Identification").should('be.visible').and('exist')                                                              // Asssertion of Identification heading is present 
        cy.get('.MuiTypography-body2').contains("Forgot Password?").should('be.visible').and('exist')                                                           // Asssertion of Forgot Password? link is present   
        cy.get('[type="submit"]').contains("Next").should('be.visible').and('exist').and('not.be.enabled')                                                      // Asssertion of Next btn is disabled        
        cy.get('input[name="username"]').type("masterfortesting").wait(500)                                                                                     // Input valid username                        
        cy.get('[type="submit"]').contains("Next").should('be.visible').and('exist').and('contain','Next').click()                                              // Click to Next button         
        cy.get('.MuiTypography-h5').contains("Email Authentication").should('be.visible').and('exist').and('contain','Email').click()                           // Asssertion of "Email Authentication" heading is present
        cy.get('input[name="email"]').should('be.visible').and('exist')                                                                                         // Asssertion of email box is present                       
        cy.get('[type="submit"]').contains("Send Authentication Link").should('be.visible').and('exist').and('contain','Authentication')                        // Asssertion of Send Authentication Link button is present
        cy.get('[type="text"]').contains("Password Authentication").should('be.visible').and('exist').and('contain','Password').click()                         // Asssertion of "Password Authentication" link is present                       
        cy.get('.MuiTypography-h5').contains("Password Authentication").should('be.visible').and('exist').and('contain','Password')                             // Asssertion of Password Authentication heading is present
        cy.get('.MuiTypography-body2').contains("Forgot Password?").should('be.visible').and('exist')                                                           // Asssertion of Forgot Password? link is present   
        cy.get('[type="text"]').contains("Email Authentication").should('be.visible').and('exist').and('contain','Email')                                       // Asssertion of Email Authentication Link is present                
        cy.get('input[name="password"]').type("[HPnotebook1@")                                                                                                  // Input valid password        
        cy.get('[type="submit"]').contains("Submit").should('be.visible').and('exist').and('contain','Submit').click()                                          // Click to Submit button for portal login  
        //cy.get('.css-imv4ws > .MuiAvatar-root').click().wait(1000)                                                                                            // Asserting login button present with its avaialble options	 
        //cy.get('.css-1stpmc > :nth-child(1) > .MuiListItemText-root > .MuiTypography-root').contains("Français (Canada)").should('be.visible')                // Asserting Français (Canada) text is present and fr language is pre selected 
        //.and('exist').and('contain','Français').click().wait(1000)                                                         
        //cy.get('.MuiListItemText-primary').contains("English (Canada)").should('be.visible').and('exist').and('contain','English').click().wait(2000)         // Changing portal language to English
        cy.get('body').click().wait(2000)
        cy.get('.MuiToolbar-root > .MuiTypography-root', { timeout: 25000 }).contains("Home").should('be.visible').and('exist').and('contain','Home')           // Asserting of Home text is present on home page
        cy.get('.MuiTypography-h4').contains("Shortcuts").should('be.visible').and('exist').and('contain','Shortcuts')                                          // Asserting of Shortcuts text is present on home page        
        cy.get('.MuiIconButton-colorInherit').click({force: true})                                                                                              // Click to menu icon
        cy.get(':nth-child(7) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').contains("Customer Center").should('be.visible')            // Asserting of Customer Center li is present on side menu
        .and('exist').and('contain','Customer').click().wait(1000)        
        cy.get('[title="Estimator"] > .MuiListItemText-root > .MuiTypography-root').contains("Estimator").should('be.visible')                                  // Asserting of Estimator li is present on side menu
        .and('exist').and('contain','Estimator').click()
        cy.get('.css-budqf6', { timeout: 25000 }).contains('Add color').should('be.visible')                                                                    // Asserting Add color btn is visible
        cy.get('.jss23 > .MuiButtonBase-root').click()                                                                                                          // Tapping to menu icon to close sidebar
        cy.get('[data-tour="order.action.new"]').click()                                                                                                        // Adding fresh order        
        cy.get('.MuiDialogActions-root > :nth-child(2)').click()                                                                                                // Tapping to OK btn
        cy.get('.css-budqf6').contains('Add color').click({force: true}).wait(500)                                                                              // Tapping to Add color btn
        cy.get('.MuiBox-root > .MuiGrid-container > .MuiGrid-root > .MuiButtonBase-root').click().wait(500)                                                     // Tapping to Add a new product btn
        cy.get(':nth-child(1) > .MuiCardContent-root > .MuiTypography-h5').contains("Molded").should('be.visible')
        cy.get(':nth-child(1) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Doors").should('be.visible')
        cy.get(':nth-child(1) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Drawer Fronts").should('be.visible')
        cy.get(':nth-child(1) > .MuiCardContent-root > .MuiList-root > :nth-child(3) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Mullions Doors").should('be.visible')

        cy.get(':nth-child(3) > .MuiCardContent-root > .MuiTypography-h5').contains("Edged").should('be.visible')
        cy.get(':nth-child(3) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Doors (Edged)").should('be.visible')
        cy.get(':nth-child(3) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Mullions Doors (Edged)").should('be.visible')

        cy.get(':nth-child(5) > .MuiCardContent-root > .MuiTypography-h5').contains("Accessories").should('be.visible')
        cy.get(':nth-child(5) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Edge Banding").should('be.visible')
        cy.get(':nth-child(5) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Heat Deflectors and Protectors").should('be.visible')
        cy.get(':nth-child(5) > .MuiCardContent-root > .MuiList-root > :nth-child(3) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Moldings").should('be.visible')
        cy.get(':nth-child(5) > .MuiCardContent-root > .MuiList-root > :nth-child(4) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Preglued Edge Banding").should('be.visible')
        cy.get('.MuiList-root > :nth-child(5) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Tambour Roll-ups").should('be.visible')

        cy.get(':nth-child(2) > .MuiCardContent-root > .MuiTypography-h5').contains("5-pieces").should('be.visible')
        cy.get(':nth-child(2) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Doors (5 pieces)").should('be.visible')
        cy.get(':nth-child(2) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Drawer Fronts (5 pieces)").should('be.visible')
        cy.get(':nth-child(2) > .MuiCardContent-root > .MuiList-root > :nth-child(3) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Mullions Doors (5 pieces)").should('be.visible')

        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiTypography-h5').contains("Boards").should('be.visible')
        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Boards").should('be.visible')
        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Preglued Thermoplastic Sheets").should('be.visible')
        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(3) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Thermolam").should('be.visible')
        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(4) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Thermoplastic Sheets").should('be.visible')
        //cy.get(':nth-child(1) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click().wait(500)   // Tapping to Doors test 
        cy.get(':nth-child(1) > .MuiCardContent-root > .MuiList-root > :nth-child(3) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')      // Select Mullions Doors 
        .click().wait(500)
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(500)                                                                         // Tapping to Submit btn
        cy.get('.MuiAlert-message').contains('Please validate the form before submitting the order').should('be.visible')                                       // Assertion for validation message
        cy.get('.MuiAccordionSummary-root').click().wait(500)                                                                                                   // Tapping to Accordian 
        cy.get('#\\:rt\\:-helper-text').contains('Required value').should('be.visible')                                                                         // Validation of helper text
        cy.get('#\\:r11\\:-helper-text').contains('Value is not a valid email address').should('be.visible')                                                    // Validation of helper text
        cy.get('#\\:r17\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text    
        cy.get('#\\:rt\\:').type('Automate Mullions Doors-10')                                                                                                  // Name      
        cy.get('#\\:r11\\:').type('AutomateMullionsDoors#gmail.com', { force: true })                                                                           // Email     
        cy.get('#\\:r11\\:-helper-text').contains('Value is not a valid email address').should('be.visible')                                                    // Eamil Validation of helper text
        cy.get('#\\:r11\\:').clear()                                                                                                                            // Clear the invalid input
        cy.get('#\\:r11\\:').type('AutomateMullionsDoors@gmail.com', { force: true })                                                                           // Email with valid input   
        cy.get('#\\:r17\\:').type('MullionsDoors 45', { force: true })                                                                                          // Your PO
        cy.get('#\\:r19\\:').type('XYZ 1', { force: true })                                                                                                     // Their PO        
        cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click()                                                                                         // Tapping to Date icon        
        cy.get('.MuiCalendarPicker-root').find('button[role="gridcell"]')                                                                                       // Locate date buttons inside the calendar
            .each(($el) => {
                if (!$el.prop('disabled')) {                                                                                                                    // Check if the date is enabled                
                cy.wrap($el).click().wait(500)                                                                                                                  // Click the first enabled date                
                return false                                                                                                                                    // Break the loop after selecting the date
                }
            });        
        cy.get('.css-x7mp9n').first().type('ABC 1', { force: true })                                                                                            // Adding Note

            const filePath = 'images/sample-image.png';                                                                                                         // Define the file path relative to the cypress/fixtures directory            
            cy.get('input[type="file"]#estimator-image-input').attachFile(filePath)                                                                             // Upload the file using the input element
            .then(input => {                
            expect(input[0].files[0].name).to.equal('sample-image.png');                                                                                        // Verify that the file is uploaded
            });    
        cy.get(':nth-child(1) > .MuiFormControlLabel-root > .MuiTypography-root > .css-zfsz4h').click()                                                         // Tapping to inch/mm

        //cy.get('.MuiAccordionSummary-root').click().wait(500)                                                                                                 // Tapping to Accordian
        cy.get('#\\:r1d\\:').type('Molded(Mullions Doors) Section')                                                                                             // Section Name      
        cy.get('#\\:r1f\\:').type('Automating Molded Category with Mullions Doors Section')                                                                     // Section Note
        
        //Molded >> Mullions Doors                
        cy.get('.MuiAccordionSummary-content').click()      
        cy.get('#\\:r1k\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text
        cy.get('#\\:r1k\\:').type('ws')                                                                                                                         // InValid input Width
        cy.get('#\\:r1k\\:-helper-text').contains('Not a valid measurement').should('be.visible')                                                               // Validation of helper text for invalid input
        cy.get('#\\:r1k\\:').type('qa').clear()                                                                                                                 // Clear input width    
        cy.get('#\\:r1k\\:').type('45')                                                                                                                         // Valid input width
        cy.get('#\\:r1m\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text
        cy.get('#\\:r1m\\:').type('wsqa')                                                                                                                       // InValid input Height
        cy.get('#\\:r1m\\:-helper-text').contains('Not a valid measurement').should('be.visible')                                                               // Validation of helper text for invalid input
        cy.get('#\\:r1m\\:').type('abcs').clear()                                                                                                               // Clear input Height    
        cy.get('#\\:r1m\\:').type('2312')                                                                                                                       // Valid input Height
        cy.get('#\\:r1q\\:').click()                                                                                                                            // Grain
        cy.get('[data-value="H"]').click()                                                                                                                      // grain
        cy.get('#\\:r1s\\:').click()                                                                                                                            // stiles
        cy.get('[data-value="VG"]').click()                                                                                                                     // stiles
        cy.get('#\\:r1v\\:-helper-text').contains('Invalid value').should('be.visible')                                                                         // Validation of helper text
        cy.get('#\\:r1t\\:').type('22024')                                                                                                                      // Modele
        cy.get('#\\:r20\\:').type('H')                                                                                                                          // ext profile
        cy.get('#\\:r25\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text
        cy.get('#\\:r23\\:').type('6')                                                                                                                          // Openings
        cy.get('#\\:r27\\:').click()                                                                                                                            // type
        cy.get('[data-value="S"]').click()                                                                                                                      // type
        cy.get('#\\:r29\\:').click()                                                                                                                            // qty
        cy.get('[data-value="2"]').click()                                                                                                                      // qty
        cy.get('#\\:r2b\\:').click().wait(500)                                                                                                                  // position
        cy.get('[data-value="B"]').click()                                                                                                                      // position  
        cy.get('.MuiFormControl-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click()                                                                 // Dowels 
        cy.get('#\\:r2e\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text      
        cy.get('#\\:r2c\\:').type('999')                                                                                                                        // color

        cy.get('[colspan="19"] > .MuiButtonBase-root').click()                                                                                                  // Adding second row                
        cy.get('#\\:r2v\\:').type('14')                                                                                                                         // Width
        cy.get('#\\:r31\\:').type('4257')                                                                                                                       // Height
        cy.get('#\\:r35\\:').should('contain', 'H')                                                                                                             // Assertion for grain 
        cy.get('#\\:r37\\:').should('contain', 'VG')                                                                                                            // Assertion for stiles and rails              
        cy.get('#\\:r38\\:').should('have.value', '22024')                                                                                                      // Assertion for Modele        
        cy.get('#\\:r3b\\:').should('have.value', 'H')                                                                                                          // Assertion for ext profile
        cy.get('#\\:r3e\\:').should('have.value', '6')                                                                                                          // Assertion for Openings
        cy.get('#\\:r3i\\:').should('contain', 'S')                                                                                                             // Assertion for Type        
        cy.get('#\\:r3k\\:').should('contain', '2')                                                                                                             // Assertion for qty        
        cy.get('#\\:r3m\\:').should('contain', 'B')                                                                                                             // Assertion for postiton            
        cy.get(':nth-child(3) > :nth-child(15) > .MuiFormControl-root > .MuiButtonBase-root > .PrivateSwitchBase-input').should('be.checked')                   // Assertion for Dowels                     
        cy.get('#\\:r3n\\:').should('have.value', '999 - MDF')                                                                                                  // Assertion for color               
        //cy.get('[aria-label="Save"] > .MuiButtonBase-root').click().wait(500000)                                                                                             // Tapping to save btn
        cy.get('.headerActions > .MuiButton-contained').click().wait(5000)                                                                                      // Print order  
        cy.get('#\\:rp\\: > .MuiButtonBase-root').click().wait(500)                                                                                             // Closing print view  
        // Updating Main Fields
        cy.get('#\\:rt\\:').clear()                                                                                                                             // Clear order name 
        cy.get('.css-1mrqld1').click().wait(500)                                                                                                                // Tapping to Accordian 
        cy.get('#\\:rt\\:').type('Automate Molded(Mullions Doors) 10')                                                                                          // Update order name      
        cy.get('#\\:r11\\:').clear()                                                                                                                            // Clear order Email 
        cy.get('#\\:r11\\:').type('AutomateMD2@mail.com', { force: true })                                                                                      // Update Email
        cy.get('#\\:r17\\:').clear()                                                                                                                            // Clear Your PO 
        cy.get('#\\:r17\\:').type('MullionsDoors 100', { force: true })                                                                                         // Update Your PO        
        // Updating table data
        cy.get('.css-1mrqld1').click()                                                                                                                          // Tapping to Accordian
        cy.get('#\\:r6u\\:-button').scrollIntoView().click()                                                                                                      // Scrolling the page down and remove the second row
        cy.get('#\\:r6u\\:-menu > .MuiPaper-root > .MuiList-root > :nth-child(5)').click().wait(500)                                                              // Remove the row                                       
        cy.get('#\\:r72\\:').clear()                                                                                                                            // Clear input width    
        cy.get('#\\:r72\\:').type('145')                                                                                                                        // Valid input width
        cy.get('#\\:r74\\:').clear()                                                                                                                            // Clear input Height    
        cy.get('#\\:r74\\:').type('2312')                                                                                                                       // Valid input Height
        cy.get('#\\:r78\\:').click()                                                                                                                            // Grain
        cy.get('[data-value="V"]').click()                                                                                                                      // grain
        cy.get('#\\:r7a\\:').click()                                                                                                                            // stiles
        cy.get('[data-value="LG"]').click()                                                                                                                     // stiles
        cy.get('#\\:r7b\\:').type('2006')                                                                                                                       // Modele
        cy.get('#\\:r7e\\:').type('C')                                                                                                                          // ext profile
        cy.get('#\\:r7h\\:').type('10')                                                                                                                         // Openings
        cy.get('#\\:r7l\\:').click()                                                                                                                            // type
        cy.get('[data-value="T"]').click()                                                                                                                      // type
        cy.get('#\\:r7n\\:').click()                                                                                                                            // qty
        cy.get('[data-value="3"]').click()                                                                                                                      // qty
        cy.get('#\\:r7p\\:').click()                                                                                                                            // position
        cy.get('[data-value="H"]').click()                                                                                                                      // position  
        cy.get(':nth-child(1) > :nth-child(15) > .MuiFormControl-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click()                                // Dowel                                // Dowels 
        cy.get('#\\:r7q\\:').type('271')                                                                                                                        // color
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click()                                                                                   // Tapping to Submit btn
        cy.get('.css-1ubxkj1 > :nth-child(1)', { timeout: 10000 }).click().wait(5000)                                                                           // Print order    
        cy.get('#\\:rp\\: > .MuiButtonBase-root').click().wait(500)                                                                                             // Closing print view        
    })
})*/

describe('Estimator Order Creation/Edition/Submission For Edged Category Suit', function() {

    it("Verify Order created/submitted Successfully - For Doors(Edged) Category -", function()  {


        cy.viewport(1440, 900)
        cy.visit("https://dev.thermoform.net/") 
        
        cy.wait(5000)
        cy.get('.MuiTypography-root').contains("Identification").should('be.visible').and('exist')                                                              // Asssertion of Identification heading is present 
        cy.get('.MuiTypography-body2').contains("Forgot Password?").should('be.visible').and('exist')                                                           // Asssertion of Forgot Password? link is present   
        cy.get('[type="submit"]').contains("Next").should('be.visible').and('exist').and('not.be.enabled')                                                      // Asssertion of Next btn is disabled        
        cy.get('input[name="username"]').type("masterfortesting")                                                                                               // Input valid username                        
        cy.get('[type="submit"]').contains("Next").should('be.visible').and('exist').and('contain','Next').click().wait(1000)                                   // Click to Next button         
        cy.get('.MuiTypography-h5').contains("Email Authentication").should('be.visible').and('exist').and('contain','Email').click().wait(1000)                // Asssertion of "Email Authentication" heading is present
        cy.get('input[name="email"]').should('be.visible').and('exist')                                                                                         // Asssertion of email box is present                       
        cy.get('[type="submit"]').contains("Send Authentication Link").should('be.visible').and('exist').and('contain','Authentication')                        // Asssertion of Send Authentication Link button is present
        cy.get('[type="text"]').contains("Password Authentication").should('be.visible').and('exist').and('contain','Password').click().wait(1000)              // Asssertion of "Password Authentication" link is present                       
        cy.get('.MuiTypography-h5').contains("Password Authentication").should('be.visible').and('exist').and('contain','Password')                             // Asssertion of Password Authentication heading is present
        cy.get('.MuiTypography-body2').contains("Forgot Password?").should('be.visible').and('exist')                                                           // Asssertion of Forgot Password? link is present   
        cy.get('[type="text"]').contains("Email Authentication").should('be.visible').and('exist').and('contain','Email')                                       // Asssertion of Email Authentication Link is present                
        cy.get('input[name="password"]').type("[HPnotebook1@")                                                                                                  // Input valid password        
        cy.get('[type="submit"]').contains("Submit").should('be.visible').and('exist').and('contain','Submit').click().wait(1000)                               // Click to Submit button for portal login  
        //cy.get('.css-imv4ws > .MuiAvatar-root').click().wait(1000)                                                                                            // Asserting login button present with its avaialble options	 
        //cy.get('.css-1stpmc > :nth-child(1) > .MuiListItemText-root > .MuiTypography-root').contains("Français (Canada)").should('be.visible')                // Asserting Français (Canada) text is present and fr language is pre selected 
        //.and('exist').and('contain','Français').click().wait(1000)                                                         
        //cy.get('.MuiListItemText-primary').contains("English (Canada)").should('be.visible').and('exist').and('contain','English').click().wait(2000)         // Changing portal language to English
        //cy.get('body').click().wait(2000)
        cy.get('.MuiToolbar-root > .MuiTypography-root', { timeout: 100000 }).contains("Home").should('be.visible').and('exist').and('contain','Home')          // Asserting of Home text is present on home page
        // Cypress will wait up to 25 seconds for the element, but proceed immediately when the element appears
        cy.get('.MuiTypography-h4').contains("Shortcuts").should('be.visible').and('exist').and('contain','Shortcuts')                                          // Asserting of Shortcuts text is present on home page        
        cy.get('.MuiIconButton-colorInherit').click({force: true}).wait(5000)                                                                                   // Click to menu icon
        cy.get(':nth-child(7) > .MuiButtonBase-root').contains("Customer Center").and('exist').and('contain','Customer').click().wait(2000)                     // Asserting of Customer Center li is present on side menu
        //cy.get('#app > main > div > div > div > div.jss61 > ul:nth-child(5) > div').contains("Customer Center")                                               // Asserting of Customer Center li is present on side menu
        //.and('exist').and('contain','Customer').click().wait(1000)
        cy.get('[title="Estimator"] > .MuiListItemText-root > .MuiTypography-root').contains("Estimator").should('be.visible')                                  // Asserting of Estimator li is present on side menu
        .and('exist').and('contain','Estimator').click().wait(1000)
        
        //cy.get('[title="Estimator"] > .MuiListItemText-root > .MuiTypography-root').contains("Estimator").should('be.visible')                                // Asserting of Estimator li is present on side menu
        //.and('exist').and('contain','Estimator').click().wait(10000)        
        //cy.get('.css-budqf6').contains('Add color').should('be.visible')                                                                                      
        cy.get('.css-budqf6', { timeout: 50000 }).contains('Add section').should('be.visible')                                                                    // Asserting Add color btn is visible
        //cy.get('.jss23 > .MuiButtonBase-root').click()                                                                                                        // Tapping to menu icon to close sidebar
        cy.get('[data-tour="order.action.new"]').click().wait(1000)                                                                                             // Adding fresh order
        cy.get('.MuiDialogActions-root > :nth-child(2)').click()                                                                                                // Tapping to OK btn
        cy.get('.css-budqf6').contains('Add section').click({force: true}).wait(500)                                                                              // Tapping to Add color btn
        cy.get('.MuiBox-root > .MuiGrid-container > .MuiGrid-root > .MuiButtonBase-root').click().wait(500)                                                     // Tapping to Add a new product btn

        cy.get(':nth-child(1) > .MuiCardContent-root > .MuiTypography-h5').contains("Molded").should('be.visible')
        cy.get(':nth-child(1) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Doors").should('be.visible')
        cy.get(':nth-child(1) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Drawer Fronts").should('be.visible')
        cy.get(':nth-child(1) > .MuiCardContent-root > .MuiList-root > :nth-child(3) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Mullions Doors").should('be.visible')

        cy.get(':nth-child(3) > .MuiCardContent-root > .MuiTypography-h5').contains("Edged").should('be.visible')
        cy.get(':nth-child(3) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Doors (Edged)").should('be.visible')
        cy.get(':nth-child(3) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Mullions Doors (Edged)").should('be.visible')

        cy.get(':nth-child(5) > .MuiCardContent-root > .MuiTypography-h5').contains("Accessories").should('be.visible')
        cy.get(':nth-child(5) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Edge Banding").should('be.visible')
        cy.get(':nth-child(5) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Heat Deflectors and Protectors").should('be.visible')
        cy.get(':nth-child(5) > .MuiCardContent-root > .MuiList-root > :nth-child(3) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Moldings").should('be.visible')
        cy.get(':nth-child(5) > .MuiCardContent-root > .MuiList-root > :nth-child(4) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Preglued Edge Banding").should('be.visible')
        cy.get('.MuiList-root > :nth-child(5) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Tambour Roll-ups").should('be.visible')

        cy.get(':nth-child(2) > .MuiCardContent-root > .MuiTypography-h5').contains("5-pieces").should('be.visible')
        cy.get(':nth-child(2) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Doors (5 pieces)").should('be.visible')
        cy.get(':nth-child(2) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Drawer Fronts (5 pieces)").should('be.visible')
        cy.get(':nth-child(2) > .MuiCardContent-root > .MuiList-root > :nth-child(3) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Mullions Doors (5 pieces)").should('be.visible')

        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiTypography-h5').contains("Boards").should('be.visible')
        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Boards").should('be.visible')
        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Preglued Thermoplastic Sheets").should('be.visible')
        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(3) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Thermolam").should('be.visible')
        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(4) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Thermoplastic Sheets").should('be.visible')

        cy.get(':nth-child(3) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root').click().wait(500)                                  // Select Doors (Edged)
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(500)                                                                         // Tapping to Submit btn
        cy.get('.MuiAlert-message').contains('Please validate the form before submitting the order').should('be.visible')                                       // Assertion for validation message
        cy.get('.MuiAccordionSummary-root').click().wait(500)                                                                                                   // Tapping to Accordian 
        //cy.get('.jss23 > .MuiButtonBase-root').click().wait(500)
        cy.get('button svg path[d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"]').click({force: true})                                       // Getting side menu back buttton          
        
          
        //===================================================>>  // Getting elements for Local Testing  <<===============================================================================================
        
        //                                                        Submitting Order with Required values
        //                                                           >>>>> Adding form data <<<<<                

        /* 
        cy.contains('label', 'Your full name').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()                   // Order Name Validation of helper text
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');    
        cy.contains('label', 'Your email address').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()               // Eamil Validation of helper text
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Value is not a valid email address');
        cy.contains('label', 'Your PO').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()                          // PO Validation of helper text 
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');                                                                    

        cy.contains('label', 'Your full name').next().find('input').type('Automate (Edged) Doors Category')                                                     // Name
        cy.contains('label', 'Your email address').next().find('input').type('Automatedoorsedged#gmail.com')                                                    // Email
        cy.contains('label', 'Your email address').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()               // Eamil Validation of helper text
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Value is not a valid email address');
        cy.contains('label', 'Your email address').next().find('input').clear()                                                                                 // Clear the invalid input        
        cy.contains('label', 'Your email address').next().find('input').type('Automatedoorsedged@gmail.com')                                                    // Email with valid input                  
        cy.contains('label', 'Your PO').next().find('input').type('Doors 11')                                                                                   // Your PO

        //                                                      >>>>> Adding Doors (Edged) category table data  <<<<<        

        cy.contains('div', '1 Doors (Edged)').click()
        cy.get('td.MuiTableCell-root').eq(3).find('input').should('exist').should('have.attr', 'aria-invalid', 'true').closest('.MuiFormControl-root')          // Validation of helper text for invalid input
        .find('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');
        cy.get('td.MuiTableCell-root').eq(3).find('input').type('abcs', { force: true });                                                                       // invalid input width
        cy.get('td.MuiTableCell-root').eq(3).find('input').clear()                                                                                              // Clear input width    
        cy.get('td.MuiTableCell-root').eq(3).find('input').type('45', { force: true });                                                                         // Valid input width

        //cy.get('td.MuiTableCell-root').eq(4).find('input').should('exist').clear().should('have.attr', 'aria-invalid', 'true')                                // Validation of helper text for invalid input
        //.parent().find('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');
        cy.get('td.MuiTableCell-root').eq(4).find('input').type('abcs', { force: true });                                                                       // invalid input height
        cy.get('td.MuiTableCell-root').eq(4).find('input').clear()                                                                                              // Clear input height    
        cy.get('td.MuiTableCell-root').eq(4).find('input').type('582', { force: true });                                                                        // Valid input height
        cy.get('td.MuiTableCell-root').eq(7).find('.MuiSelect-select').click({ force: true });                                                                  // grain                
        cy.get('[data-value="77"]').click()                                                                                                                      // Edgeband        
        cy.get('td.MuiTableCell-root').eq(12).find('input').type('222', { force: true });                                                                       // Edgeband        
        cy.get('td.MuiTableCell-root').eq(13).find('input').type('222', { force: true });                                                                       // sb color        
        cy.get('.headerActions > .MuiButton-contained').click().wait(10000)                                                                                     // Tapping to Print btn
        cy.get('button[aria-label="close"]').should('exist').click().wait(10000)                                                                                // Closing print view                                    
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(500)                                                                         // Tapping to Submit btn
        
        
        //                                                        Submitting Order with both Required and optional values
        //                                                                    >>>>> Adding form data <<<<<                

        cy.get('.css-1ubxkj1 > :nth-child(2)').click().wait(1000)                                                                                               // Tap to create new order btn
        cy.get('[data-tour="order.action.new"]').click().wait(1000)                                                                                             // Adding fresh order
        cy.get('.MuiDialogActions-root > :nth-child(2)').click()                                                                                                // Tapping to OK btn
        cy.contains('label', 'Your PO').next().find('input').type('DoorsEdged Doors 11')                                                                        // Your PO
        cy.contains('label', 'Their PO').next().find('input').type('XYZ 1', { force: true })                                                                    // Their PO
        cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click({force: true}).wait(1000)                                                                 // Tapping to Date icon        
        cy.get('.MuiCalendarPicker-root').find('button[role="gridcell"]')                                                                                       // Locate date buttons inside the calendar
            .each(($el) => {
                if (!$el.prop('disabled')) {                                                                                                                    // Check if the date is enabled                
                cy.wrap($el).click().wait(500)                                                                                                                  // Click the first enabled date                
                return false                                                                                                                                    // Break the loop after selecting the date
                }
            });        
            cy.get('.css-x7mp9n').first().type('ABC 1', { force: true })                                                                                        // Note
            //cy.contains('label', 'Notes').first().parent().find('input').type('Your notes here 1');
            
            const filePath = 'images/sample-image.png';                                                                                                         // Define the file path relative to the cypress/fixtures directory            
            cy.get('input[type="file"]#estimator-image-input').attachFile(filePath)                                                                             // Upload the file using the input element
            .then(input => {                
            expect(input[0].files[0].name).to.equal('sample-image.png');                                                                                        // Verify that the file is uploaded
            });    
            cy.get(':nth-child(1) > .MuiFormControlLabel-root > .MuiTypography-root > .css-zfsz4h').click()                                                         // Tapping to inch/mm
        
        
        //                                                      >>>>> Adding Doors (Edged) category table data  <<<<<        
      
        cy.get('.css-budqf6').contains('Add section').click({force: true}).wait(1000)                                                                           // Tapping to Add color btn
        cy.contains('label', 'Section name').next().find('input').should('be.visible').type('Doors (Edged) Section');                                           // Section Name        
        //cy.contains('label', 'Notes').eq(1).parent().find('input').type('Automating Molded Category with Doors Section', { force: true });                    // Section Notes                  
        cy.get('.MuiBox-root > .MuiGrid-container > .MuiGrid-root > .MuiButtonBase-root').click().wait(500)                                                     // Tapping to Add a new product btn
        cy.get(':nth-child(3) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root').click().wait(500)                                  // Select Doors (Edged)
        //.click().wait(500)                   
        cy.get('table tbody tr.MuiTableRow-root', { timeout: 10000 }).should('have.length.greaterThan', 0).then(($rowsBefore) => {
        const initialRowCount = $rowsBefore.length;
        cy.wrap($rowsBefore[0]).within(() => {
        cy.get('td.MuiTableCell-root').each(($td) => {
            cy.wrap($td).invoke('text').then((tdValue) => {
            tdValue = tdValue.trim();

                if (tdValue === '1.') {
                    cy.log('Filling the first row with TD=1');              
                    cy.get('td.MuiTableCell-root').eq(3).find('input').type('abcs', { force: true });                                                           // invalid input width
                    cy.get('td.MuiTableCell-root').eq(3).find('input').clear()                                                                                  // Clear input width    
                    cy.get('td.MuiTableCell-root').eq(3).find('input').type('45', { force: true });                                                             // Valid input width
                    cy.get('td.MuiTableCell-root').eq(4).find('input').type('abcs', { force: true });                                                           // invalid input height
                    cy.get('td.MuiTableCell-root').eq(4).find('input').clear()                                                                                  // Clear input height    
                    cy.get('td.MuiTableCell-root').eq(4).find('input').type('58', { force: true });                                                             // Valid input height
                    cy.get('td.MuiTableCell-root').eq(5).find('.MuiSelect-select').click({ force: true });                                                      // thickness
                    cy.get('[data-value="0.75"]').click()                                                                                                       // thickness
                    cy.get('td.MuiTableCell-root').eq(6).find('.MuiSelect-select').click({ force: true });                                                      // grain                
                    cy.get('[data-value="H"]').click()                                                                                                          // grain        
                    cy.get('td.MuiTableCell-root').eq(7).find('.MuiSelect-select').click({ force: true });                                                      // Edgeband                
                    cy.get('[data-value="77"]').click()                                                                                                         // Edgeband         
                    cy.get('td.MuiTableCell-root').eq(8).find('.MuiSelect-select').click({ force: true });                                                      // Type
                    cy.get('[data-value="S"] > .css-sc6tei').click()                                                                                            // Type
                    cy.get('td.MuiTableCell-root').eq(9).find('.MuiSelect-select').click({ force: true });                                                      // qty
                    cy.get('[data-value="3"]').click()                                                                                                          // qty
                    cy.get('td.MuiTableCell-root').eq(10).find('.MuiSelect-select').click({ force: true });                                                     // postiton
                    cy.get('[data-value="B"] > .css-sc6tei').click()                                                                                            // postiton
                    cy.get('.MuiFormControl-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click({ force: true })                                      // Dowels 
                    cy.get('td.MuiTableCell-root').eq(12).find('input').type('222', { force: true });                                                           // color                    
                    cy.get('td.MuiTableCell-root').eq(13).find('input').type('555', { force: true });                                                           // Sb Color
                }
            });
        });
        });
        cy.get('[colspan="16"] > .MuiButtonBase-root').click().wait(2000)                                                                                       // Adding second item
        cy.get('table tbody tr.MuiTableRow-root', { timeout: 10000 }).then(($rowsAfter) => {
        const newRow = $rowsAfter[$rowsAfter.length - 2]; // Get the last (newly added) row
        cy.wrap(newRow).within(() => {
        cy.get('td.MuiTableCell-root').each(($td) => {
        cy.wrap($td).invoke('text').then((tdValue) => {
        tdValue = tdValue.trim();
                if (tdValue === '2.') {
                    cy.log('Filling the new row with TD=2');                   
                    cy.get('td.MuiTableCell-root').eq(2).find('input').type('45', { force: true });                                                             // Qty                                
                    cy.get('td.MuiTableCell-root').eq(3).find('input').type('58', { force: true });                                                             // width
                    cy.get('td.MuiTableCell-root').eq(4).find('input').type('58', { force: true });                                                             // height
                    cy.get('td.MuiTableCell-root').eq(6).find('div.MuiSelect-select').should('have.text', 'H')                                                  // Assertioan of grain input
                    cy.get('td.MuiTableCell-root').eq(7).find('div.MuiSelect-select').should('have.text', '77')                                                 // Assertioan of Edgeband
                    cy.get('td.MuiTableCell-root').eq(8).find('div.MuiSelect-select').should('have.text', 'S')                                                  // Assertion of Type        
                    cy.get('td.MuiTableCell-root').eq(9).find('div.MuiSelect-select').should('have.text', '3')                                                  // Assertion  of qty        
                    cy.get('td.MuiTableCell-root').eq(10).find('div.MuiSelect-select').should('have.text', 'B')                                                 // Assertion of postiton            
                    cy.get('td.MuiTableCell-root').eq(11).find('input[type="checkbox"]').should('be.checked')                                                   // Assertion of Dowels                     
                    cy.get('td.MuiTableCell-root').eq(12).find('input.MuiAutocomplete-input').should('have.value', '222 - Mango')                               // Assertion of color                                             
                    cy.get('td.MuiTableCell-root').eq(13).find('input.MuiAutocomplete-input').should('have.value', '555 - White')                               // Assertion of sb color                                             
                }        
            });
        });
    });
    })
    })
    cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(5000)                                                                            // Tapping to Submit btn
    cy.get('.css-1ubxkj1 > :nth-child(1)').click().wait(10000)                                                                                                  // Print order    
    cy.get('button[aria-label="close"]').should('exist').click().wait(10000)                                                                                    // Closing print view                                    
      */
   
//===========================================================>>  Getting elements for Git CI/CD Pipeline  <<===============================================================================================
        
        //                                                                  Submitting Order with Required values
        //                                                                      >>>>> Adding form data <<<<<                
        
        cy.contains('label', 'Your full name').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()                   // Order Name Validation of helper text
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');    
        cy.contains('label', 'Your email address').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()               // Eamil Validation of helper text
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Value is not a valid email address');
        cy.contains('label', 'Your PO').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()                          // PO Validation of helper text 
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');                                                                    

        cy.contains('label', 'Your full name').next().find('input').type('Automate (Edged) Doors Category')                                                     // Name
        cy.contains('label', 'Your email address').next().find('input').type('Automatedoorsedged#gmail.com')                                                    // Email
        cy.contains('label', 'Your email address').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()               // Eamil Validation of helper text
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Value is not a valid email address');
        cy.contains('label', 'Your email address').next().find('input').clear()                                                                                 // Clear the invalid input        
        cy.contains('label', 'Your email address').next().find('input').type('Automatedoorsedged@gmail.com')                                                    // Email with valid input                  
        cy.contains('label', 'Your PO').next().find('input').type('Doors 11')                                                                                   // Your PO
        
        //                                                      >>>>> Adding Doors category table data with Required values <<<<<        

        cy.contains('div', '1 Doors (Edged)').click()
        cy.get('td.MuiTableCell-root').eq(3).find('input').should('exist').should('have.attr', 'aria-invalid', 'true').closest('.MuiFormControl-root')          // Validation of helper text for invalid input
        .find('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');
        cy.get('td.MuiTableCell-root').eq(3).find('input').type('abcs', { force: true });                                                                       // invalid input width
        cy.get('td.MuiTableCell-root').eq(3).find('input').clear()                                                                                              // Clear input width    
        cy.get('td.MuiTableCell-root').eq(3).find('input').type('45', { force: true });                                                                         // Valid input width

        //cy.get('td.MuiTableCell-root').eq(4).find('input').should('exist').clear().should('have.attr', 'aria-invalid', 'true')                                // Validation of helper text for invalid input
        //.parent().find('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');
        cy.get('td.MuiTableCell-root').eq(4).find('input').type('abcs', { force: true });                                                                       // invalid input height
        cy.get('td.MuiTableCell-root').eq(4).find('input').clear()                                                                                              // Clear input height    
        cy.get('td.MuiTableCell-root').eq(4).find('input').type('582', { force: true });                                                                        // Valid input height
        cy.get('td.MuiTableCell-root').eq(7).find('.MuiSelect-select').click({ force: true });                                                                  // grain                
        cy.get('[data-value="77"]').click()                                                                                                                      // Edgeband        
        cy.get('td.MuiTableCell-root').eq(12).find('input').type('222', { force: true });                                                                       // Edgeband        
        cy.get('td.MuiTableCell-root').eq(13).find('input').type('222', { force: true });                                                                       // sb color        
        cy.get('.headerActions > .MuiButton-contained').click().wait(10000)                                                                                     // Tapping to Print btn
        cy.get('button[aria-label="close"]').should('exist').click().wait(10000)                                                                                // Closing print view                                    
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(500)                                                                         // Tapping to Submit btn
        
        //--------------------------------------------------------------------------------------------------------------------------------------------------------------------        
        //                                                        Submitting Order with both Required and optional values
        //                                                                    >>>>> Adding form data <<<<<    
        // -------------------------------------------------------------------------------------------------------------------------------------------------------------------

        cy.get('.css-1ubxkj1 > :nth-child(2)').click().wait(1000)                                                                                               // Tap to create new order btn
        cy.get('[data-tour="order.action.new"]').click().wait(1000)                                                                                             // Adding fresh order
        cy.get('.MuiDialogActions-root > :nth-child(2)').click()                                                                                                // Tapping to OK btn
        cy.contains('label', 'Your PO').next().find('input').type('DoorsEdged Doors 11')                                                                        // Your PO
        cy.contains('label', 'Their PO').next().find('input').type('XYZ 1', { force: true })                                                                    // Their PO
        cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click({force: true}).wait(1000)                                                                 // Tapping to Date icon        
        cy.get('.MuiCalendarPicker-root').find('button[role="gridcell"]')                                                                                       // Locate date buttons inside the calendar
            .each(($el) => {
                if (!$el.prop('disabled')) {                                                                                                                    // Check if the date is enabled                
                cy.wrap($el).click().wait(500)                                                                                                                  // Click the first enabled date                
                return false                                                                                                                                    // Break the loop after selecting the date
                }
            });        
            cy.get('.css-x7mp9n').first().type('ABC 1', { force: true })                                                                                        // Note
            //cy.contains('label', 'Notes').first().parent().find('input').type('Your notes here 1');
            
            const filePath = 'images/sample-image.png';                                                                                                         // Define the file path relative to the cypress/fixtures directory            
            cy.get('input[type="file"]#estimator-image-input').attachFile(filePath)                                                                             // Upload the file using the input element
            .then(input => {                
            expect(input[0].files[0].name).to.equal('sample-image.png');                                                                                        // Verify that the file is uploaded
            });    
        cy.get(':nth-child(1) > .MuiFormControlLabel-root > .MuiTypography-root > .css-zfsz4h').click()                                                         // Tapping to inch/mm
        
            //                                                      >>>>> Adding Doors category table data  <<<<<        

        cy.get('.css-budqf6').contains('Add section').click({force: true}).wait(1000)                                                                           // Tapping to Add color btn
        cy.contains('label', 'Section name').next().find('input').should('be.visible').type('Doors (Edged) Section');                                           // Section Name        
        //cy.contains('label', 'Notes').eq(1).parent().find('input').type('Automating Molded Category with Doors Section', { force: true });                    // Section Notes                  
        cy.get('.MuiBox-root > .MuiGrid-container > .MuiGrid-root > .MuiButtonBase-root').click().wait(500)                                                     // Tapping to Add a new product btn
        cy.get(':nth-child(3) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root').click().wait(500)                                  // Select Doors (Edged)
        //.click().wait(500)                   
        cy.get('table tbody tr.MuiTableRow-root', { timeout: 10000 }).should('have.length.greaterThan', 0).then(($rowsBefore) => {
        const initialRowCount = $rowsBefore.length;
        cy.wrap($rowsBefore[0]).within(() => {
        cy.get('td.MuiTableCell-root').each(($td) => {
            cy.wrap($td).invoke('text').then((tdValue) => {
            tdValue = tdValue.trim();

                if (tdValue === '1.') {
                    cy.log('Filling the first row with TD=1');              
                    cy.get('td.MuiTableCell-root').eq(3).find('input').type('abcs', { force: true });                                                           // invalid input width
                    cy.get('td.MuiTableCell-root').eq(3).find('input').clear()                                                                                  // Clear input width    
                    cy.get('td.MuiTableCell-root').eq(3).find('input').type('45', { force: true });                                                             // Valid input width
                    cy.get('td.MuiTableCell-root').eq(4).find('input').type('abcs', { force: true });                                                           // invalid input height
                    cy.get('td.MuiTableCell-root').eq(4).find('input').clear()                                                                                  // Clear input height    
                    cy.get('td.MuiTableCell-root').eq(4).find('input').type('58', { force: true });                                                             // Valid input height
                    cy.get('td.MuiTableCell-root').eq(5).find('.MuiSelect-select').click({ force: true });                                                      // thickness
                    cy.get('[data-value="0.75"]').click()                                                                                                       // thickness
                    cy.get('td.MuiTableCell-root').eq(6).find('.MuiSelect-select').click({ force: true });                                                      // grain                
                    cy.get('[data-value="H"]').click()                                                                                                          // grain        
                    cy.get('td.MuiTableCell-root').eq(7).find('.MuiSelect-select').click({ force: true });                                                      // Edgeband                
                    cy.get('[data-value="77"]').click()                                                                                                         // Edgeband         
                    cy.get('td.MuiTableCell-root').eq(8).find('.MuiSelect-select').click({ force: true });                                                      // Type
                    cy.get('[data-value="S"] > .css-sc6tei').click()                                                                                            // Type
                    cy.get('td.MuiTableCell-root').eq(9).find('.MuiSelect-select').click({ force: true });                                                      // qty
                    cy.get('[data-value="3"]').click()                                                                                                          // qty
                    cy.get('td.MuiTableCell-root').eq(10).find('.MuiSelect-select').click({ force: true });                                                     // postiton
                    cy.get('[data-value="B"] > .css-sc6tei').click()                                                                                            // postiton
                    cy.get('.MuiFormControl-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click({ force: true })                                      // Dowels 
                    cy.get('td.MuiTableCell-root').eq(12).find('input').type('222', { force: true });                                                           // color                    
                    cy.get('td.MuiTableCell-root').eq(13).find('input').type('555', { force: true });                                                           // Sb Color
                }
            });
        });
        });
        cy.get('[colspan="16"] > .MuiButtonBase-root').click().wait(2000)                                                                                       // Adding second item
        cy.get('table tbody tr.MuiTableRow-root', { timeout: 10000 }).then(($rowsAfter) => {
        const newRow = $rowsAfter[$rowsAfter.length - 2]; // Get the last (newly added) row
        cy.wrap(newRow).within(() => {
        cy.get('td.MuiTableCell-root').each(($td) => {
        cy.wrap($td).invoke('text').then((tdValue) => {
        tdValue = tdValue.trim();
                if (tdValue === '2.') {
                    cy.log('Filling the new row with TD=2');                   
                    cy.get('td.MuiTableCell-root').eq(2).find('input').type('45', { force: true });                                                             // Qty                                
                    cy.get('td.MuiTableCell-root').eq(3).find('input').type('58', { force: true });                                                             // width
                    cy.get('td.MuiTableCell-root').eq(4).find('input').type('58', { force: true });                                                             // height
                    cy.get('td.MuiTableCell-root').eq(6).find('div.MuiSelect-select').should('have.text', 'H')                                                  // Assertioan of grain input
                    cy.get('td.MuiTableCell-root').eq(7).find('div.MuiSelect-select').should('have.text', '77')                                                 // Assertioan of Edgeband
                    cy.get('td.MuiTableCell-root').eq(8).find('div.MuiSelect-select').should('have.text', 'S')                                                  // Assertion of Type        
                    cy.get('td.MuiTableCell-root').eq(9).find('div.MuiSelect-select').should('have.text', '3')                                                  // Assertion  of qty        
                    cy.get('td.MuiTableCell-root').eq(10).find('div.MuiSelect-select').should('have.text', 'B')                                                 // Assertion of postiton            
                    cy.get('td.MuiTableCell-root').eq(11).find('input[type="checkbox"]').should('be.checked')                                                   // Assertion of Dowels                     
                    cy.get('td.MuiTableCell-root').eq(12).find('input.MuiAutocomplete-input').should('have.value', '222 - Mango')                               // Assertion of color                                             
                    cy.get('td.MuiTableCell-root').eq(13).find('input.MuiAutocomplete-input').should('have.value', '555 - White')                               // Assertion of sb color                                             
                }        
            });
        });
    });
    })
    })
    cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(5000)                                                                            // Tapping to Submit btn
    //cy.contains('button', 'Print Order', { timeout: 30000 }).click().wait(1000)                                                                                 // Performs a click action
    //cy.get('button[aria-label="close"]').should('exist').click().wait(10000)                                                                                    // Closing print view
    
        //=======================================================================================================================================================================================        
    })

    it("Verify Order created/submitted Successfully - For Mullions Doors(Edged) Category -", function()  {

        cy.viewport(1440, 900)
        cy.visit("https://dev.thermoform.net/") 
        
        cy.wait(5000)
        cy.get('.MuiTypography-root').contains("Identification").should('be.visible').and('exist')                                                              // Asssertion of Identification heading is present 
        cy.get('.MuiTypography-body2').contains("Forgot Password?").should('be.visible').and('exist')                                                           // Asssertion of Forgot Password? link is present   
        cy.get('[type="submit"]').contains("Next").should('be.visible').and('exist').and('not.be.enabled')                                                      // Asssertion of Next btn is disabled        
        cy.get('input[name="username"]').type("masterfortesting")                                                                                               // Input valid username                        
        cy.get('[type="submit"]').contains("Next").should('be.visible').and('exist').and('contain','Next').click().wait(1000)                                   // Click to Next button         
        cy.get('.MuiTypography-h5').contains("Email Authentication").should('be.visible').and('exist').and('contain','Email').click().wait(1000)                // Asssertion of "Email Authentication" heading is present
        cy.get('input[name="email"]').should('be.visible').and('exist')                                                                                         // Asssertion of email box is present                       
        cy.get('[type="submit"]').contains("Send Authentication Link").should('be.visible').and('exist').and('contain','Authentication')                        // Asssertion of Send Authentication Link button is present
        cy.get('[type="text"]').contains("Password Authentication").should('be.visible').and('exist').and('contain','Password').click().wait(1000)              // Asssertion of "Password Authentication" link is present                       
        cy.get('.MuiTypography-h5').contains("Password Authentication").should('be.visible').and('exist').and('contain','Password')                             // Asssertion of Password Authentication heading is present
        cy.get('.MuiTypography-body2').contains("Forgot Password?").should('be.visible').and('exist')                                                           // Asssertion of Forgot Password? link is present   
        cy.get('[type="text"]').contains("Email Authentication").should('be.visible').and('exist').and('contain','Email')                                       // Asssertion of Email Authentication Link is present                
        cy.get('input[name="password"]').type("[HPnotebook1@")                                                                                                  // Input valid password        
        cy.get('[type="submit"]').contains("Submit").should('be.visible').and('exist').and('contain','Submit').click().wait(1000)                               // Click to Submit button for portal login  
        //cy.get('.css-imv4ws > .MuiAvatar-root').click().wait(1000)                                                                                            // Asserting login button present with its avaialble options	 
        //cy.get('.css-1stpmc > :nth-child(1) > .MuiListItemText-root > .MuiTypography-root').contains("Français (Canada)").should('be.visible')                // Asserting Français (Canada) text is present and fr language is pre selected 
        //.and('exist').and('contain','Français').click().wait(1000)                                                         
        //cy.get('.MuiListItemText-primary').contains("English (Canada)").should('be.visible').and('exist').and('contain','English').click().wait(2000)         // Changing portal language to English
        //cy.get('body').click().wait(2000)
        cy.get('.MuiToolbar-root > .MuiTypography-root', { timeout: 100000 }).contains("Home").should('be.visible').and('exist').and('contain','Home')          // Asserting of Home text is present on home page
        // Cypress will wait up to 25 seconds for the element, but proceed immediately when the element appears
        cy.get('.MuiTypography-h4').contains("Shortcuts").should('be.visible').and('exist').and('contain','Shortcuts')                                          // Asserting of Shortcuts text is present on home page        
        cy.get('.MuiIconButton-colorInherit').click({force: true}).wait(500)                                                                                    // Click to menu icon        
        cy.get(':nth-child(7) > .MuiButtonBase-root').contains("Customer Center").and('exist').and('contain','Customer').click().wait(2000)                     // Asserting of Customer Center li is present on side menu        
        //cy.get('#app > main > div > div > div > div.jss61 > ul:nth-child(5) > div').contains("Customer Center")                                               // Asserting of Customer Center li is present on side menu
        //.and('exist').and('contain','Customer').click().wait(1000)
        cy.get('[title="Estimator"] > .MuiListItemText-root > .MuiTypography-root').contains("Estimator").should('be.visible')                                  // Asserting of Estimator li is present on side menu
        .and('exist').and('contain','Estimator').click().wait(1000)
        
        //cy.get('[title="Estimator"] > .MuiListItemText-root > .MuiTypography-root').contains("Estimator").should('be.visible')                                // Asserting of Estimator li is present on side menu
        //.and('exist').and('contain','Estimator').click().wait(10000)        
        //cy.get('.css-budqf6').contains('Add color').should('be.visible')                                                                                      
        //cy.get('.css-budqf6', { timeout: 25000 }).contains('Add Section').should('be.visible')                                                                // Asserting Add Section btn is visible
        cy.get('.MuiBox-root > .MuiButtonBase-root' , { timeout: 50000 }).contains('Add section').should('be.visible')                                          // Asserting Add Section btn is visible
        cy.get('[data-tour="order.action.new"]').click().wait(1000)                                                                                             // Adding fresh order
        cy.get('.MuiDialogActions-root > :nth-child(2)').click()                                                                                                // Tapping to OK btn
        cy.get('.css-budqf6').contains('Add section').click({force: true}).wait(500)                                                                              // Tapping to Add color btn
        cy.get('.MuiBox-root > .MuiGrid-container > .MuiGrid-root > .MuiButtonBase-root').click().wait(500)                                                     // Tapping to Add a new product btn

        cy.get(':nth-child(1) > .MuiCardContent-root > .MuiTypography-h5').contains("Molded").should('be.visible')
        cy.get(':nth-child(1) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Doors").should('be.visible')
        cy.get(':nth-child(1) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Drawer Fronts").should('be.visible')
        cy.get(':nth-child(1) > .MuiCardContent-root > .MuiList-root > :nth-child(3) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Mullions Doors").should('be.visible')

        cy.get(':nth-child(3) > .MuiCardContent-root > .MuiTypography-h5').contains("Edged").should('be.visible')
        cy.get(':nth-child(3) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Doors (Edged)").should('be.visible')
        cy.get(':nth-child(3) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Mullions Doors (Edged)").should('be.visible')

        cy.get(':nth-child(5) > .MuiCardContent-root > .MuiTypography-h5').contains("Accessories").should('be.visible')
        cy.get(':nth-child(5) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Edge Banding").should('be.visible')
        cy.get(':nth-child(5) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Heat Deflectors and Protectors").should('be.visible')
        cy.get(':nth-child(5) > .MuiCardContent-root > .MuiList-root > :nth-child(3) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Moldings").should('be.visible')
        cy.get(':nth-child(5) > .MuiCardContent-root > .MuiList-root > :nth-child(4) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Preglued Edge Banding").should('be.visible')
        cy.get('.MuiList-root > :nth-child(5) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Tambour Roll-ups").should('be.visible')

        cy.get(':nth-child(2) > .MuiCardContent-root > .MuiTypography-h5').contains("5-pieces").should('be.visible')
        cy.get(':nth-child(2) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Doors (5 pieces)").should('be.visible')
        cy.get(':nth-child(2) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Drawer Fronts (5 pieces)").should('be.visible')
        cy.get(':nth-child(2) > .MuiCardContent-root > .MuiList-root > :nth-child(3) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Mullions Doors (5 pieces)").should('be.visible')

        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiTypography-h5').contains("Boards").should('be.visible')
        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Boards").should('be.visible')
        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Preglued Thermoplastic Sheets").should('be.visible')
        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(3) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Thermolam").should('be.visible')
        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(4) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Thermoplastic Sheets").should('be.visible')

        cy.get(':nth-child(3) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root').click().wait(500)                                  // Select Mullions Doors (Edged) 
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(500)                                                                         // Tapping to Submit btn
        cy.get('.MuiAlert-message').contains('Please validate the form before submitting the order').should('be.visible')                                       // Assertion for validation message
        cy.get('.MuiAccordionSummary-root').click().wait(500)                                                                                                   // Tapping to Accordian 
        //cy.get('.jss23 > .MuiButtonBase-root').click().wait(500)
        cy.get('button svg path[d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"]').click({force: true})                                       // Getting side menu back buttton          
        
          
        //===================================================>>  // Getting elements for Local Testing  <<===============================================================================================
        
        //                                                        Submitting Order with Required values
        //                                                           >>>>> Adding form data <<<<<                
        /*
        cy.contains('label', 'Your full name').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()                   // Order Name Validation of helper text
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');    
        cy.contains('label', 'Your email address').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()               // Eamil Validation of helper text
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Value is not a valid email address');
        cy.contains('label', 'Your PO').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()                          // PO Validation of helper text 
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');                                                                    

        cy.contains('label', 'Your full name').next().find('input').type('Mullions Doors (Edged)')                                                              // Name
        cy.contains('label', 'Your email address').next().find('input').type('mullionsdoorsedged#gmail.com')                                                    // Email
        cy.contains('label', 'Your email address').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()               // Eamil Validation of helper text
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Value is not a valid email address');
        cy.contains('label', 'Your email address').next().find('input').clear()                                                                                 // Clear the invalid input        
        cy.contains('label', 'Your email address').next().find('input').type('mullionsdoorsedged@gmail.com')                                                    // Email with valid input                  
        cy.contains('label', 'Your PO').next().find('input').type('Doors 11')                                                                                   // Your PO

        //                                                      >>>>> Adding Mullions Doors (Edged) category table data  <<<<<        

        cy.contains('div', '1 Mullions Doors (Edged)').click()
        cy.get('td.MuiTableCell-root').eq(3).find('input').should('exist').should('have.attr', 'aria-invalid', 'true').closest('.MuiFormControl-root')          // Validation of helper text for invalid input
        .find('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');
        cy.get('td.MuiTableCell-root').eq(3).find('input').type('abcs', { force: true });                                                                       // invalid input width
        cy.get('td.MuiTableCell-root').eq(3).find('input').clear()                                                                                              // Clear input width    
        cy.get('td.MuiTableCell-root').eq(3).find('input').type('45', { force: true });                                                                         // Valid input width

        //cy.get('td.MuiTableCell-root').eq(4).find('input').should('exist').clear().should('have.attr', 'aria-invalid', 'true')                                // Validation of helper text for invalid input
        //.parent().find('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');
        cy.get('td.MuiTableCell-root').eq(4).find('input').type('abcs', { force: true });                                                                       // invalid input height
        cy.get('td.MuiTableCell-root').eq(4).find('input').clear()                                                                                              // Clear input height    
        cy.get('td.MuiTableCell-root').eq(4).find('input').type('582', { force: true });                                                                        // Valid input height
        cy.get('td.MuiTableCell-root').eq(7).find('.MuiSelect-select').click({ force: true });                                                                  // Edgeband                
        cy.get('[data-value="96"]').click()                                                                                                                     // Edgeband  
        cy.get('td.MuiTableCell-root').eq(8).find('input').type('4', { force: true });                                                                          // Openings        
        cy.get('td.MuiTableCell-root').eq(13).find('input').type('5310', { force: true });                                                                      // color        
        cy.get('td.MuiTableCell-root').eq(14).find('input').type('5310', { force: true });                                                                      // sb color        
        cy.get('.headerActions > .MuiButton-contained').click().wait(10000)                                                                                     // Tapping to Print btn
        cy.get('button[aria-label="close"]').should('exist').click().wait(10000)                                                                                // Closing print view                                    
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(500)                                                                         // Tapping to Submit btn

        //                                                        Submitting Order with both Required and optional values
        //                                                                    >>>>> Adding form data <<<<<                
        
        cy.get('.css-1ubxkj1 > :nth-child(2)').click().wait(1000)                                                                                               // Tap to create new order btn
        cy.get('[data-tour="order.action.new"]').click().wait(1000)                                                                                             // Adding fresh order
        cy.get('.MuiDialogActions-root > :nth-child(2)').click()                                                                                                // Tapping to OK btn
        cy.contains('label', 'Your PO').next().find('input').type('MullionsDoors (Edged) Doors 11')                                                             // Your PO
        cy.contains('label', 'Their PO').next().find('input').type('XYZ 1', { force: true })                                                                    // Their PO
        cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click({force: true}).wait(1000)                                                                 // Tapping to Date icon        
        cy.get('.MuiCalendarPicker-root').find('button[role="gridcell"]')                                                                                       // Locate date buttons inside the calendar
            .each(($el) => {
                if (!$el.prop('disabled')) {                                                                                                                    // Check if the date is enabled                
                cy.wrap($el).click().wait(500)                                                                                                                  // Click the first enabled date                
                return false                                                                                                                                    // Break the loop after selecting the date
                }
            });        
            cy.get('.css-x7mp9n').first().type('ABC 1', { force: true })                                                                                        // Note
            //cy.contains('label', 'Notes').first().parent().find('input').type('Your notes here 1');
            
            const filePath = 'images/sample-image.png';                                                                                                         // Define the file path relative to the cypress/fixtures directory            
            cy.get('input[type="file"]#estimator-image-input').attachFile(filePath)                                                                             // Upload the file using the input element
            .then(input => {                
            expect(input[0].files[0].name).to.equal('sample-image.png');                                                                                        // Verify that the file is uploaded
            });    
        cy.get(':nth-child(1) > .MuiFormControlLabel-root > .MuiTypography-root > .css-zfsz4h').click()                                                         // Tapping to inch/mm

        //                                                      >>>>> Adding Mullions Doors (Edged) category table data  <<<<<        

        cy.get('.css-budqf6').contains('Add section').click({force: true}).wait(1000)                                                                           // Tapping to Add color btn
        cy.contains('label', 'Section name').next().find('input').should('be.visible').type('Mullions Doors (Edged)');                                          // Section Name        
        //cy.contains('label', 'Notes').eq(1).parent().find('input').type('Automating Molded Category with Doors Section', { force: true });                    // Section Notes                  
        cy.get('.MuiBox-root > .MuiGrid-container > .MuiGrid-root > .MuiButtonBase-root').click().wait(500)                                                     // Tapping to Add a new product btn
        cy.get(':nth-child(3) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root').click({force: true})                               // Select Mullions Doors (Edged)                 
        cy.wait(2000)                   
        cy.get('table tbody tr.MuiTableRow-root', { timeout: 10000 }).should('have.length.greaterThan', 0).then(($rowsBefore) => {
        const initialRowCount = $rowsBefore.length;
        cy.wrap($rowsBefore[0]).within(() => {
        cy.get('td.MuiTableCell-root').each(($td) => {
            cy.wrap($td).invoke('text').then((tdValue) => {
            tdValue = tdValue.trim();

                if (tdValue === '1.') {
                    cy.log('Filling the first row with TD=1');              
                    cy.get('td.MuiTableCell-root').eq(3).find('input').type('abcs', { force: true });                                                           // invalid input width
                    cy.get('td.MuiTableCell-root').eq(3).find('input').clear()                                                                                  // Clear input width    
                    cy.get('td.MuiTableCell-root').eq(3).find('input').type('45', { force: true });                                                             // Valid input width
                    cy.get('td.MuiTableCell-root').eq(4).find('input').type('abcs', { force: true });                                                           // invalid input height
                    cy.get('td.MuiTableCell-root').eq(4).find('input').clear()                                                                                  // Clear input height    
                    cy.get('td.MuiTableCell-root').eq(4).find('input').type('58', { force: true });                                                             // Valid input height
                    cy.get('td.MuiTableCell-root').eq(5).find('.MuiSelect-select').click({ force: true });                                                      // thickness
                    cy.get('[data-value="0.75"]').click()                                                                                                       // thickness
                    cy.get('td.MuiTableCell-root').eq(6).find('.MuiSelect-select').click({ force: true });                                                      // grain                
                    cy.get('[data-value="V"]').click()                                                                                                          // grain        
                    cy.get('td.MuiTableCell-root').eq(7).find('.MuiSelect-select').click({ force: true });                                                      // Edgeband                
                    cy.get('[data-value="96"]').click()                                                                                                         // Edgeband 
                    cy.get('td.MuiTableCell-root').eq(8).find('input').type('4', { force: true });                                                              // Openings        
                    cy.get('td.MuiTableCell-root').eq(9).find('.MuiSelect-select').click({ force: true });                                                      // Type
                    cy.get('[data-value="E"] > .css-sc6tei').click()                                                                                            // Type
                    cy.get('td.MuiTableCell-root').eq(10).find('.MuiSelect-select').click({ force: true });                                                     // qty
                    cy.get('[data-value="3"]').click()                                                                                                          // qty
                    cy.get('td.MuiTableCell-root').eq(11).find('.MuiSelect-select').click({ force: true });                                                     // postiton
                    cy.get('[data-value="B"] > .css-sc6tei').click()                                                                                            // postiton
                    cy.get('.MuiFormControl-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click({ force: true })                                      // Dowels 
                    cy.get('td.MuiTableCell-root').eq(13).find('input').type('5306', { force: true });                                                          // color                    
                   // cy.get('td.MuiTableCell-root').eq(14).find('input').type('555', { force: true });                                                           // Sb Color
                }
            });
        });
        });
        cy.get('[colspan="17"] > .MuiButtonBase-root').click().wait(2000)                                                                                       // Adding second item
        cy.get('table tbody tr.MuiTableRow-root', { timeout: 10000 }).then(($rowsAfter) => {
        const newRow = $rowsAfter[$rowsAfter.length - 1]; // Get the last (newly added) row
        cy.wrap(newRow).within(() => {
        cy.get('td.MuiTableCell-root').each(($td) => {
        cy.wrap($td).invoke('text').then((tdValue) => {
        tdValue = tdValue.trim();
                if (tdValue === '2.') {
                    cy.log('Filling the new row with TD=2');                   
                    cy.get('td.MuiTableCell-root').eq(2).find('input').type('45', { force: true });                                                             // Qty                                
                    cy.get('td.MuiTableCell-root').eq(3).find('input').type('58', { force: true });                                                             // width
                    cy.get('td.MuiTableCell-root').eq(4).find('input').type('58', { force: true });                                                             // height
                    cy.get('td.MuiTableCell-root').eq(6).find('div.MuiSelect-select').should('have.text', 'V')                                                  // Assertioan of grain input
                    cy.get('td.MuiTableCell-root').eq(7).find('div.MuiSelect-select').should('have.text', '96')                                                 // Assertioan of Edgeband
                    cy.get('td.MuiTableCell-root').eq(8).find('.MuiInputBase-input').parents('.MuiInputBase-root').find('input').should('have.value', '4')   // Assertioan of Openings
                    cy.get('td.MuiTableCell-root').eq(9).find('div.MuiSelect-select').should('have.text', 'E')                                                  // Assertion of Type        
                    cy.get('td.MuiTableCell-root').eq(10).find('div.MuiSelect-select').should('have.text', '3')                                                 // Assertion  of qty        
                    cy.get('td.MuiTableCell-root').eq(11).find('div.MuiSelect-select').should('have.text', 'B')                                                 // Assertion of postiton            
                    cy.get('td.MuiTableCell-root').eq(12).find('input[type="checkbox"]').should('be.checked')                                                   // Assertion of Dowels                     
                    cy.get('td.MuiTableCell-root').eq(13).find('input.MuiAutocomplete-input').should('have.value', '5306 - Black 2D')                           // Assertion of color                                             
                    cy.get('td.MuiTableCell-root').eq(14).find('input.MuiAutocomplete-input').should('have.value', '5306 - Black 2D')                           // Assertion of sb color                                             
                }        
            });
        });
    });
    })
    })
    cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(5000)                                                                            // Tapping to Submit btn
    cy.get('.css-1ubxkj1 > :nth-child(1)').click().wait(10000)                                                                                                  // Print order    
    cy.get('button[aria-label="close"]').should('exist').click().wait(10000)                                                                                    // Closing print view    
    */
        
//===========================================================>>  Getting elements for Git CI/CD Pipeline  <<===============================================================================================
         
        //                                                                  Submitting Order with Required values
        //                                                                      >>>>> Adding form data <<<<<                
        
        cy.contains('label', 'Your full name').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()                   // Order Name Validation of helper text
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');    
        cy.contains('label', 'Your email address').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()               // Eamil Validation of helper text
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Value is not a valid email address');
        cy.contains('label', 'Your PO').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()                          // PO Validation of helper text 
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');                                                                    

        cy.contains('label', 'Your full name').next().find('input').type('Mullions Doors (Edged)')                                                              // Name
        cy.contains('label', 'Your email address').next().find('input').type('mullionsdoorsedged#gmail.com')                                                    // Email
        cy.contains('label', 'Your email address').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()               // Eamil Validation of helper text
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Value is not a valid email address');
        cy.contains('label', 'Your email address').next().find('input').clear()                                                                                 // Clear the invalid input        
        cy.contains('label', 'Your email address').next().find('input').type('mullionsdoorsedged@gmail.com')                                                    // Email with valid input                  
        cy.contains('label', 'Your PO').next().find('input').type('Doors 11')                                                                                   // Your PO

        //                                                      >>>>> Adding Mullions Doors category table data with Required values <<<<<        
        
        cy.contains('div', '1 Mullions Doors (Edged)').click()
        cy.get('td.MuiTableCell-root').eq(3).find('input').should('exist').should('have.attr', 'aria-invalid', 'true').closest('.MuiFormControl-root')          // Validation of helper text for invalid input
        .find('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');
        cy.get('td.MuiTableCell-root').eq(3).find('input').type('abcs', { force: true });                                                                       // invalid input width
        cy.get('td.MuiTableCell-root').eq(3).find('input').clear()                                                                                              // Clear input width    
        cy.get('td.MuiTableCell-root').eq(3).find('input').type('45', { force: true });                                                                         // Valid input width

        //cy.get('td.MuiTableCell-root').eq(4).find('input').should('exist').clear().should('have.attr', 'aria-invalid', 'true')                                // Validation of helper text for invalid input
        //.parent().find('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');
        cy.get('td.MuiTableCell-root').eq(4).find('input').type('abcs', { force: true });                                                                       // invalid input height
        cy.get('td.MuiTableCell-root').eq(4).find('input').clear()                                                                                              // Clear input height    
        cy.get('td.MuiTableCell-root').eq(4).find('input').type('582', { force: true });                                                                        // Valid input height
        cy.get('td.MuiTableCell-root').eq(7).find('.MuiSelect-select').click({ force: true });                                                                  // Edgeband                
        cy.get('[data-value="96"]').click()                                                                                                                     // Edgeband  
        cy.get('td.MuiTableCell-root').eq(8).find('input').type('4', { force: true });                                                                          // Openings        
        cy.get('td.MuiTableCell-root').eq(13).find('input').type('5310', { force: true });                                                                      // color        
        cy.get('td.MuiTableCell-root').eq(14).find('input').type('5310', { force: true });                                                                      // sb color        
        cy.get('.headerActions > .MuiButton-contained').click().wait(10000)                                                                                     // Tapping to Print btn
        cy.get('button[aria-label="close"]').should('exist').click().wait(10000)                                                                                // Closing print view                                    
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(500)                                                                         // Tapping to Submit btn

        //--------------------------------------------------------------------------------------------------------------------------------------------------------------------        
        //                                                        Submitting Order with both Required and optional values
        //                                                                    >>>>> Adding form data <<<<<    
        // -------------------------------------------------------------------------------------------------------------------------------------------------------------------

        cy.get('.css-1ubxkj1 > :nth-child(2)').click().wait(1000)                                                                                               // Tap to create new order btn
        cy.get('[data-tour="order.action.new"]').click().wait(1000)                                                                                             // Adding fresh order
        cy.get('.MuiDialogActions-root > :nth-child(2)').click()                                                                                                // Tapping to OK btn
        cy.contains('label', 'Your PO').next().find('input').type('MullionsDoors (Edged) Doors 11')                                                             // Your PO
        cy.contains('label', 'Their PO').next().find('input').type('XYZ 1', { force: true })                                                                    // Their PO
        cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click({force: true}).wait(1000)                                                                 // Tapping to Date icon        
        cy.get('.MuiCalendarPicker-root').find('button[role="gridcell"]')                                                                                       // Locate date buttons inside the calendar
            .each(($el) => {
                if (!$el.prop('disabled')) {                                                                                                                    // Check if the date is enabled                
                cy.wrap($el).click().wait(500)                                                                                                                  // Click the first enabled date                
                return false                                                                                                                                    // Break the loop after selecting the date
                }
            });        
            cy.get('.css-x7mp9n').first().type('ABC 1', { force: true })                                                                                        // Note
            //cy.contains('label', 'Notes').first().parent().find('input').type('Your notes here 1');
            
            const filePath = 'images/sample-image.png';                                                                                                         // Define the file path relative to the cypress/fixtures directory            
            cy.get('input[type="file"]#estimator-image-input').attachFile(filePath)                                                                             // Upload the file using the input element
            .then(input => {                
            expect(input[0].files[0].name).to.equal('sample-image.png');                                                                                        // Verify that the file is uploaded
            });    
        cy.get(':nth-child(1) > .MuiFormControlLabel-root > .MuiTypography-root > .css-zfsz4h').click()                                                         // Tapping to inch/mm

                //                                                      >>>>> Adding Mullions Doors (Edged) category table data  <<<<<        


        cy.get('.css-budqf6').contains('Add section').click({force: true}).wait(1000)                                                                           // Tapping to Add color btn
        cy.contains('label', 'Section name').next().find('input').should('be.visible').type('Mullions Doors (Edged)');                                          // Section Name        
        //cy.contains('label', 'Notes').eq(1).parent().find('input').type('Automating Molded Category with Doors Section', { force: true });                    // Section Notes                  
        cy.get('.MuiBox-root > .MuiGrid-container > .MuiGrid-root > .MuiButtonBase-root').click().wait(500)                                                     // Tapping to Add a new product btn
        cy.get(':nth-child(3) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root').click({force: true})                               // Select Mullions Doors (Edged)                 
        cy.wait(2000)                   
        cy.get('table tbody tr.MuiTableRow-root', { timeout: 10000 }).should('have.length.greaterThan', 0).then(($rowsBefore) => {
        const initialRowCount = $rowsBefore.length;
        cy.wrap($rowsBefore[0]).within(() => {
        cy.get('td.MuiTableCell-root').each(($td) => {
            cy.wrap($td).invoke('text').then((tdValue) => {
            tdValue = tdValue.trim();

                if (tdValue === '1.') {
                    cy.log('Filling the first row with TD=1');              
                    cy.get('td.MuiTableCell-root').eq(3).find('input').type('abcs', { force: true });                                                           // invalid input width
                    cy.get('td.MuiTableCell-root').eq(3).find('input').clear()                                                                                  // Clear input width    
                    cy.get('td.MuiTableCell-root').eq(3).find('input').type('45', { force: true });                                                             // Valid input width
                    cy.get('td.MuiTableCell-root').eq(4).find('input').type('abcs', { force: true });                                                           // invalid input height
                    cy.get('td.MuiTableCell-root').eq(4).find('input').clear()                                                                                  // Clear input height    
                    cy.get('td.MuiTableCell-root').eq(4).find('input').type('58', { force: true });                                                             // Valid input height
                    cy.get('td.MuiTableCell-root').eq(5).find('.MuiSelect-select').click({ force: true });                                                      // thickness
                    cy.get('[data-value="0.75"]').click()                                                                                                       // thickness
                    cy.get('td.MuiTableCell-root').eq(6).find('.MuiSelect-select').click({ force: true });                                                      // grain                
                    cy.get('[data-value="V"]').click()                                                                                                          // grain        
                    cy.get('td.MuiTableCell-root').eq(7).find('.MuiSelect-select').click({ force: true });                                                      // Edgeband                
                    cy.get('[data-value="96"]').click()                                                                                                         // Edgeband 
                    cy.get('td.MuiTableCell-root').eq(8).find('input').type('4', { force: true });                                                              // Openings        
                    cy.get('td.MuiTableCell-root').eq(9).find('.MuiSelect-select').click({ force: true });                                                      // Type
                    cy.get('[data-value="E"] > .css-sc6tei').click()                                                                                            // Type
                    cy.get('td.MuiTableCell-root').eq(10).find('.MuiSelect-select').click({ force: true });                                                     // qty
                    cy.get('[data-value="3"]').click()                                                                                                          // qty
                    cy.get('td.MuiTableCell-root').eq(11).find('.MuiSelect-select').click({ force: true });                                                     // postiton
                    cy.get('[data-value="B"] > .css-sc6tei').click()                                                                                            // postiton
                    cy.get('.MuiFormControl-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click({ force: true })                                      // Dowels 
                    cy.get('td.MuiTableCell-root').eq(13).find('input').type('5306', { force: true });                                                          // color                    
                   // cy.get('td.MuiTableCell-root').eq(14).find('input').type('555', { force: true });                                                           // Sb Color
                }
            });
        });
        });
        cy.get('[colspan="17"] > .MuiButtonBase-root').click().wait(2000)                                                                                       // Adding second item
        cy.get('table tbody tr.MuiTableRow-root', { timeout: 10000 }).then(($rowsAfter) => {
        const newRow = $rowsAfter[$rowsAfter.length - 1]; // Get the last (newly added) row
        cy.wrap(newRow).within(() => {
        cy.get('td.MuiTableCell-root').each(($td) => {
        cy.wrap($td).invoke('text').then((tdValue) => {
        tdValue = tdValue.trim();
                if (tdValue === '2.') {
                    cy.log('Filling the new row with TD=2');                   
                    cy.get('td.MuiTableCell-root').eq(2).find('input').type('45', { force: true });                                                             // Qty                                
                    cy.get('td.MuiTableCell-root').eq(3).find('input').type('58', { force: true });                                                             // width
                    cy.get('td.MuiTableCell-root').eq(4).find('input').type('58', { force: true });                                                             // height
                    cy.get('td.MuiTableCell-root').eq(6).find('div.MuiSelect-select').should('have.text', 'V')                                                  // Assertioan of grain input
                    cy.get('td.MuiTableCell-root').eq(7).find('div.MuiSelect-select').should('have.text', '96')                                                 // Assertioan of Edgeband
                    cy.get('td.MuiTableCell-root').eq(8).find('.MuiInputBase-input').parents('.MuiInputBase-root').find('input').should('have.value', '4')   // Assertioan of Openings
                    cy.get('td.MuiTableCell-root').eq(9).find('div.MuiSelect-select').should('have.text', 'E')                                                  // Assertion of Type        
                    cy.get('td.MuiTableCell-root').eq(10).find('div.MuiSelect-select').should('have.text', '3')                                                 // Assertion  of qty        
                    cy.get('td.MuiTableCell-root').eq(11).find('div.MuiSelect-select').should('have.text', 'B')                                                 // Assertion of postiton            
                    cy.get('td.MuiTableCell-root').eq(12).find('input[type="checkbox"]').should('be.checked')                                                   // Assertion of Dowels                     
                    cy.get('td.MuiTableCell-root').eq(13).find('input.MuiAutocomplete-input').should('have.value', '5306 - Black 2D')                           // Assertion of color                                             
                    cy.get('td.MuiTableCell-root').eq(14).find('input.MuiAutocomplete-input').should('have.value', '5306 - Black 2D')                           // Assertion of sb color                                             
                }        
            });
        });
    });
    })
    })
    cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(5000)                                                                            // Tapping to Submit btn
    //cy.get('.css-1ubxkj1 > :nth-child(1)').click().wait(10000)                                                                                                  // Print order    
    //cy.get('button[aria-label="close"]').should('exist').click().wait(10000)                                                                                    // Closing print view
    })

    it("Verify Order Edited Successfully Via Web Orders Page Flow", function()  {
        
        cy.viewport(1440, 900)
        cy.visit("https://dev.thermoform.net/") 
        
        cy.wait(5000)
        cy.get('.MuiTypography-root').contains("Identification").should('be.visible').and('exist')                                                              // Asssertion of Identification heading is present 
        cy.get('.MuiTypography-body2').contains("Forgot Password?").should('be.visible').and('exist')                                                           // Asssertion of Forgot Password? link is present   
        cy.get('[type="submit"]').contains("Next").should('be.visible').and('exist').and('not.be.enabled')                                                      // Asssertion of Next btn is disabled        
        cy.get('input[name="username"]').type("masterfortesting").wait(500)                                                                                     // Input valid username                        
        cy.get('[type="submit"]').contains("Next").should('be.visible').and('exist').and('contain','Next').click()                                              // Click to Next button         
        cy.get('.MuiTypography-h5').contains("Email Authentication").should('be.visible').and('exist').and('contain','Email').click()                           // Asssertion of "Email Authentication" heading is present
        cy.get('input[name="email"]').should('be.visible').and('exist').wait(500)                                                                               // Asssertion of email box is present                       
        cy.get('[type="submit"]').contains("Send Authentication Link").should('be.visible').and('exist').and('contain','Authentication')                        // Asssertion of Send Authentication Link button is present
        cy.get('[type="text"]').contains("Password Authentication").should('be.visible').and('exist').and('contain','Password').click()                         // Asssertion of "Password Authentication" link is present                       
        cy.get('.MuiTypography-h5').contains("Password Authentication").should('be.visible').and('exist').and('contain','Password')                             // Asssertion of Password Authentication heading is present
        cy.get('.MuiTypography-body2').contains("Forgot Password?").should('be.visible').and('exist')                                                           // Asssertion of Forgot Password? link is present   
        cy.get('[type="text"]').contains("Email Authentication").should('be.visible').and('exist').and('contain','Email')                                       // Asssertion of Email Authentication Link is present                
        cy.get('input[name="password"]').type("[HPnotebook1@")                                                                                                  // Input valid password        
        cy.get('[type="submit"]').contains("Submit").should('be.visible').and('exist').and('contain','Submit').click()                                          // Click to Submit button for portal login  
        //cy.get('.css-imv4ws > .MuiAvatar-root').click().wait(1000)                                                                                            // Asserting login button present with its avaialble options	 
        //cy.get('.css-1stpmc > :nth-child(1) > .MuiListItemText-root > .MuiTypography-root').contains("Français (Canada)").should('be.visible')                // Asserting Français (Canada) text is present and fr language is pre selected 
        //.and('exist').and('contain','Français').click().wait(1000)                                                         
        //cy.get('.MuiListItemText-primary').contains("English (Canada)").should('be.visible').and('exist').and('contain','English').click().wait(2000)         // Changing portal language to English
        cy.get('body').click().wait(2000)
        cy.get('.MuiToolbar-root > .MuiTypography-root', { timeout: 100000 }).contains("Home").should('be.visible').and('exist').and('contain','Home')          // Asserting of Home text is present on home page
        cy.get('.MuiTypography-h4').contains("Shortcuts").should('be.visible').and('exist').and('contain','Shortcuts')                                          // Asserting of Shortcuts text is present on home page        
        cy.get('.MuiIconButton-colorInherit').click({force: true})                                                                                              // Click to menu icon
        cy.get(':nth-child(7) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').contains("Customer Center").should('be.visible')            // Asserting of Customer Center li is present on side menu
        .and('exist').and('contain','Customer').click().wait(1000)        
        cy.get('[title="Estimator"] > .MuiListItemText-root > .MuiTypography-root').contains("Estimator").should('be.visible')                                  // Asserting of Estimator li is present on side menu
        .and('exist').and('contain','Estimator').click()
        cy.get('.css-budqf6', { timeout: 50000 }).contains('Add section').should('be.visible')                                                                  // Asserting Add color btn is visible
        cy.get('button svg path[d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"]').click({force: true})                                       // Getting side menu back buttton          
        cy.get('[data-tour="order.action.new"]').click()                                                                                                        // Adding fresh order
        
        cy.get('.MuiDialogActions-root > :nth-child(2)').click().wait(500)                                                                                      // Tapping to OK btn
        cy.get('.css-budqf6').contains('Add section').click({force: true}).wait(500)                                                                            // Tapping to Add color btn
        cy.get('.MuiBox-root > .MuiGrid-container > .MuiGrid-root > .MuiButtonBase-root').click().wait(500)                                                     // Tapping to Add a new product btn

        cy.get(':nth-child(1) > .MuiCardContent-root > .MuiTypography-h5').contains("Molded").should('be.visible')
        cy.get(':nth-child(1) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Doors").should('be.visible')
        cy.get(':nth-child(1) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Drawer Fronts").should('be.visible')
        cy.get(':nth-child(1) > .MuiCardContent-root > .MuiList-root > :nth-child(3) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Mullions Doors").should('be.visible')

        cy.get(':nth-child(3) > .MuiCardContent-root > .MuiTypography-h5').contains("Edged").should('be.visible')
        cy.get(':nth-child(3) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Doors (Edged)").should('be.visible')
        cy.get(':nth-child(3) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Mullions Doors (Edged)").should('be.visible')

        cy.get(':nth-child(5) > .MuiCardContent-root > .MuiTypography-h5').contains("Accessories").should('be.visible')
        cy.get(':nth-child(5) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Edge Banding").should('be.visible')
        cy.get(':nth-child(5) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Heat Deflectors and Protectors").should('be.visible')
        cy.get(':nth-child(5) > .MuiCardContent-root > .MuiList-root > :nth-child(3) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Moldings").should('be.visible')
        cy.get(':nth-child(5) > .MuiCardContent-root > .MuiList-root > :nth-child(4) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Preglued Edge Banding").should('be.visible')
        cy.get('.MuiList-root > :nth-child(5) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Tambour Roll-ups").should('be.visible')

        cy.get(':nth-child(2) > .MuiCardContent-root > .MuiTypography-h5').contains("5-pieces").should('be.visible')
        cy.get(':nth-child(2) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Doors (5 pieces)").should('be.visible')
        cy.get(':nth-child(2) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Drawer Fronts (5 pieces)").should('be.visible')
        cy.get(':nth-child(2) > .MuiCardContent-root > .MuiList-root > :nth-child(3) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Mullions Doors (5 pieces)").should('be.visible')

        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiTypography-h5').contains("Boards").should('be.visible')
        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Boards").should('be.visible')
        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Preglued Thermoplastic Sheets").should('be.visible')
        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(3) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Thermolam").should('be.visible')
        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(4) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Thermoplastic Sheets").should('be.visible')

        cy.get(':nth-child(1) > .MuiCardContent-root > .MuiList-root > :nth-child(3) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')      // Select Mullions Doors 
        .click().wait(500)
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(500)                                                                         // Tapping to Submit btn
        cy.get('.MuiAlert-message').contains('Please validate the form before submitting the order').should('be.visible')                                       // Assertion for validation message
        cy.get('.MuiAccordionSummary-root').click().wait(500)                                                                                                   // Tapping to Accordian 
        //cy.get('.jss23 > .MuiButtonBase-root').click().wait(500)
        cy.get('button svg path[d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"]').click({force: true})                                       // Getting side menu back buttton

        //===================================================>>  // Getting elements for Local Testing  <<===============================================================================================
        
        //                                                        Submitting Order with Required values
        //                                                           >>>>> Adding form data <<<<<                
        
        cy.contains('label', 'Your full name').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()                   // Order Name Validation of helper text
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');    
        cy.contains('label', 'Your email address').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()               // Eamil Validation of helper text
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Value is not a valid email address');
        cy.contains('label', 'Your PO').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()                          // PO Validation of helper text 
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');                                                                    

        cy.contains('label', 'Your full name').next().find('input').type('Automate Mullions Doors Ctg')                                                         // Name
        cy.contains('label', 'Your email address').next().find('input').type('AutomateMullionsDoors#gmail.com')                                                 // Email
        cy.contains('label', 'Your email address').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()               // Eamil Validation of helper text
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Value is not a valid email address');
        cy.contains('label', 'Your email address').next().find('input').clear()                                                                                 // Clear the invalid input        
        cy.contains('label', 'Your email address').next().find('input').type('AutomateMullionsDoors@gmail.com')                                                 // Email with valid input                  
        cy.contains('label', 'Your PO').next().find('input').type('Doors 11')                                                                                   // Your PO

        cy.contains('label', 'Their PO').next().find('input').type('XYZ 1', { force: true })                                                                    // Their PO
        cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click({force: true}).wait(1000)                                                                 // Tapping to Date icon        
        cy.get('.MuiCalendarPicker-root').find('button[role="gridcell"]')                                                                                       // Locate date buttons inside the calendar
            .each(($el) => {
                if (!$el.prop('disabled')) {                                                                                                                    // Check if the date is enabled                
                cy.wrap($el).click().wait(500)                                                                                                                  // Click the first enabled date                
                return false                                                                                                                                    // Break the loop after selecting the date
                }
            });        
            cy.get('.css-x7mp9n').first().type('ABC 1', { force: true })                                                                                        // Note            
            const filePath = 'images/sample-image.png';                                                                                                         // Define the file path relative to the cypress/fixtures directory            
            cy.get('input[type="file"]#estimator-image-input').attachFile(filePath)                                                                             // Upload the file using the input element
            .then(input => {                
            expect(input[0].files[0].name).to.equal('sample-image.png');                                                                                        // Verify that the file is uploaded
            });    
            cy.get(':nth-child(1) > .MuiFormControlLabel-root > .MuiTypography-root > .css-zfsz4h').click()                                                         // Tapping to inch/mm

        //                                                      >>>>> Adding Mullions Doors category table data  <<<<<        

        //                                                           >>>>> Removing section flow by three dots <<<<<

        cy.get('button svg path[d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z').click({force: true})                                       // Getting three dots by svg
        cy.contains('li', 'No section name').should('be.visible').click({force: true})                                                                            // click delete section btn
        cy.contains('button', 'ok').should('be.visible').click();                                                                                               // click ok btn to remove section

        //                                                           >>>>> Removing section flow by section name cross btn <<<<<

        cy.get('.css-budqf6').contains('Add section').click({force: true}).wait(1000)                                                                           // Adding section again
        cy.get('.MuiCollapse-root.css-1cijpyl').should('be.visible').click();
        cy.contains('button', 'ok').should('be.visible').click();                                                                                               // click ok btn to remove section
        cy.get('.css-budqf6').contains('Add section').click({force: true}).wait(1000)                                                                           // Adding section again
        cy.contains('label', 'Section name').next().find('input').should('be.visible').type('Doors Section');                                                   // Section Name        
        cy.get('.MuiBox-root > .MuiGrid-container > .MuiGrid-root > .MuiButtonBase-root').click().wait(500)                                                     // Tapping to Add a new product btn
        cy.get(':nth-child(1) > .MuiCardContent-root > .MuiList-root > :nth-child(3) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')      // Tapping to Mullions Doors test 
        .click().wait(500)                   

        cy.get('table tbody tr.MuiTableRow-root', { timeout: 10000 }).should('have.length.greaterThan', 0).then(($rowsBefore) => {
        const initialRowCount = $rowsBefore.length;
        cy.wrap($rowsBefore[0]).within(() => {
        cy.get('td.MuiTableCell-root').each(($td) => {
            cy.wrap($td).invoke('text').then((tdValue) => {
            tdValue = tdValue.trim();

                if (tdValue === '1.') {
                    cy.log('Filling the first row with TD=1');              
                    cy.get('td.MuiTableCell-root').eq(3).find('input').type('abcs', { force: true });                                                           // invalid input width
                    cy.get('td.MuiTableCell-root').eq(3).find('input').clear()                                                                                  // Clear input width    
                    cy.get('td.MuiTableCell-root').eq(3).find('input').type('45', { force: true });                                                             // Valid input width
                    cy.get('td.MuiTableCell-root').eq(4).find('input').type('abcs', { force: true });                                                           // invalid input height
                    cy.get('td.MuiTableCell-root').eq(4).find('input').clear()                                                                                  // Clear input height    
                    cy.get('td.MuiTableCell-root').eq(4).find('input').type('58', { force: true });                                                             // Valid input height
                    cy.get('td.MuiTableCell-root').eq(5).find('.MuiSelect-select').click({ force: true });                                                      // thickness
                    cy.get('[data-value="0.75"]').click()                                                                                                       // thickness
                    cy.get('td.MuiTableCell-root').eq(6).find('.MuiSelect-select').click({ force: true });                                                      // grain                
                    cy.get('[data-value="H"]').click()                                                                                                          // grain        
                    cy.get('td.MuiTableCell-root').eq(7).find('.MuiSelect-select').click({ force: true });                                                      // stiles and rails                
                    cy.get('[data-value="LG"]').click()                                                                                                         // stiles and rails         
                    cy.get('td.MuiTableCell-root').eq(8).find('input').type('5001', { force: true });                                                           // Modele        
                    cy.get('td.MuiTableCell-root').eq(9).find('input').type('F', { force: true });                                                              // ext profile    
                    cy.get('td.MuiTableCell-root').eq(10).find('input').type('6', { force: true });                                                             // Openings                
                    cy.get('td.MuiTableCell-root').eq(11).find('.MuiSelect-select').click({ force: true });                                                     // Type
                    cy.get('[data-value="S"] > .css-sc6tei').click()                                                                                            // Type
                    cy.get('td.MuiTableCell-root').eq(12).find('.MuiSelect-select').click({ force: true });                                                     // qty
                    cy.get('[data-value="3"]').click()                                                                                                          // qty
                    cy.get('td.MuiTableCell-root').eq(13).find('.MuiSelect-select').click({ force: true });                                                     // postiton
                    cy.get('[data-value="B"] > .css-sc6tei').click()                                                                                            // postiton
                    cy.get(':nth-child(15) > .MuiFormControl-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click({ force: true })                     // Dowels 
                    cy.get('td.MuiTableCell-root').eq(15).find('input').type('209', { force: true });                                                           // color                    
                    cy.get('td.MuiTableCell-root').eq(16).find('input').type('555', { force: true });                                                           // Sb Color
                    //cy.get(':nth-child(11) > .MuiFormControl-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click({ force: true })                   // QP
                }
            });
        });
        });
        cy.get('[colspan="19"] > .MuiButtonBase-root').click().wait(2000)                                                                                       // Adding second item
        cy.get('table tbody tr.MuiTableRow-root', { timeout: 10000 }).then(($rowsAfter) => {
        const newRow = $rowsAfter[$rowsAfter.length - 2]; // Get the last (newly added) row
        cy.wrap(newRow).within(() => {
        cy.get('td.MuiTableCell-root').each(($td) => {
        cy.wrap($td).invoke('text').then((tdValue) => {
        tdValue = tdValue.trim();
                if (tdValue === '2.') {
                    cy.log('Filling the new row with TD=2');                   
                    cy.get('td.MuiTableCell-root').eq(2).find('input').type('45', { force: true });                                                             // Qty                                
                    cy.get('td.MuiTableCell-root').eq(3).find('input').type('58', { force: true });                                                             // width
                    cy.get('td.MuiTableCell-root').eq(4).find('input').type('58', { force: true });                                                             // height
                    cy.get('td.MuiTableCell-root').eq(6).find('div.MuiSelect-select').should('have.text', 'H')                                                  // Assertioan of grain input
                    cy.get('td.MuiTableCell-root').eq(7).find('div.MuiSelect-select').should('have.text', 'LG')                                                 // Assertioan of stiles and rails input
                    cy.get('td.MuiTableCell-root').eq(8).find('input.MuiAutocomplete-input').should('have.value', '5001')                                       // Assertion of Modele    
                    cy.get('td.MuiTableCell-root').eq(9).find('input.MuiAutocomplete-input').should('have.value', 'F')                                          // Assertion of ext profile                            
                    cy.get('td.MuiTableCell-root').eq(10).find('input.MuiAutocomplete-input').should('have.value', '6')                                         // Assertion of Openings        
                    cy.get('td.MuiTableCell-root').eq(11).find('div.MuiSelect-select').should('have.text', 'S')                                                 // Assertion of Type        
                    cy.get('td.MuiTableCell-root').eq(12).find('div.MuiSelect-select').should('have.text', '3')                                                 // Assertion  of qty        
                    cy.get('td.MuiTableCell-root').eq(13).find('div.MuiSelect-select').should('have.text', 'B')                                                 // Assertion of postiton            
                    cy.get('td.MuiTableCell-root').eq(14).find('input[type="checkbox"]').should('be.checked')                                                   // Assertion of Dowels                     
                    cy.get('td.MuiTableCell-root').eq(15).find('input.MuiAutocomplete-input').should('have.value', '209 - Nutmeg')                              // Assertion of color                                             
                }        
            });
        });
        });
        })
        })
        cy.get('[aria-label="Save"] > .MuiButtonBase-root').click().wait(10000)                                                                                 // Tapping to save order btn

        //                                                                  Moving to web orders page

        cy.get('.MuiIconButton-colorInherit').click({force: true})                                                                                              // Click to menu icon
        cy.get('[title="Web Orders"]').click().wait(1000)                                                                                                       // Tapping to web Orders
        cy.get(':nth-child(1) > .MuiListItemText-root > .MuiListItemText-primary > .MuiTypography-root > :nth-child(1) > span')
        .should('contain','Automate Mullions Doors Ctg').click().wait(500)                                                                                      // Pick the first saved order by name and click it
        cy.contains('button', 'Add a new product', { timeout: 100000 }).should('be.visible')         
        cy.contains('label', 'Your full name').next().find('input').clear({force: true})                                                                        // Clear order name
        cy.get('.css-1mrqld1').click().wait(500)                                                                                                                // Tapping to Accordian 
        cy.contains('label', 'Your full name').next().find('input').type('Automate Molded(Mullions Doors) 3')                                                   // Update order name 
        cy.contains('label', 'Your email address').next().find('input').clear()                                                                                 // Clear order Email
        cy.contains('label', 'Your email address').next().find('input').type('AutomateMD2@mail.com')                                                            // Update Email
        cy.contains('label', 'Your PO').next().find('input').clear()                                                                                            // Clear Your PO
        cy.contains('label', 'Your PO').next().find('input').type('MullionsDoors 100')                                                                          // Your PO
        cy.get('.css-x7mp9n').first().clear()                                                                                                                   // Clear Note
        cy.get('.css-x7mp9n').first().type('ABC 1', { force: true })                                                                                            // Note
        cy.get(':nth-child(1) > .MuiFormControlLabel-root > .MuiTypography-root > .css-zfsz4h').click()                                                         // Tapping to inch/mm 
        cy.get('.css-1mrqld1').click().wait(500)                                                                                                                // Tapping to Accordian 
               
        //                                                                          Updating table data

        cy.get('table tbody tr.MuiTableRow-root', { timeout: 10000 }).should('have.length.greaterThan', 0).then(($rowsBefore) => {
        const initialRowCount = $rowsBefore.length;
        cy.wrap($rowsBefore[0]).within(() => {
        cy.get('td.MuiTableCell-root').each(($td) => {
            cy.wrap($td).invoke('text').then((tdValue) => {
            tdValue = tdValue.trim();
                if (tdValue === '1.') {
                    cy.log('Filling the first row with TD=1');              
                    cy.get('td.MuiTableCell-root').eq(3).find('input').clear()                                                                                  // Clear input width    
                    cy.get('td.MuiTableCell-root').eq(3).find('input').type('12', { force: true });                                                             // Valid input width
                    cy.get('td.MuiTableCell-root').eq(4).find('input').clear()                                                                                  // Clear input height    
                    cy.get('td.MuiTableCell-root').eq(4).find('input').type('58', { force: true });                                                             // Valid input height
                    cy.get('td.MuiTableCell-root').eq(6).find('.MuiSelect-select').click({ force: true });                                                      // grain                
                    cy.get('[data-value="V"]').click()                                                                                                          // grain        
                    cy.get('td.MuiTableCell-root').eq(7).find('.MuiSelect-select').click({ force: true });                                                      // stiles and rails                
                    cy.get('[data-value="VG"]').click()                                                                                                         // stiles and rails         
                    cy.get('td.MuiTableCell-root').eq(8).find('input').clear()                                                                                  // Clear Modele  
                    cy.get('td.MuiTableCell-root').eq(8).find('input').type('22022', { force: true });                                                          // Modele  
                    cy.get('td.MuiTableCell-root').eq(9).find('input').clear()                                                                                  // Clear ext profile  
                    cy.get('td.MuiTableCell-root').eq(9).find('input').type('J', { force: true });                                                              // ext profile    
                    cy.get('td.MuiTableCell-root').eq(10).find('input').clear()                                                                                 // Clear Openings 
                    cy.get('td.MuiTableCell-root').eq(10).find('input').type('10', { force: true });                                                            // Openings                
                    cy.get('td.MuiTableCell-root').eq(12).find('.MuiSelect-select').click({ force: true });                                                     // qty
                    cy.get('[data-value="2"]').click()                                                                                                          // qty
                    cy.get('td.MuiTableCell-root').eq(13).find('.MuiSelect-select').click({ force: true });                                                     // postiton
                    cy.get('[data-value="D"] > .css-sc6tei').click()                                                                                            // postiton
                    cy.get('td.MuiTableCell-root').eq(15).find('input').type('12', { force: true });                                                            // color                    
                    cy.get('td.MuiTableCell-root').eq(16).find('input').type('555', { force: true });                                                           // Sb Color
                }
            });
        });
        });
        cy.get('table tbody tr.MuiTableRow-root', { timeout: 10000 }).then(($rowsAfter) => {
        const newRow = $rowsAfter[$rowsAfter.length - 2]; // Get the last (newly added) row
        cy.wrap(newRow).within(() => {
        cy.get('td.MuiTableCell-root').each(($td) => {
        cy.wrap($td).invoke('text').then((tdValue) => {
        tdValue = tdValue.trim();
                if (tdValue === '2.') {
                    cy.log('Filling the new row with TD=2');                                       
                    cy.get('td.MuiTableCell-root').eq(3).find('input').clear()                                                                                  // Clear input width    
                    cy.get('td.MuiTableCell-root').eq(3).find('input').type('96', { force: true });                                                             // Valid input width
                    cy.get('td.MuiTableCell-root').eq(4).find('input').clear()                                                                                  // Clear input height    
                    cy.get('td.MuiTableCell-root').eq(4).find('input').type('58', { force: true });                                                             // Valid input height
                    cy.get('td.MuiTableCell-root').eq(6).find('.MuiSelect-select').click({ force: true });                                                      // grain                
                    cy.get('[data-value="V"]').click()                                                                                                          // grain        
                    cy.get('td.MuiTableCell-root').eq(7).find('.MuiSelect-select').click({ force: true });                                                      // stiles and rails                
                    cy.get('[data-value="VG"]').click()                                                                                                         // stiles and rails         
                    cy.get('td.MuiTableCell-root').eq(8).find('input').clear()                                                                                  // Clear Modele  
                    cy.get('td.MuiTableCell-root').eq(8).find('input').type('22724', { force: true });                                                          // Modele  
                    cy.get('td.MuiTableCell-root').eq(9).find('input').clear()                                                                                  // Clear ext profile  
                    cy.get('td.MuiTableCell-root').eq(9).find('input').type('C', { force: true });                                                              // ext profile    
                    cy.get('td.MuiTableCell-root').eq(10).find('input').clear()                                                                                 // Clear Openings 
                    cy.get('td.MuiTableCell-root').eq(10).find('input').type('12', { force: true });                                                            // Openings                
                    cy.get('td.MuiTableCell-root').eq(12).find('.MuiSelect-select').click({ force: true });                                                     // qty
                    cy.get('[data-value="2"]').click()                                                                                                          // qty
                    cy.get('td.MuiTableCell-root').eq(13).find('.MuiSelect-select').click({ force: true });                                                     // postiton
                    cy.get('[data-value="G"] > .css-sc6tei').click()                                                                                            // postiton
                    cy.get('td.MuiTableCell-root').eq(15).find('input').type('1003', { force: true });                                                          // color                    
                    cy.get('td.MuiTableCell-root').eq(16).find('input').type('1003', { force: true });                                                          // Sb Color               
                }        
            });
        });
        });
        })
        })
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(5000)                                                                            // Tapping to Submit btn
        
        //=====================================================================>>  Getting elements for Git CI/CD Pipeline  <<===============================================================================================
        /*
        cy.get('#\\:ru\\:-helper-text').should('have.text', 'Required value').should('be.visible')                                                              // Order Name Validation of helper text
        cy.get('#\\:r12\\:-helper-text').contains('Value is not a valid email address').should('be.visible')                                                    // Eamil Validation of helper text
        cy.get('#\\:r18\\:-helper-text').contains('Required value').should('be.visible')                                                                        // PO Validation of helper text

        cy.get('#\\:ru\\:').type('Automate Mullions Doors Category')                                                                                            // Name
        cy.get('#\\:r12\\:').type('AutomateMullionsDoors#gmail.com', { force: true })                                                                           // Email
        cy.get('#\\:r12\\:-helper-text').contains('Value is not a valid email address').should('be.visible')                                                    // Eamil Validation of helper text        
        cy.get('#\\:r12\\:').clear()                                                                                                                            // Clear the invalid input
        cy.get('#\\:r12\\:').type('AutomateMullionsDoors@gmail.com', { force: true })                                                                           // Email with valid input   
        cy.get('#\\:r18\\:').type('MullionsDoors 45', { force: true })                                                                                          // Your PO
        cy.get('#\\:r18\\:').type('Mullions Doors 11', { force: true })                                                                                         // Your PO
        cy.get('#\\:r1a\\:').type('XYZ 1', { force: true })                                                                                                     // Their PO  
        cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click({force: true}).wait(2000)                                                                 // Tapping to Date icon        
        cy.get('.MuiCalendarPicker-root').find('button[role="gridcell"]')                                                                                       // Locate date buttons inside the calendar
            .each(($el) => {
                if (!$el.prop('disabled')) {                                                                                                                    // Check if the date is enabled                
                cy.wrap($el).click().wait(500)                                                                                                                  // Click the first enabled date                
                return false                                                                                                                                    // Break the loop after selecting the date
                }
            });        
        cy.get('.css-x7mp9n').first().type('ABC 1', { force: true })                                                                                            // Note
            const filePath = 'images/sample-image.png';                                                                                                         // Define the file path relative to the cypress/fixtures directory            
            cy.get('input[type="file"]#estimator-image-input').attachFile(filePath)                                                                             // Upload the file using the input element
            .then(input => {                
            expect(input[0].files[0].name).to.equal('sample-image.png');                                                                                        // Verify that the file is uploaded
            });    
        cy.get(':nth-child(1) > .MuiFormControlLabel-root > .MuiTypography-root > .css-zfsz4h').click()                                                         // Tapping to inch/mm
        
        //                                                      >>>>>  Adding Doors category table data  <<<<<        

        cy.get('#\\:r1e\\:').type('Mullions Doors Section')                                                                                                     // Section Name      
        cy.get('#\\:r1g\\:').type('Automating Mullions Doors Section')                                                                                          // Section Note
        cy.get('.MuiAccordionSummary-root').click().wait(500)                                                                                                   // Tapping to Accordian to show table values
        cy.get('#\\:r1j\\:').type('12')                                                                                                                         // Qty
        cy.get('#\\:r1l\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text for no input
        cy.get('#\\:r1l\\:').type('abcs')                                                                                                                       // invalid input width
        cy.get('#\\:r1l\\:-helper-text').contains('Not a valid measurement').should('be.visible')                                                               // Validation of helper text for invalid input
        cy.get('#\\:r1l\\:').clear()                                                                                                                            // Clear input width    
        cy.get('#\\:r1l\\:').type('45')                                                                                                                         // Valid input width    
        cy.get('#\\:r1n\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text        
        cy.get('#\\:r1n\\:').type('abcs')                                                                                                                       // invalid input height
        cy.get('#\\:r1n\\:-helper-text').contains('Not a valid measurement').should('be.visible')                                                               // Validation of helper text for invalid input
        cy.get('#\\:r1n\\:').clear()                                                                                                                            // Clear input height    
        cy.get('#\\:r1n\\:').type('100')                                                                                                                        // Valid input height        
        cy.get('#\\:r1r\\:').click()                                                                                                                            // grain
        cy.get('[data-value="H"]').click()                                                                                                                      // grain
        cy.get('#\\:r1t\\:').click()                                                                                                                            // stiles and rails
        cy.get('[data-value="VG"]').click()                                                                                                                     // stiles and rails 
        cy.get('#\\:r20\\:-helper-text').contains('Invalid value').should('be.visible')                                                                         // Validation of helper text
        cy.get('#\\:r1u\\:').type('22024')                                                                                                                      // Modele
        cy.get('#\\:r21\\:').type('H')                                                                                                                          // ext profile
        cy.get('#\\:r26\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text
        cy.get('#\\:r24\\:').type('6')                                                                                                                          // Openings
        cy.get('#\\:r28\\:').click()                                                                                                                            // type
        cy.get('[data-value="S"]').click()                                                                                                                      // type
        cy.get('#\\:r2a\\:').click()                                                                                                                            // qty
        cy.get('[data-value="2"]').click()                                                                                                                      // qty
        cy.get('#\\:r2c\\:').click().wait(500)                                                                                                                  // position
        cy.get('[data-value="B"]').click()                                                                                                                      // position  
        cy.get('.MuiFormControl-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click()                                                                 // Dowels
        cy.get('#\\:r2f\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text    
        cy.get('#\\:r2d\\:').type('999')                                                                                                                        // color

        cy.get('[colspan="19"] > .MuiButtonBase-root').click().wait(500)                                                                                        // Adding second item
        cy.get('#\\:r2u\\:').type('14')                                                                                                                         // Qty
        cy.get('#\\:r30\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text
        cy.get('#\\:r30\\:').type('4257')                                                                                                                       // width
        cy.get('#\\:r32\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text
        cy.get('#\\:r32\\:').type('4257 ')                                                                                                                      // height
        cy.get('#\\:r36\\:').should('contain', 'H')                                                                                                             // Assertioan of grain input
        cy.get('#\\:r38\\:').should('contain', 'VG')                                                                                                            // Assertioan of stiles and rails input
        cy.get('#\\:r39\\:').should('have.value', '22024')                                                                                                      // Assertion of Modele    
        cy.get('#\\:r3c\\:').should('have.value', 'H')                                                                                                          // Assertion of ext profile
        cy.get('#\\:r3f\\:').should('have.value', '6')                                                                                                          // Assertion for Openings
        cy.get('#\\:r3j\\:').should('contain', 'S')                                                                                                             // Assertion for Type        
        cy.get('#\\:r3l\\:').should('contain', '2')                                                                                                             // Assertion for qty        
        cy.get('#\\:r3n\\:').should('contain', 'B')                                                                                                             // Assertion for postiton            
        cy.get(':nth-child(3) > :nth-child(15) > .MuiFormControl-root > .MuiButtonBase-root > .PrivateSwitchBase-input').should('be.checked')                   // Assertion for Dowels
        cy.get('#\\:r3o\\:').should('have.value', '999 - MDF')                                                                                                  // Assertion of color                
        cy.get('[aria-label="Save"] > .MuiButtonBase-root').click().wait(5000)                                                                                  // Tapping to save btn
        cy.get('.headerActions > .MuiButton-contained').click().wait(5000)                                                                                      // Print order  
        cy.get('#\\:rq\\: > .MuiButtonBase-root').click().wait(500)                                                                                             // Closing print view

        // Moving to web orders page
        cy.get('.MuiIconButton-colorInherit').click({force: true})                                                                                              // Click to menu icon
        cy.get('[title="Web Orders"]').click().wait(1000)                                                                                                       // Tapping to web Orders
        cy.get(':nth-child(1) > .MuiListItemText-root > .MuiListItemText-primary > .MuiTypography-root > :nth-child(1) > span')
        .should('contain','Automate Mullions Doors Category').click().wait(500)                                                                                 // Pick the first saved order by name and click it
        // Order populated in estimaior 
        cy.wait(20000)
        cy.get('#\\:rt\\:').clear()                                                                                                                             // Clear order name 
        cy.get('.css-1mrqld1').click().wait(500)                                                                                                                // Tapping to Accordian 
        cy.get('#\\:rt\\:').type('Automate Molded(Mullions Doors) 3')                                                                                           // Update order name      
        cy.get('#\\:r11\\:').clear()                                                                                                                            // Clear order Email 
        cy.get('#\\:r11\\:').type('AutomateMD2@mail.com', { force: true })                                                                                      // Update Email
        cy.get('#\\:r17\\:').clear()                                                                                                                            // Clear Your PO 
        cy.get('#\\:r17\\:').type('MullionsDoors 100', { force: true })                                                                                         // Update Your PO        
        cy.get(':nth-child(1) > .MuiFormControlLabel-root > .MuiTypography-root > .css-zfsz4h').click()                                                         // Tapping to inch/mm        
        // Updating table data
        cy.get('.css-1mrqld1').click().wait(5000)                                                                                                               // Tapping to Accordian
        cy.get('#\\:r1h\\:-button').scrollIntoView().click()                                                                                                    // Scrolling the page down and remove the second row
        cy.get('#\\:r1h\\:-menu > .MuiPaper-root > .MuiList-root > :nth-child(5)').click().wait(500)                                            
        cy.get('#\\:r1l\\:').clear()                                                                                                                            // Clear input width    
        cy.get('#\\:r1l\\:').type('145')                                                                                                                        // Valid input width
        cy.get('#\\:r1n\\:').clear()                                                                                                                            // Clear input Height    
        cy.get('#\\:r1n\\:').type('2312')                                                                                                                       // Valid input Height
        cy.get('#\\:r1r\\:').click()                                                                                                                            // Grain
        cy.get('[data-value="V"]').click()                                                                                                                      // grain
        cy.get('#\\:r1t\\:').click()                                                                                                                            // stiles
        cy.get('[data-value="LG"]').click()                                                                                                                     // stiles
        cy.get('#\\:r1u\\:').type('2006')                                                                                                                       // Modele
        cy.get('#\\:r21\\:').type('C')                                                                                                                          // ext profile
        cy.get('#\\:r24\\:').type('10')                                                                                                                         // Openings
        cy.get('#\\:r28\\:').click()                                                                                                                            // type
        cy.get('[data-value="T"]').click()                                                                                                                      // type
        cy.get('#\\:r2a\\:').click()                                                                                                                            // qty
        cy.get('[data-value="3"]').click()                                                                                                                      // qty
        cy.get('#\\:r2c\\:').click()                                                                                                                            // position
        cy.get('[data-value="H"]').click()                                                                                                                      // position  
        cy.get(':nth-child(1) > :nth-child(15) > .MuiFormControl-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click()                                // Dowel                                // Dowels 
        cy.get('#\\:r2d\\:').type('271')                                                                                                                        // color
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click()                                                                                   // Tapping to Submit btn
        cy.get('.css-1ubxkj1 > :nth-child(1)', { timeout: 5000 }).click().wait(10000)                                                                           // Print order    
        cy.get('#\\:rp\\: > .MuiButtonBase-root').click().wait(500)                                                                                             // Closing print view        
        */
    })
    
    it("Verify Order Edited Successfully on same screen", function()  {

        cy.viewport(1440, 900)
        cy.visit("https://dev.thermoform.net/") 
        
        cy.wait(5000)
        cy.get('.MuiTypography-root').contains("Identification").should('be.visible').and('exist')                                                              // Asssertion of Identification heading is present 
        cy.get('.MuiTypography-body2').contains("Forgot Password?").should('be.visible').and('exist')                                                           // Asssertion of Forgot Password? link is present   
        cy.get('[type="submit"]').contains("Next").should('be.visible').and('exist').and('not.be.enabled')                                                      // Asssertion of Next btn is disabled        
        cy.get('input[name="username"]').type("masterfortesting").wait(500)                                                                                     // Input valid username                        
        cy.get('[type="submit"]').contains("Next").should('be.visible').and('exist').and('contain','Next').click()                                              // Click to Next button         
        cy.get('.MuiTypography-h5').contains("Email Authentication").should('be.visible').and('exist').and('contain','Email').click()                           // Asssertion of "Email Authentication" heading is present
        cy.get('input[name="email"]').should('be.visible').and('exist').wait(500)                                                                               // Asssertion of email box is present                       
        cy.get('[type="submit"]').contains("Send Authentication Link").should('be.visible').and('exist').and('contain','Authentication')                        // Asssertion of Send Authentication Link button is present
        cy.get('[type="text"]').contains("Password Authentication").should('be.visible').and('exist').and('contain','Password').click()                         // Asssertion of "Password Authentication" link is present                       
        cy.get('.MuiTypography-h5').contains("Password Authentication").should('be.visible').and('exist').and('contain','Password')                             // Asssertion of Password Authentication heading is present
        cy.get('.MuiTypography-body2').contains("Forgot Password?").should('be.visible').and('exist')                                                           // Asssertion of Forgot Password? link is present   
        cy.get('[type="text"]').contains("Email Authentication").should('be.visible').and('exist').and('contain','Email')                                       // Asssertion of Email Authentication Link is present                
        cy.get('input[name="password"]').type("[HPnotebook1@")                                                                                                  // Input valid password        
        cy.get('[type="submit"]').contains("Submit").should('be.visible').and('exist').and('contain','Submit').click()                                          // Click to Submit button for portal login  
        //cy.get('.css-imv4ws > .MuiAvatar-root').click().wait(1000)                                                                                            // Asserting login button present with its avaialble options	 
        //cy.get('.css-1stpmc > :nth-child(1) > .MuiListItemText-root > .MuiTypography-root').contains("Français (Canada)").should('be.visible')                // Asserting Français (Canada) text is present and fr language is pre selected 
        //.and('exist').and('contain','Français').click().wait(1000)                                                         
        //cy.get('.MuiListItemText-primary').contains("English (Canada)").should('be.visible').and('exist').and('contain','English').click().wait(2000)         // Changing portal language to English
        cy.get('body').click().wait(2000)
        cy.get('.MuiToolbar-root > .MuiTypography-root', { timeout: 100000 }).contains("Home").should('be.visible').and('exist').and('contain','Home')          // Asserting of Home text is present on home page
        cy.get('.MuiTypography-h4').contains("Shortcuts").should('be.visible').and('exist').and('contain','Shortcuts')                                          // Asserting of Shortcuts text is present on home page        
        cy.get('.MuiIconButton-colorInherit').click({force: true})                                                                                              // Click to menu icon
        cy.get(':nth-child(7) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').contains("Customer Center").should('be.visible')            // Asserting of Customer Center li is present on side menu
        .and('exist').and('contain','Customer').click().wait(1000)        
        cy.get('[title="Estimator"] > .MuiListItemText-root > .MuiTypography-root').contains("Estimator").should('be.visible')                                  // Asserting of Estimator li is present on side menu
        .and('exist').and('contain','Estimator').click()
        cy.get('.css-budqf6', { timeout: 50000 }).contains('Add section').should('be.visible')                                                                  // Asserting Add color btn is visible
        cy.get('button svg path[d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"]').click({force: true})                                       // Getting side menu back buttton          
        cy.get('[data-tour="order.action.new"]').click()                                                                                                        // Adding fresh order
        
        cy.get('.MuiDialogActions-root > :nth-child(2)').click().wait(500)                                                                                      // Tapping to OK btn
        cy.get('.css-budqf6').contains('Add section').click({force: true}).wait(500)                                                                            // Tapping to Add color btn
        cy.get('.MuiBox-root > .MuiGrid-container > .MuiGrid-root > .MuiButtonBase-root').click().wait(500)                                                     // Tapping to Add a new product btn

        cy.get(':nth-child(1) > .MuiCardContent-root > .MuiTypography-h5').contains("Molded").should('be.visible')
        cy.get(':nth-child(1) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Doors").should('be.visible')
        cy.get(':nth-child(1) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Drawer Fronts").should('be.visible')
        cy.get(':nth-child(1) > .MuiCardContent-root > .MuiList-root > :nth-child(3) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Mullions Doors").should('be.visible')

        cy.get(':nth-child(3) > .MuiCardContent-root > .MuiTypography-h5').contains("Edged").should('be.visible')
        cy.get(':nth-child(3) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Doors (Edged)").should('be.visible')
        cy.get(':nth-child(3) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Mullions Doors (Edged)").should('be.visible')

        cy.get(':nth-child(5) > .MuiCardContent-root > .MuiTypography-h5').contains("Accessories").should('be.visible')
        cy.get(':nth-child(5) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Edge Banding").should('be.visible')
        cy.get(':nth-child(5) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Heat Deflectors and Protectors").should('be.visible')
        cy.get(':nth-child(5) > .MuiCardContent-root > .MuiList-root > :nth-child(3) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Moldings").should('be.visible')
        cy.get(':nth-child(5) > .MuiCardContent-root > .MuiList-root > :nth-child(4) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Preglued Edge Banding").should('be.visible')
        cy.get('.MuiList-root > :nth-child(5) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Tambour Roll-ups").should('be.visible')

        cy.get(':nth-child(2) > .MuiCardContent-root > .MuiTypography-h5').contains("5-pieces").should('be.visible')
        cy.get(':nth-child(2) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Doors (5 pieces)").should('be.visible')
        cy.get(':nth-child(2) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Drawer Fronts (5 pieces)").should('be.visible')
        cy.get(':nth-child(2) > .MuiCardContent-root > .MuiList-root > :nth-child(3) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Mullions Doors (5 pieces)").should('be.visible')

        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiTypography-h5').contains("Boards").should('be.visible')
        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Boards").should('be.visible')
        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Preglued Thermoplastic Sheets").should('be.visible')
        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(3) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Thermolam").should('be.visible')
        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(4) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .contains("Thermoplastic Sheets").should('be.visible')

        cy.get(':nth-child(1) > .MuiCardContent-root > .MuiList-root > :nth-child(3) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')      // Select Mullions Doors 
        .click().wait(500)
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(500)                                                                         // Tapping to Submit btn
        cy.get('.MuiAlert-message').contains('Please validate the form before submitting the order').should('be.visible')                                       // Assertion for validation message
        cy.get('.MuiAccordionSummary-root').click().wait(500)                                                                                                   // Tapping to Accordian 
        //cy.get('.jss23 > .MuiButtonBase-root').click().wait(500)
        cy.get('button svg path[d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"]').click({force: true})                                       // Getting side menu back buttton

        //===================================================>>  // Getting elements for Local Testing  <<===============================================================================================
        
        //                                                        Submitting Order with Required values
        //                                                           >>>>> Adding form data <<<<<                
        
        cy.contains('label', 'Your full name').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()                   // Order Name Validation of helper text
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');    
        cy.contains('label', 'Your email address').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()               // Eamil Validation of helper text
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Value is not a valid email address');
        cy.contains('label', 'Your PO').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()                          // PO Validation of helper text 
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');                                                                    

        cy.contains('label', 'Your full name').next().find('input').type('Automate Mullions Doors Ctg')                                                         // Name
        cy.contains('label', 'Your email address').next().find('input').type('AutomateMullionsDoors#gmail.com')                                                 // Email
        cy.contains('label', 'Your email address').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()               // Eamil Validation of helper text
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Value is not a valid email address');
        cy.contains('label', 'Your email address').next().find('input').clear()                                                                                 // Clear the invalid input        
        cy.contains('label', 'Your email address').next().find('input').type('AutomateMullionsDoors@gmail.com')                                                 // Email with valid input                  
        cy.contains('label', 'Your PO').next().find('input').type('Doors 11')                                                                                   // Your PO

        cy.contains('label', 'Their PO').next().find('input').type('XYZ 1', { force: true })                                                                    // Their PO
        cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click({force: true}).wait(1000)                                                                 // Tapping to Date icon        
        cy.get('.MuiCalendarPicker-root').find('button[role="gridcell"]')                                                                                       // Locate date buttons inside the calendar
            .each(($el) => {
                if (!$el.prop('disabled')) {                                                                                                                    // Check if the date is enabled                
                cy.wrap($el).click().wait(500)                                                                                                                  // Click the first enabled date                
                return false                                                                                                                                    // Break the loop after selecting the date
                }
            });        
            cy.get('.css-x7mp9n').first().type('ABC 1', { force: true })                                                                                        // Note            
            const filePath = 'images/sample-image.png';                                                                                                         // Define the file path relative to the cypress/fixtures directory            
            cy.get('input[type="file"]#estimator-image-input').attachFile(filePath)                                                                             // Upload the file using the input element
            .then(input => {                
            expect(input[0].files[0].name).to.equal('sample-image.png');                                                                                        // Verify that the file is uploaded
            });    
            cy.get(':nth-child(1) > .MuiFormControlLabel-root > .MuiTypography-root > .css-zfsz4h').click()                                                     // Tapping to inch/mm

        //                                                      >>>>> Adding Mullions Doors category table data  <<<<<        

        //                                                           >>>>> Removing section flow by three dots <<<<<

        cy.get('button svg path[d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z').click({force: true})                                       // Getting three dots by svg
        cy.contains('li', 'No section name').should('be.visible').click({force: true})                                                                          // click delete section btn
        cy.contains('button', 'ok').should('be.visible').click();                                                                                               // click ok btn to remove section

        //                                                           >>>>> Removing section flow by section name cross btn <<<<<

        cy.get('.css-budqf6').contains('Add section').click({force: true}).wait(1000)                                                                           // Adding section again
        cy.get('.MuiCollapse-root.css-1cijpyl').should('be.visible').click();
        cy.contains('button', 'ok').should('be.visible').click();                                                                                               // click ok btn to remove section
        cy.get('.css-budqf6').contains('Add section').click({force: true}).wait(1000)                                                                           // Adding section again
        cy.contains('label', 'Section name').next().find('input').should('be.visible').type('Doors Section');                                                   // Section Name        
        cy.get('.MuiBox-root > .MuiGrid-container > .MuiGrid-root > .MuiButtonBase-root').click().wait(500)                                                     // Tapping to Add a new product btn
        cy.get(':nth-child(1) > .MuiCardContent-root > .MuiList-root > :nth-child(3) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')      // Tapping to Mullions Doors test 
        .click().wait(500)                   

        cy.get('table tbody tr.MuiTableRow-root', { timeout: 10000 }).should('have.length.greaterThan', 0).then(($rowsBefore) => {
        const initialRowCount = $rowsBefore.length;
        cy.wrap($rowsBefore[0]).within(() => {
        cy.get('td.MuiTableCell-root').each(($td) => {
            cy.wrap($td).invoke('text').then((tdValue) => {
            tdValue = tdValue.trim();

                if (tdValue === '1.') {
                    cy.log('Filling the first row with TD=1');              
                    cy.get('td.MuiTableCell-root').eq(3).find('input').type('abcs', { force: true });                                                           // invalid input width
                    cy.get('td.MuiTableCell-root').eq(3).find('input').clear()                                                                                  // Clear input width    
                    cy.get('td.MuiTableCell-root').eq(3).find('input').type('45', { force: true });                                                             // Valid input width
                    cy.get('td.MuiTableCell-root').eq(4).find('input').type('abcs', { force: true });                                                           // invalid input height
                    cy.get('td.MuiTableCell-root').eq(4).find('input').clear()                                                                                  // Clear input height    
                    cy.get('td.MuiTableCell-root').eq(4).find('input').type('58', { force: true });                                                             // Valid input height
                    cy.get('td.MuiTableCell-root').eq(5).find('.MuiSelect-select').click({ force: true });                                                      // thickness
                    cy.get('[data-value="0.75"]').click()                                                                                                       // thickness
                    cy.get('td.MuiTableCell-root').eq(6).find('.MuiSelect-select').click({ force: true });                                                      // grain                
                    cy.get('[data-value="H"]').click()                                                                                                          // grain        
                    cy.get('td.MuiTableCell-root').eq(7).find('.MuiSelect-select').click({ force: true });                                                      // stiles and rails                
                    cy.get('[data-value="LG"]').click()                                                                                                         // stiles and rails         
                    cy.get('td.MuiTableCell-root').eq(8).find('input').type('5001', { force: true });                                                           // Modele        
                    cy.get('td.MuiTableCell-root').eq(9).find('input').type('F', { force: true });                                                              // ext profile    
                    cy.get('td.MuiTableCell-root').eq(10).find('input').type('6', { force: true });                                                             // Openings                
                    cy.get('td.MuiTableCell-root').eq(11).find('.MuiSelect-select').click({ force: true });                                                     // Type
                    cy.get('[data-value="S"] > .css-sc6tei').click()                                                                                            // Type
                    cy.get('td.MuiTableCell-root').eq(12).find('.MuiSelect-select').click({ force: true });                                                     // qty
                    cy.get('[data-value="3"]').click()                                                                                                          // qty
                    cy.get('td.MuiTableCell-root').eq(13).find('.MuiSelect-select').click({ force: true });                                                     // postiton
                    cy.get('[data-value="B"] > .css-sc6tei').click()                                                                                            // postiton
                    cy.get(':nth-child(15) > .MuiFormControl-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click({ force: true })                     // Dowels 
                    cy.get('td.MuiTableCell-root').eq(15).find('input').type('209', { force: true });                                                           // color                    
                    cy.get('td.MuiTableCell-root').eq(16).find('input').type('555', { force: true });                                                           // Sb Color
                    //cy.get(':nth-child(11) > .MuiFormControl-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click({ force: true })                   // QP
                }
            });
        });
        });
        cy.get('[colspan="19"] > .MuiButtonBase-root').click().wait(2000)                                                                                       // Adding second item
        cy.get('table tbody tr.MuiTableRow-root', { timeout: 10000 }).then(($rowsAfter) => {
        const newRow = $rowsAfter[$rowsAfter.length - 2]; // Get the last (newly added) row
        cy.wrap(newRow).within(() => {
        cy.get('td.MuiTableCell-root').each(($td) => {
        cy.wrap($td).invoke('text').then((tdValue) => {
        tdValue = tdValue.trim();
                if (tdValue === '2.') {
                    cy.log('Filling the new row with TD=2');                   
                    cy.get('td.MuiTableCell-root').eq(2).find('input').type('45', { force: true });                                                             // Qty                                
                    cy.get('td.MuiTableCell-root').eq(3).find('input').type('58', { force: true });                                                             // width
                    cy.get('td.MuiTableCell-root').eq(4).find('input').type('58', { force: true });                                                             // height
                    cy.get('td.MuiTableCell-root').eq(6).find('div.MuiSelect-select').should('have.text', 'H')                                                  // Assertioan of grain input
                    cy.get('td.MuiTableCell-root').eq(7).find('div.MuiSelect-select').should('have.text', 'LG')                                                 // Assertioan of stiles and rails input
                    cy.get('td.MuiTableCell-root').eq(8).find('input.MuiAutocomplete-input').should('have.value', '5001')                                       // Assertion of Modele    
                    cy.get('td.MuiTableCell-root').eq(9).find('input.MuiAutocomplete-input').should('have.value', 'F')                                          // Assertion of ext profile                            
                    cy.get('td.MuiTableCell-root').eq(10).find('input.MuiAutocomplete-input').should('have.value', '6')                                         // Assertion of Openings        
                    cy.get('td.MuiTableCell-root').eq(11).find('div.MuiSelect-select').should('have.text', 'S')                                                 // Assertion of Type        
                    cy.get('td.MuiTableCell-root').eq(12).find('div.MuiSelect-select').should('have.text', '3')                                                 // Assertion  of qty        
                    cy.get('td.MuiTableCell-root').eq(13).find('div.MuiSelect-select').should('have.text', 'B')                                                 // Assertion of postiton            
                    cy.get('td.MuiTableCell-root').eq(14).find('input[type="checkbox"]').should('be.checked')                                                   // Assertion of Dowels                     
                    cy.get('td.MuiTableCell-root').eq(15).find('input.MuiAutocomplete-input').should('have.value', '209 - Nutmeg')                              // Assertion of color                                             
                }        
            });
        });
        });
        })
        })
        cy.get('[aria-label="Save"] > .MuiButtonBase-root').click().wait(10000)                                                                                 // Tapping to save order btn

        //                                                                  Moving to web orders page
        /*
        cy.get('.MuiIconButton-colorInherit').click({force: true})                                                                                              // Click to menu icon
        cy.get('[title="Web Orders"]').click().wait(1000)                                                                                                       // Tapping to web Orders
        cy.get(':nth-child(1) > .MuiListItemText-root > .MuiListItemText-primary > .MuiTypography-root > :nth-child(1) > span')
        .should('contain','Automate Mullions Doors Ctg').click().wait(500)                                                                                      // Pick the first saved order by name and click it
        cy.contains('button', 'Add a new product', { timeout: 100000 }).should('be.visible')         
        */
        cy.contains('label', 'Your full name').next().find('input').clear({force: true})                                                                        // Clear order name
        cy.get('.css-1mrqld1').click().wait(500)                                                                                                                // Tapping to Accordian 
        cy.contains('label', 'Your full name').next().find('input').type('Automate Molded(Mullions Doors) 3')                                                   // Update order name 
        cy.contains('label', 'Your email address').next().find('input').clear()                                                                                 // Clear order Email
        cy.contains('label', 'Your email address').next().find('input').type('AutomateMD2@mail.com')                                                            // Update Email
        cy.contains('label', 'Your PO').next().find('input').clear()                                                                                            // Clear Your PO
        cy.contains('label', 'Your PO').next().find('input').type('MullionsDoors 100')                                                                          // Your PO
        cy.get('.css-x7mp9n').first().clear()                                                                                                                   // Clear Note
        cy.get('.css-x7mp9n').first().type('ABC 1', { force: true })                                                                                            // Note
        cy.get(':nth-child(1) > .MuiFormControlLabel-root > .MuiTypography-root > .css-zfsz4h').click()                                                         // Tapping to inch/mm 
        cy.get('.css-1mrqld1').click().wait(500)                                                                                                                // Tapping to Accordian 
               
        //                                                                          Updating table data

        cy.get('table tbody tr.MuiTableRow-root', { timeout: 10000 }).should('have.length.greaterThan', 0).then(($rowsBefore) => {
        const initialRowCount = $rowsBefore.length;
        cy.wrap($rowsBefore[0]).within(() => {
        cy.get('td.MuiTableCell-root').each(($td) => {
            cy.wrap($td).invoke('text').then((tdValue) => {
            tdValue = tdValue.trim();
                if (tdValue === '1.') {
                    cy.log('Filling the first row with TD=1');              
                    cy.get('td.MuiTableCell-root').eq(3).find('input').clear()                                                                                  // Clear input width    
                    cy.get('td.MuiTableCell-root').eq(3).find('input').type('12', { force: true });                                                             // Valid input width
                    cy.get('td.MuiTableCell-root').eq(4).find('input').clear()                                                                                  // Clear input height    
                    cy.get('td.MuiTableCell-root').eq(4).find('input').type('58', { force: true });                                                             // Valid input height
                    cy.get('td.MuiTableCell-root').eq(6).find('.MuiSelect-select').click({ force: true });                                                      // grain                
                    cy.get('[data-value="V"]').click()                                                                                                          // grain        
                    cy.get('td.MuiTableCell-root').eq(7).find('.MuiSelect-select').click({ force: true });                                                      // stiles and rails                
                    cy.get('[data-value="VG"]').click()                                                                                                         // stiles and rails         
                    cy.get('td.MuiTableCell-root').eq(8).find('input').clear()                                                                                  // Clear Modele  
                    cy.get('td.MuiTableCell-root').eq(8).find('input').type('22022', { force: true });                                                          // Modele  
                    cy.get('td.MuiTableCell-root').eq(9).find('input').clear()                                                                                  // Clear ext profile  
                    cy.get('td.MuiTableCell-root').eq(9).find('input').type('J', { force: true });                                                              // ext profile    
                    cy.get('td.MuiTableCell-root').eq(10).find('input').clear()                                                                                 // Clear Openings 
                    cy.get('td.MuiTableCell-root').eq(10).find('input').type('10', { force: true });                                                            // Openings                
                    cy.get('td.MuiTableCell-root').eq(12).find('.MuiSelect-select').click({ force: true });                                                     // qty
                    cy.get('[data-value="2"]').click()                                                                                                          // qty
                    cy.get('td.MuiTableCell-root').eq(13).find('.MuiSelect-select').click({ force: true });                                                     // postiton
                    cy.get('[data-value="D"] > .css-sc6tei').click()                                                                                            // postiton
                    cy.get('td.MuiTableCell-root').eq(15).find('input').type('12', { force: true });                                                            // color                    
                    cy.get('td.MuiTableCell-root').eq(16).find('input').type('555', { force: true });                                                           // Sb Color
                }
            });
        });
        });
        cy.get('table tbody tr.MuiTableRow-root', { timeout: 10000 }).then(($rowsAfter) => {
        const newRow = $rowsAfter[$rowsAfter.length - 2]; // Get the last (newly added) row
        cy.wrap(newRow).within(() => {
        cy.get('td.MuiTableCell-root').each(($td) => {
        cy.wrap($td).invoke('text').then((tdValue) => {
        tdValue = tdValue.trim();
                if (tdValue === '2.') {
                    cy.log('Filling the new row with TD=2');                                       
                    cy.get('td.MuiTableCell-root').eq(3).find('input').clear()                                                                                  // Clear input width    
                    cy.get('td.MuiTableCell-root').eq(3).find('input').type('96', { force: true });                                                             // Valid input width
                    cy.get('td.MuiTableCell-root').eq(4).find('input').clear()                                                                                  // Clear input height    
                    cy.get('td.MuiTableCell-root').eq(4).find('input').type('58', { force: true });                                                             // Valid input height
                    cy.get('td.MuiTableCell-root').eq(6).find('.MuiSelect-select').click({ force: true });                                                      // grain                
                    cy.get('[data-value="V"]').click()                                                                                                          // grain        
                    cy.get('td.MuiTableCell-root').eq(7).find('.MuiSelect-select').click({ force: true });                                                      // stiles and rails                
                    cy.get('[data-value="VG"]').click()                                                                                                         // stiles and rails         
                    cy.get('td.MuiTableCell-root').eq(8).find('input').clear()                                                                                  // Clear Modele  
                    cy.get('td.MuiTableCell-root').eq(8).find('input').type('22724', { force: true });                                                          // Modele  
                    cy.get('td.MuiTableCell-root').eq(9).find('input').clear()                                                                                  // Clear ext profile  
                    cy.get('td.MuiTableCell-root').eq(9).find('input').type('C', { force: true });                                                              // ext profile    
                    cy.get('td.MuiTableCell-root').eq(10).find('input').clear()                                                                                 // Clear Openings 
                    cy.get('td.MuiTableCell-root').eq(10).find('input').type('12', { force: true });                                                            // Openings                
                    cy.get('td.MuiTableCell-root').eq(12).find('.MuiSelect-select').click({ force: true });                                                     // qty
                    cy.get('[data-value="2"]').click()                                                                                                          // qty
                    cy.get('td.MuiTableCell-root').eq(13).find('.MuiSelect-select').click({ force: true });                                                     // postiton
                    cy.get('[data-value="G"] > .css-sc6tei').click()                                                                                            // postiton
                    cy.get('td.MuiTableCell-root').eq(15).find('input').type('1003', { force: true });                                                          // color                    
                    cy.get('td.MuiTableCell-root').eq(16).find('input').type('1003', { force: true });                                                          // Sb Color               
                }        
            });
        });
        });
        })
        })
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(5000)                                                                        // Tapping to Submit btn
        

        //=====================================================================>>  Getting elements for Git CI/CD Pipeline  <<===============================================================================================
        /*
        cy.get('#\\:ru\\:-helper-text').should('have.text', 'Required value').should('be.visible')                                                              // Order Name Validation of helper text
        cy.get('#\\:r12\\:-helper-text').contains('Value is not a valid email address').should('be.visible')                                                    // Eamil Validation of helper text
        cy.get('#\\:r18\\:-helper-text').contains('Required value').should('be.visible')                                                                        // PO Validation of helper text

        cy.get('#\\:ru\\:').type('Automate Mullions Doors Category')                                                                                            // Name
        cy.get('#\\:r12\\:').type('AutomateMullionsDoors#gmail.com', { force: true })                                                                           // Email
        cy.get('#\\:r12\\:-helper-text').contains('Value is not a valid email address').should('be.visible')                                                    // Eamil Validation of helper text        
        cy.get('#\\:r12\\:').clear()                                                                                                                            // Clear the invalid input
        cy.get('#\\:r12\\:').type('AutomateMullionsDoors@gmail.com', { force: true })                                                                           // Email with valid input   
        cy.get('#\\:r18\\:').type('MullionsDoors 45', { force: true })                                                                                          // Your PO
        cy.get('#\\:r18\\:').type('Mullions Doors 11', { force: true })                                                                                         // Your PO
        cy.get('#\\:r1a\\:').type('XYZ 1', { force: true })                                                                                                     // Their PO  
        cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click({force: true}).wait(2000)                                                                 // Tapping to Date icon        
        cy.get('.MuiCalendarPicker-root').find('button[role="gridcell"]')                                                                                       // Locate date buttons inside the calendar
            .each(($el) => {
                if (!$el.prop('disabled')) {                                                                                                                    // Check if the date is enabled                
                cy.wrap($el).click().wait(500)                                                                                                                  // Click the first enabled date                
                return false                                                                                                                                    // Break the loop after selecting the date
                }
            });        
        cy.get('.css-x7mp9n').first().type('ABC 1', { force: true })                                                                                            // Note
            const filePath = 'images/sample-image.png';                                                                                                         // Define the file path relative to the cypress/fixtures directory            
            cy.get('input[type="file"]#estimator-image-input').attachFile(filePath)                                                                             // Upload the file using the input element
            .then(input => {                
            expect(input[0].files[0].name).to.equal('sample-image.png');                                                                                        // Verify that the file is uploaded
            });    
        cy.get(':nth-child(1) > .MuiFormControlLabel-root > .MuiTypography-root > .css-zfsz4h').click()                                                         // Tapping to inch/mm
        
        //                                                      >>>>>  Adding Mullions Doors category table data  <<<<<        

        cy.get('#\\:r1e\\:').type('Mullions Doors Section')                                                                                                     // Section Name      
        cy.get('#\\:r1g\\:').type('Automating Mullions Doors Section')                                                                                          // Section Note
        cy.get('.MuiAccordionSummary-root').click().wait(500)                                                                                                   // Opening the Accordian to show table values
        //cy.get('#\\:r1j\\:').type('12')                                                                                                                         // Qty
        cy.get('[colspan="19"] > .MuiButtonBase-root').scrollIntoView()                                                                                         // Scrolling the page down to view data
        cy.get('#\\:r1l\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text for no input
        cy.get('#\\:r1l\\:').type('abcs')                                                                                                                       // invalid input width
        cy.get('#\\:r1l\\:-helper-text').contains('Not a valid measurement').should('be.visible')                                                               // Validation of helper text for invalid input
        cy.get('#\\:r1l\\:').clear()                                                                                                                            // Clear input width    
        cy.get('#\\:r1l\\:').type('45')                                                                                                                         // Valid input width    
        cy.get('#\\:r1n\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text        
        cy.get('#\\:r1n\\:').type('abcs')                                                                                                                       // invalid input height
        cy.get('#\\:r1n\\:-helper-text').contains('Not a valid measurement').should('be.visible')                                                               // Validation of helper text for invalid input
        cy.get('#\\:r1n\\:').clear()                                                                                                                            // Clear input height    
        cy.get('#\\:r1n\\:').type('100')                                                                                                                        // Valid input height        
        cy.get('#\\:r1r\\:').click()                                                                                                                            // grain
        cy.get('[data-value="H"]').click()                                                                                                                      // grain
        cy.get('#\\:r1t\\:').click()                                                                                                                            // stiles and rails
        cy.get('[data-value="VG"]').click()                                                                                                                     // stiles and rails 
        cy.get('#\\:r20\\:-helper-text').contains('Invalid value').should('be.visible')                                                                         // Validation of helper text
        cy.get('#\\:r1u\\:').type('22024')                                                                                                                      // Modele
        cy.get('#\\:r21\\:').type('H')                                                                                                                          // ext profile
        cy.get('#\\:r26\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text
        cy.get('#\\:r24\\:').type('6')                                                                                                                          // Openings
        cy.get('#\\:r28\\:').click()                                                                                                                            // type
        cy.get('[data-value="S"]').click()                                                                                                                      // type
        cy.get('#\\:r2a\\:').click()                                                                                                                            // qty
        cy.get('[data-value="2"]').click()                                                                                                                      // qty
        cy.get('#\\:r2c\\:').click().wait(500)                                                                                                                  // position
        cy.get('[data-value="B"]').click()                                                                                                                      // position  
        cy.get('.MuiFormControl-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click()                                                                 // Dowels
        cy.get('#\\:r2f\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text    
        cy.get('#\\:r2d\\:').type('999')                                                                                                                        // color

        cy.get('[colspan="19"] > .MuiButtonBase-root').click().wait(500)                                                                                        // Adding second item
        cy.get('#\\:r2u\\:').type('14')                                                                                                                         // Qty
        cy.get('#\\:r30\\:').type('4257')                                                                                                                       // width
        cy.get('#\\:r32\\:').type('4257 ')                                                                                                                      // height
        cy.get('#\\:r36\\:').should('contain', 'H')                                                                                                             // Assertioan of grain input
        cy.get('#\\:r38\\:').should('contain', 'VG')                                                                                                            // Assertioan of stiles and rails input
        cy.get('#\\:r39\\:').should('have.value', '22024')                                                                                                      // Assertion of Modele    
        cy.get('#\\:r3c\\:').should('have.value', 'H')                                                                                                          // Assertion of ext profile
        cy.get('#\\:r3f\\:').should('have.value', '6')                                                                                                          // Assertion for Openings
        cy.get('#\\:r3j\\:').should('contain', 'S')                                                                                                             // Assertion for Type        
        cy.get('#\\:r3l\\:').should('contain', '2')                                                                                                             // Assertion for qty        
        cy.get('#\\:r3n\\:').should('contain', 'B')                                                                                                             // Assertion for postiton            
        cy.get(':nth-child(3) > :nth-child(15) > .MuiFormControl-root > .MuiButtonBase-root > .PrivateSwitchBase-input').should('be.checked')                   // Assertion for Dowels
        cy.get('#\\:r3o\\:').should('have.value', '999 - MDF')                                                                                                  // Assertion of color                
        cy.get('[aria-label="Save"] > .MuiButtonBase-root').click().wait(5000)                                                                                  // Tapping to save btn
        cy.get('.headerActions > .MuiButton-contained').click().wait(5000)                                                                                      // Print order  
        cy.get('#\\:rq\\: > .MuiButtonBase-root').click().wait(500)                                                                                             // Closing print view

        cy.get('#\\:ru\\:').clear()                                                                                                                             // Clear order name 
        cy.get('.css-1mrqld1').click().wait(500)                                                                                                                // Closing the Accordian 
        cy.get('#\\:ru\\:').type('Automate Molded(Mullions Doors) 3')                                                                                           // Update order name      
        cy.get('#\\:r12\\:').clear()                                                                                                                            // Clear order Email 
        cy.get('#\\:r12\\:').type('AutomateMD2@mail.com', { force: true })                                                                                      // Update Email
        cy.get('#\\:r18\\:').clear()                                                                                                                            // Clear Your PO 
        cy.get('#\\:r18\\:').type('MullionsDoors 100', { force: true })                                                                                         // Update Your PO        
        cy.get(':nth-child(1) > .MuiFormControlLabel-root > .MuiTypography-root > .css-zfsz4h').click()                                                         // Tapping to inch/mm        
        // Updating table data
        cy.get('.css-1mrqld1').click().wait(5000)                                                                                                               // OPening the Accordian
        cy.get('[colspan="19"] > .MuiButtonBase-root').scrollIntoView()                                                                                         // Scrolling the page down and remove the second row
        cy.get('#\\:r5h\\:-button').click().wait(500)                                                                                                           // Tapping to three dots                                       
        cy.get('#\\:r5h\\:-menu > .MuiPaper-root > .MuiList-root > :nth-child(5)').click()                                                                      // Remove the row                                            
        cy.get('#\\:r6v\\:').clear()                                                                                                                            // Clear input width    
        cy.get('#\\:r6v\\:').type('145')                                                                                                                        // Valid input width
        cy.get('#\\:r71\\:').clear()                                                                                                                            // Clear input Height    
        cy.get('#\\:r71\\:').type('2312')                                                                                                                       // Valid input Height
        cy.get('#\\:r75\\:').click()                                                                                                                            // Grain
        cy.get('[data-value="V"]').click()                                                                                                                      // grain
        cy.get('#\\:r77\\:').click()                                                                                                                            // stiles
        cy.get('[data-value="LG"]').click()                                                                                                                     // stiles
        cy.get('#\\:r78\\:').type('2006')                                                                                                                       // Modele
        cy.get('#\\:r7b\\:').type('C')                                                                                                                          // ext profile
        cy.get('#\\:r7e\\:').type('10')                                                                                                                         // Openings
        cy.get('#\\:r7i\\:').click()                                                                                                                            // type
        cy.get('[data-value="T"]').click()                                                                                                                      // type
        cy.get('#\\:r7k\\:').click()                                                                                                                            // qty
        cy.get('[data-value="3"]').click()                                                                                                                      // qty
        cy.get('#\\:r7m\\:').click()                                                                                                                            // position
        cy.get('[data-value="H"]').click()                                                                                                                      // position  
        cy.get(':nth-child(1) > :nth-child(15) > .MuiFormControl-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click()                                // Dowel                                // Dowels 
        cy.get('#\\:r7n\\:').type('271')                                                                                                                        // color
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click()                                                                                   // Tapping to Submit btn
        cy.get('.css-1ubxkj1 > :nth-child(1)', { timeout: 5000 }).click().wait(10000)                                                                           // Print order    
        cy.get('#\\:rq\\: > .MuiButtonBase-root').click().wait(500)                                                                                             // Closing print view         
        */
    })
})






  