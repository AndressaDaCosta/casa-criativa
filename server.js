//usei express pra criar e configurar meu servidor

const express = require('express')
const server = express()

// configurar arquivos estáticos (css,scripts, imagens)
server.use(express.static('public'))

// configuração do nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('views', {
  express: server,
  noCache: true //boolean
})

server.get('/', function (req, res) {
    return res.render('index.html')
  })

server.get('/ideias', function (req, res) {
  return res.render('ideias.html')
})

//liguei meu servidor na porta 3001
server.listen(3001)




// server.get('/', function (req, res) {
//   const h1 = 'OI DO BACK END'
//   return res.render('index.html', { tittle: h1 })
// })


// //criando a rota  e capturo o pedido do cliente para  responder "/" (sem nunjucks)
// server.get("/", function (req, res) {
//   return res.sendFile(__dirname + "/index.html")
// })

// server.get("/ideias", function (req, res) {
//   return res.sendFile(__dirname + "/ideias.html")
// })

/*
poderia também ser criado desta forma (mais indicavel para react!!)
var express = require('express'),
    server = express();
   
   


server.use(express.logger());

server.get('/', function(req, res){
    res.send('Ola Mundo');
});

var server = server.listen(3000);
console.log('Servidor Express iniciado na porta %s', server.address().port)*/


/* array de vetores

const latinhas = [
    {marca: "coca-cola"},

    {marca: "pepsi"},
    {
        marca: "fanta"
    }

]*/