describe('First Test', () => {
  it('Open Url', () => {
    cy.visit('https://www.guru99.com/');
    console.log(cy.title().text);
    cy.title().should(
      'eq',
      'Meet Guru99 – Free Training Tutorials & Video for IT Courses'
    );
  });
});
