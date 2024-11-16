// nexo de unión entre el modelo y la vista

import { tweets } from "./tweets-model.js";
import { buildTweet } from "./tweets-view.js";

const tweetsContainer = document.querySelector('#tweets-container')

tweets.forEach(tweet => {
    const newTweet = buildTweet(tweet);
    tweetsContainer.appendChild(newTweet)
});