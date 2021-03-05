module.exports = function (sequelize, DataTypes) {
  let Equipment2 = sequelize.define("Equipment2", {
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
    asset_quantity: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },

    rental_rate: DataTypes.DECIMAL,
  });

  return Equipment2;
};

// default: null
