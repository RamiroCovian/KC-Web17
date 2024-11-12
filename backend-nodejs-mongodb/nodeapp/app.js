// Este modulo sera el controlador de nuestra aplicacion
import express from 'express'
import createError from 'http-errors'
import logger from 'morgan'
// import { index } from './controllers/homeController.js'
// Para evitar confusiones el dia de manana con los "index" de otros controladores, lo voy a importar de la siguiente manera:
import connectMongoose from './lib/connectMongoose.js'
import * as sessionManager from './lib/sessionManager.js'
import * as homeController from './controllers/homeController.js'
import * as loginController from './controllers/loginController.js'
import * as agentsController from './controllers/agentsController.js'

await connectMongoose() // top level await
console.log('Conectado a MongoDB');

const app = express()

app.locals.appName = 'NodeApp' // Donde express guarda las variables que van a las vistas para toda la app (VARIABLE GLOBAL)

app.set('views', 'views') // Se utiliza para saber donde estan las vistas, views folder
app.set('view engine', 'ejs') // Se utiliza para saber que motor de plantillas vamos a utilizar

app.use(logger("dev"))
app.use(express.json()) // Parsear body que venga en formato JSON
app.use(express.urlencoded({ extended: true })) // Parsear el body que venga urlencode (Formularios)

// Servimos archivos estaticos
app.use('/pdfs', express.static('public')) // Si hacen una peticion a /pdfs, se devolvera el contenido del directorio public


/**
 * Application routes
*/
app.use(sessionManager.middleware, sessionManager.useSessionInViews)

// middleware: atiende las peticiones

// Public pages
app.get('/', homeController.index)
app.get('/login', loginController.index)
app.post('/login', loginController.postLogin)
app.all('/logout', loginController.logout)

// Private pages
app.get('/agents/new', sessionManager.guard, agentsController.index)
app.post('/agents/new', sessionManager.guard, agentsController.postNew)
app.get('/agents/delete/:agentId', sessionManager.guard, agentsController.deleteAgent)

// app.get('/user', (req, res, next) => {
//     console.log('peticion a /user')
//     next() // funcion para decir que ya termino con lo que hay aca en este middleware y que continue con el que sigue.
// })


app.get('/param_in_route/:num?', homeController.paramInRouteExample) // el signo ? le da la opcion de que puede obtener o no un parametro
app.get('/param_in_route_multiple/:product/size/:size([0-9]+)/color/:color', homeController.paramInRouteMultipleExample)
app.get('/param_in_query', homeController.paramInQueryExample)
app.post('/create-example', homeController.createExample)
app.get('/validate-query-example',
    homeController.validateQueryExampleValidations,
    homeController.validateQueryExample)

app.get('/user', (req, res, next) => {
    res.send('Hola usuario')
})

// catch 404 and forward to error handler
app.use((req, res, next) => {

    // const err = new Error('404')
    // err.status = 404
    // next(err) // de esta manera, pasandole err por parametro, siempre ira al error handler directamente. Siempre que haya algo como parametro, se supone que es un error.
    next(createError(404))
}) // utilizamos el metodo 'use' para usar el error handler para todas las peticiones, de esta manera nos evitamos de realizar un error handle para cada peticion ['get', 'put'.....]


// controlamos los errores en el browser => error handler
app.use((err, req, res, next) => {

    // Comprobar Validation errors
    if (err.array) {
        console.log(err.array())
        err.message = 'Invalid request: ' + err.array()
            .map(e => `${e.location} ${e.type} ${e.path} ${e.msg}`)
            .join(', ')
        err.status = 422
    }
    res.status(err.status || 500)
    // console.log(err) // muestro el error por consola
    // res.send('Ocurrio un error: ' + err.message) // manejo el error

    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = process.env.NODEAPP_ENV === 'development' ? err : {}

    //render error view
    res.render('error')
})

export default app