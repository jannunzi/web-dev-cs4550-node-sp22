const mongoose = require('mongoose')
const usersSchema = mongoose.Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  firstName: String,
  lastName: String
}, {collection: "users"})
module.exports = usersSchema