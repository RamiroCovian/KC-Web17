'use strict';

// Una function que devuelve una promesa
/* Una promise se crea pasandole una funcion
con resolve y reject como parametros 
y dentro de esa funcion se debe llamar a uno 
de estos para resolver o captar un error */

function sleep(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(55); // Resuelve la promesa
            // reject('algo fue mal'); // Es para hacerlo fallar
        }, ms)
    })
}

const promesa = sleep(2000)
console.log(promesa);
// .then y .catch se pueden encadenar porque devuelven una promesa.
// cuando se cumpla (por eso utilizamos el metodo then)
promesa.then((dato) => { // .then solo se ejecuta con promesas completadas satisfactoriamente
    console.log('han pasado 2 segundos con dato:', dato);
    // throw new Error('FATAL')
    return sleep(2000)
}).catch(err => {
    /* Intercalando catch donde nos interese, 
    podemos captar el error pero continua el proceso, 
    poniendolo solo al final, 
    capta el error y termina el proceso */
    console.log('Hubo un error en el primer then:', err);
}).then(() => {
    console.log('han pasado otros 2 segundos')
    return sleep(2000)
}).then(() => {
    console.log('han pasado otros 2 segundos')
}).catch(err => { // Con catch obtengo los errores // .catch se ejecuta con promesas rechazadas
    console.log('Hubo un error:', err);
})
const promesa2 = sleep(5000)
const promesa3 = sleep(7000)
const promesa4 = sleep(10000)

Promise.all([promesa, promesa2, promesa3, promesa4]).then(() => {
    /**
     * De esta forma las promesas se realizan en paralelo,
     * por ende el tiempo que se va ejecutar es el mas prolongado (promesa4).
     * 
     */
    console.log('todas las promesas se han cumplido')
})

// const promesa2 = readFile('pepe.txt')
// const promesa3 = facebookRequest('/api/friends/55')
// const promesa4 = getUserFromDatabase(55)
// // De esta manera puedo realizar en paralelo las tres peticiones, y devuelve los resultados en simultaneo.
// Promise.all([promesa, promesa2, promesa3, promesa4]).then(([fileContent, requestResult, user]) => {
//     console.log('todas las promesas se han cumplido')
// })


