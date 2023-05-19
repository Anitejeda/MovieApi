const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Movie = sequelize.define('movie', {  
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    synopsis: {
        type: DataTypes.STRING,
        allowNull: false
    },
    releaseYear: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    genres: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: false
    },
    actors: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: false
    },
    directors: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: false
    }
});


module.exports = Movie;