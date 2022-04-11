const moviesModel = require('./movies-model')

const likeMovie = async (movie) => {
  const existingMovie = await moviesModel.findOne({imdbID: movie.imdbID})
  if(existingMovie) {
    // update
    await moviesModel.updateOne({imdbID: movie.imdbID}, {
      $set: {likes: existingMovie.likes + 1}
    })
  } else {
    // insert
    try {
      await moviesModel.create({
        // title: movie.title,
        // imdbID: movie.imdbID,
        // poster: movie.poster,
        ...movie,
        likes: 1,
        dislikes: 0
      })
    } catch(e) {
      console.log(e)
    }
  }
}

const findMovieByImdbID = async (imdbID) => {
  const movie = await moviesModel.findOne({imdbID})
  return movie
}

module.exports = {
  likeMovie, findMovieByImdbID
}