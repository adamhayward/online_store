module.exports = (sequelize, DataTypes) => {
<<<<<<< HEAD
  const Cart = sequelize.define("Cart", {
    // proceeding to define cols:
    total: {
      type: DataTypes.FLOAT,
      allowNull: false,
    }
  });




  return Cart;
};


=======
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
>>>>>>> master
