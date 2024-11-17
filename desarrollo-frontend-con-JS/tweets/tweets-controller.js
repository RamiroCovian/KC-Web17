// nexo de unión entre el modelo y la vista

import { tweets } from "./tweets-model.js";
import { buildTweet } from "./tweets-view.js";


function showTweets() {
    
    const tweetsContainer = document.querySelector('#tweets-container')
    tweets.forEach(tweet => {
        const newTweet = buildTweet(tweet);
        tweetsContainer.appendChild(newTweet)
    });
}

const showTweetsButton = document.querySelector('#show-tweets-button')

showTweetsButton.addEventListener('click', showTweets);

showTweetsButton.addEventListener('click', (event) =>{
    showTweets();
});




// const showTweetsButton = document.querySelector('#show-tweets-button')
// showTweetsButton.getElementById('#show-tweets-button').addEventListener('click', (event)=> {
//     const tweetsContainer = document.querySelector('#tweets-container')
    
//     tweets.forEach(tweet => {
//         const newTweet = buildTweet(tweet);
//         tweetsContainer.appendChild(newTweet)
//     });
// });






// // seleccionar boton
// const btn = document.querySelector("#show-tweets");
// // agregar evento al boton
// btn.addEventListener("click", (e) => {
//     e.preventDefault();
//     // si se ejecuta el evento - imprimir tweets
//     tweets.forEach((tweet) => {
//         const newTweet = buildTweet(tweet);
//         tweetsContainer.appendChild(newTweet);
//     });
// });
