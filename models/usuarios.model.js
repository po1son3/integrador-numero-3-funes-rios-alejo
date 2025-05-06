import mongoose from "mongoose";

// primero se hace el schema
const usuarioEsquema = new mongoose.Schema(// ahora acá definimos el documento
    {
        nombre: {
                    type: String,
                    required: true
                },
        apellido: String,
        correo : {
                    type: String,
                    required: true,
                    unique: true
            },
        dni: {
            type: String,
            required: true,
            unique: true
            },
        nacionalidad: String,
        password: {
                    type: String, 
                    required: true
                }

    },
    {
        timestamps: true,
        versionKey: false
    }
)

const UsuarioModelo = mongoose.model('usuarios', usuarioEsquema) // 'usuarios' es el nombre de la colección.

const obtenerTodosLosUsuarios = () => {

}
const obtenerUnUsuario = () => {

}
const crearUsuario = async (nuevoUsuario) => {
    try {
        const usuarioCreado = new UsuarioModelo(nuevoUsuario)
        const usuarioGuardado = await usuarioCreado.save()
        return usuarioGuardado
        
    } catch (error) {
        throw error
    }
}
const EditarUnUsuario = () => {

}
const eliminarUsuario = () => {

}

export default {
obtenerTodosLosUsuarios,
obtenerUnUsuario,
crearUsuario,
EditarUnUsuario,
eliminarUsuario
}