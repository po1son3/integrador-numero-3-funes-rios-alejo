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

app.get('/api/v1/productos', (req, res) => {
    res.send('Hellor wordl')
})


app.listen(PORT, (err) => {
    if (err) throw new Error('No se pudo levantar el server')
    console.log(`Servidor funcionando en: http://localhost:${PORT} `)
    console.log(`Example app listening on port ${PORT}`)
    connection(URI_DB)
})
