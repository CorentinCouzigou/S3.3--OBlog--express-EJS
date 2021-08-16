const express = require('express');
const app = express();
const port = 3000;
const router = require ('./module/router');
app.set('view engine', 'ejs'); 
app.set('views', './views');





app.use(express.static('public')); 

app.use(router);



app.use(function(req, res, next){ 
    res.status(404).render('404');
  });

app.listen(port, () => {
    console.log(`Serveur connecté http://localhost:${port}`)
  });
