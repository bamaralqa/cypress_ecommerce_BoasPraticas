// Valida a mensagem de campo obrigatório (validação nativa do HTML5) em um elemento 
// Como a validação é generica, serve para email ou senha

//Mensagem de erro esperada


Cypress.Commands.add('validaMensagemCampoObrigatorio', { prevSubject:
    'element'},(subject,expectedMessage) =>{
        cy.wrap(subject).should('have.prop','validity').and('have.property', 'valueMissing',true)

        cy.wrap(subject).invoke('prop','validationMessage').should('contain', expectedMessage)
    })