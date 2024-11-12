/* Datos iniciales para cuando se despliege por primera vez la app */
import readline from 'node:readline' // libreria para interactuar con flujo de datos de texto
import connectMongoose from './lib/connectMongoose.js'
import Agent from './models/Agent.js'
import User from './models/User.js'


// Creo la coneccion con la Db
const connection = await connectMongoose()
console.log('Connected to MongoDB:', connection.name)

const questionResponse = await ask('Are you sure you want empty the database and create initial data?')
if (questionResponse.toLowerCase() !== 'yes') {
    console.log('Operation aborted.');
    process.exit();

}
await initUsers()
await initAgents()

connection.close() // cierro coneccion

async function initAgents() {
    // Delete all agents
    const deleteResult = await Agent.deleteMany()
    console.log(`Deleted ${deleteResult.deletedCount} agents.`);

    const [admin, user1] = await Promise.all([
        User.findOne({ email: 'admin@example.com' }),
        User.findOne({ email: 'user1@example.com' })

    ])

    // Create initial agents
    const insertResult = await Agent.insertMany([
        { name: 'Smith', age: 41, owner: admin._id },
        { name: 'Brown', age: 32, owner: admin._id },
        { name: 'Jones', age: 26, owner: user1._id },
    ])
    console.log(`Created ${insertResult.length} agents.`);
}

async function initUsers() {
    // Delete all users
    const deleteResult = await User.deleteMany()
    console.log(`Deleted ${deleteResult.deletedCount} users.`);

    // Create initial users
    const insertResult = await User.insertMany([
        { email: 'admin@example.com', password: await User.hashPassword('1234') },
        { email: 'user1@example.com', password: await User.hashPassword('1234') },
    ])
    console.log(`Created ${insertResult.length} users.`);
}

// Funcion para interactuar con la consola, hay librerias de todas formas
function ask(questionText) {
    return new Promise((resolve, reject) => {
        const consoleInterface = readline.createInterface({
            input: process.stdin, // Toma los datos escritos en consola 
            output: process.stdout // Devuelve los datos a la consola
        })
        consoleInterface.question(questionText, (answer) => {
            consoleInterface.close() // Cierro la consola
            resolve(answer)
        })
    })
}