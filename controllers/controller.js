// / Our  controller
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
// var format = require("date-fns/format");
// get route -> indexgit
// router.get("/", function (req, res) {
//   // send us to the next get function instead.
//   res.redirect("/assets");
// });
// for assets page ========================================================================
// get route, edited to match sequelize
// function showArray() {
//   // var kvalue = [];
//   db.Asset.findAll({ raw: true })
//     // use promise method to pass the inventory items...
//     .then(function (dbAsset) {
//       var kvalue = [];
//       // into the main index, updating the page
//       var hbsObject = { asset: dbAsset };
//       var y = hbsObject.asset;
//       y.forEach((nodkey) => kvalue.push(key.name));
//       console.log(kvalue);
//     });
// }

// showArray();
// ******* works but page needs to be reloaded
router.get("/", function (req, res) {
  // replace old function with sequelize function
  db.Equipment.findAll({ raw: true })
    // use promise method to pass the inventory items...
    .then(function (dbEquipment) {
      // into the main index, updating the page
      var hbsObject = { equipment: dbEquipment };
      hbsObject.equipment = hbsObject.equipment.map((eq) => ({
        ...eq,
      }));
      console.log(hbsObject.equipment);
      return res.render("index", hbsObject);
    });
});
// ====================================================================================================
// router.get("/addType-asset", function (req, res) {
//   // replace old function with sequelize function
//   db.Asset.findAll({ raw: true })
//     // use promise method to pass the inventory items...
//     .then(function (dbAsset) {
//       // into the main index, updating the page
//       var hbsObject = { asset: dbAsset };
//       hbsObject.equipment = hbsObject.asset.map((eq) => ({
//         ...eq,
//       }));
//       console.log(hbsObject.asset);
//       return res.render("index-addType", hbsObject);
//     });
// });

router.get("/add-asset", function (req, res) {
  // replace old function with sequelize function
  db.Equipment.findAll({ raw: true })
    // use promise method to pass the inventory items...
    .then(function (dbEquipment) {
      // into the main index, updating the page
      var hbsObject = { equipment: dbEquipment };
      hbsObject.equipment = hbsObject.equipment.map((eq) => ({
        ...eq,
      }));
      console.log(hbsObject.equipment);
      return res.render("index-add", hbsObject);
    });
});

router.get("/update-asset", function (req, res) {
  // replace old function with sequelize function
  db.Equipment.findAll({ raw: true })
    // use promise method to pass the inventory items...
    .then(function (dbEquipment) {
      // into the main index, updating the page
      var hbsObject = { equipment: dbEquipment };
      hbsObject.equipment = hbsObject.equipment.map((eq) => ({
        ...eq,
      }));
      console.log(hbsObject.equipment);
      return res.render("index-update", hbsObject);
    });
});

router.get("/delete-asset", function (req, res) {
  // replace old function with sequelize function
  db.Equipment.findAll({ raw: true })
    // use promise method to pass the inventory items...
    .then(function (dbEquipment) {
      // into the main index, updating the page
      var hbsObject = { equipment: dbEquipment };
      hbsObject.equipment = hbsObject.equipment.map((eq) => ({
        ...eq,
      }));
      console.log(hbsObject.equipment);
      return res.render("index-delete", hbsObject);
    });
});
router.get("/delete-asset", function (req, res) {
  // replace old function with sequelize function
  db.Equipment.findAll({ raw: true })
    // use promise method to pass the inventory items...
    .then(function (dbEquipment) {
      // into the main index, updating the page
      var hbsObject = { equipment: dbEquipment };
      hbsObject.equipment = hbsObject.equipment.map((eq) => ({
        ...eq,
      }));
      console.log(hbsObject.equipment);
      return res.render("index-delete", hbsObject);
    });
});

router.get("/dashboard", function (req, res) {
  // replace old function with sequelize function
  db.Equipment.findAll({ raw: true })
    // use promise method to pass the inventory items...
    .then(function (dbEquipment) {
      var hbsObject = { equipment: dbEquipment };
      hbsObject.equipment = hbsObject.equipment.map((eq) => ({
        ...eq,
      }));
      console.log(hbsObject.equipment);
      return res.render("dashboard", hbsObject.equipment);
    });
});

// router.post("/api/data-dash", function (req, res) {
//   db.Equipment.findAll({ raw: true })
//     // use promise method to pass the inventory items...
//     .then(function (dbEquipment) {
//       var kvalue = [];
//       // into the main index, updating the page
//       var hbsObject = { equipment: dbEquipment };
//       var y = hbsObject.equipment;
//       y.forEach((key) => kvalue.push(key.name));
//       // console.log(kvalue);
//       return kvalue;
//     });
// });

// =====================================================================================================
// router.post("/api/asset", function (req, res) {
//   // edited equipment create to add in a name, description, asset value, location, and rental rate
//   db.Asset.create(
//     req.body
//     // realized_returns: req.body.realized_returns,
//     // time_checked_in: req.body.time_checked_in,
//     // time_checked_out: req.body.time_checked_out,
//   )
//     // pass the result of our call
//     .then(function (dbAsset) {
//       // log the result to our terminal/bash window
//       console.log(dbAsset);
//       res.status(200).end();
//       // redirect
//     });
// });

// post route to create new inventory item
router.post("/api/equipment", function (req, res) {
  // edited equipment create to add in a name, description, asset value, location, and rental rate
  db.Equipment.create(
    req.body
    // realized_returns: req.body.realized_returns,
    // time_checked_in: req.body.time_checked_in,
    // time_checked_out: req.body.time_checked_out,
  )
    // pass the result of our call
    .then(function (dbEquipment) {
      // log the result to our terminal/bash window
      console.log(dbEquipment);
      res.status(200).end();
      // redirect
    });
});

// // put route to devour a burger
router.put("/api/equipment/:id", function (req, res) {
  // update one piece of equipment in all
  db.Equipment.update(
    {
      name: req.body.name,
      description: req.body.description,
      asset_value: req.body.asset_value,
      location: req.body.location,
      is_rented: req.body.is_rented,
      company_renting: req.body.company_renting,
      rental_rate: req.body.rental_rate,
      time_checked_out: req.body.time_checked_out,
      time_checked_in: req.body.time_checked_in,
      realized_returns: req.body.realized_returns,
    },
    {
      where: {
        id: parseInt(req.params.id),
      },
    }
  ).then(function (dbEquipment) {
    console.log(dbEquipment);
    res.status(200).end();
  });
});

router.delete("/api/equipment/:id", function (req, res) {
  // delte 1 equipment entry
  db.Equipment.destroy({
    where: {
      id: req.body.id,
    },
  }).then(function (dbEquipment) {
    console.log(dbEquipment);
    res.status(200).end();
  });
});

module.exports = router;
