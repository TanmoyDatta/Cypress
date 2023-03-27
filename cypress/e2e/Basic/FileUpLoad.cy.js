describe('File Upload', () => {
  before(function () {
    cy.visit('https://the-internet.herokuapp.com/upload');
  });
  it('File Upload using selectFile', () => {
    cy.get('#file-upload').selectFile('cypress/screenshots/Test.png')
    cy.get('#file-submit').click();
    cy.get('#uploaded-files').contains('Test.png')
    cy.screenshot('FileSS')
  });
});
