describe('Fixture data set', () => {
  it('Data set', () => {
    cy.visit(
      'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    );

    cy.fixture('dataSet').then((data) => {
      cy.get(
        ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
      ).type(data.username);
      cy.get(
        ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
      ).type(data.password);
      cy.get('.oxd-button').click();
    });
  });
});
