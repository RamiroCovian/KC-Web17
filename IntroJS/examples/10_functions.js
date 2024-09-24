console.log('10');

const suma = (valor1, valor2) => {
    const op = valor1 + valor2;
    return op;
};

const result = suma(1, 2);

// Cierres
const counter = () => {
    let count = 0;

    const increment = () => {
        count++; // count = count + 1
    };

    const getCount = () => {
        return count;
    };

    return {
        increment: increment,
        count: getCount,
    };
};

const jugador1 = counter(); // {}
jugador1.increment();
jugador1.increment();
console.log(jugador1.count()); // 2

const jugador2 = counter();
console.log(jugador2.count());

const products = [
    { id: 'p001', name: 'T-shirt', price: 20, quantity: 2 },
    { id: 'p002', name: 'Cap', price: 5, quantity: 3 },
    { id: 'p003', name: 'Pants', price: 50, quantity: 1 },
];


const cart = () => {
    let products = [];

    const addProduct = ({ name, price, quantity }) => {
        /*
        products.push({
            name,
            price,
            quantity,
        });
        */
        products = [...products, {
            name,
            price,
            quantity
        }];
    };

    const getProducts = () => {
        return products;
    };

    return {
        addProduct,
        getProducts,
    };
}

const shoppingBag1 = cart();
shoppingBag1.addProduct(products[0]);

const shoppingBag2 = cart();
shoppingBag2.addProduct(products[1]);
shoppingBag2.addProduct(products[2]);

console.log(shoppingBag1.getProducts());
console.log(shoppingBag2.getProducts());


//suma | resta
const operations = (num1, num2, operation) => {
    if (operation === 'resta') {
        return num1 - num2;
    } else if (operation === 'suma') {
        return num1 + num2;
    }
};

const resta = (num1, num2) => num1 - num2;


operations(1, 2, 'resta');

const operationsV2 = (num1, num2, operationFn) => {
    return operationFn(num1, num2);
};

console.log(operationsV2(2, 3, resta));
console.log(operationsV2(2, 3, suma));

