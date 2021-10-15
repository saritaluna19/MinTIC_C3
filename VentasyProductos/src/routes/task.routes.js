const express = require('express');
const router = express.Router();

const Ventas = require('../models/task');

router.get('/', async (req, res) => {
    const ventas = await Ventas.find();
    res.json(ventas);
});

router.get('/:id', async(req,res)=>{
    const ventas= await Ventas.findById(req.params.id);
    res.json(ventas);
})

//Esto es para guardar los datos
router.post('/', async (req, res) => {
    const {IDVenta, FechaVenta, ID_Vendedor, ID_Cliente, PrimerApellido,
        SegundoApellido, PrimerNombre, SegundoNombre, ID_Producto,
        CantidadProducto, PrecioUnidad, valorTotal } = req.body;
    const ventas= new Ventas({IDVenta, FechaVenta, ID_Vendedor, ID_Cliente, PrimerApellido,
        SegundoApellido, PrimerNombre, SegundoNombre, ID_Producto,
        CantidadProducto, PrecioUnidad, valorTotal});
    await ventas.save();
    res.json({status:'Venta guardada'});
});

//Actualidar datos
router.put('/:id', async(req,res)=>{
    const{IDVenta, FechaVenta, ID_Vendedor, ID_Cliente, PrimerApellido,
        SegundoApellido, PrimerNombre, SegundoNombre, ID_Producto,
        CantidadProducto, PrecioUnidad, valorTotal } = req.body;
    const nuevaVenta ={IDVenta, FechaVenta, ID_Vendedor, ID_Cliente, PrimerApellido,
        SegundoApellido, PrimerNombre, SegundoNombre, ID_Producto,
        CantidadProducto, PrecioUnidad, valorTotal};

    await Ventas.findByIdAndUpdate(req.params.id, nuevaVenta);
    res.json({status:'Venta actualizada'});
});

router.delete('/:id', async(req,res)=>{
    await Ventas.findByIdAndRemove(req.params.id);
    res.json({status:'Venta eliminada'});
})


module.exports = router;