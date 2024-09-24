console.log('02');

const firstProductName = 'T-shirt';
const firstProductPrice = 15;
const firstProductQuantity = 2;

const secondProductName = 'Cap';
const secondProductQuantity = 2;
const secondProductPrice = 35;

const suma = firstProductPrice + secondProductPrice;
console.log(suma);

const totalFirstProduct = firstProductPrice * firstProductQuantity;
console.log(totalFirstProduct);

const totalSecondProduct = secondProductPrice * secondProductQuantity;
console.log(totalSecondProduct);

let total = totalFirstProduct + totalSecondProduct;
console.log(total);

const promo = 30;

total = total - promo;
console.log('total con promo');
console.log(total);

const message1 = 'Message 1';
const message2 = 'Message 2';
console.log(message1 + message2);
console.log(`${message1}${message2}`);

console.log('12' + '1'); // 121
console.log('12' - '1'); // 11
console.log('value 12' - '1'); //Nan -> Not a Number
console.log(true + true); // 2 -> true 1 | false 0
console.log(true + false);
console.log('12' + true); //12true
console.log('12' - true); // 11

const modulo = 4 % 2; // 0
console.log(modulo);
const modulo1 = 4 % 3; // 1
console.log(modulo1);

console.clear();

// Operadores de comparacion
// A == B   C != D
console.log('12' == '12'); // true
console.log('12' === '12'); // true

console.log('12' == 12); // true

// con el === se compara el valor y el tipo
console.log('12' === 12); // false

console.log('12' !== 12); // true
console.log(firstProductName === secondProductName); // false
console.log(firstProductPrice > secondProductPrice); // false
console.log(firstProductPrice >= secondProductPrice); // false

console.log(NaN);
console.log(typeof NaN); // Number
console.log(isNaN(NaN)); // true

let price = 12;
price = '$12';
price = null;
price = false;

// Operadores logicos
//AND y OR

console.log(firstProductPrice > secondProductPrice && firstProductQuantity === secondProductQuantity); // false && true -> false (AND)
console.log(firstProductPrice > secondProductPrice || firstProductQuantity === secondProductQuantity); // true || true -> true (OR)
console.clear()

let stock = null;
console.log(stock === null); // true
stock = true;
console.log(!stock); // false (El signo de admiracion niega el valor del booleano)

const sameString = 'a' === 'a'; // true
console.log(!sameString); // false


const thirdProductName = 'Pants', thisrdProductPrice = 55, thirdProductQuantity = 2;

console.log()