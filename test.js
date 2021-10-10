'use strict'

const mongoose=require('mongoose')
const Usuario=require('./database/Models/Usuario')

mongoose.connect(`mongodb://localhost/Sprint3`)

module.exports = mongoose;


/*Usuario.findById("",{

}, (error, usuario)=>{
    console.log(error, usuario);
});
*/

Usuario.create({
    nombre: 'Sarita Luna',
    contrasena: 'mintic2021',
    rol: 'Vendedor'
}, (error, usuario)=>{
    console.log(error, usuario);
})