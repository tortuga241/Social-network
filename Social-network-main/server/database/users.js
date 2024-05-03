const { DataTypes } = require('sequelize');
const sequelize = require('./pool');

const UsersTab = sequelize.define('myUsers', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING
    },
    surname: {
        type: DataTypes.STRING
    },
    login: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    phoneNumber: {
        type: DataTypes.STRING
    },
    avatarPath: {
        type: DataTypes.STRING
    },
    backgroundPath: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    }, 
    location: {
        type: DataTypes.STRING
    },
});

module.exports = UsersTab;