const express = require('express')
const router = express.Router()
const { getFacts, saveFact, removeFact } = require('./facts.controller')

router.get('/', getFacts)
router.post('/', saveFact)
router.delete('/:id', removeFact)

module.exports = router
