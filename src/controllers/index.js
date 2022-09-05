const { Faucet } = require("../model");

const getFaucet = async (req, res) => {
    try {
        const existingItem = await Faucet.findOne({
            address: req.body.address,
        });

        if (existingItem) {
            const current = new Date();
            if (Math.abs(existingItem.createdAt - current) / 3600000 > 1) {
                // TODO: Should send request for faucet
                return res.send("Request has been sent.");
            } else {
                return res
                    .status(400)
                    .send("Your request has been sent within 1 hour.");
            }
        }

        const faucetItem = new Faucet();
        faucetItem.address = req.body.address;
        faucetItem.ip =
            req.headers["x-forwarded-for"] || req.socket.remoteAddress;
        await faucetItem.save();
        res.send();
    } catch (err) {
        res.status(500).send(err);
    }
};

module.exports = {
    getFaucet,
};
