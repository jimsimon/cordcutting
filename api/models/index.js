'use strict'

const fs = require('fs')
const path = require('path')
const basename = path.basename(module.filename)
const db = {}
const { sequelize, Sequelize } = require('../util/sequelize')

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
  })
  .forEach(function(file) {
    const model = sequelize['import'](path.join(__dirname, file))
    const name = model.name.charAt(0).toUpperCase() + model.name.slice(1)
    db[name] = model
  })

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
