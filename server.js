import express from 'express'
import 'dotenv/config'
import path from 'node:path'
import cors from 'cors'
import connection  from './utils/connection.js'
import routerProductos from './routers/productos.router.js'
import routerUsuarios from './routers/usuarios.router.js'
import routerUploads from './routers/uploads.router.js'
import routerCarrito from './routers/carrito.router.js'



const app = express()
const PORT = process.env.PORT
//const URI_DB = process.env.URI_LOCAL
const URI_DB = process.env.URI_REMOTA
const URI_FRONT = process.env.URI_FRONTEND_CORS

const corsConfig = {
    origin: URI_FRONT     //'front-end' // acá hay que poner la ruta del front
}

// ! MIDDLEWARES
app.use(express.json()) // hace que funcione el bddy dl postman
app.use(express.static(path.join('public'))) // algo que ver con / y \
app.use(cors(corsConfig))
// ! RUTAS
app.use('/api/v1/productos', routerProductos) // aca adentro sucede la magia
app.use('/api/v1/usuarios', routerUsuarios) // aca adentro sucede la magia
app.use('/api/v1/uploads', routerUploads)
app.use('/api/v1/carrito', routerCarrito)

app.get('/', (req, res) => {
res.send('oli World!')
})

app.listen(PORT, (err) => {
    if (err) throw new Error('No se pudo levantar el server')
        console.log(`Servidor funcionando en: http://localhost:${PORT} `)
    console.log(`Example app listening on port ${PORT}`)
    connection(URI_DB)
    })


