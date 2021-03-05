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
      defaultValue: "--",
    },
    time_checked_out: {
      type: DataTypes.DATE,
      defaultValue: "--",
    },
    time_checked_in: {
      type: DataTypes.DATE,
      defaultValue: "--",
    },
    realized_returns: {
      type: DataTypes.DECIMAL,
      defaultValue: "--",
    },
  });
  return Equipment;
};

// default: null
