const moment = require("moment");
// exports "ORDER (FORM)" table
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define("Order", {
    // proceeding to define cols:
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 30],
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 30],
      },
    },
    streetAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 30],
      },
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2],
      },
    },
    zipCode: {
      type: DataTypes.NUMBER,
      allowNull: false,
      validate: {
        len: [5, 11],
      },
    },
    //TODO ensuer data is form 'drop down' with presets
    ccBrand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ccNum: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [16],
      },
    },
    //TODO validate correct date format
    ccExpirationDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    ccCVV: {
      type: DataTypes.NUMBER,
      allowNull: false,
      validate: {
        len: [3],
      },
    },
  });
  return Order;
};
