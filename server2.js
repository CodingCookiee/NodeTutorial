import { createServer } from 'http';

const Port = process.env.PORT || 3000;

const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jim Doe' },
  { id: 3, name: 'Jane Doe' },
];

// Logger middleware
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url} - ${req.headers['user-agent']}`);
  next();
};

// JSON middleware
const jsonMiddleware = (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  next();
};

// Route Handler for GET /api/users
const getUsersHandler = (req, res) => {
  res.write(JSON.stringify(users));
  res.end();
};

// Route Handler for GET /api/users/id
const getUserByIdHandler = (req, res) => {
  const id = req.url.split('/')[3];
  const user = users.find((user) => user.id === parseInt(id, 10));
  if (user) {
    res.write(JSON.stringify(user));
  } else {
    res.statusCode = 404;
    res.write(JSON.stringify({ message: 'User not found' }));
  }
  res.end();
};
// Route handler for POST /api/users
const createUserHandler = (req, res) => {
  let body = '';
  req.on('data', (chunk) => {
    body += chunk.toString();
  });
  req.on('end', () => {
    const newUser = JSON.parse(body);
    users.push(newUser);
    res.statusCode = 201;
    res.write(JSON.stringify(newUser));
    res.end();
  });
};

// Not Found handler
const notFoundHandler = (req, res) => {
  res.statusCode = 404;
  res.write(JSON.stringify({ message: 'Route not found' }));
  res.end();
};

const server = createServer((req, res) => {
  const next = () => {
    if (req.url === '/api/users' && req.method === 'GET') {
      getUsersHandler(req, res);
    } else if (
      req.url.match(/\/api\/users\/([0-9]+)/) &&
      req.method === 'GET'
    ) {
      getUserByIdHandler(req, res);
    } else if (req.url === '/api/users' && req.method === 'POST') {
      createUserHandler(req, res);
    } else {
      notFoundHandler(req, res);
    }
  };

  logger(req, res, () => {
    jsonMiddleware(req, res, next);
  });
});

server.listen(Port, () => {
  console.log(`Server running on port: ${Port}`);
});
