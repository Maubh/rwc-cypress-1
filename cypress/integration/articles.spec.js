
import articles from '../support/pages/articles'

describe('Publicacao', () => {

    beforeEach(() => {
        cy.backgroundLogin();
        articles.accessFormNewPubli();
    });

    it('Criar uma nova publicacao', () => {
        articles.fillForm()
        articles.submitPubli()
    });
});

// Describe 
//hooks --> momentos antes / depois do teste
    // before / beforeEach
    // after / afterEach

    // Processo de login em background
// 1. Realizar uma requisicao do tipo POST com email e senha
// 2. Capturar o token que e recebido da nossa requisicao
// 3. Usar o token recebido para salvar no localstorage

//Verificacao
//AAA -> Arrange Act Assert
//PAV -> Preparation Action Verification