//Dependencies
let express = require("express");
let bodyParser = require("body-parser");
let methodOverride=require('method-override');
// let methodOverride = require('method-override');

//Set up Express
let app = express();
let PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(methodOverride("_method"));
app.use(methodOverride('_method'));

// parse application/json
app.use(bodyParser.json());

// Set up Handlebars.
let exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
let routes = require("./controllers/burgers_controller.js");
app.use("/", routes);
// app.use("/:id", routes);
// app.use("/burger", routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});

