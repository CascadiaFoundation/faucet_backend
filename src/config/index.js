require("dotenv").config()

const config = {
    port: process.env.PORT || 3000,
    limitDuration: process.env.LIMIT_DURATION || 3000,
};

module.exports = config;
