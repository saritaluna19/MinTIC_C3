const express = require('express');
const router = express.Router();

const Productos = require('../models/taskProductos');

router.get('/RegistrarProductos/', async (req, res) => {
    const productos = await Productos.find();
    res.json(productos);
});

router.get('/RegistrarProductos/:id', async(req,res)=>{
    const productos= await Productos.findById(req.params.id);
    res.json(productos);
})

router.get('/RegistrarProductos/:IDproducto', async(req,res)=>{
    const productos= await Productos.findByName(req.params.IDProducto);
    res.json(productos);
})

//Esto es para guardar los datos
router.post('/RegistrarProductos/', async (req, res) => {
    const {IDProducto, Descripcion, ValorUnitario, Cantidad, Estado} = req.body;
    const productos= new Productos({IDProducto, Descripcion, ValorUnitario, Cantidad, Estado});
    await productos.save();
    res.json({status:'Producto guardado'});
});

//Actualidar datos
router.put('/RegistrarProductos/:id', async(req,res)=>{
    const{IDProducto, Descripcion, ValorUnitario, Cantidad, Estado } = req.body;
    const nuevoProducto ={IDProducto, Descripcion, ValorUnitario, Cantidad, Estado };

    await Productos.findByIdAndUpdate(req.params.id, nuevoProducto);
    res.json({status:'Producto actualizado'});
});

router.delete('/RegistrarProductos/:id', async(req,res)=>{
    await Productos.findByIdAndRemove(req.params.id);
    res.json({status:'Producto eliminado'});
})

//Ventas

const Ventas = require('../models/taskVentas');

router.get('/RegistrarVentas/', async (req, res) => {
    const ventas = await Ventas.find();
    res.json(ventas);
});

router.get('/RegistrarVentas/:id', async(req,res)=>{
    const ventas= await Ventas.findById(req.params.id);
    res.json(ventas);
})

//Esto es para guardar los datos
router.post('/RegistrarVentas/', async (req, res) => {
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
router.put('/RegistrarVentas/:id', async(req,res)=>{
    const{IDVenta, FechaVenta, ID_Vendedor, ID_Cliente, PrimerApellido,
        SegundoApellido, PrimerNombre, SegundoNombre, ID_Producto,
        CantidadProducto, PrecioUnidad, valorTotal } = req.body;
    const nuevaVenta ={IDVenta, FechaVenta, ID_Vendedor, ID_Cliente, PrimerApellido,
        SegundoApellido, PrimerNombre, SegundoNombre, ID_Producto,
        CantidadProducto, PrecioUnidad, valorTotal};

    await Ventas.findByIdAndUpdate(req.params.id, nuevaVenta);
    res.json({status:'Venta actualizada'});
});

router.delete('/RegistrarVentas/:id', async(req,res)=>{
    await Ventas.findByIdAndRemove(req.params.id);
    res.json({status:'Venta eliminada'});
})

//Usuarios

const Usuarios = require('../models/taskUsuarios');

router.get('/Usuarios/', async (req, res) => {
    const usuarios = await Usuarios.find();
    res.json(usuarios);
});

router.get('/Usuarios/:id', async(req,res)=>{
    const usuarios= await Usuarios.findById(req.params.id);
    res.json(usuarios);
})

//Esto es para guardar los datos
router.post('/Usuarios/', async (req, res) => {
    const { ID_Usuario, Contrasena, Rol, Estado, PrimerApellido, SegundoApellido,
    PrimerNombre, SegundoNombre, Identificacion, Telefono, correo_electronico} = req.body;
    const usuarios= new Usuarios({ID_Usuario, Contrasena, Rol, Estado, PrimerApellido, SegundoApellido,
        PrimerNombre, SegundoNombre, Identificacion, Telefono, correo_electronico});
    await usuarios.save();
    res.json({status:'Usuario guardado'});
});

//Actualidar datos
router.put('/Usuarios/:id', async(req,res)=>{
    const{ID_Usuario, Contrasena, Rol, Estado, PrimerApellido, SegundoApellido,
        PrimerNombre, SegundoNombre, Identificacion, Telefono, correo_electronico } = req.body;
    const nuevoUsuario ={ID_Usuario, Contrasena, Rol, Estado, PrimerApellido, SegundoApellido,
        PrimerNombre, SegundoNombre, Identificacion, Telefono, correo_electronico };

    await Usuarios.findByIdAndUpdate(req.params.id, nuevoUsuario);
    res.json({status:'Usuario actualizado'});
});


module.exports = router;