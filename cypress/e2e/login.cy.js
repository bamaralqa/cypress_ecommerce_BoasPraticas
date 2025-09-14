/// <reference types='cypress' />

import HomePage from '../support/pageObjects/HomePage';
import LoginPage from '../support/pageObjects/LoginPage';

// ---Testes relacionados ao fluxo de login ---

describe('Fluxo Login', ()=>{
  beforeEach(()=>{
    HomePage.acessarHome()
    HomePage.clicarLinkSignupLogin()
  })

  it('Realizar login com sucesso', () => {
     //Utilizando usuario do arquivo fixtures>usuario.json
      cy.fixture('usuarios').then( massa => {
        LoginPage.fazerLogin(massa.valida.email, massa.valida.senha)

        HomePage.validarLoginComSucesso(massa.valida.nome)
      })
      
  })

  it('Tentativa de login com dados inválidos',() => {
    LoginPage.fazerLogin('emailinvalido@teste.com','senhaerrada')
    
    LoginPage.validarErroLogin()
  })

  it('Tentativa de login sem informar email',() => {
    LoginPage.clicarBotaoLogin()

    LoginPage.validarErroCampoEmailObrigatorio()    
  })

  it('Tentativa de login sem informar senha',() => {
    cy.fixture('usuarios').then( massa => {
      LoginPage.preencherEmail( massa.valida.email)

      LoginPage.clicarBotaoLogin()
      LoginPage.validarErroCampoSenhaObrigatorio()
    })
  })


})

  

  
  