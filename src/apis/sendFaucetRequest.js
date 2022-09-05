require("dotenv").config();
const shell = require("shelljs");

const sendFaucetRequest = async (address) => {
    shell.exec(`${process.env.SHELL_SCRIPT} ${address}`);

    return;
};

module.exports = sendFaucetRequest;
