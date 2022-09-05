const express = require("express");

const { getFaucet } = require("../controllers");
const { checkAddress } = require("../middleware");

const router = express.Router();

router.post("/get-faucet", checkAddress, getFaucet);

module.exports = router;
