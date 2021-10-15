const express = require('express');
const router = express.Router();

const Usuarios = require('../models/task');

router.get('/', async (req, res) => {
    const usuarios = await Usuarios.find();
    res.json(usuarios);
});

router.get('/:id', async(req,res)=>{
    const usuarios= await Usuarios.findById(req.params.id);
    res.json(usuarios);
})

//Esto es para guardar los datos
router.post('/', async (req, res) => {
    const { ID_Usuario, Contrasena, Rol, Estado, PrimerApellido, SegundoApellido,
    PrimerNombre, SegundoNombre, Identificacion, Telefono, correo_electronico} = req.body;
    const usuarios= new Usuarios({ID_Usuario, Contrasena, Rol, Estado, PrimerApellido, SegundoApellido,
        PrimerNombre, SegundoNombre, Identificacion, Telefono, correo_electronico});
    await usuarios.save();
    res.json({status:'Usuario guardado'});
});

//Actualidar datos
router.put('/:id', async(req,res)=>{
    const{ID_Usuario, Contrasena, Rol, Estado, PrimerApellido, SegundoApellido,
        PrimerNombre, SegundoNombre, Identificacion, Telefono, correo_electronico } = req.body;
    const nuevoUsuario ={ID_Usuario, Contrasena, Rol, Estado, PrimerApellido, SegundoApellido,
        PrimerNombre, SegundoNombre, Identificacion, Telefono, correo_electronico };

    await Usuarios.findByIdAndUpdate(req.params.id, nuevoUsuario);
    res.json({status:'Usuario actualizado'});
});


module.exports = router;