const { DataTypes } = require('sequelize');
const sequelize = require('./pool');

const LikesTab = sequelize.define('myLikes', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    postId: {
        type: DataTypes.INTEGER
    },
    executer: {
        type: DataTypes.STRING
    },
    date: {
        type: DataTypes.STRING
    },
});

module.exports = LikesTab;