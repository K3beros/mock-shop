'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {});
  Cart.associate = function(models) {
    // associations can be defined here
    Cart.belongsTo(models.User, {
      foreignKey: 'userId'
    })
    Cart.belongsTo(models.Product, {
      foreignKey: 'productId'
    })
  };
  return Cart;
};