Feature: Login
    Feature Description: Login

    @loginSuccess
    Scenario: Login com sucesso
        Given que o usuario esta na tela incial
        And clicar no botao Faça seu login
        When  preencher as crendenciais "sandroaugusto10@gmail.com" e "Testeautomation10!" e clicar em Continuar
        Then o sistema ira mostrar o texto "Olá, Sandro"
