const catchError = require('../utils/catchError');
const Movie = require('../models/Movie');
const Actor = require("./../models/Actor");
const Director = require("./../models/Director");
const Genre = require("./../models/Genre");

const getAll = catchError(async(req, res) => {
    const results = await Movie.findAll();
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await Movie.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    try {
        const movie = await Movie.findByPk(id, {
            include: [
            {
                model: Genre,
                attributes: ['name'],
            },
            {
                model: Actor,
                attributes: ['firstName', 'lastName', 'nationality', 'image', 'birthday'],
            },
            {
                model: Director,
                attributes: ['firstName', 'lastName', 'nationality', 'image', 'birthday'],
            },
            ],
        });

        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }

        res.json(movie);
    } catch (error) {
        console.log('Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Movie.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Movie.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

const getActors = catchError(async (req,res) => {
    const { id } = req.params;
    const movie = await Movie.findByPk(id); // Retrieve the movie instance
    const actors = await movie.getActors(); 
    return res.json(actors) 
})

const getGenres = catchError(async (req,res) => {
    const { id } = req.params;
    const movie = await Movie.findByPk(id); // Retrieve the movie instance
    const genres = await movie.getGenres(); 
    return res.json(genres) 
})

const getDirectors = catchError(async (req,res) => {
    const { id } = req.params;
    const movie = await Movie.findByPk(id); // Retrieve the movie instance
    const directors = await movie.getDirectors(); 
    return res.json(directors) 
})

const movieGenres = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Movie.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

const movieActors = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Movie.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

const movieDirectors = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Movie.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    movieGenres,
    movieActors,
    movieDirectors,
    getGenres,
    getActors,
    getDirectors
}