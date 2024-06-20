const { DataTypes } = require('sequelize');
const sequelize = require('./pool');

const commentsLikesTab = sequelize.define('myCommentsLikes', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    commentId: {
        type: DataTypes.INTEGER
    },
    date: {
        type: DataTypes.STRING
    },
    executer: {
        type: DataTypes.STRING
    }
});

module.exports = commentsLikesTab;