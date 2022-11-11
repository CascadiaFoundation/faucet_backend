const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const router = require("./routes");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.options("*", cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// connect postgreSQL
const db = require("./model");
// drop and re-sync db during development
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});

app.use("/api", router);

module.exports = app;
