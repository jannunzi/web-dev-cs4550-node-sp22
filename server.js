const mongoose = require('mongoose');
const express = require('express');
const app = express();
mongoose.connect('mongodb://localhost:27017/cs4550-sp22');

const tuitsSchema = mongoose.Schema({
  tuit: String,
  likes: {type: Number, defaultValue: 0}
}, {collection: "tuits"});

const tuitsModel = mongoose.model("TuitsModel", tuitsSchema);

const findAllTuits = async () => {
  const tuits = await tuitsModel.find()
  console.log(tuits)
}

findAllTuits();

const cors = require('cors');


app.use(cors());
app.use(express.json());


const examples = require('./controllers/examples-controller');
examples(app);
const tuitsController = require("./controllers/tuits-controller")
tuitsController(app);

// app.get('/hello', (request, response) => {
//   response.send("Hello World");
// });

app.listen(4000);