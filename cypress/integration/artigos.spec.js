/// <reference types="cypress" />

import artigos from '../support/pages/artigos'
import routes from '../support/routes'

context('Artigos', () => 
{
    beforeEach(() => 
    {
        cy.backgroundLogin();
        artigos.acessarFormularioDeNovaPublicacao();
    });
    it('Criar novo artigo', () => 
    {
        artigos.preencherFormulario();
        artigos.submeterArtigo();
        artigos.verificarSeAPublicacaoFoiUmSucesso();
    });
});