const { DataTypes } = require('sequelize');
const sequelize = require('./pool');

const CommentsTab = sequelize.define('myComments', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    postId: {
        type: DataTypes.INTEGER
    },
    content: {
        type: DataTypes.STRING
    },
    executer: {
        type: DataTypes.STRING
    },
    date: {
        type: DataTypes.STRING
    }
});

module.exports = CommentsTab;