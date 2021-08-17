const express = require('express');
const router = express.Router();
const proyectosController = require('../controllers/proyectosController')

//Crea proyectos
//api/proyectos
router.post('/', proyectosController.crearProyecto)

module.exports = router;