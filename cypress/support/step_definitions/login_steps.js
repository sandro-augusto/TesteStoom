import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import login from "../pages/login_tenda_page";
import home from "../pages/home_tenda_page";

Given("que o usuario esta na tela incial", () =>{
    home.acessarpagina()
    home.validahome()
})

Given("clicar no botao Faça seu login", () =>{
    home.clicarLogin()
})

When("preencher as crendenciais {string} e {string} e clicar em Continuar", (email, password) =>{
    login.preencherEmail(email)
    login.preencherPassword(password)
    login.clicarBotaoContinuar()
})

Then("o sistema ira mostrar o texto {string}", (message) =>{
    home.validalogado(message).then((element) => {
        expect(element.text()).contains(message)
    })
})
