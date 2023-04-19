// dépendance api express
let express = require('express');
//test
// serveur html
let server= express();
let bodyParser = require("body-parser");
//serveurphp
server.use(bodyParser.urlencoded({ extended: true }));
server.listen(80);


server.route('/page.html')
  .get((req, res) => {
    res.sendFile( __dirname  + '/page.html');
  })

  server.route('/post.html').post((req, res)=>{
  
  let p1 = req.body.p1; 
  
  res.writeHead(200,{'content-type':'text/html'});
// Envoyer le contenu html dans le corps de la réponse HTTP

res.end('<h3> Bonjour  '+ p1 + '  ... Vous etes bien matinal ...</h3>');



  })

