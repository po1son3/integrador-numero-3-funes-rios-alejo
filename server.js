import express from 'express'
import 'dotenv/config'
import connection  from './utils/connection.js'



const app = express()
const PORT = 8080
const URI_DB = process.env.URI_LOCAL
console.log(URI_DB)




app.get('/', (req, res) => {
res.send('oli World!')
})

// ? CRUDD

app.get('/api/v1/productos', (req, res) => { //! GET ALL
    res.send('GET ALL')
})


app.get('/api/v1/productos/:id', (req, res) => { //! GET ONE
    const id = req.params.id
    console.log(id)
    res.send('GET ONE')
})


app.post('/api/v1/productos', (req, res) => { //! CREATE
    const productoACrear = req.body
    console.log(productoACrear)
    res.send('Created Producto')
})


app.put('/api/v1/productos/:id', (req, res) => { //! UPDATE
    const id = req.params.id
    const productoAEditar = req.params.body
    console.log(productoAEditar)
    console.log(id)
    res.send('Update Producto')
})


app.delete('/api/v1/productos/:id', (req, res) => { //! UPDATE
    const id = req.params.id
    console.log(id)
    res.send('Update Producto')
})






app.listen(PORT, (err) => {
    if (err) throw new Error('No se pudo levantar el server')
        console.log(`Servidor funcionando en: http://localhost:${PORT} `)
    console.log(`Example app listening on port ${PORT}`)
    connection(URI_DB)
    })




    /* app.all('*', (req, res) => {
        res.status(404).json({
            ruta: `${req.url}`,
            metodo: `${req.method}`,
            mensaje: 'No se encontró el recurso que estás queriendo acceder'
        })
    }) */
