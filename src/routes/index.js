const express = require("express");
const rateLimit = require("express-rate-limit");

const config = require("../config");
const { getFaucet } = require("../controllers");
const { addResponse } = require("../controllers/addResponse");
const { checkAddress } = require("../middleware");

const router = express.Router();

const limiter = rateLimit({
    max: 1,
    windowMs: config.limitDuration,
    message: "Too many request from this IP address.",
});

router.post("/get-faucet", [checkAddress, limiter], getFaucet);
router.post("/add-response", addResponse);

router.get('/ip', (request, response) => response.send(request.ip))

router.set()
module.exports = router;
