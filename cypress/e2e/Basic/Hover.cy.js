describe('Hover Test',()=>{
    beforeEach(('Open URL'),()=>{
        cy.visit('https://www.amazon.com/') 
    })
it('Hover using in priyo shop site',()=>{
    cy.get('#nav-link-accountList').trigger('mouseover')
        cy.wait(2000)
        cy.xpath("//span[normalize-space()='Account']").click();
    

})

})