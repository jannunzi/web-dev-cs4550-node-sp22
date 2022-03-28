const express = require('express');
const app = express();
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