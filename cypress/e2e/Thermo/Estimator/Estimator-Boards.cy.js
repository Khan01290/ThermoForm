
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
})

describe('Estimator Order Creation/Edition/Submission For Edged Category Suit', function() {

    it.skip("Verify Order created/submitted Successfully - For Doors Category -", function()  {

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
        //cy.get(':nth-child(1) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click()   // Tapping to Doors test 
        cy.get(':nth-child(3) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root').click().wait(500)                                  // Select Doors (Edged) 
        
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(500)                                                                         // Tapping to Submit btn
        cy.get('.MuiAccordionSummary-root').click().wait(500)                                                                                                   // Tapping to Accordian 
        cy.get('#\\:rt\\:-helper-text').contains('Required value').should('be.visible')                                                                         // Validation of helper text
        cy.get('#\\:r11\\:-helper-text').contains('Value is not a valid email address').should('be.visible')                                                    // Validation of helper text
        cy.get('#\\:r17\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text    
        cy.get('#\\:rt\\:').type('Automate Doors (Edged) Category')                                                                                             // Name      
        cy.get('#\\:r11\\:').type('Automatedoorsedged@gmail.com', { force: true })                                                                              // Email        
        cy.get('#\\:r17\\:').type('DoorsEdged 45', { force: true })                                                                                             // Your PO
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

        //cy.get('.MuiAccordionSummary-root').click()                                                                                                           // Tapping to Accordian
        cy.get('#\\:r1d\\:').type('Doors (Edged) Section')                                                                                                      // Section Name      
        cy.get('#\\:r1f\\:').type('Automating Edged Category with Doors (Edged Section')                                                                        // Section Note        
        
        //Doors (Edged)
        cy.get('.MuiAccordionSummary-root').click()                                                                                                             // Select Doors (Edged)     
        cy.get('#\\:r1k\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text 
        cy.get('#\\:r1k\\:').type('15')                                                                                                                         // Width
        cy.get('#\\:r1m\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text
        cy.get('#\\:r1m\\:').type('7545')                                                                                                                       // Height
        cy.get('#\\:r1q\\:').click()                                                                                                                            // Grain
        cy.get('[data-value="H"]').click()                                                                                                                      // Grain
        cy.get('#\\:r1s\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text
        cy.get('#\\:r1s\\:').click()                                                                                                                            // Edgeband
        cy.get('[data-value="70"]').click()                                                                                                                     // Edgeband
        cy.get('#\\:r1u\\:').click()                                                                                                                            // type
        cy.get('[data-value="S"]').click()                                                                                                                      // type
        cy.get('#\\:r20\\:').click()                                                                                                                            // qty
        cy.get('[data-value="2"]').click()                                                                                                                      // qty
        cy.get('#\\:r22\\:').click()                                                                                                                            // position
        cy.get('[data-value="B"]').click()                                                                                                                      // position  
        cy.get('.MuiFormControl-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click()                                                                 // Dowels      
        cy.get('#\\:r25\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text
        cy.get('#\\:r23\\:').type('5310')                                                                                                                       // color
        
        cy.get('[colspan="16"] > .MuiButtonBase-root').click()                                                                                                  // Adding second row                
        cy.get('#\\:r2m\\:').type('14')                                                                                                                         // Width
        cy.get('#\\:r2o\\:').type('4257')                                                                                                                       // Height
        cy.get('#\\:r2s\\:').should('contain', 'H')                                                                                                             // Assertion for grain 
        cy.get('#\\:r2u\\:').should('contain', '70')                                                                                                            // Assertion for Edgeband     
        cy.get('#\\:r30\\:').should('contain', 'S')                                                                                                             // Assertion for Type        
        cy.get('#\\:r32\\:').should('contain', '2')                                                                                                             // Assertion for qty        
        cy.get('#\\:r34\\:').should('contain', 'B')                                                                                                             // Assertion for postiton            
        cy.get(':nth-child(3) > :nth-child(12) > .MuiFormControl-root > .MuiButtonBase-root > .PrivateSwitchBase-input').should('be.checked')                   // Assertion for Dowels                     
        cy.get('#\\:r35\\:').should('have.value', '5310 - Dark Blue')                                                                                           // Assertion for color    
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
        cy.get('[type="submit"]').contains("Next").should('be.visible').and('exist').and('not.be.enabled').wait(500)                                            // Asssertion of Next btn is disabled        
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
        cy.get('[data-tour="order.action.new"]').click().wait(500)                                                                                              // Adding fresh order        
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
        cy.get(':nth-child(3) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root').click().wait(500)                                  // Select Mullions Doors (Edged) 
        
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(500)                                                                         // Tapping to Submit btn
        cy.get('.MuiAccordionSummary-root').click().wait(500)                                                                                                   // Tapping to Accordian 
        cy.get('#\\:rt\\:-helper-text').contains('Required value').should('be.visible')                                                                         // Validation of helper text
        cy.get('#\\:r11\\:-helper-text').contains('Value is not a valid email address').should('be.visible')                                                    // Validation of helper text
        cy.get('#\\:r17\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text    
        cy.get('#\\:rt\\:').type('Automate Mullions Doors (Edged) Category')                                                                                    // Name      
        cy.get('#\\:r11\\:').type('AutomateMullionsDoorsEdged@gmail.com', { force: true })                                                                      // Email        
        cy.get('#\\:r17\\:').type('MullionsDoors(Edged) 745', { force: true })                                                                                  // Your PO
        cy.get('#\\:r19\\:').type('XYZ 1', { force: true })                                                                                                     // Their PO        
        cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click()                                                                                         // Tapping to Date icon        
        cy.get('.MuiCalendarPicker-root').find('button[role="gridcell"]')                                                                                       // Locate date buttons inside the calendar
            .each(($el) => {
                if (!$el.prop('disabled')) {                                                                                                                    // Check if the date is enabled                
                cy.wrap($el).click()                                                                                                                            // Click the first enabled date                
                return false                                                                                                                                    // Break the loop after selecting the date
                }
            });        
        cy.get('.css-x7mp9n').first().type('ABC 1', { force: true })                                                                                            // Adding Note

            const filePath = 'images/sample-image.png';                                                                                                         // Define the file path relative to the cypress/fixtures directory            
            cy.get('input[type="file"]#estimator-image-input').attachFile(filePath)                                                                             // Upload the file using the input element
            .then(input => {                
            expect(input[0].files[0].name).to.equal('sample-image.png');                                                                                        // Verify that the file is uploaded
            });    
        //cy.get(':nth-child(1) > .MuiFormControlLabel-root > .MuiTypography-root > .css-zfsz4h').click()                                                       // Tapping to inch
        cy.get(':nth-child(2) > .MuiFormControlLabel-root > .MuiSwitch-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click()                          // Tapping to mm

        //cy.get('.MuiAccordionSummary-root').click()                                                                                                           // Tapping to Accordian
        cy.get('#\\:r1d\\:').type('Mullions Doors (Edged) Section')                                                                                             // Section Name      
        cy.get('#\\:r1f\\:').type('Automating Edged Category with Mullions Doors (Edged Section')                                                               // Section Note        
        
        //Mullions Doors (Edged)
        cy.get('.MuiAccordionSummary-root').click()                                                                                                             // Select Mullions Doors (Edged)     
        cy.get('#\\:r1k\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text 
        cy.get('#\\:r1k\\:').type('25')                                                                                                                         // Width
        cy.get('#\\:r1m\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text 
        cy.get('#\\:r1m\\:').type('585')                                                                                                                        // Height
        cy.get('#\\:r1q\\:').click()                                                                                                                            // Grain
        cy.get('[data-value="V"]').click()                                                                                                                      // Grain
        cy.get('#\\:r1s\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text 
        cy.get('#\\:r1s\\:').click()                                                                                                                            // Edgeband
        cy.get('[data-value="104"]').click()                                                                                                                    // Edgeband
        cy.get('#\\:r1v\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text 
        cy.get('#\\:r1t\\:').click()                                                                                                                            // Openings
        cy.get('#\\:r1t\\:-option-3').click()                                                                                                                   // Openings
        cy.get('#\\:r21\\:').click()                                                                                                                            // type
        cy.get('[data-value="T"]').click()                                                                                                                      // type
        cy.get('#\\:r23\\:').click()                                                                                                                            // qty
        cy.get('[data-value="3"]').click()                                                                                                                      // qty
        cy.get('#\\:r25\\:').click()                                                                                                                            // position
        cy.get('[data-value="B"]').click()                                                                                                                      // position  
        cy.get('.MuiFormControl-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click()                                                                 // Dowels  
        cy.get('#\\:r28\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text     
        cy.get('#\\:r26\\:').type('5301')                                                                                                                       // color        
        
        cy.get('[colspan="17"] > .MuiButtonBase-root').click()                                                                                                  // Adding second row                
        cy.get('#\\:r2j\\:').type('14')                                                                                                                         // Width
        cy.get('#\\:r2l\\:').type('4257')                                                                                                                       // Height
        cy.get('#\\:r2n\\:').should('contain', '3/4')                                                                                                           // Assertion for Thickness 
        cy.get('#\\:r2p\\:').should('contain', 'V')                                                                                                             // Assertion for grain 
        cy.get('#\\:r2r\\:').should('contain', '104')                                                                                                           // Assertion for Edgeband     
        cy.get('#\\:r30\\:').should('contain', 'T')                                                                                                             // Assertion for Type        
        cy.get('#\\:r32\\:').should('contain', '3')                                                                                                             // Assertion for qty        
        cy.get('#\\:r34\\:').should('contain', 'B')                                                                                                             // Assertion for postiton            
        cy.get(':nth-child(2) > :nth-child(13) > .MuiFormControl-root > .MuiButtonBase-root > .PrivateSwitchBase-input').should('be.checked')                   // Assertion for Dowels                     
        cy.get('#\\:r35\\:').should('have.value', '5301 - White 2D')                                                                                            // Assertion for color  
        cy.get('[aria-label="Save"] > .MuiButtonBase-root').click().wait(5000)                                                                                  // Tapping to save btn
        cy.get('.headerActions > .MuiButton-contained').click().wait(10000)                                                                                     // Tapping to Print btn
        cy.get('#\\:rp\\: > .MuiButtonBase-root').click()                                                                                                       // Closing print view
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(5000)                                                                        // Tapping to Submit btn
        cy.get('.css-1ubxkj1 > :nth-child(1)').click().wait(5000)                                                                                               // Print order    
        cy.get('#\\:rp\\: > .MuiButtonBase-root').click().wait(500)                                                                                             // Closing print view
    })
})

describe('Estimator Order Creation/Edition/Submission For Accessories Category Suit', function() {

    it.skip("Verify Order created/submitted Successfully - For Edge Banding Category -", function()  {

        // User Creation Steps:
        cy.viewport(1720, 1080)    
        cy.visit("https://dev.thermoform.net/") 
        cy.wait(5000)
        cy.get('.MuiTypography-root').contains("Identification").should('be.visible').and('exist')                                                              // Asssertion of Identification heading is present 
        cy.get('.MuiTypography-body2').contains("Forgot Password?").should('be.visible').and('exist')                                                           // Asssertion of Forgot Password? link is present   
        cy.get('[type="submit"]').contains("Next").should('be.visible').and('exist').and('not.be.enabled').wait(500)                                            // Asssertion of Next btn is disabled        
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
        cy.get('.MuiTypography-h4').contains("Shortcuts").should('be.visible').and('exist').and('contain','Shortcuts')                                          // Asserting of Shortcuts text is present on home page        
        cy.get('.MuiIconButton-colorInherit').click({force: true})                                                                                              // Click to menu icon
        cy.get(':nth-child(7) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').contains("Customer Center").should('be.visible')            // Asserting of Customer Center li is present on side menu
        .and('exist').and('contain','Customer').click().wait(1000)        
        cy.get('[title="Estimator"] > .MuiListItemText-root > .MuiTypography-root').contains("Estimator").should('be.visible')                                  // Asserting of Estimator li is present on side menu
        .and('exist').and('contain','Estimator').click()
        cy.get('.css-budqf6', { timeout: 25000 }).contains('Add color').should('be.visible')                                                                    // Asserting Add color btn is visible
        cy.get('.jss23 > .MuiButtonBase-root').click()                                                                                                          // Tapping to menu icon to close sidebar
        cy.get('[data-tour="order.action.new"]').click().wait(500)                                                                                              // Adding fresh order        
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
        //cy.get(':nth-child(3) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root').click().wait(500)                                // Select Edge Banding (Accessories)
        cy.get(':nth-child(5) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root').click().wait(500)
        
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(500)                                                                         // Tapping to Submit btn
        cy.get('.MuiAccordionSummary-root').click().wait(500)                                                                                                   // Tapping to Accordian 
        cy.get('#\\:rt\\:-helper-text').contains('Required value').should('be.visible')                                                                         // Validation of helper text
        cy.get('#\\:r11\\:-helper-text').contains('Value is not a valid email address').should('be.visible')                                                    // Validation of helper text
        cy.get('#\\:r17\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text    
        cy.get('#\\:rt\\:').type('Automate Edge Banding (Accessories) Category')                                                                                // Name      
        cy.get('#\\:r11\\:').type('AutomateEdgeBandingAccessories@gmail.com', { force: true })                                                                  // Email        
        cy.get('#\\:r17\\:').type('Edge Banding (Accessories)', { force: true })                                                                                // Your PO
        cy.get('#\\:r19\\:').type('XYZ 1', { force: true })                                                                                                     // Their PO        
        cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click()                                                                                         // Tapping to Date icon        
        cy.get('.MuiCalendarPicker-root').find('button[role="gridcell"]')                                                                                       // Locate date buttons inside the calendar
            .each(($el) => {
                if (!$el.prop('disabled')) {                                                                                                                    // Check if the date is enabled                
                cy.wrap($el).click()                                                                                                                            // Click the first enabled date                
                return false                                                                                                                                    // Break the loop after selecting the date
                }
            });        
        cy.get('.css-x7mp9n').first().type('ABC 1', { force: true })                                                                                            // Adding Note

            const filePath = 'images/sample-image.png';                                                                                                         // Define the file path relative to the cypress/fixtures directory            
            cy.get('input[type="file"]#estimator-image-input').attachFile(filePath)                                                                             // Upload the file using the input element
            .then(input => {                
            expect(input[0].files[0].name).to.equal('sample-image.png');                                                                                        // Verify that the file is uploaded
            });    
        cy.get(':nth-child(1) > .MuiFormControlLabel-root > .MuiSwitch-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click()                          // Tapping to inch
        cy.get(':nth-child(2) > .MuiFormControlLabel-root > .MuiSwitch-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click()                          // Tapping to mm

        //cy.get('.MuiAccordionSummary-root').click()                                                                                                           // Tapping to Accordian
        cy.get('#\\:r1d\\:').type('Edge Banding (Accessories) Section')                                                                                         // Section Name      
        cy.get('#\\:r1f\\:').type('Automating Edge Banding (Accessories)')                                                                                      // Section Note        
        
        //Edge Banding (Accessories)
        cy.get('.MuiAccordionSummary-root').click()                                                                                                             // Select Edge Banding (Accessories)
        cy.get('#\\:r1i\\:').type('20')                                                                                                                         // Qty
        cy.get('#\\:r1k\\:-helper-text').contains('Invalid value').should('be.visible')                                                                         // Validation of helper text
        cy.get('#\\:r1k\\:').click()                                                                                                                            // Modele
        cy.get('[data-value="4117"]').click()                                                                                                                   // Select Modele value 
        cy.get('#\\:r1p\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text     
        cy.get('#\\:r1n\\:').type('57')                                                                                                                         // color
        cy.get('#\\:r1m\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text     
        cy.get('#\\:r1m\\:').click()                                                                                                                            // Length
        cy.get('#menu- > .MuiPaper-root > .MuiList-root > [tabindex="-1"]').click()                                                                             // Select Length 
        cy.get('#\\:r1r\\:').type('Testing by Automated Script')                                                                                                // comment   
        
        cy.get('[colspan="8"] > .MuiButtonBase-root').click()                                                                                                   // Adding second row                
        cy.get('#\\:r1v\\:').type('25')                                                                                                                         // Qty
        cy.get('#\\:r21\\:').should('have.text', '4117')                                                                                                        // Assertion for Modele    
        cy.get('#\\:r24\\:').should('have.value', '57 - Summer Flame')                                                                                          // Assertion for color 
        cy.get('#\\:r23\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text     
        cy.get('#\\:r23\\:').click()                                                                                                                            // Length
        cy.get('#menu- > .MuiPaper-root > .MuiList-root > [tabindex="-1"]').click()                                                                             // Length
        cy.get('#\\:r28\\:').type('Testing by Automated Scripting')                                                                                             // comment   

        cy.get('[aria-label="Save"] > .MuiButtonBase-root').click().wait(5000)                                                                                  // Tapping to save btn
        cy.get('.headerActions > .MuiButton-contained').click().wait(10000)                                                                                     // Tapping to Print btn
        cy.get('#\\:rp\\: > .MuiButtonBase-root').click()                                                                                                       // Closing print view
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(5000)                                                                        // Tapping to Submit btn
        cy.get('.css-1ubxkj1 > :nth-child(1)').click().wait(10000)                                                                                              // Print order    
        cy.get('#\\:rp\\: > .MuiButtonBase-root').click().wait(500)                                                                                             // Closing print view
    })

    it.skip("Verify Order created/submitted Successfully - For Heat Deflectors and Protectors Category -", function()  {

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
        cy.get('.MuiTypography-h4').contains("Shortcuts").should('be.visible').and('exist').and('contain','Shortcuts')                                          // Asserting of Shortcuts text is present on home page        
        cy.get('.MuiIconButton-colorInherit').click({force: true})                                                                                              // Click to menu icon
        cy.get(':nth-child(7) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').contains("Customer Center").should('be.visible')            // Asserting of Customer Center li is present on side menu
        .and('exist').and('contain','Customer').click().wait(1000)        
        cy.get('[title="Estimator"] > .MuiListItemText-root > .MuiTypography-root').contains("Estimator").should('be.visible')                                  // Asserting of Estimator li is present on side menu
        .and('exist').and('contain','Estimator').click()
        cy.get('.css-budqf6', { timeout: 25000 }).contains('Add color').should('be.visible')                                                                    // Asserting Add color btn is visible
        cy.get('.jss23 > .MuiButtonBase-root').click()                                                                                                          // Tapping to menu icon to close sidebar
        cy.get('[data-tour="order.action.new"]').click().wait(500)                                                                                              // Adding fresh order        
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
        //cy.get(':nth-child(3) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root').click().wait(500)                                // Select Heat Deflectors and Protectors (Accessories)
        cy.get(':nth-child(5) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root').click().wait(500)
        
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(500)                                                                         // Tapping to Submit btn
        cy.get('.MuiAccordionSummary-root').click().wait(500)                                                                                                   // Tapping to Accordian 
        cy.get('#\\:rt\\:-helper-text').contains('Required value').should('be.visible')                                                                         // Validation of helper text
        cy.get('#\\:r11\\:-helper-text').contains('Value is not a valid email address').should('be.visible')                                                    // Validation of helper text
        cy.get('#\\:r17\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text    
        cy.get('#\\:rt\\:').type('Automate Heat Deflectors and Protectors')                                                                                     // Name      
        cy.get('#\\:r11\\:').type('AutomateHeat DeflectorsandProtectors@gmail.com', { force: true })                                                            // Email        
        cy.get('#\\:r17\\:').type('Heat Deflectors and Protectors', { force: true })                                                                            // Your PO
        cy.get('#\\:r19\\:').type('XYZ 1', { force: true })                                                                                                     // Their PO        
        cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click()                                                                                         // Tapping to Date icon        
        cy.get('.MuiCalendarPicker-root').find('button[role="gridcell"]')                                                                                       // Locate date buttons inside the calendar
            .each(($el) => {
                if (!$el.prop('disabled')) {                                                                                                                    // Check if the date is enabled                
                cy.wrap($el).click()                                                                                                                            // Click the first enabled date                
                return false                                                                                                                                    // Break the loop after selecting the date
                }
            });        
        cy.get('.css-x7mp9n').first().type('ABC 1', { force: true })                                                                                            // Adding Note

            const filePath = 'images/sample-image.png';                                                                                                         // Define the file path relative to the cypress/fixtures directory            
            cy.get('input[type="file"]#estimator-image-input').attachFile(filePath)                                                                             // Upload the file using the input element
            .then(input => {                
            expect(input[0].files[0].name).to.equal('sample-image.png');                                                                                        // Verify that the file is uploaded
            });    
        cy.get(':nth-child(1) > .MuiFormControlLabel-root > .MuiSwitch-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click()                          // Tapping to inch
        cy.get(':nth-child(2) > .MuiFormControlLabel-root > .MuiSwitch-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click()                          // Tapping to mm

        //cy.get('.MuiAccordionSummary-root').click()                                                                                                           // Tapping to Accordian
        cy.get('#\\:r1d\\:').type('Heat Deflectors and Protectors Section')                                                                                     // Section Name      
        cy.get('#\\:r1f\\:').type('Automating Heat Deflectors and Protectors')                                                                                  // Section Note        
        
        //Heat Deflectors and Protectors (Accessories)
        cy.get('.MuiAccordionSummary-root').click()                                                                                                             // Select Heat Deflectors and Protectors (Accessories)
        //cy.get('#\\:r1k\\:-helper-text').contains('Invalid value').should('be.visible')                                                                       // Validation of helper text
        cy.get('#\\:r1i\\:').type('20')                                                                                                                         // Qty
        cy.get('#\\:r1l\\:-helper-text').contains('Invalid value').should('be.visible')                                                                         // Validation of helper text
        cy.get('#\\:r1j\\:').type('3940')                                                                                                                       // Modele
        cy.get('#\\:r1n\\:').type('Testing by Automated Script')                                                                                                // comment   
        
        cy.get('[colspan="6"] > .MuiButtonBase-root').click()                                                                                                   // Adding second row                
        cy.get('#\\:r1r\\:').type('30')                                                                                                                         // Qty
        cy.get('#\\:r1s\\:').should('have.value', '3940')                                                                                                       // Assertion for Modele    
        cy.get('#\\:r20\\:').type('Testing by Automated Scripting')                                                                                             // comment   

        cy.get('[aria-label="Save"] > .MuiButtonBase-root').click().wait(5000)                                                                                  // Tapping to save btn
        cy.get('.headerActions > .MuiButton-contained').click().wait(10000)                                                                                     // Tapping to Print btn
        cy.get('#\\:rp\\: > .MuiButtonBase-root').click()                                                                                                       // Closing print view
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(5000)                                                                        // Tapping to Submit btn
        cy.get('.css-1ubxkj1 > :nth-child(1)').click().wait(10000)                                                                                              // Print order    
        cy.get('#\\:rp\\: > .MuiButtonBase-root').click().wait(500)                                                                                             // Closing print view
    })

    it.skip("Verify Order created/submitted Successfully - For Moldings Category -", function()  {

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
        cy.get('.MuiTypography-h4').contains("Shortcuts").should('be.visible').and('exist').and('contain','Shortcuts')                                          // Asserting of Shortcuts text is present on home page        
        cy.get('.MuiIconButton-colorInherit').click({force: true})                                                                                              // Click to menu icon
        cy.get(':nth-child(7) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').contains("Customer Center").should('be.visible')            // Asserting of Customer Center li is present on side menu
        .and('exist').and('contain','Customer').click().wait(1000)        
        cy.get('[title="Estimator"] > .MuiListItemText-root > .MuiTypography-root').contains("Estimator").should('be.visible')                                  // Asserting of Estimator li is present on side menu
        .and('exist').and('contain','Estimator').click()
        cy.get('.css-budqf6', { timeout: 25000 }).contains('Add color').should('be.visible')                                                                    // Asserting Add color btn is visible
        cy.get('.jss23 > .MuiButtonBase-root').click()                                                                                                          // Tapping to menu icon to close sidebar
        cy.get('[data-tour="order.action.new"]').click().wait(500)                                                                                              // Adding fresh order        
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
        //cy.get(':nth-child(3) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root').click().wait(500)                                // Select Moldings (Accessories)
        cy.get(':nth-child(5) > .MuiCardContent-root > .MuiList-root > :nth-child(3) > .MuiButtonBase-root').click().wait(500)
        
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(500)                                                                         // Tapping to Submit btn
        cy.get('.MuiAccordionSummary-root').click().wait(500)                                                                                                   // Tapping to Accordian 
        cy.get('#\\:rt\\:-helper-text').contains('Required value').should('be.visible')                                                                         // Validation of helper text
        cy.get('#\\:r11\\:-helper-text').contains('Value is not a valid email address').should('be.visible')                                                    // Validation of helper text
        cy.get('#\\:r17\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text    
        cy.get('#\\:rt\\:').type('Automate Moldings')                                                                                                           // Name      
        cy.get('#\\:r11\\:').type('AutomateHeatMoldings@gmail.com', { force: true })                                                                            // Email        
        cy.get('#\\:r17\\:').type('Moldings', { force: true })                                                                                                  // Your PO
        cy.get('#\\:r19\\:').type('XYZ 1', { force: true })                                                                                                     // Their PO        
        cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click()                                                                                         // Tapping to Date icon        
        cy.get('.MuiCalendarPicker-root').find('button[role="gridcell"]')                                                                                       // Locate date buttons inside the calendar
            .each(($el) => {
                if (!$el.prop('disabled')) {                                                                                                                    // Check if the date is enabled                
                cy.wrap($el).click()                                                                                                                            // Click the first enabled date                
                return false                                                                                                                                    // Break the loop after selecting the date
                }
            });        
        cy.get('.css-x7mp9n').first().type('ABC 1', { force: true })                                                                                            // Adding Note

            const filePath = 'images/sample-image.png';                                                                                                         // Define the file path relative to the cypress/fixtures directory            
            cy.get('input[type="file"]#estimator-image-input').attachFile(filePath)                                                                             // Upload the file using the input element
            .then(input => {                
            expect(input[0].files[0].name).to.equal('sample-image.png');                                                                                        // Verify that the file is uploaded
            });    
        cy.get(':nth-child(1) > .MuiFormControlLabel-root > .MuiSwitch-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click()                          // Tapping to inch
        cy.get(':nth-child(2) > .MuiFormControlLabel-root > .MuiSwitch-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click()                          // Tapping to mm

        //cy.get('.MuiAccordionSummary-root').click()                                                                                                           // Tapping to Accordian
        cy.get('#\\:r1d\\:').type('Moldings Section')                                                                                                           // Section Name      
        cy.get('#\\:r1f\\:').type('Automating Moldings')                                                                                                        // Section Note        
        
        //Moldings (Accessories)
        cy.get('.MuiAccordionSummary-root').click()                                                                                                             // Select Moldings (Accessories)
        cy.get('#\\:r1i\\:').type('20')                                                                                                                         // Qty
        cy.get('#\\:r1l\\:-helper-text').contains('Invalid value').should('be.visible')                                                                         // Validation of helper text
        cy.get('#\\:r1j\\:').type('4510')                                                                                                                       // Modele
        cy.get('#\\:r1o\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text
        cy.get('#\\:r1m\\:').type('8135')                                                                                                                       // Color
        cy.get('#\\:r1q\\:').type('Testing by Automated Script')                                                                                                // comment   
        
        cy.get('[colspan="7"] > .MuiButtonBase-root').click()                                                                                                   // Adding second row                
        cy.get('#\\:r1u\\:').type('30')                                                                                                                         // Qty
        cy.get('#\\:r1v\\:').should('have.value', '4510')                                                                                                       // Assertion for Modele    
        cy.get('#\\:r22\\:').should('have.value', '8135 - Stripes')                                                                                             // Assertion for Color    
        cy.get('#\\:r26\\:').type('Testing by Automated Scripting')                                                                                             // comment   

        cy.get('[aria-label="Save"] > .MuiButtonBase-root').click().wait(5000)                                                                                  // Tapping to save btn
        cy.get('.headerActions > .MuiButton-contained').click().wait(10000)                                                                                     // Tapping to Print btn
        
        cy.get('#\\:rp\\: > .MuiButtonBase-root').click()                                                                                                       // Closing print view
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(5000)                                                                        // Tapping to Submit btn
        cy.get('.css-1ubxkj1 > :nth-child(1)').click().wait(10000)                                                                                              // Print order    
        cy.get('#\\:rp\\: > .MuiButtonBase-root').click()                                                                                                       // Closing print view
    })

    it.skip("Verify Order created/submitted Successfully - For Preglued Edge Banding Category -", function()  {

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
        //cy.get(':nth-child(3) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root').click().wait(500)                                // Select Preglued Edge Banding (Accessories)
        cy.get(':nth-child(5) > .MuiCardContent-root > .MuiList-root > :nth-child(4) > .MuiButtonBase-root').click().wait(500)
        
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(500)                                                                         // Tapping to Submit btn
        cy.get('.MuiAccordionSummary-root').click().wait(500)                                                                                                   // Tapping to Accordian 
        cy.get('#\\:rt\\:-helper-text').contains('Required value').should('be.visible')                                                                         // Validation of helper text
        cy.get('#\\:r11\\:-helper-text').contains('Value is not a valid email address').should('be.visible')                                                    // Validation of helper text
        cy.get('#\\:r17\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text    
        cy.get('#\\:rt\\:').type('Automate Preglued Edge Banding')                                                                                              // Name      
        cy.get('#\\:r11\\:').type('AutomatePregluedEdgeBanding@gmail.com', { force: true })                                                                     // Email        
        cy.get('#\\:r17\\:').type('Preglued Edge Banding', { force: true })                                                                                     // Your PO
        cy.get('#\\:r19\\:').type('XYZ 1', { force: true })                                                                                                     // Their PO        
        cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click()                                                                                         // Tapping to Date icon        
        cy.get('.MuiCalendarPicker-root').find('button[role="gridcell"]')                                                                                       // Locate date buttons inside the calendar
            .each(($el) => {
                if (!$el.prop('disabled')) {                                                                                                                    // Check if the date is enabled                
                cy.wrap($el).click()                                                                                                                            // Click the first enabled date                
                return false                                                                                                                                    // Break the loop after selecting the date
                }
            });        
        cy.get('.css-x7mp9n').first().type('ABC 1', { force: true })                                                                                            // Adding Note

            const filePath = 'images/sample-image.png';                                                                                                         // Define the file path relative to the cypress/fixtures directory            
            cy.get('input[type="file"]#estimator-image-input').attachFile(filePath)                                                                             // Upload the file using the input element
            .then(input => {                
            expect(input[0].files[0].name).to.equal('sample-image.png');                                                                                        // Verify that the file is uploaded
            });    
        cy.get(':nth-child(1) > .MuiFormControlLabel-root > .MuiSwitch-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click()                          // Tapping to inch
        cy.get(':nth-child(2) > .MuiFormControlLabel-root > .MuiSwitch-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click()                          // Tapping to mm

        //cy.get('.MuiAccordionSummary-root').click()                                                                                                           // Tapping to Accordian
        cy.get('#\\:r1d\\:').type('Preglued Edge Banding Section')                                                                                              // Section Name      
        cy.get('#\\:r1f\\:').type('Automating Preglued Edge Banding')                                                                                           // Section Note        
        
        //Preglued Edge Banding (Accessories)
        cy.get('.MuiAccordionSummary-root').click()                                                                                                             // Select Moldings (Accessories)
        cy.get('#\\:r1i\\:').type('5')                                                                                                                          // Qty
        cy.get('#\\:r1k\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text
        cy.get('#\\:r1k\\:').type('20')                                                                                                                         // Width
        cy.get('#\\:r1m\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text
        cy.get('#\\:r1m\\:').type('45')                                                                                                                         // Height
        cy.get('#\\:r1p\\:-helper-text').contains('Invalid value').should('be.visible')                                                                         // Validation of helper text
        cy.get('#\\:r1n\\:').type('4106')                                                                                                                       // Modele
        cy.get('#\\:r1s\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text
        cy.get('#\\:r1q\\:').type('8001')                                                                                                                       // Color
        cy.get('#\\:r1v\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text
        cy.get('#\\:r1t\\:').type('555')                                                                                                                        // Back Color
        cy.get('#\\:r21\\:').type('Testing by Automated Script')                                                                                                // comment   
        
        cy.get('[colspan="10"] > .MuiButtonBase-root').click()                                                                                                  // Adding second row                
        cy.get('#\\:r25\\:').type('10')                                                                                                                         // Qty
        cy.get('#\\:r27\\:').type('30')                                                                                                                         // Width
        cy.get('#\\:r29\\:').type('30')                                                                                                                         // Height
        cy.get('#\\:r2a\\:').should('have.value', '4106')                                                                                                       // Assertion for Modele    
        cy.get('#\\:r2d\\:').should('have.value', '8001 - Black Chrome')                                                                                        // Assertion for Color    
        cy.get('#\\:r2g\\:').should('have.value', '555 - White')                                                                                                // Assertion for Back Color
        cy.get('#\\:r2k\\:').type('Testing by Automated Scripting')                                                                                             // comment   

        cy.get('[aria-label="Save"] > .MuiButtonBase-root').click().wait(5000)                                                                                  // Tapping to save btn
        cy.get('.headerActions > .MuiButton-contained').click().wait(10000)                                                                                     // Tapping to Print btn
        
        cy.get('#\\:rp\\: > .MuiButtonBase-root').click()                                                                                                       // Closing print view
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(5000)                                                                        // Tapping to Submit btn
        cy.get('.css-1ubxkj1 > :nth-child(1)').click().wait(10000)                                                                                              // Print order    
        cy.get('#\\:rp\\: > .MuiButtonBase-root').click().wait(500)                                                                                             // Closing print view
    })

    it.skip("Verify Order created/submitted Successfully - For Tambour Roll-ups Category -", function()  {

        // User Creation Steps:
        cy.viewport(1720, 1080)    
        cy.visit("https://dev.thermoform.net/") 
        cy.wait(5000)
        cy.get('.MuiTypography-root').contains("Identification").should('be.visible').and('exist')                                                              // Asssertion of Identification heading is present 
        cy.get('.MuiTypography-body2').contains("Forgot Password?").should('be.visible').and('exist')                                                           // Asssertion of Forgot Password? link is present   
        cy.get('[type="submit"]').contains("Next").should('be.visible').and('exist').and('not.be.enabled')                                                      // Asssertion of Next btn is disabled        
        cy.get('input[name="username"]').type("masterfortesting")                                                                                               // Input valid username                        
        cy.get('[type="submit"]').contains("Next").should('be.visible').and('exist').and('contain', 'Next').click()                                             // Click to Next button         
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
        cy.get('.MuiTypography-h4').contains("Shortcuts").should('be.visible').and('exist').and('contain','Shortcuts')                                          // Asserting of Shortcuts text is present on home page        
        cy.get('.MuiIconButton-colorInherit').click({force: true})                                                                                              // Click to menu icon
        cy.get(':nth-child(7) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').contains("Customer Center").should('be.visible')            // Asserting of Customer Center li is present on side menu
        .and('exist').and('contain','Customer').click().wait(1000)        
        cy.get('[title="Estimator"] > .MuiListItemText-root > .MuiTypography-root').contains("Estimator").should('be.visible')                                  // Asserting of Estimator li is present on side menu
        .and('exist').and('contain','Estimator').click()
        cy.get('.css-budqf6', { timeout: 25000 }).contains('Add color').should('be.visible')                                                                    // Asserting Add color btn is visible
        cy.get('.jss23 > .MuiButtonBase-root').click()                                                                                                          // Tapping to menu icon to close sidebar
        cy.get('[data-tour="order.action.new"]').click().wait(500)                                                                                              // Adding fresh order        
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
        //cy.get(':nth-child(3) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root').click().wait(500)                                // Select Tambour Roll-ups (Accessories)
        cy.get(':nth-child(5) > .MuiCardContent-root > .MuiList-root > :nth-child(5) > .MuiButtonBase-root').click().wait(500)
        
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(500)                                                                         // Tapping to Submit btn
        cy.get('.MuiAccordionSummary-root').click().wait(500)                                                                                                   // Tapping to Accordian 
        cy.get('#\\:rt\\:-helper-text').contains('Required value').should('be.visible')                                                                         // Validation of helper text
        cy.get('#\\:r11\\:-helper-text').contains('Value is not a valid email address').should('be.visible')                                                    // Validation of helper text
        cy.get('#\\:r17\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text    
        cy.get('#\\:rt\\:').type('Automate Tambour Roll-ups')                                                                                                   // Name      
        cy.get('#\\:r11\\:').type('AutomateTambourRoll-ups@gmail.com', { force: true })                                                                         // Email        
        cy.get('#\\:r17\\:').type('Tambour Roll-ups', { force: true })                                                                                          // Your PO
        cy.get('#\\:r19\\:').type('XYZ 1', { force: true })                                                                                                     // Their PO        
        cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click()                                                                                         // Tapping to Date icon        
        cy.get('.MuiCalendarPicker-root').find('button[role="gridcell"]')                                                                                       // Locate date buttons inside the calendar
            .each(($el) => {
                if (!$el.prop('disabled')) {                                                                                                                    // Check if the date is enabled                
                cy.wrap($el).click()                                                                                                                            // Click the first enabled date                
                return false                                                                                                                                    // Break the loop after selecting the date
                }
            });        
        cy.get('.css-x7mp9n').first().type('ABC 1', { force: true })                                                                                            // Adding Note

            const filePath = 'images/sample-image.png';                                                                                                         // Define the file path relative to the cypress/fixtures directory            
            cy.get('input[type="file"]#estimator-image-input').attachFile(filePath)                                                                             // Upload the file using the input element
            .then(input => {                
            expect(input[0].files[0].name).to.equal('sample-image.png');                                                                                        // Verify that the file is uploaded
            });    
        cy.get(':nth-child(1) > .MuiFormControlLabel-root > .MuiSwitch-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click()                          // Tapping to inch
        cy.get(':nth-child(2) > .MuiFormControlLabel-root > .MuiSwitch-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click()                          // Tapping to mm

        //cy.get('.MuiAccordionSummary-root').click()                                                                                                           // Tapping to Accordian
        cy.get('#\\:r1d\\:').type('Tambour Roll-ups Section')                                                                                                   // Section Name      
        cy.get('#\\:r1f\\:').type('Automating Tambour Roll-ups')                                                                                                // Section Note        
        
        //Tambour Roll-ups (Accessories)
        cy.get('.MuiAccordionSummary-root').click()                                                                                                             // Select Tambour Roll-ups (Accessories)
        cy.get('#\\:r1i\\:').type('5')                                                                                                                          // Qty
        cy.get('#\\:r1k\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text
        cy.get('#\\:r1k\\:').type('20')                                                                                                                         // Width
        cy.get('#\\:r1m\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text
        cy.get('#\\:r1m\\:').type('45')                                                                                                                         // Height
        cy.get('#\\:r1p\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text
        cy.get('#\\:r1n\\:').type('8141')                                                                                                                       // Color
        cy.get('#\\:r1r\\:').type('Testing by Automated Script')                                                                                                // comment   
        
        cy.get('[colspan="8"] > .MuiButtonBase-root').click()                                                                                                   // Adding second row                
        cy.get('#\\:r1v\\:').type('15')                                                                                                                         // Qty
        cy.get('#\\:r21\\:').type('305')                                                                                                                        // Width
        cy.get('#\\:r23\\:').type('310')                                                                                                                        // Height
        cy.get('#\\:r24\\:').should('have.value', '8141')                                                                                                       // Assertion for Color    
        cy.get('#\\:r28\\:').type('Testing by Automated Scripting')                                                                                             // comment   

        cy.get('[aria-label="Save"] > .MuiButtonBase-root').click().wait(5000)                                                                                  // Tapping to save btn
        cy.get('.headerActions > .MuiButton-contained').click().wait(10000)                                                                                     // Tapping to Print btn
        
        cy.get('#\\:rp\\: > .MuiButtonBase-root').click()                                                                                                       // Closing print view
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(5000)                                                                        // Tapping to Submit btn
        cy.get('.css-1ubxkj1 > :nth-child(1)').click().wait(10000)                                                                                              // Print order    
        cy.get('#\\:rp\\: > .MuiButtonBase-root').click().wait(500)                                                                                             // Closing print view
    })
    
})

describe('Estimator Order Creation/Edition/Submission For 5-Pieces Category Suit', function() {
    
    it.skip("Verify Order created/submitted Successfully - For Doors Category -", function()  {

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
        cy.get('.MuiTypography-h4').contains("Shortcuts").should('be.visible').and('exist').and('contain','Shortcuts')                                          // Asserting of Shortcuts text is present on home page        
        cy.get('.MuiIconButton-colorInherit').click({force: true})                                                                                              // Click to menu icon
        cy.get(':nth-child(7) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').contains("Customer Center").should('be.visible')            // Asserting of Customer Center li is present on side menu
        .and('exist').and('contain','Customer').click().wait(1000)        
        cy.get('[title="Estimator"] > .MuiListItemText-root > .MuiTypography-root').contains("Estimator").should('be.visible')                                  // Asserting of Estimator li is present on side menu
        .and('exist').and('contain','Estimator').click()
        cy.get('.css-budqf6', { timeout: 25000 }).contains('Add color').should('be.visible')                                                                    // Asserting Add color btn is visible
        cy.get('.jss23 > .MuiButtonBase-root').click()                                                                                                          // Tapping to menu icon to close sidebar
        cy.get('[data-tour="order.action.new"]').click().wait(500)                                                                                              // Adding fresh order        
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
        //cy.get(':nth-child(3) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root').click().wait(500)                                // Select Doors (5-Pieces)
        cy.get(':nth-child(2) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root').click().wait(500)
        
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(500)                                                                         // Tapping to Submit btn
        cy.get('.MuiAccordionSummary-root').click().wait(500)                                                                                                   // Tapping to Accordian 
        cy.get('#\\:rt\\:-helper-text').contains('Required value').should('be.visible')                                                                         // Validation of helper text
        cy.get('#\\:r11\\:-helper-text').contains('Value is not a valid email address').should('be.visible')                                                    // Validation of helper text
        cy.get('#\\:r17\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text    
        cy.get('#\\:rt\\:').type('Automate Doors (5-Pieces) Category')                                                                                          // Name      
        cy.get('#\\:r11\\:').type('AutomateDoors5Pieces@gmail.com', { force: true })                                                                            // Email        
        cy.get('#\\:r17\\:').type('Doors (5-Pieces) 745', { force: true })                                                                                      // Your PO
        cy.get('#\\:r19\\:').type('XYZ 1', { force: true })                                                                                                     // Their PO        
        cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click()                                                                                         // Tapping to Date icon        
        cy.get('.MuiCalendarPicker-root').find('button[role="gridcell"]')                                                                                       // Locate date buttons inside the calendar
            .each(($el) => {
                if (!$el.prop('disabled')) {                                                                                                                    // Check if the date is enabled                
                cy.wrap($el).click()                                                                                                                            // Click the first enabled date                
                return false                                                                                                                                    // Break the loop after selecting the date
                }
            });        
        cy.get('.css-x7mp9n').first().type('ABC 1', { force: true })                                                                                            // Adding Note

            const filePath = 'images/sample-image.png';                                                                                                         // Define the file path relative to the cypress/fixtures directory            
            cy.get('input[type="file"]#estimator-image-input').attachFile(filePath)                                                                             // Upload the file using the input element
            .then(input => {                
            expect(input[0].files[0].name).to.equal('sample-image.png');                                                                                        // Verify that the file is uploaded
            });    
        //cy.get(':nth-child(1) > .MuiFormControlLabel-root > .MuiTypography-root > .css-zfsz4h').click()                                                       // Tapping to inch
        cy.get(':nth-child(2) > .MuiFormControlLabel-root > .MuiSwitch-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click()                          // Tapping to mm

        //cy.get('.MuiAccordionSummary-root').click()                                                                                                           // Tapping to Accordian
        cy.get('#\\:r1d\\:').type('Doors (5-Pieces) Section')                                                                                                   // Section Name      
        cy.get('#\\:r1f\\:').type('Automating Doors (5-Pieces)')                                                                                                // Section Note        
        
        //Doors (5-Pieces)
        cy.get('.MuiAccordionSummary-root').click()                                                                                                             // Select Doors (5-Pieces)     
        cy.get('#\\:r1k\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text 
        cy.get('#\\:r1k\\:').type('25')                                                                                                                         // Width
        cy.get('#\\:r1m\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text 
        cy.get('#\\:r1m\\:').type('585')                                                                                                                        // Height
        cy.get('#\\:r1q\\:').click()                                                                                                                            // Grain
        cy.get('[data-value="V"]').click()                                                                                                                      // Grain
        cy.get('#\\:r1t\\:-helper-text').contains('Invalid value').should('be.visible')                                                                         // Validation of helper text
        cy.get('#\\:r1r\\:').type('4630')                                                                                                                       // Modele
        cy.get('#\\:r1v\\:').click()                                                                                                                            // type
        cy.get('[data-value="T"]').click()                                                                                                                      // type
        cy.get('#\\:r21\\:').click()                                                                                                                            // qty
        cy.get('[data-value="3"]').click()                                                                                                                      // qty
        cy.get('#\\:r23\\:').click()                                                                                                                            // position
        cy.get('[data-value="B"]').click()                                                                                                                      // position  
        cy.get('.MuiFormControl-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click()                                                                 // Dowels  
        cy.get('#\\:r26\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text     
        cy.get('#\\:r24\\:').type('253')                                                                                                                        // color        
        
        cy.get('[colspan="16"] > .MuiButtonBase-root').click()                                                                                                  // Adding second row                
        cy.get('#\\:r2h\\:').type('14')                                                                                                                         // Width
        cy.get('#\\:r2j\\:').type('4257')                                                                                                                       // Height
        cy.get('#\\:r2l\\:').should('contain', '3/4')                                                                                                           // Assertion for Thickness 
        cy.get('#\\:r2n\\:').should('contain', 'V')                                                                                                             // Assertion for grain 
        //cy.get(':nth-child(2) > :nth-child(8) > .css-tzsjye > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').should('contain', '4630 - 90"')                                                                                                    // Assertion for Modele     
        //cy.get('input.MuiInputBase-input').should('have.value', '4630')     
        cy.get('#\\:r2s\\:').should('contain', 'T')                                                                                                             // Assertion for Type        
        cy.get('#\\:r2u\\:').should('contain', '3')                                                                                                             // Assertion for qty        
        cy.get('#\\:r30\\:').should('contain', 'B')                                                                                                             // Assertion for postiton            
        cy.get(':nth-child(2) > :nth-child(12) > .MuiFormControl-root > .MuiButtonBase-root > .PrivateSwitchBase-input').should('be.checked')                   // Assertion for Dowels                     
        cy.get('#\\:r31\\:').should('have.value', '253 - Harmony White')                                                                                        // Assertion for color 
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
        cy.get('.MuiTypography-h4').contains("Shortcuts").should('be.visible').and('exist').and('contain','Shortcuts')                                          // Asserting of Shortcuts text is present on home page        
        cy.get('.MuiIconButton-colorInherit').click({force: true})                                                                                              // Click to menu icon
        cy.get(':nth-child(7) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').contains("Customer Center").should('be.visible')            // Asserting of Customer Center li is present on side menu
        .and('exist').and('contain','Customer').click().wait(1000)        
        cy.get('[title="Estimator"] > .MuiListItemText-root > .MuiTypography-root').contains("Estimator").should('be.visible')                                  // Asserting of Estimator li is present on side menu
        .and('exist').and('contain','Estimator').click()
        cy.get('.css-budqf6', { timeout: 25000 }).contains('Add color').should('be.visible')                                                                    // Asserting Add color btn is visible
        cy.get('.jss23 > .MuiButtonBase-root').click()                                                                                                          // Tapping to menu icon to close sidebar
        cy.get('[data-tour="order.action.new"]').click().wait(500)                                                                                              // Adding fresh order        
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
        //cy.get(':nth-child(3) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root').click().wait(500)                                // Select Drawer Fronts (5-Pieces)
        cy.get(':nth-child(2) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root').click().wait(500)
        
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(500)                                                                         // Tapping to Submit btn
        cy.get('.MuiAccordionSummary-root').click().wait(500)                                                                                                   // Tapping to Accordian 
        cy.get('#\\:rt\\:-helper-text').contains('Required value').should('be.visible')                                                                         // Validation of helper text
        cy.get('#\\:r11\\:-helper-text').contains('Value is not a valid email address').should('be.visible')                                                    // Validation of helper text
        cy.get('#\\:r17\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text    
        cy.get('#\\:rt\\:').type('Automate Drawer Fronts (5-Pieces) Category')                                                                                  // Name      
        cy.get('#\\:r11\\:').type('AutomateDrawerFronts5Pieces@gmail.com', { force: true })                                                                     // Email        
        cy.get('#\\:r17\\:').type('Drawer Fronts (5-Pieces) 888', { force: true })                                                                              // Your PO
        cy.get('#\\:r19\\:').type('XYZ 1', { force: true })                                                                                                     // Their PO        
        cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click()                                                                                         // Tapping to Date icon        
        cy.get('.MuiCalendarPicker-root').find('button[role="gridcell"]')                                                                                       // Locate date buttons inside the calendar
            .each(($el) => {
                if (!$el.prop('disabled')) {                                                                                                                    // Check if the date is enabled                
                cy.wrap($el).click()                                                                                                                            // Click the first enabled date                
                return false                                                                                                                                    // Break the loop after selecting the date
                }
            });        
        cy.get('.css-x7mp9n').first().type('ABC 1', { force: true })                                                                                            // Adding Note

            const filePath = 'images/sample-image.png';                                                                                                         // Define the file path relative to the cypress/fixtures directory            
            cy.get('input[type="file"]#estimator-image-input').attachFile(filePath)                                                                             // Upload the file using the input element
            .then(input => {                
            expect(input[0].files[0].name).to.equal('sample-image.png');                                                                                        // Verify that the file is uploaded
            });    
        //cy.get(':nth-child(1) > .MuiFormControlLabel-root > .MuiTypography-root > .css-zfsz4h').click()                                                       // Tapping to inch
        cy.get(':nth-child(2) > .MuiFormControlLabel-root > .MuiSwitch-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click()                          // Tapping to mm

        //cy.get('.MuiAccordionSummary-root').click()                                                                                                           // Tapping to Accordian
        cy.get('#\\:r1d\\:').type('Drawer Fronts (5-Pieces) Section')                                                                                           // Section Name      
        cy.get('#\\:r1f\\:').type('Automating Drawer Fronts (5-Pieces)')                                                                                        // Section Note        
        
        //Drawer Fronts (5-Pieces)
        cy.get('.MuiAccordionSummary-root').click()                                                                                                             // Select Doors (5-Pieces)     
        cy.get('#\\:r1k\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text 
        cy.get('#\\:r1k\\:').type('25')                                                                                                                         // Width
        cy.get('#\\:r1m\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text 
        cy.get('#\\:r1m\\:').type('585')                                                                                                                        // Height
        cy.get('#\\:r1q\\:').click()                                                                                                                            // Grain
        cy.get('[data-value="V"]').click()                                                                                                                      // Grain
        cy.get('#\\:r1t\\:-helper-text').contains('Invalid value').should('be.visible')                                                                         // Validation of helper text
        cy.get('#\\:r1r\\:').type('4511')                                                                                                                       // Modele
        cy.get('#\\:r20\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text     
        cy.get('#\\:r1u\\:').type('108')                                                                                                                        // color        
        
        cy.get('[colspan="12"] > .MuiButtonBase-root').click()                                                                                                  // Adding second row                
        cy.get('#\\:r2b\\:').type('14')                                                                                                                         // Width
        cy.get('#\\:r2d\\:').type('4257')                                                                                                                       // Height
        cy.get('#\\:r2f\\:').should('contain', '3/4')                                                                                                           // Assertion for Thickness 
        cy.get('#\\:r2h\\:').should('contain', 'V')                                                                                                             // Assertion for grain 
        //cy.get(':nth-child(2) > :nth-child(8) > .css-tzsjye > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').should('contain', '4630 - 90"')                                                                                                    // Assertion for Modele     
        //cy.get('input.MuiInputBase-input').should('have.value', '4630')          
        cy.get('#\\:r2l\\:').should('have.value', '108 - Dolce Vita')                                                                                           // Assertion for color 
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
        cy.get('.MuiTypography-h4').contains("Shortcuts").should('be.visible').and('exist').and('contain','Shortcuts')                                          // Asserting of Shortcuts text is present on home page        
        cy.get('.MuiIconButton-colorInherit').click({force: true})                                                                                              // Click to menu icon
        cy.get(':nth-child(7) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').contains("Customer Center").should('be.visible')            // Asserting of Customer Center li is present on side menu
        .and('exist').and('contain','Customer').click().wait(1000)        
        cy.get('[title="Estimator"] > .MuiListItemText-root > .MuiTypography-root').contains("Estimator").should('be.visible')                                  // Asserting of Estimator li is present on side menu
        .and('exist').and('contain','Estimator').click()        
        cy.get('.css-budqf6', { timeout: 25000 }).contains('Add color').should('be.visible')                                                                    // Asserting Add color btn is visible
        cy.get('.jss23 > .MuiButtonBase-root').click()                                                                                                          // Tapping to menu icon to close sidebar
        cy.get('[data-tour="order.action.new"]').click().wait(500)                                                                                              // Adding fresh order        
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
        //cy.get(':nth-child(3) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root').click().wait(500)                                // Select Mullions Doors (5-Pieces)
        cy.get(':nth-child(2) > .MuiCardContent-root > .MuiList-root > :nth-child(3) > .MuiButtonBase-root').click().wait(500)
        
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(500)                                                                         // Tapping to Submit btn
        cy.get('.MuiAccordionSummary-root').click().wait(500)                                                                                                   // Tapping to Accordian 
        cy.get('#\\:rt\\:-helper-text').contains('Required value').should('be.visible')                                                                         // Validation of helper text
        cy.get('#\\:r11\\:-helper-text').contains('Value is not a valid email address').should('be.visible')                                                    // Validation of helper text
        cy.get('#\\:r17\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text    
        cy.get('#\\:rt\\:').type('Automate Mullions Doors (5-Pieces) Category')                                                                                 // Name      
        cy.get('#\\:r11\\:').type('AutomaMullionsteDoors5Pieces@gmail.com', { force: true })                                                                    // Email        
        cy.get('#\\:r17\\:').type('Mullions Doors (5-Pieces) 745', { force: true })                                                                             // Your PO
        cy.get('#\\:r19\\:').type('XYZ 1', { force: true })                                                                                                     // Their PO        
        cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click()                                                                                         // Tapping to Date icon        
        cy.get('.MuiCalendarPicker-root').find('button[role="gridcell"]')                                                                                       // Locate date buttons inside the calendar
            .each(($el) => {
                if (!$el.prop('disabled')) {                                                                                                                    // Check if the date is enabled                
                cy.wrap($el).click()                                                                                                                            // Click the first enabled date                
                return false                                                                                                                                    // Break the loop after selecting the date
                }
            });        
        cy.get('.css-x7mp9n').first().type('ABC 1', { force: true })                                                                                            // Adding Note

            const filePath = 'images/sample-image.png';                                                                                                         // Define the file path relative to the cypress/fixtures directory            
            cy.get('input[type="file"]#estimator-image-input').attachFile(filePath)                                                                             // Upload the file using the input element
            .then(input => {                
            expect(input[0].files[0].name).to.equal('sample-image.png');                                                                                        // Verify that the file is uploaded
            });    
        //cy.get(':nth-child(1) > .MuiFormControlLabel-root > .MuiTypography-root > .css-zfsz4h').click()                                                       // Tapping to inch
        cy.get(':nth-child(2) > .MuiFormControlLabel-root > .MuiSwitch-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click()                          // Tapping to mm

        //cy.get('.MuiAccordionSummary-root').click()                                                                                                           // Tapping to Accordian
        cy.get('#\\:r1d\\:').type('Doors (5-Pieces) Section')                                                                                                   // Section Name      
        cy.get('#\\:r1f\\:').type('Automating Doors (5-Pieces)')                                                                                                // Section Note        
        
        //Mullions Doors (5-Pieces)
        cy.get('.MuiAccordionSummary-root').click()                                                                                                             // Select Doors (5-Pieces)     
        cy.get('#\\:r1k\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text 
        cy.get('#\\:r1k\\:').type('25')                                                                                                                         // Width
        cy.get('#\\:r1m\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text 
        cy.get('#\\:r1m\\:').type('585')                                                                                                                        // Height
        cy.get('#\\:r1q\\:').click()                                                                                                                            // Grain
        cy.get('[data-value="V"]').click()                                                                                                                      // Grain
        cy.get('#\\:r1t\\:-helper-text').contains('Invalid value').should('be.visible')                                                                         // Validation of helper text
        cy.get('#\\:r1r\\:').type('3520')                                                                                                                       // Modele
        cy.get('#\\:r1u\\:').type('1')                                                                                                                          // Openings
        cy.get('#\\:r22\\:').click()                                                                                                                            // type
        cy.get('[data-value="T"]').click()                                                                                                                      // type
        cy.get('#\\:r24\\:').click()                                                                                                                            // qty
        cy.get('[data-value="3"]').click()                                                                                                                      // qty
        cy.get('#\\:r26\\:').click()                                                                                                                            // position
        cy.get('[data-value="B"]').click()                                                                                                                      // position  
        //cy.get('.MuiFormControl-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click()                                                               // Dowels  
        cy.get('#\\:r29\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text     
        cy.get('#\\:r27\\:').type('254')                                                                                                                        // color        
        
        cy.get('[colspan="17"] > .MuiButtonBase-root').click()                                                                                                  // Adding second row                
        cy.get('#\\:r2k\\:').type('14')                                                                                                                         // Width
        cy.get('#\\:r2m\\:').type('7414')                                                                                                                       // Height
        cy.get('#\\:r2o\\:').should('contain', '3/4')                                                                                                           // Assertion for Thickness 
        cy.get('#\\:r2q\\:').should('contain', 'V')                                                                                                             // Assertion for grain 
        //cy.get(':nth-child(2) > :nth-child(8) > .css-tzsjye > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').should('contain', '4630 - 90"')                                                                                                    // Assertion for Modele     
        //cy.get('input.MuiInputBase-input').should('have.value', '4630')     
        //cy.get('#\\:r2u\\:-option-1').should('exist')                                                                                                         // Assertion for Openings        
        cy.get('#\\:r32\\:').should('contain', 'T')                                                                                                             // Assertion for Type        
        cy.get('#\\:r34\\:').should('contain', '3')                                                                                                             // Assertion for qty        
        cy.get('#\\:r36\\:').should('contain', 'B')                                                                                                             // Assertion for postiton            
        cy.get(':nth-child(2) > :nth-child(13) > .MuiFormControl-root > .MuiButtonBase-root > .PrivateSwitchBase-input').should('not.be.checked')               // Assertion for Dowels                     
        cy.get('#\\:r37\\:').should('have.value', '254 - Outlandia Earth')                                                                                      // Assertion for color 
        cy.get('[aria-label="Save"] > .MuiButtonBase-root').click().wait(5000)                                                                                  // Tapping to save btn
        cy.get('.headerActions > .MuiButton-contained').click().wait(10000)                                                                                     // Tapping to Print btn
        cy.get('#\\:rp\\: > .MuiButtonBase-root').click()                                                                                                       // Closing print view
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(5000)                                                                        // Tapping to Submit btn
        cy.get('.css-1ubxkj1 > :nth-child(1)').click().wait(10000)                                                                                              // Print order    
        cy.get('#\\:rp\\: > .MuiButtonBase-root').click().wait(500)                                                                                             // Closing print view
    })
})*/

describe('Estimator Order Creation/Edition/Submission For Boards Category Suit', function() {

    it("Verify Order created/submitted Successfully - For Boards Category -", function()  {

        cy.viewport(1440, 900)
        cy.visit("https://dev.thermoform.net/") 
        
        cy.get('.MuiTypography-root', { timeout: 30000 }).contains("Identification").should('be.visible').and('exist')                                          // Asssertion of Identification heading is present 
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
        cy.get('.MuiIconButton-colorInherit').click({force: true}).wait(1000)                                                                                    // Click to menu icon        
        cy.get(':nth-child(7) > .MuiButtonBase-root', { timeout: 100000 }).contains("Customer Center").and('exist').and('contain','Customer').click().wait(2000) // Asserting of Customer Center li is present on side menu        
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

        //cy.get(':nth-child(3) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root').click().wait(500)                                
        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root').click().wait(500)                                  // Select Boards
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(500)                                                                         // Tapping to Submit btn
        cy.get('.MuiAlert-message').contains('Please validate the form before submitting the order').should('be.visible')                                       // Assertion for validation message
        cy.get('.MuiAccordionSummary-root').click().wait(500)                                                                                                   // Tapping to Accordian 
        //cy.get('.jss23 > .MuiButtonBase-root').click().wait(500)
        cy.get('button svg path[d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"]').click({force: true})                                       // Getting side menu back buttton          

        //=====================================================================>>  Getting elements for Git CI/CD Pipeline  <<===============================================================================================

        //                                                                         Submitting Order with Required values
        //                                                                              >>>>> Adding form data <<<<<                

        cy.contains('label', 'Client').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()                           // Client Validation of helper text
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');    
        cy.contains('label', 'Shipping client').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()                  // Shipping client of helper text
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');
        cy.contains('label', 'Billing client').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()                   // Billing client of helper text
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');
        cy.contains('label', 'Your PO').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()                          // PO Validation of helper text 
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');                                                                    
        cy.get('button[aria-label="New Order"]').scrollIntoView();                                                                           
        cy.contains('label', 'Client').next().find('input').click({force: true}).wait(500)                                                                      // Select Client
        cy.get('[role="combobox"]').should('be.visible')
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true}).wait(500)

        cy.contains('label', 'Shipping client').next().find('input').click({force: true});                                                                      // Select Shipping client
        cy.get('[role="combobox"]').should('be.visible');
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true});                                                          

        cy.contains('label', 'Billing client').next().find('input').click({force: true});                                                                       // Select Billing client
        cy.get('[role="combobox"]').should('be.visible');
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true});                                                           

        cy.contains('label', 'Your PO').next().find('input').type('Automate Doors 11')                                                                          // Your PO

        //                                                      >>>>> Adding Boards category table data required fields <<<<<   
        
        cy.contains('div', '1 Boards').click()
        //cy.get('td.MuiTableCell-root').eq(3).find('input').should('exist').should('have.attr', 'aria-invalid', 'true').closest('.MuiFormControl-root')        // Validation of helper text for invalid input
        //.find('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');
        cy.get('td.MuiTableCell-root').eq(3).find('input').type('3999', { force: true }).wait(500)                                                              // Model
        cy.get('td.MuiTableCell-root').eq(4).find('input').type('7204', { force: true }).wait(500)                                                              // color        
        cy.get('td.MuiTableCell-root').eq(5).find('input').type('555', { force: true }).wait(500)                                                               // back color                                                    
        cy.get('.css-9hpeq4', { timeout: 50000 }).contains('Submit').should('be.enabled').click().wait(1000)                                                    // Tapping to Submit btn
        
        //                                                        Submitting Order with both Required and optional values
        //                                                                    >>>>> Adding form data <<<<<               

        cy.get('.css-1ubxkj1 > :nth-child(2)').click().wait(1000)                                                                                               // Tap to create new order btn
        cy.get('[data-tour="order.action.new"]').click().wait(1000)                                                                                             // Adding fresh order
        cy.get('.MuiDialogActions-root > :nth-child(2)').click()                                                                                                // Tapping to OK btn

        cy.contains('label', 'Client').next().find('input').click({force: true})                                                                                // Select Client to remove
        cy.contains('label', 'Client').next().find('input').clear()
        cy.get('[role="combobox"]').should('be.visible').wait(500)
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true}).wait(500)
            
        cy.contains('label', 'Shipping client').next().find('input').click({force: true});                                                                      // Select Shipping client
        cy.get('[role="combobox"]').should('be.visible');
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true});                                                          
            
        cy.contains('label', 'Billing client').next().find('input').click({force: true});                                                                       // Select Billing client
        cy.get('[role="combobox"]').should('be.visible');
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true});

        cy.contains('label', 'Your PO').next().find('input').type('Automate Boards 11')                                                                         // Your PO
        cy.contains('label', 'Their PO').next().find('input').type('XYZ 1', { force: true })                                                                    // Their PO
        cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click({force: true})                // Tapping to Expected Date icon        
        cy.get('.MuiCalendarPicker-root').find('button[role="gridcell"]')                                                                                       // Locate date buttons inside the calendar
            .each(($el) => {
                if (!$el.prop('disabled')) {                                                                                                                    // Check if the date is enabled                
                    cy.wrap($el).click().wait(500)                                                                                                              // Click the first enabled date                
                    return false                                                                                                                                // Break the loop after selecting the date
                    }
                });  
                
        cy.contains('label', 'Their name').next().find('input').type('Zagg', { force: true })                                                                   // Their Name
        //cy.contains('label', 'Promised date').next().find('input').click({force: true}).wait(10000)                                                       
        cy.get(':nth-child(5) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click({force: true})                // Tapping to promissed Date icon        
        cy.get('.MuiCalendarPicker-root').find('button[role="gridcell"]')                                                                                       // Locate date buttons inside the calendar
        .each(($cl) => {
            if (!$cl.prop('disabled')) {                                                                                                                        // Check if the date is enabled                
                cy.wrap($cl).click().wait(500)                                                                                                                  // Click the first enabled date                
                    return false                                                                                                                                // Break the loop after selecting the date
                }
                });        
            cy.get('.css-x7mp9n').first().type('ABC 1', { force: true })                                                                                        // Note
            
            const filePath = 'images/sample-image.png';                                                                                                         // Define the file path relative to the cypress/fixtures directory            
            cy.get('input[type="file"]#estimator-image-input').attachFile(filePath)                                                                             // Upload the file using the input element
            .then(input => {                
            expect(input[0].files[0].name).to.equal('sample-image.png');                                                                                        // Verify that the file is uploaded
            });  
            // cy.wait(10000)  
        cy.get(':nth-child(1) > .MuiFormControlLabel-root > .MuiTypography-root > .css-zfsz4h').click()                                                         // Tapping to inch/mm

        //                                                      >>>>> Adding Boards category table data  <<<<<        

        cy.get('.css-budqf6').contains('Add section').click({force: true}).wait(1000)                                                                           // Tapping to Add color btn
        cy.contains('label', 'Section name').next().find('input').should('be.visible').type('Boards');                                                          // Section Name        
        //cy.contains('label', 'Notes').eq(1).parent().find('input').type('Automating Molded Category with Doors Section', { force: true });                    // Section Notes                  
        cy.get('.MuiBox-root > .MuiGrid-container > .MuiGrid-root > .MuiButtonBase-root').click().wait(500)                                                     // Tapping to Add a new product btn
        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root').click().wait(500)                                  // Select Boards
        //cy.wait(2000)                   
        cy.get('table tbody tr.MuiTableRow-root', { timeout: 10000 }).should('have.length.greaterThan', 0).then(($rowsBefore) => {
        const initialRowCount = $rowsBefore.length;
        cy.wrap($rowsBefore[0]).within(() => {
        cy.get('td.MuiTableCell-root').each(($td) => {
            cy.wrap($td).invoke('text').then((tdValue) => {
            tdValue = tdValue.trim();

                if (tdValue === '1.') {
                    cy.get('td.MuiTableCell-root').eq(2).find('input').type('89', { force: true }).wait(500)                                                    // Qty
                    cy.get('td.MuiTableCell-root').eq(3).find('input').type('3949', { force: true }).wait(500)                                                  // Model
                    cy.get('td.MuiTableCell-root').eq(4).find('input').type('8153', { force: true }).wait(500)                                                  // color        
                    cy.get('td.MuiTableCell-root').eq(5).find('input').type('555', { force: true }).wait(500)                                                   // back color        
                    //cy.get('td.MuiTableCell-root').eq(5).contains('p', 'Acry-Lux or Almic back').should('exist')                                              // back color
                    cy.get('td.MuiTableCell-root').eq(6).find('input').type('Testing by Automation Script 1', { force: true });                                 // Comments        
                }
            });
        });
        });
        cy.get('[colspan="8"] > .MuiButtonBase-root').click().wait(2000)                                                                                        // Adding second item
        cy.get('table tbody tr.MuiTableRow-root', { timeout: 10000 }).then(($rowsAfter) => {
        const newRow = $rowsAfter[$rowsAfter.length - 1]; // Get the last (newly added) row
        cy.wrap(newRow).within(() => {
        cy.get('td.MuiTableCell-root').each(($td) => {
        cy.wrap($td).invoke('text').then((tdValue) => {
        tdValue = tdValue.trim();
                if (tdValue === '2.') {
                    cy.get('td.MuiTableCell-root').eq(2).find('input').type('96', { force: true }).wait(500)                                                    // Qty
                    cy.get('td.MuiTableCell-root').eq(3).find('input').type('3972', { force: true }).wait(500)                                                  // Model
                    cy.get('td.MuiTableCell-root').eq(4).find('input').type('8019', { force: true }).wait(500)                                                  // color        
                    cy.get('td.MuiTableCell-root').eq(5).find('input').type('555', { force: true }).wait(500)                                                   // back color        
                    //cy.get('td.MuiTableCell-root').eq(5).contains('p', 'Polymer back').should('exist')                                                        // back color
                    cy.get('td.MuiTableCell-root').eq(6).find('input').type('Testing by Automation Script 2', { force: true });                                 // Comments        
                }                                                                   
            });
        });
    });
    })
    })
    cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(20000)                                                                           // Tapping to Submit btn
    cy.get('#alert-dialog-confirm-description > .MuiAlert-message').contains("The order was submitted successfully, thank you!").should('be.visible')           // Check if Client dropdown is disabled to verify order successfully submitted
    .and('exist').and('contain','submitted')
    })

    it("Verify Order Edited Successfully on same screen  - For Boards Category -", function()  {

        cy.viewport(1440, 900)
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

        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root').click().wait(500)                                  // Select Boards
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(500)                                                                         // Tapping to Submit btn
        cy.get('.MuiAlert-message').contains('Please validate the form before submitting the order').should('be.visible')                                       // Assertion for validation message
        cy.get('.MuiAccordionSummary-root').click().wait(500)                                                                                                   // Tapping to Accordian 
        //cy.get('.jss23 > .MuiButtonBase-root').click().wait(500)
        cy.get('button svg path[d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"]').click({force: true})                                       // Getting side menu back buttton

        //=====================================================================>>  Getting elements for Git CI/CD Pipeline  <<===============================================================================================
        
        cy.contains('label', 'Client').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()                           // Client Validation of helper text
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');    
        cy.contains('label', 'Shipping client').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()                  // Shipping client of helper text
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');
        cy.contains('label', 'Billing client').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()                   // Billing client of helper text
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');
        cy.contains('label', 'Your PO').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()                          // PO Validation of helper text 
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');                                                                    
        cy.get('button[aria-label="New Order"]').scrollIntoView();                                                                           
        cy.contains('label', 'Client').next().find('input').click({force: true}).wait(500)                                                                      // Select Client
        cy.get('[role="combobox"]').should('be.visible')
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true}).wait(500)
        cy.contains('label', 'Shipping client').next().find('input').click({force: true});                                                                      // Select Shipping client
        cy.get('[role="combobox"]').should('be.visible');
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true});                                                          
        cy.contains('label', 'Billing client').next().find('input').click({force: true});                                                                       // Select Billing client
        cy.get('[role="combobox"]').should('be.visible');
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true});                  
        cy.contains('label', 'Your PO').next().find('input').type('Automate Boards')                                                                            // Your PO
        cy.contains('label', 'Their PO').next().find('input').type('XYZ 1', { force: true })                                                                    // Their PO
        cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click({force: true})                // Tapping to Expected Date icon        
        cy.get('.MuiCalendarPicker-root').find('button[role="gridcell"]')                                                                                       // Locate date buttons inside the calendar
        .each(($el) => {
            if (!$el.prop('disabled')) {                                                                                                                        // Check if the date is enabled                
                cy.wrap($el).click().wait(500)                                                                                                                  // Click the first enabled date                
                return false                                                                                                                                    // Break the loop after selecting the date
                }
            });  
            
        cy.contains('label', 'Their name').next().find('input').type('Zagg', { force: true })                                                                   // Their Name
        //cy.contains('label', 'Promised date').next().find('input').click({force: true}).wait(10000)                                                       
        cy.get(':nth-child(5) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click({force: true})                // Tapping to promissed Date icon        
        cy.get('.MuiCalendarPicker-root').find('button[role="gridcell"]')                                                                                       // Locate date buttons inside the calendar
        .each(($cl) => {
            if (!$cl.prop('disabled')) {                                                                                                                        // Check if the date is enabled                
                cy.wrap($cl).click().wait(500)                                                                                                                  // Click the first enabled date                
                    return false                                                                                                                                // Break the loop after selecting the date
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

        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root').click().wait(500)                                  // Select Boards
        //.click().wait(500)                   
        /*
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
    })*/

        cy.get('table tbody tr.MuiTableRow-root', { timeout: 10000 }).should('have.length.greaterThan', 0).then(($rowsBefore) => {
            const initialRowCount = $rowsBefore.length;
            cy.wrap($rowsBefore[0]).within(() => {
            cy.get('td.MuiTableCell-root').each(($td) => {
                cy.wrap($td).invoke('text').then((tdValue) => {
                tdValue = tdValue.trim();

                    if (tdValue === '1.') {
                        cy.get('td.MuiTableCell-root').eq(2).find('input').type('89', { force: true }).wait(500)                                                    // Qty
                        cy.get('td.MuiTableCell-root').eq(3).find('input').type('3949', { force: true }).wait(500)                                                  // Model
                        cy.get('td.MuiTableCell-root').eq(4).find('input').type('8153', { force: true }).wait(500)                                                  // color        
                        cy.get('td.MuiTableCell-root').eq(5).find('input').type('555', { force: true }).wait(500)                                                   // back color        
                        //cy.get('td.MuiTableCell-root').eq(5).contains('p', 'Acry-Lux or Almic back').should('exist')                                              // back color
                        cy.get('td.MuiTableCell-root').eq(6).find('input').type('Testing by Automation Script 1', { force: true });                                 // Comments        
                    }
                });
            });
            });
            cy.get('[colspan="8"] > .MuiButtonBase-root').click().wait(2000)                                                                                        // Adding second item
            cy.get('table tbody tr.MuiTableRow-root', { timeout: 10000 }).then(($rowsAfter) => {
            const newRow = $rowsAfter[$rowsAfter.length - 1]; // Get the last (newly added) row
            cy.wrap(newRow).within(() => {
            cy.get('td.MuiTableCell-root').each(($td) => {
            cy.wrap($td).invoke('text').then((tdValue) => {
            tdValue = tdValue.trim();
                    if (tdValue === '2.') {
                        cy.get('td.MuiTableCell-root').eq(2).find('input').type('96', { force: true }).wait(500)                                                    // Qty
                        cy.get('td.MuiTableCell-root').eq(3).find('input').type('3972', { force: true }).wait(500)                                                  // Model
                        cy.get('td.MuiTableCell-root').eq(4).find('input').type('8019', { force: true }).wait(500)                                                  // color        
                        cy.get('td.MuiTableCell-root').eq(5).find('input').type('555', { force: true }).wait(500)                                                   // back color        
                        //cy.get('td.MuiTableCell-root').eq(5).contains('p', 'Polymer back').should('exist')                                                        // back color
                        cy.get('td.MuiTableCell-root').eq(6).find('input').type('Testing by Automation Script 2', { force: true });                                 // Comments        
                    }                                                                   
                });
            });
        });
        })
        })

        cy.get('[aria-label="Save"] > .MuiButtonBase-root').click().wait(10000)                                                                                 // Tapping to save order btn

        //                                                                  Modifying order        
        cy.get('.css-1mrqld1').click().wait(500)                                                                                                                // Tapping to Accordian 
        cy.contains('label', 'Client').next().find('input').clear()                                                                                             // Clear Main Client
        cy.get('[role="combobox"]').should('be.visible').wait(500)                                                                                              // Opening dropdown
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true}).wait(500)                                                  // Selecting client

        cy.contains('label', 'Billing client').next().find('input').click({force: true});                                                                       // Select Billing client
        cy.get('[role="combobox"]').should('be.visible');
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true});
        cy.contains('label', 'Your PO').next().find('input').clear()                                                                                            // Clear Your PO
        cy.contains('label', 'Your PO').next().find('input').type('Automate MullionsDoors 100')                                                                 // Your PO
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
                    cy.get('td.MuiTableCell-root').eq(2).find('input').type('96', { force: true }).wait(500)                                                    // Qty
                    cy.get('td.MuiTableCell-root').eq(3).find('input').type('3972', { force: true }).wait(500)                                                  // Model
                    cy.get('td.MuiTableCell-root').eq(4).find('input').type('8019', { force: true }).wait(500)                                                  // color        
                    cy.get('td.MuiTableCell-root').eq(5).find('input').type('555', { force: true }).wait(500)                                                   // back color        
                    //cy.get('td.MuiTableCell-root').eq(5).contains('p', 'Polymer back').should('exist')                                                        // back color
                    cy.get('td.MuiTableCell-root').eq(6).find('input').type('Testing by Automation Script 2', { force: true });                                 // Comments
                    }
                });
            });
            });
            cy.get('table tbody tr.MuiTableRow-root', { timeout: 10000 }).then(($rowsAfter) => {
            const newRow = $rowsAfter[$rowsAfter.length - 1]; // Get the last (newly added) row
            cy.wrap(newRow).within(() => {
            cy.get('td.MuiTableCell-root').each(($td) => {
            cy.wrap($td).invoke('text').then((tdValue) => {
            tdValue = tdValue.trim();
                    if (tdValue === '2.') {
                    cy.log('Filling the new row with TD=2');                                       
                    cy.get('td.MuiTableCell-root').eq(2).find('input').type('89', { force: true }).wait(500)                                                    // Qty
                    cy.get('td.MuiTableCell-root').eq(3).find('input').type('3949', { force: true }).wait(500)                                                  // Model
                    cy.get('td.MuiTableCell-root').eq(4).find('input').type('8153', { force: true }).wait(500)                                                  // color        
                    cy.get('td.MuiTableCell-root').eq(5).find('input').type('555', { force: true }).wait(500)                                                   // back color        
                    //cy.get('td.MuiTableCell-root').eq(5).contains('p', 'Acry-Lux or Almic back').should('exist')                                              // back color
                    cy.get('td.MuiTableCell-root').eq(6).find('input').type('Testing by Automation Script 1', { force: true });                                 // Comments               
                    }        
                });
            });
            });
            })
            })
            cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(20000)                                                                       // Tapping to Submit btn        
            cy.get('#alert-dialog-confirm-description > .MuiAlert-message').contains("The order was submitted successfully, thank you!").should('be.visible')       // Check if Client dropdown is disabled to verify order successfully submitted
            .and('exist').and('contain','submitted')
        
    })

    it("Verify Order Edited Successfully Via Web Orders Page Flow  - For Boards Category -", function()  {

        cy.viewport(1440, 900)
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

        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root').click().wait(500)                                  // Select Boards
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(500)                                                                         // Tapping to Submit btn
        cy.get('.MuiAlert-message').contains('Please validate the form before submitting the order').should('be.visible')                                       // Assertion for validation message
        cy.get('.MuiAccordionSummary-root').click().wait(500)                                                                                                   // Tapping to Accordian 
        //cy.get('.jss23 > .MuiButtonBase-root').click().wait(500)
        cy.get('button svg path[d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"]').click({force: true})                                       // Getting side menu back buttton

        //=====================================================================>>  Getting elements for Git CI/CD Pipeline  <<===============================================================================================
        
        cy.contains('label', 'Client').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()                           // Client Validation of helper text
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');    
        cy.contains('label', 'Shipping client').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()                  // Shipping client of helper text
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');
        cy.contains('label', 'Billing client').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()                   // Billing client of helper text
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');
        cy.contains('label', 'Your PO').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()                          // PO Validation of helper text 
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');                                                                    
        cy.get('button[aria-label="New Order"]').scrollIntoView();                                                                           
        cy.contains('label', 'Client').next().find('input').click({force: true}).wait(500)                                                                      // Select Client
        cy.get('[role="combobox"]').should('be.visible')
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true}).wait(500)
        cy.contains('label', 'Shipping client').next().find('input').click({force: true});                                                                      // Select Shipping client
        cy.get('[role="combobox"]').should('be.visible');
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true});                                                          
        cy.contains('label', 'Billing client').next().find('input').click({force: true});                                                                       // Select Billing client
        cy.get('[role="combobox"]').should('be.visible');
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true});                  
        cy.contains('label', 'Your PO').next().find('input').type('Automate Boards')                                                                            // Your PO
        cy.contains('label', 'Their PO').next().find('input').type('XYZ 1', { force: true })                                                                    // Their PO
        cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click({force: true})                // Tapping to Expected Date icon        
        cy.get('.MuiCalendarPicker-root').find('button[role="gridcell"]')                                                                                       // Locate date buttons inside the calendar
        .each(($el) => {
            if (!$el.prop('disabled')) {                                                                                                                        // Check if the date is enabled                
                cy.wrap($el).click().wait(500)                                                                                                                  // Click the first enabled date                
                return false                                                                                                                                    // Break the loop after selecting the date
                }
            });  
            
        cy.contains('label', 'Their name').next().find('input').type('Zagg', { force: true })                                                                   // Their Name
        //cy.contains('label', 'Promised date').next().find('input').click({force: true}).wait(10000)                                                       
        cy.get(':nth-child(5) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click({force: true})                // Tapping to promissed Date icon        
        cy.get('.MuiCalendarPicker-root').find('button[role="gridcell"]')                                                                                       // Locate date buttons inside the calendar
        .each(($cl) => {
            if (!$cl.prop('disabled')) {                                                                                                                        // Check if the date is enabled                
                cy.wrap($cl).click().wait(500)                                                                                                                  // Click the first enabled date                
                    return false                                                                                                                                // Break the loop after selecting the date
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

        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root').click().wait(500)                                  // Select Boards
        //.click().wait(500)                   

        cy.get('table tbody tr.MuiTableRow-root', { timeout: 10000 }).should('have.length.greaterThan', 0).then(($rowsBefore) => {
            const initialRowCount = $rowsBefore.length;
            cy.wrap($rowsBefore[0]).within(() => {
            cy.get('td.MuiTableCell-root').each(($td) => {
                cy.wrap($td).invoke('text').then((tdValue) => {
                tdValue = tdValue.trim();

                    if (tdValue === '1.') {
                        cy.get('td.MuiTableCell-root').eq(2).find('input').type('89', { force: true }).wait(500)                                                // Qty
                        cy.get('td.MuiTableCell-root').eq(3).find('input').type('3949', { force: true }).wait(500)                                              // Model
                        cy.get('td.MuiTableCell-root').eq(4).find('input').type('8153', { force: true }).wait(500)                                              // color        
                        cy.get('td.MuiTableCell-root').eq(5).find('input').type('555', { force: true }).wait(500)                                               // back color        
                        //cy.get('td.MuiTableCell-root').eq(5).contains('p', 'Acry-Lux or Almic back').should('exist')                                          // back color
                        cy.get('td.MuiTableCell-root').eq(6).find('input').type('Testing by Automation Script 1', { force: true });                             // Comments        
                    }
                });
            });
            });
            cy.get('[colspan="8"] > .MuiButtonBase-root').click().wait(2000)                                                                                    // Adding second item
            cy.get('table tbody tr.MuiTableRow-root', { timeout: 10000 }).then(($rowsAfter) => {
            const newRow = $rowsAfter[$rowsAfter.length - 1]; // Get the last (newly added) row
            cy.wrap(newRow).within(() => {
            cy.get('td.MuiTableCell-root').each(($td) => {
            cy.wrap($td).invoke('text').then((tdValue) => {
            tdValue = tdValue.trim();
                    if (tdValue === '2.') {
                        cy.get('td.MuiTableCell-root').eq(2).find('input').type('96', { force: true }).wait(500)                                                // Qty
                        cy.get('td.MuiTableCell-root').eq(3).find('input').type('3972', { force: true }).wait(500)                                              // Model
                        cy.get('td.MuiTableCell-root').eq(4).find('input').type('8019', { force: true }).wait(500)                                              // color        
                        cy.get('td.MuiTableCell-root').eq(5).find('input').type('555', { force: true }).wait(500)                                               // back color        
                        //cy.get('td.MuiTableCell-root').eq(5).contains('p', 'Polymer back').should('exist')                                                    // back color
                        cy.get('td.MuiTableCell-root').eq(6).find('input').type('Testing by Automation Script 2', { force: true });                             // Comments        
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
        cy.get(':nth-child(1) > .MuiListItemText-root > .MuiListItemText-primary > .MuiTypography-root > :nth-child(1) > span').click().wait(500)               // Pick the first saved order by name and click it
        cy.contains('button', 'Add a new product', { timeout: 100000 }).should('be.visible')

        cy.get('.css-1mrqld1').click().wait(500)                                                                                                                // Tapping to Accordian 
        cy.contains('label', 'Client').next().find('input').clear()                                                                                             // Clear Main Client
        cy.get('[role="combobox"]').should('be.visible').wait(500)                                                                                              // Opening dropdown
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true}).wait(500)                                                  // Selecting client

        cy.contains('label', 'Billing client').next().find('input').click({force: true});                                                                       // Select Billing client
        cy.get('[role="combobox"]').should('be.visible');
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true});
        cy.contains('label', 'Your PO').next().find('input').clear()                                                                                            // Clear Your PO
        cy.contains('label', 'Your PO').next().find('input').type('Automate MullionsDoors 100')                                                                 // Your PO
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
                    cy.get('td.MuiTableCell-root').eq(2).find('input').type('96', { force: true }).wait(500)                                                    // Qty
                    cy.get('td.MuiTableCell-root').eq(3).find('input').type('3972', { force: true }).wait(500)                                                  // Model
                    cy.get('td.MuiTableCell-root').eq(4).find('input').type('8019', { force: true }).wait(500)                                                  // color        
                    cy.get('td.MuiTableCell-root').eq(5).find('input').type('555', { force: true }).wait(500)                                                   // back color        
                    //cy.get('td.MuiTableCell-root').eq(5).contains('p', 'Polymer back').should('exist')                                                        // back color
                    cy.get('td.MuiTableCell-root').eq(6).find('input').type('Testing by Automation Script 2', { force: true });                                 // Comments
                    }
                });
            });
            });
            cy.get('table tbody tr.MuiTableRow-root', { timeout: 10000 }).then(($rowsAfter) => {
            const newRow = $rowsAfter[$rowsAfter.length - 1]; // Get the last (newly added) row
            cy.wrap(newRow).within(() => {
            cy.get('td.MuiTableCell-root').each(($td) => {
            cy.wrap($td).invoke('text').then((tdValue) => {
            tdValue = tdValue.trim();
                    if (tdValue === '2.') {
                    cy.log('Filling the new row with TD=2');                                       
                    cy.get('td.MuiTableCell-root').eq(2).find('input').type('89', { force: true }).wait(500)                                                    // Qty
                    cy.get('td.MuiTableCell-root').eq(3).find('input').type('3949', { force: true }).wait(500)                                                  // Model
                    cy.get('td.MuiTableCell-root').eq(4).find('input').type('8153', { force: true }).wait(500)                                                  // color        
                    cy.get('td.MuiTableCell-root').eq(5).find('input').type('555', { force: true }).wait(500)                                                   // back color        
                    //cy.get('td.MuiTableCell-root').eq(5).contains('p', 'Acry-Lux or Almic back').should('exist')                                              // back color
                    cy.get('td.MuiTableCell-root').eq(6).find('input').type('Testing by Automation Script 1', { force: true });                                 // Comments               
                    }        
                });
            });
            });
            })
            })
            cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(20000)                                                                       // Tapping to Submit btn        
            cy.get('#alert-dialog-confirm-description > .MuiAlert-message').contains("The order was submitted successfully, thank you!").should('be.visible')       // Check if Client dropdown is disabled to verify order successfully submitted
            .and('exist').and('contain','submitted')
        
    })    

    it("Verify Order created/submitted Successfully - For Preglued Thermoplastic Sheets Category -", function()  {

        cy.viewport(1440, 900)
        cy.visit("https://dev.thermoform.net/") 
        
        cy.get('.MuiTypography-root', { timeout: 30000 }).contains("Identification").should('be.visible').and('exist')                                          // Asssertion of Identification heading is present 
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
        cy.get('.MuiIconButton-colorInherit').click({force: true}).wait(1000)                                                                                    // Click to menu icon        
        cy.get(':nth-child(7) > .MuiButtonBase-root', { timeout: 100000 }).contains("Customer Center").and('exist').and('contain','Customer').click().wait(2000) // Asserting of Customer Center li is present on side menu        
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

        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root').click().wait(500)                                  // Select Preglued Thermoplastic Sheets
        //cy.get(':nth-child(3) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root').click().wait(500)                                

        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(500)                                                                         // Tapping to Submit btn
        cy.get('.MuiAlert-message').contains('Please validate the form before submitting the order').should('be.visible')                                       // Assertion for validation message
        cy.get('.MuiAccordionSummary-root').click().wait(500)                                                                                                   // Tapping to Accordian 
        //cy.get('.jss23 > .MuiButtonBase-root').click().wait(500)
        cy.get('button svg path[d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"]').click({force: true})                                       // Getting side menu back buttton          

        
    //=====================================================================>>  Getting elements for Git CI/CD Pipeline  <<===============================================================================================

                    //                                                          Submitting Order with Required values
                    //                                                              >>>>> Adding form data <<<<<                

        
        cy.contains('label', 'Client').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()                           // Client Validation of helper text
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');    
        cy.contains('label', 'Shipping client').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()                  // Shipping client of helper text
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');
        cy.contains('label', 'Billing client').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()                   // Billing client of helper text
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');
        cy.contains('label', 'Your PO').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()                          // PO Validation of helper text 
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');                                                                    
        cy.get('button[aria-label="New Order"]').scrollIntoView();                                                                           
        cy.contains('label', 'Client').next().find('input').click({force: true}).wait(500)                                                                      // Select Client
        cy.get('[role="combobox"]').should('be.visible')
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true}).wait(500)
                
        cy.contains('label', 'Shipping client').next().find('input').click({force: true});                                                                      // Select Shipping client
        cy.get('[role="combobox"]').should('be.visible');
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true});                                                          
                
        cy.contains('label', 'Billing client').next().find('input').click({force: true});                                                                       // Select Billing client
        cy.get('[role="combobox"]').should('be.visible');
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true});                                                           
                
        cy.contains('label', 'Your PO').next().find('input').type('Automate Preglued Thermoplastic')                                                            // Your PO

        //                                                      >>>>> Adding Preglued Thermoplastic Sheets category table data required fields <<<<<   

        cy.contains('div', '1 Preglued Thermoplastic Sheets').click()
        //cy.get('td.MuiTableCell-root').eq(3).find('input').should('exist').should('have.attr', 'aria-invalid', 'true').closest('.MuiFormControl-root')        // Validation of helper text for invalid input
        //.find('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');

        cy.get('td.MuiTableCell-root').eq(3).find('input').click({ force: true }).wait(1000)                                                                    // asserting all data in Model dropdown
                    cy.get('.MuiAutocomplete-listbox').find('li.MuiAutocomplete-option')
                        .each(($li) => {
                            cy.wrap($li).invoke('text').then((text) => { 
                            const expectedOptions = [
                                '(empty)',
                                '2923Polymer 4\' x 10\'',
                                '2924Polymer 4\' x 4\'',
                                '2925Polymer 4\' x 8\'',
                                '2933Thermolam 4\' x 8\'',
                                '2934Thermolam 4\' x 10\'',
                                '2937Polylam 4\' x 9\'',
                                '2971Pre-glued 4\' x 9\'',
                            ];
                            expect(expectedOptions).to.include(text); 
                            });
                        });
        cy.get('td.MuiTableCell-root').eq(3).find('input').type('2937', { force: true }).wait(500)                                                              // Model
        cy.get('td.MuiTableCell-root').eq(4).find('input').type('8165', { force: true }).wait(500)                                                              // color        
        //cy.get('.headerActions > .MuiButton-contained').click()                                                                                               // Tapping to Print btn
        //cy.get('button[aria-label="close"]', { timeout: 50000 }).should('exist').click()                                                                      // Closing print view                                    
        cy.get('.css-9hpeq4', { timeout: 50000 }).contains('Submit').should('be.enabled').click().wait(1000)                                                    // Tapping to Submit btn
        
        //                                                        Submitting Order with both Required and optional values
        //                                                                    >>>>> Adding form data <<<<<               

        cy.get('.css-1ubxkj1 > :nth-child(2)').click().wait(1000)                                                                                               // Tap to create new order btn
        cy.get('[data-tour="order.action.new"]').click().wait(1000)                                                                                             // Adding fresh order
        cy.get('.MuiDialogActions-root > :nth-child(2)').click()                                                                                                // Tapping to OK btn

        cy.contains('label', 'Client').next().find('input').click({force: true})                                                                                // Select Client to remove
        cy.contains('label', 'Client').next().find('input').clear()
    
        cy.get('[role="combobox"]').should('be.visible').wait(500)
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true}).wait(500)
            
        cy.contains('label', 'Shipping client').next().find('input').click({force: true});                                                                      // Select Shipping client
        cy.get('[role="combobox"]').should('be.visible');
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true});                                                          
            
        cy.contains('label', 'Billing client').next().find('input').click({force: true});                                                                       // Select Billing client
        cy.get('[role="combobox"]').should('be.visible');
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true});

        cy.contains('label', 'Your PO').next().find('input').type('Automate Preglued Thermoplastic')                                                            // Your PO
        cy.contains('label', 'Their PO').next().find('input').type('XYZ 1', { force: true })                                                                    // Their PO
        cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click({force: true})                // Tapping to Expected Date icon        
        cy.get('.MuiCalendarPicker-root').find('button[role="gridcell"]')                                                                                       // Locate date buttons inside the calendar
            .each(($el) => {
                if (!$el.prop('disabled')) {                                                                                                                    // Check if the date is enabled                
                    cy.wrap($el).click().wait(500)                                                                                                              // Click the first enabled date                
                    return false                                                                                                                                // Break the loop after selecting the date
                    }
                });  
                
        cy.contains('label', 'Their name').next().find('input').type('Zagg', { force: true })                                                                   // Their Name
        //cy.contains('label', 'Promised date').next().find('input').click({force: true}).wait(10000)                                                       
        cy.get(':nth-child(5) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click({force: true})                // Tapping to promissed Date icon        
        cy.get('.MuiCalendarPicker-root').find('button[role="gridcell"]')                                                                                       // Locate date buttons inside the calendar
        .each(($cl) => {
            if (!$cl.prop('disabled')) {                                                                                                                        // Check if the date is enabled                
                cy.wrap($cl).click().wait(500)                                                                                                                  // Click the first enabled date                
                    return false                                                                                                                                // Break the loop after selecting the date
                }
                });        
            cy.get('.css-x7mp9n').first().type('ABC 1', { force: true })                                                                                        // Note            
            const filePath = 'images/sample-image.png';                                                                                                         // Define the file path relative to the cypress/fixtures directory            
            cy.get('input[type="file"]#estimator-image-input').attachFile(filePath)                                                                             // Upload the file using the input element
            .then(input => {                
            expect(input[0].files[0].name).to.equal('sample-image.png');                                                                                        // Verify that the file is uploaded
            });    
        cy.get(':nth-child(1) > .MuiFormControlLabel-root > .MuiTypography-root > .css-zfsz4h').click()                                                         // Tapping to inch/mm

        //                                                      >>>>> Adding Preglued Thermoplastic Sheets category table data  <<<<<        


        cy.get('.css-budqf6').contains('Add section').click({force: true}).wait(1000)                                                                           // Tapping to Add color btn
        cy.contains('label', 'Section name').next().find('input').should('be.visible').type('Preglued Thermoplastic Sheets');                                   // Section Name        
        //cy.contains('label', 'Notes').eq(1).parent().find('input').type('Automating Molded Category with Doors Section', { force: true });                    // Section Notes                  
        cy.get('.MuiBox-root > .MuiGrid-container > .MuiGrid-root > .MuiButtonBase-root').click().wait(500)                                                     // Tapping to Add a new product btn
        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root').click().wait(500)                                  // Select Preglued Thermoplastic Sheets
        //cy.wait(2000)                   
        cy.get('table tbody tr.MuiTableRow-root', { timeout: 10000 }).should('have.length.greaterThan', 0).then(($rowsBefore) => {
        const initialRowCount = $rowsBefore.length;
        cy.wrap($rowsBefore[0]).within(() => {
        cy.get('td.MuiTableCell-root').each(($td) => {
            cy.wrap($td).invoke('text').then((tdValue) => {
            tdValue = tdValue.trim();

                if (tdValue === '1.') {
                    cy.get('td.MuiTableCell-root').eq(2).find('input').type('52', { force: true }).wait(500)                                                    // Qty
                    cy.get('td.MuiTableCell-root').eq(3).find('input').type('2971', { force: true }).wait(500)                                                  // Model
                    cy.get('td.MuiTableCell-root').eq(4).find('input').type('5010', { force: true }).wait(500)                                                  // color
                    cy.get('td.MuiTableCell-root').eq(5).find('input').type('Testing by Automation Script 1', { force: true });                                 // Comments        
                }
            });
        });
        });
        cy.get('[colspan="7"] > .MuiButtonBase-root').click().wait(2000)                                                                                        // Adding second item
        cy.get('table tbody tr.MuiTableRow-root', { timeout: 10000 }).then(($rowsAfter) => {
        const newRow = $rowsAfter[$rowsAfter.length - 1]; // Get the last (newly added) row
        cy.wrap(newRow).within(() => {
        cy.get('td.MuiTableCell-root').each(($td) => {
        cy.wrap($td).invoke('text').then((tdValue) => {
        tdValue = tdValue.trim();
                if (tdValue === '2.') {
                    cy.get('td.MuiTableCell-root').eq(2).find('input').type('44', { force: true }).wait(500)                                                    // Qty
                    cy.get('td.MuiTableCell-root').eq(3).find('input').type('2934', { force: true }).wait(500)                                                  // Model
                    cy.get('td.MuiTableCell-root').eq(4).find('input').type('5006', { force: true }).wait(500)                                                  // color
                    cy.get('td.MuiTableCell-root').eq(5).find('input').type('Testing by Automation Script 2', { force: true });                                 // Comments        
                }                                                                   
            });
        });
    });
    })
    })
    cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(20000)                                                                           // Tapping to Submit btn
    cy.get('#alert-dialog-confirm-description > .MuiAlert-message').contains("The order was submitted successfully, thank you!").should('be.visible')           // Check if Client dropdown is disabled to verify order successfully submitted
    .and('exist').and('contain','submitted')
    
    })

    it("Verify Order Edited Successfully on same screen  - For Preglued Thermoplastic Sheets Category -", function()  {

        cy.viewport(1440, 900)
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

        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root').click().wait(500)                                  // Select Preglued Thermoplastic Sheets
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(500)                                                                         // Tapping to Submit btn
        cy.get('.MuiAlert-message').contains('Please validate the form before submitting the order').should('be.visible')                                       // Assertion for validation message
        cy.get('.MuiAccordionSummary-root').click().wait(500)                                                                                                   // Tapping to Accordian 
        //cy.get('.jss23 > .MuiButtonBase-root').click().wait(500)
        cy.get('button svg path[d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"]').click({force: true})                                       // Getting side menu back buttton

        //=====================================================================>>  Getting elements for Git CI/CD Pipeline  <<===============================================================================================
        
        cy.contains('label', 'Client').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()                           // Client Validation of helper text
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');    
        cy.contains('label', 'Shipping client').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()                  // Shipping client of helper text
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');
        cy.contains('label', 'Billing client').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()                   // Billing client of helper text
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');
        cy.contains('label', 'Your PO').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()                          // PO Validation of helper text 
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');                                                                    
        cy.get('button[aria-label="New Order"]').scrollIntoView();                                                                           
        cy.contains('label', 'Client').next().find('input').click({force: true}).wait(500)                                                                      // Select Client
        cy.get('[role="combobox"]').should('be.visible')
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true}).wait(500)
        cy.contains('label', 'Shipping client').next().find('input').click({force: true});                                                                      // Select Shipping client
        cy.get('[role="combobox"]').should('be.visible');
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true});                                                          
        cy.contains('label', 'Billing client').next().find('input').click({force: true});                                                                       // Select Billing client
        cy.get('[role="combobox"]').should('be.visible');
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true});                  
        cy.contains('label', 'Your PO').next().find('input').type('Automate Preglued Thermoplastic')                                                            // Your PO
        cy.contains('label', 'Their PO').next().find('input').type('XYZ 1', { force: true })                                                                    // Their PO
        cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click({force: true})                // Tapping to Expected Date icon        
        cy.get('.MuiCalendarPicker-root').find('button[role="gridcell"]')                                                                                       // Locate date buttons inside the calendar
        .each(($el) => {
            if (!$el.prop('disabled')) {                                                                                                                        // Check if the date is enabled                
                cy.wrap($el).click().wait(500)                                                                                                                  // Click the first enabled date                
                return false                                                                                                                                    // Break the loop after selecting the date
                }
            });  
            
        cy.contains('label', 'Their name').next().find('input').type('Zagg', { force: true })                                                                   // Their Name
        //cy.contains('label', 'Promised date').next().find('input').click({force: true}).wait(10000)                                                       
        cy.get(':nth-child(5) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click({force: true})                // Tapping to promissed Date icon        
        cy.get('.MuiCalendarPicker-root').find('button[role="gridcell"]')                                                                                       // Locate date buttons inside the calendar
        .each(($cl) => {
            if (!$cl.prop('disabled')) {                                                                                                                        // Check if the date is enabled                
                cy.wrap($cl).click().wait(500)                                                                                                                  // Click the first enabled date                
                    return false                                                                                                                                // Break the loop after selecting the date
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

        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root').click().wait(500)                                  // Select Preglued Thermoplastic Sheets
        //.click().wait(500)                           
        cy.get('table tbody tr.MuiTableRow-root', { timeout: 10000 }).should('have.length.greaterThan', 0).then(($rowsBefore) => {
            const initialRowCount = $rowsBefore.length;
            cy.wrap($rowsBefore[0]).within(() => {
            cy.get('td.MuiTableCell-root').each(($td) => {
                cy.wrap($td).invoke('text').then((tdValue) => {
                tdValue = tdValue.trim();
    
                    if (tdValue === '1.') {
                        cy.get('td.MuiTableCell-root').eq(2).find('input').type('52', { force: true }).wait(500)                                                // Qty                        
                        cy.get('td.MuiTableCell-root').eq(3).find('input').type('2971', { force: true }).wait(500)                                              // Model
                        cy.get('td.MuiTableCell-root').eq(4).find('input').type('5010', { force: true }).wait(500)                                              // color
                        cy.get('td.MuiTableCell-root').eq(5).find('input').type('Testing by Automation Script 1', { force: true });                             // Comments        
                    }
                });
            });
            });
            cy.get('[colspan="7"] > .MuiButtonBase-root').click().wait(2000)                                                                                    // Adding second item
            cy.get('table tbody tr.MuiTableRow-root', { timeout: 10000 }).then(($rowsAfter) => {
            const newRow = $rowsAfter[$rowsAfter.length - 1]; // Get the last (newly added) row
            cy.wrap(newRow).within(() => {
            cy.get('td.MuiTableCell-root').each(($td) => {
            cy.wrap($td).invoke('text').then((tdValue) => {
            tdValue = tdValue.trim();
                    if (tdValue === '2.') {
                        cy.get('td.MuiTableCell-root').eq(2).find('input').type('44', { force: true }).wait(500)                                                // Qty
                        cy.get('td.MuiTableCell-root').eq(3).find('input').type('2934', { force: true }).wait(500)                                              // Model
                        cy.get('td.MuiTableCell-root').eq(4).find('input').type('5006', { force: true }).wait(500)                                              // color
                        cy.get('td.MuiTableCell-root').eq(5).find('input').type('Testing by Automation Script 2', { force: true });                             // Comments        
                    }                                                                   
                });
            });
        });
        })
        })

        cy.get('[aria-label="Save"] > .MuiButtonBase-root').click().wait(10000)                                                                                 // Tapping to save order btn

        //                                                                  Modifying order        
        cy.get('.css-1mrqld1').click().wait(500)                                                                                                                // Tapping to Accordian 
        cy.contains('label', 'Client').next().find('input').clear()                                                                                             // Clear Main Client
        cy.get('[role="combobox"]').should('be.visible').wait(500)                                                                                              // Opening dropdown
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true}).wait(500)                                                  // Selecting client

        cy.contains('label', 'Billing client').next().find('input').click({force: true});                                                                       // Select Billing client
        cy.get('[role="combobox"]').should('be.visible');
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true});
        cy.contains('label', 'Your PO').next().find('input').clear()                                                                                            // Clear Your PO
        cy.contains('label', 'Your PO').next().find('input').type('Automate MullionsDoors 100')                                                                 // Your PO
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
                        cy.get('td.MuiTableCell-root').eq(2).find('input').type('44', { force: true }).wait(500)                                                    // Qty
                        cy.get('td.MuiTableCell-root').eq(3).find('input').type('2934', { force: true }).wait(500)                                                  // Model
                        cy.get('td.MuiTableCell-root').eq(4).find('input').type('5006', { force: true }).wait(500)                                                  // color
                        cy.get('td.MuiTableCell-root').eq(5).find('input').type('Testing by Automation Script 2', { force: true });                                 // Comments        
                    }
                });
            });
            });
            //cy.get('[colspan="7"] > .MuiButtonBase-root').click().wait(2000)                                                                                        // Adding second item
            cy.get('table tbody tr.MuiTableRow-root', { timeout: 10000 }).then(($rowsAfter) => {
            const newRow = $rowsAfter[$rowsAfter.length - 1]; // Get the last (newly added) row
            cy.wrap(newRow).within(() => {
            cy.get('td.MuiTableCell-root').each(($td) => {
            cy.wrap($td).invoke('text').then((tdValue) => {
            tdValue = tdValue.trim();
                    if (tdValue === '2.') {
                        cy.get('td.MuiTableCell-root').eq(2).find('input').type('52', { force: true }).wait(500)                                                    // Qty
                        cy.get('td.MuiTableCell-root').eq(3).find('input').type('2971', { force: true }).wait(500)                                                  // Model
                        cy.get('td.MuiTableCell-root').eq(4).find('input').type('5010', { force: true }).wait(500)                                                  // color
                        cy.get('td.MuiTableCell-root').eq(5).find('input').type('Testing by Automation Script 1', { force: true });                                 // Comments        
                    }                                                                   
                });
            });
        });
        })
        })
            cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(20000)                                                                       // Tapping to Submit btn        
            cy.get('#alert-dialog-confirm-description > .MuiAlert-message').contains("The order was submitted successfully, thank you!").should('be.visible')       // Check if Client dropdown is disabled to verify order successfully submitted
            .and('exist').and('contain','submitted')
        
    })

    it("Verify Order Edited Successfully via Web Orders Page Flow  - For Preglued Thermoplastic Sheets Category -", function()  {

        cy.viewport(1440, 900)
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

        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root').click().wait(500)                                  // Select Preglued Thermoplastic Sheets
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(500)                                                                         // Tapping to Submit btn
        cy.get('.MuiAlert-message').contains('Please validate the form before submitting the order').should('be.visible')                                       // Assertion for validation message
        cy.get('.MuiAccordionSummary-root').click().wait(500)                                                                                                   // Tapping to Accordian 
        //cy.get('.jss23 > .MuiButtonBase-root').click().wait(500)
        cy.get('button svg path[d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"]').click({force: true})                                       // Getting side menu back buttton

        //=====================================================================>>  Getting elements for Git CI/CD Pipeline  <<===============================================================================================
        
        cy.contains('label', 'Client').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()                           // Client Validation of helper text
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');    
        cy.contains('label', 'Shipping client').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()                  // Shipping client of helper text
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');
        cy.contains('label', 'Billing client').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()                   // Billing client of helper text
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');
        cy.contains('label', 'Your PO').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()                          // PO Validation of helper text 
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');                                                                    
        cy.get('button[aria-label="New Order"]').scrollIntoView();                                                                           
        cy.contains('label', 'Client').next().find('input').click({force: true}).wait(500)                                                                      // Select Client
        cy.get('[role="combobox"]').should('be.visible')
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true}).wait(500)
        cy.contains('label', 'Shipping client').next().find('input').click({force: true});                                                                      // Select Shipping client
        cy.get('[role="combobox"]').should('be.visible');
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true});                                                          
        cy.contains('label', 'Billing client').next().find('input').click({force: true});                                                                       // Select Billing client
        cy.get('[role="combobox"]').should('be.visible');
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true});                  
        cy.contains('label', 'Your PO').next().find('input').type('Automate Preglued Thermoplastic')                                                            // Your PO
        cy.contains('label', 'Their PO').next().find('input').type('XYZ 1', { force: true })                                                                    // Their PO
        cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click({force: true})                // Tapping to Expected Date icon        
        cy.get('.MuiCalendarPicker-root').find('button[role="gridcell"]')                                                                                       // Locate date buttons inside the calendar
        .each(($el) => {
            if (!$el.prop('disabled')) {                                                                                                                        // Check if the date is enabled                
                cy.wrap($el).click().wait(500)                                                                                                                  // Click the first enabled date                
                return false                                                                                                                                    // Break the loop after selecting the date
                }
            });  
            
        cy.contains('label', 'Their name').next().find('input').type('Zagg', { force: true })                                                                   // Their Name
        //cy.contains('label', 'Promised date').next().find('input').click({force: true}).wait(10000)                                                       
        cy.get(':nth-child(5) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click({force: true})                // Tapping to promissed Date icon        
        cy.get('.MuiCalendarPicker-root').find('button[role="gridcell"]')                                                                                       // Locate date buttons inside the calendar
        .each(($cl) => {
            if (!$cl.prop('disabled')) {                                                                                                                        // Check if the date is enabled                
                cy.wrap($cl).click().wait(500)                                                                                                                  // Click the first enabled date                
                    return false                                                                                                                                // Break the loop after selecting the date
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

        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root').click().wait(500)                                  // Select Preglued Thermoplastic Sheets
        //.click().wait(500)                           
        cy.get('table tbody tr.MuiTableRow-root', { timeout: 10000 }).should('have.length.greaterThan', 0).then(($rowsBefore) => {
            const initialRowCount = $rowsBefore.length;
            cy.wrap($rowsBefore[0]).within(() => {
            cy.get('td.MuiTableCell-root').each(($td) => {
                cy.wrap($td).invoke('text').then((tdValue) => {
                tdValue = tdValue.trim();
    
                    if (tdValue === '1.') {
                        cy.get('td.MuiTableCell-root').eq(2).find('input').type('52', { force: true }).wait(500)                                                // Qty                        
                        cy.get('td.MuiTableCell-root').eq(3).find('input').type('2971', { force: true }).wait(500)                                              // Model
                        cy.get('td.MuiTableCell-root').eq(4).find('input').type('5010', { force: true }).wait(500)                                              // color
                        cy.get('td.MuiTableCell-root').eq(5).find('input').type('Testing by Automation Script 1', { force: true });                             // Comments        
                    }
                });
            });
            });
            cy.get('[colspan="7"] > .MuiButtonBase-root').click().wait(2000)                                                                                    // Adding second item
            cy.get('table tbody tr.MuiTableRow-root', { timeout: 10000 }).then(($rowsAfter) => {
            const newRow = $rowsAfter[$rowsAfter.length - 1]; // Get the last (newly added) row
            cy.wrap(newRow).within(() => {
            cy.get('td.MuiTableCell-root').each(($td) => {
            cy.wrap($td).invoke('text').then((tdValue) => {
            tdValue = tdValue.trim();
                    if (tdValue === '2.') {
                        cy.get('td.MuiTableCell-root').eq(2).find('input').type('44', { force: true }).wait(500)                                                // Qty
                        cy.get('td.MuiTableCell-root').eq(3).find('input').type('2934', { force: true }).wait(500)                                              // Model
                        cy.get('td.MuiTableCell-root').eq(4).find('input').type('5006', { force: true }).wait(500)                                              // color
                        cy.get('td.MuiTableCell-root').eq(5).find('input').type('Testing by Automation Script 2', { force: true });                             // Comments        
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
        cy.get(':nth-child(1) > .MuiListItemText-root > .MuiListItemText-primary > .MuiTypography-root > :nth-child(1) > span').click().wait(500)               // Pick the first saved order by name and click it
        cy.contains('button', 'Add a new product', { timeout: 100000 }).should('be.visible')

        //                                                                  Modifying order        
        cy.get('.css-1mrqld1').click().wait(500)                                                                                                                // Tapping to Accordian 
        cy.contains('label', 'Client').next().find('input').clear()                                                                                             // Clear Main Client
        cy.get('[role="combobox"]').should('be.visible').wait(500)                                                                                              // Opening dropdown
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true}).wait(500)                                                  // Selecting client

        cy.contains('label', 'Billing client').next().find('input').click({force: true});                                                                       // Select Billing client
        cy.get('[role="combobox"]').should('be.visible');
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true});
        cy.contains('label', 'Your PO').next().find('input').clear()                                                                                            // Clear Your PO
        cy.contains('label', 'Your PO').next().find('input').type('Automate MullionsDoors 100')                                                                 // Your PO
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
                        cy.get('td.MuiTableCell-root').eq(2).find('input').type('44', { force: true }).wait(500)                                                    // Qty
                        cy.get('td.MuiTableCell-root').eq(3).find('input').type('2934', { force: true }).wait(500)                                                  // Model
                        cy.get('td.MuiTableCell-root').eq(4).find('input').type('5006', { force: true }).wait(500)                                                  // color
                        cy.get('td.MuiTableCell-root').eq(5).find('input').type('Testing by Automation Script 2', { force: true });                                 // Comments        
                    }
                });
            });
            });
            cy.get('table tbody tr.MuiTableRow-root', { timeout: 10000 }).then(($rowsAfter) => {
            const newRow = $rowsAfter[$rowsAfter.length - 1]; // Get the last (newly added) row
            cy.wrap(newRow).within(() => {
            cy.get('td.MuiTableCell-root').each(($td) => {
            cy.wrap($td).invoke('text').then((tdValue) => {
            tdValue = tdValue.trim();
                    if (tdValue === '2.') {
                        cy.get('td.MuiTableCell-root').eq(2).find('input').type('52', { force: true }).wait(500)                                                    // Qty
                        cy.get('td.MuiTableCell-root').eq(3).find('input').type('2971', { force: true }).wait(500)                                                  // Model
                        cy.get('td.MuiTableCell-root').eq(4).find('input').type('5010', { force: true }).wait(500)                                                  // color
                        cy.get('td.MuiTableCell-root').eq(5).find('input').type('Testing by Automation Script 1', { force: true });                                 // Comments        
                    }                                                                   
                });
            });
        });
        })
        })
            cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(20000)                                                                       // Tapping to Submit btn        
            cy.get('#alert-dialog-confirm-description > .MuiAlert-message').contains("The order was submitted successfully, thank you!").should('be.visible')       // Check if Client dropdown is disabled to verify order successfully submitted
            .and('exist').and('contain','submitted')
        
    })

    it("Verify Order created/submitted Successfully - For Thermolam Category -", function()  {
       
        cy.viewport(1440, 900)
        cy.visit("https://dev.thermoform.net/") 

        cy.get('.MuiTypography-root', { timeout: 30000 }).contains("Identification").should('be.visible').and('exist')                                          // Asssertion of Identification heading is present 
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
        cy.get('.MuiIconButton-colorInherit').click({force: true}).wait(1000)                                                                                    // Click to menu icon        
        cy.get(':nth-child(7) > .MuiButtonBase-root', { timeout: 100000 }).contains("Customer Center").and('exist').and('contain','Customer').click().wait(2000) // Asserting of Customer Center li is present on side menu        
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
        //cy.get(':nth-child(3) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root').click().wait(500)                                
        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(3) > .MuiButtonBase-root').click().wait(500)                                  // Select Thermolam    
        

        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(500)                                                                         // Tapping to Submit btn
        cy.get('.MuiAlert-message').contains('Please validate the form before submitting the order').should('be.visible')                                       // Assertion for validation message
        cy.get('.MuiAccordionSummary-root').click().wait(500)                                                                                                   // Tapping to Accordian 
        //cy.get('.jss23 > .MuiButtonBase-root').click().wait(500)
        cy.get('button svg path[d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"]').click({force: true})                                       // Getting side menu back buttton          

    //=====================================================================>>  Getting elements for Git CI/CD Pipeline  <<===============================================================================================

                    //                                                        Submitting Order with Required values
                    //                                                           >>>>> Adding form data <<<<<                
                    
                
        cy.contains('label', 'Client').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()                           // Client Validation of helper text
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');    
        cy.contains('label', 'Shipping client').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()                  // Shipping client of helper text
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');
        cy.contains('label', 'Billing client').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()                   // Billing client of helper text
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');
        cy.contains('label', 'Your PO').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()                          // PO Validation of helper text 
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');                                                                    
        cy.get('button[aria-label="New Order"]').scrollIntoView();                                                                           
        cy.contains('label', 'Client').next().find('input').click({force: true}).wait(500)                                                                      // Select Client
        cy.get('[role="combobox"]').should('be.visible')
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true}).wait(500)
                
        cy.contains('label', 'Shipping client').next().find('input').click({force: true});                                                                      // Select Shipping client
        cy.get('[role="combobox"]').should('be.visible');
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true});                                                          
                
        cy.contains('label', 'Billing client').next().find('input').click({force: true});                                                                       // Select Billing client
        cy.get('[role="combobox"]').should('be.visible');
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true});                  
        cy.contains('label', 'Your PO').next().find('input').type('Automate Thermolam 11')                                                                      // Your PO

        //                                                      >>>>> Adding Thermolam category table data required fields <<<<<   

        cy.contains('div', '1 Thermolam').click()
        //cy.get('td.MuiTableCell-root').eq(3).find('input').should('exist').should('have.attr', 'aria-invalid', 'true').closest('.MuiFormControl-root')        // Validation of helper text for invalid input
        //.find('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');
        cy.get('td.MuiTableCell-root').eq(3).find('input').click({ force: true }).wait(1000)                                                                    // asserting all data in Model fropdown
                    cy.get('.MuiAutocomplete-listbox').find('li.MuiAutocomplete-option')
                        .each(($li) => {
                            cy.wrap($li).invoke('text').then((text) => { 
                            const expectedOptions = [
                                '(empty)',
                                '2931Thermolam Phenolic Backing (48.5" x 96.5")',
                                '2932Thermolam Phenolic Backing (48.5" x 120.5")',
                                '2935Polylam Polystyrene Backing 4 X 9',
                                '2970Acry-Lux Sheet 49x109',
                                '2972Acry-Lux Sheet'
                            ];
                            expect(expectedOptions).to.include(text); 
                            });
                        });        
        cy.get('td.MuiTableCell-root').eq(3).find('input').type('2935', { force: true }).wait(500)                                                              // Model
        cy.get('td.MuiTableCell-root').eq(4).find('input').type('8151', { force: true }).wait(500)                                                              // color        
        //cy.get('.headerActions > .MuiButton-contained').click()                                                                                               // Tapping to Print btn
        //cy.get('button[aria-label="close"]', { timeout: 50000 }).should('exist').click()                                                                      // Closing print view                                    
        cy.get('.css-9hpeq4', { timeout: 50000 }).contains('Submit').should('be.enabled').click().wait(10000)                                                   // Tapping to Submit btn

        //                                                        Submitting Order with both Required and optional values
        //                                                                    >>>>> Adding form data <<<<<               


        cy.get('.css-1ubxkj1 > :nth-child(2)').click().wait(1000)                                                                                               // Tap to create new order btn
        //cy.get('button.MuiButton-root').contains('Create new order').should('be.visible').click(); 
        cy.get('[data-tour="order.action.new"]').click().wait(1000)                                                                                             // Adding fresh order
        cy.get('.MuiDialogActions-root > :nth-child(2)').click()                                                                                                // Tapping to OK btn

        cy.contains('label', 'Client').next().find('input').click({force: true})                                                                                // Select Client to remove
        cy.contains('label', 'Client').next().find('input').clear()
    
        cy.get('[role="combobox"]').should('be.visible').wait(500)
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true}).wait(500)
            
        cy.contains('label', 'Shipping client').next().find('input').click({force: true});                                                                      // Select Shipping client
        cy.get('[role="combobox"]').should('be.visible');
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true});                                                          
            
        cy.contains('label', 'Billing client').next().find('input').click({force: true});                                                                       // Select Billing client
        cy.get('[role="combobox"]').should('be.visible');
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true});                            

        cy.contains('label', 'Your PO').next().find('input').type('Automate Thermolam 11')                                                                      // Your PO
        cy.contains('label', 'Their PO').next().find('input').type('XYZ 1', { force: true })                                                                    // Their PO
        cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click({force: true})                // Tapping to Expected Date icon        
        cy.get('.MuiCalendarPicker-root').find('button[role="gridcell"]')                                                                                       // Locate date buttons inside the calendar
            .each(($el) => {
                if (!$el.prop('disabled')) {                                                                                                                    // Check if the date is enabled                
                    cy.wrap($el).click().wait(500)                                                                                                              // Click the first enabled date                
                    return false                                                                                                                                // Break the loop after selecting the date
                    }
                });  
                
        cy.contains('label', 'Their name').next().find('input').type('Zagg', { force: true })                                                                   // Their Name
        //cy.contains('label', 'Promised date').next().find('input').click({force: true}).wait(10000)                                                       
        cy.get(':nth-child(5) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click({force: true})                // Tapping to promissed Date icon        
        cy.get('.MuiCalendarPicker-root').find('button[role="gridcell"]')                                                                                       // Locate date buttons inside the calendar
        .each(($cl) => {
            if (!$cl.prop('disabled')) {                                                                                                                        // Check if the date is enabled                
                cy.wrap($cl).click().wait(500)                                                                                                                  // Click the first enabled date                
                    return false                                                                                                                                // Break the loop after selecting the date
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

        //                                                      >>>>> Adding Preglued Thermoplastic Sheets category table data  <<<<<        

        cy.get('.css-budqf6').contains('Add section').click({force: true}).wait(1000)                                                                           // Tapping to Add color btn
        cy.contains('label', 'Section name').next().find('input').should('be.visible').type('Thermolam');                                                       // Section Name        
        //cy.contains('label', 'Notes').eq(1).parent().find('input').type('Automating Molded Category with Doors Section', { force: true });                    // Section Notes                  
        cy.get('.MuiBox-root > .MuiGrid-container > .MuiGrid-root > .MuiButtonBase-root').click().wait(500)                                                     // Tapping to Add a new product btn
        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(3) > .MuiButtonBase-root').click().wait(500)                                  // Select Thermolam    
        //cy.wait(2000)                   
        cy.get('table tbody tr.MuiTableRow-root', { timeout: 10000 }).should('have.length.greaterThan', 0).then(($rowsBefore) => {
        const initialRowCount = $rowsBefore.length;
        cy.wrap($rowsBefore[0]).within(() => {
        cy.get('td.MuiTableCell-root').each(($td) => {
            cy.wrap($td).invoke('text').then((tdValue) => {
            tdValue = tdValue.trim();

                if (tdValue === '1.') {
                    cy.get('td.MuiTableCell-root').eq(2).find('input').type('52', { force: true }).wait(500)                                                    // Qty
                    cy.get('td.MuiTableCell-root').eq(3).find('input').type('2970', { force: true }).wait(500)                                                  // Model
                    cy.get('td.MuiTableCell-root').eq(4).find('input').type('8001', { force: true }).wait(500)                                                  // color
                    cy.get('td.MuiTableCell-root').eq(5).find('input').type('Testing by Automation Script 1', { force: true });                                 // Comments        
                }
            });
        });
        });
        cy.get('[colspan="7"] > .MuiButtonBase-root').click().wait(2000)                                                                                        // Adding second item
        cy.get('table tbody tr.MuiTableRow-root', { timeout: 10000 }).then(($rowsAfter) => {
        const newRow = $rowsAfter[$rowsAfter.length - 1]; // Get the last (newly added) row
        cy.wrap(newRow).within(() => {
        cy.get('td.MuiTableCell-root').each(($td) => {
        cy.wrap($td).invoke('text').then((tdValue) => {
        tdValue = tdValue.trim();
                if (tdValue === '2.') {
                    cy.get('td.MuiTableCell-root').eq(2).find('input').type('14', { force: true }).wait(500)                                                    // Qty
                    cy.get('td.MuiTableCell-root').eq(3).find('input').type('2931', { force: true }).wait(500)                                                  // Model
                    cy.get('td.MuiTableCell-root').eq(4).find('input').type('7020', { force: true }).wait(500)                                                  // color
                    cy.get('td.MuiTableCell-root').eq(5).find('input').type('Testing by Automation Script 2', { force: true });                                 // Comments        
                }                                                                   
            });
        });
    });
    })
    })
    cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(20000)                                                                           // Tapping to Submit btn
    cy.get('#alert-dialog-confirm-description > .MuiAlert-message').contains("The order was submitted successfully, thank you!").should('be.visible')           // Check if Client dropdown is disabled to verify order successfully submitted
    .and('exist').and('contain','submitted')
    

    })

    it("Verify Order Edited Successfully on same screen  - For Thermolam Category -", function()  {

        cy.viewport(1440, 900)
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

        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(3) > .MuiButtonBase-root').click().wait(500)                                  // Select Thermolam    
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(500)                                                                         // Tapping to Submit btn
        cy.get('.MuiAlert-message').contains('Please validate the form before submitting the order').should('be.visible')                                       // Assertion for validation message
        cy.get('.MuiAccordionSummary-root').click().wait(500)                                                                                                   // Tapping to Accordian 
        //cy.get('.jss23 > .MuiButtonBase-root').click().wait(500)
        cy.get('button svg path[d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"]').click({force: true})                                       // Getting side menu back buttton

        //=====================================================================>>  Getting elements for Git CI/CD Pipeline  <<===============================================================================================
        
        cy.contains('label', 'Client').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()                           // Client Validation of helper text
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');    
        cy.contains('label', 'Shipping client').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()                  // Shipping client of helper text
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');
        cy.contains('label', 'Billing client').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()                   // Billing client of helper text
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');
        cy.contains('label', 'Your PO').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()                          // PO Validation of helper text 
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');                                                                    
        cy.get('button[aria-label="New Order"]').scrollIntoView();                                                                           
        cy.contains('label', 'Client').next().find('input').click({force: true}).wait(500)                                                                      // Select Client
        cy.get('[role="combobox"]').should('be.visible')
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true}).wait(500)
        cy.contains('label', 'Shipping client').next().find('input').click({force: true});                                                                      // Select Shipping client
        cy.get('[role="combobox"]').should('be.visible');
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true});                                                          
        cy.contains('label', 'Billing client').next().find('input').click({force: true});                                                                       // Select Billing client
        cy.get('[role="combobox"]').should('be.visible');
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true});                  
        cy.contains('label', 'Your PO').next().find('input').type('Automate Thermolam 11')                                                                      // Your PO
        cy.contains('label', 'Their PO').next().find('input').type('XYZ 1', { force: true })                                                                    // Their PO
        cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click({force: true})                // Tapping to Expected Date icon        
        cy.get('.MuiCalendarPicker-root').find('button[role="gridcell"]')                                                                                       // Locate date buttons inside the calendar
        .each(($el) => {
            if (!$el.prop('disabled')) {                                                                                                                        // Check if the date is enabled                
                cy.wrap($el).click().wait(500)                                                                                                                  // Click the first enabled date                
                return false                                                                                                                                    // Break the loop after selecting the date
                }
            });  
            
        cy.contains('label', 'Their name').next().find('input').type('Zagg', { force: true })                                                                   // Their Name
        //cy.contains('label', 'Promised date').next().find('input').click({force: true}).wait(10000)                                                       
        cy.get(':nth-child(5) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click({force: true})                // Tapping to promissed Date icon        
        cy.get('.MuiCalendarPicker-root').find('button[role="gridcell"]')                                                                                       // Locate date buttons inside the calendar
        .each(($cl) => {
            if (!$cl.prop('disabled')) {                                                                                                                        // Check if the date is enabled                
                cy.wrap($cl).click().wait(500)                                                                                                                  // Click the first enabled date                
                    return false                                                                                                                                // Break the loop after selecting the date
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

        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(3) > .MuiButtonBase-root').click().wait(500)                                  // Select Thermolam    
        //.click().wait(500)                           
        cy.get('table tbody tr.MuiTableRow-root', { timeout: 10000 }).should('have.length.greaterThan', 0).then(($rowsBefore) => {
            const initialRowCount = $rowsBefore.length;
            cy.wrap($rowsBefore[0]).within(() => {
            cy.get('td.MuiTableCell-root').each(($td) => {
                cy.wrap($td).invoke('text').then((tdValue) => {
                tdValue = tdValue.trim();
    
                    if (tdValue === '1.') {
                        cy.get('td.MuiTableCell-root').eq(2).find('input').type('52', { force: true }).wait(500)                                                    // Qty
                        cy.get('td.MuiTableCell-root').eq(3).find('input').type('2970', { force: true }).wait(500)                                                  // Model
                        cy.get('td.MuiTableCell-root').eq(4).find('input').type('8001', { force: true }).wait(500)                                                  // color
                        cy.get('td.MuiTableCell-root').eq(5).find('input').type('Testing by Automation Script 1', { force: true });                                 // Comments        
                    }
                });
            });
            });
            cy.get('[colspan="7"] > .MuiButtonBase-root').click().wait(2000)                                                                                        // Adding second item
            cy.get('table tbody tr.MuiTableRow-root', { timeout: 10000 }).then(($rowsAfter) => {
            const newRow = $rowsAfter[$rowsAfter.length - 1]; // Get the last (newly added) row
            cy.wrap(newRow).within(() => {
            cy.get('td.MuiTableCell-root').each(($td) => {
            cy.wrap($td).invoke('text').then((tdValue) => {
            tdValue = tdValue.trim();
                    if (tdValue === '2.') {
                        cy.get('td.MuiTableCell-root').eq(2).find('input').type('14', { force: true }).wait(500)                                                    // Qty
                        cy.get('td.MuiTableCell-root').eq(3).find('input').type('2931', { force: true }).wait(500)                                                  // Model
                        cy.get('td.MuiTableCell-root').eq(4).find('input').type('7020', { force: true }).wait(500)                                                  // color
                        cy.get('td.MuiTableCell-root').eq(5).find('input').type('Testing by Automation Script 2', { force: true });                                 // Comments        
                    }                                                                   
                });
            });
        });
        })
        })

        cy.get('[aria-label="Save"] > .MuiButtonBase-root').click().wait(10000)                                                                                 // Tapping to save order btn

        //                                                                  Modifying order        
        cy.get('.css-1mrqld1').click().wait(500)                                                                                                                // Tapping to Accordian 
        cy.contains('label', 'Client').next().find('input').clear()                                                                                             // Clear Main Client
        cy.get('[role="combobox"]').should('be.visible').wait(500)                                                                                              // Opening dropdown
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true}).wait(500)                                                  // Selecting client

        cy.contains('label', 'Billing client').next().find('input').click({force: true});                                                                       // Select Billing client
        cy.get('[role="combobox"]').should('be.visible');
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true});
        cy.contains('label', 'Your PO').next().find('input').clear()                                                                                            // Clear Your PO
        cy.contains('label', 'Your PO').next().find('input').type('Automate MullionsDoors 100')                                                                 // Your PO
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
                        cy.get('td.MuiTableCell-root').eq(2).find('input').type('14', { force: true }).wait(500)                                                    // Qty
                        cy.get('td.MuiTableCell-root').eq(3).find('input').type('2931', { force: true }).wait(500)                                                  // Model
                        cy.get('td.MuiTableCell-root').eq(4).find('input').type('7020', { force: true }).wait(500)                                                  // color
                        cy.get('td.MuiTableCell-root').eq(5).find('input').type('Testing by Automation Script 2', { force: true });                                 // Comments        
                    }
                });
            });
            });
            cy.get('table tbody tr.MuiTableRow-root', { timeout: 10000 }).then(($rowsAfter) => {
            const newRow = $rowsAfter[$rowsAfter.length - 1]; // Get the last (newly added) row
            cy.wrap(newRow).within(() => {
            cy.get('td.MuiTableCell-root').each(($td) => {
            cy.wrap($td).invoke('text').then((tdValue) => {
            tdValue = tdValue.trim();
                    if (tdValue === '2.') {
                        cy.get('td.MuiTableCell-root').eq(2).find('input').type('52', { force: true }).wait(500)                                                    // Qty
                        cy.get('td.MuiTableCell-root').eq(3).find('input').type('2970', { force: true }).wait(500)                                                  // Model
                        cy.get('td.MuiTableCell-root').eq(4).find('input').type('8001', { force: true }).wait(500)                                                  // color
                        cy.get('td.MuiTableCell-root').eq(5).find('input').type('Testing by Automation Script 1', { force: true });                                 // Comments        
                    }                                                                   
                });
            });
        });
        })
        })
            cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(20000)                                                                       // Tapping to Submit btn        
            cy.get('#alert-dialog-confirm-description > .MuiAlert-message').contains("The order was submitted successfully, thank you!").should('be.visible')       // Check if Client dropdown is disabled to verify order successfully submitted
            .and('exist').and('contain','submitted')
        
    })

    it("Verify Order Edited Successfully via Web Orders Page Flow  - For Thermolam Category -", function()  {

        cy.viewport(1440, 900)
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

        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(3) > .MuiButtonBase-root').click().wait(500)                                  // Select Thermolam    
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(500)                                                                         // Tapping to Submit btn
        cy.get('.MuiAlert-message').contains('Please validate the form before submitting the order').should('be.visible')                                       // Assertion for validation message
        cy.get('.MuiAccordionSummary-root').click().wait(500)                                                                                                   // Tapping to Accordian 
        //cy.get('.jss23 > .MuiButtonBase-root').click().wait(500)
        cy.get('button svg path[d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"]').click({force: true})                                       // Getting side menu back buttton

        //=====================================================================>>  Getting elements for Git CI/CD Pipeline  <<===============================================================================================
        
        cy.contains('label', 'Client').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()                           // Client Validation of helper text
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');    
        cy.contains('label', 'Shipping client').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()                  // Shipping client of helper text
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');
        cy.contains('label', 'Billing client').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()                   // Billing client of helper text
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');
        cy.contains('label', 'Your PO').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()                          // PO Validation of helper text 
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');                                                                    
        cy.get('button[aria-label="New Order"]').scrollIntoView();                                                                           
        cy.contains('label', 'Client').next().find('input').click({force: true}).wait(500)                                                                      // Select Client
        cy.get('[role="combobox"]').should('be.visible')
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true}).wait(500)
        cy.contains('label', 'Shipping client').next().find('input').click({force: true});                                                                      // Select Shipping client
        cy.get('[role="combobox"]').should('be.visible');
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true});                                                          
        cy.contains('label', 'Billing client').next().find('input').click({force: true});                                                                       // Select Billing client
        cy.get('[role="combobox"]').should('be.visible');
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true});                  
        cy.contains('label', 'Your PO').next().find('input').type('Automate Thermolam 11')                                                                      // Your PO
        cy.contains('label', 'Their PO').next().find('input').type('XYZ 1', { force: true })                                                                    // Their PO
        cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click({force: true})                // Tapping to Expected Date icon        
        cy.get('.MuiCalendarPicker-root').find('button[role="gridcell"]')                                                                                       // Locate date buttons inside the calendar
        .each(($el) => {
            if (!$el.prop('disabled')) {                                                                                                                        // Check if the date is enabled                
                cy.wrap($el).click().wait(500)                                                                                                                  // Click the first enabled date                
                return false                                                                                                                                    // Break the loop after selecting the date
                }
            });  
            
        cy.contains('label', 'Their name').next().find('input').type('Zagg', { force: true })                                                                   // Their Name
        //cy.contains('label', 'Promised date').next().find('input').click({force: true}).wait(10000)                                                       
        cy.get(':nth-child(5) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click({force: true})                // Tapping to promissed Date icon        
        cy.get('.MuiCalendarPicker-root').find('button[role="gridcell"]')                                                                                       // Locate date buttons inside the calendar
        .each(($cl) => {
            if (!$cl.prop('disabled')) {                                                                                                                        // Check if the date is enabled                
                cy.wrap($cl).click().wait(500)                                                                                                                  // Click the first enabled date                
                    return false                                                                                                                                // Break the loop after selecting the date
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

        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(3) > .MuiButtonBase-root').click().wait(500)                                  // Select Thermolam    
        //.click().wait(500)                           
        cy.get('table tbody tr.MuiTableRow-root', { timeout: 10000 }).should('have.length.greaterThan', 0).then(($rowsBefore) => {
            const initialRowCount = $rowsBefore.length;
            cy.wrap($rowsBefore[0]).within(() => {
            cy.get('td.MuiTableCell-root').each(($td) => {
                cy.wrap($td).invoke('text').then((tdValue) => {
                tdValue = tdValue.trim();
    
                    if (tdValue === '1.') {
                        cy.get('td.MuiTableCell-root').eq(2).find('input').type('52', { force: true }).wait(500)                                                    // Qty
                        cy.get('td.MuiTableCell-root').eq(3).find('input').type('2970', { force: true }).wait(500)                                                  // Model
                        cy.get('td.MuiTableCell-root').eq(4).find('input').type('8001', { force: true }).wait(500)                                                  // color
                        cy.get('td.MuiTableCell-root').eq(5).find('input').type('Testing by Automation Script 1', { force: true });                                 // Comments        
                    }
                });
            });
            });
            cy.get('[colspan="7"] > .MuiButtonBase-root').click().wait(2000)                                                                                        // Adding second item
            cy.get('table tbody tr.MuiTableRow-root', { timeout: 10000 }).then(($rowsAfter) => {
            const newRow = $rowsAfter[$rowsAfter.length - 1]; // Get the last (newly added) row
            cy.wrap(newRow).within(() => {
            cy.get('td.MuiTableCell-root').each(($td) => {
            cy.wrap($td).invoke('text').then((tdValue) => {
            tdValue = tdValue.trim();
                    if (tdValue === '2.') {
                        cy.get('td.MuiTableCell-root').eq(2).find('input').type('14', { force: true }).wait(500)                                                    // Qty
                        cy.get('td.MuiTableCell-root').eq(3).find('input').type('2931', { force: true }).wait(500)                                                  // Model
                        cy.get('td.MuiTableCell-root').eq(4).find('input').type('7020', { force: true }).wait(500)                                                  // color
                        cy.get('td.MuiTableCell-root').eq(5).find('input').type('Testing by Automation Script 2', { force: true });                                 // Comments        
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
        cy.get(':nth-child(1) > .MuiListItemText-root > .MuiListItemText-primary > .MuiTypography-root > :nth-child(1) > span').click().wait(500)               // Pick the first saved order by name and click it
        cy.contains('button', 'Add a new product', { timeout: 100000 }).should('be.visible')

        //                                                                  Modifying order        
        cy.get('.css-1mrqld1').click().wait(500)                                                                                                                // Tapping to Accordian 
        cy.contains('label', 'Client').next().find('input').clear()                                                                                             // Clear Main Client
        cy.get('[role="combobox"]').should('be.visible').wait(500)                                                                                              // Opening dropdown
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true}).wait(500)                                                  // Selecting client

        cy.contains('label', 'Billing client').next().find('input').click({force: true});                                                                       // Select Billing client
        cy.get('[role="combobox"]').should('be.visible');
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true});
        cy.contains('label', 'Your PO').next().find('input').clear()                                                                                            // Clear Your PO
        cy.contains('label', 'Your PO').next().find('input').type('Automate MullionsDoors 100')                                                                 // Your PO
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
                        cy.get('td.MuiTableCell-root').eq(2).find('input').type('14', { force: true }).wait(500)                                                    // Qty
                        cy.get('td.MuiTableCell-root').eq(3).find('input').type('2931', { force: true }).wait(500)                                                  // Model
                        cy.get('td.MuiTableCell-root').eq(4).find('input').type('7020', { force: true }).wait(500)                                                  // color
                        cy.get('td.MuiTableCell-root').eq(5).find('input').type('Testing by Automation Script 2', { force: true });                                 // Comments        
                    }
                });
            });
            });
            cy.get('table tbody tr.MuiTableRow-root', { timeout: 10000 }).then(($rowsAfter) => {
            const newRow = $rowsAfter[$rowsAfter.length - 1]; // Get the last (newly added) row
            cy.wrap(newRow).within(() => {
            cy.get('td.MuiTableCell-root').each(($td) => {
            cy.wrap($td).invoke('text').then((tdValue) => {
            tdValue = tdValue.trim();
                    if (tdValue === '2.') {
                        cy.get('td.MuiTableCell-root').eq(2).find('input').type('52', { force: true }).wait(500)                                                    // Qty
                        cy.get('td.MuiTableCell-root').eq(3).find('input').type('2970', { force: true }).wait(500)                                                  // Model
                        cy.get('td.MuiTableCell-root').eq(4).find('input').type('8001', { force: true }).wait(500)                                                  // color
                        cy.get('td.MuiTableCell-root').eq(5).find('input').type('Testing by Automation Script 1', { force: true });                                 // Comments        
                    }                                                                   
                });
            });
        });
        })
        })
            cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(20000)                                                                       // Tapping to Submit btn        
            cy.get('#alert-dialog-confirm-description > .MuiAlert-message').contains("The order was submitted successfully, thank you!").should('be.visible')       // Check if Client dropdown is disabled to verify order successfully submitted
            .and('exist').and('contain','submitted')
        
    })

    it("Verify Order created/submitted Successfully - For Thermoplastic Sheets Category -", function()  {        
        
        cy.viewport(1440, 900)
        cy.visit("https://dev.thermoform.net/") 

        cy.get('.MuiTypography-root', { timeout: 30000 }).contains("Identification").should('be.visible').and('exist')                                          // Asssertion of Identification heading is present 
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
        cy.get('.MuiIconButton-colorInherit').click({force: true}).wait(1000)                                                                                    // Click to menu icon        
        cy.get(':nth-child(7) > .MuiButtonBase-root', { timeout: 100000 }).contains("Customer Center").and('exist').and('contain','Customer').click().wait(2000) // Asserting of Customer Center li is present on side menu        
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

        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(4) > .MuiButtonBase-root').click().wait(500)                                  // Select Thermoplastic Sheets
        
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(500)                                                                         // Tapping to Submit btn
        cy.get('.MuiAlert-message').contains('Please validate the form before submitting the order').should('be.visible')                                       // Assertion for validation message
        cy.get('.MuiAccordionSummary-root').click().wait(500)                                                                                                   // Tapping to Accordian 
        //cy.get('.jss23 > .MuiButtonBase-root').click().wait(500)
        cy.get('button svg path[d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"]').click({force: true})                                       // Getting side menu back buttton          
       
//=====================================================================>>  Getting elements for Git CI/CD Pipeline  <<===============================================================================================

//                                                                         Submitting Order with Required values
//                                                                             >>>>> Adding form data <<<<<                
        
        cy.contains('label', 'Client').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()                           // Client Validation of helper text
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');    
        cy.contains('label', 'Shipping client').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()                  // Shipping client of helper text
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');
        cy.contains('label', 'Billing client').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()                   // Billing client of helper text
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');
        cy.contains('label', 'Your PO').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()                          // PO Validation of helper text 
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');                                                                    
        cy.get('button[aria-label="New Order"]').scrollIntoView();                                                                           
        cy.contains('label', 'Client').next().find('input').click({force: true}).wait(500)                                                                      // Select Client
        cy.get('[role="combobox"]').should('be.visible')
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true}).wait(500)

        cy.contains('label', 'Shipping client').next().find('input').click({force: true});                                                                      // Select Shipping client
        cy.get('[role="combobox"]').should('be.visible');
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true});                                                          

        cy.contains('label', 'Billing client').next().find('input').click({force: true});                                                                       // Select Billing client
        cy.get('[role="combobox"]').should('be.visible');
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true});                  
        cy.contains('label', 'Your PO').next().find('input').type('Automate Thermoplastic')                                                                     // Your PO

        //                                                      >>>>> Adding Thermoplastic Sheets category table data required fields <<<<<   

        cy.contains('div', '1 Thermoplastic Sheets').click()
        //cy.get('td.MuiTableCell-root').eq(3).find('input').should('exist').should('have.attr', 'aria-invalid', 'true').closest('.MuiFormControl-root')        // Validation of helper text for invalid input
        //.find('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');                
        cy.get('td.MuiTableCell-root').eq(3).find('input').type('15', { force: true }).wait(500)                                                                // height
        cy.get('p.MuiFormHelperText-root').contains('Value must be 24 inches or greater').should('exist');                                                      // validaton(24 inches or greater) text assertion
        cy.get('td.MuiTableCell-root').eq(3).find('input').clear()                                                                                              // clear height
        cy.get('td.MuiTableCell-root').eq(3).find('input').type('ab', { force: true }).wait(500)                                                                // height
        cy.get('p.MuiFormHelperText-root').contains('Not a valid measurement').should('exist');                                                                 // validaton(24 inches or greater) text assertion
        cy.get('td.MuiTableCell-root').eq(3).find('input').clear()                                                                                              // clear height
        cy.get('td.MuiTableCell-root').eq(3).find('input').type('25', { force: true }).wait(500)                                                                // height
        cy.get('td.MuiTableCell-root').eq(4).find('input').type('8167', { force: true }).wait(500)                                                              // color        
        cy.get('td.MuiTableCell-root').eq(5).find('input').type('555', { force: true }).wait(500)                                                               // back color        
        //cy.get('.headerActions > .MuiButton-contained').click()                                                                                               // Tapping to Print btn
        //cy.get('button[aria-label="close"]', { timeout: 50000 }).should('exist').click()                                                                      // Closing print view                                    
        cy.get('.css-9hpeq4', { timeout: 50000 }).contains('Submit').should('be.enabled').click().wait(5000)                                                    // Tapping to Submit btn
                
        //                                                        Submitting Order with both Required and optional values
        //                                                                    >>>>> Adding form data <<<<<               

        cy.get('.css-1ubxkj1 > :nth-child(2)').click().wait(1000)                                                                                               // Tap to create new order btn
        cy.get('[data-tour="order.action.new"]').click().wait(1000)                                                                                             // Adding fresh order
        cy.get('.MuiDialogActions-root > :nth-child(2)').click()                                                                                                // Tapping to OK btn

        cy.contains('label', 'Client').next().find('input').click({force: true})                                                                                // Select Client to remove
        cy.contains('label', 'Client').next().find('input').clear()

        cy.get('[role="combobox"]').should('be.visible').wait(500)
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true}).wait(500)
            
        cy.contains('label', 'Shipping client').next().find('input').click({force: true});                                                                      // Select Shipping client
        cy.get('[role="combobox"]').should('be.visible');
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true});                                                          
            
        cy.contains('label', 'Billing client').next().find('input').click({force: true});                                                                       // Select Billing client
        cy.get('[role="combobox"]').should('be.visible');
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true});

        cy.contains('label', 'Your PO').next().find('input').type('Automate Thermoplastic')                                                                     // Your PO
        cy.contains('label', 'Their PO').next().find('input').type('XYZ 1', { force: true })                                                                    // Their PO
        cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click({force: true})                // Tapping to Expected Date icon        
        cy.get('.MuiCalendarPicker-root').find('button[role="gridcell"]')                                                                                       // Locate date buttons inside the calendar
            .each(($el) => {
                if (!$el.prop('disabled')) {                                                                                                                    // Check if the date is enabled                
                    cy.wrap($el).click().wait(500)                                                                                                              // Click the first enabled date                
                    return false                                                                                                                                // Break the loop after selecting the date
                    }
                });  
                
        cy.contains('label', 'Their name').next().find('input').type('Zagg', { force: true })                                                                   // Their Name
        //cy.contains('label', 'Promised date').next().find('input').click({force: true}).wait(10000)                                                       
        cy.get(':nth-child(5) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click({force: true})                // Tapping to promissed Date icon        
        cy.get('.MuiCalendarPicker-root').find('button[role="gridcell"]')                                                                                       // Locate date buttons inside the calendar
        .each(($cl) => {
            if (!$cl.prop('disabled')) {                                                                                                                        // Check if the date is enabled                
                cy.wrap($cl).click().wait(500)                                                                                                                  // Click the first enabled date                
                    return false                                                                                                                                // Break the loop after selecting the date
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

        //                                                      >>>>> Adding Preglued Thermoplastic Sheets category table data  <<<<<        

        cy.get('.css-budqf6').contains('Add section').click({force: true}).wait(1000)                                                                           // Tapping to Add color btn
        cy.contains('label', 'Section name').next().find('input').should('be.visible').type('Thermoplastic Sheets');                                            // Section Name        
        //cy.contains('label', 'Notes').eq(1).parent().find('input').type('Automating Molded Category with Doors Section', { force: true });                    // Section Notes                  
        cy.get('.MuiBox-root > .MuiGrid-container > .MuiGrid-root > .MuiButtonBase-root').click().wait(500)                                                     // Tapping to Add a new product btn
        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(4) > .MuiButtonBase-root').click().wait(500)                                  // Select Thermoplastic Sheets
        
        //                                                          Adding table data
  
        cy.get('table tbody tr.MuiTableRow-root', { timeout: 10000 }).should('have.length.greaterThan', 0).then(($rowsBefore) => {
        const initialRowCount = $rowsBefore.length;
        cy.wrap($rowsBefore[0]).within(() => {
        cy.get('td.MuiTableCell-root').each(($td) => {
            cy.wrap($td).invoke('text').then((tdValue) => {
            tdValue = tdValue.trim();

                if (tdValue === '1.') {
                    cy.get('td.MuiTableCell-root').eq(3).find('input').type('45', { force: true }).wait(500)                                                    // height
                    cy.get('td.MuiTableCell-root').eq(4).find('input').type('7013', { force: true }).wait(500)                                                  // color        
                    cy.get('td.MuiTableCell-root').eq(5).find('input').type('555', { force: true }).wait(500)                                                   // back color        
                    cy.get('td.MuiTableCell-root').eq(6).find('input').type('Testing by Automation Script 1', { force: true });                                 // Comments        
                }
            });
        });
        });
    })
    cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(5000)                                                                            // Tapping to Submit btn    
    cy.get('div.MuiGrid-root').contains('Please validate the form before submitting the order').should('be.visible');                                           // Assert the validation message
    cy.get('button svg path[d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"]').click({force: true}).wait(500);                                                                                                             // Three dots click
    cy.get('li.MuiMenuItem-root').contains('span.MuiListItemText-primary', 'Remove product').click().wait(500)                                                  // Click remove btn
    cy.get('.MuiBox-root > .MuiGrid-container > .MuiGrid-root > .MuiButtonBase-root').click().wait(500)                                                         // Tapping to Add a new product btn
    cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(4) > .MuiButtonBase-root').click().wait(500)                                      // Select Thermoplastic Sheets
    
    //            ..............................................Adding table data Again..............................................

        cy.get('table tbody tr.MuiTableRow-root', { timeout: 10000 }).should('have.length.greaterThan', 0).then(($rowsBefore) => {
        const initialRowCount = $rowsBefore.length;
        cy.wrap($rowsBefore[0]).within(() => {
        cy.get('td.MuiTableCell-root').each(($td) => {
            cy.wrap($td).invoke('text').then((tdValue) => {
            tdValue = tdValue.trim();

                if (tdValue === '1.') {
                    cy.get('td.MuiTableCell-root').eq(3).find('input').type('4555', { force: true }).wait(500)                                                  // height
                    cy.get('td.MuiTableCell-root').eq(4).find('input').type('7013', { force: true }).wait(500)                                                  // color        
                    cy.get('td.MuiTableCell-root').eq(5).find('input').type('555', { force: true }).wait(500)                                                   // back color        
                    cy.get('td.MuiTableCell-root').eq(6).find('input').type('Testing by Automation Script 1', { force: true });                                 // Comments        
                }
            });
        });
        });
        cy.get('[colspan="8"] > .MuiButtonBase-root').click().wait(500)                                                                                         // Adding second item
        cy.get('table tbody tr.MuiTableRow-root', { timeout: 10000 }).then(($rowsAfter) => {
        const newRow = $rowsAfter[$rowsAfter.length - 1]; // Get the last (newly added) row
        cy.wrap(newRow).within(() => {
        cy.get('td.MuiTableCell-root').each(($td) => {
        cy.wrap($td).invoke('text').then((tdValue) => {
        tdValue = tdValue.trim();
                if (tdValue === '2.') {
                    cy.get('td.MuiTableCell-root').eq(3).find('input').type('8587', { force: true }).wait(500)                                                  // height
                    cy.get('td.MuiTableCell-root').eq(4).find('input').type('7011', { force: true }).wait(500)                                                  // color        
                    cy.get('td.MuiTableCell-root').eq(5).find('input').type('555', { force: true }).wait(500)                                                   // back color        
                    cy.get('td.MuiTableCell-root').eq(6).find('input').type('Testing by Automation Script 2', { force: true });                                 // Comments        
                }                                                                   
            });
        });
        });
       })
    })
    cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(20000)                                                                           // Tapping to Submit btn
    cy.get('#alert-dialog-confirm-description > .MuiAlert-message').contains("The order was submitted successfully, thank you!").should('be.visible')           // Check if Client dropdown is disabled to verify order successfully submitted
    .and('exist').and('contain','submitted')
    
    })

    it("Verify Order Edited Successfully on same screen  - For Thermoplastic Sheets Category -", function()  {

        cy.viewport(1440, 900)
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

        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(4) > .MuiButtonBase-root').click().wait(500)                                  // Select Thermoplastic Sheets
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(500)                                                                         // Tapping to Submit btn
        cy.get('.MuiAlert-message').contains('Please validate the form before submitting the order').should('be.visible')                                       // Assertion for validation message
        cy.get('.MuiAccordionSummary-root').click().wait(500)                                                                                                   // Tapping to Accordian 
        //cy.get('.jss23 > .MuiButtonBase-root').click().wait(500)
        cy.get('button svg path[d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"]').click({force: true})                                       // Getting side menu back buttton

        //=====================================================================>>  Getting elements for Git CI/CD Pipeline  <<===============================================================================================
        
        cy.contains('label', 'Client').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()                           // Client Validation of helper text
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');    
        cy.contains('label', 'Shipping client').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()                  // Shipping client of helper text
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');
        cy.contains('label', 'Billing client').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()                   // Billing client of helper text
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');
        cy.contains('label', 'Your PO').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()                          // PO Validation of helper text 
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');                                                                    
        cy.get('button[aria-label="New Order"]').scrollIntoView();                                                                           
        cy.contains('label', 'Client').next().find('input').click({force: true}).wait(500)                                                                      // Select Client
        cy.get('[role="combobox"]').should('be.visible')
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true}).wait(500)
        cy.contains('label', 'Shipping client').next().find('input').click({force: true});                                                                      // Select Shipping client
        cy.get('[role="combobox"]').should('be.visible');
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true});                                                          
        cy.contains('label', 'Billing client').next().find('input').click({force: true});                                                                       // Select Billing client
        cy.get('[role="combobox"]').should('be.visible');
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true});                  
        cy.contains('label', 'Your PO').next().find('input').type('Automate Thermoplastic Sheets')                                                              // Your PO
        cy.contains('label', 'Their PO').next().find('input').type('XYZ 1', { force: true })                                                                    // Their PO
        cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click({force: true})                // Tapping to Expected Date icon        
        cy.get('.MuiCalendarPicker-root').find('button[role="gridcell"]')                                                                                       // Locate date buttons inside the calendar
        .each(($el) => {
            if (!$el.prop('disabled')) {                                                                                                                        // Check if the date is enabled                
                cy.wrap($el).click().wait(500)                                                                                                                  // Click the first enabled date                
                return false                                                                                                                                    // Break the loop after selecting the date
                }
            });  
            
        cy.contains('label', 'Their name').next().find('input').type('Zagg', { force: true })                                                                   // Their Name
        //cy.contains('label', 'Promised date').next().find('input').click({force: true}).wait(10000)                                                       
        cy.get(':nth-child(5) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click({force: true})                // Tapping to promissed Date icon        
        cy.get('.MuiCalendarPicker-root').find('button[role="gridcell"]')                                                                                       // Locate date buttons inside the calendar
        .each(($cl) => {
            if (!$cl.prop('disabled')) {                                                                                                                        // Check if the date is enabled                
                cy.wrap($cl).click().wait(500)                                                                                                                  // Click the first enabled date                
                    return false                                                                                                                                // Break the loop after selecting the date
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

        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(4) > .MuiButtonBase-root').click().wait(500)                                  // Select Thermoplastic Sheets
        //.click().wait(500)                           
        cy.get('table tbody tr.MuiTableRow-root', { timeout: 10000 }).should('have.length.greaterThan', 0).then(($rowsBefore) => {
            const initialRowCount = $rowsBefore.length;
            cy.wrap($rowsBefore[0]).within(() => {
            cy.get('td.MuiTableCell-root').each(($td) => {
                cy.wrap($td).invoke('text').then((tdValue) => {
                tdValue = tdValue.trim();
    
                    if (tdValue === '1.') {
                        cy.get('td.MuiTableCell-root').eq(3).find('input').type('4555', { force: true }).wait(500)                                                  // height
                        cy.get('td.MuiTableCell-root').eq(4).find('input').type('7013', { force: true }).wait(500)                                                  // color        
                        cy.get('td.MuiTableCell-root').eq(5).find('input').type('555', { force: true }).wait(500)                                                   // back color        
                        cy.get('td.MuiTableCell-root').eq(6).find('input').type('Testing by Automation Script 1', { force: true });                                 // Comments        
                    }
                });
            });
            });
            cy.get('[colspan="8"] > .MuiButtonBase-root').click().wait(500)                                                                                         // Adding second item
            cy.get('table tbody tr.MuiTableRow-root', { timeout: 10000 }).then(($rowsAfter) => {
            const newRow = $rowsAfter[$rowsAfter.length - 1]; // Get the last (newly added) row
            cy.wrap(newRow).within(() => {
            cy.get('td.MuiTableCell-root').each(($td) => {
            cy.wrap($td).invoke('text').then((tdValue) => {
            tdValue = tdValue.trim();
                    if (tdValue === '2.') {
                        cy.get('td.MuiTableCell-root').eq(3).find('input').type('8587', { force: true }).wait(500)                                                  // height
                        cy.get('td.MuiTableCell-root').eq(4).find('input').type('7011', { force: true }).wait(500)                                                  // color        
                        cy.get('td.MuiTableCell-root').eq(5).find('input').type('555', { force: true }).wait(500)                                                   // back color        
                        cy.get('td.MuiTableCell-root').eq(6).find('input').type('Testing by Automation Script 2', { force: true });                                 // Comments        
                    }                                                                   
                });
            });
            });
           })
        })

        cy.get('[aria-label="Save"] > .MuiButtonBase-root').click().wait(10000)                                                                                 // Tapping to save order btn

        //                                                                  Modifying order        
        cy.get('.css-1mrqld1').click().wait(500)                                                                                                                // Tapping to Accordian 
        cy.contains('label', 'Client').next().find('input').clear()                                                                                             // Clear Main Client
        cy.get('[role="combobox"]').should('be.visible').wait(500)                                                                                              // Opening dropdown
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true}).wait(500)                                                  // Selecting client

        cy.contains('label', 'Billing client').next().find('input').click({force: true});                                                                       // Select Billing client
        cy.get('[role="combobox"]').should('be.visible');
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true});
        cy.contains('label', 'Your PO').next().find('input').clear()                                                                                            // Clear Your PO
        cy.contains('label', 'Your PO').next().find('input').type('Automate MullionsDoors 100')                                                                 // Your PO
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
                        cy.get('td.MuiTableCell-root').eq(3).find('input').type('8587', { force: true }).wait(500)                                                  // height
                        cy.get('td.MuiTableCell-root').eq(4).find('input').type('7011', { force: true }).wait(500)                                                  // color        
                        cy.get('td.MuiTableCell-root').eq(5).find('input').type('555', { force: true }).wait(500)                                                   // back color        
                        cy.get('td.MuiTableCell-root').eq(6).find('input').type('Testing by Automation Script 2', { force: true });                                 // Comments        
                    }
                });
            });
            });
            cy.get('table tbody tr.MuiTableRow-root', { timeout: 10000 }).then(($rowsAfter) => {
            const newRow = $rowsAfter[$rowsAfter.length - 1]; // Get the last (newly added) row
            cy.wrap(newRow).within(() => {
            cy.get('td.MuiTableCell-root').each(($td) => {
            cy.wrap($td).invoke('text').then((tdValue) => {
            tdValue = tdValue.trim();
                    if (tdValue === '2.') {
                        cy.get('td.MuiTableCell-root').eq(3).find('input').type('4555', { force: true }).wait(500)                                                  // height
                        cy.get('td.MuiTableCell-root').eq(4).find('input').type('7013', { force: true }).wait(500)                                                  // color        
                        cy.get('td.MuiTableCell-root').eq(5).find('input').type('555', { force: true }).wait(500)                                                   // back color        
                        cy.get('td.MuiTableCell-root').eq(6).find('input').type('Testing by Automation Script 1', { force: true });                                 // Comments        
                    }                                                                   
                });
            });
        });
        })
        })
            cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(20000)                                                                       // Tapping to Submit btn        
            cy.get('#alert-dialog-confirm-description > .MuiAlert-message').contains("The order was submitted successfully, thank you!").should('be.visible')       // Check if Client dropdown is disabled to verify order successfully submitted
            .and('exist').and('contain','submitted')
        
    })

    it("Verify Order Edited Successfully via Web Orders Page Flow  - For Thermoplastic Sheets Category -", function()  {

        cy.viewport(1440, 900)
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

        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(4) > .MuiButtonBase-root').click().wait(500)                                  // Select Thermoplastic Sheets
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(500)                                                                         // Tapping to Submit btn
        cy.get('.MuiAlert-message').contains('Please validate the form before submitting the order').should('be.visible')                                       // Assertion for validation message
        cy.get('.MuiAccordionSummary-root').click().wait(500)                                                                                                   // Tapping to Accordian 
        //cy.get('.jss23 > .MuiButtonBase-root').click().wait(500)
        cy.get('button svg path[d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"]').click({force: true})                                       // Getting side menu back buttton

        //=====================================================================>>  Getting elements for Git CI/CD Pipeline  <<===============================================================================================
        
        cy.contains('label', 'Client').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()                           // Client Validation of helper text
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');    
        cy.contains('label', 'Shipping client').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()                  // Shipping client of helper text
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');
        cy.contains('label', 'Billing client').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()                   // Billing client of helper text
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');
        cy.contains('label', 'Your PO').next().find('input').should('have.attr', 'aria-invalid', 'true').should('be.visible').parent()                          // PO Validation of helper text 
        .siblings('p.MuiFormHelperText-root.Mui-error').should('have.text', 'Required value');                                                                    
        cy.get('button[aria-label="New Order"]').scrollIntoView();                                                                           
        cy.contains('label', 'Client').next().find('input').click({force: true}).wait(500)                                                                      // Select Client
        cy.get('[role="combobox"]').should('be.visible')
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true}).wait(500)
        cy.contains('label', 'Shipping client').next().find('input').click({force: true});                                                                      // Select Shipping client
        cy.get('[role="combobox"]').should('be.visible');
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true});                                                          
        cy.contains('label', 'Billing client').next().find('input').click({force: true});                                                                       // Select Billing client
        cy.get('[role="combobox"]').should('be.visible');
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true});                  
        cy.contains('label', 'Your PO').next().find('input').type('Automate Thermoplastic Sheets')                                                              // Your PO
        cy.contains('label', 'Their PO').next().find('input').type('XYZ 1', { force: true })                                                                    // Their PO
        cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click({force: true})                // Tapping to Expected Date icon        
        cy.get('.MuiCalendarPicker-root').find('button[role="gridcell"]')                                                                                       // Locate date buttons inside the calendar
        .each(($el) => {
            if (!$el.prop('disabled')) {                                                                                                                        // Check if the date is enabled                
                cy.wrap($el).click().wait(500)                                                                                                                  // Click the first enabled date                
                return false                                                                                                                                    // Break the loop after selecting the date
                }
            });  
            
        cy.contains('label', 'Their name').next().find('input').type('Zagg', { force: true })                                                                   // Their Name
        //cy.contains('label', 'Promised date').next().find('input').click({force: true}).wait(10000)                                                       
        cy.get(':nth-child(5) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click({force: true})                // Tapping to promissed Date icon        
        cy.get('.MuiCalendarPicker-root').find('button[role="gridcell"]')                                                                                       // Locate date buttons inside the calendar
        .each(($cl) => {
            if (!$cl.prop('disabled')) {                                                                                                                        // Check if the date is enabled                
                cy.wrap($cl).click().wait(500)                                                                                                                  // Click the first enabled date                
                    return false                                                                                                                                // Break the loop after selecting the date
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

        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(4) > .MuiButtonBase-root').click().wait(500)                                  // Select Thermoplastic Sheets
        //.click().wait(500)                           
        cy.get('table tbody tr.MuiTableRow-root', { timeout: 10000 }).should('have.length.greaterThan', 0).then(($rowsBefore) => {
            const initialRowCount = $rowsBefore.length;
            cy.wrap($rowsBefore[0]).within(() => {
            cy.get('td.MuiTableCell-root').each(($td) => {
                cy.wrap($td).invoke('text').then((tdValue) => {
                tdValue = tdValue.trim();
    
                    if (tdValue === '1.') {
                        cy.get('td.MuiTableCell-root').eq(3).find('input').type('4555', { force: true }).wait(500)                                                  // height
                        cy.get('td.MuiTableCell-root').eq(4).find('input').type('7013', { force: true }).wait(500)                                                  // color        
                        cy.get('td.MuiTableCell-root').eq(5).find('input').type('555', { force: true }).wait(500)                                                   // back color        
                        cy.get('td.MuiTableCell-root').eq(6).find('input').type('Testing by Automation Script 1', { force: true });                                 // Comments        
                    }
                });
            });
            });
            cy.get('[colspan="8"] > .MuiButtonBase-root').click().wait(500)                                                                                         // Adding second item
            cy.get('table tbody tr.MuiTableRow-root', { timeout: 10000 }).then(($rowsAfter) => {
            const newRow = $rowsAfter[$rowsAfter.length - 1]; // Get the last (newly added) row
            cy.wrap(newRow).within(() => {
            cy.get('td.MuiTableCell-root').each(($td) => {
            cy.wrap($td).invoke('text').then((tdValue) => {
            tdValue = tdValue.trim();
                    if (tdValue === '2.') {
                        cy.get('td.MuiTableCell-root').eq(3).find('input').type('8587', { force: true }).wait(500)                                                  // height
                        cy.get('td.MuiTableCell-root').eq(4).find('input').type('7011', { force: true }).wait(500)                                                  // color        
                        cy.get('td.MuiTableCell-root').eq(5).find('input').type('555', { force: true }).wait(500)                                                   // back color        
                        cy.get('td.MuiTableCell-root').eq(6).find('input').type('Testing by Automation Script 2', { force: true });                                 // Comments        
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
        cy.get(':nth-child(1) > .MuiListItemText-root > .MuiListItemText-primary > .MuiTypography-root > :nth-child(1) > span').click().wait(500)               // Pick the first saved order by name and click it
        cy.contains('button', 'Add a new product', { timeout: 100000 }).should('be.visible')

        //                                                                  Modifying order        
        cy.get('.css-1mrqld1').click().wait(500)                                                                                                                // Tapping to Accordian 
        cy.contains('label', 'Client').next().find('input').clear()                                                                                             // Clear Main Client
        cy.get('[role="combobox"]').should('be.visible').wait(500)                                                                                              // Opening dropdown
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true}).wait(500)                                                  // Selecting client

        cy.contains('label', 'Billing client').next().find('input').click({force: true});                                                                       // Select Billing client
        cy.get('[role="combobox"]').should('be.visible');
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true});
        cy.contains('label', 'Your PO').next().find('input').clear()                                                                                            // Clear Your PO
        cy.contains('label', 'Your PO').next().find('input').type('Automate MullionsDoors 100')                                                                 // Your PO
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
                        cy.get('td.MuiTableCell-root').eq(3).find('input').type('8587', { force: true }).wait(500)                                                  // height
                        cy.get('td.MuiTableCell-root').eq(4).find('input').type('7011', { force: true }).wait(500)                                                  // color        
                        cy.get('td.MuiTableCell-root').eq(5).find('input').type('555', { force: true }).wait(500)                                                   // back color        
                        cy.get('td.MuiTableCell-root').eq(6).find('input').type('Testing by Automation Script 2', { force: true });                                 // Comments        
                    }
                });
            });
            });
            cy.get('table tbody tr.MuiTableRow-root', { timeout: 10000 }).then(($rowsAfter) => {
            const newRow = $rowsAfter[$rowsAfter.length - 1]; // Get the last (newly added) row
            cy.wrap(newRow).within(() => {
            cy.get('td.MuiTableCell-root').each(($td) => {
            cy.wrap($td).invoke('text').then((tdValue) => {
            tdValue = tdValue.trim();
                    if (tdValue === '2.') {
                        cy.get('td.MuiTableCell-root').eq(3).find('input').type('4555', { force: true }).wait(500)                                                  // height
                        cy.get('td.MuiTableCell-root').eq(4).find('input').type('7013', { force: true }).wait(500)                                                  // color        
                        cy.get('td.MuiTableCell-root').eq(5).find('input').type('555', { force: true }).wait(500)                                                   // back color        
                        cy.get('td.MuiTableCell-root').eq(6).find('input').type('Testing by Automation Script 1', { force: true });                                 // Comments        
                    }                                                                   
                });
            });
        });
        })
        })
            cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(20000)                                                                       // Tapping to Submit btn        
            cy.get('#alert-dialog-confirm-description > .MuiAlert-message').contains("The order was submitted successfully, thank you!").should('be.visible')       // Check if Client dropdown is disabled to verify order successfully submitted
            .and('exist').and('contain','submitted')
        
    })
})





  