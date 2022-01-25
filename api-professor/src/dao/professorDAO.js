const db = require('../db/db');

class ProfessorDAO {

  async create(name) {

    const alunoData = await db('alunos')
      .select()
      .where('nome', name)
      .then((rows) => {
        if (rows.length === 0) {
          return db('alunos').insert({ 'nome': name }).returning("id")
        } else {
          return {
            error: true,
            message: "Aluno já cadastrado"
          }
        }
      })
      .catch((err) => {
        return {
          error: true,
          message: 'Erro ao conectar ao banco.',
          err
        }
      })

    return alunoData
  }
  async postGrades(aluno_id, n1, n2, n3, n4) {

    const gradeId = await db('notas')
      .insert({
        'aluno_id': aluno_id,
        'n1': n1,
        'n2': n2,
        'n3': n3,
        'n4': n4
      })
      .returning('id');

    return gradeId

  }

  async getAllById(id) {
    const aluno = await db.raw(`select a.nome, n.n1, n.n2, n.n3, n.n4
    from alunos a,
        notas n
    where a.id = n.aluno_id
    and a.id  = ?`, [id])

    return aluno.rows;
  }

  async getAll() {
    const allAlunos = await db.raw(`select a.nome,a.id, n.n1, n.n2, n.n3, n.n4
                            from alunos a,
                                notas n
                            where a.id = n.aluno_id`)

    return allAlunos.rows;
  }
}

module.exports = new ProfessorDAO();
