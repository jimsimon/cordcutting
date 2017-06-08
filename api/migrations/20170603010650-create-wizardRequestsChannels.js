'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('WizardRequestsChannels', {
      wizardRequestId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'WizardRequests',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      channelId: {
        type: Sequelize.INTEGER,
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
          'WizardRequestsChannels',
          ['wizardRequestId', 'channelId'],
          {
            indexName: 'WizardRequestsChannelsCompositeIndex',
            indicesType: 'UNIQUE'
          }
        ),
        queryInterface.addIndex(
          'WizardRequestsChannels',
          ['channelId'],
          {
            indexName: 'WizardRequestsChannelsChannelIndex'
          }
        )
      ])
    })
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('WizardRequestsChannels');
  }
};
