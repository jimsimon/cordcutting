const express = require('express')
const bodyParser = require('body-parser')
const Umzug = require('umzug')
const { sequelize } = require('./util/sequelize')
const { Bundle, Category, Channel, WizardRequest } = require('./models/index')

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
  })
})

app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('API is healthy!')
})

app.post('/wizardResults', async function (req, res) {

  const wizardResult = await buildWizardResultForChannels(req.body);
  res.json(wizardResult)
})

app.get('/wizardResults', async function (req, res) {
  const wizardRequestId = req.query.wizardRequestId

  if (!wizardRequestId) {
    return res.sendStatus(403)
  }

  const wizardRequest = await WizardRequest.findById(parseInt(wizardRequestId, 10))
  if (!wizardRequest) {
    return res.sendStatus(404)
  }

  const userSelectedChannelIds = await wizardRequest.getChannels({attributes: 'id'})
  const wizardResult = buildWizardResultForChannels(userSelectedChannelIds)

  res.json(wizardResult)
})

app.get('/categories', async function (req, res) {
  const categories = await Category.findAll({ order: [['name', 'ASC'], [Channel, 'name', 'ASC']], include: [Channel]})
  res.json(categories)
})

async function buildWizardResultForChannels(userSelectedChannelIds) {
  const userSelectedChannels = await Channel.findAll({where: {id: {$in: userSelectedChannelIds}}})
  const wizardRequest = await WizardRequest.create({
    channels: userSelectedChannels
  })

  const userSelectedChannelMap = userSelectedChannels.reduce(function (map, channel) {
    map.set(channel.id, channel)
    return map;
  }, new Map());

  const results = []
  const bundles = await Bundle.findAll()
  for (const bundle of bundles) {
    const result = {
      provider: (await bundle.getProvider()).name,
      bundle: bundle.name,
      totalPrice: bundle.price // TODO: Change this when addons are added in
    }

    const bundleChannels = await bundle.getChannels({where: {id: {$in: userSelectedChannelIds}}})
    result.found = bundleChannels

    const missingChannelMap = new Map(userSelectedChannelMap)
    for (const channel of bundleChannels) {
      missingChannelMap.delete(channel.id)
    }
    result.missing = [...missingChannelMap.values()]
    results.push(result)
  }
  return {
    wizardRequestId: wizardRequest.id,
    results
  };
}

const server = app.listen(3000, function () {
  console.log('API listening on port 3000!')
})

module.exports = server
