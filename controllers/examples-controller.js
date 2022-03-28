
const examplesController = (app) => {

  const register = (req, res) => {
    const alice = req.body;
    res.json(alice);
    //console.log(req.body)
  }
  const login = (req, res) => {

  }

  app.post("/api/register", register)
  app.post("/api/login", login)


  const sum = (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const c = a + b;
    res.send(`a + b = ${c}`)
  }
// http://localhost:3000/sum?a=2&b=3
  app.get("/sum", sum);

  const add = (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    const c = a + b;
    res.send(`a + b = ${c}`)
  }
// http://localhost:3000/add/2/3
  app.get("/add/:a/:b", add);

  const sayMessage = (req, res) => {
    const message = req.params.message;
    res.send(`This is your message: ${message}`);
  }
  app.get("/say/:message", sayMessage);

  const getObject = (req, res) => {
    const object = {some: "object"};
    res.json(object);
  }

  const getString = (req, res) => {
    res.send("Some String")
  }

  app.get("/get/some/object", getObject);
  app.get("/get/some/string", getString);
  app.get('/hello', (request, response) => {
    response.send("Hello World. Life is good!!");
  });
}

module.exports = examplesController;