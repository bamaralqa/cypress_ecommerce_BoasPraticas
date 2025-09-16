/// <reference types='cypress' />
import { SELECTORS } from '../selectors'

class LoginPage {
    // --- Ações de Login ---
    preencherEmail(email) {
        cy.get(SELECTORS.login.inputEmail).type(email)
    }

    preencherSenha(senha) {
        cy.get(SELECTORS.login.inputPassword).type(senha)
    }

    clicarBotaoLogin() {
        cy.get(SELECTORS.login.buttonLogin).click()
    }

    fazerLogin(email, senha) {
        this.preencherEmail(email)
        this.preencherSenha(senha)
        this.clicarBotaoLogin()
    }

    // --- Açoes de Cadastro Inicial ---
    preencherCadastroInicial(nome, email) {
        cy.get(SELECTORS.signup.tituloNovoUsuario).should('be.visible')
        cy.get(SELECTORS.signup.inputNome).type(nome)
        cy.get(SELECTORS.signup.inputEmail).type(email)
    }

    clicarBotaoSignup() {
        cy.get(SELECTORS.signup.buttonSignup).click()
    }

    // --- Validação ---
    validarErroLogin() {
        cy.fixture('mensagens').then(msg => {
            cy.get(SELECTORS.login.mensagemErro).should('be.visible')
                .and('contain.text', msg.login.erroCredenciais)
        })
    }
    validarErroEmailExistente() {
        cy.fixture('mensagens').then(msg => {
            cy.get(SELECTORS.signup.mensagemErroEmailExistente).should('be.visible')
                .and('have.text', msg.cadastro.erroEmailExistente)
        })
    }

    validarErroCampoEmailObrigatorio() {
        cy.fixture('mensagens').then(msg => {
            cy.get(SELECTORS.login.inputEmail)
                .validaMensagemCampoObrigatorio(msg.login.erroCampoObrigatorio);
        })
    }

    validarErroCampoSenhaObrigatorio() {
        cy.fixture('mensagens').then(msg => {
            cy.get(SELECTORS.login.inputPassword)
                .validaMensagemCampoObrigatorio(msg.login.erroCampoObrigatorio)
        })
    }
}

export default new LoginPage()