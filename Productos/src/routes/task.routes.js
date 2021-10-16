const express = require('express');
const router = express.Router();

const Productos = require('../models/task');

router.get('/', async (req, res) => {
    const productos = await Productos.find();
    res.json(productos);
});

router.get('/:id', async(req,res)=>{
    const productos= await Productos.findById(req.params.id);
    res.json(productos);
})

router.get('/:IDproducto', async(req,res)=>{
    const productos= await Productos.findByName(req.params.IDProducto);
    res.json(productos);
})

//Esto es para guardar los datos
router.post('/', async (req, res) => {
    const {IDProducto, Descripcion, ValorUnitario, Cantidad, Estado} = req.body;
    const productos= new Productos({IDProducto, Descripcion, ValorUnitario, Cantidad, Estado});
    await productos.save();
    res.json({status:'Producto guardado'});
});

//Actualidar datos
router.put('/:id', async(req,res)=>{
    const{IDProducto, Descripcion, ValorUnitario, Cantidad, Estado } = req.body;
    const nuevoProducto ={IDProducto, Descripcion, ValorUnitario, Cantidad, Estado };

    await Productos.findByIdAndUpdate(req.params.id, nuevoProducto);
    res.json({status:'Producto actualizado'});
});

router.delete('/:id', async(req,res)=>{
    await Productos.findByIdAndRemove(req.params.id);
    res.json({status:'Producto eliminado'});
})

module.exports = router;