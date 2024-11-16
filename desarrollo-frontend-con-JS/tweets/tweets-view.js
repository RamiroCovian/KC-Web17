// cálculo del html que vamos a mostrar al usuario

export const buildTweet = (tweet) => {
  const newTweet = document.createElement('div');
  newTweet.innerHTML = `
        <span> Usuario: ${tweet.handler} </span>
        <span> Fecha: ${tweet.date} </span>
        <p> Mensaje: ${tweet.message} </p>
        <p> Me Gusta: ${tweet.likes} </p>
    `
  return newTweet;
}