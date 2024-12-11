/* eslint-disable no-undef */
describe('Cadastro de pedido - Fluxo Principal', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Deve registrar um pedido com dados válidos', () => {
    cy.wait(2000);
    cy.contains('Novo Pedido').click();

    cy.wait(2000);
    cy.get('.MuiIconButton-root')
      .not('[disabled]')
      .eq(1)
      .first()
      .click()
    // .click();

    cy.wait(2000);
    cy.get('.MuiIconButton-root')
      .not('[disabled]')
      .first()
      .click();

    cy.wait(2000);
    cy.contains('Doces').click();

    cy.wait(2000);
    cy.get('.MuiIconButton-root')
      .not('[disabled]')
      .eq(1)
      .first()
      .click()
      .click();

    cy.wait(2000);
    cy.contains('Bebidas').click();

    cy.wait(2000);
    cy.get('.MuiIconButton-root')
      .not('[disabled]')
      .eq(1)
      .first()
      .click();

    cy.wait(2000);
    cy.contains('REGISTRAR PEDIDO').click();

    cy.wait(2000);
    cy.contains('PROSSEGUIR').click();

    cy.wait(2000);
    cy.contains('CONFIRMAR').click();

    cy.wait(2000);
    cy.contains('Pedido realizado!').should('be.visible');
  
    cy.contains("FECHAR").click();
  });
});


describe('Fluxo Alternativo - Cancelamento antes do cadastro de pedido', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Deve cancelar o cadastro de um novo pedido ', () => {
    cy.wait(2000);
    cy.contains('Novo Pedido').click();

    cy.wait(2000);
    cy.get('.MuiIconButton-root')
      .not('[disabled]')
      .eq(1)
      .first()
      .click();

    cy.wait(2000);
    cy.contains('Doces').click();

    cy.wait(2000);
    cy.get('.MuiIconButton-root')
      .not('[disabled]')
      .eq(1)
      .first()
      .click();


    cy.wait(2000);
    cy.contains('Ver carrinho').click();

    cy.wait(2000);
    cy.contains('Cancelar Pedido').click();

    cy.wait(2000);
    cy.contains('CONFIRMAR').click();

    cy.contains('Cancelando pedido! Aguarde um instante...').should('be.visible')
  });

});

describe('Fluxo de excessão -  Itens com quantidade maior que o estoque disponível', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Deve exibir uma mensagem de quantidade máxima atingida', () => {
    cy.wait(2000);
    cy.contains('Novo Pedido').click();

    const maxQuantity = 15;

    cy.wait(2000);
    for (let i = 0; i < maxQuantity; i++) {
      cy.get('.MuiIconButton-root')
        .not('[disabled]')
        .eq(1)
        .first()
        .click();
    }

    cy.contains('Quantidade máxima em estoque atingida!')
      .should('be.visible');

  })
})