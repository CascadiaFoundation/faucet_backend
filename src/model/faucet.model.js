const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const faucetSchema = new Schema(
    {
        address: {
            type: String,
            required: true,
        },
        ip: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Faucet = mongoose.model("Faucet", faucetSchema);

module.exports = Faucet;
