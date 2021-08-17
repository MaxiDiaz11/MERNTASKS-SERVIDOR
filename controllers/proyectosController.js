const Proyecto = require('../models/Proyecto')

exports.crearProyecto = async(req, res) =>{

    try {
        //crear un nuevo proyecto
        const proyecto = new Proyecto(req.body);
        await proyecto.save();
        res.json(proyecto)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}