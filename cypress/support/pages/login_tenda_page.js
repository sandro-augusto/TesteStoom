/// <reference types="cypress" />
var el = require('../elements/loginElements.js').LOGIN
const { set, click } = require('../actions.js');

class Login {

  preencherEmail(email) {
    set(el.campo_email, email);
  }

  preencherPassword(password) {
    set(el.campo_Senha, password);
  }

  clicarBotaoContinuar() {
    click(el.btn_continuar);
  }

}

export default new Login();
      