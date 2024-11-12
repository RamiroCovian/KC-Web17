import assert from 'node:assert'
import { query, validationResult } from 'express-validator'
import Agent from '../models/Agent.js'

// GET /
// export function index(req, res, next) {
//     const now = new Date()

//     res.locals.nombre = '<script>alert("inyeccion de codigo")</scrypt>' // variable local
//     res.locals.esPar = (now.getSeconds() % 2) === 0
//     res.locals.segundoActual = now.getSeconds()
//     // res.locals.users = [
//     //     {
//     //         name: 'Smith', age: 30
//     //     },
//     //     {
//     //         name: 'Brown', age: 42
//     //     },
//     // ]
//     res.locals.users = [
//         {
//             name: 'Smith', age: 30
//         },
//         {
//             name: 'Brown', age: 42
//         },
//     ]
//     res.render('Home')
// }
export async function index(req, res, next) {
    const now = new Date()
    const userId = req.session.userId

    res.locals.nombre = '<script>alert("inyeccion de codigo")</scrypt>' // variable local
    res.locals.esPar = (now.getSeconds() % 2) === 0
    res.locals.segundoActual = now.getSeconds()
    if (userId) {
        res.locals.agents = await Agent.find({ owner: userId }) // pedimos la lista de agentes a la db
        // console.log(req.session);
    }



    res.render('Home')
}
// GET /param_in_route/44
export function paramInRouteExample(req, res, next) {
    const num = req.params.num // asigno a una variable

    res.send('Received ' + num)
}

// GET /param_in_route_multiple/camiseta/size/37/color/red
export function paramInRouteMultipleExample(req, res, next) {
    const product = req.params.product // asigno a una variable
    const size = req.params.size
    const color = req.params.color

    res.send(`Received ${product} size ${size} color ${color}`)
}

// GET  /param_in_query?size=S&color=blue
export function paramInQueryExample(req, res, next) {
    const size = req.query.size // asigno a una variable
    const color = req.query.color

    res.send(`Received size ${size} color ${color}`)
}

// POST /create-example
export function createExample(req, res, next) {
    const item = req.body.item

    // Validation
    assert(item, 'Item is required')
    // if (!item) {
    //     next(createError(400))
    // }

    res.send('Received ' + item)
}

// GET /validate-query-example
export const validateQueryExampleValidations = [
    query('param1')
        .isLength({ min: 4 })
        .withMessage('Min 4 characters'),
    query('param2')
        .isNumeric()
        .withMessage('Must be a numeric'),
    query('param3')
        .custom(value => value === '42')
        .withMessage('must be 42')
]
export function validateQueryExample(req, res, next) {
    validationResult(req).throw()
    const param1 = req.query.param1
    const param2 = req.query.param2
    res.send(`Validated ${param1} ${param2}`)
}