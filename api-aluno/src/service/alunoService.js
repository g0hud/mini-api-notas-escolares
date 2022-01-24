const alunoDAO = require('../dao/alunoDAO');

class AlunoService {

  async getAllGradesById(alunoDTO) {

    const alunoData = await alunoDAO.getAllById(alunoDTO);

    if(!alunoData) {
      return {
        error: true,
        message: 'Não encontramos: aluno(a) e/ou notas.'
      };
    }

    return alunoData;
  }
}

module.exports = new AlunoService();
