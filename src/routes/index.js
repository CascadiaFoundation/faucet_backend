const express = require("express");

const { getFaucet } = require("../controllers");

const router = express.Router();

router.post("/get-faucet", getFaucet);

module.exports = router;
