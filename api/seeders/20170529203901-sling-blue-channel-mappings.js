'use strict';
const { Channel, Bundle } = require('../models/index')
const slingBlueChannels = ['AMC', 'CNN', 'HGTV', 'Comedy Central', 'Cartoon Network',
  'History Channel', 'TNT', 'Food Network', 'TBS', 'BBC America', 'IFC', 'Tribeca Shortlist',
  'A&E', 'El Rey', 'Viceland', 'Lifetime', 'Travel Channel', 'AXS TV', 'Newsy', 'Cheddar',
  'Bloomberg Television', 'Local Now', 'Flama', 'Galavisión', 'FOX', 'NBC', 'FOX Sports (Regional)',
  'CSN (Regional)', 'NFL Network', 'FX', 'USA', 'Bravo', 'FOX Sports 1', 'FOX Sports 2',
  'NBC Sports Network', 'FXX', 'Syfy', 'Nick Jr.', 'truTV', 'BET', 'National Geographic',
  'Nat Geo Wild', 'Univision', 'UniMás'
]

module.exports = {
  up: function (queryInterface, Sequelize) {
    return Bundle.findOne({where: {name: 'Blue'}}).then(bundle => {
      return Channel.findAll({where: { name: { $in: slingBlueChannels }}}).then(channels => {
        return bundle.addChannels(channels).then(() => {
          return bundle.getChannels().then(channels => {
            if (channels.length !== slingBlueChannels.length) {
              const missingChannels = new Set(slingBlueChannels)
              for (const channel of channels) {
                missingChannels.delete(channel.name)
              }
              throw new Error(`Failed to add the following channels: ${[...missingChannels.join(',')]}`)
            } else {
              console.log(`Bundle '${bundle.name}' created successfully!`)
            }
          })
        })
      })
    })
  },

  down: async function (queryInterface, Sequelize) {
    const bundle = await Bundle.findOne({where: {name: 'Blue'}})
    return await bundle.removeChannels({where: {name: {$in: slingBlueChannels}}})
  }
};
