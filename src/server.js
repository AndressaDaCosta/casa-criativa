//usei express pra criar e configurar meu servidor

const express = require('express')
const server = express()

// configurar arquivos estáticos (css,scripts, imagens)
server.use(express.static('src/public'))

// habilitando req.body
server.use(express.urlencoded({ extended: true }))

// configuração do nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/public/views', {
  express: server,
  noCache: true //boolean
})

// configurando as rotas
server.use(require('./routes'))

//liguei meu servidor na porta 3001
server.listen(3001, () => console.log('> Servidor rodando na porta: 3001'))

/*/ server.get('/', function (req, res) {
//   db.all(`SELECT * FROM ideas`, function (err, rows) {
//     if (err) {
//       console.log(err)
//       return res.send('Erro no banco de dados!')
//     }

//     const reversedIdeas = [...rows].reverse()

//     let lastIdeas = []
//     for (let idea of reversedIdeas) {
//       if (lastIdeas.length < 2) {
//         lastIdeas.push(idea)
//       }
//     }

//     return res.render('index.html', { ideas: lastIdeas })
//   })
// })

// server.get('/ideias', function (req, res) {
//   db.all(`SELECT * FROM ideas`, function (err, rows) {
//     if (err) {
//       console.log(err)
//       return res.send('Erro no banco de dados!')
//     }

//     const reversedIdeas = [...rows].reverse()
//     return res.render('ideias.html', { ideas: reversedIdeas })
//   })
// })

// server.post('/', function (req, res) {
//   // Inserir dado na tabela
//   const query = `
//       INSERT INTO ideas(
//         image,
//         title,
//         category,
//         description,
//         link
//       ) VALUES (?,?,?,?,?);
//     `
//   const values = [
//     req.body.image,
//     req.body.title,
//     req.body.category,
//     req.body.description,
//     req.body.link
//   ]

//   db.run(query, values, function (err) {
//     if (err) {
//       console.log(err)
//       return res.send('Erro no banco de dados!')
//     }

//     return res.redirect('/ideias')
//   })
// })




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
