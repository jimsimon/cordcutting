'use strict';
const { Channel, Bundle, BundlesChannels } = require('../models/index')
const slingBlueChannels = ['ABC', 'CBS', 'Fox', 'NBC']

module.exports = {
  up: function (queryInterface, Sequelize) {
    return Bundle.findOne({where: {name: 'Blue'}}).then(bundle => {
      return Channel.findAll({where: { name: { $in: slingBlueChannels }}}).then(channels => {
        return bundle.addChannel(channels)
      })
    })
  },

  down: function (queryInterface, Sequelize) {

  }
};
