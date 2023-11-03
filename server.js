// set up express
const express = require('express');
const app = express();
const port = 3500;

const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://williamslandon:LandonWilliams@tweets.0y3s327.mongodb.net/?retryWrites=true&w=majority'
// connect to the DB
mongoose.connect(mongoURI);

// check connection to DB
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

// Handle any DB connection errors
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});


// tweet schema
const tweetSchema = new mongoose.Schema({
  username: String,
  text: String
});

// create tweet model
const Tweet = mongoose.model("Tweet", tweetSchema);

// serve the files in public
app.use(express.static('public'));

// Parse JSON request body
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});