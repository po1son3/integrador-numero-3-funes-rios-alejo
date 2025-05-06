import express from 'express'
import 'dotenv/config'
import connection  from './utils/connection.js'
import routerProductos from './routers/productos.router.js'
import routerUsuarios from './routers/usuarios.router.js'



const app = express()
const PORT = 8080
const URI_DB = process.env.URI_LOCAL


app.use(express.json()) // hace que funcione el bddy dl postman

// ! RUTAS
app.use('/api/v1/productos', routerProductos) // aca adentro sucede la magia
app.use('/api/v1/usuarios', routerUsuarios) // aca adentro sucede la magia


app.get('/', (req, res) => {
res.send('oli World!')
})

app.listen(PORT, (err) => {
    if (err) throw new Error('No se pudo levantar el server')
        console.log(`Servidor funcionando en: http://localhost:${PORT} `)
    console.log(`Example app listening on port ${PORT}`)
    connection(URI_DB)
    })


