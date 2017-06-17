'use strict';
const SeederUtil = require('./util/seeder-util')
const { Bundle } = require('../models/index')
const channelMap = require('./util/channels')

module.exports = {
  up: async function (queryInterface, Sequelize) {
    const orange = await Bundle.findOne({where: {name: 'Orange'}})
    const blue = await Bundle.findOne({where: {name: 'Blue'}})

    const orangeChannels = await orange.getChannels()
    const blueChannels = await blue.getChannels()

    const channels = orangeChannels.map(c => c.name).concat(blueChannels.map(c => c.name))
    const dedupedChannels = [...new Set(channels)]

    await new SeederUtil().addChannelsToBundleByName('Sling TV', 'Orange + Blue', dedupedChannels)
  },

  down: async function (queryInterface, Sequelize) {
    const bundle = await Bundle.findOne({where: {name: 'Orange + Blue'}})
    await bundle.removeChannels()
  }
};
