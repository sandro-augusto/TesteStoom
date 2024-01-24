function waitElement(el) {
    try {
        cy.log('Aguardando o elemento ' + el + 'está visível')
        cy.get(el).and('be.visible')
        cy.log('Encontrou o elemento ' + el)
    } catch (error) {
        cy.log('Exceção capturada: ' + error.message);
    }
    return waitElement;
}

function waitElement1(el) {
    try {
        cy.log('Aguardando o elemento ' + el + 'está visível')
        cy.get(el).wait(2000)
        cy.log('Encontrou o elemento ' + el)
    } catch (error) {
        cy.log('Exceção capturada: ' + error.message);
    }
    return waitElement1;
}

function waitElement_index(el, index) {
    try {
        cy.log('Aguardando o elemento ' + el + 'o Index ' + index + 'está visível')
        cy.get(el).eq(index, {timeout: 10000} )
        cy.log('Encontrou o elemento ' + el)
    } catch (error) {
        cy.log('Exceção capturada: ' + error.message);
    }
    return waitElement_index;
}

function set(el, text) {
    waitElement(el)
    try {
        cy.get(el).type(text)
        cy.log('Setou as informações no ' + el)
    } catch (error) {
        cy.log('Exceção capturada: ' + error.message);
    }
    return set;
}

function click(el) {
    waitElement(el)
    try {
        cy.get(el).click();
        cy.log('Clicou no Elemento ' + el)
    } catch (error) {
        cy.log('Exceção capturada: ' + error.message);
    }
    return click;
}

function click_text(el, text) {
    waitElement(el)
    try {
        cy.get(el).contains('have.text', text).click();
        cy.log('Clicou no Elemento ' + el)
    } catch (error) {
        cy.log('Exceção capturada: ' + error.message);
    }
    return click_text;
}

function click_index(el, index) {
    waitElement_index(el, index)
    try {
        cy.get(el).eq(index).click();
        cy.log('Clicou no Elemento ' + el + ' no Index' + index)
    } catch (error) {
        cy.log('Exceção capturada: ' + error.message);
    }
    return click_index;
}

function clear(el) {
    waitElement(el)
    try {
        cy.get(el).clear();
        cy.log('Limpou no Elemento ' + el)
    } catch (error) {
        cy.log('Exceção capturada: ' + error.message);
    }
    return clear;
}

function get_text(el) {
    waitElement(el)
    try {
        text = cy.get(el);
        cy.log('Encontrou o ' + el + ' com o texto ' + text)
    } catch (error) {
        cy.log('Exceção capturada: ' + error.message);
    }
    return text;
}

function get_text_index(el, index) {
    waitElement_index(el, index)
    try {
        text = cy.get(el).eq(index);
        cy.log(`Encontrou o  ${el}  com o texto ${text} e o index ${index}`)
    } catch (error) {
        cy.log('Exceção capturada: ' + error.message);
    }
    return text;
}

function scrollToElment(el) {
    waitElement1(el)
    try {
        cy.get(el).scrollIntoView();
        cy.log(`Encontrou o  ${el}`)
    } catch (error) {
        cy.log('Exceção capturada: ' + error.message);
    }
    return scrollToElment;
}

function scrollToElmentIndex(el, index) {
    waitElement(el)
    try {
        cy.get(el).get(index).scrollIntoView();
        cy.log(`Encontrou o  ${el} com o index ${index}`)
    } catch (error) {
        cy.log('Exceção capturada: ' + error.message);
    }
    return scrollToElmentIndex;
}

function getAPI(){
const app = window.top;
if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
    const style = app.document.createElement('style');
    style.innerHTML =
        '.command-name-request, .command-name-xhr { display: none }';
    style.setAttribute('data-hide-command-log-request', '');
    app.document.head.appendChild(style);
}
}

module.exports = {
    set, click, waitElement, waitElement_index, click_index, clear, get_text, click_text, get_text_index, scrollToElment, scrollToElmentIndex, getAPI,
    waitElement1
};