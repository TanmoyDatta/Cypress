describe('Alert Test', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
  });

  let js_Alert = "//button[normalize-space()='Click for JS Alert']";
  let js_Comfrim = "//button[normalize-space()='Click for JS Confirm']";
  let js_prompt = "//button[normalize-space()='Click for JS Prompt']";
  let Alert_massage = "//p[@id='result']";
  it('Test', () => {
    cy.wait(2000);
    cy.xpath(js_Alert).click();
    cy.wait(2000);
    cy.xpath(js_Comfrim).click();
    cy.xpath(Alert_massage).should('have.test', 'You clicked: Ok');
  });
});
