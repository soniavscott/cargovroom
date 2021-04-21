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

  app.post('/add-new-vehicle', async (req, res, next) => {
    try {
      const newVehicle = {
        make: req.body.make,
        model: req.body.model,
        year: parseInt(req.body.year),
        category: req.body.category,
        color: req.body.color
      }
      const results = await db.create(newVehicle)
      res.json(results)
    } catch (e) {
      res.sendStatus(500)
    }
  })

  app.post('/update-vehicle', async (req, res, next) => {
    try {
      const updateInfo = {
        id: req.body.id,
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        category: req.body.category,
        color: req.body.color
      }
      const results = await db.update(updateInfo)
      res.json(results)
    } catch (e) {
      res.sendStatus(500)
    }
  })

  app.post('/delete-vehicle', async (req, res, next) => {
    try {
      const id = req.body.id
      const results = await db.delete(id)
      res.json(results)
    } catch (e) {
      res.sendStatus(500)
    }
  })
}
