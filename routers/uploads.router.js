import express from 'express'
import controller from '../controllers/uploads.controller.js'
import multer from 'multer'
import path from 'node:path'
import {v4 as uuidv4} from 'uuid'

const storage = multer.diskStorage({
    destination: function(req, file, cb) { // con path unimos rutas
        const rutaDeAlmacenamiento = path.join('public', 'uploads' ) // el directorio donde se van a crear las imágenes.
        cb(null, rutaDeAlmacenamiento)
    },
    filename: function(req, file, cb) {
        const extension = file.originalname.split('.').pop()
        const nombreArchivo = `${uuidv4()}.${extension}`
        cb(null, nombreArchivo)
    }
})
const uploadsMiddleware = multer( {storage} )
const routerUpload = express.Router()

routerUpload.post('/', uploadsMiddleware.single('imagen'), controller.uploadImagen)

export default routerUpload