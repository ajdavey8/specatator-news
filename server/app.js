const express = require('express')
const app = express()
const cors = require('cors')
const articles = require('./data/articles')

const port = 3000

app.use(cors())

app.get('/api/articles', (req, res) => {
  res.send({ articles })
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})