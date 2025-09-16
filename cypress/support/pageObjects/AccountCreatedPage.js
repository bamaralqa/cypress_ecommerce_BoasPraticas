/// <reference types='cypress' />
import { SELECTORS } from '../selectors'

class AccountCreatedPage {
  validarPaginaDeContaCriada() {
    cy.fixture('mensagens').then(msn => {
      cy.get(SELECTORS.accountCreated.tituloSucesso)
        .should('have.text', msn.cadastro.sucesso)
    })
  }

  clicarBotaoContinue() {
    cy.get(SELECTORS.accountCreated.botaoContinuar).click()
  }
}
export default new AccountCreatedPage()