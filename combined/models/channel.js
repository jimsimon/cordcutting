'use strict';
module.exports = function(sequelize, DataTypes) {
  var Channel = sequelize.define('channel', {
    name: DataTypes.STRING,
    useNameForDisplay: DataTypes.BOOLEAN,
    abbreviation: DataTypes.STRING
  }, {
    classMethods: {
      associate: function({Bundle, Category, WizardRequest}) {
        // associations can be defined here
        Channel.belongsTo(Category)
        Channel.belongsToMany(Bundle, {through: 'bundlesChannels',  foreignKey: 'channelId', otherKey: 'bundleId'})
        Channel.belongsToMany(WizardRequest, {through: 'wizardRequestsChannels', foreignKey: 'channelId', otherKey: 'wizardRequestId'})
      }
    }
  });
  return Channel;
};
