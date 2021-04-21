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
    connection.query('SELECT * FROM vehicles LIMIT 100', (err, results) => {
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

module.exports = db
