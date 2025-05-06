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
    {

    }
)


const obtenerTodosLosProductos = () => {
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