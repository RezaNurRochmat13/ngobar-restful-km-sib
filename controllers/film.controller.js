const models = require('../models');
const Film = models.Film;

const getAllFilms = async (request, response) => {
  const films = await Film.findAll();

  response.json({ data: films });
};

const getFilmById = async (request, response) => {
  const id = request.params.id;
  const film = await Film.findByPk(id);

  if (!film) return response.status(404)
                            .json({ message: 'Not found' })

  response.json({ data: film });
};

const createNewFilm = async (request, response) => {
  const film = await Film.create(request.body)

  response.status(201).json({ message: 'Film created successfully' })
};

module.exports = {
  createNewFilm,
  getAllFilms,
  getFilmById
}
