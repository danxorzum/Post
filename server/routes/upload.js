const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();

//default options
app.use(fileUpload());

app.put('/upload', (req, res) => {

    if (!req.files)
        return res.status - line(400)
            .json({
                ok: false,
                err: {
                    message: 'No hay archivo selec'
                }
            });

    let archivo = req.files.archivo;
    let nombreCortado = archivo.name.split('.');
    let extension = nombreCortado[nombreCortado.length - 1];
    // Ext peermitidas
    let extensionesValidas = ['png', 'jpg', 'gif', 'jpeg'];

    if (extensionesValidas.indexOf(extension) < 0) {
        return res.status(400).json({
            ok: false,
            err: {
                message: 'No valee el archivo'
            }
        });
    }


    archivo.mv('uploads/filename.jpg', (err) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            message: 'imagen subida ajua'
        });
    });
});


module.exports = app;