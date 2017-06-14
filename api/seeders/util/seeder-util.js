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

    await this.throwIfChannelsMissing(bundleName, channelNames)

    const provider = await Provider.findOne({where: {name: providerName}})
    const bundles = await provider.getBundles({where: {name: bundleName}})
    const bundle = bundles[0]
    const channels = await Channel.findAll({where: {name: {$in: channelNames }}})
    await bundle.addChannels(channels)
    console.log(`Successfully added ${channels.length} channels to ${bundleName}`)
  }

  async removeChannelsFromBundle(providerName, bundleName) {
    const provider = await Provider.findOne({where: {name: providerName}})
    const bundles = await provider.getBundles({where: {name: bundleName}})
    const bundle = bundles[0]
    return await bundle.removeChannels()
  }

  async throwIfChannelsMissing(bundleName, channelNames) {
    const existingChannels = await Channel.findAll({where: {name: { $in: channelNames }}})
    const channelsThatNeedCreation = new Set(channelNames)
    for (const existingChannel of existingChannels) {
      channelsThatNeedCreation.delete(existingChannel.name)
    }

    if (channelsThatNeedCreation.size > 0) {
      throw new Error(`The following channels to be created before ${bundleName} can be created: ${[...channelsThatNeedCreation].join(', ')}`)
    }
  }
}

module.exports = SeederUtil
