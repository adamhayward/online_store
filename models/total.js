module.exports = (sequelize, DataTypes) => {
    const Total = sequelize.define("Total", {
      // proceeding to define cols:
      total: DataTypes.STRING
  });
    return Total;
  };