const express = require('express');
const router = express.Router();
const proyectosController = require('../controllers/proyectosController')
const auth = require('../middleware/auth')

//Crea proyectos
//api/proyectos
router.post('/', auth, proyectosController.crearProyecto)

module.exports = router;