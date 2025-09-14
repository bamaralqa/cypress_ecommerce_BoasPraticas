/// <reference types='cypress' />
// Ações e elementos da página de Login/Cadastro inicial

// Elementos mapeados da Login Page ( Cadastro e Login )
const ELEMENTS = {
    // --- Seletores Área Login ---
    inputEmailLogin: '[data-qa="login-email"]',
    inputPassword: '[data-qa="login-password"]',
    btnLogin: '[data-qa="login-button"]',
    mensagemErroLogin: 'p[style*="color: red"]',
    // Validação do elemento mensagem "Peencha este campo" está nos comandos customizados de forma generica (commands.js)
    

    // --- Seletores Área Cadastro ---
    tituloSignup: '.signup-form h2',
    inputNomeSignup:'[data-qa="signup-name"]',
    inputEmailSignup: '[data-qa="signup-email"]',
    btnSignup:'[data-qa="signup-button"]',
    mensagemErroEmailExistente: '.signup-form form p',
    
}

//Classe com métodos de acesso aos elementos de Cadastro e Login


class LoginPage{
    // --- Métodos relacionados ao fluxo de Login ---
    
    preencherEmail(email){
        cy.get(ELEMENTS.inputEmailLogin).type(email)
    }

    preencherSenha(senha){
        cy.get(ELEMENTS.inputPassword).type(senha)

    }

    clicarBotaoLogin(){
        cy.get(ELEMENTS.btnLogin).click()
    }
   
    fazerLogin(email,senha){
        this.preencherEmail(email)
        this.preencherSenha(senha)
        this.clicarBotaoLogin()
    }

    // --- Metodos d validação ---

    validarErroLogin(){
        cy.get(ELEMENTS.mensagemErroLogin)
        .should('be.visible')
        .and('contain.text','Your email or password is incorrect!')
    }
    
    validarErroCampoEmailObrigatorio(){
        cy.get(ELEMENTS.inputEmailLogin).validaMensagemCampoObrigatorio('Preencha este campo.')
    }

    validarErroCampoSenhaObrigatorio(){
        cy.get(ELEMENTS.inputPassword).validaMensagemCampoObrigatorio ('Preencha este campo.')
    }

    
    // --- Métodos relacionados ao fluxo de Cadastro ---

    preencherCadastroInicial(nome,email){
        cy.get(ELEMENTS.tituloSignup).should('be.visible')
        cy.get(ELEMENTS.inputNomeSignup).type(nome)
        cy.get(ELEMENTS.inputEmailSignup).type(email)
    }

    clicarBotaoSignup(){
        cy.get(ELEMENTS.btnSignup).click()
    }

    validarErroEmailExistente(){
        cy.get(ELEMENTS.mensagemErroEmailExistente).should('be.visible')
        .and('have.text', 'Email Address already exist!')
    }
}

export default new LoginPage()