const express = require('express');
const genreRouter = require('./genre.router');
const Director = require('../models/Director');
const directorRouter = require('./director.router');
const actorRouter = require('./actor.router');
const movieRouter = require('./movie.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/genres', genreRouter);
router.use('/director', directorRouter);
router.use('/actor', actorRouter);
router.use('/movie', movieRouter);


module.exports = router;