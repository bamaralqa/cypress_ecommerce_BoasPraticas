# 📌 Projeto Final – Excelência em Automação de Testes com Cypress


## 🎯 Objetivo
Este projeto representa a conclusão do **Bootcamp de Automação da Minsait**, com foco na aplicação de **Boas Práticas Avançadas** para a criação de testes robustos, manuteníveis e eficientes.

Utilizando como base um projeto funcional anterior, esta versão foi completamente **refatorada** para incorporar os conceitos de excelência em automação, demonstrando a evolução das técnicas e da arquitetura do código.

---

## ✅ Boas Práticas Aplicadas

Este projeto foi estruturado seguindo os pilares de excelência em automação de testes:

*   **Page Objects Pattern:** Toda a interação e validação de elementos de uma página estão encapsuladas em classes específicas (`pageObjects`), separando as responsabilidades e mantendo os testes limpos.
*   **Comandos Customizados (`Commands`):** Ações repetitivas e fluxos complexos, como login e cadastro, foram abstraídos em comandos customizados (`cy.login()`, `cy.cadastrarUsuarioUI()`), tornando os testes mais enxutos, legíveis e reutilizáveis.
*   **Centralização de Seletores:** Para evitar a duplicação e facilitar a manutenção, todos os seletores de elementos estão centralizados em um único arquivo (`support/selectors.js`), criando uma única fonte da verdade.
*   **Zero "Hardcoded Assertions":** Textos e mensagens de validação foram removidos do código e movidos para arquivos de massa de dados (`fixtures`), garantindo que os testes sejam independentes do conteúdo e fáceis de adaptar a mudanças.
*   **Independência dos Testes:** Cada caso de teste (`it`) é totalmente independente e pode ser executado em qualquer ordem, utilizando `hooks` como `beforeEach` para garantir um estado limpo antes de cada execução.
*   **Fábrica de Dados com Faker.js:** A geração de dados dinâmicos para testes de cadastro é feita através de uma factory, garantindo que cada teste rode com uma massa de dados única e realista.

---

## 📋 Cenários de Teste Automatizados

Abaixo estão os cenários que foram implementados e estão passando com 100% de sucesso.

### Cadastro (`cadastro.cy.js`)
- `Deve cadastrar um novo usuário com sucesso`
- `Deve exibir erro ao tentar cadastrar um e-mail já existente`

### Autenticação (`login.cy.js`)
- `Deve realizar login com sucesso`
- `Deve realizar logout com sucesso`
- `Deve exibir erro ao tentar logar com credenciais inválidas`
- `Deve exibir erro de campo obrigatório para e-mail`
- `Deve exibir erro de campo obrigatório para senha`

### Backlog para V2 (Próximos Passos)
- *Fluxo completo de compra*
- *Formulário de Contato com upload de arquivo*

---

## 🔗 URL do Sistema para Testes
[https://www.automationexercise.com/](https://www.automationexercise.com/)

---

## 📂 Estrutura do Projeto

A arquitetura do projeto foi desenhada para ser escalável e de fácil manutenção:

```plaintext
cypress_ecommerce_BoasPraticas/
├── 📁 allure-report/       <- O relatório HTML final e interativo
├── 📁 allure-results/      <- Resultados brutos gerados pelos testes
├── 📁 cypress/
│   ├── 📁 e2e/              <- Arquivos de teste (.cy.js) que descrevem os cenários
│   │   ├── 📄 cadastro.cy.js
│   │   ├── 📄 compra.cy.js
│   │   └── 📄 login.cy.js
│   │
│   ├── 📁 fixtures/         <- Massa de dados estática (usuários, mensagens)
│   │   ├── 📄 mensagens.json
│   │   └── 📄 usuarios.json
│   │
│   └── 📁 support/          <- Coração da arquitetura
│       ├── 📁 factories/     <- Fábrica de dados dinâmicos (Faker.js)
│       ├── 📁 pageObjects/    <- Classes com ações e validações das páginas
│       ├── 📄 commands.js    <- Comandos customizados (cy.login, etc.)
│       ├── 📄 constants.js   <- Constantes globais (se houver)
│       ├── 📄 e2e.js         <- Arquivo de configuração de suporte
│       └── 📄 selectors.js   <- Mapeamento centralizado de todos os seletores
│
├── 📄 .gitignore
├── 📄 cypress.config.js
├── 📄 package.json
└── 📄 README.md

---

## 🚀 Como Executar o Projeto

### 1️⃣ Pré-requisitos
- [Node.js](https://nodejs.org/) instalado.
- [Java JDK](https://adoptium.net/) (versão 11 ou superior) instalado e com a variável de ambiente `JAVA_HOME` configurada para a geração de relatórios.

### 2️⃣ Instalação

```bash
# Clone este repositório
git clone https://github.com/bamaralqa/cypress_ecommerce_BoasPraticas.git

# Navegue até a pasta do projeto
cd cypress_ecommerce_BoasPraticas

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

Para mais opções, como rodar os testes de forma visível (`npm run test:headed`) ou apenas abrir o último relatório (`npm run allure:open`), consulte o arquivo `package.json`.

---

## ✍️ Autor
Desenvolvido por **Bruna Amaral** como projeto final do Bootcamp de Automação da Minsait.
