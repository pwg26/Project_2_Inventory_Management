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
router.get("/", function (req, res) {
  // send us to the next get function instead.
  res.redirect("/assets");
});

// for assets page ========================================================================
// get route, edited to match sequelize
router.get("/assets", function (req, res) {
  // replace old function with sequelize function
  db.Equipment.findAll()
    // use promise method to pass the inventory items...
    .then(function (dbEquipment) {
      console.log(dbEquipment);
      // into the main index, updating the page
      var hbsObject = { equipment: dbEquipment };
      return res.render("product", hbsObject);
    });
});

// post route to create new inventory item
router.post("/assets/create", function (req, res) {
  // edited equipment create to add in a name, description, asset value, location, and rental rate
  db.Equipment.create({
    name: req.body.name,
    description: req.body.description,
    asset_value: req.body.asset_value,
    location: req.body.location,
    rental_rate: req.body.rental_rate,
  })
    // pass the result of our call
    .then(function (dbEquipment) {
      // log the result to our terminal/bash window
      console.log(dbEquipment);
      // redirect
      res.redirect("/");
    });
});

// put route to devour a burger
router.put("/assets/update/:id", function (req, res) {
  // update one piece of equipment in all
  db.Equipment.update(
    {
      name: req.body.name,
      description: req.body.description,
      asset_value: req.body.asset_value,
      is_rented: req.body.is_rented,
      location: req.body.location,
      company_renting: req.body.company_renting,
      rental_rate: req.body.rental_rate,
      time_checked_out: req.body.company_time_checked_out,
      time_checked_in: req.body.time_checked_in,
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
