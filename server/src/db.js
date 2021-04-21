const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.DB_PW,
  database: 'vehicles'
})

const db = {}
db.all = () => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM vehicles ORDER BY id DESC', (err, results) => {
      if (err) {
        return reject(err)
      }
      return resolve(results)
    })
  })
}

db.make = (make) => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM vehicles WHERE make=?', make, (err, results) => {
      if (err) {
        return reject(err)
      }
      return resolve(results)
    })
  })
}

db.create = ({ make, model, year, category, color }) => {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO vehicles (year, make, model, category, color) VALUES (?, ?, ?, ?, ?);', [year, make, model, category, color], (err, results) => {
      if (err) {
        return reject(err)
      }
      return resolve(results)
    })
  })
}

db.update = ({ id, make, model, year, category, color }) => {
  return new Promise((resolve, reject) => {
    connection.query('UPDATE vehicles SET year=?, make=?, model=?, category=?, color=? WHERE id=?', [year, make, model, category, color, id], (err, results) => {
      if (err) {
        return reject(err)
      }
      return resolve(results)
    })
  })
}

db.delete = (id) => {
  return new Promise((resolve, reject) => {
    connection.query('DELETE FROM vehicles WHERE id=?', id, (err, results) => {
      if (err) {
        return reject(err)
      }
      return resolve(results)
    })
  })
}

module.exports = db
