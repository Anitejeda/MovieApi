const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Director = sequelize.define('director', {
    
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    fisrtName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nationalitiy: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthday: {
        type: DataTypes.DATEONLY,
        allowNull: false,   
        get: function() {
            return moment.utc(this.getDataValue('regDate')).format('YYYY-MM-DD');
        }
    },
});

module.exports = Director;