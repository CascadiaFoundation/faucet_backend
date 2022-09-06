require("dotenv").config();
const shell = require("shelljs");

const sendFaucetRequest = async (address) => {
    const res = await shell.exec(`${process.env.SHELL_SCRIPT} ${address}`);

    if (res.stderr) {
        throw "Request error.";
    }

    return;
};

module.exports = sendFaucetRequest;
