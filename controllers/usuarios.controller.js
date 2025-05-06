import models from '../models/usuarios.model.js'

const getAll = (req, res) => {

res.send('getAll')
}

const getOne = (req, res) => {

res.send('getOne')
}

const create = async (req, res) => {
    const nuevoUsuario = req.body
    try {
        const usuarioCreado = await models.crearUsuario(nuevoUsuario)
        res.send(usuarioCreado)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ mensaje: 'No se pudo crear el usuario' })
    }
}

const update = (req, res) => {

res.send('update')
}

const remove = (req, res) => {

res.send('remove')
}



export default {
getAll,
getOne,
create,
update,
remove
}
