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
<<<<<<< HEAD
=======
      defaultValue: false,
>>>>>>> 5d92765ec35fbb0e46db1a5ba55c2a39cbba6344
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
};

// default: null
