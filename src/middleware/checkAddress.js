const web3 = require("web3");

const checkAddress = (req, res, next) => {
    if (req.body.address) {
        if (web3.utils.isAddress(req.body.address)) {
            next();
        } else {
            return res.status(400).send("Invalid Address");
        }
    } else {
        return res.status(400).send("No Address was found.");
    }
};

module.exports = checkAddress;
