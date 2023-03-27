describe('Test',()=>{
    
    it('Title Verify',()=>{
        cy.visit('https://demo.nopcommerce.com/')
        cy.title().should('eq','nopCommerce demo store')
        
        cy.get('#small-searchterms').type('Apple MacBook Pro 13-inch')
        cy.get('#small-search-box-form > .button-1').should('have.text','Search').click();
        cy.get('.product-item > .picture > a > img').scrollIntoView({
            easing:'linear',
            duration:3000,
        }).click()
        cy.get('#add-to-cart-button-4').scrollIntoView({
            easing:'linear',
            duration:3000,
        }).click()
        cy.xpath("//span[contains(text(),'Shopping cart')]").click()
        cy.wait(2000)
      cy.xpath("//span[@class='product-unit-price']").contains("$1,800.00")
      cy.wait(2000)
      cy.xpath("//span[@class='product-subtotal']").contains("$3,600.00")  
      cy.wait(2000)
    })
})