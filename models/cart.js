module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define("Cart", {
      // proceeding to define cols:
      item: DataTypes.STRING,
      price: DataTypes.FLOAT,
  });
  Cart.associate = function(models) {
    Cart.belongsTo(models.Inventory, {
      foreignKey: {
        allowNull: true
      }
    })
  }
    return Cart;
  };
