const express = require('express');

const conectarDB = require('./config/db')

//crear el servidor
const app = express();

//conectar a la base de datos
conectarDB()

//Habilitar express.json
app.use(express.json({ extended: true }))

//PUERTO DE LA APP
const PORT = process.env.PORT || 4000;

//importar rutas
app.use('/api/usuarios', require('./routes/usuarios'))

//arrancar el servidor
app.listen(PORT, () => {
    console.log("desde el puerto: " + PORT)
})
