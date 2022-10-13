const { sendFaucetRequest } = require("../apis");

const getFaucet = async (req, res) => {
    try {
        await sendFaucetRequest(req.body.address);
        res.send("Test coin has been achieved.");
    } catch (err) {
        res.status(500).send(err);
    }
};

module.exports = {
    getFaucet,
};
