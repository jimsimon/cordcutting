'use strict';

module.exports = {
  up: async function(queryInterface, Sequelize) {
    await createTable(queryInterface, Sequelize)

    const providers = [
      {
        name: 'Sling TV'
      },
      {
        name: 'PlayStation Vue'
      },
      {
        name: 'Hulu Live'
      },
      {
        name: 'fuboTV'
      },
      {
        name: 'DirecTV Now'
      },
      {
        name: 'YouTube TV'
      }
    ]

    await queryInterface.bulkInsert('providers', providers)
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('providers');
  }
}

function createTable(queryInterface, Sequelize) {
  return queryInterface.createTable('providers', {
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
