import login from '../support/pages/login'

describe('Login', () => {
    it('Realizar login com sucesso', () => {
        login.accessLogin()
        login.fillForm()
        login.submitForm()

        // Verificacao
    });
});         