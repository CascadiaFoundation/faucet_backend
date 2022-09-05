const { Faucet } = require("../model");

const getFaucet = async (req, res) => {
    try {
        const isExist = await Faucet.findOne({ address: req.body.address });

        if (isExist) {
            return res.status(400).send("Address already exists.");
        }

        const faucetItem = new Faucet();
        faucetItem.address = req.body.address;
        faucetItem.ip =
            req.headers["x-forwarded-for"] || req.socket.remoteAddress;
        await faucetItem.save();
        res.send();
    } catch (err) {
        res.status(500).send("Server error.");
    }
};

module.exports = {
    getFaucet,
};
