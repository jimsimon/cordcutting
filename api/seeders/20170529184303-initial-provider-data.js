'use strict';

const { Provider } = require('../models/index')
const providers = [
  'Sling TV',
  'PlayStation Vue',
  'Hulu Live',
  'Fubo TV',
  'DirectTV Now',
  'YouTube Live'
]

module.exports = {
  up: function (queryInterface, Sequelize) {
    return Provider.bulkCreate(providers.map(p => ({"name": p})))
  },

  down: function (queryInterface, Sequelize) {
    return Provider.destroy({ where: { name: { $in: providers }}})
  }
}
