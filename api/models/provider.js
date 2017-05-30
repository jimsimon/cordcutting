'use strict';
module.exports = function(sequelize, DataTypes) {
  var Provider = sequelize.define('Provider', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function({Bundle}) {
        // associations can be defined here
        Provider.hasMany(Bundle, {foreignKey: 'providerId'})
      }
    }
  });
  return Provider;
};
