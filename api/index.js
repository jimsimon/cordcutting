const express = require('express')
const Umzug = require('umzug')
const { sequelize } = require('./util/sequelize')
const { Provider, Bundle, Channel } = require('./models/index')

const app = express()
const umzug = new Umzug({
  storage: 'sequelize',
  storageOptions: {
    sequelize
  }
})

app.use('*', function (req, res, next) {
  umzug.pending().then(function (migrations) {
    if (migrations && migrations.length > 0) {
      res.status(500).send("You have pending database migrations, please run them before continuing.")
    } else {
      next()
    }
  });
})

app.get('/', function (req, res) {
  Provider.findAll({
    include: [{
      model: Bundle,
      include: [{
        model: Channel
      }]
    }]
  }).then(function (provider) {
    res.json(provider)
  })
})

app.get('/channels', function (req, res) {
  Channel.findAll({
    include: [{
      model: Bundle,
      through: {attributes: []},
      include: [{
        model: Provider
      }]
    }]
  }).then(function (channels) {
    res.json(channels)
  })
})

app.listen(3000, function () {
  console.log('API listening on port 3000!')
})
