const { DataTypes } = require('sequelize');
const sequelize = require('./pool');

const RecoveryTokenTab = sequelize.define('myRecoveryTokens', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    userId: {
        type: DataTypes.STRING
    },
    token: {
        type: DataTypes.STRING
    }
});

module.exports = RecoveryTokenTab;