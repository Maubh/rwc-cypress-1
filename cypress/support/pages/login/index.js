const el = require('./elements').ELEMENTS

class Login {
    accessLogin(){
    // acessar a pagina de login
    cy.visit('login');
        }

    fillForm(){
    // Preencher o formulario
    cy.get(el.inputMail).type(Cypress.config().user.email);
    cy.get(el.inputPassword).type('12345678');
        }

    submitForm(){
    // Submeter o formulario
    cy.get(el.buttonSubmit).click();
        }
    }

export default new Login();