const Usuario = require('../models/Usuario')
const bcryptjs = require('bcryptjs')

exports.crearUsuario = async (req, res) => {

    //extraer email y password
    const { email, password } = req.body;

    try {
        //Revisar que el usuario registrado sea unico
        let usuario = await Usuario.findOne({ email })

        if (usuario) {
            return res.status(400).json({ msg: 'El usuario ya existe' })
        }
        //crea nuevo usuario
        usuario = new Usuario(req.body);

        //Hashear el password
        const salt = await bcryptjs.genSalt(10);
        usuario.password = await bcryptjs.hash(password, salt)

        //guardar usuario
        await usuario.save();

        //mensaje de confirmacion
        res.status(200).json({ msg: 'Usuario creado correctamente' })
        console.log("usuario guardado")

    } catch (error) {
        console.log(error)
        res.status(400).send("Hubo un error")
    }
}