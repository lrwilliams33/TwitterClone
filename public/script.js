const postButton = document.querySelector('.post-button');
const submitButton = document.querySelector('.submit-button');
const textBar = document.querySelector('.text-bar');
const tweetsContainer = document.querySelector('.posts-div');
const usernameBar = document.querySelector('.username-text-bar');

let username = "Anonymous";
function getUsername() {
  // gets the text from the username input bar
  username = usernameBar.value.trim();
  usernameBar.value = '';

  if (username) {
    return username;
  }
  return "Anonymous";

}

function postTweet() {
  // gets the text from the text bar
  const tweetText = textBar.value.trim();

  if (tweetText) {
    // create the post div
    const postDiv = document.createElement('div');
    postDiv.classList.add('post-div');

    // create the username div
    const usernameDiv = document.createElement('div');
    usernameDiv.classList.add('user');
    usernameDiv.textContent = username;

    // create the tweet div
    const tweetDiv = document.createElement('div');
    tweetDiv.classList.add('post-text');
    tweetDiv.textContent = tweetText;

    // Append the new tweet to the container
    postDiv.appendChild(usernameDiv);
    postDiv.appendChild(tweetDiv);
    tweetsContainer.appendChild(postDiv);

    // reset the text bar
    textBar.value = '';
  }
}

// event listeners
submitButton.addEventListener('click', getUsername);
postButton.addEventListener('click', postTweet);
usernameBar.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    getUsername();
  }
});
textBar.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    postTweet();
  }
});
