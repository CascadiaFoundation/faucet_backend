const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const router = require("./routes");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.options("*", cors());

app.use("/api", router);

module.exports = app;
