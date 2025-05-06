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

const create = (req, res) => {
models.crearProducto()
    const productoACrear = req.body
    console.log(productoACrear)
    res.send('Created Producto')
}

const update = (req, res) => {
models.EditarUnProducto()
    const id = req.params.id
    const productoAEditar = req.params.body
    console.log(productoAEditar)
    console.log(id)
    res.send('Updated Producto')
}
const remove = (req, res) => {
    models.eliminarProducto()

    const id = req.params.id
    console.log(id)
    res.send('Update Producto')
}


export default {
    getAll,
    getOne,
    create,
    update,
    remove
}