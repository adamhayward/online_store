const { DataTypes } = require("sequelize/types");
const { sequelize } = require(".");
// exports "Inventory" table
module.exports = (sequelize, DataTypes) => {
  const Inventory = sequelize.define("Inventory", {
    // proceeding to define cols:
    imageURL: {
      type: DataTypes.STRING,
      //TODO: populate default value with no img found URL
      // defualtValue: ""
    },
    item: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 255],
      },
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      //TODO valiated format with $ and .
    },
  });
  return Inventory;
};
