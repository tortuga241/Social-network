const { DataTypes } = require('sequelize');
const sequelize = require('./pool');

const MessagesTab = sequelize.define('myMessages', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    from: {
        type: DataTypes.STRING
    },
    to: {
        type: DataTypes.STRING
    },
    content: {
        type: DataTypes.STRING
    },
    date: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.STRING
    },
});

module.exports = MessagesTab;