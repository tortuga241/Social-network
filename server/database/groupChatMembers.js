const { DataTypes } = require('sequelize');
const sequelize = require('./pool');

const GroupChatMembersTab = sequelize.define('myGroupChatMembers', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    groupChatId: {
        type: DataTypes.INTEGER
    },
    enterDate: {
        type: DataTypes.STRING
    },
    member: {
        type: DataTypes.STRING
    }
});

module.exports = GroupChatMembersTab;