'use strict';
module.exports = function(sequelize, DataTypes) {
  const WizardRequest = sequelize.define('wizardRequest', {

  }, {
    classMethods: {
      associate: function({Channel}) {
        WizardRequest.belongsToMany(Channel, {through: 'WizardRequestsChannels', foreignKey: 'wizardRequestId', otherKey: 'channelId'})
      }
    }
  });
  return WizardRequest;
};
