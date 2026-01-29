describe('Stock Control MVP', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('should display the application', () => {
    cy.get('app-root').should('exist');
  });

  it('should have a navbar', () => {
    cy.get('nav').should('exist');
  });
});
