const path = require('path')

module.exports = {
  "config": path.resolve('database', 'config/config.js'),
  "model": path.resolve('database/models'),
  "seeders-path": path.resolve('database/seeders'),
  "migrations-path": path.resolve('database/migrations'),
}