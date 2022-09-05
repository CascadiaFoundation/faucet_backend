const { Faucet } = require("../model");
const { sendFaucetRequest } = require("../apis");

const getFaucet = async (req, res) => {
    try {
        const existingItem = await Faucet.findOne({
            address: req.body.address,
        });

        if (existingItem) {
            const current = new Date();
            if (Math.abs(existingItem.createdAt - current) / 3600000 > 1) {
                await sendFaucetRequest(req.body.address);

                await Faucet.updateOne(
                    {
                        address: req.body.address,
                    },
                    {
                        ip:
                            req.headers["x-forwarded-for"] ||
                            req.socket.remoteAddress,
                    }
                );

                return res.send("Request has been sent.");
            } else {
                return res
                    .status(400)
                    .send(
                        "You can't resend a request within 1 hours after your last request."
                    );
            }
        }

        await sendFaucetRequest(req.body.address);

        const faucetItem = new Faucet();
        faucetItem.address = req.body.address;
        faucetItem.ip =
            req.headers["x-forwarded-for"] || req.socket.remoteAddress;
        await faucetItem.save();

        res.send("Request has been sent.");
    } catch (err) {
        res.status(500).send(err);
    }
};

module.exports = {
    getFaucet,
};
