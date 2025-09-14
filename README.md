# 📌 Projeto Final – Capacitação Cypress: O Superpoder dos Testadores Modernos!

## 🎯 Objetivo
Este projeto foi desenvolvido como desafio final da capacitação **Cypress: O Superpoder dos Testadores Modernos**, com o intuito de aplicar na prática os conceitos aprendidos durante as aulas.

O objetivo principal é **automatizar cenários de teste** utilizando o framework Cypress, adotando boas práticas e garantindo organização, clareza e independência dos testes.

---

## 🔗 URL do Sistema para Testes
[https://www.automationexercise.com/](https://www.automationexercise.com/)

---

## 📋 Cenários de Teste Automatizados

Abaixo estão os cenários que foram implementados e estão passando com 100% de sucesso.

### Cadastro (`cadastro.cy.js`)
- `Cadastrar novo usuário com sucesso`
- `Tentativa de cadastrar com e-mail já cadastrado`

### Login (`login.cy.js`)
- `Realizar login com sucesso`
- `Tentativa de login com dados inválidos`
- `Tentativa de login sem informar email`
- `Tentativa de login sem informar senha`

### Fluxo de Compra (`compra.cy.js`)
- *(A ser implementado)*

---

## 📂 Estrutura do Projeto

A estrutura de pastas foi organizada seguindo o padrão Page Objects para separar as responsabilidades, mantendo os testes limpos e a manutenção centralizada.

```plaintext
CYPRESS_ECOMMERCE/
├── 📁 allure-report/       <- O relatório HTML final e interativo
├── 📁 allure-results/      <- Resultados brutos gerados pelos testes
├── 📁 cypress/
│   ├── 📁 e2e/
│   │   ├── 📄 cadastro.cy.js
│   │   ├── 📄 compra.cy.js
│   │   └── 📄 login.cy.js
│   │
│   ├── 📁 fixtures/
│   │   └── 📄 usuarios.json
│   │
│   └── 📁 support/
│       ├── 📁 factories/
│       │   └── 📄 usuarioFactory.js
│       │
│       ├── 📁 pageObjects/
│       │   └── ... (HomePage.js, etc.)
│       │
│       ├── 📄 commands.js
│       └── 📄 e2e.js
│
├── 📄 .gitignore
├── 📄 cypress.config.js
├── 📄 package.json
└── 📄 README.md
```
---

## 🚀 Como Executar o Projeto

### 1️⃣ Pré-requisitos
- [Node.js](https://nodejs.org/) instalado.
- [Java JDK](https://adoptium.net/) (versão 11 ou superior) instalado e com a variável de ambiente `JAVA_HOME` configurada.

### 2️⃣ Instalação

```bash
# Clone este repositório
git clone <url-do-seu-repositorio>

# Navegue até a pasta do projeto
cd CYPRESS_ECOMMERCE

# Instale todas as dependências
npm install
```

### 3️⃣ Executando os Testes e Gerando o Relatório

O projeto está configurado com scripts para facilitar a execução.

```bash
# Roda todos os testes em modo headless, gera o relatório
# e o abre automaticamente no navegador.
npm run test:report:open
```

Para mais opções de execução (como rodar os testes de forma visível), consulte o arquivo `package.json`.

---

## 📚 Tecnologias Utilizadas
- [Cypress](https://www.cypress.io/)
- [Faker.js](https://fakerjs.dev/)
- [Allure Report](https://docs.qameta.io/allure/)
- JavaScript (Node.js)

---

## ✍️ Autor
Desenvolvido por **Bruna Amaral** como parte do desafio final da capacitação *Cypress: O Superpoder dos Testadores Modernos*.