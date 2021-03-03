module.exports = function(sequelize, DataTypes) {
    let Equipment = sequelize.define("equipment", {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      asset_value: DataTypes.DECIMAL,
      is_rented: DataTypes.BOOLEAN,
      rented_location: DataTypes.STRING,
      company_renting: DataTypes.STRING,
      rental_rate: DataTypes.DECIMAL,
      realized_returns: DataTypes.DECIMAL,
      time_checked_out: DataTypes.DATE,
      time_checked_in: DataTypes.DATE,
    });
    return Equipment;
  };