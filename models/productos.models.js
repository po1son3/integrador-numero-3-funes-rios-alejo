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



const obtenerTodosLosProductos = async () => {

    try {
        const productos = await ProductoModelo.find()
        return productos
    } catch (error) {
        console.log(error)
    }
    console.log('obtenerTodosLosProductos')
}

const obtenerUnProducto = (id) => {
    console.log('obtenerUnProducto')

}

const crearProducto = (productoNuevo) => {
    console.log('crearProducto')

}

const EditarUnProducto = (productoEditado) => {
    console.log('EditarUnProducto')

}

const eliminarProducto = (id) => {
    console.log('eliminarProducto')

}

export default {

    obtenerTodosLosProductos,
    obtenerUnProducto,
    crearProducto,
    EditarUnProducto,
    eliminarProducto

}