const db = require(".");
let table1 = require("./equipment");
let table2 = require("./equipment2");

Equipment.associate = (models) => {
  // We're saying that a Post should belong to an Author
  // A Post can't be created without an Author due to the foreign key constraint
  Equipment.belongsTo(models.Equipment2, {
    foreignKey: {
      allowNull: false,
    },
  });
};
