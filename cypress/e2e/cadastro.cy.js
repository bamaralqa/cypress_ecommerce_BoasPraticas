/// <reference types='cypress' />
import { criarUsuario } from '../support/factories/usuarioFactory';
import accountCreatedPage from '../support/pageObjects/AccountCreatedPage';
import homePage from '../support/pageObjects/HomePage';
import loginPage from '../support/pageObjects/LoginPage';

// --- Testes relacionados ao fluxo de Cadastro ---

describe('Fluxo de cadastro de usuário', () => {

  it('Deve cadastrar um novo usuário com sucesso', () => {
    const usuario = criarUsuario()

    // --- Executa todo o fluxo de cadastro ---
    cy.cadastrarUsuarioUI(usuario)

    // --- Validações ---
    accountCreatedPage.validarPaginaDeContaCriada()
    accountCreatedPage.clicarBotaoContinue()
    homePage.validarLoginComSucesso(usuario.nome)
  })

  it('Deve exibir erro ao tentar cadastrar um e-mail já cadastrado', () => {

    cy.fixture('usuarios').then(massa => {
      homePage.acessarHome()
      homePage.clicarLinkSignupLogin()

      loginPage.preencherCadastroInicial(massa.existente.nome, massa.existente.email)
      loginPage.clicarBotaoSignup()

      // --- validar mensagem de erro ---
      loginPage.validarErroEmailExistente()
    })
  })

})
