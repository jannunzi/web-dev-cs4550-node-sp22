const mongoose = require('mongoose')
const commentsSchema = mongoose.Schema({
  comment: String,
  imdbID: String,
  commenterEmail: String,
  commenter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserModel'}
}, {collection: 'comments'})

module.exports = commentsSchema