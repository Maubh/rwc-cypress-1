const faker = require('faker')

const el = require('./elements').ELEMENTS

class Articles {

accessFormNewPubli(){
    cy.get(el.linkNewPubli).click();
    }

fillForm(){
    // Preencher o formulrio do artigo
    cy.get(el.inputTitle).type('Agilizei Cypress');
    cy.get(el.inputDescription).type('Cypress as a testing tool');
    cy.get(el.textAreaContent).type(faker.lorem.paragraph());
    cy.get(el.inputTags).type('cypress');
}
submitPubli(){
    cy.intercept('POST', '**/api/articles', {
        statusCode: 200,
        body: {}
      }).as('POSTarticles');

    // cy.intercept('GET', '**/api/articles/agilizei-cypress-**', {
    //     statusCode: 200,
    //     body: {}
    //   }).as('GETarticlesTitle');

    cy.intercept('GET', '**/api/articles/agilizei-cypress-**/comments', {
        statusCode: 200,
        body: {}
      }).as('GETarticlesComments');

    // Submeter o artigo
    cy.get(el.buttonSubmit).click();

    cy.wait('@POSTarticles').then((resArticles) => {
        expect(resArticles.response.statusCode).to.eq(200)
      })

    // cy.wait('@GETarticlesTitle').then((resArticlesTitle) => {
    //     expect(resArticlesTitle.response.statusCode).to.eq(200)
    //   })

    cy.wait('@GETarticlesComments').then((resArticlesComments) => {
        expect(resArticlesComments.response.statusCode).to.eq(200)
      })
    }

}

export default new Articles();
