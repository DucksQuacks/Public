describe('Hungry Test', () => {
    it('Goes to website and prepares order', () => {
        cy.visit('https://tryhungry.com')
        cy.viewport(1200, 1000)
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.get('.css-zjuvy6 > :nth-child(1) > p').realHover();
        cy.contains('Washington, DC').click()
        cy.get('.react-datepicker__input-container > input').click()

        // Changes the date to the 24th
        cy.contains('24').click()
        cy.get(':nth-child(1) > .menu-card-container > :nth-child(3) > :nth-child(1) > .menu-card-cover-image-container > .blue-gradient-overlay').click()
        
        // Orders two different food items. 8 of each
        cy.get('#a80fb07c-8d10-4fd6-b627-6b7225d56941').type('8')
        cy.wait(5000)
        cy.get('#c60caa54-31ac-4e23-8528-d02de695be2f').type('8')
        cy.wait(5000)

        // Orders two different drinks. 8 of each
        cy.get('#react-select-2--value > .Select-placeholder').click()
        cy.contains('Coke').click()
        cy.get(':nth-child(1) > .entree-input-container > input').type('8')
        
        cy.get('#react-select-2--value > .Select-placeholder').click()
        cy.contains('Sprite').click()
        cy.get(':nth-child(2) > .entree-input-container > input').type('8')

        // Orders 8 brownies
        cy.get('#react-select-3--value > .Select-placeholder').click()
        cy.contains('Brownies').click()
        cy.get(':nth-child(5) > :nth-child(1) > .entree-input-container > input').type('8')

        // Provides additional delivery instructions
        cy.get('textarea').type('Can you please bring extra napkins!')

        // Provides a big tip
        cy.get('.divider-extrasmall > div > :nth-child(4)').click()

        // Waits 5 seconds. Sometimes confirm order button is not available right away.
        cy.wait(5000)
        cy.get('.confirm-order-details > .continue-to-checkout > .continue-button').click()
        
        // Provides Customer Information
        cy.get('.css-30cu7z > :nth-child(1) > input').type('Bob')
        cy.get('.css-30cu7z > :nth-child(2) > input').type('Donuts')
        cy.get('.css-30cu7z > :nth-child(3) > input').type('5555555555')
        cy.get('.css-30cu7z > :nth-child(4) > input').type('B.donuts@mail.com')
        cy.get('.css-30cu7z > :nth-child(5) > input').type('123 Donut Street')
        cy.get('.css-30cu7z > :nth-child(7) > input').type('Fairfax')
        cy.get(':nth-child(8) > :nth-child(1) > input').type('Virginia')
        cy.get(':nth-child(8) > :nth-child(2) > input').type('22030')
        cy.get('#front').realClick()

        // Provides payment information
        cy.wait(5000)
        cy.get('#ach').realClick() 
 

    })
    
})

