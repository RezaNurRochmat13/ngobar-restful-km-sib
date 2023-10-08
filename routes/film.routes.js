const express = require('express');
const filmRouter = express.Router();
const filmController = require('../controllers/film.controller')

filmRouter.get('/api/films', filmController.getAllFilms);
filmRouter.get('/api/films/:id', filmController.getFilmById);
filmRouter.post('/api/films', filmController.createNewFilm)
filmRouter.delete('/api/films/:id', filmController.deleteFilmById)

module.exports = filmRouter
