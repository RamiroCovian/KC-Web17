console.log('09');

const twilight = { title: 'Twilight', author: 'Stephenie Meyer', year: 2005 };
console.log(twilight.title);

// En un objeto debes llamar a la propiedad
const { title } = { title: 'Twilight', author: 'Stephenie Meyer', year: 2005 };
console.log(title);


// En los array debes llamar como variable
const [firstBook, secondBook] = [
    { title: '1984', author: 'George Orwell', year: 1949 },
    {
        title: 'One Hundred Years of Solitude',
        author: 'Gabriel García Márquez',
        year: 1967,
    },
    {
        title: "Harry Potter and the Philosopher's Stone",
        author: 'J.K. Rowling',
        year: 1997,
    },
    { title: 'The Da Vinci Code', author: 'Dan Brown', year: 2003 },
    { title: 'Twilight', author: 'Stephenie Meyer', year: 2005 },
    { title: 'The Hunger Games', author: 'Suzanne Collins', year: 2008 },
];

console.log(firstBook);
console.log(secondBook);

// const getTheTittle = (books) => {
//     let result = [];
//     for (let { year, title } of books) { // element = { title: '1984', author: 'George Orwell', year: 1949 }
//         if (year > 2000) {
//             result.push(title);
//         }
//     }
//     return result
// };

// console.log(getTheTittle(books))

const csvProduct = 'T-shirt,10,Amazon\nCap,5,Google\nPants,15,Amazon\nShoes,20,Google';
const processCSV = (csv) => {
    const products = [];
    const lines = csv.split('\n'); // ['T-shirt, 10, Amazon', 'Cap,5,Google' , 'Pants,15,Amazon', 'Shoes,20,Google']
    for (let line of lines) {
        const [name, price, store] = line.split(','); // ['T-shirt', '10', 'Amazon']
        products.push({
            name, // name: name,
            price: parseInt(price),
            store: store
        });
    }
    return products
};

const product = processCSV(csvProduct);
console.log(product);

const infoGeneral = {
    bootcamp: 'Keepcoding',
};

let module1 = {
    name: 'JS',
};
module1 = { ...module1, ...infoGeneral };
console.log(module1);

let module2 = {
    ...infoGeneral,
    name: 'HTML'

};
console.log(module2);