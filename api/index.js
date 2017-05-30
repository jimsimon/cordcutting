const express = require('express')
const { Provider, Bundle, Channel } = require('./models/index')

const app = express()
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
