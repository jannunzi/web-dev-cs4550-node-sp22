const tuitsModel = require('./tuits-model');

const findAllTuits = async () => {
  return await tuitsModel.find()
}

const createTuit = async (tuit) => {}
const deleteTuit = () => {}
const updateTuit = () => {}
