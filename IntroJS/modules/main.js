// 1 para cuando es export default
// ESModules
import calculadora, { defaultValue, test } from './utils.js';

// 2 para cuando es export 

// const calculadora = require('./utils.js')
const count1 = calculadora();
count1.sumar(defaultValue)
count1.dividir(2)
console.log(count1.total());
console.log(test)