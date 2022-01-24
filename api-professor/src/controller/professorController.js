const notas = require('../service/notas');
const professorService = require('../service/professorService');

class AlunoController {

  async createAluno(req,res) {
    const {name} = req.body;

    const alunoData = await professorService.createAluno({name});

    if(alunoData.error){
      return res.status(400).json(alunoData);
    }

    return res.status(200).json(alunoData);
  }

  async postGrades(req, res) {
    const data = req.body;

    if(
      data == null ||
      data.aluno_id == null ||
      data.n1 == null ||
      data.n2 == null ||
      data.n3 == null ||
      data.n4 == null
    ) {
      return res.status(400).json({
        error: true,
        message: 'Parâmetros invalidos.'
      })
    }

    const grades = await professorService.postGrades(data);

    if (grades.error) {
      return res.status(400).json(grades);
    }

    return res.status(200).json(grades);
  }

  async getAll(req, res) {
    const { id } = req.params;

    if (id) {
      const alunoData = await professorService.getAllGradesById(id)

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

    const alunosData = await professorService.getAll();

    if (alunosData.error) {
      return res.status(400).json(alunosData);
    }
    const data = []

    for (let alunoNotas of alunosData) {

        data.push({
          id:alunoNotas.id,
          nome: alunoNotas.nome,
          notas: notas.getGrades(alunoNotas)
        })

    }

    return res.status(200).json(data);
  }
}

module.exports = new AlunoController();
