/**
 * Stage 4 - Desafio 2
  
 Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ X ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ X ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
 */

let students = [
    {
        name: "Roberto",
        firstGrade: 7,
        secondeGrade: 2
    },
    {
        name: "Felipe",
        firstGrade: 10,
        secondeGrade: 10
    },
    {
        name: "Maria Clara",
        firstGrade: 4,
        secondeGrade: 0
    },
    {
        name: "Juliana",
        firstGrade: 10,
        secondeGrade: 8.8
    }
];

function twoNumbersAverage(firstNumber, secondNumber) {
    return (firstNumber + secondNumber) / 2;
}

for (let student of students) {
    if (twoNumbersAverage(student.firstGrade, student.secondeGrade) >= 7) {
        alert(`Parabéns, ${student.name}! Sua média foi ${twoNumbersAverage(student.firstGrade, student.secondeGrade)}. Você passou no concurso!`);
    } else {
        alert(`Que pena, ${student.name}. Sua média foi ${twoNumbersAverage(student.firstGrade, student.secondeGrade)}. Você não passou, tente de novo na próxima.`);
    }
}