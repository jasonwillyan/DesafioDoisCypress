/// <reference types="cypress" />
import routes from '../../routes';
const el = require('./elements').ELEMENTS 

class Login
{
    acessarLogin()
    {
        cy.visit('login');
    }
    preencherFormulario()
    {
        cy.get(el.inputEmail).type(Cypress.config().user.email);
        cy.get(el.inputPassword).type(Cypress.config().user.senha);
    }
    submeterFormulario()
    {
        cy.get(el.buttonSubmit).click();
    }
    validarLogin()
    {
        cy.wait(`@${routes.as.postLogin}`).then((postLogin) => 
        {
            expect(postLogin.status).to.eq(200);
        })
        cy.wait(`@${routes.as.getTags}`).then((getTags) => 
        {
            expect(getTags.status).to.eq(200);
        })
        cy.wait(`@${routes.as.getArticlesFeed}`).then((getArticlesFeed) => 
        {
            expect(getArticlesFeed.status).to.eq(200);
        })
    }
}

export default new Login();