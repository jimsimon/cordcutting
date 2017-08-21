const { Bundle, Category, Channel, WizardRequest } = require('../models/index')
const router = require('express-promise-router')()

router.post('/wizardResults', async function (req, res) {

  const wizardResult = await buildWizardResultForChannels(req.body);
  res.json(wizardResult)
})

router.get('/wizardResults', async function (req, res) {
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

router.get('/categories', async function (req, res) {
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

module.exports = router
