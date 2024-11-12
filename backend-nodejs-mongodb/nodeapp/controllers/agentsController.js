import Agent from "../models/Agent.js"
import createError from 'http-errors'


export function index(req, res, next) {
    res.render('new-agent')
}

export async function postNew(req, res, next) {
    try {
        const userId = req.session.userId
        const { name, age } = req.body
        // TODO validaciones 

        // Creo una instancia de agente en memoria
        const agent = new Agent({
            name,
            age,
            owner: userId
        })
        // Guardo en DB
        await agent.save()
        res.redirect('/')
    } catch (err) {
        next(err)
    }
}

export async function deleteAgent(req, res, next) {
    const userId = req.session.userId
    const agentId = req.params.agentId

    // Validar que el elemento que queremos borrar es propiedad del usuario logado
    const agent = await Agent.findOne({ _id: agentId })
    // const agent = await Agent.findOne({ _id: agentId, owner: userId })

    // Verificar si existe
    if (!agent) {
        console.warn(`WARNING - el usuario ${userId} esta intentando eliminar un agente inexistente`)
        return next(createError(404, 'Not found'))
    }
    if (agent.owner.toString() !== userId) {
        console.warn(`WARNING - el usuario ${userId} esta intentando eliminar un agente de otro usuario.`)
        return next(createError(401, 'Not authorized'))
    }

    await Agent.deleteOne({ _id: agentId })
    res.redirect('/')
}