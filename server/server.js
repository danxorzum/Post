require('./config/config');

const express = require('express');
const mongoose = require('mongoose');

const app = express();


const bodyParser = require('body-parser');

// parse application/x-www-form-urlencode
app.use(bodyParser.urlencoded({ extended: false }));

//parse application json
app.use(bodyParser.json());

//configuracion global de rutas
app.use(require('./routes/index'));




// conexion con mongoose
mongoose.connect('mongodb://localhost:27017/cafe', (err, res) => {
    if (err)
        throw err;
    console.log('Base de datos Online');
});

//escucha el puerto espesificado
app.listen(process.env.PORT, () => {
    console.log('escuchando el puerto', 3000);
});