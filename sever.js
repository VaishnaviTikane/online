
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});

app.get('/signup', (req, res) => {
  res.sendFile(__dirname + '/signup.html');
});

app.post('/login', (req, res) => {
  // Placeholder for login functionality
  res.send('Login functionality will be implemented here.');
});

app.post('/signup', (req, res) => {
  // Placeholder for signup functionality
  res.send('Sign Up functionality will be implemented here.');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
