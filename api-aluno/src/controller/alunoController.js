const alunoService = require('../service/alunoService');
const notas = require('../service/notas');

class AlunoController {

  async getAll(req, res) {
    const { id } = req.params;

    if (id) {
      const alunoData = await alunoService.getAllGradesById(id)

      if (alunoData.error) {
        return res.status(400).json({
          alunoData
        })
      }

      const data = []

      for (let aluno of alunoData) {
        data.push({
          nome: aluno.nome,
          notas: notas.getGrades(aluno)
        })
      }

      return res.status(200).json(data);
    }

    return res.status(400).json({
      error: true,
      message: 'ID não indicado'
    });
  }
}

module.exports = new AlunoController();
