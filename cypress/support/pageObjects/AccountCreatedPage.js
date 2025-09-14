/// <reference types='cypress' />
// Ações da página de sucesso pós-cadastro

//Elementos mapeados da pagina Mensagem Cadastro
export const ELEMENTS = {
    tituloSucesso: '[data-qa="account-created"]',
    btnContinue: '[data-qa="continue-button"]'
    
}

// Classe com métodos de acesso aos elementos pagina Mensagem Cadastro



class AccountCreatedPage{
  validarPaginaDeContaCriada(){
    cy.get(ELEMENTS.tituloSucesso).should('have.text', "Account Created!")
  }
  clicarBotaoContinue() {
    cy.get(ELEMENTS.btnContinue).click()
  }
  
}
export default new AccountCreatedPage()