const { Channel, Bundle } = require('../../models/index')

class SeederUtil {
  async addChannelsToBundle(bundleName, channelNames) {
    if (!bundleName) {
      throw new Error('Bundle name must be specified')
    }

    if (!channelNames) {
      throw new Error('Channel names must be specified')
    }

    const bundle = await Bundle.findOne({where: {name: bundleName}})
    await this.createChannelsIfNeeded(bundleName, channelNames)
    const channels = await Channel.findAll({where: {name: {$in: channelNames }}})
    await bundle.addChannels(channels)
    console.log(`Successfully added ${channels.length} channels to ${bundleName}`)
  }

  async removeChannelsFromBundle(bundleName, channelNames) {
    const bundle = await Bundle.findOne({where: {name: bundleName}})
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
