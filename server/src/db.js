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
    connection.query('SELECT * FROM vehicles ORDER BY last_modified DESC', (err, results) => {
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

db.create = ({ make, model, year, category, color, timestamp }) => {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO vehicles (year, make, model, category, color, last_modified) VALUES (?, ?, ?, ?, ?, ?);', [year, make, model, category, color, timestamp], (err, results) => {
      if (err) {
        return reject(err)
      }
      return resolve(results)
    })
  })
}

db.update = ({ id, make, model, year, category, color, timestamp }) => {
  return new Promise((resolve, reject) => {
    connection.query('UPDATE vehicles SET year=?, make=?, model=?, category=?, color=?, last_modified=? WHERE id=?', [year, make, model, category, color, timestamp, id], (err, results) => {
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
