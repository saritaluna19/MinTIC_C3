const mongoose = require('mongoose');
const { Schema } = mongoose;

const RegistroUsuarios = new Schema({
    ID_Usuario:{ type: String, required: true },
    Contrasena:{ type: String, required: true },
    Rol:{ type: String, required: true },
    Estado:{ type: String, required: true },
    PrimerApellido:{ type: String, required: true },
    SegundoApellido:{ type: String, required: false },
    PrimerNombre:{ type: String, required: true },
    SegundoNombre:{ type: String, required: false },
    Identificacion:{ type: Number, required: true },
    Telefono:{ type: Number, required: true },
    correo_electronico:{ type: String, required: true }
});

module.exports = mongoose.model('Usuarios', RegistroUsuarios);