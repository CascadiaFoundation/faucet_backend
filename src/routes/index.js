const express = require("express");
const rateLimit = require("express-rate-limit");

const { getFaucet } = require("../controllers");
const { checkAddress } = require("../middleware");

const router = express.Router();

const limiter = rateLimit({
    max: 1,
    windowMs: 60 * 60 * 1000,
    message: "Too many request from this IP"
});

router.post("/get-faucet", [checkAddress, limiter], getFaucet);

module.exports = router;
