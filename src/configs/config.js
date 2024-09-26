const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("events_fullstack", "root", "root", {
    host: "localhost",
    dialect: "mysql",
});

module.exports = sequelize;