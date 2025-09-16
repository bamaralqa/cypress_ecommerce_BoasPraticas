/// <reference types='cypress' />

import homePage from '../support/pageObjects/HomePage';
import loginPage from '../support/pageObjects/LoginPage';

// ---Testes relacionados ao fluxo de login ---
describe('Autenticação de Usuário', () => {

  // Teste de login com sucesso
  it('Deve realizar login com sucesso', () => {
    //Utilizando usuario do arquivo fixtures>usuario.json
    cy.fixture('usuarios').then(massa => {
      cy.login(massa.valido.email, massa.valido.senha)
      //validação
      homePage.validarLoginComSucesso(massa.valido.nome)
    })
  })

  // Teste de logout com sucesso 
  it('Deve realizar logout com sucesso', () => {
    // Pré-condição: Fazer login e após fazer logout
    cy.fixture('usuarios').then(massa => {
      cy.login(massa.valido.email, massa.valido.senha)
    })
    homePage.clicarLinkLogout()

    //valida se o logout foi bem sucedido
    homePage.validarLogoutComSucesso()
  })

  // --- Contexto separado para os cenários de falha ---
  context('Cenario de falha', () => {
    beforeEach(() => {
      cy.visit('/login')
    })

    it('Deve exibir erro ao tentar logar com credenciais inválidas', () => {
      loginPage.fazerLogin('emailinvalido@teste.com', 'senhaerrada')
      loginPage.validarErroLogin()
    })

    it('Deve exibir erro de campo obrigatório para e-mail', () => {
      loginPage.clicarBotaoLogin()
      loginPage.validarErroCampoEmailObrigatorio()
    })

    it('Deve exibir erro de campo obrigatório para senha', () => {
      cy.fixture('usuarios').then(massa => {
        loginPage.preencherEmail(massa.valido.email)
        loginPage.clicarBotaoLogin()
        loginPage.validarErroCampoSenhaObrigatorio()
      })
    })
  })
})