const express = require('express')
const { Channel } = require('./models/index')

const app = express()
app.get('/', function (req, res) {
  Channel.findAll().then(function (channels) {
    res.json(channels)
  })
})

app.listen(3000, function () {
  console.log('API listening on port 3000!')
})
