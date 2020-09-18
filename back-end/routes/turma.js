const controller = require('../controllers/turma')
const express = require('express')

const router = express.Router()

router.post('/', controller.novo)
router.get('/', controller.listar)
router.get('/:id', controller.obterUm) // camelCase
router.put('/', controller.atualizar)
router.delete('/', controller.excluir)

module.exports = router