const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001; 


app.use(cors());
app.use(bodyParser.json());

const users = [];

app.post('/register', (req, res) => {
  const { Name, email, number, password } = req.body;

  
  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Create a new user object
  const newUser = {
    Name,
    email,
    number,
    password,
  };

  // Push the new user to the database
  users.push(newUser);

  

  res.status(201).json({ message: 'Registration successful' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
