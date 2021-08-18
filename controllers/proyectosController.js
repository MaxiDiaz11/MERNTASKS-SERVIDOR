const Proyecto = require('../models/Proyecto')

exports.crearProyecto = async (req, res) => {

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