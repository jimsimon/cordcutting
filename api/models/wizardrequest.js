'use strict';
module.exports = function(sequelize, DataTypes) {
  var WizardRequest = sequelize.define('WizardRequest', {

  }, {
    classMethods: {
      associate: function({Channel}) {
        // associations can be defined here
        WizardRequest.belongsToMany(Channel, {through: 'WizardRequestsChannels', foreignKey: 'wizardRequestId', otherKey: 'channelId'})
      }
    }
  });
  return WizardRequest;
};
