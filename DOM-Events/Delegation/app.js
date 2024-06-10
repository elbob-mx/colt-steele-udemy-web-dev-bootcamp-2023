const tweetForm = document.querySelector("#tweetForm");
const tweetsContainer = document.querySelector("#tweets");
tweetForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value);
    usernameInput.value = "";
    tweetInput.value = "";
});

const addTweet = (username, tweet) => {
    const newTweet = document.createElement("li");
    const bTag = document.createElement("b");
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(` - ${tweet}`);
    tweetsContainer.append(newTweet);
};

// target nodeName in uppercase Because nodeName returns an uppercase string, and uppercase letters are not equal to their lowercase counterparts.
tweetsContainer.addEventListener("click", function (e) {
    alert("you will erase this. click 'Accept'");
    e.target.nodeName === "LI" && e.target.remove();
});
