import express from 'express'
import controller from '../controllers/carrito.controller.js'

const routerCarrito = express.Router()
routerCarrito.post('/', AbortController.guardarCarrito)


export default routerCarrito