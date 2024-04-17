const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const User = sequelize.define('user', {
    email : { type : DataTypes.STRING, allowNull : false },
    firstName : { type : DataTypes.STRING, allowNull : false },
    password : { type : DataTypes.INTEGER, allowNull : false }
}, {
    timestamps : false
})

// select * from users;
// User.findAll().then(console.log).catch(console.log);

module.exports = {
    User
}