const { DataTypes } = require('sequelize');
const sequelize = require('./pool');

const GroupChatMessagesTab = sequelize.define('myGroupChatMessages', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    groupChatId: {
        type: DataTypes.INTEGER
    },
    date: {
        type: DataTypes.STRING
    },
    author: {
        type: DataTypes.STRING
    },
    content: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.STRING
    },
});

module.exports = GroupChatMessagesTab;