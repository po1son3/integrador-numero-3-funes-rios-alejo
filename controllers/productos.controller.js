import models from '../models/productos.models.js'


const getAll = async (req, res) => {

    try {
    const productos = await models.obtenerTodosLosProductos()
    res.json(productos)
    }catch (error) {
    console.log(error)
    }
}

const getOne = async (req, res) => {//! GET ONE
    const id = req.params.id
    try {
        const producto = await models.obtenerUnProducto(id)
        res.json(producto)
    }catch (error) {
        console.log(error)
    }
    
}

const create = async (req, res) => {// ! CREATE
    const productoACrear = req.body

    try {
        const productoGuardado = await models.crearProducto(productoACrear)
        res.status(201).json(productoGuardado)
        
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
        res.json(productoEditado)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({mensaje: 'No se pudo editar el producto solicitado'})
    }
}


const remove = async (req, res) => {
    const id = req.params.id

    try {
        const productoEliminado = await models.eliminarProducto(id)
        res.json(productoEliminado)
        
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