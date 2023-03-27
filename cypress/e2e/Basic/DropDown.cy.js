describe('Open URL', () => {
  beforeEach(() => {
    //cy.viewport(1080,720)
    cy.visit(
      'https://register.rediff.com/register/register.php?FormName=user_details'
    );
  });
  //let day = "//tbody/tr[22]/td[3]/select[1]";
  //let country = "//select[@id='country']";
  it('Dropdown List', () => {
    cy.get('[width="200"] > input').type('Test User');
    cy.get('[valign="bottom"] > [type="text"]').type('0123456');
    cy.get('#newpasswd').type('password');
    cy.wait(2000);
    cy.get('#eyeiconNew').click();
    cy.get('#newpasswd1').type('Password1234');
    cy.get(':nth-child(1) > [width="185"] > input').type('acd123@gmail,com');
    cy.get('#mobno').type('01789456123');
    //cy.get('[name="DOB_Year3360aa5a"]').select(2);
    cy.xpath("//tbody/tr[22]/td[3]/select[1]").select(5);
    //cy.get('[name="DOB_Month220f9000"]').select('3');
    //cy.get('[name="DOB_Day13c4a5fb"]').select(2);
    // cy.xpath(country).select(17);
    cy.get('#country').select(15);
    cy.screenshot('Test');
  });
});
