'use strict';

const { Provider, Bundle } = require('../models/index')

module.exports = {
  up: function (queryInterface, Sequelize) {
    return Provider.findOne({where: {name: 'Sling TV'}}).then(provider => {
      return provider.createBundle({
        name: 'Blue'
      })
    })
  },

  down: function (queryInterface, Sequelize) {
    return Provider.findOne({where: {name: 'Sling TV'}}).then(provider => {
      return provider.getBundles({ where: { name: 'Blue' }}).then(bundles => {
        return bundles.destroy()
      })
    })
  }
}
