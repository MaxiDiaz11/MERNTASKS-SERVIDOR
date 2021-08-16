const Usuario = require('../models/Usuario')

exports.crearUsuario = async (req, res) => {
    try {
        let usuario;
        //crea nuevo usuario
        usuario = new Usuario(req.body);

        //guardar usuario
        await usuario.save();

        //mensaje de confirmacion
        res.send("Usuario creado correctamente")
        console.log("usuario guardado")
        
    } catch (error) {
        console.log(error)
        res.status(400).send("Hubo un error")
    }
}