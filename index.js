const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');

dotenv.config();

// Connect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
  try {
    console.log('connected to db!');
  } catch (err) {
    console.log(err);
  }
});

// Middlewares
app.use(express.json());

// Use Routes
app.use('/api/user', authRoutes);
app.use('/api/posts', postRoutes);

// Server Listening
app.listen('3000', () => console.log('Server Up and running!'));
