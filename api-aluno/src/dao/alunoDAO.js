const db = require('../db/db');

class AlunoDAO {

  async getAllById(id) {
    const aluno = await db.raw(`select a.nome, n.n1, n.n2, n.n3, n.n4
    from alunos a,
        notas n
    where a.id = n.aluno_id
    and a.id  = ?`, [id])

    return aluno.rows;
  }
}

module.exports = new AlunoDAO();
