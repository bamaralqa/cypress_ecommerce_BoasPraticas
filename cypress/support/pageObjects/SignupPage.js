/// <reference types='cypress' />
import { SELECTORS } from '../selectors'

class SignupPage {
  // --- Metodos pequenos e especificos ---
  validarPageFormulario() {
    cy.get(SELECTORS.signupForm.tituloInfConta).should('be.visible')
  }

  marcarGenero(genero) {
    //Logica para escolher seletor de genero
    if (genero === 'radioMr') {
      cy.get(SELECTORS.signupForm.radioMr).check()
    } else {
      cy.get(SELECTORS.signupForm.radioMrs).check()
    }
  }

  validarNomeEmail(nome, email) {
    cy.get(SELECTORS.signupForm.nomeTexto).should('have.value', nome)
    cy.get(SELECTORS.signupForm.emailTexto).should('have.value', email)
  }

  preencherSenha(senha) {
    cy.get(SELECTORS.signupForm.senha).type(senha)
  }

  selecionarDataNascimento(dia, mes, ano) {
    cy.get(SELECTORS.signupForm.diaAniversario).select(dia)
    cy.get(SELECTORS.signupForm.mesAniversario).select(mes)
    cy.get(SELECTORS.signupForm.anoAniversario).select(ano)
  }

  marcarNewsletter() {
    cy.get(SELECTORS.signupForm.newsletter).check()
  }

  marcarOfertas() {
    cy.get(SELECTORS.signupForm.ofertas).check()
  }

  preencherEndereco(dadosEndereco) {
    cy.get(SELECTORS.signupForm.primeiroNome).type(dadosEndereco.primeiroNome)
    cy.get(SELECTORS.signupForm.sobrenome).type(dadosEndereco.sobrenome)
    cy.get(SELECTORS.signupForm.empresa).type(dadosEndereco.empresa)
    cy.get(SELECTORS.signupForm.endereco1).type(dadosEndereco.endereco1)
    cy.get(SELECTORS.signupForm.endereco2).type(dadosEndereco.endereco2)
    cy.get(SELECTORS.signupForm.pais).select(dadosEndereco.pais)
    cy.get(SELECTORS.signupForm.estado).type(dadosEndereco.estado)
    cy.get(SELECTORS.signupForm.cidade).type(dadosEndereco.cidade)
    cy.get(SELECTORS.signupForm.cep).type(dadosEndereco.cep)
    cy.get(SELECTORS.signupForm.celular).type(dadosEndereco.celular)
  }

  clicarBotaoCriarConta() {
    cy.get(SELECTORS.signupForm.btnCriarConta).click()
  }
  // --- Metodo orquestrador ---
  // Ele que será chamado no teste. 
  // Um metodo maior que chama todos os metodos menores na mesma classe utilizando o this.

  preencherFormularioCompleto(usuario) {
    this.validarPageFormulario()
    this.marcarGenero(usuario.genero)
    this.validarNomeEmail(usuario.nome, usuario.email)
    this.preencherSenha(usuario.senha)
    this.selecionarDataNascimento(
      usuario.dataNascimento.dia,
      usuario.dataNascimento.mes,
      usuario.dataNascimento.ano
    )
    this.marcarNewsletter()
    this.marcarOfertas()
    this.preencherEndereco(usuario.endereco)
  }
}
export default new SignupPage()