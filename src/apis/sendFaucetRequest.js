require("dotenv").config();
const shell = require("shelljs");

const sendFaucetRequest = async (address) => {
    shell.exec(process.env.SHELL_SCRIPT || "echo Hello");
    return;
};

module.exports = sendFaucetRequest;
