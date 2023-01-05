/**
 * Stage 4 - Desafio 1 

Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ X ]  A soma dos dois números;
- [ X ]  A subtração dos dois números;
- [ X ]  A multiplicação dos dois números;
- [ X ]  A divisão dos dois números;
- [ X ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ X ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ X ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!
 */


alert("Vamos ao desafio 1!");

let firstNumber = Number(prompt("Digite o primeiro número: "));
let secondNumber = Number(prompt("Digite o segundo número: "));

// Verificando se os números são iguais ou diferentes

if (firstNumber === secondNumber) {
    alert("Os números escolhidos são iguais.");
} else {
    alert("Os números escolhidos são diferentes.");
}

// Operações

const sum = firstNumber + secondNumber;
const subtraction = firstNumber - secondNumber;
const multiplication = firstNumber * secondNumber;
const division = firstNumber / secondNumber;
const restOfDivision = firstNumber % secondNumber;

// Verificando se a soma é par ou ímpar

let isEven = (sum % 2) === 0;
let evenOrOdd;

if (isEven) {
    evenOrOdd = "par";
} else {
    evenOrOdd = "ímpar";
}

// Jogando na tela

alert(`
    A soma dos números é: ${sum}. E é ${evenOrOdd}.
    A subtração dos números é: ${subtraction}.
    A multiplicação dos números é: ${multiplication}.
    A divisão dos números é: ${division}.
    O resto da divisão dos números é: ${restOfDivision}.
`);