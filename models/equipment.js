module.exports = function(sequelize, DataTypes) {
    let Equipment = sequelize.define("Equipment", {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      asset_value: DataTypes.DECIMAL,
      location: DataTypes.STRING,
      is_rented: DataTypes.BOOLEAN,
      company_renting: DataTypes.STRING,
      rental_rate: DataTypes.DECIMAL,
      time_checked_out: DataTypes.DATE,
      time_checked_in: DataTypes.DATE,
      realized_returns: DataTypes.DECIMAL,
    });
    return Equipment;
  };

  // default: null