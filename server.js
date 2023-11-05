// set up express
const express = require('express');
const app = express();
const port = 3500;

// import create tweet functions
const TweetFunctions = require('./controller/tweetController')

// import db file
const connectDB = require('./config/dbConn');
const { default: mongoose } = require('mongoose');

//connect to DB using function in dbConn file
connectDB();


// serve the files in public
app.use(express.static('public'));

// Parse JSON request body
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/', TweetFunctions.createNewTweet);

// connect to db
mongoose.connection.once('connected', () => {
  console.log('Connected to MongoDB');
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});

// Handle any DB connection errors
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});