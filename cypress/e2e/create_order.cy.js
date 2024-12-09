describe('Página inicial', () => {
    it('Deve carregar corretamente', () => {
      cy.visit('/'); // Abre a URL base definida no cypress.config.js
      cy.contains('Bem-vindo'); // Verifica se "Bem-vindo" está visível
    });
  });