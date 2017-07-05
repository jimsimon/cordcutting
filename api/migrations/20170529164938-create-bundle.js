'use strict'

module.exports = {
  up: async function (queryInterface, Sequelize) {
    await createTable(queryInterface, Sequelize)

    const providers = await queryInterface.sequelize.query('SELECT id, name FROM providers', {type: Sequelize.QueryTypes.SELECT})
    const providerNameToIdMap = providers.reduce((map, provider) => Object.assign(map, {[provider.name]: provider.id}), {})

    await insertBundles(queryInterface, providerNameToIdMap['Sling TV'], [
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
    ])

    await insertBundles(queryInterface, providerNameToIdMap['PlayStation Vue'], [
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
    ])

    await insertBundles(queryInterface, providerNameToIdMap['Hulu Live'], [
      {
        name: 'Standard',
        price: 3999
      }
    ])

    await insertBundles(queryInterface, providerNameToIdMap['fuboTV'], [
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
    ])

    await insertBundles(queryInterface, providerNameToIdMap['DirecTV Now'], [
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
    ])

    await insertBundles(queryInterface, providerNameToIdMap['YouTube TV'], [
      {
        name: 'Standard',
        price: 3500
      }
    ])
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('bundles')
  }
}

function createTable(queryInterface, Sequelize) {
  return queryInterface.createTable('bundles', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      allowNull: false,
      type: Sequelize.STRING
    },
    price: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    providerId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'providers',
        key: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    },
    createdAt: {
      allowNull: false,
      defaultValue: new Date(),
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      defaultValue: new Date(),
      type: Sequelize.DATE
    }
  })
}

function insertBundles(queryInterface, providerId, bundles) {
  bundles.forEach(function (bundle) {
    bundle.providerId = providerId
  })
  queryInterface.bulkInsert('bundles', bundles)
}
