console.log('06');

const myProducts = ['Tv', 'PC', 'Cap'];
console.log(myProducts);
// modificar la lista, anadir, eliminarn modificar y concatenar

myProducts.push('Shoe'); // anade elementos a la lista
console.log(myProducts);
myProducts.unshift('Perro'); // anade elementos al principio de la lista
console.log(myProducts);

// Ver como acceder a los elementos de las listas

console.log(myProducts[0]);
const thirdProduct = myProducts[3] // 'Cap'
console.log(thirdProduct.trim() === 'Cap'); // true

// hacer validaciones en la lista. si tenemos algun elemento
myProducts.pop();
console.log(myProducts); // Elimina el ultimo elemento

myProducts[2] = 'PC - out of stock';
console.log(myProducts); // Modificar un elemento

myProducts.indexOf('Laptop');
console.log(myProducts.indexOf('Laptop')); // -1 porque no lo detecta
console.log(myProducts.reverse());

// hacer copias de las listas

console.log(typeof myProducts);

const user2Products = [...myProducts]; // spread operator
const user3Products = [].concat(myProducts);
user2Products.push('Pants');
console.log(user2Products);
console.log(myProducts);

const addProduct = (list, newProduct) => {
    const newList = [...list];
    newList.push(newProduct);
    return newList;
};
const copyProducts = addProduct(myProducts, 'Laptop');
console.log(copyProducts);
console.log(myProducts);
console.log(copyProducts.indexOf('Laptop')); // 4
console.log(copyProducts.includes('Laptop')); // true

// convertir listas a otro tipo (string)
const csvProducts = 'T-shirt;pants;shoes;cap';
const products = csvProducts.split(';'); // ['T-shirt, 'pants', 'shoes', 'cap']
console.log('CSV: ', products)

const shoesIndex = products.indexOf('shoes'); // 2
console.log(shoesIndex);
// products.splice(0, 2); // desde el elemento 0 y elimina 2 elementos
products.splice(shoesIndex, 1); // Elimina a partir de 'shoes' , 1 solo elemento
console.log(products); // ['T-shirt, 'pants', 'cap']

const newCsvProduct = products.join('/'); // T-shirt/pants/cap
console.log(newCsvProduct);
// arrays de arrays
// map, filter, find, reduce. some, every
