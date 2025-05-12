import models from '../models/productos.models.js'
import handleMongo from '../utils/handle-mongo-id.js'


const getAll = async (req, res) => {

    try {
    const productos = await models.obtenerTodosLosProductos()
    res.json(handleMongo(productos))
    }catch (error) {
    console.log(error)
    res.status(500).json({
        mensaje: 'Error al obtener todos los productos '
    })
    }
}

const getOne = async (req, res) => {//! GET ONE
    const id = req.params.id
    try {
        const producto = await models.obtenerUnProducto(id)
        res.json(handleMongo(producto))
    }catch (error) {
        console.log(error)
        res.status(500).json({
            mensaje: 'Error al obtener el producto'
        })
    }
    
}

const create = async (req, res) => {// ! CREATE
    const productoACrear = req.body

    try {
        const productoGuardado = await models.crearProducto(productoACrear)
        res.status(201).json(handleMongo(productoGuardado))
        
    }catch (error) {
        console.log(error)
        res.status(500).json({ mensaje: 'Algo falló, no se pudo guardar el producto' })
    }
    
}

const update = async (req, res) => {
    const id = req.params.id
    const productoAEditar = req.body
    productoAEditar.id = id // le hago un id es lo mismo que hacer (productoAEditar, id)
    
    try {
        const productoEditado= await models.EditarUnProducto(productoAEditar)
        res.json(handleMongo(productoEditado))
        
    } catch (error) {
        console.log(error)
        res.status(500).json({mensaje: 'No se pudo editar el producto solicitado'})
    }
}


const remove = async (req, res) => {
    const id = req.params.id

    try {
        const productoEliminado = await models.eliminarProducto(id)
        res.json(handleMongo(productoEliminado))
        
    } catch (error) {
        console.log(error)
        res.status(500).json({mensaje: 'No se pudo borrar el producto'})
    }

}


export default {
    getAll,
    getOne,
    create,
    update,
    remove
}