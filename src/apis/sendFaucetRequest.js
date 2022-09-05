const shell = require("shelljs");

const sendFaucetRequest = async (address) => {
    shell.exec("echo Hello");
    return;
};

module.exports = sendFaucetRequest;
