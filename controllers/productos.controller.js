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
        res.json(productoGuardado)
        
    }catch (error) {
        console.log(error)
        res.status(500).json({ mensaje: 'Algo falló, no se pudo guardar el producto' })
    }
    
}

const update = (req, res) => {
models.EditarUnProducto()
    const id = req.params.id
    const productoAEditar = req.params.body
    console.log(productoAEditar)
    console.log(id)
    res.send('Updated Producto')
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