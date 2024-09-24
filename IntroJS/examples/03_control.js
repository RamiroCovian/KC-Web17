console.log('03');

// Condicionales

const firstProductName = 'T-shirt';
const firstProductPrice = 35;
const firstProductQuantity = 2;

const secondProductName = 'Cap';
const secondProductQuantity = 2;
const secondProductPrice = 35;

// if | else | else if
let message = '';
if (firstProductPrice > secondProductPrice) {
    message = 'El primer producto es mas caro que el segundo producto.';
} else if (firstProductPrice === secondProductPrice) {
    message = `Los productos ${firstProductName} y ${secondProductName} tienen el mismo precio.`;
} else {
    message = 'El segundo producto es mas caro que el primer producto.';
}
// operador ternario

let message2 = '';
const sameNames = firstProductName === secondProductName
const samePrice = firstProductPrice === secondProductPrice
if (sameNames && samePrice) {
    message2 = 'Son el mismo producto';
} else {
    message2 = 'Son diferentes productos';
}

message2 = (sameNames && samePrice) ? 'Son el mismo producto' : 'Son diferentes producto';

console.log(message2);

const day = prompt('Dime un dia');
// switch case

switch (day) {
    case 'Monday':
        console.log('Hay clases Monday.');
        break;
    case 'Tuesday':
        console.log('Hay clases Tuesday.');
        break;
    default:
        console.log('No hay clases.');
        break;
}

if (day === 'Monday') {
    console.log('Hay clases Monday.');
} else if (day === 'Tuesday') {
    console.log('Hay clases Tuesday.');
} else {
    console.log('No hay clases.')
}