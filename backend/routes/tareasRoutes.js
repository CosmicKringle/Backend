const express = require('express')
const router = express.Router()
const {getTareas, createTareas, updateTareas, deleteTareas}=require('../Controllers/tareasController')

router.get('/', getTareas)
router.post('/', createTareas)

router.put('/:id', updateTareas)
router.put('/:id', deleteTareas)

module.exports = router
