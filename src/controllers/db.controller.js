const db = require("../model");
const Cascadia = db.cascadia;
const Op = db.Sequelize.Op;

// Create and Save a new Cascadia
exports.create = (req, res) => {
    // Validate request
    if (!req.body.emailAddress) {
        res.status(400).send({
            message: "Email can not be empty!"
        });
        return;
    }

    // Create a Tutorial
    const cascadia = {
        emailAddress: req.body.emailAddress,
    };

    // Save Tutorial in the database
    Cascadia.create(cascadia)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Cascadia."
            });
        });
};

// Retrieve all Cascadia from the database.
exports.findAll = (req, res) => {

};

// Find a single Cascadia with an id
exports.findOne = (req, res) => {

};

// Update a Cascadia by the id in the request
exports.update = (req, res) => {

};

// Delete a Cascadia with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all Cascadia from the database.
exports.deleteAll = (req, res) => {

};

// Find all published Cascadia
exports.findAllPublished = (req, res) => {

};
