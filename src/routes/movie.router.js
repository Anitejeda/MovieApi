const { getAll, create, getOne, remove, update,
    movieGenres,
    movieActors,
    movieDirectors, 
    getGenres,
    getActors,
    getDirectors} = require('../controllers/movie.controllers');
const express = require('express');

const movieRouter = express.Router();

movieRouter.route('/')
    .get(getAll)
    .post(create);

movieRouter.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

movieRouter.route('/:id/genres') 
    .get(getGenres)
    .post(movieGenres);

movieRouter.route('/:id/actors')
    .get(getActors)
    .post(movieActors);

movieRouter.route('/:id/directors') 
    .get(getDirectors)
    .post(movieDirectors);

module.exports = movieRouter;