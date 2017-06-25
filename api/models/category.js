'use strict';
module.exports = function(sequelize, DataTypes) {
  const Category = sequelize.define('category', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function ({Channel}) {
        // associations can be defined here
        Category.hasMany(Channel)
      }
    }
  });
  return Category;
};
