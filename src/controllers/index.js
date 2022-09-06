const { Faucet } = require("../model");
const { sendFaucetRequest } = require("../apis");
const { requestTimeGap } = require("../config");

const getFaucet = async (req, res) => {
    try {
        const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
        const existingItem = await Faucet.findOne({ ip });

        if (existingItem) {
            const current = new Date();
            if (
                Math.abs(existingItem.updatedAt - current) / 3600000 >
                requestTimeGap
            ) {
                await sendFaucetRequest(req.body.address);

                await Faucet.updateOne(
                    { ip },
                    {
                        address: req.body.address,
                    }
                );

                return res.send("Test coin has been achieved.");
            } else {
                return res.status(400).send(
                    `You can't send more than one request from one ip address within ${requestTimeGap} hour(s).
                    Time for last request: ${existingItem.updatedAt}
                    IP Address: ${ip}`
                );
            }
        } else {
            await sendFaucetRequest(req.body.address);

            const faucetItem = new Faucet();
            faucetItem.ip = ip;
            faucetItem.address = req.body.address;
            await faucetItem.save();

            res.send("Test coin has been achieved.");
        }
    } catch (err) {
        res.status(500).send(err);
    }
};

module.exports = {
    getFaucet,
};
