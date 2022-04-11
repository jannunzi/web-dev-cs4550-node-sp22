const moviesDao = require('../database/movies/movies-dao')

const likeMovie = async (req, res) => {
  const movie = req.body
  await moviesDao.likeMovie(movie)
  res.sendStatus(200)
}

const findMovieByImdbID = async (req, res) => {
  const imdbID = req.params.imdbID
  const movie = await moviesDao.findMovieByImdbID(imdbID)
  res.json(movie)
}

module.exports = (app) => {
  app.post('/api/likes', likeMovie)
  app.get('/api/movies/:imdbID', findMovieByImdbID)
}
