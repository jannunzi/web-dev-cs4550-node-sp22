let tuits = require("./tuits.json");

const findAllTuits = (req, res) => {
  res.json(tuits);
}
const createTuit = (req, res) => {
  const newTuit = req.body;
  newTuit['_id'] = (new Date()).getTime()+'';
  tuits = [
    newTuit,
    ...tuits
  ];
  res.json(tuits);
}
const deleteTuit = (req, res) => {
  const tuitId = req.params['tid'];
  tuits = tuits.filter(t => t._id !== tuitId);
  res.json(tuits);
}
const likeTuit = (req, res) => {
  const tuitId = req.params['tid'];
  tuits = tuits.map(t => {
    if (t._id === tuitId) {
      return {
        ...t,
        likes: t.likes + 1
      };
    } else {
      return t;
    }
  })
  res.json(tuits);
}

const unlikeTuit = (req, res) => {
  const tuitId = req.params['tid'];
  tuits = tuits.map(t => {
    if (t._id === tuitId) {
      return {
        ...t,
        likes: t.likes - 1
      };
    } else {
      return t;
    }
  })
  res.json(tuits);
}

const updateTuit = (req, res) => {
  const tuitId = req.params['tid'];
  const tuit = req.body;
  tuits = tuits.map(t => {
    if (t._id === tuitId) {
      return tuit;
    } else {
      return t;
    }
  })
  res.json(tuits);
}


const tuitsController = (app) => {
  app.get('/api/tuits', findAllTuits);
  app.post('/api/tuits', createTuit);
  app.delete('/api/tuits/:tid', deleteTuit);
  app.put('/api/tuits/:tid/like', likeTuit);
  app.put('/api/tuits/:tid/unlike', unlikeTuit);
  app.put('/api/tuits/:tid', updateTuit);
}

module.exports = tuitsController;