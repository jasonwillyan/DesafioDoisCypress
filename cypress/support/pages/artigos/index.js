/// <reference types="cypress" />
import faker from 'faker';
import routes from '../../routes';
const el = require('./elements').ELEMENTS 

class Artigos
{
    acessarFormularioDeNovaPublicacao()
    {
        cy.get(el.linkNovaPublicacao).click();
    }
    preencherFormulario()
    {
        cy.get(el.inputTitle).type(faker.name.title());
        cy.get(el.inputDescription).type('Cypress');
        cy.get(el.textAreaContent).type(faker.lorem.paragraph());
        cy.get(el.inputTags).type('cypress');
    }
    submeterArtigo()
    {
        cy.get(el.buttonSubmit).click();
    }
    verificarSeAPublicacaoFoiUmSucesso()
    {
        cy.wait(`@${routes.as.postArticles}`).then((postArticlesResponse) => 
        {
            expect(postArticlesResponse.status).to.eq(200);
        })
        cy.wait(`@${routes.as.getArticlesTitle}`).then((getArticlesTitle) => 
        {
            expect(getArticlesTitle.status).to.eq(200);
        })
        cy.wait(`@${routes.as.getArticlesTitleComments}`).then((getArticlesTitleComments) => 
        {
            expect(getArticlesTitleComments.status).to.eq(200);
        })
    }
}

export default new Artigos();