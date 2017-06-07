'use strict';
const SeederUtil = require('./util/seeder-util')
const { Bundle } = require('../models/index')

module.exports = {
  up: async function (queryInterface, Sequelize) {
    const orange = await Bundle.findOne({where: {name: 'Orange'}})
    const blue = await Bundle.findOne({where: {name: 'Blue'}})

    const orangeChannels = await orange.getChannels()
    const blueChannels = await blue.getChannels()
    console.log(`orangeChannels = ${orangeChannels.length}`)
    console.log(`blueChannels = ${blueChannels.length}`)

    const channels = orangeChannels.map(c => c.name).concat(blueChannels.map(c => c.name))
    console.log(`Mapped ${channels.length} channels`)
    const dedupedChannels = [...new Set(channels)]
    console.log(`About to add ${dedupedChannels.length} channel's`)

    await new SeederUtil().addChannelsToBundle('Orange + Blue', [...dedupedChannels])
  },

  down: async function (queryInterface, Sequelize) {
    const bundle = await Bundle.findOne({where: {name: 'Orange + Blue'}})
    await bundle.removeChannels()
  }
};
