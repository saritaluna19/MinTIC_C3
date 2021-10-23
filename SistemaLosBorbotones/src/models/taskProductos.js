const mongoose = require('mongoose');
const { Schema } = mongoose;

const RegistroProductos = new Schema({
    IDProducto:{ type: String, required: true },
    Descripcion:{ type: String, required: true },
    ValorUnitario:{ type: Number, required: true },
    Cantidad:{ type: Number, required: true },
    Estado:{ type: String, required: true }
});

module.exports = mongoose.model('Productos', RegistroProductos);
