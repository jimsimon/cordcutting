'use strict';
module.exports = function(sequelize, DataTypes) {
  var Channel = sequelize.define('Channel', {
    name: DataTypes.STRING,
    displayName: DataTypes.STRING,
    abbreviation: DataTypes.STRING
  }, {
    classMethods: {
      associate: function({Bundle, Category, WizardRequest}) {
        // associations can be defined here
        Channel.belongsTo(Category, {foreignKey: 'categoryId'})
        Channel.belongsToMany(Bundle, {through: 'BundlesChannels',  foreignKey: 'channelId', otherKey: 'bundleId'})
        Channel.belongsToMany(WizardRequest, {through: 'WizardRequestsChannels', foreignKey: 'channelId', otherKey: 'wizardRequestId'})
      }
    }
  });
  return Channel;
};
