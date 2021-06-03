const faker = require('faker')

describe('Cadastro', () => {
    it('Cadastrar um  novo usuario', () => {
        cy.visit('register');
        cy.get('input[ng-model="$ctrl.formData.username"]').type(faker.name.firstName() + faker.name.lastName());
        cy.get('input[ng-model="$ctrl.formData.email"]').type(faker.internet.email());
        cy.get('input[ng-model="$ctrl.formData.password"]').type('12345678');
        cy.get('button[ng-bind="$ctrl.title"]').click();
    });
});