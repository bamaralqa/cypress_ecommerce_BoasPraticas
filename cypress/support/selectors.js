export const SELECTORS = {
    // --- Seletores da HomePage ---
    home: {
        linkSignupLogin: 'a[href="/login"]',
        linkLogout: 'a[href="/logout"]',
        loggedInAsLabel: 'li a:contains("Logged in as")',
        linkSignupLogin: 'a[href="/login"]',
        linkLogout: 'a[href="/logout"]', // <-- ADICIONADO AQUI
        loggedInAsLabel: 'li a:contains("Logged in as")',
    },

    // --- Seletores da LoginPage ---
    login: {
        inputEmail: '[data-qa="login-email"]',
        inputPassword: '[data-qa="login-password"]',
        buttonLogin: '[data-qa="login-button"]',
        mensagemErro: 'p[style*="color: red"]',
    },

    // --- Seletores da Área de Cadastro da LoginPage ---
    signup: {
        tituloNovoUsuario: '.signup-form h2',
        inputNome: '[data-qa="signup-name"]',
        inputEmail: '[data-qa="signup-email"]',
        buttonSignup: '[data-qa="signup-button"]',
        mensagemErroEmailExistente: '.signup-form form p',
    },

    // --- Seletores Formulário Cadastro Completo ---
    signupForm: {
        tituloInfConta: 'h2.title.text-center:contains("Enter Account Information")',
        radioMr: '#id_gender1',
        radioMrs: '#id_gender2',
        nomeTexto: '#name',
        emailTexto: '#email',
        senha: '#password',
        diaAniversario: '#days',
        mesAniversario: '#months',
        anoAniversario: '#years',
        newsletter: '#newsletter',
        ofertas: '#optin',
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
        btnCriarConta: '[data-qa="create-account"]',
    },

    // --- Seletores da Página de Conta Criada ---
    accountCreated: {
        tituloSucesso: '[data-qa="account-created"]',
        botaoContinuar: '[data-qa="continue-button"]',
    },
}