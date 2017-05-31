'use strict';

const { Provider, Bundle } = require('../models/index')
const providers = [
  {
    name: 'Sling TV',
    Bundles: [
      {
        name: 'Blue'
      },
      {
        name: 'Orange'
      }
    ]
  },
  {
    name: 'PlayStation Vue',
    Bundles: [
      {
        name: 'Access Slim'
      },
      {
        name: 'Core Slim'
      },
      {
        name: 'Elite Slim'
      },
      {
        name: 'Ultra Slim'
      }
    ]
  },
  {
    name: 'Hulu Live',
    Bundles: [
      {
        name: 'Standard'
      }
    ]
  },
  {
    name: 'fuboTV',
    Bundles: [
      {
        name: 'fubo Premier'
      },
      {
        name: 'fubo Latino'
      },
      {
        name: 'fubo Português'
      }
    ]
  },
  {
    name: 'DirectTV Now',
    Bundles: [
      {
        name: 'Live A Little'
      },
      {
        name: 'Just Right'
      },
      {
        name: 'Go Big'
      },
      {
        name: 'Gotta Have It'
      }
    ]
  },
  {
    name: 'YouTube Live',
    Bundles: [
      {
        name: 'Standard'
      }
    ]
  }
]

module.exports = {
  up: function (queryInterface, Sequelize) {
    const promises = []
    for (const provider of providers) {
      promises.push(
        Provider.create(provider, { include: [Bundle] })
      )
    }
    return Promise.all(promises)
  },

  down: function (queryInterface, Sequelize) {
    return Provider.destroy({ where: { name: { $in: providers }}})
  }
}
