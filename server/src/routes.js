const db = require('./db')

module.exports = (app) => {
  app.get('/api', async (req, res, next) => {
    try {
      const results = await db.all()
      res.json(results)
    } catch (e) {
      res.sendStatus(500)
    }
  })

  app.get('/api/:make', async (req, res, next) => {
    try {
      const results = await db.make(req.params.make)
      res.json(results)
    } catch (e) {
      res.sendStatus(500)
    }
  })

  app.post('/api/add-new-vehicle', async (req, res, next) => {
    try {
      const newVehicle = {
        make: req.body.make,
        model: req.body.model,
        year: parseInt(req.body.year),
        category: req.body.category,
        color: req.body.color,
        timestamp: req.body.timestamp
      }
      const results = await db.create(newVehicle)
      res.json(results)
    } catch (e) {
      res.sendStatus(500)
    }
  })

  app.post('/api/update-vehicle', async (req, res, next) => {
    try {
      const updateInfo = {
        id: req.body.id,
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        category: req.body.category,
        color: req.body.color,
        timestamp: req.body.timestamp
      }
      const results = await db.update(updateInfo)
      res.json(results)
    } catch (e) {
      res.sendStatus(500)
    }
  })

  app.post('/api/delete-vehicle', async (req, res, next) => {
    try {
      const id = req.body.id
      const results = await db.delete(id)
      res.json(results)
    } catch (e) {
      res.sendStatus(500)
    }
  })
}
