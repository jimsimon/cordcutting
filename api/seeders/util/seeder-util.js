const { Bundle, Channel, Provider } = require('../../models/index')

class SeederUtil {
  async addChannelsToBundle(providerName, bundleName, channelNames) {
    if (!providerName) {
      throw new Error('Provider name must be specified')
    }

    if (!bundleName) {
      throw new Error('Bundle name must be specified')
    }

    if (!channelNames) {
      throw new Error('Channel names must be specified')
    }

    const provider = await Provider.findOne({where: {name: providerName}})
    const bundles = await provider.getBundles({where: {name: bundleName}})
    const bundle = bundles[0]
    await this.createChannelsIfNeeded(bundleName, channelNames)
    const channels = await Channel.findAll({where: {name: {$in: channelNames }}})
    await bundle.addChannels(channels)
    console.log(`Successfully added ${channels.length} channels to ${bundleName}`)
  }

  async removeChannelsFromBundle(providerName, bundleName, channelNames) {
    const provider = await Provider.findOne({where: {name: providerName}})
    const bundles = await provider.getBundles({where: {name: bundleName}})
    const bundle = bundles[0]
    return await bundle.removeChannels({where: {name: {$in: channelNames}}})
  }

  async createChannelsIfNeeded(bundleName, channelNames) {
    const existingChannels = await Channel.findAll({where: {name: { $in: channelNames }}})
    const newChannels = new Set(channelNames)
    for (const existingChannel of existingChannels) {
      newChannels.delete(existingChannel.name)
    }
    const newChannelObjects = [...newChannels].map(c => ({name: c}))
    const createdChannels = await Channel.bulkCreate(newChannelObjects)
    console.log(`Created ${createdChannels.length} channels for "${bundleName}"`)
  }
}

module.exports = SeederUtil
