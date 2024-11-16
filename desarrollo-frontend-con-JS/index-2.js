
const tweets = [{
  handler: '@usuario1',
  date: new Date().toISOString(),
  message: 'Eligendi fugiat veniam a neque omnis doloribus sequi porro expedita ullam excepturi.',
  likes: 40,
},
{
  handler: '@usuario2',
  date: new Date().toISOString(),
  message: 'Laborum ad animi officia dolore nisi necessitatibus a porro! Odit!',
  likes: 3,
},
{
  handler: '@usuario3',
  date: new Date().toISOString(),
  message: 'Ayer estuve en le parque y me lo pasé genial',
  likes: 34,
},
{
  handler: '@usuario4',
  date: new Date().toISOString(),
  message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  likes: 400,
}];

const drawTweets = () => {
  // // Mapeo los datos de los tweets
  // const tweetElements = tweets.map(tweet => {
  //   // Creo elemento nuevo donde alojar los tweets
  //   const newTweet = document.createElement('div');
  //   // Relleno el elemento con innerHtml con su contenido
  //   newTweet.innerHTML = `
  //     <span> Usuario: ${tweet.handler} </span>
  //     <span> Fecha: ${tweet.date} </span>
  //     <p> Mensaje: ${tweet.message} </p>
  //     <p> Me Gusta: ${tweet.likes} </p>
  // `;
  //   return newTweet; // Retorno el nuevo tweet
  // });

  // const tweetsContainer = document.querySelector('.tweets-container')
  // tweetElements.forEach(newTweet => {
  //   tweetsContainer.appendChild(newTweet);
  // })


  // const tweetsContainer = document.querySelector('.tweets-container') // si el div tiene class
  const tweetsContainer = document.querySelector('#tweets-container') // si el div tiene ID
  // Recorrer array de tweets
  tweets.forEach(tweet => {
    // 2. Mostrar cada tweet en pantalla
    // 2.1 Crear un div e incluir todo el contenido del tweet
    const newTweet = document.createElement('div');
    newTweet.innerHTML = `
        <span> Usuario: ${tweet.handler} </span>
        <span> Fecha: ${tweet.date} </span>
        <p> Mensaje: ${tweet.message} </p>
        <p> Me Gusta: ${tweet.likes} </p>
    `
    // 2.2 Incluir el div en el DOM
    tweetsContainer.appendChild(newTweet)
  })

}

drawTweets();
