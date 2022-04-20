const commentModel = require('./comments-model')

const postComment = async (userId, imdbID, comment) => {
  comment.commenter = userId
  comment.imdbID = imdbID
  const actualComment = await commentModel.create(comment)
  return actualComment
}

const findCommentsByImdbID = (imdbID) =>
  commentModel.find({imdbID})

const findCommentsByUserId = (userId) =>
  commentModel.find({commenter: userId})

module.exports = {
  postComment, findCommentsByImdbID, findCommentsByUserId
}