'use strict';

const { Provider, Bundle } = require('../models/index')
const providers = [
  {
    name: 'Sling TV',
    bundles: [
      {
        name: 'Blue',
        price: 2500
      },
      {
        name: 'Orange',
        price: 2000
      },
      {
        name: 'Orange + Blue',
        price: 4000
      }
    ]
  },
  {
    name: 'PlayStation Vue',
    bundles: [
      {
        name: 'Access Slim',
        price: 2999
      },
      {
        name: 'Core Slim',
        price: 3499
      },
      {
        name: 'Elite Slim',
        price: 4499
      },
      {
        name: 'Ultra Slim',
        price: 6499
      }
    ]
  },
  {
    name: 'Hulu Live',
    bundles: [
      {
        name: 'Standard',
        price: 3999
      }
    ]
  },
  {
    name: 'fuboTV',
    bundles: [
      {
        name: 'fubo Premier',
        price: 3499
      },
      {
        name: 'fubo Latino',
        price: 1499
      },
      {
        name: 'fubo Português',
        price: 1999
      }
    ]
  },
  {
    name: 'DirecTV Now',
    bundles: [
      {
        name: 'Live A Little',
        price: 3500
      },
      {
        name: 'Just Right',
        price: 5000
      },
      {
        name: 'Go Big',
        price: 6000
      },
      {
        name: 'Gotta Have It',
        price: 7000
      }
    ]
  },
  {
    name: 'YouTube TV',
    bundles: [
      {
        name: 'Standard',
        price: 3500
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
    return Provider.destroy({ where: { name: { $in: providers.map(p => p.name) }}})
  }
}
