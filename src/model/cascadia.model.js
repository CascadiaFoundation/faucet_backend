module.exports = (sequelize, Sequelize) => {
    const Cascadia = sequelize.define("cascadia", {
        email: {
            type: Sequelize.STRING
        },
    });

    return Cascadia;
};