import express from 'express'
import productosController from '../controllers/productos.controller.js'


const routerProductos = express.Router()


routerProductos.get('/', productosController.getAll ) //! GET ALL

routerProductos.get('/:id', productosController.getOne) //! GET ONE

routerProductos.post('/', productosController.create )  //! CREATE

routerProductos.put('/:id', productosController.update) //! UPDATE

routerProductos.delete('/:id', productosController.remove) //! UPDATE


export default routerProductos