const { DataTypes } = require('sequelize');
const sequelize = require('./pool');

const FriendsTab = sequelize.define('myFriends', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    user: {
        type: DataTypes.STRING
    },
    friend: {
        type: DataTypes.STRING
    }
});

module.exports = FriendsTab;