const router = require('express').Router();

const professorController = require('./controller/professorController')

router.post('/notas', professorController.postGrades)

router.post('/aluno', professorController.createAluno)

router.get('/notas-aluno/', professorController.getAll)
router.get('/notas-aluno/:id', professorController.getAll)

module.exports = router;
