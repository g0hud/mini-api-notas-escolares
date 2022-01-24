const router = require('express').Router();

const alunoController = require('./controller/alunoController')

router.get('/aluno/:id', alunoController.getAll)

module.exports = router;
