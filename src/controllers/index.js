const getFaucet = (req, res) => {
    res.send(req.params.address);
};

module.exports = {
    getFaucet,
};
