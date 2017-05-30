'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('BundlesChannels', {
      bundleId: {
        type: Sequelize.BIGINT,
        references: {
          model: 'Bundles',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      channelId: {
        type: Sequelize.BIGINT,
        references: {
          model: 'Channels',
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
          'BundlesChannels',
          ['bundleId', 'channelId'],
          {
            indexName: 'BundleChannelsCompositeIndex',
            indicesType: 'UNIQUE'
          }
        ),
        queryInterface.addIndex(
          'BundlesChannels',
          ['channelId'],
          {
            indexName: 'BundleChannelsChannelIndex'
          }
        )
      ])
    })
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('BundlesChannels');
  }
};
