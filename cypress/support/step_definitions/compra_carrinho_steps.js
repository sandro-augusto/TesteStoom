import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import home from "../pages/home_tenda_page";
import login from "../pages/login_tenda_page";

Given("que o usuario esta logado", () => {
    home.acessarpagina()
    home.validahome()
    home.clicarLogin()
    login.preencherEmail('sandroaugusto10@gmail.com')
    login.preencherPassword('Testeautomation10!')
    login.clicarBotaoContinuar()
    home.validalogado().then((element) => {
        expect(element.text()).contains('Olá, Sandro')
    })

});

When("o usuario adiciona 1 produto Tenda no carrinho", () => {
    home.clickConcordarFechar()
    home.produtoTenda()
});

When("o usuario adiciona 1 produto seller no carrinho", () => {
    home.produtoSeller()
    home.clicarVerCarrinho()
});

Then("o carrinho deve conter ambos os produtos", () => {
   home.validaProdutoTenda(text).then((produto) => {
    expect(produto.text()).eq('Guarda Sol Coat Belfix 1,80m')
   })
   home.validaProdutoSeller(text).then((produto) => {
    expect(produto.text()).eq('Inseticida Aerosol à Base de Água Embalagem Econômica Raid 450ml')
   })
});
