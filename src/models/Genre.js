const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Genre = sequelize.define('genre', {  
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
},
{
  freezeTableName: true,
});

module.exports = Genre;