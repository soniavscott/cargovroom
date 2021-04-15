const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.post('/test', (req, res) => {
  res.send({
    message: `${req.body.email} has been registered.`
  })
})

app.listen(8081)
