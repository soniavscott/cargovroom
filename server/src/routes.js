const db = require('./db')

module.exports = (app) => {
  app.post('/register', (req, res) => {
    res.send({
      message: `Your user ${req.body.email} was registered! Have fun!`
    })
  })

  app.get('/', async (req, res, next) => {
    try {
      const results = await db.all()
      res.json(results)
    } catch (e) {
      res.sendStatus(500)
    }
  })

  //   app.get('/:make', async (req, res, next) => {
  //     try {
  //       const results = await db.make(req.params.make)
  //       res.json(results)
  //     } catch (e) {
  //       res.sendStatus(500)
  //     }
  //   })

  app.get('/test/:make', async (req, res, next) => {
    try {
      const results = await db.make(req.params.make)
      res.json(results)
    } catch (e) {
      res.sendStatus(500)
    }
  })
}
