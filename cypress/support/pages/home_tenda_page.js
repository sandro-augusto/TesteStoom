/// <reference types="cypress" />
var el = require('../elements/homeElements.js').HOME
const { click, get_text, click_text, set, click_index, scrollToElment, clear, get_text_index, getAPI} = require('../actions.js');

class Home {
    acessarpagina(){
        cy.visit(el.url)
    }

    validahome() {
        cy.get(el.btn_login)
            .and('have.text', "Faça seu login")
    }

    clicarLogin(){
        click(el.btn_login)
    }

    clickConcordarFechar(){
        click(el.concordarFechar)
    }

    validalogado(){
        return get_text(el.valida_logado)
    }

    realizar_pesquisa(text){
        set(el.campo_pesquisar, text)
    }

    clicarBuscar(){
        click_text(el.btn_buscar, 'Buscar')
    }

    produtoTenda(){
        set(el.campo_pesquisar, "tenda")
        click(el.btn_buscar)
        scrollToElment(el.btnSimQueroReceber)
        scrollToElment(el.sugestoes)
        click(el.btn_adicionar)
    }

    produtoSeller(){
        cy.wait(2000)
        clear(el.campo_pesquisar)
        set(el.campo_pesquisar, "seller")
        click(el.btn_buscar)
        click_index(el.btn_adicionar, 0)
    }

    clicarVerCarrinho(){
        scrollToElment(el.btnCarrinho)    
        click(el.verCarrinho)
    }

    validaProdutoTenda(){
        scrollToElment(el.btnEscolherMais)
        return get_text_index(el.produtos, 1)
    }

    validaProdutoSeller(){
        return get_text_index(el.produtos, 0)
    }

}

export default new Home();
      
