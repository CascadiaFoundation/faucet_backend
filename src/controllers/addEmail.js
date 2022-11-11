const db = require("../model");
const Cascadia = db.cascadia;
// const Op = db.Sequelize.Op;

const addEmail = async (req, res) => {
    // Validate request
    if (!req.body.emailAddress) {
        res.status(400).send({
            message: "Email Address can not be empty!"
        });
        return;
    }

    // Create a Tutorial
    const cascadia = {
        email: req.body.emailAddress,
    };

    // Save Tutorial in the database
    Cascadia.create(cascadia)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });
};

// const db = require("../model");

// const addEmail = async (req, res) => {

// }

module.exports = {
    addEmail,
}