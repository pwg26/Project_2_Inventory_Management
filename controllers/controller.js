// Our  controller
// =====================
// This file uses Sequelize to manage data manipulation
// for all apropos http requests.
// NOTE: This is the same file from last unit's homework,
// but with each route gutted and replaced with sequelize queries
// where references to our outmoded ORM file once sat.
var express = require("express");

var router = express.Router();
// edit model to match sequelize
var db = require("../models/");

// get route -> index
// router.get("/", function (req, res) {
//   // send us to the next get function instead.
//   res.redirect("/assets");
// });

// for assets page ========================================================================
// get route, edited to match sequelize
router.get("/", function (req, res) {
  // replace old function with sequelize function
  db.Equipment.findAll({ raw: true })
    // use promise method to pass the inventory items...
    .then(function (dbEquipment) {
      // into the main index, updating the page
      var hbsObject = { equipment: dbEquipment };
<<<<<<< HEAD
<<<<<<< HEAD
      return res.render("product", hbsObject);
=======
>>>>>>> 4afa588c92fe88f15d446595277a09b5fdcf53da
=======

      hbsObject.equipment = hbsObject.equipment.map((eq) => ({
        ...eq,
        is_rented: !!eq.is_rented,
      }));

      console.log(hbsObject.equipment);
>>>>>>> master
      return res.render("index", hbsObject);
>>>>>>> 419da970a20ecec1ca51da8647ca90e74a43029f
    });
});

// post route to create new inventory item
router.post("/assets/create", function (req, res) {
  // edited equipment create to add in a name, description, asset value, location, and rental rate
  db.Equipment.create(req.body)
    // pass the result of our call
    .then(function (dbEquipment) {
      // log the result to our terminal/bash window
      console.log(dbEquipment);
      // redirect
      res.redirect("/");
    });
});

// put route to devour a burger
router.put("/assets/update", function (req, res) {
  // update one piece of equipment in all
  db.Equipment.update(
    {
      req.body
    },

    {
      where: {
        id: req.body.id,
      },
    }
  ).then(function (dbEquipment) {
    res.redirect("/");
  });
});

router.delete("/assets/update/:id", function (req, res) {
  // delte 1 equipment entry
  db.Equipment.destroy({
    where: {
      id: req.body.id,
    },
  }).then(function (dbEquipment) {
    res.redirect("/");
  });
});

module.exports = router;
