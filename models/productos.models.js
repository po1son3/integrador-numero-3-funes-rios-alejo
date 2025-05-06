import mongoose from "mongoose"

const ProductoEsquema = mongoose.Schema(
    { // nuestro obj estará compuesto de:
        nombre: {
                    type: String,
                    required: true
                },
        precio: Number, 
        stock: Number,
        marca: String,
        categoria: String,
        detalles: String,
        foto: String,
        envio: Boolean
    },
    { // las keys
        timestamps: true,
        versionKey: false
    }
)

const ProductoModelo = mongoose.model('productos', ProductoEsquema)  // creo el modelo



const obtenerTodosLosProductos = async () => {//GETALL
    try {
        const productos = await ProductoModelo.find()
        return productos
    }catch (error) {
        throw error
    }

}

const obtenerUnProducto = async (id) => {//GETONE
    try {
        const producto = await ProductoModelo.findById(id)
        return producto
    } catch (error) {
        throw error
    }

}

const crearProducto = async (productoNuevo) => {//CREATE
    try {
        const productoAGuardar = new ProductoModelo(productoNuevo)
        const productoGuardado = await productoAGuardar.save()
        return productoGuardado
    } catch (error) {
        throw error
    }

}

const EditarUnProducto = (productoEditado) => {
    console.log('EditarUnProducto')

}

const eliminarProducto = async (id) => {

    try {
        const productoEliminado = await ProductoModelo.findByIdAndDelete(id)
        return productoEliminado
    } catch (error) {
        throw error
    }

}

export default {

    obtenerTodosLosProductos,
    obtenerUnProducto,
    crearProducto,
    EditarUnProducto,
    eliminarProducto

}