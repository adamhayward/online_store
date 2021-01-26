module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define("Cart", {
      // proceeding to define cols:
      total: {
        type: DataTypes.FLOAT,
        allowNull: false,
    }});
    return Cart;
  };
