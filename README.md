# projeto-blogdoagi

👋 Seja bem vindo(a)!

Este projeto foi realizado para um test técnico de projetos de automação.

O projeto consiste em acessar o site https://blogdoagi.com.br/, e pesquisar  artigos do blog (lupa no canto superior esquerdo).

Foram elaborados três casos de teste simples, mas essenciais e que podem ser repetitivos e, portanto, fortes candidatos à automação:  
1. Verificar a busca por um determinado termo existente no site;
2. Verificar a busca por um termo não-existente no site;
3. Verificar se o usuário pode acessar um artigo após pesquisar por uma plavra-chave.

**Como executar os testes** 

A primeira maneira é: 
1. Após clonar este repositório para sua máquina local, rode os seguintes comandos no diretório do projeto: 
- npm install cypress --save-dev
- npx cypress open
2. Na página de boas vindas do Cypress, clique em 'E2E Testing'
3. Selecione o browser de sua preferência
4. Clique em 'Start E2E Testing'
5. Será aberta a aba Specs
6. Clique no caso de teste 'verifySearchAndResults'

A segunda maneira é criando um projeto no Jenkin do tipo Pipeline (veja aqui um exemplo: https://kailash-pathak.medium.com/integrate-cypress-dashboard-with-jenkins-and-execute-the-test-cases-b7a526851429)

Para visualizar o report dos testes no Jenkins: 

1. Após executar a projeto no Jenkins, clique no último build
2. No menu ao lado esquerdo, clique em Test Result
3. Será aberta uma pasta chamada 'All Tests'
4. Clique em 'root'
5. Você verá o report dos 3 testes
