require("./auth")
const express = require('express');
const morgan=require('morgan');
const path=require('path');
const passport = require("passport");
const session = require("express-session");
const app = express();

const {mongoose}=require('./database');

app.use(session({secret: "secreto"}))
app.use(passport.initialize());
app.use(passport.session());

//funcion logueo
function estalogeado(req, res, next){
    req.user ? next() : res.sendStatus(401);
}

app.get("/protegido",estalogeado, (req, res) => {
    console.log(req.user)
    res.send(`<img class="Logo" src="Imagenes/Logo.png" alt="Los borbotones"/><h1>Sitio protegido</h1> <br> Bienvenido ${req.user.email} <br> ${req.user.name.givenName} <br>${req.user.name.familyName}<br> <img src="${req.user.picture}"> <a href="/RegistrarVentas">Continuar</a> <br> <a href=\"/logout\">Finalizar session</a>`);
});

app.get("/auth/google/", passport.authenticate("google", { scope: ["email", "profile"] }));

app.get("/auth/google/callback",
    passport.authenticate("google", {
        successRedirect: "/protegido",
        failureRedirect: "/auth/failure",
    })

);
app.get("/auth/failure", (req, res) => {
    res.send("Algo salió mal en la autenticación de google '<a href=\"/\"> Regresar</a>'");

})

app.get("/logout",(req, res)=>{
    req.logout();
    req.session.destroy();
    res.send("Se ha finalizado la sesión.'<a href=\"/\"> Regresar</a>'")
});

//Configuración

app.set('port', process.env.PORT || 3000);

//MiddleWares
app.use(morgan('dev'));
app.use(express.json());

//URLS

function redirect(res){
    res.sendfile(path.join(__dirname, 'public/index.html'), function (err) {
        if (err){
            res.status(500).send(err)
        }
    })
}

app.get('/RegistrarProductos', function(req, res){
    redirect(res);
});

app.get('/ConsultarProductos', function(req, res){
    redirect(res);
});

app.get('/RegistrarVentas', function(req, res){
    redirect(res);
});

app.get('/ConsultarVentas', function(req, res){
    redirect(res);
});

app.get('/Usuarios', function(req, res){
    redirect(res);
});

app.get('/Acceso', function(req, res){
    redirect(res);
});

app.use('/api/tasks',require('./routes/task.routes'));

//Static files

app.use(express.static(path.join(__dirname, 'public')));

//Iniciar el servidor
app.listen(app.get('port'), () => {
    console.log(`servidor en puerto ${app.get('port')}`);
})