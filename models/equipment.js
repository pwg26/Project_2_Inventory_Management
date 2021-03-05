let table2 = require("./equipment2");

module.exports = function (sequelize, DataTypes) {
  let Equipment = sequelize.define("Equipment", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    asset_value: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    asset: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_rented: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    company_renting: {
      type: DataTypes.STRING,
      defaultValue: "--",
    },
    rental_rate: DataTypes.DECIMAL,
    time_checked_out: DataTypes.DATE,
    time_checked_in: DataTypes.DATE,
    realized_returns: DataTypes.DECIMAL,
  });

  return Equipment;

  // default: null
};
