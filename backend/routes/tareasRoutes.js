const express = require('express')
const router = express.Router()
const {getTareas, createTareas, updateTareas, deleteTareas}=require('../Controllers/tareasController')

router.get('/', getTareas)
router.post('/', createTareas)

router.put('/:id', updateTarea)
router.put('/:id', deleteTarea)

module.exports = router
