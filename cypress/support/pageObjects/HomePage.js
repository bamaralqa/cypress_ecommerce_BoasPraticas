/// <reference types='cypress' />
// Ações e elementos da página inicial

//Elementos mapeados da homePage

const ELEMENTS = {
      linkSignupLogin: 'a[href="/login"]',
      linkLogout: 'a[href="/logout"]',
      loggedInAsLabel: 'li a:contains("Logged in as")'

}


// Classe com métodos de acesso aos elementos pagina Home


class HomePage{
    acessarHome(){
        cy.visit('/')
        cy.get(ELEMENTS.linkSignupLogin).should('be.visible')
    }

    clicarLinkSignupLogin(){
        cy.get(ELEMENTS.linkSignupLogin).click()
    }
    validarLoginComSucesso(nomeUsuario){
        cy.get(ELEMENTS.linkLogout).should('be.visible')
        cy.get(ELEMENTS.loggedInAsLabel).should('contain.text', nomeUsuario);
    }
    }

export default new HomePage();