/// <reference types='cypress' />

// Testes relacionados ao fluxo de cadastro
import AccountCreatedPage from '../support/pageObjects/AccountCreatedPage';
import HomePage from '../support/pageObjects/HomePage';
import LoginPage from '../support/pageObjects/LoginPage';
import SignupPage from '../support/pageObjects/SignupPage';

import { criarUsuario } from '../support/factories/usuarioFactory';


describe('Cadastro de usuário', ()=>{
  beforeEach(()=>{
    HomePage.acessarHome()
  })

  it('Cadastrar novo usuário com sucesso', ()=>{
    const usuario = criarUsuario() 

    HomePage.clicarLinkSignupLogin()   

    LoginPage.preencherCadastroInicial(usuario.nome, usuario.email)
    LoginPage.clicarBotaoSignup()

    // Metodo orquestrador que preenche cada campo do formulario
    SignupPage.preencherFormularioCompleto(usuario)
    SignupPage.clicarBotaoCriarConta()

    AccountCreatedPage.validarPaginaDeContaCriada()
    AccountCreatedPage.clicarBotaoContinue()

    HomePage.validarLoginComSucesso(usuario.nome)
    
  })
  it('Tentativa de cadastrar com e-mail já cadastrado',()=>{
    //Utilizando usuario do arquivo fixtures>usuario.json
    cy.fixture('usuarios').then((massa)=>{
      HomePage.clicarLinkSignupLogin()

      LoginPage.preencherCadastroInicial(massa.existente.nome,massa.existente.email)
      LoginPage.clicarBotaoSignup()

      //validar mensagem de erro
      LoginPage.validarErroEmailExistente()
    })
  })

})
