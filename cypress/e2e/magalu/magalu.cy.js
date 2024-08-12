/// <reference types="cypress" />

describe('Website Magazine Luiza Tests', () => {
  beforeEach(() => {
    cy.viewport('macbook-16')
  })

  it('Deve exibir a barra de busca e retornar resultados', () => {
    cy.visit('https://www.magazineluiza.com.br'); 
    cy.get('input[placeholder="Busca no Magalu"]').should('be.visible');
    cy.get('input[placeholder="Busca no Magalu"]').type('Smartphone{enter}'); 
    cy.url().should('include', 'busca');
    cy.get('[data-testid="product-card-container"]').should('exist'); 
  });

  it('Deve navegar até a seção de marketplace e apresentar um botão para se cadastrar', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });

    cy.visit('https://www.magazineluiza.com.br');
    cy.get('a[title="Link para: Venda seus produtos"]').click();
    cy.url().should('include', 'universo');
    cy.get('.MuiTypography-h1').should('be.visible');
    cy.get('a[title="Cadastrar"]').should('be.visible');
  });

  it('Deve carregar a página de detalhes do produto ao clicar em um item da busca', () => {
    cy.visit('https://www.magazineluiza.com.br');
    cy.get('[data-testid="product-card-container"]').first().click();
    cy.url().should('include', '/p/');
    cy.get('[data-testid="heading-product-title"]').should('be.visible');
    cy.get('[data-testid="price-value"]').should('be.visible');
  });

/*it('Deve adicionar um produto ao carrinho e verificar a presença no carrinho', () => {
    cy.visit('https://www.magazineluiza.com.br');
    cy.get('input[placeholder="Busca no Magalu"]').type('Panela{enter}'); 
    cy.get('[data-testid="product-card-container"]').first().click();
    cy.get('[data-testid="bagButton"]').click();
    cy.url().should('include', 'sacola');
    cy.get('.BasketItem-productContainer').should('exist');
    cy.get('.BasketItemProduct-info-title').should('exist');
  }); */

 /*it('Deve carregar a página da categoria ao clicar em uma categoria', () => {
    cy.visit('https://www.magazineluiza.com.br');
    cy.get('a[href="https://www.magazineluiza.com.br/celulares-e-smartphones/l/te/"]').first().click();
    cy.url().should('include', '/celulares');
    cy.get('h1[title="Celulares e Smartphones"]').should('exist');
  }); */

})
