// let table2 = require("./equipment2");
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
    rental_rate: {
      type: DataTypes.DECIMAL,
      defaultValue: null,
    },
    time_checked_out: {
      type: DataTypes.DATE,
      defaultValue: null,
    },
    time_checked_in: {
      type: DataTypes.DATE,
      defaultValue: null,
    },
    realized_returns: {
      type: DataTypes.DECIMAL,
      defaultValue: null,
    },
  });
  return Equipment;
  // default: null
};
