'use strict';

const modulo = require('./calculadora')
const { suma } = require('./calculadora')

console.log(modulo);
console.log(modulo.suma(2, 6));
console.log(modulo.nombre);
modulo.nombre = 'sharp'

console.log(suma(4, 5))
console.log(__filename)
console.log(__dirname)
console.log(suma(4, 5))




