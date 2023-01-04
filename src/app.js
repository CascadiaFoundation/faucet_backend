const express = require("express");
const cors = require("cors");

const router = require("./routes");

const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.options("*", cors());

app.use("/api", router);
app.set('trust proxy', 1);

module.exports = app;
