const express =require('express');
const app = new express();
const path=require('path');

const {config , engine}=require('express-edge');

app.listen(4000, ()=>{
    console.log('Estoy en el puerto 4000');
});

app.use(engine);
app.set('views',`${__dirname}/views`);

app.use(express.static('public'));

//PAGINAS A LAS QUE VA IR 
app.get('/',(req, res)=>{
   // res.sendFile(path.resolve(__dirname,'Interfaces/login.html'));
   res.render('login');
});

app.get('/usuarios',(req, res)=>{
    //res.sendFile(path.resolve(__dirname,'Interfaces/Usuarios.html'));
    res.render('usuarios');
});

app.get('/consultas',(req, res)=>{
    //res.sendFile(path.resolve(__dirname,'Interfaces/ConsultaVentas.html'));
    res.render('consultas');
});

app.get('/vendedores',(req, res)=>{
   // res.sendFile(path.resolve(__dirname,'Interfaces/Vendedores.html'));
   res.render('vendedores');

});

app.get('/ventas',(req, res)=>{
    //res.sendFile(path.resolve(__dirname,'Interfaces\Ventas.html'));
    res.render('ventas');

});

