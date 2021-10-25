const mongoose = require('mongoose');
const { Schema } = mongoose;

const RegistroVentas = new Schema({
    IDVenta: { type: Number, required: true },
    FechaVenta: { type: Date, required: true },
    ID_Vendedor: { type: Number, required: true },
    ID_Cliente: { type: Number, required: true },
    PrimerApellido: { type: String, required: true },
    SegundoApellido: { type: String, required: true },
    PrimerNombre: { type: String, required: true },
    SegundoNombre: { type: String},
    ID_Producto: { type: Number, required: true },
    CantidadProducto: { type: Number, required: true },
    PrecioUnidad: { type: Number, required: true },
    valorTotal: {type: Number, required:true}
});
module.exports = mongoose.model('Ventas', RegistroVentas);

const ConsultarVentas=new Schema({    
    ID_Producto: { type: Number, required: true },
    CantidadProducto: { type: Number, required: true },
    PrecioUnidad: { type: Number, required: true },
    valorTotal: {type: Number, required:true}
})

module.exports = mongoose.model('Consulta', ConsultarVentas);
