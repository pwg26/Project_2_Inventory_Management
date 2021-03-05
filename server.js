var express = require("express");
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
  })
);
app.set("view engine", "handlebars");
<<<<<<< HEAD
app.use(require("./controllers/controller.js"));
=======

var routes = require("./controllers/controller.js");

app.use(routes);
>>>>>>> cd6e93515fc5d36a64be55cca658a4486e0c3da5

// listen on port 3000
var PORT = process.env.PORT || 3000;

// bring in the models
var db = require("./models");
db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log("App now listening on port:", PORT);
  });
});
