describe('Cypress basic Navigation',()=>{
    beforeEach(()=>{
        cy.visit('https://the-internet.herokuapp.com/')
    })
    it('Nagivate',()=>{
        cy.get(':nth-child(11) > a').click();
        cy.go('back') // cy.go(-1);
        cy.get(':nth-child(12) > a').should('have.text','Dynamic Content').click();
        cy.get(':nth-child(3) > a').click();
        cy.go(-1); // cy.go('back') 
        cy.go('forward')
        cy.reload();
    })
})