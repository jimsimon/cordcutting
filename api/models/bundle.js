'use strict';
module.exports = function(sequelize, DataTypes) {
  const Bundle = sequelize.define('bundle', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function({Channel, Provider}) {
        // associations can be defined here
        Bundle.belongsTo(Provider)
        Bundle.belongsToMany(Channel, {through: 'bundlesChannels', foreignKey: 'bundleId', otherKey: 'channelId'})
      }
    }
  });
  return Bundle;
};
