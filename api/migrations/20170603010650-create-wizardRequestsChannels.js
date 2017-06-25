'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('wizardRequestsChannels', {
      wizardRequestId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'wizardRequests',
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
          'wizardRequestsChannels',
          ['wizardRequestId', 'channelId'],
          {
            indexName: 'wizardRequestsChannelsCompositeIndex',
            indicesType: 'UNIQUE'
          }
        ),
        queryInterface.addIndex(
          'wizardRequestsChannels',
          ['channelId'],
          {
            indexName: 'wizardRequestsChannelsChannelIndex'
          }
        )
      ])
    })
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('WizardRequestsChannels');
  }
};
