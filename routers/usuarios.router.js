import express from 'express'
const routerUsuarios = express.Router()


routerUsuarios.get('/', usuariosController.getAll ) //! GET ALL

routerUsuarios.get('/:id', usuariosController.getOne) //! GET ONE

routerUsuarios.post('/', usuariosController.create )  //! CREATE

routerUsuarios.put('/:id', usuariosController.update) //! UPDATE

routerUsuarios.delete('/:id', usuariosController.remove) //! UPDATE

export default routerUsuarios