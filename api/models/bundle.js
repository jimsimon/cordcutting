'use strict';
module.exports = function(sequelize, DataTypes) {
  var Bundle = sequelize.define('Bundle', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function({Channel, Provider}) {
        // associations can be defined here
        Bundle.belongsTo(Provider, {foreignKey: 'providerId'})
        Bundle.belongsToMany(Channel, {through: 'BundlesChannels', foreignKey: 'bundleId', otherKey: 'channelId'})
      }
    }
  });
  return Bundle;
};
