'use strict'
module.exports = {
  up: async function(queryInterface, Sequelize) {
    await queryInterface.createTable('categories', {
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

    const categories = ['Local', 'Entertainment', 'Financial', 'Premium', 'Sports', 'Lifestyle', 'Kids', 'News and Weather']
    await queryInterface.bulkInsert('categories', categories.map(c => ({name: c})))
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('categories')
  }
}
