// vemos la config de las sessiones
import session from 'express-session'
import MongoStore from 'connect-mongo'

const INACTIVITY_EXPIRATION_2_DAYS = 1000 * 60 * 60 * 24 * 2

// middleware para gestionar sessiones
export const middleware = session({
    name: 'nodeapp-session',
    secret: 'sNxcSEtDBdqLWkAv79H5mX', // clave random de strong password generator
    saveUninitialized: true, // fuerza a q una session se guarde en el store aunque no este inicializada,
    resave: false, // se guarde aunque no se haya modificado
    cookie: { maxAge: INACTIVITY_EXPIRATION_2_DAYS },
    // Las sessions se guardan en MongoDB
    store: MongoStore.create({
        mongoUrl: 'mongodb://127.0.0.1:27017/cursonode'
    })
})

export function useSessionInViews(req, res, next) {
    res.locals.session = req.session
    next()
}

export function guard(req, res, next) {
    if (!req.session.userId) {
        res.redirect('/login')
        return
    }
    next() // esto seria que si esta logado, que siga con lo siguiente
}