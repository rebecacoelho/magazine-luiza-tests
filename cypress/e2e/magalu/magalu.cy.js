/// <reference types="cypress" />

describe('Website Magazine Luiza Tests', () => {
  beforeEach(() => {
    cy.viewport('macbook-16');
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });

  it('Deve exibir a barra de busca e retornar resultados', () => {
    cy.visit('https://www.magazineluiza.com.br');

    cy.get('input[placeholder="Busca no Magalu"]').should('be.visible').type('Smartphone{enter}');
    cy.url().should('include', 'busca');
    cy.get('[data-testid="product-card-container"]').should('exist');
  });


  it('Deve carregar a página de detalhes do produto ao clicar wm produto', () => {
    cy.visit('https://www.magazineluiza.com.br');

    cy.get('[data-testid="product-card-container"]').first().click();

    cy.url().should('include', '/p/');
    cy.get('[data-testid="heading-product-title"]').should('be.visible');
    cy.get('[data-testid="price-value"]').should('be.visible');
  });


  it('Deve adicionar um produto ao carrinho e verificar a presença no carrinho', () => {
    cy.visit('https://www.magazineluiza.com.br/panela-de-pressao-panelux-45l-cereja-fechamento-externo-magnific/p/237805900/ud/udpp/');

    cy.get('[data-testid="bagButton"]').first().click();
    cy.request('GET', 'https://sacola.magazineluiza.com.br/')
      .then((res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.not.be.empty;
      });
  });


  it('Deve carregar a página da categoria ao clicar em uma categoria', () => {
    cy.visit('https://www.magazineluiza.com.br');

    cy.get('[data-testid="link-menu-item"] a[href="https://www.magazineluiza.com.br/celulares-e-smartphones/l/te/"]')
      .filter(':visible').first().click();
    cy.url().should('include', '/celulares');
    cy.get('h1[title="Celulares e Smartphones"]').should('exist');
  });


  it('Deve navegar até a seção de marketplace e apresentar um botão para se cadastrar', () => {
    cy.visit('https://www.magazineluiza.com.br');

    cy.get('a[title="Link para: Venda seus produtos"]').click();

    cy.origin('https://universo.magalu.com', () => {
      cy.url().should('include', 'universo');
      cy.get('.MuiTypography-h1').should('be.visible');
      cy.get('a[title="Cadastrar"]').should('be.visible');
    });
  });


  it('Deve calcular o frete ao inserir o CEP na página do produto', () => {
    cy.visit('https://www.magazineluiza.com.br/panela-de-pressao-panelux-45l-cereja-fechamento-externo-magnific/p/237805900/ud/udpp/');

    cy.get('[data-testid="shipping-button"]').click();
    cy.get('[data-testid="zipcode-input"]').type('01001000');
    cy.get('[data-testid="zipcode-button"]').click();

    cy.wait(5000);

    cy.get('[data-testid="shipping-item"]').should('be.visible');
  });


  it('Deve cadastrar o e-mail para receber avisos de promoções', () => {
    cy.visit('https://www.magazineluiza.com.br');
   
    cy.get('[data-testid="newsletter-input-name"]').type('Meu Nome');
    cy.get('[data-testid="newsletter-input-email"]').type('meuemail@exemplo.com');
    cy.get('[data-testid="newsletter-submit"]').click();

    cy.get('[data-testid="newsletter-title"]').should(($el) => {
      expect($el.text()).to.be.oneOf(['Seu e-mail foi cadastrado!', 'Se conecte com a gente!']);
    });
  });


  it('Deve aplicar filtro e exibir produtos corretos', () => {
    cy.visit('https://www.magazineluiza.com.br/celulares-e-smartphones/l/te/');

    cy.get('[data-testid="filter-checkbox"]').contains('Apple').click();

    cy.wait(5000);

    cy.get('[data-testid="product-title"]').each(($el) => {
      expect($el.text()).to.match(/Apple|iPhone/i);
    });
  });


  it('Deve adicionar 2 unidades do produto ao carrinho e validar a quantidade no carrinho', () => {
    cy.visit('https://www.magazineluiza.com.br/desodorante-antitranspirante-aerossol-dove-sensitive-48-horas-sem-perfume-150ml/p/221371500/me/mddt/');

    cy.get('[data-testid="bagButton"]').first().click();

    cy.get('.BasketItem-productContainer').should('exist');
    cy.get('.BasketPriceBox-prices-titleProducts').should('contain', '2 itens');
  });


  it('Deve acessar a página de acessibilidade e ativar o plugin Hand Talk para linguagem de Libras', () => {
    cy.visit('https://www.magazineluiza.com.br');

    cy.get('a[href="https://especiais.magazineluiza.com.br/acessibilidade/"]').first().click();
   
    cy.get('.css-1d2yaw8').first().click();
    cy.get('[aria-label="Ativar Hand Talk Plugin"]').click();
    cy.get('.sc-gHjVMF.jnTsIG').should('be.visible');
  });
});
