const { DataTypes } = require('sequelize');
const sequelize = require('./pool');

const PostsTab = sequelize.define('myPosts', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    author: {
        type: DataTypes.STRING
    },
    date: {
        type: DataTypes.STRING
    },
    content: {
        type: DataTypes.STRING
    },
    repostPostId: {
        type: DataTypes.STRING
    }
});

module.exports = PostsTab;