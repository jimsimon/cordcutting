'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('bundlesChannels', {
      bundleId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'bundles',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      channelId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'channels',
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
    }).then(function () {
      return Promise.all([
        queryInterface.addIndex(
          'bundlesChannels',
          ['bundleId', 'channelId'],
          {
            indexName: 'bundlesChannelsCompositeIndex',
            indicesType: 'UNIQUE'
          }
        ),
        queryInterface.addIndex(
          'bundlesChannels',
          ['channelId'],
          {
            indexName: 'bundlesChannelsChannelIndex'
          }
        )
      ])
    })
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('bundlesChannels');
  }
};
