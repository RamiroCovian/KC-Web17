'use strict';

// async hace que una funcion devuelva una promesa!!!!!!!!!!!!
// await consume una promesa

function sleep(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(55); // Resuelve la promesa
            // reject('algo fue mal'); // Es para hacerlo fallar
        }, ms)
    })
}

async function main() {
    //await solo se puede usar en funciones async
    for (let i = 0; i < 5; i++) {
        const result = await sleep(2000)
        console.log('terminado con resultado:', result);
        if (i === 3) {
            throw new Error('Fallo en la tercera vuelta')
        }
    }
}
main().catch(err => console.log(err));

async function asincronoEnParalelo() {
    const promesa2 = sleep(5000)
    const promesa3 = sleep(7000)
    const promesa4 = sleep(10000)
    Promise.all([promesa2, promesa3, promesa4]).then(() => {
        console.log('Terminado');

    })
    // const promesa2 = readFile('pepe.txt')
    // const promesa3 = facebookRequest('/api/friends/55')
    // const promesa4 = getUserFromDatabase(55)
    // const result = await Promise.all([promesa, promesa2, promesa3, promesa4]);
}
asincronoEnParalelo();