// let table2 = require("./equipment2");
module.exports = function (sequelize, DataTypes) {
  let Asset = sequelize.define("Asset", {
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
    rental_rate: {
      type: DataTypes.DECIMAL,
      defaultValue: null,
    },
    // quantity: {
    //   type: DataTypes.DECIMAL,
    //   defaultValue: null,
    // },
  });

  //   Assets.associate = (models) => {
  //     Assets.hasMany(models.equipment);
  //   };

  return Asset;
  // default: nul
};
