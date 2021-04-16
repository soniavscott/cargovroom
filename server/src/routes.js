const express = require('express')
const router = express.Router()
const db = require('./db')

router.get('/', async (req, res, next) => {
  try {
    const results = await db.all()
    res.json(results)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
})

router.get('/:make', async (req, res, next) => {
  try {
    const results = await db.make(req.params.make)
    res.json(results)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
})

module.exports = router
