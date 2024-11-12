// Este modulo va a arrancar nuestra app
import http from 'node:http'
import debugLib from 'debug'
import app from './app.js'

const debug = debugLib('nodeapp:server')
const port = process.env.port || 3000


// Create http server
const server = http.createServer(app)

server.on('error', err => console.error(err)) // Esta suscripcion es para que me escriba los errores por consola
server.on('listening', () => {
    debug(`Servidor arrancado en puerto ${port}`);
})

server.listen(port)