import mongoose from "mongoose";

const carritoSchema = mongoose.Schema({
    carrito: Array
})

const carritoModel = mongoose.model('carritos', carritoSchema)