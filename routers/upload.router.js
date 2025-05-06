import express from 'express'
import controller from '../controllers/upload.controller.js'

const routerUpload = express.Router()

routerUpload.post('/', controller.uploadImagen)

export default routerUpload