const getTareas = (req, res) => {
    res.status(200).json({mesg: `getTareas ${req.params.id}`})
}

const createTareas = (req, res) => {
    res.status(201).json({mesg: `createTareas ${req.params.id}`})
}

const updateTareas = (req, res) => {
    res.status(200).json({mesg: `updateTareas ${req.params.id}`})
}

const deleteTareas = (req, res) => {
    res.status(200).json({mesg: `deleteTareas ${req.params.id}`})
}

module.exports = {getTareas, createTareas, updateTareas, deleteTareas}