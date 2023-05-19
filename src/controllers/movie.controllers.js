const catchError = require('../utils/catchError');
const Movie = require('../models/Movie');

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
    const result = await Movie.findByPk(id); 
    if(!result) return res.sendStatus(404);
    return res.json(result);
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
    console.log(actors)
    return res.json(actors) 
})

const getGenres = catchError(async (req,res) => {
    const { id } = req.params;
    const movie = await Movie.findByPk(id); // Retrieve the movie instance
    const genres = await movie.getGenres();
    console.log(genres)
    return res.json(genres) 
})

const getDirectors = catchError(async (req,res) => {
    const { id } = req.params;
    const movie = await Movie.findByPk(id); // Retrieve the movie instance
    const directors = await movie.getDirectors();
    console.log(directors)
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