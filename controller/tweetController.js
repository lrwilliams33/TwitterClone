const Tweet = require('../model/tweet');

// returns all the tweets
const getAllTweets = async (req, res) => {
  const tweets = await Tweet.find();
  if (!Tweet) return res.status(204).json({'message': 'No tweets yet.'});
  res.json(tweets);
}

// create new tweet
const createNewTweet = async (req, res) => {
  if (!req?.body?.username || !req?.body?.text) { // catch instance if there is no username or text given
    return res.status(400).json({'message': 'username and text required'});
  }

  try {
    const result = await Tweet.create({
      username: req.body.username,
      text: req.body.text
    });

    res.status(201).json(result);
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  getAllTweets,
  createNewTweet
}