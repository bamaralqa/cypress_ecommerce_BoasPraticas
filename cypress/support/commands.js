import { SELECTORS } from './selectors';
import homePage from './pageObjects/HomePage';
import loginPage from './pageObjects/LoginPage';
import signupPage from './pageObjects/SignupPage';

// --- Comando de Login ---
Cypress.Commands.add('login', (email, senha) => {
    cy.log(`Realizando login para o usuário ${email}...`)

    cy.visit('/login')

    // Barreira de Sincronização explícita
    cy.url().should('include', '/login');

    cy.get(SELECTORS.login.inputEmail).type(email);
    cy.get(SELECTORS.login.inputPassword).type(senha);
    cy.get(SELECTORS.login.buttonLogin).click();
}),

    // --- Comando de Cadastro ---
    Cypress.Commands.add('cadastrarUsuarioUI', (usuario) => {
        cy.log(`Cadastrando o usuário ${usuario.nome} via UI...`);

        homePage.acessarHome();
        homePage.clicarLinkSignupLogin();
        cy.url().should('include', '/login'); // Barreira de Sincronização 1

        loginPage.preencherCadastroInicial(usuario.nome, usuario.email);
        loginPage.clicarBotaoSignup();
        cy.url().should('include', '/signup'); // Barreira de Sincronização 2

        // Sincronização extra para garantir que o formulário está pronto
        cy.get(SELECTORS.signupForm.tituloInfConta).should('be.visible');

        signupPage.preencherFormularioCompleto(usuario);
        signupPage.clicarBotaoCriarConta();
    }),

    // --- Comando de Validação de Campo Obrigatório ---
    /**  
     * Valida a mensagem de campo obrigatório (validação nativa do HTML5) em um elemento.
     * Como a validação é genérica, serve para email ou senha.
     * @param {string} expectedMessage - A mensagem de erro esperada.
     */
    Cypress.Commands.add('validaMensagemCampoObrigatorio', { prevSubject: 'element' }, (subject, expectedMessage) => {
        cy.wrap(subject).should('have.prop', 'validity')
            .and('have.property', 'valueMissing', true);

        cy.wrap(subject).invoke('prop', 'validationMessage')
            .should('contain', expectedMessage);
    })