const web3 = require("web3");

const checkAddress = (req, res, next) => {
    if (req.body.address) {
        if (web3.utils.isAddress(req.body.address)) {
            next();
        } else {
            return res
                .status(400)
                .send("Your address is invalid. Please check it again.");
        }
    } else {
        return res.status(400).send("Address to be sent is needed.");
    }
};

module.exports = checkAddress;
