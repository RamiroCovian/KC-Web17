console.log('07');

const products = ['Cap', 'T-shirt', 'Shoes'];

const productMessage = (productTitle) => {
    console.log(`Producto ${productTitle}`);
};

/*
productMessage(product[0]);
productMessage(product[1]);
productMessage(product[2]);
*/

// while, do-while, for
// for (index)
//                              index = index + 1
for (let index = 0; index < 10; index++) {
    // code
    console.log('Dentro del loop');
}

for (let index = 3; index > 0; index--) {
    // code
    console.log('Dentro del loop');
}

for (let index = 0; index < products.length; index++) {
    console.log(index);
}
console.log('End script')