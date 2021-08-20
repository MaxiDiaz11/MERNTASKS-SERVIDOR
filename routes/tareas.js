const express = require('express');
const router = express.Router();
const tareasController = require('../controllers/tareasController')
const auth = require('../middleware/auth')
const { check } = require('express-validator')

//crear tarea
//api/tareas
router.post('/', auth, [
    check('nombre', 'El nombre es obligatorio').not().isEmpty()
], tareasController.crearTarea)

//obtener tareas por proyecto
router.get('/', auth, tareasController.obtenerTareas)

module.exports = router;