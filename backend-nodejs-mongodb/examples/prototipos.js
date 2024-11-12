'use strict';

function Persona(nombre) {
    this.nombre = nombre;
    // this.saluda = function () {
    //     console.log('Hola soy', this.nombre);
    // }
}

Persona.prototype.saluda = function () { console.log('Hola soy', this.nombre); }
Persona.prototype.adios = function () { console.log('Chau soy', this.nombre); }

const pepe = new Persona('Pepe');
const luis = new Persona('Luis');

luis.saluda = function () {
    //funcion para cambiar el saludo
}

pepe.saluda();
pepe.adios();

console.log(Persona.prototype);

//  Herencia simple

// Quiero hacer un tipo de Objetos llamado Agente que herede de Persona

function Agente(nombre) {
    // Heredar el constructor de las personas
    // ejecutar el constructor de las personas, pero con mi "this"
    Persona.call(this, nombre); // Esto es Super llamando a la herencia
    // Agregar propiedades propias de Agente
}

// Heredar las propiedades del prototipo de las personas
Object.setPrototypeOf(Agente.prototype, Persona.prototype)


const smith = new Agente('Smith')
smith.saluda();
smith.adios();

// Herencia multiple

// Quiero que los Agentes hereden tanto de las personas como de los superheroes

function Superheroe() {
    this.vuela = function () {
        console.log(this.nombre, 'vuela');
    }
}

// Copiar todas las propiedades de los Superheroes
Object.assign(Agente.prototype, new Superheroe())

smith.vuela();

console.log(smith);
console.log(Agente.prototype);
console.log(smith instanceof Agente);
console.log(smith instanceof Persona);
console.log(smith instanceof Superheroe);





