const moviesDao = require('../database/movies/movies-dao')

const likeMovie = async (req, res) => {
  let movie = req.body
  movie = await moviesDao.likeMovie(movie)
  res.json(movie)
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
