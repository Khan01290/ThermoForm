

const { expect } = require("chai")
require('cypress-xpath')

//let textToStore; 

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
        cy.get('.css-budqf6', { timeout: 50000 }).contains('Add section').should('be.visible')                                                                  // Asserting Add color btn is visible
        //cy.get('.jss23 > .MuiButtonBase-root').click()                                                                                                        // Tapping to menu icon to close sidebar
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

        cy.get(':nth-child(3) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root').click().wait(500)                                  // Select Doors (Edged)
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(500)                                                                         // Tapping to Submit btn
        cy.get('.MuiAlert-message').contains('Please validate the form before submitting the order').should('be.visible')                                       // Assertion for validation message
        cy.get('.MuiAccordionSummary-root').click().wait(500)                                                                                                   // Tapping to Accordian 
        //cy.get('.jss23 > .MuiButtonBase-root').click().wait(500)
        cy.get('button svg path[d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"]').click({force: true})                                       // Getting side menu back buttton          
        
      
//===========================================================>>  Getting elements for Git CI/CD Pipeline  <<===============================================================================================
        
        //                                                        Submitting Order with Required values
        //                                                             >>>>> Adding form data <<<<<                
        
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
        cy.get('[data-value="77"]').click()                                                                                                                     // Edgeband        
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
        
        cy.contains('label', 'Your PO').next().find('input').type('Automate DoorsEdged')                                                                        // Your PO
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
    cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(20000)                                                                           // Tapping to Submit btn
    cy.get('#alert-dialog-confirm-description > .MuiAlert-message').contains("The order was submitted successfully, thank you!").should('be.visible')           // Check if Client dropdown is disabled to verify order successfully submitted
    .and('exist').and('contain','submitted')
    
        //=======================================================================================================================================================================================        
    })

    it("Verify Order Edited Successfully Via Web Orders Page Flow - For Doors(Edged) Category -", function()  {
        
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

        cy.get(':nth-child(3) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root').click().wait(500)                                  // Select Doors (Edged)
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(500)                                                                         // Tapping to Submit btn
        cy.get('.MuiAlert-message').contains('Please validate the form before submitting the order').should('be.visible')                                       // Assertion for validation message
        cy.get('.MuiAccordionSummary-root').click().wait(500)                                                                                                   // Tapping to Accordian 
        //cy.get('.jss23 > .MuiButtonBase-root').click().wait(500)
        cy.get('button svg path[d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"]').click({force: true})                                       // Getting side menu back buttton

        //====================================================>>  Getting elements for Git CI/CD Pipeline  <<===============================================================================================
        
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
        cy.get('[aria-label="Save"] > .MuiButtonBase-root').click().wait(10000)                                                                                 // Tapping to save order btn

        //                                                                  Moving to web orders page

        cy.get('.MuiIconButton-colorInherit').click({force: true})                                                                                              // Click to menu icon
        cy.get('[title="Web Orders"]').click().wait(1000)                                                                                                       // Tapping to web Orders
        cy.get(':nth-child(1) > .MuiListItemText-root > .MuiListItemText-primary > .MuiTypography-root > :nth-child(1) > span').click().wait(500)               // Pick the first saved order by name and click it
        cy.contains('button', 'Add a new product', { timeout: 100000 }).should('be.visible')         
        cy.get('.css-1mrqld1').click().wait(500)                                                                                                                // Tapping to Accordian 
        
        cy.contains('label', 'Client').next().find('input').clear()                                                                                             // Clear Main Client
        cy.get('[role="combobox"]').should('be.visible').wait(500)                                                                                              // Opening dropdown
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true}).wait(500)                                                  // Selecting main client

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
                    cy.get('td.MuiTableCell-root').eq(3).find('input').clear()                                                                                  // Clear input width    
                    cy.get('td.MuiTableCell-root').eq(3).find('input').type('12', { force: true });                                                             // Valid input width
                    cy.get('td.MuiTableCell-root').eq(4).find('input').clear()                                                                                  // Clear input height    
                    cy.get('td.MuiTableCell-root').eq(4).find('input').type('58', { force: true });                                                             // Valid input height
                    cy.get('td.MuiTableCell-root').eq(5).find('.MuiSelect-select').click({ force: true });                                                      // thickness
                    cy.get('[data-value="0.625"]').click()                                                                                                      // thicknes    
                    cy.get('td.MuiTableCell-root').eq(6).find('.MuiSelect-select').click({ force: true });                                                      // grain                
                    cy.get('[data-value="V"]').click()                                                                                                          // grain        
                    cy.get('td.MuiTableCell-root').eq(7).find('.MuiSelect-select').click({ force: true });                                                      // Edgeband                
                    cy.get('[data-value="90"]').click()                                                                                                         // Edgeband         
                    cy.get('td.MuiTableCell-root').eq(8).find('.MuiSelect-select').click({ force: true });                                                      // Type
                    cy.get('[data-value="S"] > .css-sc6tei').click()                                                                                            // Type              
                    cy.get('td.MuiTableCell-root').eq(9).find('.MuiSelect-select').click({ force: true });                                                      // qty
                    cy.get('[data-value="3"]').click()                                                                                                          // qty
                    cy.get('td.MuiTableCell-root').eq(10).find('.MuiSelect-select').click({ force: true });                                                     // postiton
                    cy.get('[data-value="D"] > .css-sc6tei').click()                                                                                            // postiton
                    cy.get('.MuiFormControl-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click({ force: true })                                      // Dowels 
                    cy.get('td.MuiTableCell-root').eq(12).find('input').type('12', { force: true });                                                            // color                    
                    cy.get('td.MuiTableCell-root').eq(13).find('input').type('999', { force: true });                                                           // Sb Color
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
                    cy.get('td.MuiTableCell-root').eq(3).find('input').type('24', { force: true });                                                             // Valid input width
                    cy.get('td.MuiTableCell-root').eq(4).find('input').clear()                                                                                  // Clear input height    
                    cy.get('td.MuiTableCell-root').eq(4).find('input').type('89', { force: true });                                                             // Valid input height
                    cy.get('td.MuiTableCell-root').eq(5).find('.MuiSelect-select').click({ force: true });                                                      // thickness
                    cy.get('[data-value="0.375"]').click()                                                                                                      // thicknes    
                    cy.get('td.MuiTableCell-root').eq(6).find('.MuiSelect-select').click({ force: true });                                                      // grain                
                    cy.get('[data-value="H"]').click()                                                                                                          // grain        
                    cy.get('td.MuiTableCell-root').eq(7).find('.MuiSelect-select').click({ force: true });                                                      // Edgeband                
                    cy.get('[data-value="59"]').click()                                                                                                         // Edgeband         
                    cy.get('td.MuiTableCell-root').eq(8).find('.MuiSelect-select').click({ force: true });                                                      // Type
                    cy.get('[data-value="T"] > .css-sc6tei').click()                                                                                            // Type              
                    cy.get('td.MuiTableCell-root').eq(9).find('.MuiSelect-select').click({ force: true });                                                      // qty
                    cy.get('[data-value="3"]').click()                                                                                                          // qty
                    cy.get('td.MuiTableCell-root').eq(10).find('.MuiSelect-select').click({ force: true });                                                     // postiton
                    cy.get('[data-value="D"] > .css-sc6tei').click()                                                                                            // postiton
                    cy.get('.MuiFormControl-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click({ force: true })                                      // Dowels 
                    cy.get('td.MuiTableCell-root').eq(12).find('input').type('65', { force: true });                                                            // color                    
                    cy.get('td.MuiTableCell-root').eq(13).find('input').type('555', { force: true });                                                           // Sb Color               
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

    it("Verify Order Edited Successfully on same screen  - For Doors(Edged) Category -", function()  {

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

        cy.get(':nth-child(3) > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root').click().wait(500)                                  // Select Doors (Edged)
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
        cy.contains('label', 'Your PO').next().find('input').type('Automate Doors 11')                                                                          // Your PO
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
        /*
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
        })*/

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

    cy.get('[aria-label="Save"] > .MuiButtonBase-root').click().wait(10000)                                                                                     // Tapping to save order btn

        //                                                                  Moving to web orders page
        /*
        cy.get('.MuiIconButton-colorInherit').click({force: true})                                                                                              // Click to menu icon
        cy.get('[title="Web Orders"]').click().wait(1000)                                                                                                       // Tapping to web Orders
        cy.get(':nth-child(1) > .MuiListItemText-root > .MuiListItemText-primary > .MuiTypography-root > :nth-child(1) > span')
        .should('contain','Automate Mullions Doors Ctg').click().wait(500)                                                                                      // Pick the first saved order by name and click it
        cy.contains('button', 'Add a new product', { timeout: 100000 }).should('be.visible')         
        */
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
                        cy.get('td.MuiTableCell-root').eq(3).find('input').clear()                                                                                  // Clear input width    
                        cy.get('td.MuiTableCell-root').eq(3).find('input').type('12', { force: true });                                                             // Valid input width
                        cy.get('td.MuiTableCell-root').eq(4).find('input').clear()                                                                                  // Clear input height    
                        cy.get('td.MuiTableCell-root').eq(4).find('input').type('58', { force: true });                                                             // Valid input height
                        cy.get('td.MuiTableCell-root').eq(5).find('.MuiSelect-select').click({ force: true });                                                      // thickness
                        cy.get('[data-value="0.625"]').click()                                                                                                      // thicknes    
                        cy.get('td.MuiTableCell-root').eq(6).find('.MuiSelect-select').click({ force: true });                                                      // grain                
                        cy.get('[data-value="V"]').click()                                                                                                          // grain        
                        cy.get('td.MuiTableCell-root').eq(7).find('.MuiSelect-select').click({ force: true });                                                      // Edgeband                
                        cy.get('[data-value="90"]').click()                                                                                                         // Edgeband         
                        cy.get('td.MuiTableCell-root').eq(8).find('.MuiSelect-select').click({ force: true });                                                      // Type
                        cy.get('[data-value="S"] > .css-sc6tei').click()                                                                                            // Type              
                        cy.get('td.MuiTableCell-root').eq(9).find('.MuiSelect-select').click({ force: true });                                                      // qty
                        cy.get('[data-value="3"]').click()                                                                                                          // qty
                        cy.get('td.MuiTableCell-root').eq(10).find('.MuiSelect-select').click({ force: true });                                                     // postiton
                        cy.get('[data-value="D"] > .css-sc6tei').click()                                                                                            // postiton
                        cy.get('.MuiFormControl-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click({ force: true })                                      // Dowels 
                        cy.get('td.MuiTableCell-root').eq(12).find('input').type('12', { force: true });                                                            // color                    
                        cy.get('td.MuiTableCell-root').eq(13).find('input').type('999', { force: true });                                                           // Sb Color
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
                        cy.get('td.MuiTableCell-root').eq(3).find('input').type('24', { force: true });                                                             // Valid input width
                        cy.get('td.MuiTableCell-root').eq(4).find('input').clear()                                                                                  // Clear input height    
                        cy.get('td.MuiTableCell-root').eq(4).find('input').type('89', { force: true });                                                             // Valid input height
                        cy.get('td.MuiTableCell-root').eq(5).find('.MuiSelect-select').click({ force: true });                                                      // thickness
                        cy.get('[data-value="0.375"]').click()                                                                                                      // thicknes    
                        cy.get('td.MuiTableCell-root').eq(6).find('.MuiSelect-select').click({ force: true });                                                      // grain                
                        cy.get('[data-value="H"]').click()                                                                                                          // grain        
                        cy.get('td.MuiTableCell-root').eq(7).find('.MuiSelect-select').click({ force: true });                                                      // Edgeband                
                        cy.get('[data-value="59"]').click()                                                                                                         // Edgeband         
                        cy.get('td.MuiTableCell-root').eq(8).find('.MuiSelect-select').click({ force: true });                                                      // Type
                        cy.get('[data-value="T"] > .css-sc6tei').click()                                                                                            // Type              
                        cy.get('td.MuiTableCell-root').eq(9).find('.MuiSelect-select').click({ force: true });                                                      // qty
                        cy.get('[data-value="3"]').click()                                                                                                          // qty
                        cy.get('td.MuiTableCell-root').eq(10).find('.MuiSelect-select').click({ force: true });                                                     // postiton
                        cy.get('[data-value="D"] > .css-sc6tei').click()                                                                                            // postiton
                        cy.get('.MuiFormControl-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click({ force: true })                                      // Dowels 
                        cy.get('td.MuiTableCell-root').eq(12).find('input').type('65', { force: true });                                                            // color                    
                        cy.get('td.MuiTableCell-root').eq(13).find('input').type('555', { force: true });                                                           // Sb Color               
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

        cy.get(':nth-child(3) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root').click().wait(500)                                  // Select Mullions Doors (Edged) 
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(500)                                                                         // Tapping to Submit btn
        cy.get('.MuiAlert-message').contains('Please validate the form before submitting the order').should('be.visible')                                       // Assertion for validation message
        cy.get('.MuiAccordionSummary-root').click().wait(500)                                                                                                   // Tapping to Accordian 
        //cy.get('.jss23 > .MuiButtonBase-root').click().wait(500)
        cy.get('button svg path[d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"]').click({force: true})                                       // Getting side menu back buttton          
                  
        
        //===========================================================>>  Getting elements for Git CI/CD Pipeline  <<===============================================================================================
         
        //                                                               Submitting Order with Required values
        //                                                                  >>>>> Adding form data <<<<<                
        
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
        cy.contains('label', 'Your PO').next().find('input').type('Automate MullionsDoors (Edged)')                                                             // Your PO
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
                   // cy.get('td.MuiTableCell-root').eq(14).find('input').type('555', { force: true });                                                         // Sb Color
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
                    cy.get('td.MuiTableCell-root').eq(8).find('.MuiInputBase-input').parents('.MuiInputBase-root').find('input').should('have.value', '4')      // Assertioan of Openings
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
    cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(20000)                                                                           // Tapping to Submit btn
    cy.get('#alert-dialog-confirm-description > .MuiAlert-message').contains("The order was submitted successfully, thank you!").should('be.visible')           // Check if Client dropdown is disabled to verify order successfully submitted
    .and('exist').and('contain','submitted')
    })

    it("Verify Order Edited Successfully Via Web Orders Page Flow - For Mullions Doors(Edged) Category -", function()  {
        
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

        cy.get(':nth-child(3) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root').click({force: true}).wait(500)                     // Select Mullions Doors (Edged)                 
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(500)                                                                         // Tapping to Submit btn
        cy.get('.MuiAlert-message').contains('Please validate the form before submitting the order').should('be.visible')                                       // Assertion for validation message
        cy.get('.MuiAccordionSummary-root').click().wait(500)                                                                                                   // Tapping to Accordian 
        //cy.get('.jss23 > .MuiButtonBase-root').click().wait(500)
        cy.get('button svg path[d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"]').click({force: true})                                       // Getting side menu back buttton
        
        //====================================================>>  Getting elements for Git CI/CD Pipeline  <<===============================================================================================
        
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
       
        cy.get(':nth-child(3) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root').click({force: true}).wait(500)                     // Select Mullions Doors (Edged)                                    

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
                   // cy.get('td.MuiTableCell-root').eq(14).find('input').type('555', { force: true });                                                         // Sb Color
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
                    cy.get('td.MuiTableCell-root').eq(3).find('input').type('58', { force: true });                                                             // width
                    cy.get('td.MuiTableCell-root').eq(4).find('input').type('58', { force: true });                                                             // height
                    cy.get('td.MuiTableCell-root').eq(6).find('div.MuiSelect-select').should('have.text', 'V')                                                  // Assertioan of grain input
                    cy.get('td.MuiTableCell-root').eq(7).find('div.MuiSelect-select').should('have.text', '96')                                                 // Assertioan of Edgeband
                    cy.get('td.MuiTableCell-root').eq(8).find('.MuiInputBase-input').parents('.MuiInputBase-root').find('input').should('have.value', '4')      // Assertioan of Openings
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
        cy.get('[aria-label="Save"] > .MuiButtonBase-root').click().wait(10000)                                                                                 // Tapping to save order btn

        //                                                                  Moving to web orders page

        cy.get('.MuiIconButton-colorInherit').click({force: true})                                                                                              // Click to menu icon
        cy.get('[title="Web Orders"]').click().wait(1000)                                                                                                       // Tapping to web Orders
        cy.get(':nth-child(1) > .MuiListItemText-root > .MuiListItemText-primary > .MuiTypography-root > :nth-child(1) > span').click().wait(500)               // Pick the first saved order by name and click it
        cy.contains('button', 'Add a new product', { timeout: 100000 }).should('be.visible')         
        cy.get('.css-1mrqld1').click().wait(500)                                                                                                                // Tapping to Accordian 
        
        cy.contains('label', 'Client').next().find('input').clear()                                                                                             // Clear Main Client
        cy.get('[role="combobox"]').should('be.visible').wait(500)                                                                                              // Opening dropdown
        cy.contains('[role="option"]', 'P.E. MAURICE (1995) INC. - 4504380371').click({force: true}).wait(500)                                                  // Selecting main client

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
                    cy.get('td.MuiTableCell-root').eq(3).find('input').clear()                                                                                  // Clear input width    
                    cy.get('td.MuiTableCell-root').eq(3).find('input').type('12', { force: true });                                                             // Valid input width
                    cy.get('td.MuiTableCell-root').eq(4).find('input').clear()                                                                                  // Clear input height    
                    cy.get('td.MuiTableCell-root').eq(4).find('input').type('58', { force: true });                                                             // Valid input height
                    cy.get('td.MuiTableCell-root').eq(5).find('.MuiSelect-select').click({ force: true });                                                      // thickness
                    cy.get('[data-value="0.625"]').click()                                                                                                      // thicknes    
                    cy.get('td.MuiTableCell-root').eq(6).find('.MuiSelect-select').click({ force: true });                                                      // grain                
                    cy.get('[data-value="V"]').click()                                                                                                          // grain        
                    cy.get('td.MuiTableCell-root').eq(7).find('.MuiSelect-select').click({ force: true });                                                      // Edgeband                
                    cy.get('[data-value="90"]').click()                                                                                                         // Edgeband         
                    cy.get('td.MuiTableCell-root').eq(8).find('input').clear()                                                                                  // Clear Openings 
                    cy.get('td.MuiTableCell-root').eq(8).find('input').type('12', { force: true });                                                             // Openings  
                    cy.get('td.MuiTableCell-root').eq(9).find('.MuiSelect-select').click({ force: true });                                                      // Type
                    cy.get('[data-value="E"] > .css-sc6tei').click()                                                                                            // Type              
                    cy.get('td.MuiTableCell-root').eq(10).find('.MuiSelect-select').click({ force: true });                                                     // qty
                    cy.get('[data-value="3"]').click()                                                                                                          // qty
                    cy.get('td.MuiTableCell-root').eq(11).find('.MuiSelect-select').click({ force: true });                                                     // postiton
                    cy.get('[data-value="D"] > .css-sc6tei').click()                                                                                            // postiton
                    cy.get('.MuiFormControl-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click({ force: true })                                      // Dowels 
                    cy.get('td.MuiTableCell-root').eq(13).find('input').type('12', { force: true });                                                            // color                    
                    cy.get('td.MuiTableCell-root').eq(14).find('input').type('999', { force: true });                                                           // Sb Color
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
                    cy.get('td.MuiTableCell-root').eq(3).find('input').clear()                                                                                  // Clear input width    
                    cy.get('td.MuiTableCell-root').eq(3).find('input').type('24', { force: true });                                                             // Valid input width
                    cy.get('td.MuiTableCell-root').eq(4).find('input').clear()                                                                                  // Clear input height    
                    cy.get('td.MuiTableCell-root').eq(4).find('input').type('89', { force: true });                                                             // Valid input height
                    cy.get('td.MuiTableCell-root').eq(5).find('.MuiSelect-select').click({ force: true });                                                      // thickness
                    cy.get('[data-value="0.375"]').click()                                                                                                      // thicknes    
                    cy.get('td.MuiTableCell-root').eq(6).find('.MuiSelect-select').click({ force: true });                                                      // grain                
                    cy.get('[data-value="H"]').click()                                                                                                          // grain        
                    cy.get('td.MuiTableCell-root').eq(7).find('.MuiSelect-select').click({ force: true });                                                      // Edgeband                
                    cy.get('[data-value="59"]').click()                                                                                                         // Edgeband         
                    cy.get('td.MuiTableCell-root').eq(8).find('input').clear()                                                                                  // Clear Openings 
                    cy.get('td.MuiTableCell-root').eq(8).find('input').type('6', { force: true });                                                              // Openings  
                    cy.get('td.MuiTableCell-root').eq(9).find('.MuiSelect-select').click({ force: true });                                                      // Type
                    cy.get('[data-value="T"] > .css-sc6tei').click()                                                                                            // Type              
                    cy.get('td.MuiTableCell-root').eq(10).find('.MuiSelect-select').click({ force: true });                                                     // qty
                    cy.get('[data-value="3"]').click()                                                                                                          // qty
                    cy.get('td.MuiTableCell-root').eq(11).find('.MuiSelect-select').click({ force: true });                                                     // postiton
                    cy.get('[data-value="D"] > .css-sc6tei').click()                                                                                            // postiton
                    cy.get('.MuiFormControl-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click({ force: true })                                      // Dowels 
                    cy.get('td.MuiTableCell-root').eq(13).find('input').type('65', { force: true });                                                            // color                    
                    cy.get('td.MuiTableCell-root').eq(14).find('input').type('555', { force: true });                                                           // Sb Color               
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
    
    it("Verify Order Edited Successfully on same screen - For Mullions Doors(Edged) Category -", function()  {

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
        
        cy.get(':nth-child(3) > .MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root').click({force: true})                               // Select Mullions Doors (Edged)
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
        cy.get('.css-9hpeq4').contains('Submit').should('be.enabled').click().wait(5000)                                                                        // Tapping to Submit btn
        */

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
        cy.contains('label', 'Your PO').next().find('input').type('Automate Doors 11')                                                                          // Your PO
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
        /*
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
        })*/

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
                   // cy.get('td.MuiTableCell-root').eq(14).find('input').type('555', { force: true });                                                         // Sb Color
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
                    cy.get('td.MuiTableCell-root').eq(8).find('.MuiInputBase-input').parents('.MuiInputBase-root').find('input').should('have.value', '4')      // Assertioan of Openings
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

    cy.get('[aria-label="Save"] > .MuiButtonBase-root').click().wait(10000)                                                                                     // Tapping to save order btn

        //                                                                  Moving to web orders page
        /*
        cy.get('.MuiIconButton-colorInherit').click({force: true})                                                                                              // Click to menu icon
        cy.get('[title="Web Orders"]').click().wait(1000)                                                                                                       // Tapping to web Orders
        cy.get(':nth-child(1) > .MuiListItemText-root > .MuiListItemText-primary > .MuiTypography-root > :nth-child(1) > span')
        .should('contain','Automate Mullions Doors Ctg').click().wait(500)                                                                                      // Pick the first saved order by name and click it
        cy.contains('button', 'Add a new product', { timeout: 100000 }).should('be.visible')         
        */
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
                    cy.get('td.MuiTableCell-root').eq(3).find('input').clear()                                                                                  // Clear input width    
                    cy.get('td.MuiTableCell-root').eq(3).find('input').type('12', { force: true });                                                             // Valid input width
                    cy.get('td.MuiTableCell-root').eq(4).find('input').clear()                                                                                  // Clear input height    
                    cy.get('td.MuiTableCell-root').eq(4).find('input').type('58', { force: true });                                                             // Valid input height
                    cy.get('td.MuiTableCell-root').eq(5).find('.MuiSelect-select').click({ force: true });                                                      // thickness
                    cy.get('[data-value="0.625"]').click()                                                                                                      // thicknes    
                    cy.get('td.MuiTableCell-root').eq(6).find('.MuiSelect-select').click({ force: true });                                                      // grain                
                    cy.get('[data-value="V"]').click()                                                                                                          // grain        
                    cy.get('td.MuiTableCell-root').eq(7).find('.MuiSelect-select').click({ force: true });                                                      // Edgeband                
                    cy.get('[data-value="90"]').click()                                                                                                         // Edgeband         
                    cy.get('td.MuiTableCell-root').eq(8).find('input').clear()                                                                                  // Clear Openings 
                    cy.get('td.MuiTableCell-root').eq(8).find('input').type('12', { force: true });                                                             // Openings  
                    cy.get('td.MuiTableCell-root').eq(9).find('.MuiSelect-select').click({ force: true });                                                      // Type
                    cy.get('[data-value="E"] > .css-sc6tei').click()                                                                                            // Type              
                    cy.get('td.MuiTableCell-root').eq(10).find('.MuiSelect-select').click({ force: true });                                                     // qty
                    cy.get('[data-value="3"]').click()                                                                                                          // qty
                    cy.get('td.MuiTableCell-root').eq(11).find('.MuiSelect-select').click({ force: true });                                                     // postiton
                    cy.get('[data-value="D"] > .css-sc6tei').click()                                                                                            // postiton
                    cy.get('.MuiFormControl-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click({ force: true })                                      // Dowels 
                    cy.get('td.MuiTableCell-root').eq(13).find('input').type('12', { force: true });                                                            // color                    
                    cy.get('td.MuiTableCell-root').eq(14).find('input').type('999', { force: true });                                                           // Sb Color
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
                    cy.get('td.MuiTableCell-root').eq(3).find('input').clear()                                                                                  // Clear input width    
                    cy.get('td.MuiTableCell-root').eq(3).find('input').type('24', { force: true });                                                             // Valid input width
                    cy.get('td.MuiTableCell-root').eq(4).find('input').clear()                                                                                  // Clear input height    
                    cy.get('td.MuiTableCell-root').eq(4).find('input').type('89', { force: true });                                                             // Valid input height
                    cy.get('td.MuiTableCell-root').eq(5).find('.MuiSelect-select').click({ force: true });                                                      // thickness
                    cy.get('[data-value="0.375"]').click()                                                                                                      // thicknes    
                    cy.get('td.MuiTableCell-root').eq(6).find('.MuiSelect-select').click({ force: true });                                                      // grain                
                    cy.get('[data-value="H"]').click()                                                                                                          // grain        
                    cy.get('td.MuiTableCell-root').eq(7).find('.MuiSelect-select').click({ force: true });                                                      // Edgeband                
                    cy.get('[data-value="59"]').click()                                                                                                         // Edgeband         
                    cy.get('td.MuiTableCell-root').eq(8).find('input').clear()                                                                                  // Clear Openings 
                    cy.get('td.MuiTableCell-root').eq(8).find('input').type('6', { force: true });                                                              // Openings  
                    cy.get('td.MuiTableCell-root').eq(9).find('.MuiSelect-select').click({ force: true });                                                      // Type
                    cy.get('[data-value="T"] > .css-sc6tei').click()                                                                                            // Type              
                    cy.get('td.MuiTableCell-root').eq(10).find('.MuiSelect-select').click({ force: true });                                                     // qty
                    cy.get('[data-value="3"]').click()                                                                                                          // qty
                    cy.get('td.MuiTableCell-root').eq(11).find('.MuiSelect-select').click({ force: true });                                                     // postiton
                    cy.get('[data-value="D"] > .css-sc6tei').click()                                                                                            // postiton
                    cy.get('.MuiFormControl-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click({ force: true })                                      // Dowels 
                    cy.get('td.MuiTableCell-root').eq(13).find('input').type('65', { force: true });                                                            // color                    
                    cy.get('td.MuiTableCell-root').eq(14).find('input').type('555', { force: true });                                                           // Sb Color               
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






  