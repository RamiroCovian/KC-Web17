'use strict';

const ingredientes = ['sal', 'pimienta', 'conejo', 'gambas'];

function echar(string) {
    return new Promise((resolve, reject) => {
        console.log('echo', string);
        resolve(string)
    })
}
// echar() recibe un string y retorna una promesa
// const promisedTexts = ingredientes.map(ingrediente => echar(ingrediente));
const promisedTexts = ingredientes.map(echar);

Promise.all(promisedTexts).then(result => {
    console.log(result);
})