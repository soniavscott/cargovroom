const db = require('./db')

module.exports = (app) => {
  app.get('/', async (req, res, next) => {
    try {
      const results = await db.all()
      res.json(results)
    } catch (e) {
      res.sendStatus(500)
    }
  })

  app.get('/search/:make', async (req, res, next) => {
    try {
      const results = await db.make(req.params.make)
      res.json(results)
    } catch (e) {
      res.sendStatus(500)
    }
  })
}
