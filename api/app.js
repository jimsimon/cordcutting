const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const Umzug = require('umzug')
const { sequelize } = require('./util/sequelize')
const { Bundle, Channel } = require('./models/index')

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

app.use(cors({
  origin: 'http://ui.cordcutting.docker'
}))
app.use(bodyParser.json())

app.post('/wizardResult', async function (req, res) {
  const userSelectedChannels = await Channel.findAll({where: {id: {$in: req.body}}})
  const userSelectedChannelMap = userSelectedChannels.reduce(function(map, channel) {
    map.set(channel.id, channel)
    return map;
  }, new Map());

  const results = []
  const bundles = await Bundle.findAll()
  for (const bundle of bundles) {
    const result = {
      provider: (await bundle.getProvider()).name,
      bundle: bundle.name
    }

    const bundleChannels = await bundle.getChannels({where: {id: {$in: req.body}}})
    result.found = bundleChannels

    const missingChannelMap = new Map(userSelectedChannelMap)
    for (const channel of bundleChannels) {
      missingChannelMap.delete(channel.id)
    }
    result.missing = [...missingChannelMap.values()]
    results.push(result)
  }
  res.json(results)
})

app.get('/channels', async function (req, res) {
  const channels = await Channel.findAll({ order: [['name', 'ASC']]})
  res.json(channels)
})

const server = app.listen(3000, function () {
  console.log('API listening on port 3000!')
})

module.exports = server
