const mongoose = require('mongoose');
const express = require('express');
const session = require('express-session')
const app = express();

const DB_USERNAME = process.env.DB_USERNAME
const DB_PASSWORD = process.env.DB_PASSWORD
// mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.m8jeh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
mongoose.connect('mongodb://localhost:27017/cs4550-sp22');
//
// const tuitsSchema = mongoose.Schema({
//   tuit: String,
//   likes: {type: Number, defaultValue: 0}
// }, {collection: "tuits"});
//
// const tuitsModel = mongoose.model("TuitsModel", tuitsSchema);
//
// const findAllTuits = async () => {
//   const tuits = await tuitsModel.find()
//   console.log(tuits)
// }
//
// findAllTuits();

const cors = require('cors');
app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000'
}));
app.use(express.json());

const sess = {
  secret: 'keyboard cat', // TODO: move this to environment variable
  cookie: {}
}

if (app.get('env') === 'production') {
  app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies
}

app.use(session(sess))

const examples = require('./controllers/examples-controller');
examples(app);
const tuitsController = require("./controllers/tuits-controller")
tuitsController(app);
require("./controllers/users-controller")(app);
require("./controllers/test-controller")(app);
require("./controllers/movies-controller")(app);

// app.get('/hello', (request, response) => {
//   response.send("Hello World");
// });

app.listen(4000);