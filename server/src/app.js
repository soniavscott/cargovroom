const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(bodyParser.json())
app.use(cors())

const router = require('./routes')
app.use('', router)

app.listen(8081)
