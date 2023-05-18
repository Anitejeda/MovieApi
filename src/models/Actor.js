const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');
const moment = require('moment')

const Actor = sequelize.define('actor', {  
    fisrtName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nationality: {
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

module.exports = Actor;