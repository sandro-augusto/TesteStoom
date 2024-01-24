

## Objetivo do Desafio
Tenho o prazer de convidá-los a participar de um teste prático de QA como parte do
nosso processo seletivo. Este teste é uma oportunidade para demonstrarem suas habilidades e
competências na área de Quality Assurance (QA), especificamente em automação de testes.

## Descrição do Teste
O teste consistirá na criação de um script automatizado no ambiente de
desenvolvimento do e-commerce do Tenda Atacado. Os detalhes do ambiente (URL) serão
fornecidos posteriormente. As tarefas a serem automatizadas incluem:
● Adicionar dois produtos ao carrinho - um produto Tenda e um produto de um
seller.
● Testar a funcionalidade de adicionar e remover unidades desses dois itens no
carrinho.
● Executar o processo de finalização do carrinho de compras, gerando um
pedido via boleto e outro utilizando um cartão de testes (os dados do cartão
serão especificados).
● Criar um cadastro na plataforma pelo ambiente de desenvolvimento e utilizar
esse usuário para fazer login e realizar o teste automatizado.
## Requisitos Técnicos
● O teste deve ser desenvolvido utilizando o Cypress.
● O script deve ser disponibilizado em um repositório público no GitHub para
que nossa equipe possa acessar, executar e analisar o trabalho.
# Informações Adicionais
## Ambiente
Para a realização do teste prático de QA, o ambiente designado é o seguinte:
URL do Ambiente de Testes: https://marketplace-alpha.tendaatacado.com.br/
Este link conduzirá você ao ambiente de desenvolvimento do nosso
e-commerce, onde o teste automatizado deve ser executado.
## Cartão de Teste
Número: 4000000000000010
CVV e data de expiração pode ser qualquer valor.



# AUTOMAÇÃO DO FRONT-END - TENDA

**TESTE DE AUTOMAÇÃO EM CYPRESS DO SITE DA TENDA ATACADO**

## Instalação do Ambiente
* Instale a IDE de sua preferência, o Visual Studio Code é recomendado, onde as execuções serão realizadas.

* NodeJs na versão 18.11.0

* Cypress na versão 13.6.2

## *  Primeiro, clone o projeto

## Comando para instalar dependências e plugins do projeto:
```sh default
 yarn install
```
**ou**
```sh default
 npm install
```
## Comando para abrir o Cypress:
```sh default
* yarn cypress open
```
**ou**
```sh default
 npx cypress open
```
## Comando para executar o projeto em modo headless:
```sh default
* yarn run
```
**ou**
```sh default
 npx cypress
```
## Comando para executar o projeto usando Tags:
```sh default
 yarn cypress run --env tags=@SuaTag
```

# Estrutura do Projeto Cypress

| Diretório                         | Finalidade                                                                                                 | 
|--------------------------------|------------------------------------------------------------------------------------------------------------|
| e2e/features           | Local onde são descritas as features "Cenários" em formato BDD(Gherkin)                                           |
| support/pages              | Local onde devem ser criados os Arquivos Pages com as Classes e Métodos para as ações                   |
| support/step_definitions             | Local onde estão criados os recursos de configuração do projeto                                                           |
| Results             | Local onde são criadas as evidências e relatórios do projeto                                        |
| Elements            | Local onde deverão ser incluidos os elementos usados na Page        |
| supoort/actions     | Local onde está as ações de clicar, setar, esperar e etc. utilizado nos arquivos "page"






