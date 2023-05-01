// -------- EXERCÍCIOS - Iniciando com JavaScript --------

// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert("Hello World!");

// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
let varOne = Number(prompt("Digite um número: "));
let varTwo = Number(prompt("Digite outro: "));
let sum = varOne + varTwo;
alert("A soma deles é: " + sum);

// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
let variableOne = 3;
typeof variableOne === "number" ? alert("É um número") : alert("Não é um número. É: " + typeof variableOne);

// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
let variableTwo = "text";
typeof variableTwo == "string" ? alert("É uma String") : alert("Não é uma String. É " + typeof variableTwo);

// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
let variableThree = true;
typeof variableTwo == "boolean" ? alert("É um booleano") : alert("Não é um booleano. É " + typeof variableTwo);

// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
let varThree = Number(prompt("Digite um número: "));
let varFour = Number(prompt("Digite outro: "));
let sub = varThree - varFour;
alert("A subtração deles é: " + sub);

// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
let a = Number(prompt("Digite um número: "));
let b = Number(prompt("Digite outro: "));
let times = a * b;
alert("A multiplicação deles é: " + times);

// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
let c = Number(prompt("Digite um número: "));
let d = Number(prompt("Digite outro: "));
let division = c / d;
alert("A divisão deles é: " + division);

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
alert("Vamos ver se é par? Vamos");
let x = Number(prompt("Digite um número: "));
x % 2 === 0 ? alert("É um número par") : alert("Não é um número par");

// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
alert("Vamos ver se é par? Vamos");
let y = Number(prompt("Digite um número: "));
y % 2 !== 0 ? alert("É um número ímpar") : alert("Não é um número ímpar");