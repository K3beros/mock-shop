'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    category: DataTypes.STRING,
    price: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    inStock: DataTypes.BOOLEAN
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
    Product.belongsToMany(models.User, {
      through: 'Cart'
    })
    Product.hasMany(models.Cart, {
      foreignKey: 'productId',
      onDelete: 'CASCADE'
    })
    
  };
  return Product;
};