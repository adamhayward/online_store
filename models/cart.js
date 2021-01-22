module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define("Cart", {
    // proceeding to define cols:
    total: DataTypes.NUM,
    //TODO ensure data is formated with $ & .
  });
  return Cart;
};
