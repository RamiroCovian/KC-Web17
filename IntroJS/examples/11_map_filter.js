console.log('11');

const numbers = [20, 50, 75, 100];

let newList = []

for (let number of numbers) { // for (let index = 0; index < numbers.length; index++)
    newList.push(number * 2);
}

// console.log(newList);

//forEach
// numbers.forEach(function (number) {
//     console.log(number * 2);
// });

// map -> metodo de los arrays
/*
const newListWithMap = numbers.map(function (number, index) {
    console.log(number, 'index: ', index);
    return number * 2;
});
*/

// Map -> hace un mapeo de la lista
const newListWithMap = numbers.map(number => number * 2);
// console.log(newListWithMap);

// Filter -> ELIMINA ELEMENTOS DE NUESTRO ARRAY Y DEVUELVE 1 X 1
const filterList = numbers.filter(function (number) {
    console.log('Dentro del filter', number);
    return number <= 50;
});
console.log(filterList); // [20, 50]

const filterListV2 = numbers.filter(number => number <= 75);
console.log(filterListV2); // [20, 50, 75]

const books = [
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

/*
let books2000 = books.filter(function (book) {
    return book.year > 2000;
});
console.log(books2000);

books2000 - books2000.map(function (book) {
    return book.title;
});
console.log(books2000.join(', '))
*/

/*
let books2000 = books.filter(book => book.year > 2000);
console.log(books2000);

books2000 = books2000.map(book => book.title);
console.log(books2000.join(', '));
*/

const books2000 = books.filter(book => book.year > 2000)
    .map(({ title }) => title)
    .join(', ');
console.log(books2000);

// export
// export default


// MoureBrais

// Declaracion
let myMap = new Map();
console.log(myMap);

// Inicializacion
myMap = new Map([
    ['name', 'Brais'],
    ['email', 'braismoure@mouredev.com'],
    ['age', 37],
])
console.log(myMap);

// Metodos y propiesdades

// set
myMap.set('alias', 'mouredev')
myMap.set('name', 'Brais Moure')
console.log(myMap);

// get

console.log(myMap.get('name'));

// has
console.log(myMap.has('surname'));

