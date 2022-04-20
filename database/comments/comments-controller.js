const dao = require('./comments-dao')

const postComment = async (req, res) => {
  const comment = req.body
  const imdbID = req.params.imdbID
  const userId = req.params.userId
  const insertedComment = await dao.postComment(userId, imdbID, comment)
  res.json(insertedComment)
}

const findCommentsByImdbID = async (req, res) => {
  const imdbID = req.params.imdbID
  const comments = await dao.findCommentsByImdbID(imdbID)
  res.json(comments)
}

const findCommentsByUserId = async (req, res) => {
  const userId = req.params.userId
  const comments = await dao.findCommentsByUserId(userId)
  res.json(comments)
}

module.exports = (app) => {
  app.post('/movies/:imdbID/comments/:userId', postComment)
  app.get('/movies/:imdbID/comments', findCommentsByImdbID)
  app.get('/users/:userId/comments', findCommentsByUserId)
}