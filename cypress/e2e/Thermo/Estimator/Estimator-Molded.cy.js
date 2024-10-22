
const { expect } = require("chai")
require('cypress-xpath')
//const cypress = require("cypress")

//let textToStore; 
describe('Estimator Order Creation/Edition/Submission For Molded Category Suit', function() {
     
    it("Verify Order Created/Submitted Successfully - For Doors Category -", function()  {

        // User Creation Steps:
        //cy.viewport(1720, 1080)    
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
        cy.get('.MuiToolbar-root > .MuiTypography-root', { timeout: 25000 }).contains("Home").should('be.visible').and('exist').and('contain','Home')           // Asserting of Home text is present on home page
        // Cypress will wait up to 25 seconds for the element, but proceed immediately when the element appears
        cy.get('.MuiTypography-h4').contains("Shortcuts").should('be.visible').and('exist').and('contain','Shortcuts')                                          // Asserting of Shortcuts text is present on home page        
        cy.get('.MuiIconButton-colorInherit').click({force: true}).wait(1000)                                                                                   // Click to menu icon
        cy.get(':nth-child(7) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').contains("Customer Center").should('be.visible')            // Asserting of Customer Center li is present on side menu
        .and('exist').and('contain','Customer').click().wait(1000)        
        cy.get('[title="Estimator"] > .MuiListItemText-root > .MuiTypography-root').contains("Estimator").should('be.visible')                                  // Asserting of Estimator li is present on side menu
        .and('exist').and('contain','Estimator').click().wait(1000)
        //cy.get('[title="Estimator"] > .MuiListItemText-root > .MuiTypography-root').contains("Estimator").should('be.visible')                                // Asserting of Estimator li is present on side menu
        //.and('exist').and('contain','Estimator').click().wait(10000)        
        //cy.get('.css-budqf6').contains('Add color').should('be.visible')                                                                                      // Asserting Add color btn is visible
        cy.get('.css-budqf6', { timeout: 25000 }).contains('Add color').should('be.visible') 
        //cy.get('.jss23 > .MuiButtonBase-root').click()                                                                                                        // Tapping to menu icon to close sidebar
        cy.get('[data-tour="order.action.new"]').click().wait(1000)                                                                                             // Adding fresh order
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
        //cy.get('.jss23 > .MuiButtonBase-root').click().wait(500)
        cy.get('button svg path[d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"]').click({force: true});

        //cy.get('[id=":rt:-helper-text"]').should('have.text', 'Required value').should('be.visible')                                                             // Order Name Validation of helper text
        //cy.get('[id=":r11:-helper-text"]').contains('Value is not a valid email address').should('be.visible')                                                    // Eamil Validation of helper text
        //cy.get('[id=":r17:-helper-text"]').contains('Required value').should('be.visible')                                                                        // PO Validation of helper text 
        //cy.wait(10000)
        //cy.get('[id=":rt:"]', { timeout: 10000 }).should('exist')
        //cy.get('[id=":rt:"]').type('Automate Doors Category')                                                                                                     // Name         

        cy.get('#\:rt\:').type('Automate Doors Category')
        cy.get('[id=":r11:"]').type('AutomateDoors#gmail.com', { force: true })                                                                                   // Email
        cy.get('[id=":r11:-helper-text"]').contains('Value is not a valid email address').should('be.visible')                                                    // Eamil Validation of helper text        
        cy.get('[id=":r11:"]').type('AutomateDoors#gmail.com').clear()                                                                                            // Clear the invalid input
        cy.get('[id=":r11:"]').type('AutomateDoors@gmail.com', { force: true })                                                                                   // Email with valid input   
        cy.get('[id=":r17:"]').type('Doors 11', { force: true })                                                                                                  // Your PO
        cy.get('[id=":r19:"]').type('XYZ 1', { force: true })                                                                                                     // Their PO        
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
        cy.get('.jss23 > .MuiButtonBase-root').click().wait(500)                                                                                                // Tapping to menu icon to close sidebar
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

/*describe('Estimator Order Creation/Edition/Submission For Edged Category Suit', function() {

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
})

describe('Estimator Order Creation/Edition/Submission For Boards Category Suit', function() {

    it.skip("Verify Order created/submitted Successfully - For Boards Category -", function()  {

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
        //cy.get(':nth-child(3) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root').click().wait(500)                                // Select Boards
        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root').click().wait(500)
        
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(500)                                                                         // Tapping to Submit btn
        cy.get('.MuiAccordionSummary-root').click().wait(500)                                                                                                   // Tapping to Accordian 
        cy.get('#\\:rt\\:-helper-text').contains('Required value').should('be.visible')                                                                         // Validation of helper text
        cy.get('#\\:r11\\:-helper-text').contains('Value is not a valid email address').should('be.visible')                                                    // Validation of helper text
        cy.get('#\\:r17\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text    
        cy.get('#\\:rt\\:').type('Automate Boards Category')                                                                                                    // Name      
        cy.get('#\\:r11\\:').type('AutomaBoards@gmail.com', { force: true })                                                                                    // Email        
        cy.get('#\\:r17\\:').type('Boards', { force: true })                                                                                                    // Your PO
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
        cy.get('#\\:r1d\\:').type('Boards Section')                                                                                                             // Section Name      
        cy.get('#\\:r1f\\:').type('Automating Boards Section')                                                                                                  // Section Note        
        
        //Boards
        cy.get('.MuiAccordionSummary-root').click()                                                                                                             // Select Boards     
        cy.get('#\\:r1i\\:').type('12')                                                                                                                         // Qty
        cy.get('#\\:r1l\\:-helper-text').contains('Invalid value').should('be.visible')                                                                         // Validation of helper text
        cy.get('#\\:r1j\\:').type('3998')                                                                                                                       // Modele
        cy.get('#\\:r1o\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text     
        cy.get('#\\:r1m\\:').type('5305')                                                                                                                       // color        
        
        cy.get('[colspan="8"] > .MuiButtonBase-root').click()                                                                                                   // Adding second row                
        cy.get('#\\:r21\\:').type('25')                                                                                                                         // Qty
        cy.get('#\\:r22\\:').should('have.value', '3998')                                                                                                       // Assertion for Modele    
        cy.get('#\\:r25\\:').should('have.value', '5305 - Anthracite 2D')                                                                                       // Assertion for color 

        cy.get('[aria-label="Save"] > .MuiButtonBase-root').click().wait(5000)                                                                                  // Tapping to save btn
        cy.get('.headerActions > .MuiButton-contained').click().wait(10000)                                                                                     // Tapping to Print btn
        cy.get('#\\:rp\\: > .MuiButtonBase-root').click()                                                                                                       // Closing print view
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(5000)                                                                        // Tapping to Submit btn
        cy.get('.css-1ubxkj1 > :nth-child(1)').click().wait(10000)                                                                                              // Print order    
        cy.get('#\\:rp\\: > .MuiButtonBase-root').click().wait(500)                                                                                             // Closing print view
    })

    it.skip("Verify Order created/submitted Successfully - For Preglued Thermoplastic Sheets Category -", function()  {

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
        //cy.get(':nth-child(3) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root').click().wait(500)                                // Select Preglued Thermoplastic Sheets
        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root').click().wait(500)
        
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(500)                                                                         // Tapping to Submit btn
        cy.get('.MuiAccordionSummary-root').click().wait(500)                                                                                                   // Tapping to Accordian 
        cy.get('#\\:rt\\:-helper-text').contains('Required value').should('be.visible')                                                                         // Validation of helper text
        cy.get('#\\:r11\\:-helper-text').contains('Value is not a valid email address').should('be.visible')                                                    // Validation of helper text
        cy.get('#\\:r17\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text    
        cy.get('#\\:rt\\:').type('Automate 1 Preglued Thermoplastic Sheets Category')                                                                           // Name      
        cy.get('#\\:r11\\:').type('Automate1PregluedThermoplasticSheets@gmail.com', { force: true })                                                            // Email        
        cy.get('#\\:r17\\:').type('Preglued Thermoplastic Sheets', { force: true })                                                                             // Your PO
        cy.get('#\\:r19\\:').type('XYZ 1', { force: true })                                                                                                     // Their PO        
        cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click().wait(500000)                                                                            // Tapping to Date icon        
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
        cy.get('#\\:r1d\\:').type('Preglued Thermoplastic Sheets Section')                                                                                      // Section Name      
        cy.get('#\\:r1f\\:').type('Automating Preglued Thermoplastic Sheets')                                                                                   // Section Note        
        
        //Boards
        cy.get('.MuiAccordionSummary-root').click()                                                                                                             // Select Preglued Thermoplastic Sheets    
        cy.get('#\\:r1i\\:').type('14')                                                                                                                         // Qty
        cy.get('#\\:r1l\\:-helper-text').contains('Invalid value').should('be.visible')                                                                         // Validation of helper text
        cy.get('#\\:r1j\\:').type('2937')                                                                                                                       // Modele
        cy.get('#\\:r1o\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text     
        cy.get('#\\:r1m\\:').type('6100')                                                                                                                       // color        
        cy.get('#\\:r1q\\:').type('Testing by Automated Script')                                                                                                // comment   
        
        cy.get('[colspan="7"] > .MuiButtonBase-root').click()                                                                                                   // Adding second row                
        cy.get('#\\:r1u\\:').type('25')                                                                                                                         // Qty
        cy.get('#\\:r1v\\:').should('have.value', '2937')                                                                                                       // Assertion for Modele    
        cy.get('#\\:r22\\:').should('have.value', '6100 - White SR')                                                                                            // Assertion for color 
        cy.get('#\\:r26\\:').type('Testing by Automated Scripting')                                                                                             // comment   

        cy.get('[aria-label="Save"] > .MuiButtonBase-root').click().wait(5000)                                                                                  // Tapping to save btn
        cy.get('.headerActions > .MuiButton-contained').click().wait(10000)                                                                                     // Tapping to Print btn
        cy.get('#\\:rp\\: > .MuiButtonBase-root').click()                                                                                                       // Closing print view
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(5000)                                                                        // Tapping to Submit btn
        cy.get('.css-1ubxkj1 > :nth-child(1)').click().wait(10000)                                                                                              // Print order    
        cy.get('#\\:rp\\: > .MuiButtonBase-root').click().wait(500)                                                                                             // Closing print view
    })

    it.skip("Verify Order created/submitted Successfully - For Thermolam Category -", function()  {

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
        //cy.get(':nth-child(3) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root').click().wait(500)                                // Select Thermolam
        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(3) > .MuiButtonBase-root').click().wait(500)
        
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(500)                                                                         // Tapping to Submit btn
        cy.get('.MuiAccordionSummary-root').click().wait(500)                                                                                                   // Tapping to Accordian 
        cy.get('#\\:rt\\:-helper-text').contains('Required value').should('be.visible')                                                                         // Validation of helper text
        cy.get('#\\:r11\\:-helper-text').contains('Value is not a valid email address').should('be.visible')                                                    // Validation of helper text
        cy.get('#\\:r17\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text    
        cy.get('#\\:rt\\:').type('Automate Thermolam Category')                                                                                                 // Name      
        cy.get('#\\:r11\\:').type('AutomateThermolam@gmail.com', { force: true })                                                                               // Email        
        cy.get('#\\:r17\\:').type('Thermolam', { force: true })                                                                                                 // Your PO
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
        cy.get('#\\:r1d\\:').type('Thermolam Section')                                                                                                          // Section Name      
        cy.get('#\\:r1f\\:').type('Automating Thermolam')                                                                                                       // Section Note        
        
        //Thermolam
        cy.get('.MuiAccordionSummary-root').click()                                                                                                             // Select Thermolam
        cy.get('#\\:r1i\\:').type('52')                                                                                                                         // Qty
         cy.get('#\\:r1l\\:-helper-text').contains('Invalid value').should('be.visible')                                                                        // Validation of helper text
        cy.get('#\\:r1j\\:').type('2972')                                                                                                                       // Modele
        cy.get('#\\:r1o\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text     
        cy.get('#\\:r1m\\:').type('8161')                                                                                                                       // color        
        cy.get('#\\:r1q\\:').type('Testing by Automated Script')                                                                                                // comment   
        
        cy.get('[colspan="7"] > .MuiButtonBase-root').click()                                                                                                   // Adding second row                
        cy.get('#\\:r1u\\:').type('25')                                                                                                                         // Qty
        cy.get('#\\:r1v\\:').should('have.value', '2972')                                                                                                       // Assertion for Modele    
        cy.get('#\\:r22\\:').should('have.value', '8161')                                                                                                       // Assertion for color 
        cy.get('#\\:r26\\:').type('Testing by Automated Scripting')                                                                                             // comment   

        cy.get('[aria-label="Save"] > .MuiButtonBase-root').click().wait(5000)                                                                                  // Tapping to save btn
        cy.get('.headerActions > .MuiButton-contained').click().wait(10000)                                                                                     // Tapping to Print btn
        cy.get('#\\:rp\\: > .MuiButtonBase-root').click()                                                                                                       // Closing print view
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(5000)                                                                        // Tapping to Submit btn
        cy.get('.css-1ubxkj1 > :nth-child(1)').click().wait(10000)                                                                                              // Print order    
        cy.get('#\\:rp\\: > .MuiButtonBase-root').click().wait(500)                                                                                             // Closing print view
    })

    it.skip("Verify Order created/submitted Successfully - For Thermoplastic Sheets Category -", function()  {

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
        //cy.get(':nth-child(3) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root').click().wait(500)                                // Select Thermoplastic Sheets
        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiList-root > :nth-child(4) > .MuiButtonBase-root').click().wait(500)
        
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(500)                                                                         // Tapping to Submit btn
        cy.get('.MuiAccordionSummary-root').click().wait(500)                                                                                                   // Tapping to Accordian 
        cy.get('#\\:rt\\:-helper-text').contains('Required value').should('be.visible')                                                                         // Validation of helper text
        cy.get('#\\:r11\\:-helper-text').contains('Value is not a valid email address').should('be.visible')                                                    // Validation of helper text
        cy.get('#\\:r17\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text    
        cy.get('#\\:rt\\:').type('Automate Thermoplastic Sheets Category')                                                                                      // Name      
        cy.get('#\\:r11\\:').type('AutomateThermoplasticSheets@gmail.com', { force: true })                                                                     // Email        
        cy.get('#\\:r17\\:').type('Thermoplastic Sheets', { force: true })                                                                                      // Your PO
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
        cy.get('#\\:r1d\\:').type('Thermoplastic Sheets')                                                                                                       // Section Name      
        cy.get('#\\:r1f\\:').type('Automating Thermoplastic Sheets')                                                                                            // Section Note        
        
        //Thermoplastic Sheets
        cy.get('.MuiAccordionSummary-root').click()                                                                                                             // Select Thermoplastic Sheets
        cy.get('#\\:r1i\\:').type('10')                                                                                                                         // Qty
        cy.get('#\\:r1k\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text
        cy.get('#\\:r1k\\:').type('23')                                                                                                                         // Height
        cy.get('#\\:r1k\\:-helper-text').contains('Value must be 24 inches or greater').should('be.visible')                                                    // Validation of input text should be >= 24
        cy.get('#\\:r1k\\:').clear()                                                                                                                            // Clear old Height
        cy.get('#\\:r1k\\:').type('4141')                                                                                                                       // Height
        cy.get('#\\:r1n\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text     
        cy.get('#\\:r1l\\:').type('8151')                                                                                                                       // color
        cy.get('#\\:r1q\\:-helper-text').contains('Required value').should('be.visible')                                                                        // Validation of helper text     
        cy.get('#\\:r1o\\:').type('555')                                                                                                                        // Back color        
        cy.get('#\\:r1s\\:').type('Testing by Automated Script')                                                                                                // comment   
        
        cy.get('[colspan="8"] > .MuiButtonBase-root').click()                                                                                                   // Adding second row                
        cy.get('#\\:r20\\:').type('25')                                                                                                                         // Qty
        cy.get('#\\:r22\\:').type('2972')                                                                                                                       // Height
        cy.get('#\\:r23\\:').should('have.value', '8151 - White + Dark Select Walnut')                                                                          // Assertion for color 
        cy.get('#\\:r26\\:').should('have.value', '555 - White')                                                                                                // Assertion for Back color 
        cy.get('#\\:r2a\\:').type('Testing by Automated Scripting')                                                                                             // comment   

        cy.get('[aria-label="Save"] > .MuiButtonBase-root').click().wait(5000)                                                                                  // Tapping to save btn
        cy.get('.headerActions > .MuiButton-contained').click().wait(10000)                                                                                     // Tapping to Print btn
        cy.get('#\\:rp\\: > .MuiButtonBase-root').click()                                                                                                       // Closing print view
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(5000)                                                                        // Tapping to Submit btn
        cy.get('.css-1ubxkj1 > :nth-child(1)').click().wait(10000)                                                                                              // Print order    
        cy.get('#\\:rp\\: > .MuiButtonBase-root').click().wait(500)                                                                                             // Closing print view
    })
})*/





  