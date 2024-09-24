/*
Crear un array bidimensional con 5 columnas y con 3 filas como las que aparecen abajo.
--*--
-***-
*****
*/

const tree = [
    ['-', '-', '*', '-', '-'],
    ['-', '*', '*', '*', '-'],
    ['*', '*', '*', '*', '*']
];
for (index = 0; index < tree.length; index++) {
    const row = tree[index];
    const rowString = row.join('');
    console.log(rowString);
}

let message = '';
for (let index = 0; index < tree.length; index++) {
    const row = tree[index];
    for (let columnIndex = 0; columnIndex < row.length; columnIndex++) {
        const column = row[columnIndex];
        message = message + column;
    }
    message = message + '\n';
}
console.log(message);

// for of
for (let row of tree) {
    for (let column of row) {
        message = message + column;
    }
    message = message + '\n';
}
console.log(message);

