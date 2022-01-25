const professorDAO = require('../dao/professorDAO');

class ProfessorService {

  async createAluno(alunoDTO) {
    const {name} = alunoDTO;

    const alunoData = await professorDAO.create(name);

    if(alunoData.error) {
      return alunoData;
    }

    return alunoData;
  }

  async postGrades(alunoDTO) {
    const {aluno_id, n1,n2,n3,n4} = alunoDTO;

    const alunoData = await professorDAO.postGrades(aluno_id, n1, n2, n3, n4);

    if(!alunoData) {
      return {
        error: true,
        message: 'Erro ao inserir notas.'
      }
    }

    return alunoData;
  }

  async getAllGradesById(professorDTO) {
    const id = professorDTO;

    const professorData = await professorDAO.getAllById(id);

    if(!professorData) {
      return {
        error: true,
        message: 'Professor(a) não encontrado(a).'
      };
    }

    return professorData;
  }

  async getAll() {
    const allData = await professorDAO.getAll();

    if(!allData) {
      return {
        error: true,
        message: 'Erro ao buscar notas dos alunos'
      }
    }

    return allData;
  }
}

module.exports = new ProfessorService();
