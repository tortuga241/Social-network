const { DataTypes } = require('sequelize');
const sequelize = require('./pool');

const GroupChatsTab = sequelize.define('myGroupChats', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING
    },
    createDate: {
        type: DataTypes.STRING
    },
    admin: {
        type: DataTypes.STRING
    },
});

module.exports = GroupChatsTab;