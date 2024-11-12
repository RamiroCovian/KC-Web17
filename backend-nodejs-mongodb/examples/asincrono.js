'use strict';

function escribeTras2Segundos(texto, instruccionesParaDespues) {
    setTimeout(function () {
        console.log(texto);
        instruccionesParaDespues()
    }, 2000)
}

function serie(n, fn, callback) {
    if (n == 0) {
        // termio el bucle
        callback()
        return
    }
    n = n - 1
    fn('text' + n, function () {
        serie(n, fn, callback)
    })
}

serie(5, escribeTras2Segundos, function () {
    console.log('fin');

})


// escribeTras2Segundos('Hola', function () {
//     escribeTras2Segundos('Chau', function () {
//         console.log('Fin');
//     });
// });
