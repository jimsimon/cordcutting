'use strict';
module.exports = function(sequelize, DataTypes) {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function ({Channel}) {
        // associations can be defined here
        Category.hasMany(Channel, {foreignKey: 'categoryId'})
      }
    }
  });
  return Category;
};
