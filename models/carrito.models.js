import mongoose from "mongoose";


// schema
const carritoSchema = mongoose.Schema(
    {
    carrito: Array
    },
    {
        timestamps: true,
        versionKey: false
    }
)
// model
const CarritoModel = mongoose.model('carritos', carritoSchema)

const crearCarrito = async (carrito) => {

    try {
        const carritoCreado = new CarritoModel(  carrito  )
        const carritoGuardado = await carritoCreado.save()
        return carritoGuardado
    } catch (error) {
        throw error
    }

}
export default {
    crearCarrito
}