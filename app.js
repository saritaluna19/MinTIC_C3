var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var method_override = require("method-override");
var app = express();

mongoose.connect("mongodb://localhost/usuarios");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(method_override("_method"));


var userSchema = {
    ID_Usuario:String,
    Contrasena:String,
    Rol:String,
    Estado:String,
    PrimerApellido:String,
    SegundoApellido:String,
    PrimerNombre:String,
    SegundoNombre:String,
    Identificacion:Number,
    Telefono:Number,
    correo_electronico:String
};

var User = mongoose.model("User", userSchema)

app.set("view engine", "jade");

app.use(express.static("public"));

app.get("/", function(solicitud,respuesta){
    User.find(function(error,documento){
        if(error){console.log(error);}
        respuesta.render("usuarios",{users: documento});
    });
});

app.put("/menu/:id",function(solicitud,respuesta){

    var data = {
        ID_Usuario: solicitud.body.ID_Usuario,
        Contrasena: solicitud.body.Contrasena,
        Rol: solicitud.body.Rol,
        Estado: solicitud.body.Estado,
        PrimerApellido: solicitud.body.PrimerApellido,
        SegundoApellido: solicitud.body.SegundoApellido,
        PrimerNombre: solicitud.body.PrimerNombre,
        SegundoNombre: solicitud.body.SegundoNombre,
        Identificacion: solicitud.body.Identificacion,
        Telefono: solicitud.body.Telefono,
        correo_electronico: solicitud.body.correo_electronico,
    };

    User.update({"_id": solicitud.params.id},data,function(user){
        respuesta.redirect("/")
    });
});

app.get("/menu/actualizar/:id", function(solicitud, respuesta){
    var id_usuario = solicitud.params.id;
    console.log(id_usuario);
    User.findOne({"_id": id_usuario},function(error, usuario){
        console.log(usuario);
        respuesta.render("menu/actualizar",{user: usuario})
    });

});

app.post("/menu",function(solicitud,respuesta){

    console.log(solicitud.bodyParser);
    
    var data = {
        ID_Usuario: solicitud.body.ID_Usuario,
        Contrasena: solicitud.body.Contrasena,
        Rol: solicitud.body.Rol,
        Estado: solicitud.body.Estado,
        PrimerApellido: solicitud.body.PrimerApellido,
        SegundoApellido: solicitud.body.SegundoApellido,
        PrimerNombre: solicitud.body.PrimerNombre,
        SegundoNombre: solicitud.body.SegundoNombre,
        Identificacion: solicitud.body.Identificacion,
        Telefono: solicitud.body.Telefono,
        correo_electronico: solicitud.body.correo_electronico,
    }
    
    var user = new User(data);
    user.save(function(err){
        console.log(user);
    });
});

app.get("/menu/new",function(solicitud,respuesta){
    respuesta.render("menu/new");
})

app.get("/menu/actualizar",function(solicitud,respuesta){
    respuesta.render("menu/actualizar");
})

app.listen(8000)
