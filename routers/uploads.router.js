import express from 'express'
import controller from '../controllers/uploads.controller.js'

const routerUpload = express.Router()

routerUpload.post('/', controller.uploadImagen)

export default routerUpload