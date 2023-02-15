const express = require('express')
const app = express()

// config views
app.set('view engine', 'pug')
app.set('views', 'views')
app.use(express.urlencoded())

// rutes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  res.render('saludo', { message: `Hola ${req.body.name}!` })
})

app.listen(3000, () => console.log('Listening on port 3000!'))
