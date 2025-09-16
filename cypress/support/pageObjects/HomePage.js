/// <reference types='cypress' />
import { SELECTORS } from '../selectors'

class HomePage {
    acessarHome() {
        cy.visit('/')
        cy.get(SELECTORS.home.linkSignupLogin).should('be.visible')
    }

    clicarLinkSignupLogin() {
        cy.get(SELECTORS.home.linkSignupLogin).click()
    }

    validarLoginComSucesso(nomeUsuario) {
        cy.get(SELECTORS.home.linkLogout).should('be.visible')
        cy.get(SELECTORS.home.loggedInAsLabel).should('contain.text', nomeUsuario);
    }
    // Clica no link "Logout" quando o usuário está logado.
    clicarLinkLogout() {
        cy.get(SELECTORS.home.linkLogout).click();
    }

    validarLogoutComSucesso() {
        cy.url().should('include', '/login'); // Garante que foi redirecionado
        cy.get(SELECTORS.home.linkSignupLogin).should('be.visible');
    }
}

export default new HomePage();