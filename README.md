Testes Automatizados para o site do Magazine Luiza com Cypress
==============================================================

Este repositório contém testes automatizados end-to-end para o site do Magazine Luiza, utilizando o Cypress. Os testes cobrem diversos fluxos de usuários, garantindo que o site funcione corretamente em diferentes páginas e interações.

Como começar
------------

### Pré-requisitos

Antes de executar os testes, certifique-se de ter os seguintes softwares instalados:

*   [Node.js](https://nodejs.org/) (versão 12 ou superior)  
*   [npm](https://www.npmjs.com/) (vem junto com o Node.js)

### Instalação

1.  git clone git@github.com:rebecacoelho/magazine-luiza-tests.git
2.  yarn install

### Executando os testes

#### Executar o Cypress no navegador (Electron mais recomendado)

Para rodar os testes utilizando o Cypress com o Electron, que é o navegador padrão do Cypress:

`npx cypress open`

Este comando abrirá a interface do Cypress Test Runner. A partir daí, você pode selecionar o teste e2e do magalu.cy.js, e ele será executado no navegador escolhido. Dê preferência para a utilizaçÃo do Electron por ser o padrão do cypress.

#### Executar testes em modo Headless

Se preferir rodar os testes sem interface gráfica:

`npx cypress run`

Isso executará todos os testes no navegador Electron em modo headless.

### Visão geral dos testes

A suíte de testes inclui os seguintes cenários:

1.  **Teste da Barra de Busca**:
    
    *   Verifica se a barra de busca está visível e retorna resultados quando uma pesquisa é realizada.
        
2.  **Teste da Página de Detalhes do Produto**:
    
    *   Verifica se ao clicar em um produto, o usuário é redirecionado para a página de detalhes do produto.
        
3.  **Teste de Adição ao Carrinho**:
    
    *  Testa a funcionalidade de adicionar um produto ao carrinho e verifica se o produto aparece no carrinho.
        
4.  **Teste da Página de Categoria**:
    
    *  Garante que ao clicar em uma categoria, o usuário é redirecionado para a página correta.
        
5.  **Teste de Navegação para o Marketplace**:
    
    *  Verifica se o link para o marketplace redireciona corretamente e se o botão de cadastro está visível.
        
6.  **Teste de Cálculo de Frete**:
    
    *  Testa a funcionalidade de cálculo de frete inserindo um CEP na página do produto.
        
7.  **Teste de Cadastro de E-mail**:
    
    *  Verifica se o formulário de cadastro de e-mail funciona e exibe a mensagem de confirmação correta.
        
8.  **Teste de Aplicação de Filtro**:
    
    *  Verifica se a aplicação de filtros na página da categoria exibe os produtos corretos.
        
9.  **Teste de Adição de Múltiplos Itens ao Carrinho**:
    
    *  Testa a adição de múltiplas unidades de um produto ao carrinho e valida a quantidade no carrinho.
        
10.  **Teste da Página de Acessibilidade**:

     *  Garante que a página de acessibilidade carrega corretamente e que o plugin Hand Talk para uso de tradução com Libras é ativado.
        
### Observações

*   Esses testes foram configurados para rodar em uma visão desktop, especificamente emulando o tamanho de tela de um MacBook 16".
*   Recomenda-se priorizar a execução do Cypress com o Electron para consistência com a configuração dos testes.
*   Os testes incluem tratamento de exceções não capturadas, para que erros inesperados no site não causem falhas nos testes.