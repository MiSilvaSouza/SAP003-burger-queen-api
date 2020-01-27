'use strict';
module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    name: DataTypes.STRING,
    breakfast: DataTypes.BOOLEAN,
    category: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    option: DataTypes.ARRAY
  }, {});
  products.associate = function(models) {
    // associations can be defined here
  };
  return products;
};