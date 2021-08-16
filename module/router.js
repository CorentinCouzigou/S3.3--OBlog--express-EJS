const { request, response } = require('express');
const express = require('express');
const articles= require('../articles.json');
const router = express.Router();


router.get ('/', (request, response) => {
    response.render ('index', {articles: articles});
});

router.get ('/article/:id', (request, response) => {
    // response.render ('article', {articles: articles});
    let articleFounded;
    for (let article of articles){
        if (article.id === request.params.id){
            article.id = articleFounded;
            break;
        }
    }
    if (articleFounded !== undefined){
        response.render('article', {articles : articles })
        // ${articleFounded.id}
    }
    else {
        response.status(404);
        response.render('404');
    };
});

        // router.get ('/article/:id', (req, res) => {
        //     let articleId = request.params.id;  
        //     let articleFounded = articles.find((article) => {
        //         return article.id === articleId;
        //     });
        //     if (articleFounded) {
        //         res.render (articleFounded.id ,{ articles, article: articleFounded });
        //     }
        //     else {
        //         res.status(404);
        //         res.render('404');
        //     };
        //     });

    // for (const article of articles) {
        //     if (id === article.id) {
        //         articleFounded = game;
        //         break;
        //     }
        // }
        // if ( articleFounded === undefined) {
        //      response.status(404);
        //     response.render('404');
        // }
        // else {
        //     response.render (id);
        // }

    // const id = request.params.id;
        // let articleFounded;
        // articleFounded = articles.find((element) => {
        //     return element.id === id;
        // });
        // if ( articleFounded !== undefined){
        //     response.render (id);
        // }
        // else {
        //     response.status(404);
        //     response.render('404');
        // }

module.exports = router;