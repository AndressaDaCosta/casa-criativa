const router = require('express').Router()
const db = require('./db/db')

// criando as rotas
router.get('/', (req, res) => {
  // consultar dados na tabela
  db.all(`SELECT * FROM ideas`, function (err, rows) {
    if (err) {
      console.log(err)
      res.send('Erro no banco de dados!')
    }

    const reversedIdeas = [...rows].reverse()
    let lastIdeas = []

    for (const idea of reversedIdeas) {
      if (lastIdeas.length < 2) {
        lastIdeas.push(idea)
      }
    }

    return res.render('index.html', { ideas: lastIdeas })
  })
})

router.get('/ideias', (req, res) => {
  // consultar dados na tabela
  db.all(`SELECT * FROM ideas`, function (err, rows) {
    if (err) {
      console.log(err)
      res.send('Erro no banco de dados!')
    }

    return res.render('ideias.html', { ideas: [...rows].reverse() })
  })
})

router.post('/', (req, res) => {
  console.log(req.body)

  // inserir dado na tabela
  const query = `
        INSERT INTO 
        ideas(image, title, category, description, link) 
        VALUES (?,?,?,?,?);
    `
  const values = [
    req.body.image,
    req.body.title,
    req.body.category,
    req.body.description,
    req.body.link
  ]

  db.run(query, values, function (err) {
    if (err) {
      console.log(err)
      res.send('Erro no banco de dados!')
    }

    return res.redirect('/ideias')
  })
})

module.exports = router

/* const ideas = [
//   {
//     img: "https://cdn-icons.flaticon.com/png/512/3270/premium/3270999.png?token=exp=1656097782~hmac=69e5844c9b491c44304b103005d78d8a" ,
//     title: "Cursos de Programação" ,
//     category: "Estudo",
//     description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit." ,
//     url: "https://rocketseat.com.br"
//   },

//   {
//     img: "https://cdn-icons-png.flaticon.com/512/1198/1198314.png" ,
//     title: "Exercícios" ,
//     category: "Saúde",
//     description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit." ,
//     url: "https://rocketseat.com.br"
//   },

//   {
//     img: "https://cdn-icons-png.flaticon.com/512/2647/2647573.png" ,
//     title: "Meditação" ,
//     category: "Mentalidade",
//     description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit." ,
//     url: "https://rocketseat.com.br"
//   },

//   {
//     img: "https://cdn-icons.flaticon.com/png/512/3270/premium/3270999.png?token=exp=1656097782~hmac=69e5844c9b491c44304b103005d78d8a" ,
//     title: "Karaokê" ,
//     category: "Diverção em Família",
//     description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit." ,
//     url: "https://rocketseat.com.br"
//   }
   
// ]







*/
