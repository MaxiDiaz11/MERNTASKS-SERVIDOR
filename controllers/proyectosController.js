const Proyecto = require('../models/Proyecto')
const { validationResult } = require('express-validator')

exports.crearProyecto = async (req, res) => {
    //revisar si hay errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() })
    }

    try {
        //crear un nuevo proyecto
        const proyecto = new Proyecto(req.body);

        //guardar el creador via jwt
        proyecto.creador = req.usuario.id

        //guardar el proyecto
        await proyecto.save();
        res.status(200).json({ msg: 'proyecto creado correctamente' })
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}