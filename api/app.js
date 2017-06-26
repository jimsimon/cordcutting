const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const Umzug = require('umzug')
const env = process.env.NODE_ENV
const { sequelize } = require('./util/sequelize')
const { Bundle, Category, Channel, WizardRequest } = require('./models/index')

const app = express()
const umzug = new Umzug({
  storage: 'sequelize',
  storageOptions: {
    sequelize
  }
})

app.use(morgan('combined'))

app.use('*', async function (req, res, next) {
  if (env === 'production') {
    return next()
  }

  try {
    const migrations = await umzug.pending()
    if (migrations && migrations.length > 0) {
      res.status(500).send("You have pending database migrations, please run them before continuing.")
    } else {
      next()
    }
  } catch (e) {
    next(e)
  }
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

app.use(function (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.send(`
    <h1>Error Report</h1>
    <p>${err.message}</p>
    <p>${err.stack}</p>
  `)
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
