const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://williamslandon:1234@tweets.0y3s327.mongodb.net/?retryWrites=true&w=majority'

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
  } catch (err) {
    console.error(err);
  }
}

module.exports = connectDB
