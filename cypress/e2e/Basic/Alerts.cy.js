describe('Alert Test', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
  });

  let js_Alert = "//button[normalize-space()='Click for JS Alert']";
  let js_Comfrim = "//button[normalize-space()='Click for JS Confirm']";
  let js_prompt = "//button[normalize-space()='Click for JS Prompt']";
  let massage = "//p[@id='result']";
  it('Test', () => {
    cy.wait(2000);
    cy.xpath(js_Alert).click();
    cy.xpath(massage).should('have.text', 'You successfully clicked an alert');
    cy.wait(2000);

    cy.on('window:confirm', () => {
      return true;
    });
    cy.xpath(js_Comfrim).click();
    cy.xpath(massage).should('have.text', 'You clicked: Ok');
    cy.wait(2000);

    cy.window().then(function ($win) {
      cy.stub($win, 'prompt').returns('Hello world');
      cy.xpath(js_prompt).click();
      cy.wait(1000);
      cy.xpath(massage).should('have.text', 'You entered: Hello world');
    });
  });
});
