const loggedIn = (req, res) => {
  res.sendStatus(200)
}

module.exports = (app) => {
  app.get('/logged-in', loggedIn)
}