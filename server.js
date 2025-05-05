import express from 'express'
import 'dotenv/config'
import mongoose from 'mongoose'
const app = express()
const PORT = 8080
const URI_DB = process.env.URI_LOCAL
console.log(URI_DB)

const connection = async (uri) => {
    try {
        await mongoose.connect(uri)
        console.log('Conexion a MongoDB OK')
    } catch (error) {
        console.log('Conexion Error', error)
    }
}

app.get('/', (req, res) => {
res.send('oli World!')
})

app.listen(PORT, (err) => {
    if (err) throw new Error('No se pudo levantar el server')
    console.log(`Servidor funcionando en: http://localhost:${PORT} `)
    console.log(`Example app listening on port ${PORT}`)
    connection(URI_DB)
})
