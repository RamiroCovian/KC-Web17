console.log('05');

// Funciones

function showMessage() {
    const discount = '50%';
    const message = `Oferta todo al ${discount}`;
    console.log(message);
}

function sumCapTshirtPrice() {
    const tshirtPrice = 10;
    const capPrice = 5;
    const total = tshirtPrice + capPrice;
    console.log(total);
}

const productAName = "T-shirt";
const productAPrice = 2;
const productAQuantity = 2;

const productBName = "Cap";
const productBPrice = 35;
const productBQuantity = 1;

const productCName = "Socks";
const productCPrice = 10;
const productCQuantity = 3;

// console.log(productTotalPrice)
// Funcion con parametros
// 1.Definicion
// 2.Parametros
// 3.Return
// function productTotalPrice(price, quantity) {
//     const total = price * quantity;
//     return total
// }

// arrow functions =>
/*    
const productTotalPrice = (price, quantity) => {
    const total = price * quantity;
    return total;
};
*/

const productTotalPrice = (price, quantity) => price * quantity;

const productASubtotal = productTotalPrice(productAPrice, productAQuantity);
const productBSubtotal = productTotalPrice(productBPrice, productBQuantity);
const productCSubtotal = productTotalPrice(productCPrice, productCQuantity);



