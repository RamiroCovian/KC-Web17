'use strict';

// El closure significa que la fn esta accediendo a algo que no esta en su contexto. ("nombre")
function creaVehiculo(nombre) {
    const numRuedas = 4;
    return {
        saluda: function () {
            console.log('Hola soy', nombre, 'y tengo', numRuedas, 'ruedas');

        }
    }
}

const seat = creaVehiculo('Seat Ibiza')
const opel = creaVehiculo('Opel Astra')



// seat.saluda();
setTimeout(seat.saluda, 2000);
setTimeout(opel.saluda, 2000);

