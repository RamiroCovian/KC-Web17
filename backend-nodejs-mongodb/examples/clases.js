'use strict';

class Mascota {
    constructor(nombre) {
        this.nombre = nombre;
    }
    saluda() {
        console.log(`Hola soy ${this.nombre}`);
    }
}

const kenai = new Mascota('Kenai');
kenai.saluda();

// Con clases solo se puede hacer Herencia simple , no multiple. Solo si se combina con la otra forma para realizar la herencia

class Perro extends Mascota {
    constructor(nombre) {
        super(nombre);
    }
}

let perro = new Perro('Ikki');
perro.saluda();