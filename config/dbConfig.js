require("dotenv").config()
const {Sequelize} = require("sequelize");

const sequelize = new Sequelize("userManagement", "root", process.env.PASSWORD, {
    host:"localhost",
    port:3306,
    dialect:"mysql",
    dialectOptions: {
        connectTimeout: 86400
    }
})

module.exports = sequelize;