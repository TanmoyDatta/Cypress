describe('Locator Test', () => {
  it('Open Url', () => {
    cy.visit('https://www.guru99.com/');
    cy.title().should(
      'eq',
      'Meet Guru99 – Free Training Tutorials & Video for IT Courses'
    );
  });

  it('select option', () => {
    cy.visit('https://www.guru99.com/');
    cy.wait(5000);
    cy.xpath("//a[@title='Software Testing']").click();
  });
});
