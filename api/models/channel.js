'use strict';
module.exports = function(sequelize, DataTypes) {
  var Channel = sequelize.define('Channel', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function({Bundle}) {
        // associations can be defined here
        Channel.belongsToMany(Bundle, {through: 'BundlesChannels',  foreignKey: 'channelId', otherKey: 'bundleId'})
      }
    }
  });
  return Channel;
};
