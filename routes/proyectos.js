const express = require('express');
const router = express.Router();
const proyectosController = require('../controllers/proyectosController')
const auth = require('../middleware/auth')
const { check } = require('express-validator')

//Crea proyectos
//api/proyectos
router.post('/', auth, [
    check('nombre', 'El nombre del proyecto es obligatorio').not().isEmpty()
], proyectosController.crearProyecto)

module.exports = router;