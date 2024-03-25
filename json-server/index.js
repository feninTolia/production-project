const { readFileSync } = require('fs');
const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

// for request latency simulation
server.use(async (req, res, next) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 800);
  });
  next();
});

// check if user "authorized"
server.use((req, res, next) => {
  if (!req.headers.authorization) {
    console.log('no auth');
    return res.status(403).json({ message: 'AUTH ERROR' });
  }
  next();
});

server.use(jsonServer.defaults());
server.use(router);

// login endpoint
server.post('/login', (req, res) => {
  res.json('in login');
  const { username, password } = req.body;

  const db = JSON.parse(
    readFileSync(path.resolve(__dirname, 'db.json'), {
      encoding: 'utf-8',
    })
  );
  const { users } = db;
  const userFromDb = users.find(
    (user) => user.username === username && user.password === password
  );

  if (userFromDb) {
    return res.json(userFromDb);
  }

  return res.status(403).json({ message: 'AUTH ERROR' });
});

server.listen(8000, () => {
  console.log('server is running on 8000 port');
});
