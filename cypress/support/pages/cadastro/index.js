import faker from 'faker';
const el = require('./elements').ELEMENTS 
import routes from '../../routes';

class Cadastro
{
    acessarFormularioCadastro()
    {
        cy.visit('register');
    }
    preencherFormulario()
    {
        cy.get(el.InputUser).type(faker.name.firstName() + ' ' + faker.name.lastName());
        cy.get(el.inputEmail).type(faker.internet.email());
        cy.get(el.inputPassword).type('12345678');
    }
    submeterFormulario()
    {
        cy.get(el.buttonSubmit).click();
    }
    ValidarCadastro()
    {
        cy.wait(`@${routes.as.postUsers}`).then((postUsers) => 
        {
            expect(postUsers.status).to.eq(200);
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

export default new Cadastro();