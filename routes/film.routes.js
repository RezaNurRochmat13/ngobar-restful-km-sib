const express = require('express');
const filmRouter = express.Router();
const filmController = require('../controllers/film.controller')

filmRouter.get('/api/films', filmController.getAllFilms);
filmRouter.get('/api/films/:id', filmController.getFilmById);
filmRouter.post('/api/films', filmController.createNewFilm)

module.exports = filmRouter
