const { sendFaucetRequest } = require("../apis");

const getFaucet = async (req, res) => {
    try {
        sendFaucetRequest(req.body.address).then((res) =>{
            console.log(res);
        });
        res.send("Test coin has been achieved.");
    } catch (err) {
        res.status(500).send(err);
    }
};

module.exports = {
    getFaucet,
};
