const express = require('express');
const morgan=require('morgan');
const path=require('path');
const app = express();

const {mongoose}=require('./database');


//Configuración

app.set('port', process.env.PORT || 3000);

//MiddleWares
app.use(morgan('dev'));
app.use(express.json());

//URLS

app.use('/api/tasks',require('./routes/task.routes'));

//Static files

app.use(express.static(path.join(__dirname, 'public')));

//Iniciar el servidor
app.listen(app.get('port'), () => {
    console.log(`servidor en puerto ${app.get('port')}`);
})