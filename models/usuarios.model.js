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
                    tpye: String,
                    required: true,
                    unique: true
            },
        dni: {
            tpye: String,
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