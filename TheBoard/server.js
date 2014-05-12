var http = require("http");
var express = require("express");
var app = express();

var controllers = require("./controllers");

// Setup the view engine
app.set("view engine", "vash");

// Set the public static resource folder
app.use(express.static(__dirname + "/public"));

// Map the routes
controllers.init(app);

//Sample Change

app.get("/api/users", function(req, res) {
       res.set("Content-Type", "application/json");
       res.send({ name: "Andrew", isValid: true, group: "Admin"});
       });__dirname

var server = http.createServer(app);

server.listen(3000);

