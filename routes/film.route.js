const express = require('express');
const filmRouter = express.Router();
const filmController = require('../controllers/film.controller')
const authMiddleware = require('../middleware/authentication.middleware');

filmRouter.use(authMiddleware);

filmRouter.get('/api/films', filmController.getAllFilms);
filmRouter.get('/api/films/:id', filmController.getFilmById);
filmRouter.post('/api/films', filmController.createNewFilm)
filmRouter.put('/api/films/:id', filmController.updateFilmById)
filmRouter.delete('/api/films/:id', filmController.deleteFilmById)

module.exports = filmRouter
