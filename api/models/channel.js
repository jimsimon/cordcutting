'use strict';
module.exports = function(sequelize, DataTypes) {
  var Channel = sequelize.define('Channel', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function({Bundle, WizardRequest}) {
        // associations can be defined here
        Channel.belongsToMany(Bundle, {through: 'BundlesChannels',  foreignKey: 'channelId', otherKey: 'bundleId'})
        Channel.belongsToMany(WizardRequest, {through: 'WizardRequestsChannels', foreignKey: 'channelId', otherKey: 'wizardRequestId'})
      }
    }
  });
  return Channel;
};
