const mongoose = require("mongoose");

const faucetSchema = mongoose.Schema({
    address: {
        type: String,
        required: true,
    },
    ip: {
        type: String,
        required: true,
    },
});

const Faucet = mongoose.model("Faucet", faucetSchema);

module.exports = Faucet;
