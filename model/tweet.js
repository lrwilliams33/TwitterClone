const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tweetSchema = new Schema({
  username: {
    type: String,
    default: "Anonymous",
  },
  text: {
    type: String,
    default: ""
  }
});

module.exports = mongoose.model('Tweet', tweetSchema);