require("dotenv").config()

const config = {
    port: process.env.PORT || 3000,
    limitDuration: process.env.LIMIT_DURATION || 3000,
    rpcUrl: process.env.RPC_URL || "http://localhost:8545",
    faucetPK: process.env.PK || null,
    faucetAmount: process.env.FAUCET_AMOUNT || 1
};

module.exports = config;
