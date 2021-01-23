module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define("Cart", {
    // proceeding to define cols:
    total: DataTypes.FLOAT,
    //TODO ensure data is formated with $ & .
  });
  return Cart;
};
