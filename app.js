require("dotenv").config();

var express = require("express");
var app = express();

const indexRoutes = require("./routes/indexRoutes.js")
const msgRoutes = require("./routes/msgRoutes.js")

const path = require("node:path");

//ejs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//css
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use("/", indexRoutes );

// app.use("/message", msgRoutes)

app.listen(process.env.PORT_LISTEN);
