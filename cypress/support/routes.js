class Routes
{
    as = 
    {
        postArticles: 'POSTArticles',
        getArticlesTitle: 'GETArticlesTitle',
        getArticlesTitleComments: 'GETArticlesTitleComments',
        postLogin: 'POSTLogin',
        getTags: 'GETTags',
        getArticlesFeed: 'GETArticlesFeed',
        postUsers: 'POSTUsers'
    }

    init()
    {
        cy.server();
        cy.route('POST', '**/api/articles').as(this.as.postArticles);
        cy.route('GET', '**/api/articles/**').as(this.as.getArticlesTitle);
        cy.route('GET', '**/api/articles/**/comments').as(this.as.getArticlesTitleComments);
        cy.route('POST', '**/api/users/login').as(this.as.postLogin);
        cy.route('GET', '**/api/tags').as(this.as.getTags);
        cy.route('GET', '**/api/articles/feed**').as(this.as.getArticlesFeed);
        cy.route('POST', '**/api/users').as(this.as.postUsers);
    }
}

export default new Routes();