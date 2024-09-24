console.log('08');


const firstProductName = 'T-shirt';
const firstProductPrice = 40;
const firstProductQuantity = 2;

const secondProductName = 'Cap';
const secondProductPrice = 35;
const secondProductQuantity = 2;

const firstProduct = {}; // objeto
// properties - propiedades
firstProduct.name = 'T-shirt';
firstProduct.price = 40;
firstProduct.quantity = 2;
firstProduct.available = false;
console.log(firstProduct);
console.log(typeof firstProduct);

const secondProduct = {
    name: secondProductName,
    price: secondProductPrice,
    quantity: secondProductQuantity,
    available: true,
    size: ['S', 'M', 'L'],
    countryStore: 'ES',
    'country-store': 'AR',
};

console.log(secondProduct.size[2]);
console.log(secondProduct.countryStore);
console.log(secondProduct['country-store']);
const key = 'name';
console.log(secondProduct[key]);

const getProductAttribute = (product, key) => {
    return product[key];
};
console.log(getProductAttribute(firstProduct, 'country-store'));
console.log(getProductAttribute(secondProduct, 'country-store'));

secondProduct.attributes = {
    color: 'red',
    material: 'cotton',
}
console.log(secondProduct.attributes.color);

console.log(Object.keys(secondProduct));

const products = [
    firstProduct,
    {
        name: 'shoes',
        price: 50,
    },
];

console.log(products[0].name)

const shows = [
    {
        id: 1,
        name: 'Under the dome',
        genres: ['Drama', 'Science-Fiction', 'Thriller']
    }, /// 0
    {
        id: 2,
        name: 'Game of thrones',
        genres: ['Drama', 'Thriller'],
        season: {
            title: 'season 1'
        },
    } /// 1
];

for (show of shows) {
    console.log(show.name);
};

delete secondProduct.attributes;
console.log(secondProduct);

let info = '';
for (let show of shows) {
    if (show.name !== 'Under the dome') {
        info = info + `
    <h2>Show: ${show.name}</h2>
    <p>Genres: ${show.genres.join(' | ')}</p>
    `;
    }
}
// mostrar por pantalla
document.write(info);
console.log(Object.values(firstProduct));
console.log(Object.entries(firstProduct));

// Problema con objects

const user = {
    email: 'test@test.com',
    address: {
        street: '123 main st',
        number: 12,
    }
};

// structuredClone
const user2 = structuredClone(user);
user2.email = 'test2@test.com';
user2.role = 'admin';
user2.address.street = 'Calle Keepcoding';
user2.address.number = 23;

console.log(user);
console.log(user2);

//...
// const user2 = { ...user };
// user2.email = 'test2@test.com';
// user2.role = 'admin';

// console.log(user);
// console.log(user2);

// JSON.parse(JSON.stringify)
// const user2 = JSON.parse(JSON.stringify(user));
// user2.email = 'test2@test.com';
// user2.role = 'admin';

// console.log(user);
// console.log(user2);



