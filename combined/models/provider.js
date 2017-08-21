'use strict';
module.exports = function(sequelize, DataTypes) {
  const Provider = sequelize.define('provider', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function({Bundle}) {
        // associations can be defined here
        Provider.hasMany(Bundle)
      }
    }
  });
  return Provider;
};
