var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

mongoose.connect("mongodb://localhost/usuarios");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


var userSchema = {
    ID_Usuario:String,
    Contrasena:String,
    DD_rol:String,
    DD_Estado:String,
    Text_PrimerApellido:String,
    Txt_SegundoApellido:String,
    Txt_PrimerNombre:String,
    Txt_SegundoNombre:String,
    Txt_Identificacion:Number,
    Txt_Telefono:Number,
    txt_correo_electronico:String
};

var User = mongoose.model("User", userSchema)

app.set("view engine", "jade");

app.use(express.static("public"));

app.get("/", function(solicitud,respuesta){
    
    /*var data = {
        ID_Usuario:"Prueba1",
        Contrasena:"Prueba2",
        DD_rol:"Prueba3",
        DD_Estado:"Prueba4",
        Text_PrimerApellido:"Prueba5",
        Txt_SegundoApellido:"Prueba6",
        Txt_PrimerNombre:"Prueba7",
        Txt_SegundoNombre:"Prueba8",
        Txt_Identificacion:150,
        Txt_Telefono:4523,
        txt_correo_electronico:"Prueba10"
    }

    var user = new User(data);

    user.save(function(err){
        console.log(user);
    });
    */
    respuesta.render("index");
});

app.post("/menu",function(solicitud,respuesta){
    console.log(solicitud.body);
    respuesta.render("menu/new");
});

app.get("/menu/new",function(solicitud,respuesta){
    respuesta.render("menu/new")
})

app.listen(8000)
