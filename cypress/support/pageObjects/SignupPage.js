/// <reference types='cypress' />
// Ações e elementos da página do formulario de cadastro completo

//Elementos mapeados da pagina Formulario Cadastro
const ELEMENTS = {
    tituloInfConta: 'h2.title.text-center:contains("Enter Account Information")',
    radioMr: '#id_gender1',
    radioMrs: '#id_gender2',
    nomeTexto:'#name',
    emailTexto:'#email',
    senha: '#password',
    diaAniversario: '#days',
    mesAniversario: '#months',
    anoAniversario: '#years',
    newsletter: '#newsletter',
    ofertas: '#optin',
    // --- Elementos Endereço ---
    primeiroNome: '#first_name',
    sobrenome: '#last_name',
    empresa: '#company',
    endereco1: '#address1',
    endereco2: '#address2',
    pais: '#country',
    estado: '#state',
    cidade: '#city',
    cep: '#zipcode',
    celular: '#mobile_number',
    btnCriarConta: '[data-qa="create-account"]'

}

// Classes com métodos de acesso aos elementos Formulario Cadastro

class SignupPage{
  // --- Metodos pequenos e especificos ---
  validarPageFormulario(){
        cy.get(ELEMENTS.tituloInfConta).should('be.visible')
  }
  marcarGenero(genero){
    //Logica para escolher seletor de genero
    if(genero ==='Mr'){
      cy.get(ELEMENTS.radioMr).check()
    } else{
      cy.get(ELEMENTS.radioMrs).check
    }
  }
  validarNomeEmail(nome, email) {
    cy.get(ELEMENTS.nomeTexto).should('have.value', nome)
    cy.get(ELEMENTS.emailTexto).should('have.value', email)
  }
  preencherSenha(senha) {
    cy.get(ELEMENTS.senha).type(senha)
  }
  selecionarDataNascimento(dia, mes, ano) {
    cy.get(ELEMENTS.diaAniversario).select(dia)
    cy.get(ELEMENTS.mesAniversario).select(mes)
    cy.get(ELEMENTS.anoAniversario).select(ano)
  }
  marcarNewsletter() {
    cy.get(ELEMENTS.newsletter).check()
  }
  marcarOfertas() {
    cy.get(ELEMENTS.ofertas).check()
  }
  preencherEndereco(dadosEndereco) {
      cy.get(ELEMENTS.primeiroNome).type(dadosEndereco.primeiroNome)
      cy.get(ELEMENTS.sobrenome).type(dadosEndereco.sobrenome)
      cy.get(ELEMENTS.empresa).type(dadosEndereco.empresa)
      cy.get(ELEMENTS.endereco1).type(dadosEndereco.endereco1)
      cy.get(ELEMENTS.endereco2).type(dadosEndereco.endereco2)
      cy.get(ELEMENTS.pais).select(dadosEndereco.pais)
      cy.get(ELEMENTS.estado).type(dadosEndereco.estado)
      cy.get(ELEMENTS.cidade).type(dadosEndereco.cidade)
      cy.get(ELEMENTS.cep).type(dadosEndereco.cep)
      cy.get(ELEMENTS.celular).type(dadosEndereco.celular)
  }
  clicarBotaoCriarConta() {
    cy.get(ELEMENTS.btnCriarConta).click()
  }
  // --- Metodo orquestrador ---
  // Ele que será chamado no teste. 
  // Um metodo maior que chama todos os metodos menores na mesma classe utilizando o this.
  preencherFormularioCompleto(usuario){
    this.validarPageFormulario()
    this.marcarGenero()
    this.validarNomeEmail(usuario.nome, usuario.email)
    this.preencherSenha(usuario.senha)
    this.selecionarDataNascimento(
      usuario.dataNascimento.dia, 
      usuario.dataNascimento.mes, 
      usuario.dataNascimento.ano)
    this.marcarNewsletter()
    this.marcarOfertas()
    this.preencherEndereco(usuario.endereco)
  }

    
}
export default new SignupPage()