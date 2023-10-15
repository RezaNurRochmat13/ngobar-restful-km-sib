const models = require('../models');
const Film = models.Film;

const getAllFilms = async (request, response) => {
  const { page, size } = request.query;

  const films = await Film.findAll({
    limit: size,
    offset: (page - 1) * size
  });

  const filmCount = await Film.count();

  response.json({ data: films, meta: {
    page: page,
    currentPage: page,
    total: filmCount,
    count: films.length
  } });
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

const updateFilmById = async (request, response) => {
  const id = request.params.id;
  const film = await Film.findByPk(id);

  if (!film) return response.status(404)
                            .json({ message: 'Not found' })
  await Film.update(request.body, {where: { id: id }})

  response.json({ message: 'Film update successfully' });
};

const deleteFilmById = async (request, response) => {
  const id = request.params.id;
  const film = await Film.findByPk(id);

  if (!film) return response.status(404)
                            .json({ message: 'Not found' })
  await film.destroy();

  response.json({ message: 'Film deleted successfully' });
};

module.exports = {
  createNewFilm,
  deleteFilmById,
  getAllFilms,
  getFilmById,
  updateFilmById
}
