import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err);
    process.exit(1);
  } else {
    console.log('Connected to MySQL.');
  }
});

// Signup Endpoint
app.post('/api/signup', (req, res) => {
  const { name, email, password } = req.body;

  // Use SHA2 for hashing the password before storing it
  const query = `INSERT INTO users (name, email, password) VALUES (?, ?, SHA2(?, 256))`;

  db.query(query, [name, email, password], (err) => {
    if (err) {
      console.error('Error creating account:', err);
      res.status(500).json({ message: 'Error creating account' });
    } else {
      res.status(201).json({ message: 'Account created' });
    }
  });
});

// Login Endpoint
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // Use SHA2 for hashing the input password and compare with stored hash
  const query = `SELECT * FROM users WHERE email = ? AND password = SHA2(?, 256)`;

  db.query(query, [email, password], (err, results) => {
    if (err || results.length === 0) {
      res.status(401).json({ message: 'Invalid credentials' });
    } else {
      res.status(200).json({ token: 'dummy-token' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
