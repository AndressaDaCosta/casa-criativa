//usei express pra criar e configurar meu servidor

const express = require('express')
const server = express()

const ideas = [
  {
    img: "https://cdn-icons.flaticon.com/png/512/3270/premium/3270999.png?token=exp=1656097782~hmac=69e5844c9b491c44304b103005d78d8a" ,
    title: "Cursos de Programação" ,
    category: "Estudo",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit." ,
    url: "https://rocketseat.com.br"
  },

  {
    img: "https://cdn-icons-png.flaticon.com/512/1198/1198314.png" ,
    title: "Exercícios" ,
    category: "Saúde",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit." ,
    url: "https://rocketseat.com.br"
  },

  {
    img: "https://cdn-icons-png.flaticon.com/512/2647/2647573.png" ,
    title: "Meditação" ,
    category: "Mentalidade",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit." ,
    url: "https://rocketseat.com.br"
  },

  {
    img: "https://cdn-icons.flaticon.com/png/512/3270/premium/3270999.png?token=exp=1656097782~hmac=69e5844c9b491c44304b103005d78d8a" ,
    title: "Karaokê" ,
    category: "Diverção em Família",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit." ,
    url: "https://rocketseat.com.br"
  }
   
]

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