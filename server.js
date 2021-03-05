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

var routes = require("./controllers/controller.js");

app.use(routes);
=======
app.use(require("./controllers/controller.js"));
>>>>>>> 419da970a20ecec1ca51da8647ca90e74a43029f

// listen on port 3000
var PORT = process.env.PORT || 3000;

// bring in the models
var db = require("./models");
db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log("App now listening on port:", PORT);
  });
});
