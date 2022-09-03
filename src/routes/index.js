const express = require("express");

const { getFaucet } = require("../controllers");

const router = express.Router();

router.post("/get-faucet/:address", getFaucet);

module.exports = router;
