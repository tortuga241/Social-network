const { DataTypes } = require('sequelize');
const sequelize = require('./pool');

const SettingsTab = sequelize.define('mySettings', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    user: {
        type: DataTypes.STRING
    },
    doubleAuthentificator: {
        type: DataTypes.BOOLEAN
    },
    notificationNewPost: {
        type: DataTypes.BOOLEAN
    },
    notificationNewGroupChatMessage: {
        type: DataTypes.BOOLEAN
    },
    notificationNewFriendRequest: {
        type: DataTypes.BOOLEAN
    },
    notificationSystemUpdates: {
        type: DataTypes.BOOLEAN
    },
    privateProfile: {
        type: DataTypes.BOOLEAN
    },
    showFriends: {
        type: DataTypes.STRING
    },
    showEmail: {
        type: DataTypes.STRING
    },
    showPhone: {
        type: DataTypes.STRING
    },
    showPosts: {
        type: DataTypes.STRING
    },
    showLikes: {
        type: DataTypes.STRING
    },
    showMusic: {
        type: DataTypes.STRING
    },
    showLocation: {
        type: DataTypes.STRING
    }
});

module.exports = SettingsTab;