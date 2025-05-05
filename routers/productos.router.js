import express from 'express'
const routerProductos = express.Router()


routerProductos.get('/api/v1/productos', (req, res) => { //! GET ALL
    res.send('GET ALL')
})


routerProductos.get('/api/v1/productos/:id', (req, res) => { //! GET ONE
    const id = req.params.id
    console.log(id)
    res.send('GET ONE')
})


routerProductos.post('/api/v1/productos', (req, res) => { //! CREATE
    const productoACrear = req.body
    console.log(productoACrear)
    res.send('Created Producto')
})


routerProductos.put('/api/v1/productos/:id', (req, res) => { //! UPDATE
    const id = req.params.id
    const productoAEditar = req.params.body
    console.log(productoAEditar)
    console.log(id)
    res.send('Updated Producto')
})


routerProductos.delete('/api/v1/productos/:id', (req, res) => { //! UPDATE
    const id = req.params.id
    console.log(id)
    res.send('Update Producto')
})


export default routerProductos