function suma(a, b, callback) {
    const resultado = a + b
    callback(resultado)
}

suma(3, 4, function (resultado) { console.log('Sumado! son', resultado) });

// en python serian los threads