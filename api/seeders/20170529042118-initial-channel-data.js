'use strict';

const { Channel } = require('../models/index')
const channels = [
  'ABC',
  'CBS',
  'Fox',
  'NBC'
]

module.exports = {
  up: function (queryInterface, Sequelize) {
    return Channel.bulkCreate(channels.map(c => ({name: c})))
  },

  down: function (queryInterface, Sequelize) {
    return Channel.destroy({ where: { name: { $in: channels }}})
  }
}
