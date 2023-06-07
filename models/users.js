const Sequelize = require('sequelize');
const sequelize = require('../data/database');

const User = sequelize.define('users', {
    id : {
        type : Sequelize.INTEGER,
        allowNull : false,
        autoIncrement : true,
        primaryKey : true
    },
    name : {
        type : Sequelize.STRING,
        allowNull : false
    },
    phone : {
        type : Sequelize.STRING,
        allowNull : false,
        unique : true
    },
    email : {
        type : Sequelize.STRING,
        allowNull : false,
        unique : true
    }
}
);

module.exports = User;