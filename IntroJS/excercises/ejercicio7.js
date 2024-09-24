/*
Ejericio Calculadora con closures

Crear una calculadora con las siguientes funciones:

const miCalculadora = calculadora();

console.log(miCalculadora.sumar(5)); // Debería imprimir undefined
console.log(miCalculadora.restar(2)); // Debería imprimir undefined
console.log(miCalculadora.multiplicar(4)); // Debería imprimir undefined
console.log(miCalculadora.dividir(2)); // Debería imprimir undefined
console.log(miCalculadora.sumar(10)); // Debería imprimir undefined
console.log(miCalculadora.total()); // Debería imprimir 16
*/


const calculadora = () => {
    let count = 0;

    const sumar = (valor) => {
        count += valor;
    };

    const restar = (valor) => {
        count -= valor;
    };

    const multiplicar = (valor) => {
        count *= valor;
    };

    const dividir = (valor) => {
        if (valor === 0) {
            return ('No se puede dividir por cero');
        } else {
            count /= valor;
        };
    };

    const total = () => {
        return count;
    };

    return {
        sumar,
        restar,
        multiplicar,
        dividir,
        total,
    };
};

const miCalculadora = calculadora();

console.log(miCalculadora.sumar(5)); // Debería imprimir undefined
console.log(miCalculadora.restar(2)); // Debería imprimir undefined
console.log(miCalculadora.multiplicar(4)); // Debería imprimir undefined
console.log(miCalculadora.dividir(2)); // Debería imprimir undefined
console.log(miCalculadora.sumar(10)); // Debería imprimir undefined
console.log(miCalculadora.total()); // Debería imprimir 16




