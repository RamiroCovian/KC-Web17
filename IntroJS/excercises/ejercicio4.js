/*
Paso 1: Crea un array vacío llamado "numeros"
Paso 2: Agrega los números del 1 al 5. Pon entre el número 3 y 4 la palabra keepcoding
Paso 3: Imprime el contenido del array "numeros" en la consola
Paso 4: detecta con código si dentro del array está la palabra keepcoding. Si está imprime el mensaje este array no solo tiene números
Paso 5: Agrega el número 10 al inicio del array "numeros"
Paso 6: Imprime el contenido del array "numeros" en la consola
Paso 7: Utiliza el método indexOf para encontrar el índice de la palabra keepcoding
Paso 8: Elimina la palabra keepcoding a partir del índice anterior
Paso 9: Imprime el contenido del array "numeros" en la consola
Paso 10: Imprime la longitud del array "numeros" en la consola
*/

let numbers = [];

numbers = [...numbers, 1, 2, 3, 'keepcoding', 4, 5];
console.log(numbers);

const findNotNumber = numbers.includes('keepcoding');
if (findNotNumber) {
    console.log('Este array no solo tiene numeros.')
};

numbers.unshift(10);
console.log(numbers);

const findKeepcodingIndex = numbers.indexOf('keepcoding');
console.log(findKeepcodingIndex);

numbers.splice(findKeepcodingIndex, 1);
console.log(numbers);

console.log(numbers.length);







