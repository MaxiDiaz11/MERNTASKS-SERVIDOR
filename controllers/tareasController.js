const Tarea = require('../models/Tarea')
const Proyecto = require('../models/Proyecto')
const { validationResult } = require('express-validator')

//crea una nueva tarea
exports.crearTarea = async (req, res) => {

    //revisar si hay errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() })
    }

    try {
        //extraer el proyecto y verificar si existe
        const { proyecto } = req.body;

        const existeProyecto = await Proyecto.findById(proyecto)
        if (!existeProyecto) {
            return res.status(404).json({ msg: 'Proyecto no encontrado' })
        }

        //revisar si el proyecto actual pertenece al usuario autenticado
        //verificar creador del proyecto
        if (existeProyecto.creador.toString() != req.usuario.id) {
            return res.status(401).json({ msg: 'No autorizado' })
        }

        //creamos la tarea
        const tarea = new Tarea(req.body)
        await tarea.save()
        res.status(200).json({ msg: 'Tarea agregada correctamente' });

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error en el servidor')
    }
}