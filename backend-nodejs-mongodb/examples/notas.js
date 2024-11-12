// convierto un objeto a string

const empleado = {
    nombre: 'Thomas Anderson',
    profesion: 'Developer'
};

JSON.stringify(empleado);

// Produce un string
'{"nombre":"Thomas Anderson", "profesion":"Developer"}'

// Inversa

const textoJSON = '{"nombre":"Thomas Anderson", "profesion":"Developer"}';

JSON.parse(textoJSON);

// Produce un objeto
Objecto = { nombre: 'Thomas Anderson', profesion: 'Developer' };

// Express es un framework web mas utilizado