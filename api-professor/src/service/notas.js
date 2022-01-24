
class Aprovacao {
  getGrades(gradesObj) {
    const { n1, n2, n3, n4 } = gradesObj;

    const notas = { n1, n2, n3, n4 };

    let newOBJ = {}

    for (let a in notas) {
      let nota = notas[a];
      var newValues = {
        nota: notas[a],
        aprovacao: ''
      }
      if (nota >= 6) {
        newValues.aprovacao = "Aprovado"
      }
      if (nota >= 4 && nota < 6) {
        newValues.aprovacao = "Recuperação";
      }
      if (nota < 4) {
        newValues.aprovacao = "Reprovado"
      }

      newOBJ[a] = newValues
    }

    return newOBJ;

  }
}

module.exports = new Aprovacao();
