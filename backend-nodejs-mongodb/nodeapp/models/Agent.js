// Los modelos por convencion , se escriben Capitalice

// Esto seria lo mismo que los models en Flask

import mongoose, { Schema } from "mongoose";

// Definir el Schema de los Agentes
/*
El type: Buffer es para guardar datos no estructurados, como un pdf, sonido, etc etc
        Mixed: es para guardar cualquier cosa
        Objectid: los identificadores de documentos
        
*/

// Para definir un Schema puede ser tanto con new o sin new
const agentSchema = new Schema({
    name: { type: String, unique: true },
    age: { type: Number, min: 18, max: 150 },
    owner: { type: Schema.Types.ObjectId, ref: 'User' } // propietario
}, {
    // collection: 'agentes' // para forzar el nombre de la coleccion (tabla) y evitar pluralizacion
})

// Creamos el modelo de Agente
const Agent = mongoose.model('Agent', agentSchema)

export default Agent